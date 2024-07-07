import rulesForPay from 'src/locales/rulesForPay.json'

export const useModalPay = () => {
  const [[category, rules]] = Object.entries(rulesForPay)

  return { category, rules }
}
