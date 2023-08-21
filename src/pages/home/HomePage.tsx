import {
  Box,
  Button,
  CssBaseline,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const BASE_URL = "http://localhost:8000/items";

interface Idata {
  id: number;
  productName: string;
  expireDate: string;
  manufactureDate: string;
  storeName: string;
}

const HomePage: React.FC = () => {
  const [datas, setDatas] = useState([]);

  const GetData = async () => {
    try {
      const req = await axios.get(BASE_URL);
      const res = await req.data;
      setDatas(res);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetData();
  }, []);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <CssBaseline />
      <Typography variant="h2" color="skyblue" align="center">
        REACT CRUD with Fake JSON API data
      </Typography>
      <Box
        sx={{
          display: "grid",
          gap: 10,
          px: 4,
          gridTemplateColumns: { xl: "repeat(2, 1fr)", md: "repeat(1, 1fr)" },
        }}
      >
        {/* add items */}
        <form noValidate>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            <Typography align="center" variant="h4" color="ActiveBorder">
              Add items
            </Typography>

            <TextField
              fullWidth
              required
              label="item name"
              variant="outlined"
            />
            <TextField
              fullWidth
              required
              label="store name"
              variant="outlined"
            />
            <Button variant="contained" color="primary">
              Add items
            </Button>
          </Box>
        </form>
        {/* display items */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography align="center" variant="h4" color="ActiveBorder">
            Added Items
          </Typography>
          <TableContainer component={Paper}>
            <Table sx={{ maxWidth: 650 }}>
              <TableHead>
                <TableRow>
                  <TableCell align="right">Item name</TableCell>
                  <TableCell align="right">Store name</TableCell>
                  <TableCell align="right">Manufacture Date</TableCell>
                  <TableCell align="right">Exprie Date</TableCell>
                </TableRow>
              </TableHead>
              {/* table contents */}
              <TableBody>
                {datas.map((data: Idata, idx: number) => {
                  return (
                    <TableRow
                      key={idx}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="right">{data.productName}</TableCell>
                      <TableCell align="right">{data.storeName}</TableCell>
                      <TableCell align="right">
                        {data.manufactureDate}
                      </TableCell>
                      <TableCell align="right">{data.expireDate}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
