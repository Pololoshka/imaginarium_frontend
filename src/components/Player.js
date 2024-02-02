// import { React, useEffect, useMemo, useState } from "react";
// import AxiosInstance from "./Axios";
// import { MaterialReactTable } from "material-react-table";

// export const Player = () => {
//   const [user, setUser] = useState();
//   const [loading, setLoading] = useState(true);

//   const GetData = () => {
//     AxiosInstance.get(`user/`).then((res) => {
//       setUser(res.data);
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
//           data={user}

//         />
//       )}
//     </div>
//   );
// };
