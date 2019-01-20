import React, { Component } from 'react'
import CodeEntry from './CodeEntry';
import ContactForm from './ContactForm';

export default class LandingPage extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       enteredCode:''
    }
  }
  
  handleChange = event => {
    let stringValue = event.target.value;
    this.setState({
      enteredCode:stringValue
    })
  }
  
  render() {
    return (
      <div>
        {this.state.enteredCode === 'morecowbell'? 
          <ContactForm /> : 
          <CodeEntry enteredCode={this.state.enteredCode} handleChange={this.handleChange} /> 
        }
      </div>
    )
  }
}
