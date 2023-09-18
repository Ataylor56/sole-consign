import { Button } from "@mui/material";
export const Columns = [
  {
    field: "product_image",
    headerName: "Product Image",
    width: 200,
    height: 400,
    renderCell: (params) => (
      <img src={params.value} alt="product_image" style={{ height: "100%" }} />
    ),
  },
  {
    field: "id",
    headerName: "ID",
    width: 75,
  },
  {
    field: "sku",
    headerName: "SKU",
    width: 120,
  },
  {
    field: "model",
    headerName: "Model",
    width: 350,
  },
  {
    field: "size",
    headerName: "Size",
    width: 50,
  },
  {
    field: "location",
    headerName: "Location",
    width: 250,
  },
  {
    field: "condition",
    headerName: "Condition",
    width: 100,
  },
  {
    field: "listing_duration",
    headerName: "Days Listed",
    width: 100,
  },
  {
    field: "listing_price",
    headerName: "Price",
    width: 100,
  },
  {
    field: "manage_listing",
    headerName: "Manage Listing",
    width: 200,
    renderCell: (params) => (
      <Button variant="contained" onClick={() => alert(params.value)}>
        Manage Listing
      </Button>
    ),
  },
];
