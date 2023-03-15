import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Hidden,
  Card,
  CardContent,
} from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

const StyledCardRow = styled("div")`
  h3 {
    background: #000;
    color: #fff;
    padding: 0.5rem;
  }
  dl {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
  }

  dl > * {
    flex: 0 0 50%;
    margin: 0;
    text-align: center;
    outline: 1px solid lightslategray;
  }

  dt {
    text-align: center;
    font-weight: bold;
    outline: 1px solid gray;
  }
`;

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

export default function CarsTable({ rows }) {
  const navigate = useNavigate();

  return (
    <>
      <Box sx={{ mb: 2, p: 2 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Cars List
        </Typography>
        <Hidden mdDown>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  {headersAndKeys.map(({ label }) => (
                    <TableCell key={label}>{label}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    onClick={() => navigate(`/cars/${row.id}`)}
                    key={row.id}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                      cursor: "pointer",
                      ":hover": { backgroundColor: "#ccc" },
                    }}
                  >
                    {headersAndKeys.map(({ key }) => (
                      <TableCell key={key}>{row[key]}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Hidden>
        <Hidden mdUp>
          {rows.map((row) => (
            <Card
              variant="outlined"
              key={row.id}
              sx={{
                my: 1,
                cursor: "pointer",
                ":hover": { backgroundColor: "#ccc" },
              }}
              onClick={() => navigate(`/cars/${row.id}`)}
            >
              <CardContent>
                <StyledCardRow>
                  <h3>{row.make}</h3>
                  <dl>
                    {headersAndKeys.map((item) => (
                      <>
                        <dt>{item.label}</dt>
                        <dd>{row[item.key]}</dd>
                      </>
                    ))}
                  </dl>
                </StyledCardRow>
              </CardContent>
            </Card>
          ))}
        </Hidden>
      </Box>
    </>
  );
}
