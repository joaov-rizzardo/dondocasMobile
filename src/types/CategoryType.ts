export type CategoryType = {
    category_key: number
    category_description: string
    category_status: "A" | "I"
    category_date: string
}

export type SubcategoryType = {
    subcategory_key: number
    category_key: number
    subcategory_description: string
    subcategory_status: 'A' | 'I'
    subcategory_date: string
}