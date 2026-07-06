import { Card } from "../../components/Card/Card.jsx"
import { starters, legendary, fanFavorites, championPicks } from "../../data/data.js"
import styles from './ShopPage.module.css';
import { useOutletContext } from "react-router-dom";

export function ShopPage(){
    const { handleAddToCart } = useOutletContext();
    return(
        <div className={styles.container}>
            <h1>Pokemons</h1>
            <div className={styles.categoryWrapper}>
                <span>Starters: </span>
                <div className={styles.pokemonWrapper}>
                    {starters.map(item => <Card key={item.id} pokemon={item} addToCart={handleAddToCart}/>)}
                </div>
            </div>
            <div className={styles.categoryWrapper}>
                <span>Legendary: </span>
                <div className={styles.pokemonWrapper}>
                    {legendary.map(item => <Card key={item.id} pokemon={item} addToCart={handleAddToCart}/>)}
                </div>
            </div>
            <div className={styles.categoryWrapper}>
                <span>Fan Favorites: </span>s
                <div className={styles.pokemonWrapper}>
                    {fanFavorites.map(item => <Card key={item.id} pokemon={item} addToCart={handleAddToCart}/>)}
                </div>
            </div>
            <div className={styles.categoryWrapper}>
                <span>Champion's Picks: </span>
                <div className={styles.pokemonWrapper}>
                    {championPicks.map(item => <Card key={item.id} pokemon={item} addToCart={handleAddToCart}/>)}
                </div>
            </div>
        </div>
    )
}