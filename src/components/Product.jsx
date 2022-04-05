// @ts-nocheck
import React,{useEffect, useState,useContext} from "react"
import axios from 'axios';
import DisplayProducts from './DisplayProducts';
import {productContext} from '../index'


function Products(){
    const [products, setProducts] = useState([]);
    const setContext = useContext(productContext)

    

    useEffect(()=>{
            async function getProducts() {
            try {
                const { data } = await axios.get(
                "https://practiceapi.devmountain.com/products"
                );

                setProducts([...data]);
            } catch (error) {
                console.log(error);
                }
            }

            getProducts();
    },[])

    useEffect(()=>{setContext.products = products},[products,setContext])

    return(
        <>
            <h1>Products</h1>
            <DisplayProducts products={products}/>
        </>
    )
}


export {Products as default};