import React, { useState, useEffect } from "react";
import CarServices from "../services/CarServices";

export default function AppCars() {
    const [cars, setCars] = useState();
 
    const handleGetCars = async () => {
        const cars = await CarServices.getAll();
        setCars(cars.data);
      };

    useEffect(()=> {
        handleGetCars();
    }, []);

  return (
    <div>
        <ul>
          <h1>Cars</h1>
            {cars && cars.map((car)=> <li key ={car.id}>{car.brand}</li> )}
        </ul>
    </div>
  )
}