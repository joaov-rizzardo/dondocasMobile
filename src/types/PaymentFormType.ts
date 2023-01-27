export type PaymentFormType = {
    payment_key: number
    payment_description: string
    payment_discount_percent: number
    payment_type: "V" | "P"
}