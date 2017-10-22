import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Second from './Second';
import './Second.css';
class App extends Component {

constructor(props){
super(props);
this.state = {
  deadline : 'December 25,2017',
  name : ''
}
}

changeDeadline(){
this.setState({deadline : 'November 20,2017'})
}


  render() {
    return (
     <div className="Second">
    <div className="Second-Title">
Start calculation digits |{this.state.deadline} ..
        </div>
<div className="Display-days">
14 days 
</div>
<div className="Display-hours">
30 hour's
</div>
<div className="Display-minutes">
15 minutes
</div>
<div className="Display-seconds">
20 second's
</div>
<div>
<input placeholder="new date" onChange={event=>this.setState({deadline : event.target.value})} />
<div>
<button onClick={()=>this.changeDeadline()}>Calculate</button>
</div>
</div>
</div>
    );
  }
}

export default App;
