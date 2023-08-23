import { Box, Button, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const [items, setItems] = useState({
    id: "",
    productName: "",
    expireDate: "",
    manufactureDate: "",
    storeName: "",
  });

  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const req = await axios.get(`http://localhost:8000/items/${id}`);
        setItems(req.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItems({ ...items, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await axios.put(`http://localhost:8000/items/${id}`, items);
    setRedirect(true);
  };

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 5,
        }}
      >
        <TextField
          fullWidth
          required
          label="item id"
          variant="outlined"
          name="id"
          value={id}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
        />

        <TextField
          fullWidth
          required
          label="product name"
          variant="outlined"
          name="productName"
          value={items.productName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
        />
        <TextField
          fullWidth
          required
          label="expire date"
          variant="outlined"
          name="expireDate"
          value={items.expireDate}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
        />
        <TextField
          fullWidth
          required
          label="Manufacture Date"
          variant="outlined"
          name="manufactureDate"
          value={items.manufactureDate}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
        />
        <TextField
          fullWidth
          required
          label="Store name"
          variant="outlined"
          name="storeName"
          value={items.storeName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
        />
        <Button variant="contained" type="submit" color="primary">
          Update items
        </Button>
      </Box>
    </form>
  );
};

export default Edit;
