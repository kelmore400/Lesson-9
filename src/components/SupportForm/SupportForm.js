import React from 'react';
import { Control } from '../Control/index';
import styles from './SupportForm.module.scss';

export class SupportForm extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      userName: '',
      comment: ''
    }
  }

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    alert('UserName is: ' + this.state.userName + ', comment: ' + this.state.comment);
  }

  render(){
    // console.log('props', this.props);
    // console.log('type', typeof this.props.match.params.number);
    return (
      <div className={styles.container}>
        <h2>Please write your request</h2>
        <form onSubmit={this.handleSubmit}>
          <Control 
            // className={styles.control}
            inputType="input" 
            type="text" 
            name="userName"  
            labelText="Username" 
            onChange={this.handleInputChange} 
            required 
          />
          <Control 
            // className={styles.control} 
            inputType="textarea" 
            name="comment"  
            labelText="Comment" 
            onChange={this.handleInputChange} 
            required 
          />
          <button className={styles.submitBtn}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </button>
        </form>
      </div>
    );
  }
};
