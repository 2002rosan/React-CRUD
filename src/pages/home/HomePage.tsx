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

export const BASE_URL = "http://localhost:8000/items";

export interface Idata {
  id: number;
  productName: string;
  expireDate: string;
  manufactureDate: string;
  storeName: string;
}

const HomePage: React.FC = () => {
  const [status, setStatus] = useState(false);
  const [datas, setDatas] = useState<Idata[]>([]);
  const [items, setItems] = useState({
    id: "",
    productName: "",
    expireDate: "",
    manufactureDate: "",
    storeName: "",
  });

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

  const { id, productName, expireDate, manufactureDate, storeName } = items;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItems({ ...items, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await axios.post(BASE_URL, items);
    setStatus(true);
  };

  if (status) {
    return <HomePage />;
  }

  const handleClick = async (id: number) => {
    await axios.delete(`http://localhost:8000/items/${id}`);
    const updatedDatas = datas.filter((data) => data.id !== id);
    setDatas(updatedDatas);
  };

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
        <form onSubmit={(e) => handleSubmit(e)}>
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
              label="item id"
              variant="outlined"
              name="id"
              value={id}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange(e)
              }
            />

            <TextField
              fullWidth
              required
              label="product name"
              variant="outlined"
              name="productName"
              value={productName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange(e)
              }
            />
            <TextField
              fullWidth
              required
              label="expire date"
              variant="outlined"
              name="expireDate"
              value={expireDate}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange(e)
              }
            />
            <TextField
              fullWidth
              required
              label="Manufacture Date"
              variant="outlined"
              name="manufactureDate"
              value={manufactureDate}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange(e)
              }
            />
            <TextField
              fullWidth
              required
              label="Store name"
              variant="outlined"
              name="storeName"
              value={storeName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange(e)
              }
            />
            <Button variant="contained" type="submit" color="primary">
              Add items
            </Button>
          </Box>
        </form>
        {/* display items */}

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography align="center" variant="h4" color="ActiveBorder">
            Added Items
          </Typography>
          {datas.length !== 0 ? (
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
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell>{data.id}</TableCell>
                        <TableCell align="left">{data.productName}</TableCell>
                        <TableCell align="left">{data.storeName}</TableCell>
                        <TableCell align="left">
                          {data.manufactureDate}
                        </TableCell>
                        <TableCell align="left">{data.expireDate}</TableCell>
                        <TableCell align="left">
                          <Box
                            sx={{
                              display: "flex",
                              flexWrap: "wrap",
                              justifyContent: "center",
                            }}
                          >
                            <NavLink to={`/view/${data.id}`}>
                              <IconButton>
                                <VisibilityIcon color="primary" />
                              </IconButton>
                            </NavLink>

                            <NavLink to={`/edit/${data.id}`}>
                              <IconButton>
                                <CreateIcon color="primary" />
                              </IconButton>
                            </NavLink>
                            <IconButton onClick={() => handleClick(data.id)}>
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
          ) : (
            <Typography variant="h4" color="CaptionText" align="center">
              Please Add Items or Run JSON server
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
