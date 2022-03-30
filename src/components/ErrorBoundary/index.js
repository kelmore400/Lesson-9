import React from "react";

export class ErrorBoundary extends React.Component{
    constructor(props){
        super(props);
        this.state = { hasError: false }
    }
    static getDerivedStateFromError(error){
        console.log('getDerivedStateFromError', {error});
        return { hasError: true}
    }
    componentDidCatch(error, errorInfo) {
        console.log('componentDidCatch', {error, errorInfo});
    }
    render(){
        if(this.state.hasError){
            return <h1>Something went wrong :(</h1>
        }
        return this.props.children;
    }
}