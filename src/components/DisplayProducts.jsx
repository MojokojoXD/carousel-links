// @ts-nocheck
import React ,{useState, useEffect,useRef} from "react"
import ProductTab from "./ProductTab";

function DisplayProducts({products}){
    const [carousel, setCarousel] = useState('');
    const [count, setCount] = useState(0)
    
    const productBox = useRef(null);

    
    useEffect(()=> {
        if(count < products.length){
            let timerId;
           let timerID1 = setTimeout(()=>{
              timerId = setTimeout(()=>{setCount(state => {
               return state + 1;
           });
            setCarousel(products[count])},2000)
            productBox.current.classList.toggle("extend");
        }, 1000)

           
            return () => {
                clearTimeout(timerId);
                clearTimeout(timerID1)
            }
           }

        else setCount(0)
   },[count,carousel,products])

   
   
    return(       
            <div className="products">
                <div ref={productBox} className='wrapper'>
                    <ProductTab toggleLink={true} 
                    product={carousel}/>
                </div>
            </div>
    )
    
}

export default DisplayProducts;