import React from "react";
import Checkbox from "@mui/material/Checkbox";
import { green } from "@mui/material/colors";

export default function TodoCheckBtn({ isComplete, id, handleCheckButton }) {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <div>
      <Checkbox
        {...label}
        color="success"
        onClick={() => {
          handleCheckButton(id, isComplete);
        }}
        checked={isComplete}
        sx={{ color: green[600], "& .MuiSvgIcon-root": { fontSize: 28 } }}
      />
    </div>
  );
}
