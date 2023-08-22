import { Box, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const View = () => {
  const [data, setData] = useState({
    id: "",
    productName: "",
    expireDate: "",
    manufactureDate: "",
    storeName: "",
  });

  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const req = await axios.get(`http://localhost:8000/items/${id}`);
        setData(req.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xl: "repeat(5, 1fr)",
          md: "repeat(4, 1fr)",
          sm: "repeat(3, 1fr)",
          xs: "repeat(2, 1fr)",
        },
      }}
    >
      <Typography>id: {data.id}</Typography>
      <Typography>productName: {data.productName}</Typography>
      <Typography>storeName: {data.storeName}</Typography>
      <Typography>manufactureDate: {data.manufactureDate}</Typography>
      <Typography>expireDate: {data.expireDate}</Typography>
    </Box>
  );
};

export default View;
