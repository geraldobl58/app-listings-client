export function formattedDate(date) {
  const currentDate = new Date(date)

  const months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outrubro',
    'Novembro',
    'Dzembro'
  ]

  const currentDay = currentDate.getDate()
  const currentMonth = currentDate.getMonth()
  const currentYear = currentDate.getFullYear()

  return `${currentDay} de ${months[currentMonth]} de ${currentYear}`
}
