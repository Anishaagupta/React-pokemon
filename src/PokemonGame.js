import React, { Component } from 'react'
import Pokedex from './Pokedex'
 
class PokemonGame extends Component{
    static defaultProps = {
        pokemon : [
            {id:4, name:"Charmander", type: "fire", base_exp: 62},
            {id:7, name:"Squirtle", type: "water", base_exp: 75},
            {id:11, name:"Metapod", type: "bug", base_exp: 100},
            {id:12, name:"Butterfree", type: "flying", base_exp: 122},
            {id:25, name:"Pikachu", type: "electric", base_exp: 156},
            {id:39, name:"JiglyPuff", type: "normal", base_exp: 187},
            {id:94, name:"Genger", type: "poison", base_exp: 201},
            {id:33, name:"Evee", type: "normal", base_exp: 145}
        ]
    }
    render(){
        let hand1 = []
        let hand2 = [...this.props.pokemon]
        while(hand1.length < hand2.length){
            let randIdx = Math.floor(Math.random()*hand2.length)
            let randPokemon = hand2.splice(randIdx,1)[0];
            hand1.push(randPokemon)
        }
        let exp1 = hand1.reduce((exp, pokemon) => exp+pokemon.base_exp, 0);
        let exp2 = hand2.reduce((exp, pokemon) => exp+pokemon.base_exp, 0);

        return(
            <div>
                <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1>exp2}/>
                <Pokedex pokemon={hand2} exp={exp2} isWinner={exp2>exp1}/>

            </div>
        )
    }
}

export default PokemonGame;