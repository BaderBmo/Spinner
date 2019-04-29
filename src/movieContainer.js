import React, { Component } from 'react';
import LoaderHOC from './spinner';

class MovieContainer extends Component {
    constructor(props){
        super(props)
this.state ={
     movies:[
        {title:"Fast & Furious 1",rating:3,image:"http://www.gstatic.com/tv/thumb/v22vodart/27779/p27779_v_v8_as.jpg"},
        {title:"2 Fast 2 Furious",rating:4,image:"http://www.gstatic.com/tv/thumb/v22vodart/32092/p32092_v_v8_aw.jpg"},
        {title:"Fast & Furious: Tokyo Drift",rating:5,image:"http://www.gstatic.com/tv/thumb/v22vodart/159790/p159790_v_v8_ax.jpg"},
        {title:"Fast & Furious 4",rating:4,image:"http://www.gstatic.com/tv/thumb/v22vodart/188702/p188702_v_v8_ba.jpg"},
        {title:"Fast Five",rating:5,image:"http://www.gstatic.com/tv/thumb/v22vodart/8338313/p8338313_v_v8_ao.jpg"}]}}

MovieCard=(props)=>
        <div className="card">
            <div className="image">
                <img src={props.description.image} alt=""/>
            </div>
        
            <div className="title">
                {props.description.title}
            </div>
        </div>

render (){
    return (
        <div className="movie-container">
            {this.state.movies.map(el => <this.MovieCard description={el} />)}

        </div>)}}

export default LoaderHOC(MovieContainer);