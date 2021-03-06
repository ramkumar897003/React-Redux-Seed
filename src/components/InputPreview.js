import React, {Component} from 'react';
import InputPreview from '../components/InputPreview';
import {connect} from 'react-redux';



class App extends Component {
 render () {
  const {message} = this.props.messageReducer;
  return (
   <InputPreview
    type="text"
    value={this.props.value}/>
  )
 }
}
export default connect(state => state)(App);
