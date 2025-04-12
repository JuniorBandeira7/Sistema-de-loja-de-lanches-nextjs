import { NextResponse, NextRequest } from "next/server"

//helpers
const getUserByToken = require('../../../helpers/get-user-by-token')
const getToken = require('../../../helpers/get-token')
const betterProducts = require('src/app/helpers/betterProducts')

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
        const betterProductsList = await betterProducts()

        if(!betterProductsList) {
            return NextResponse.json(
                {
                    message: "não existe produtos vendidos"
                },
                {
                    status: 404
                }
            )
        }
        return NextResponse.json({message: "OK", betterProductsList})
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