import React, { Fragment, useState } from 'react';
import classes from './MainContainer.module.css';
import ItemDisplayView from './ItemDisplayView';

const MainContainer = () => {

  const [clicked, setClicked] = useState(false);

  const [selectedOption, setSelectedOption] = useState('');

  const optionList = ["Option 1", "Option 2", "Option 3", "Option 4"];

  const optionsToSelect = optionList.map((option, index) => {
    return clicked && <div className={classes.dropdownContent}
      key={index}
      role="presentation"
      onClick={() => {setClicked(false); setSelectedOption(option)}}
      onKeyDown={() => setClicked(false)}
    >
      {option}
    </div>
  })

  const onToggle = () => {
    setClicked(!clicked);
  }

  return (
    <Fragment>
      <div 
        className={classes.dropdown}
        tabIndex={0}
        onClick={onToggle}
        onBlur={() => setClicked(false)}
      >
        <div className={classes.dropdownTrigger}>
          <i className="fas fa-caret-square-down"></i>
        </div>
        {optionsToSelect}
      </div>
      {selectedOption.length > 0 && <div>
        <ItemDisplayView option={selectedOption} />
      </div>}
    </Fragment>
  )
}

export default MainContainer;