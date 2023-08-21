import {
  Box,
  Button,
  CssBaseline,
  IconButton,
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
import VisibilityIcon from "@mui/icons-material/Visibility";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import { NavLink } from "react-router-dom";

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
            <TextField
              fullWidth
              required
              label="Manufacture Date"
              variant="outlined"
            />
            <TextField
              fullWidth
              required
              label="Expire Date"
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
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>#ID</TableCell>
                  <TableCell align="left">Item name</TableCell>
                  <TableCell align="left">Store name</TableCell>
                  <TableCell align="left">Manufacture Date</TableCell>
                  <TableCell align="left">Exprie Date</TableCell>
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              {/* table contents */}
              <TableBody>
                {datas.map((data: Idata) => {
                  return (
                    <TableRow
                      key={data.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell>{data.id}</TableCell>
                      <TableCell align="left">{data.productName}</TableCell>
                      <TableCell align="left">{data.storeName}</TableCell>
                      <TableCell align="left">{data.manufactureDate}</TableCell>
                      <TableCell align="left">{data.expireDate}</TableCell>
                      <TableCell align="left">
                        <Box
                          sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "center",
                          }}
                        >
                          <NavLink to="/view">
                            <IconButton>
                              <VisibilityIcon color="primary" />
                            </IconButton>
                          </NavLink>
                          <IconButton>
                            <CreateIcon color="primary" />
                          </IconButton>
                          <IconButton>
                            <DeleteIcon
                              color="primary"
                              sx={{ "&:hover": { color: "red" } }}
                            />
                          </IconButton>
                        </Box>
                      </TableCell>
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
