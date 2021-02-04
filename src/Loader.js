import React from 'react';

const Loader = (props) => {
	return (
	  <div class="ui active dimmer">
        <div class="ui big text loader">{props.message}</div>   
      </div>
	)
}

Loader.defaultProps = { // Default property for our Loader Component.
  message: "Loading..."
};

export default Loader
