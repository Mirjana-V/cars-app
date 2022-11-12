import { axiosInstance } from "./AxiosService";

class CarServices {
  async getAll() {
    const response = await axiosInstance.get("/cars");
    return response.data;
  }

  async add(newCar) {
    try{
      const {data} = await axiosInstance.post('cars', newCar);
      return data;
    } catch (error) {
      console.log(error);
    }
    return null;
  }

  async edit(id, newCar) {
    try{
      const { data } = await axiosInstance.put(`cars/${id}`, newCar);
      return data;
    } catch (error) {
      console.log(error);
    }
    return null;
}

  async get(id) {
    try{
      const {data} = await axiosInstance.get(`cars/${id}`);
      return data;
    } catch (error) {
      console.log(error);
    }
    return {}
  }
}

export default new CarServices();