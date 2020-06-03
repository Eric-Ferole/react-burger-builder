import React from 'react';

// Styles 
import classes from './Burger.css';

// Component
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients) // Gives an array of the keys of the object
    .map(igKey => { // map execute a function on each elements of the array
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      }); // Return an array of elements for each key/elements in object
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
   if (transformedIngredients.length === 0) {
     transformedIngredients = <p>Please start adding ingredients.</p>
   }

  return(
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
        {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
}

export default burger;