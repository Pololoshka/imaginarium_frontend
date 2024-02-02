// import { React, useEffect, useMemo, useState } from "react";
// import AxiosInstance from "./Axios";
// import { MaterialReactTable } from "material-react-table";


// export const Create = () => {
//   const [room, setRoom] = useState();
//   const [loading, setLoading] = useState(true);




//   const GetData = () => {
//     AxiosInstance.get(`room/`).then((res) => {

//       setRoom(res.data);
//       console.log(res.data);
//       setLoading(false);
//     });
//   };

//   useEffect(() => {
//     GetData();
//   }, []);

//   const columns = useMemo(
//     () => [
//       {
//         accessorKey: "name",
//         header: "Name",
//         size: 150,
//       },
//       {
//         accessorKey: "id",
//         header: "Id",
//         size: 150,
//       },
//     ],
//     []
//   );
//   return (
//     <div>
//       {loading ? (
//         <p>Loding data ...</p>
//       ) : (
//         <MaterialReactTable
//           columns={columns}
//           data={room}

//         />
//       )}
//     </div>
//   );
// };
