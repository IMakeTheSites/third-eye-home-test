import {
  Grid,
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { styled } from "@mui/system";
import { Formik } from "formik";

import { CarSchema } from "../../utils/validation/yup";

const Form = styled("form")({
  width: "100%",
  marginTop: "24px",
});

const AddCarModal = ({ open, onClose, addCar }) => {
  return (
    <Dialog
      hideBackdrop={false}
      open={open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <Formik
        validationSchema={CarSchema}
        initialValues={{
          make: "",
          model: "",
          package: "",
          color: "",
          year: 2020,
          category: "",
          mileage: 1,
          price: 100,
        }}
        onSubmit={(values) => {
          addCar(values);
          onClose();
        }}
      >
        {({ values, errors, isValid, handleSubmit, handleChange }) => (
          <>
            <DialogTitle>{"Please add a new car information."}</DialogTitle>
            <DialogContent>
              <Form>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      fullWidth
                      label="Make"
                      name="make"
                      value={values.make}
                      onChange={handleChange}
                      error={errors.make}
                      helperText={errors.make}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      fullWidth
                      name="model"
                      label="Model"
                      value={values.model}
                      onChange={handleChange}
                      error={errors.model}
                      helperText={errors.model}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      fullWidth
                      label="Package"
                      name="package"
                      value={values.package}
                      onChange={handleChange}
                      error={errors.package}
                      helperText={errors.package}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      fullWidth
                      label="Color"
                      name="color"
                      value={values.color}
                      onChange={handleChange}
                      error={errors.color}
                      helperText={errors.color}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      fullWidth
                      label="Year"
                      name="year"
                      type="number"
                      value={values.year}
                      onChange={handleChange}
                      error={errors.year}
                      helperText={errors.year}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      fullWidth
                      label="Category"
                      name="category"
                      value={values.category}
                      onChange={handleChange}
                      error={errors.category}
                      helperText={errors.category}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      fullWidth
                      label="Mileage"
                      type="number"
                      name="mileage"
                      value={values.mileage}
                      onChange={handleChange}
                      error={errors.mileage}
                      helperText={errors.mileage}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      fullWidth
                      label="Price"
                      type="number"
                      name="price"
                      value={values.price}
                      onChange={handleChange}
                      error={errors.price}
                      helperText={errors.price}
                    />
                  </Grid>
                </Grid>
              </Form>
            </DialogContent>
            <DialogActions sx={{ p: 3 }}>
              <Button
                disabled={!isValid}
                type="submit"
                variant="contained"
                onClick={handleSubmit}
              >
                Add
              </Button>
              <Button onClick={onClose} variant="outlined">
                Cancel
              </Button>
            </DialogActions>
          </>
        )}
      </Formik>
    </Dialog>
  );
};

export default AddCarModal;
