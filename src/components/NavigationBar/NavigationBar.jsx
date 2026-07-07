import { Link, useOutletContext } from "react-router-dom";
import styles from './NavigationBar.module.css';
import { useState } from "react";

export function NavigationBar({addedToCart}){
    function addedToCartNumber(){
        let count = 0;
        for( let i = 0; i < addedToCart.length; i++ ){
            if(addedToCart[i].value > 0){
                count += addedToCart[i].value
            }
        }
        return count;
    }
    return(
        <div className={styles.navBar}>
            <div >
                <Link to='/' className={styles.text}>Home</Link>
            </div>
            <div >
                <Link to='shop' className={styles.text}>Shop</Link>
            </div>
            <div >
                <Link to='cart' className={styles.cartStyle}>Cart <p className={styles.cartNum}>{addedToCartNumber()}</p></Link>
            </div>
        </div>
    )
}