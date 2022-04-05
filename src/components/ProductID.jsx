import React,{useContext} from "react"
import ProductTab from "./ProductTab"
import { useParams } from "react-router-dom"
import { productContext } from "../index"

export default function ProductionID(){
    const {productId} = useParams();
    const {products} = useContext(productContext);

    function mapProducts(){
        let [filteredProduct] = products.filter(product => 
            productId === product.id

        )
        return filteredProduct;
    }

    

    return(
                
        <ProductTab toggleLink={false} product={mapProducts()}/>
            
    )
}


