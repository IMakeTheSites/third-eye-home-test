import * as Yup from "yup";

export const CarSchema = Yup.object().shape({
  make: Yup.string()
    .required("Make is a required field")
    .min(2, "Make must be at least 2 characters"),
  model: Yup.string()
    .required("Model is a required field")
    .min(2, "Model must be at least 2 characters"),
  package: Yup.string()
    .required("Package is a required field")
    .min(2, "Package must be at least 2 characters"),
  color: Yup.string()
    .required("Color is a required field")
    .min(2, "Color must be at least 2 characters"),
  category: Yup.string()
    .required("Category is a required field")
    .min(2, "Category must be at least 2 characters"),
  year: Yup.number()
    .label("Please enter a value from 1900 to 2023")
    .integer()
    .min(1900)
    .max(2023)
    .required("Year is a required field"),
  mileage: Yup.number()
    .label("Please enter a value from 1 to 999999")
    .integer()
    .min(1)
    .max(999999)
    .required("Mileage is a required field"),
  price: Yup.number()
    .label("Please enter a value from 1 to 99999999")
    .integer()
    .min(1)
    .max(99999999)
    .required("Price is a required field"),
});
