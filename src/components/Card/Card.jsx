import { array } from 'prop-types';
import styles from './Card.module.css';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

export function Card({pokemon}){
    const [pokemonData, setPokemonData] = useState({ 
                                        id: 132,
                                        name: 'ditto',
                                        type: ['normal'],
                                        weight: 40,
                                        height: 3,
                                        hp: 48,
                                        price: '$0',
                                        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
                                    })
                                 
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
                const response = await data.json();
                
                function pokemonType(type){
                    if(type.length > 1){
                        const arr = [type[0].type.name, type[1].type.name];
                        return arr
                    } else {
                        const arr = [type[0].type.name] 
                        return arr        
                    }
                }
                setPokemonData({ 
                    id: response.id,
                    name: response.name,
                    type: pokemonType(response.types),
                    weight: response.weight,
                    height: response.height,
                    hp: response.stats[0].base_stat,
                    price: `${response.stats[0].base_stat * 1.5}$`,
                    img: response.sprites.other["official-artwork"].front_default
                })
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [pokemon])

    function capitalize(name){
        return name.charAt(0).toUpperCase() + name.slice(1)
    }

    return(
        <div>
            <div className={styles.price}>
                <span>PRICE: </span>
                <p>{pokemonData.price}</p>
            </div>
            <div className={styles.container}>
                <div>
                    <div className={styles.imgContainer}>
                        <img src={pokemonData.img} alt={pokemonData.name}/>
                    </div>
                    <div>
                        <span>{capitalize(pokemonData.name)}</span>
                        <span>#{pokemonData.id}</span>
                    </div>
                </div>
                <div>
                    <div>
                        <div className={styles.type}>
                            <span>type:</span>
                            {pokemonData.type.length === 1 ? (
                             <div className={styles[pokemonData.type[0]]}>
                              {capitalize(pokemonData.type[0])}
                             </div>
                            ) : <>
                            <div className={styles[pokemonData.type[0]]}>
                              {capitalize(pokemonData.type[0])}
                             </div>
                             <div className={styles[pokemonData.type[1]]}>
                              {capitalize(pokemonData.type[1])}
                             </div>
                            </>}
                        </div>
                        <div>
                            <span>hp:</span>
                           <p>{pokemonData.hp}</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <span>weight:</span>
                            <p>{`${pokemonData.weight / 10} kg`}</p>
                        </div>
                        <div>
                            <span>height:</span>
                            <p>{`${pokemonData.height * 10} cm`}</p>
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

// Card.propTypes = {
//     props: PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         name: PropTypes.string.isRequired,
//         type: PropTypes.array.isRequired,
//         weight: PropTypes.number.isRequired,
//         height: PropTypes.number.isRequired,
//         hp: PropTypes.number.isRequired,
//         price: PropTypes.string.isRequired,
//     }).isRequired,
// }
