import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import useCars from "../hooks/useCars";
import CarCard from "../components/CarCard";

const Car = () => {
  const { carId } = useParams();
  const { apiUrl } = useCars();

  const [currentCar, setCurrentCar] = useState(null);

  useEffect(() => {
    axios.get(`${apiUrl}/cars/${carId}`).then((res) => {
      console.log("res", res);
      setCurrentCar(res.data.result);
    });
  }, [carId, apiUrl]);

  if (!currentCar) {
    return null;
  }

  return (
    <Box sx={{ mb: 2, p: 2 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Car's Details ({currentCar.make})
      </Typography>
      <CarCard car={currentCar} />
    </Box>
  );
};

export default Car;
