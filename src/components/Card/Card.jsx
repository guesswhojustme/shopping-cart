import { array } from 'prop-types';
import styles from './Card.module.css';

export function Card({props}){
    const { id, name, type, weight, height, hp, price} = props;
    
    function capitalize(name){
        return name.charAt(0).toUpperCase() + name.slice(1)
    }

    return(
        <div>
            <div className={styles.price}>
                <span>PRICE: </span>
                <p>{price}</p>
            </div>
            <div className={styles.container}>
                <div>
                    <div className={styles.imgContainer}>
            
                    </div>
                    <div>
                        <span>{name.charAt(0).toUpperCase() + name.slice(1)}</span>
                        <span>#{id}</span>
                    </div>
                </div>
                <div>
                    <div>
                        <div className={styles.type}>
                            <span>type:</span>
                            {type.length === 1 ? (
                             <div className={styles[type[0].type.name]}>
                              {type[0].type.name}
                             </div>
                            ) : <>
                            <div className={styles[type[0].type.name]}>
                              {capitalize(type[0].type.name)}
                             </div>
                             <div className={styles[type[1].type.name]}>
                              {capitalize(type[1].type.name)}
                             </div>
                            </>}
                        </div>
                        <div>
                            <span>hp:</span>
                           <p>{hp}</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <span>weight:</span>
                            <p>{weight}</p>
                        </div>
                        <div>
                            <span>height:</span>
                            <p>{height}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.cardBtns}>
                <div>
                    <input type="text" placeholder='amount'/>
                    <span>+</span>
                </div>
                <div>
                    <button>
                        add to cart
                        <img src="shopping_cart.svg" alt="cart" />
                    </button>
                </div>
            </div>
        </div>
    )
}