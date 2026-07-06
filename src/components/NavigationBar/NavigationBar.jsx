import { Link, useOutletContext } from "react-router-dom";
import styles from './NavigationBar.module.css';
import { useState } from "react";

export function NavigationBar({addedToCart}){
    const [count, setCount] = useState(1);

    function handleClick(num){
        setCount(num);
    }
    return(
        <div className={styles.navBar}>
            <div className={count === 1 ? styles.navActive : null}>
                <Link to='/' className={styles.text} onClick={() => handleClick(1)}>Home</Link>
            </div>
            <div className={count === 2 ? styles.navActive : null}>
                <Link to='shop' className={styles.text} onClick={() => handleClick(2)}>Shop</Link>
            </div>
            <div className={count === 3 ? styles.navActive : null}>
                <Link to='cart' className={styles.cartStyle} onClick={() => handleClick(3)}>Cart <p className={styles.cartNum}>{addedToCart}</p></Link>
            </div>
        </div>
    )
}