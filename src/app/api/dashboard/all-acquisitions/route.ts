import prisma from "@db/db"
import { NextResponse, NextRequest } from "next/server"

//helpers
const getUserByToken = require('../../../helpers/get-user-by-token')
const getToken = require('../../../helpers/get-token')

export async function GET(req: NextRequest) {
    const token = getToken(req)
    const tokenUser = await getUserByToken(token)

    if(!tokenUser.admin) {
        return NextResponse.json(
            {
                message: "Acesso negado!"
            },
            {
                status: 422
            }
        )
    }

    try {
        const acquisitions = await prisma.acquisition.findMany()

        if(!acquisitions) {
            return NextResponse.json(
                {
                    message: "não existe vendas cadastradas"
                },
                {
                    status: 404
                }
            )
        }
        return NextResponse.json({message: "OK", acquisitions})
    } catch (error) {
        return NextResponse.json(
            {
                error
            },
            {
                status: 500
            }
        )
    }
}