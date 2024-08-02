import React from "react";
import Checkbox from "@mui/material/Checkbox";
import { green } from "@mui/material/colors";

export default function TodoCheckBtn() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <div>
      <Checkbox
        {...label}
        color="success"
        sx={{ color: green[600], "& .MuiSvgIcon-root": { fontSize: 28 } }}
      />
    </div>
  );
}
