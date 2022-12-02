const allCars = (state) => state.cars.all; //all cars
const carsFilter = (state) => state.cars.carsFilter; //filter
const selectSelect = (state) => state.cars.selectCars;  //select cars
const selectPage = (state) => state.cars.page //pagination

export { allCars, carsFilter, selectSelect, selectPage }