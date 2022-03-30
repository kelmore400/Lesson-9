import React from 'react';

export class ErrorPage extends React.Component {
    constructor(props){
        super(props);
        this.state = { hasError: false }
    }
    static getDerivedStateFromError(error){
        return { hasError: true}
    }
    componentDidCatch(error, errorInfo){
        console.log(error, errorInfo);
    }

    render(){
        if(this.state.hasError) {
            return <h3>Something went wrong 2</h3>
        }
        return <div>
            {this.props.children}
        </div>
        }
}