import React, { Component } from 'react';
import { connect } from 'react-redux';
import Opskriftliste from '../components/Opskriftliste';
import Searchbox from '../components/Searchbox';
import { opskrifter } from '../components/Opskrifter';
import { setSearchField, requestRecipies } from '../actions'

const mapStateToProps = state => {
  return {
    searchField: state.searchField
    /*searchField: state.searchOpskrift.searchField
    recipes: state.requestRecipies.recipes,
    isPending: state.requestRecipies.isPending,
    error: state.requestRecipies.error*/
  }
}

const mapDispatchToProps = (dispatch) => {
return {
   onSearchChange: (event) => dispatch(setSearchField(event.target.value))
//   onRequestRecipes: () => dispatch(requestRecipies())
}
}


class App extends Component {
  constructor() {
    super()
    this.state =  {
      opskrifter: opskrifter,

    }
  }
/* componentDidMount() {
  this.props.onReuqestRobots();
}*/

   render() {
     const { searchField , onSearchChange} = this.props;


     const handleClick = () => {
     return   console.log(this.state.opskrifter);
     }
     const filteredRecipes = this.state.opskrifter.filter(opskrifter => {
       return opskrifter.title.toLowerCase().includes(searchField.toLowerCase());
     })
     return (
       <div className="tc">
         <h1> Opskrifter </h1>
         <Searchbox searchChange={onSearchChange}/>
         <div onClick={handleClick} >
         <Opskriftliste opskrifter={filteredRecipes} />
         </div>
       </div>
     );
   }

}


export default connect(mapStateToProps, mapDispatchToProps)(App);
