import React from "react";

import Child from "./Child";


export default function Parent (){
    
let car = [

    {carName :"Ford F150 Raptor" , carPrice: "3.5 CR" , carReviews: "5 Star Rating" , carModel: 2024},
    {carName :"Honda Swift" , carPrice: "45 Lakhs" , carReviews: "4.5 Star Rating" , carModel: 2020},
    {carName :"Toyota Corolla" , carPrice: "80 Lakhs" , carReviews: "3.5 Star Rating" , carModel: 2022},
    {carName :"Honda Civic" , carPrice: "1.00 CR" , carReviews: "4 Star Rating" , carModel: 2012},

]
    
    
    return (
                <div>
                    <Child Cars = {car} />
                </div>

    )
}