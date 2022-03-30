import React from 'react';
import styles from './Homework.module.scss';

export class Task1 extends React.Component {
    constructor(props){
        super(props);
        this.state = { text: '', checkText: '' };
        this.changeInput = this.changeInput.bind(this);
        this.checkInput = this.checkInput.bind(this);
    }
    changeInput(e){
        const value = +e.target.value;
        this.setState({
            text: value,
        });
    }
    checkInput(){
        const numbers = this.state.text;
        this.setState({
            checkText: numbers,
        });
        console.log('All good');
    }
    render(){
        if(!isNaN(this.state.checkText) && this.state.checkText != ''){
            throw new Error("type of input can not be a number.");
        }
        return (
        <div className={styles.errorboundary}>
            <h2>ErrorBoundary</h2>
            <p>Ошибка будет только, если ввести в input числовое значение и нажать по кнопке Click</p>
            <input type="text" name="text" value={this.text} onChange={this.changeInput}/>
            <button onClick={this.checkInput}>Click</button>
        </div>
        )
    }
}