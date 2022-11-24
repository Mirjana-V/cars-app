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
      number_of_doors: "",
      isAutomatic: false,
      engine: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(id)

    if (id) {
      console.log('edit')
      await CarServices.edit(id, newCar)
    } else {
      //console.log('add')

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
      number_of_doors: "",
      isAutomatic: false,
      engine: "",
    })
  }

  const handlePrewiev=()=>{
    alert(`
      brand: ${newCar.brand} 
      model: ${newCar.model} 
      year: ${newCar.year} 
      maxSpeed: ${newCar.maxSpeed} 
      number_of_doors: ${newCar.number_of_doors} 
      isAutomatic: ${newCar.isAutomatic ? 'Yes' : 'No'} 
      engine: ${newCar.engine}`
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
