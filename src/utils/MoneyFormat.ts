export default function MoneyFormat(number: number): string {
    return `R$ ${number.toString().replace('.', ',')}`
}