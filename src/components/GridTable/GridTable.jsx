import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";

export default function GridTable({ id = "id", columns = [], rows = [] }) {
  return (
    <Box width={"100%"} height={400}>
      <DataGrid
        columns={columns}
        rows={rows}
        disableRowSelectionOnClick
        getRowId={(row) => row[id]}
      />
    </Box>
  );
}
