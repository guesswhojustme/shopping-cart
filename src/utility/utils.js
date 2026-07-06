import { useState } from "react";

export function capitalize(name){
    return name.charAt(0).toUpperCase() + name.slice(1)
}

export function pokemonType(type){
    if(type.length > 1){
        const arr = [type[0].type.name, type[1].type.name];
        return arr
    } else {
        const arr = [type[0].type.name] 
        return arr        
    }
}
 
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
    
      function handleCartChange(amount, pokemon){
        const newArray = [];
        for( let i = 0; i < addedToCart.length; i++){
           if(pokemon === addedToCart[i].key){
              addedToCart[i].value = addedToCart[i].value + amount;
           }
           newArray.push(addedToCart[i])
        }
        setCart(newArray)
      }
    
      return { addedToCart, setCart, handleCartChange }
}