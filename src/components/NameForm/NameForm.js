import React from 'react';
import styles from './NameForm.module.scss';

export class NameForm extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      value: '', 
      taste: 'lime',
      firstName: '',
      lastName: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeTaste = this.handleChangeTaste.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event){
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  handleChange(event){
    this.setState({ value: event.target.value })
  }

  handleChangeTaste(event){
    this.setState({ taste: event.target.value })
  }

  handleSubmit(event){
    event.preventDefault();
    alert('name is: ' + this.state.firstName + ' ' + this.state.lastName);
  }

  render(){
    let styleInput = 'base';
    if(this.props.value === 'AAA'){
      styleInput += ' class3'
    }
    return(
      <form 
        onSubmit={this.handleSubmit}
        className={styles.wrapper}
      >
        <label>
          Имя:
          <input 
            className={styles.input}
            type="text" 
            name="firstName" 
            onChange={this.handleInputChange} 
            value={this.state.firstName} 
          />
          <input
            className={styles.input}
            type="text" 
            name="lastName" 
            onChange={this.handleInputChange} 
            value={this.state.lastName} 
          />
          <textarea 
            className={styles.textarea}
            onChange={this.handleChange} 
            value={this.state.value}
          />
          <div>
            <label>
              Выберите ваш любимый вкус:
              <select value={this.state.taste} onChange={this.handleChangeTaste}>
                <option value="grapefruit">Грейпфрут</option>
                <option value="lime">Лайм</option>
                <option value="coconut">Кокос</option>
                <option value="mango">Манго</option>
              </select>
            </label>
          </div>
        </label>
        <input type="submit" value="Отправить" />
      </form>
    );
  }
};
