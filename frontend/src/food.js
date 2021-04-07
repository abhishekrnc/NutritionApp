import React, { Component } from 'react'

export default class Food extends Component {

    componentDidMount(){

        fetch("http://localhost:8000/foods")
        .then((response=>response.json()))
        .then((foods)=>{
            console.log(foods);
        })
        .catch((err)=>{
            console.log(err);
        })

    }

    render() {
        return (
            <div className="container">
                <div className="form-group" style={{marginTop:"30px"}}>
                    <input className="form-control" placeholder="Search Food"/>
                </div>
            </div>
        )
    }
}
