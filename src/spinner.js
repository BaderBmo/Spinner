import React, { Component } from 'react';
import './App.css'

const LoaderHOC = (WrappedComponent) =>{
    return class LoaderHOC extends Component{
        constructor(props){
            super(props);
            this.state = {
                isLoading : true
            }

            setInterval(()=>{
                this.setState({
                    isLoading:false
                })
            },2000)
        }
        render(){
            return this.state.isLoading ? <div className="center"><div class="lds-facebook"><div></div><div></div><div></div></div></div> : <WrappedComponent {...this.props}/>}}}
export default LoaderHOC;