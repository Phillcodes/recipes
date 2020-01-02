import React from 'react';
import Recipes from './Recipes';

const Opskriftliste = ({ opskrifter }) => {
  const handleClick = () => {
  return   console.log(title);
  }
  return (
    <div onClick={handleClick}>
    {
    opskrifter.map((title, i) => {
      return (
        <Recipes
          key={i}
          id={opskrifter[i].id}
          title={opskrifter[i].title}
          tid={opskrifter[i].tid}/>

              )

    })

  }
    </div>


  );
}
export default Opskriftliste;
