import CardHeader from "../CardHeader";
import Product from "../Product";
import CardFooter from "../CartFooter";

import data from "./../../data";
import { useEffect, useState } from "react";



const Cart = () => {
    const [cart, setCart] = useState(data);
    const [total, setTotal] = useState({
        price: cart.reduce((prev, curr) => {return prev + curr.priceTotal}, 0),
        count: cart.reduce((prev, curr) => {return prev + curr.count}, 0)
    })

    useEffect(()=> {
        setTotal({
            price: cart.reduce((prev, curr) => {return prev + curr.priceTotal}, 0),
            count: cart.reduce((prev, curr) => {return prev + curr.count}, 0)
        })
    }, [cart])
    
    const deleteProduct = (id) => {
        setCart((cart)=> cart.filter((product)=> id !== product.id ))
    }

    const increase = (id) => {

        setCart((cart)=>{
            return cart.map((product)=>{
                if(product.id === id) {
                    return {
                        ...product,
                        count: ++product.count,
                        priceTotal: product.count * product.price
                    }                    
                }
                return product
            })
        })
    }

    const decrease = (id) => {

        setCart((cart)=>{
            return cart.map((product)=>{
                if(product.id === id) {
                    return {
                        ...product,
                        count: product.count - 1 > 0 ? --product.count : 1,
                        priceTotal: product.count * product.price
                    }                    
                }
                return product
            })
        })
    }

    const changeCount = (id, value) => {
        setCart((cart)=>{
            return cart.map((product)=>{
                if(product.id === id) {
                    return {
                        ...product,
                        count: value,
                        priceTotal: value * product.price
                    }                    
                }
                return product
            })
        })
    }




    const products = cart.map((prod) => {
        return <Product 
            product={prod} 
            key={prod.id} 
            deleteProduct={deleteProduct} 
            increase={increase} 
            decrease={decrease}
            changeCount={changeCount} 
            />;
    })


    return ( 
        <section className="cart">
            <CardHeader/>
            {products}
            <CardFooter total={total} />
    </section>
     );
}
 
export default Cart;