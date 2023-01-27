import { PaymentFormType } from './../types/PaymentFormType';
import { ColorType } from './../types/ColorsType';
import { SubcategoryType } from './../types/CategoryType';
import { useState } from 'react';
import { useEffect } from 'react';
import backendApi from '../services/backendApi';
import { CategoryType } from '../types/CategoryType';
import { ProductType } from '../types/ProductType';

export default function useBootstrap(){

    const [loadingBootstrap, setLoadingBootstrap] = useState<boolean>(false)
    const [products, setProducts] = useState<ProductType[]>([])
    const [categories, setCategories] = useState<CategoryType[]>([])
    const [subcategories, setSubcategories] = useState<SubcategoryType[]>([])
    const [colors, setColors] = useState<ColorType[]>([])
    const [paymentForms, setPaymentForms] = useState<PaymentFormType[]>([])

    async function getProducts(){
        try {
            const {data} = await backendApi.get<ProductType[]>('product/get')
            setProducts(data)
        }catch(error){
            console.log(error)
        }
    }

    async function getCategories(){
        try{
            const {data} = await backendApi.get<CategoryType[]>('category/get')
            setCategories(data)
        }catch(error){
            console.log(error)
        }
    }

    async function getSubcategories(){
        try{
            const {data} = await backendApi.get<SubcategoryType[]>('subcategory/get')
            setSubcategories(data)
        }catch(error){
            console.log(error)
        }
    }

    async function getColors(){
        try{
            const {data} = await backendApi.get<ColorType[]>('colors/get')
            setColors(data)
        }catch(error){
            console.log(error)
        }
    }

    async function getPaymentForms(){
        try{
            const {data} = await backendApi.get<PaymentFormType[]>('payment/get')
            setPaymentForms(data)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {

        setLoadingBootstrap(true)
        
        const arrPromises = [
            getProducts(),
            getCategories(),
            getSubcategories(),
            getColors(),
            getPaymentForms()
        ]

        Promise.all(arrPromises).then(() => {
            setLoadingBootstrap(false)
        })
    }, [])

    return {loadingBootstrap, products, categories, subcategories, colors, paymentForms}
}