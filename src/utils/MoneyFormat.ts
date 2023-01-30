export default function MoneyFormat(number: number): string {
    return `R$ ${number.toFixed(2).toString().replace('.', ',')}`
}