import React, { useState, useEffect } from "react";
import CarServices from "../services/CarServices";
import { useDispatch, useSelector } from "react-redux";
import { setAll } from "../store/cars/slice";
import { carsFilter } from "../store/cars/selector";
import SingleCarComponent from "../components/SingleCarComponent";

export default function AppCars() {
    //const [cars, setCars] = useState();
    const dispatch = useDispatch();
    const cars = useSelector(carsFilter);
    
    const handleGetCars = async () => {
        const cars = await CarServices.getAll();
        //setCars(cars.data);
        dispatch(setAll(cars.data));
      };

    useEffect(()=> {
        handleGetCars();
    }, []);

    return (
    <div>
        <h3>List of cars:</h3>
        {/* <ul>
            {cars && cars.map((car) => (<Link to={`/cars/${car.id}`} key={car.id}> <li >{car.brand} <button >Edit</button></li></Link>))}
        </ul> */}
        {(cars && cars.length != 0) ?
            <ul>
                {cars &&
                    cars.map((car) => (
                        <li
                            key={car.id}>
                            <SingleCarComponent
                                key={car.id}
                                brand={car.brand}
                                model={car.model}
                                year={car.year}
                                maxSpeed={car.maxSpeed}
                                isAutomatic={car.isAutomatic}
                                engine={car.engine}
                                number_of_doors={car.number_of_doors}
                            />
                        </li>
                    ))
                } </ul >
            : "No such car"}
    </div >
    )
}

  // return (
  //   <div>
  //     <h2>Cars list: </h2>
  //     <ul>
  //         {cars && cars.map((car) => (<Link to={`/cars/${car.id}`} key={car.id}><li>{car.brand} <button >Edit</button></li></Link>))}
  //     </ul>
  //     {/* {cars &&
  //       cars.map((car) => (
  //         <div key={car.id}>
  //           <Link to={`/cars/${car.id}`}>
  //             <SingleCarComponent
  //               key={car.id}
  //               brand={car.brand}
  //               model={car.model}
  //               year={car.year}
  //               max_speed={car.max_speed}
  //               is_automatic={car.is_automatic}
  //               engine={car.engine}
  //               number_of_doors={car.number_of_doors}
  //             />
  //           </Link>
  //         </div>
  //       ))} */}
  //   </div>
  // )
//}