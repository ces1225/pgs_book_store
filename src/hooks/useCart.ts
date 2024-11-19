import { useEffect, useState } from "react"
import { Cart } from "../models/cart.model"
import { deleteCart, fetchCart } from "../api/carts.api";

export const useCart = () => {
    const [carts, setCarts] = useState<Cart[]>([]);
    const [isEmpty , setIsEmpty] = useState(true);

    const deleteCartItem = (id : number) => {
        deleteCart(id).then(()=>{
            // 받아온 카트 id를 제거하니까, cart 안의 id들 중 받아온 카트 id를 제외한 나머지를 내보냄.
            setCarts(carts.filter((cart) => cart.id !== id))
        });
    }

    useEffect(() => {
        fetchCart().then((carts) =>{
            setCarts(carts);
            setIsEmpty(carts.length === 0);
        })
    },[])

    return {carts , isEmpty, deleteCartItem};
}