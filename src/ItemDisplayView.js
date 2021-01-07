import React from 'react';
import classes from './ItemDisplayView.module.css';

const ItemDisplayView = ({ option }) => {
  return (
    <div className={classes.displayView}>
      This is the view of the selected {option}.
    </div>
  )
}

export default ItemDisplayView;
