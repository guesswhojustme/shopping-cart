import styles from './HomePage.module.css';
import { Link } from 'react-router-dom';

export function HomePage(){
    return(
        <div className={styles.container}>
            <h1>We sell Pokemons</h1>
            <div className={styles.mid}>
                <span>Catch em all? ❌ Buy em all? ✅</span>
                <div>
                    <p>Tired of wasting pokeballs and walking around grasses to catch pokemon?</p>
                    <p>Dont worry we got you!</p>
                </div>
                <span><strong>Buy now!</strong></span>
            </div>
        </div>
    )
}