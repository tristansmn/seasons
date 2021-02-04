import './SeasonDisplay.css';
import React from 'react';


const seasonConfig = { // Configuration of objects
	summer: {
	  text: "Lets go to the beach",
	  iconName: 'sun'
    },
	winter: {
	  text: "Blur, it's chilly",
	  iconName: 'snowflake outline'
    }
}

const getSeason = (lat, month) => { // function to get season in function of lat and month
    if (month > 2 && month < 2) {
    	return lat > 0 ? 'summer' : 'winter'; // ternary expression
    } else {
    	return lat > 0 ? 'winter' : 'summer';
    }

}
 
const SeasonDisplay = props => { // child of parent component, should pass a props property to use it as child
	 const season = getSeason(props.lat ,new Date().getMonth())
	 const { text, iconName } = seasonConfig[season] // {objects : text and iconName} using the configuration

     return (
     	<div className={`season-display ${season}`}>
     	  <i className={`icon-left massive ${iconName} icon`} />
     	  <h1> {text} </h1>
     	  <i className={`icon-right massive ${iconName } icon`} />
     	</div>
     ) 
};  

export default SeasonDisplay
