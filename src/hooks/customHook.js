import { useState } from "react";

export function usePokemonData() {
    const [addedToCart, setCart] = 
        useState([
            { key: "bulbasaur", value: 0 },
            { key: "charmander", value: 0 },
            { key: "mudkip", value: 0 },
            { key: "snivy", value: 0 },
            { key: "froakie", value: 0 },
            { key: "mewtwo", value: 0 },
            { key: "lugia", value: 0 },
            { key: "rayquaza", value: 0 },
            { key: "groudon", value: 0 },
            { key: "kyogre", value: 0 },
            { key: "pikachu", value: 0 },
            { key: "eevee", value: 0 },
            { key: "gengar", value: 0 },
            { key: "lucario", value: 0 },
            { key: "snorlax", value: 0 },
            { key: "dragonite", value: 0 },
            { key: "tyranitar", value: 0 },
            { key: "garchomp", value: 0 },
            { key: "metagross", value: 0 },
            { key: "salamence", value: 0 },
        ])

    function handleAddToCart(amount, pokemon){
        const newArray = [];
        for( let i = 0; i < addedToCart.length; i++){
            if(pokemon === addedToCart[i].key){
                addedToCart[i].value = addedToCart[i].value + amount;
            }
            newArray.push(addedToCart[i])
        }
        setCart(newArray)
    }

    function handleRemoveToCart(pokemon){
        const newArray = [];
        for( let i = 0; i < addedToCart.length; i++){
            if(pokemon === addedToCart[i].key){
                addedToCart[i].value = 0;
            }
            newArray.push(addedToCart[i])
        }
        setCart(newArray)
    }

    function handleDecrease(pokemon){
        const newArray = [];
        for( let i = 0; i < addedToCart.length; i++){
            if(pokemon === addedToCart[i].key){
                addedToCart[i].value = addedToCart[i].value - 1;
            }
            newArray.push(addedToCart[i])
        }
        setCart(newArray)
    }

    function handleIncrease(pokemon){
        const newArray = [];
        for( let i = 0; i < addedToCart.length; i++){
            if(pokemon === addedToCart[i].key){
                addedToCart[i].value = addedToCart[i].value + 1;
            }
            newArray.push(addedToCart[i])
        }
        setCart(newArray)
    }

    return { addedToCart, handleAddToCart, handleRemoveToCart, handleIncrease, handleDecrease }
}
