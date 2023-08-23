// import {
//   Box,
//   IconButton,
//   Paper,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Typography,
// } from "@mui/material";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { BASE_URL, Idata } from "../HomePage";
// import { NavLink } from "react-router-dom";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import CreateIcon from "@mui/icons-material/Create";
// import DeleteIcon from "@mui/icons-material/Delete";

// const ItemsData = () => {
//   const [datas, setDatas] = useState([]);
//   const GetData = async () => {
//     try {
//       const req = await axios.get(BASE_URL);
//       const res = await req.data;
//       setDatas(res);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     GetData();
//   }, []);

//   return (
//     <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
//       <Typography align="center" variant="h4" color="ActiveBorder">
//         Added Items
//       </Typography>
//       {datas.length !== 0 ? (
//         <TableContainer component={Paper}>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>#ID</TableCell>
//                 <TableCell align="left">Item name</TableCell>
//                 <TableCell align="left">Store name</TableCell>
//                 <TableCell align="left">Manufacture Date</TableCell>
//                 <TableCell align="left">Exprie Date</TableCell>
//                 <TableCell align="center">Action</TableCell>
//               </TableRow>
//             </TableHead>
//             {/* table contents */}
//             <TableBody>
//               {datas.map((data: Idata) => {
//                 return (
//                   <TableRow
//                     key={data.id}
//                     sx={{
//                       "&:last-child td, &:last-child th": { border: 0 },
//                     }}
//                   >
//                     <TableCell>{data.id}</TableCell>
//                     <TableCell align="left">{data.productName}</TableCell>
//                     <TableCell align="left">{data.storeName}</TableCell>
//                     <TableCell align="left">{data.manufactureDate}</TableCell>
//                     <TableCell align="left">{data.expireDate}</TableCell>
//                     <TableCell align="left">
//                       <Box
//                         sx={{
//                           display: "flex",
//                           flexWrap: "wrap",
//                           justifyContent: "center",
//                         }}
//                       >
//                         <NavLink to={`/view/${data.id}`}>
//                           <IconButton>
//                             <VisibilityIcon color="primary" />
//                           </IconButton>
//                         </NavLink>

//                         <NavLink to={`/edit/${data.id}`}>
//                           <IconButton>
//                             <CreateIcon color="primary" />
//                           </IconButton>
//                         </NavLink>
//                         <IconButton>
//                           <DeleteIcon
//                             color="primary"
//                             sx={{ "&:hover": { color: "red" } }}
//                           />
//                         </IconButton>
//                       </Box>
//                     </TableCell>
//                   </TableRow>
//                 );
//               })}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       ) : (
//         <Typography variant="h4" color="CaptionText" align="center">
//           Please Add Items or Run JSON server
//         </Typography>
//       )}
//     </Box>
//   );
// };

// export default ItemsData;
