import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:9000";

const useCars = () => {
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = () => {
    setIsLoading(true);
    axios.get(`${apiUrl}/cars`).then((res) => {
      setCars(res.data.result);
      setIsLoading(false);
    });
  };

  const addCar = (formData) => {
    axios.post(`${apiUrl}/cars`, formData).then(() => {
      toast.success("New car has been added!");
      fetchCars();
    });
  };

  return { apiUrl, cars, addCar, isLoading };
};

export default useCars;
