import dayjs from 'dayjs'

// Retorna true se a diferença de dias de hoje e a data passada na função for menor ou igual ao numero de dias passado na função
const noMaximoXDiasAtras = (dataComparar: Date, dias: number) => {
  const hoje = dayjs()
  const data = dayjs(dataComparar)

  const diferencaDias = hoje.diff(data, 'day')

  return diferencaDias >= 0 && diferencaDias <= dias
}

module.exports = noMaximoXDiasAtras