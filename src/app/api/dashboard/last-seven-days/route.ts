import { NextResponse, NextRequest } from "next/server"

//helpers
const getUserByToken = require('../../../helpers/get-user-by-token')
const getToken = require('../../../helpers/get-token')
const lastSevenDaysSales = require('src/app/helpers/lastSevenDaysSales')

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
        const lastSevenDaysSalesList = await lastSevenDaysSales()

        if(lastSevenDaysSalesList.length <= 0) {
            return NextResponse.json(
                {
                    message: "não existe produtos vendidos nos ultimos 7 dias"
                },
                {
                    status: 404
                }
            )
        }
        return NextResponse.json({message: "OK", lastSevenDaysSalesList})
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