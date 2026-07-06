
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
 
