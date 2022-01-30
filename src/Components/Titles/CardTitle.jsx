// TitleComponent.jsx

import React from 'react';

const CardTitle = (props) => {
    var defaultTitle = "I'm a title";
  return <div>
      <h1>
        {props.titleText ? props.titleText : defaultTitle}
      </h1>
  </div>;
};

export default CardTitle;
