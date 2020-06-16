import React, {Component,Fragment} from 'react';
import {fetchPokemonRedux} from './redux/fetchActions.js';
import {connect} from 'react-redux';
import PokemonCard from './components/pokemon-card';
import './App.css';

class App extends Component {
  componentDidMount(){
    this.props.fetchPokemonRedux();
  }

  componentDidUpdate(){
    this.props.fetchPokemonRedux();
  }

  
  render(){
    
    return (
      <Fragment>
        <header>
            <nav className="nav">
              <ul>
                <li>Top</li>
              </ul>
            </nav>
            <h1 className="title">Pokemon Redux</h1>
        </header>
        <section className="pokemon-cards">
          { 
              this.props.pokemon.map( (poke, index) => (
                <PokemonCard key={index} pokemon={poke}/>
              ))
          }
        </section>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      pokemon: state.pokemon
  }
}

export default connect(mapStateToProps, {fetchPokemonRedux})(App);
