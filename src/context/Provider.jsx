import { createContext, useContext, useState } from "react";
import axios from "axios";
export const URL_MODELS = "https://challenge.egodesign.dev/api/models";
const CarsContext = createContext({});

export const useCarsData = () => {
  return useContext(CarsContext);
};

export const CarsDataProvider = ({ children }) => {
  const [carsData, setCarsData] = useState(null);
  const [carDetail, setCarDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(null);

  async function getCarsData() {
    setIsLoading(true);
    try {
      const { data } = await axios.get(`${URL_MODELS}`);
      console.log(data);
      setCarsData(data);
      setErrors(null);
      setIsLoading(false);
      return data;
    } catch (error) {
      setIsLoading(false);
      setErrors(error.response.status);
    }
  }

  async function getCarDetail(id) {
    setIsLoading(true);
    try {
      const { data } = await axios.get(`${URL_MODELS}/${id}`);
      console.log(data);
      setCarDetail(data);
      setErrors(null);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setErrors(error.response.status);
    }
  }
  return (
    <CarsContext.Provider
      value={{
        carsData,
        carDetail,
        isLoading,
        errors,
        getCarsData,
        getCarDetail,
      }}
    >
      {children}
    </CarsContext.Provider>
  );
};
