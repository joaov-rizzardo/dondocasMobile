import { createContext, ReactNode } from "react";
import useBootstrap from "../hooks/useBootstrap";
import { CategoryType, SubcategoryType } from "../types/CategoryType";
import { ColorType } from "../types/ColorsType";
import { PaymentFormType } from "../types/PaymentFormType";
import { ProductType } from "../types/ProductType";

type ContextType = {
    products: ProductType[]
    categories: CategoryType[]
    subcategories: SubcategoryType[]
    colors: ColorType[]
    paymentForms: PaymentFormType[]
    loadingBootstrap: boolean
}

const BootstrapContext = createContext({} as ContextType)

function BootstrapProvider({children}: {children: ReactNode}){

    const bootstrapData = useBootstrap()

    return (
        <BootstrapContext.Provider value={bootstrapData}>
            {children}
        </BootstrapContext.Provider>
    )
}

export {BootstrapProvider, BootstrapContext}