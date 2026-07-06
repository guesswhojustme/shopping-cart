import { Card } from "../../components/Card/Card.jsx"
import { useOutletContext } from "react-router-dom"
import styles from './CartPage.module.css';
import { starters } from "../../data/data.js";

export function CartPage(){
    const { addedToCart, handleRemoveToCart, handleIncrease, handleDecrease} = useOutletContext();

    function renderAddedToCart(){
        const cards = [];
        for( let i = 0; i < addedToCart.length; i++ ){
            if(addedToCart[i].value > 0){
                cards.push(<Card key={addedToCart[i].key} 
                    pokemon={addedToCart[i].key} 
                    removeToCart={handleRemoveToCart} 
                    addedToCartValue={addedToCart[i].value} 
                    page={'cart'}
                    handleDecreaseState={handleDecrease}
                    handleIncreaseState={handleIncrease}
                    />)
            }
        }
        return cards;
    }

    const render = renderAddedToCart();
    return(
        <div className={styles.container}>
            <h1>Your Cart</h1>
            <div className={styles.cardsContainer}>
            {render.map(item => item)}
            </div>
        </div>
    )
}