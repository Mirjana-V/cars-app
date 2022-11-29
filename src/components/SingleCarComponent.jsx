import React from "react";

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

    
  return (
    <div  key={id}>
      <hr />
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
        Car maxSpeed: <strong>{maxSpeed}</strong>
      </p>
      <p>
        Car isAutomatic: <strong>{isAutomatic}</strong>
      </p>
      <p>
        Car engine: <strong>{engine}</strong>
      </p>
      <p>
        Car number_of_doors: <strong>{number_of_doors}</strong>
      </p>
      <hr />
    </div>
  );
}