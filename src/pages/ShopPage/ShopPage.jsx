import { Card } from "../../components/Card/Card.jsx"
import { pokemons } from "../../data/data.js"

export function ShopPage(){
    return(
        <div>
            <h1>This is the Shop Page</h1>
            {pokemons.map(item => <Card key={item.id} props={item}/>)}
        </div>
    )
}