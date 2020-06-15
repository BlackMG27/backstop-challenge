import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';

class PokemonCard extends Component{
    render(){
        const {height, weight, name, base_experience, sprites} = this.props;
        return(
            <Fragment>
                <figure className="poke-card">
                    <img src={sprites.front_default} alt={name} className="poke-image"/>
                    <h5 className="pokemon-name">{name}</h5>
                    <ul className="pokemon-details">
                        <li>{height}</li>
                        <li>{weight}</li>
                        <li>{base_experience}</li>
                    </ul>
                </figure>
            </Fragment>
        )
    }
}