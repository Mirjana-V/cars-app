import React, {useState} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import CreateCarForm from '../components/CreateCarForm'
import CarServices from '../services/CarServices'

export default function AddCar() {

  const history = useHistory();
  const {id} = useParams();
  
  const[newCar, setNewCar] = useState({
      brand: "",
      model: "",
      year: "",
      maxSpeed: "",
      numberOfDoors: "",
      isAutomatic: false,
      engine: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await CarServices.edit(id, newCar)
    } else {
      await CarServices.add(newCar);
    }
    history.push('/cars');
}

  const handleReset=()=>{
    setNewCar({
      brand: "",
      model: "",
      year: "",
      maxSpeed: "",
      numberOfDoors: "",
      isAutomatic: false,
      engine: "",
    })
  }

  const handlePrewiev=()=>{
    alert(`
      Brand: ${newCar.brand} 
      Model: ${newCar.model} 
      Year: ${newCar.year} 
      Max speed: ${newCar.maxSpeed} 
      Number of doors: ${newCar.numberOfDoors} 
      Is Automatic: ${newCar.isAutomatic ? 'Yes' : 'No'} 
      Engine: ${newCar.engine}`
    );
  }

  return (
    <div>
      <CreateCarForm
      newCar={newCar}
      setNewCar={setNewCar}
      onCreateNewCar={handleSubmit}
      onReset={handleReset}
      onPreview={handlePrewiev}/>
    </div>
  );
}
