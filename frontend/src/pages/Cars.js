import { useState } from "react";
import { Box, Button } from "@mui/material";
import AddCarModal from "../components/modals/AddCarModal";
import CarsTable from "../components/tables/CarsTable";
import useCars from "../hooks/useCars";

const Cars = () => {
  const { cars, addCar } = useCars();
  const [addOpen, setAddOpen] = useState(false);

  return (
    <Box>
      <Box sx={{ mx: 2, display: "flex", justifyContent: "flex-end" }}>
        <Button variant="contained" onClick={() => setAddOpen(true)}>
          Add New Car
        </Button>
      </Box>
      <CarsTable rows={cars} />
      <AddCarModal
        open={addOpen}
        addCar={addCar}
        onClose={() => setAddOpen(false)}
      />
    </Box>
  );
};

export default Cars;
