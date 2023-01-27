export type ProductType = {
    product_key: number
    product_code: string
    product_description: string
    category_key: string
    subcategory_key: string
    product_cash_payment_value: number
    product_deferred_payment_value: number
    product_purchase_value: number
    product_status: "A" | "I"
    product_date: string
    product_update_date: string
    category_description: string
    subcategory_description: string
}
