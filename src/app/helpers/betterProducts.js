import prisma from "@db/db"

class acquisitionType {
    constructor(type, id, qtd) {
        this.type = type
        this.id = id
        this.qtd = qtd
    }
  }

function isHamburguer(item) {
    let bool = false
    if(item.hasOwnProperty('hamburguerId')) {
        bool = true
    }

    return bool
}

const betterProducts = async () => {
    const allAcquisitions = []
    const acquisitionCombo = await prisma.acquisitionCombo.findMany()
    const acquisitionHamburguer = await prisma.acquisitionHamburguer.findMany()

    allAcquisitions.push(...acquisitionCombo)
    allAcquisitions.push(...acquisitionHamburguer)

    const countAcquisitions = []
    const countedAcquisitions = []
    allAcquisitions.forEach((acquisition) => {
        if(isHamburguer(acquisition)) {
            if(countedAcquisitions.some(a => a.hamburguerId === acquisition.hamburguerId)) {
                countAcquisitions.forEach((countAcquisition) => {
                    if(countAcquisition.id == acquisition.hamburguerId && countAcquisition.type === "hamburguer") {
                        countAcquisition.qtd = acquisition.qtd + 1
                    }
                })
            } else {
                countedAcquisitions.push(acquisition)
                countAcquisitions.push(new acquisitionType("hamburguer", acquisition.hamburguerId, 1))
            }
        } else {
            if(countedAcquisitions.some(a => a.comboId === acquisition.comboId)) {
                countAcquisitions.forEach((countAcquisition) => {
                    if(countAcquisition.id == acquisition.comboId && countAcquisition.type === "combo") {
                        countAcquisition.qtd = acquisition.qtd + 1
                    }
                })
            } else {
                countedAcquisitions.push(acquisition)
                countAcquisitions.push(new acquisitionType("combo", acquisition.comboId, 1))
            }
        }
    })

    return countAcquisitions
}

module.exports = betterProducts