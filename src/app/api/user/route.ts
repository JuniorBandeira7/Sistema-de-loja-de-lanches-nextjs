import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcryptjs'
//import jwt from 'jsonwebtoken'

import prisma from '@db/db'

// helpers
const createUserToken = require('../../helpers/create-user-token')
const isTheFieldEmpty = require('../../helpers/is-the-field-empty')

export async function POST(req: Request){
    const {name, email, password} = await req.json()

    // validações
    const [isEmpty, message] = isTheFieldEmpty({name, email, password}, ["name", "email", "password"])
    if (isEmpty){
        return NextResponse.json(
            {
                message: message
            },
            {
                status: 422
            }
        )
    }

    // Verificar se usuario já existe
    const userExists = await prisma.user.findUnique({
        where: {
          email: email,
        },
      });

    if(userExists){
        return NextResponse.json(
            {
                message: 'Email já cadastrado'
            },
            {
                status: 422
            }
        )
    }

    // Criar password com criptografia
    const salt = await bcrypt.genSalt(12)
    const passwordHash = await bcrypt.hash(password, salt)
    
    try {
        const user = await prisma.user.create({
            data:{
                name,
                email,
                password: passwordHash,
                admin: false
            }
        })
        
        const token = await createUserToken(user)
        return Response.json({message: "ok", user, token}) 
    } catch (error) {
        return NextResponse.json(
            {
                message: "Error",
                error,
            },
            {
                status: 500
            }
        )
    }
}