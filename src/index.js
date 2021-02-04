import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';
import "semantic-ui-css/semantic.min.css"

// FUNCTIONAL COMPONENTS

// const App = () => {
//      return <div>Latidute: </div>
// }

// CLASS COMPONENTS

class App extends React.Component {
      // very first function fucntion called before creation of instance.
     constructor(props) {
       // super is the reference to the parent's constructor of all React.component
       super(props);
       // ONLY TIME we do direct assignment : state object.
       this.state = { lat: null, errorMessage: ''}; // put all properties you want in the assignment 
      } 

      // Alternative method only write on line code
      // Babel handles the code to adapt it (constructor etc..)
      state = { lat: null, errorMessage: ''}

      // Lifecycle methods

      // Good place to data loading ! prefer than the constructor => more clear code
      componentDidMount() {
        console.log('my component was rerendered to the screen')
        window.navigator.geolocation.getCurrentPosition(
         position => this.setState({ lat: position.coords.latitude }), // need to call setState to update our state !
         err => this.setState({errorMessage: err.message})
      );
      }
      // Good place to more data loading when state/props change
      componentDidUpdate() {
        console.log('my component was just updated - it rerendered')
      }
      // Good place to do cleanup (remove component from the screen) (escpecially non react stuff)
      componentWillUnmount() { 
      }
     
     

     renderContent() { // Allow to avoid conditionnal render. same style for all conditional statements
       if (this.state.errorMessage && !this.state.lat) {
          return <div>Error: {this.state.errorMessage}</div>
       } else if (this.state.lat && !this.state.errorMessage) {
          return <SeasonDisplay lat={this.state.lat} />// this is a props
       } else {
          return <Loader message="Please accept location request to use the App" />
       }
     }

     // React says we have to define render which return some amount of JSX (not doing anything else)
     render() {
       return (
         <div className='specific-style-for-render'>
           {this.renderContent()}
         </div>
       )
     }
}

ReactDOM.render(<App />, document.querySelector('#root'))
