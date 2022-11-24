import React from "react";

export default function CreateCarForm({ newCar, setNewCar, onCreateNewCar, onReset, onPreview }) {

  const years = (start = 1990, end = 2018) => {
    return Array.apply(0, Array(end - start + 1)).map(
      (element, index) => index + start
    );
  };

  const engines = ['diesel', 'petrol', 'electric', 'hybrid'];

  return (
    <form onSubmit={onCreateNewCar}>
      <label>Brand:</label>
      <input
        required
        type="text"
        minLength='2'
        id="brand"
        value={newCar.brand}
        onChange={({ target }) => setNewCar({ ...newCar, brand: target.value })}
      />
      <br />
      <br />
      <label>Model:</label>
      <input
        required
        type="text"
        minLength='2'
        id="model"
        value={newCar.model}
        onChange={({ target }) => setNewCar({ ...newCar, model: target.value })}
      />
      <br />
      <br />
      <label htmlFor="">Select year</label>
      <select
        required
        name="year"
        id="year"
        value={newCar.year}
        onChange={({ target }) => setNewCar({ ...newCar, year: Number(target.value) })}
      >
        {years().map((year, index) => (
           <option key={index} value={year}>{year}</option>
         ))}
      </select>
      <br />
      <br />
      <label>Max speed:</label>
      <input
        type="number"
        id="maxSpeed"
        value={newCar.maxSpeed}
        onChange={({ target }) => setNewCar({ ...newCar, maxSpeed: target.value })}
      />
      <br />
      <br />
      <label>Number of doors:</label>
      <input
        required
        type="number"
        id="number_of_doors"
        value={newCar.number_of_doors}
        onChange={({ target }) => setNewCar({ ...newCar, number_of_doors: target.value })}
      />
      <br />
      <br />
      <span>
          <label>Is automatic?</label>
          <input
            required
            type="checkbox"
            checked={newCar.isAutomatic}
            onChange={({ target }) => { setNewCar({ ...newCar, isAutomatic: target.checked });
            }}
          />
        </span>
        <br />
        <br />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h4>Engine:</h4>
          {engines.map((engine, index) => (
            <span key={index}>
              <input
              required
              type="radio"
              name="engine"
              checked={engine === newCar.engine}
              value={engine}
              onChange={() => setNewCar({ ...newCar, engine })}
            />{engine.toUpperCase()}
            </span>
          ))}
          <br />
        </div>
      <button type="submit">Add new car</button>
      <div>
        <br />
        <button type="button" onClick={onReset}>Reset</button>
      </div>
      <br />
      <div>
        <button type="button" onClick={onPreview}>Prewiev</button>
      </div>
    </form>
  );
}

