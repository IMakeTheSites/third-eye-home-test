import { Card, CardContent } from "@mui/material";

const headersAndKeys = [
  { label: "Make", key: "make" },
  { label: "Model", key: "model" },
  { label: "Package", key: "package" },
  { label: "Color", key: "color" },
  { label: "Year", key: "year" },
  { label: "Category", key: "category" },
  { label: "Mileage", key: "mileage" },
  { label: "Price", key: "price" },
];

const CarCard = ({ car }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        my: 1,
      }}
    >
      <CardContent>
        {headersAndKeys.map((item) => (
          <div key={item.label}>
            {item.label}: {car[item.key]}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default CarCard;
