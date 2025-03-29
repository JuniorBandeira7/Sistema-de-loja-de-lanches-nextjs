import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcryptjs'
//import jwt from 'jsonwebtoken'

import prisma from "@db/db"

// helpers
const createUserToken = require('../../../helpers/create-user-token')
const isTheFieldEmpty = require('../../../helpers/is-the-field-empty')

export async function POST(req: Request){
    const {email, password} = await req.json()

    // validações
    const [isEmpty, message] = isTheFieldEmpty({email, password}, ["email", "password"])
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
    const user = await prisma.user.findUnique({
        where: {
          email: email,
        },
      })
      if(!user){
        return NextResponse.json(
            {
                message: 'Credenciais incorretas'
            },
            {
                status: 422
            }
        )
    }

    //check if password match
    const checkPassword = await bcrypt.compare(password, user.password)
    if(!checkPassword){
        return NextResponse.json(
            {
            message: 'password não corresponde'
            },
            {
                status: 422
            }
        )
    }

    // Criar token
    const token = await createUserToken(user)

    return Response.json({message: "ok", user, token})
}

