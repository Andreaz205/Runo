import React from 'react';
import {NextPage} from "next";
import Cart from "../app/components/ui/Cart/Cart";
import dynamic from "next/dynamic";

const DynamicCartItem = dynamic(import('../app/components/ui/Cart/Cart'), {
    ssr: false
})

const CartPage:NextPage= () => {
    return (
        <DynamicCartItem />
    );
};

export default CartPage;