import { Button } from "@mui/material";

export const SubmissionsConfig = [
  {
    field: "id",
    headerName: "Submission ID",
    width: 200,
    height: 400,
    renderCell: (params) => (
      <img src={params.value} alt="product_image" style={{ height: "100%" }} />
    ),
  },
  {
    field: "date",
    headerName: "Date",
    width: 200,
  },
  {
    field: "method",
    headerName: "Method",
    width: 200,
  },
  {
    field: "status",
    headerName: "Status",
    width: 200,
    renderCell: (params) => <Button variant="contained">Listed</Button>,
  },
  {
    field: "item_count",
    headerName: "# Items",
    width: 200,
  },
  {
    field: "manage_submission",
    headerName: "Manage",
    width: 200,
    renderCell: (params) => (
      <Button variant="contained" onClick={() => alert(params.value)}>
        Manage Submission
      </Button>
    ),
  },
];
