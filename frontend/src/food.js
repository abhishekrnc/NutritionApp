import React, { Component } from 'react'

export default class Food extends Component {

    constructor(props){
        super(props);

        this.state={
            foods:[]
        }
    }

    componentDidMount(){

        fetch("http://localhost:8000/foods")
        .then((response=>response.json()))
        .then((foodsResponse)=>{
            this.setState({foods:foodsResponse});
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
