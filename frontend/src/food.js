import React, { Component } from 'react'

export default class Food extends Component {

    constructor(props){
        super(props);

        this.state={
            foods:[],
            searchedFoods:[]
        }
    }

    searchFood(value){

        if(value!=""){

        
        let searchedArray=this.state.foods.filter((food,index)=>{
            return food.name.toLowerCase().includes(value.toLowerCase());
        })

        this.setState({searchedFoods:searchedArray});
    }
}

    componentDidMount(){

        fetch("http://localhost:8000/foods")
        .then((response=>response.json()))
        .then((foodsResponse)=>{
            this.setState({foods:foodsResponse.foods});
        })
        .catch((err)=>{
            console.log(err);
        })

    }

    render() {
        return (
            <div className="container">
                <div className="form-group" style={{marginTop:"30px"}}>
                    <input className="form-control" onChange={(event)=>{
                        this.searchFood(event.target.value)
                    }} placeholder="Search Food"/>
                </div>
                <div className="search-result">
                    {
                        this.state.searchedFoods.map((food,index)=>(
                            <div className="result" key={index}>
                                    {food.name}
                         </div>
                        ))
                    }
                    
                </div>
            </div>
        )
    }
}

