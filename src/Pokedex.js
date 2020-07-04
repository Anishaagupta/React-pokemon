import React, { Component } from 'react';
import './Pokedex.css';
import PokemonCard from './PokeMonCard';

class Pokedex extends Component {
  static defaultProps = {
    pokemon: [
      { id: 4, name: 'Charmander', type: 'fire', base_exp: 62 },
      { id: 7, name: 'Squirtle', type: 'water', base_exp: 75 },
      { id: 11, name: 'Metapod', type: 'bug', base_exp: 100 },
      { id: 12, name: 'Butterfree', type: 'flying', base_exp: 122 },
      { id: 25, name: 'Pikachu', type: 'electric', base_exp: 156 },
      { id: 39, name: 'JiglyPuff', type: 'normal', base_exp: 187 },
      { id: 94, name: 'Genger', type: 'poison', base_exp: 201 },
      { id: 33, name: 'Evee', type: 'normal', base_exp: 145 },
    ],
  };
  render() {
      let result;
      if(this.props.isWinner){
          result = <h2 className="pokedex-winner">Winner's Group</h2>
      }else{
        result = <h2 className="pokedex-loser">Loser's Group</h2>

      }
    return (
        
      <div>
        {result}
        <h3 className='exp'>Total Experience {this.props.exp}</h3>
        
        <div className='Pokedex'>
          {this.props.pokemon.map(p => (
            <PokemonCard
              id={p.id}
              name={p.name}
              type={p.type}
              exp={p.base_exp}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
