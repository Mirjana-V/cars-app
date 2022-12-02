import React from "react";
import { useDispatch } from "react-redux";
import { setSelect } from "../store/cars/slice";
import { useSelector } from "react-redux";
import { selectSelect } from "../store/cars/selector";

export default function SingleCar({
  id,
  brand,
  model,
  year,
  maxSpeed,
  isAutomatic,
  engine,
  number_of_doors,
}) {
  const dispatch = useDispatch();
  const selectCar = useSelector(selectSelect);
  console.log(selectCar.select.includes(id));
  return (
    <div
      key={id}
      style={{
        border:
          "1px solid " + (selectCar.select.includes(id) ? "red" : "white"),
      }}
    >
      <p>
        Car brand: <strong>{brand}</strong>
      </p>
      <p>
        Car model: <strong>{model}</strong>
      </p>
      <p>
        Car year: <strong>{year}</strong>
      </p>
      <p>
        Car max speed: <strong>{maxSpeed}</strong>
      </p>
      <p>
        Car is automatic: <strong>{isAutomatic}</strong>
      </p>
      <p>
        Car engine: <strong>{engine}</strong>
      </p>
      <p>
        Car number of doors: <strong>{number_of_doors}</strong>
      </p>
      <button onClick={() => dispatch(setSelect(id))}>Select</button>
    </div>
  );
}
