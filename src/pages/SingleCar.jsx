import React, { useEffect, useState } from "react";
import SingleCarComponent from "../components/SingleCarComponent";
import CarServices from "../services/CarServices";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { allCars } from "../store/cars/selector";

export default function SingleCar() {
  const id = parseInt(useParams().id, 10);

  const cars = useSelector(allCars);
  const car = cars.find(car => car.id === id);

  return (
    <div>
      {car && (
          <div key={car.id}>
            <SingleCarComponent
              key={car.id}
              id={car.id}
              brand={car.brand}
              model={car.model}
              year={car.year}
              max_speed={car.max_speed}
              is_automatic={car.is_automatic}
              engine={car.engine}
              number_of_doors={car.number_of_doors}
            />
          </div>
        )}
    </div>
  );
}
