import prisma from "@db/db"
import { Decimal } from "@prisma/client/runtime/library"

const noMaximoXDiasAtras = require("src/app/utils/noMaximoXDiasAtras")

const lastSevenDaysSales = async () => {
    const acquisitions: { id: number; finished: boolean; price: Decimal; date: Date; userId: number }[] = []
    const allAcquisitions = await prisma.acquisition.findMany()

    allAcquisitions.forEach((acquisition) => {
        if(noMaximoXDiasAtras(acquisition.date, 7)) {
            acquisitions.push(acquisition)
        }
    })

    return acquisitions
}

module.exports = lastSevenDaysSales
