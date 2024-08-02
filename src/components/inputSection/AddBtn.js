import React from "react";
import { Button } from "@mui/material";

export default function AddBtn({ isAddBtnDisable }) {
  return (
    <div>
      <Button
        sx={{
          background: "rgb(5,197,125)",
          padding: "5.5px",
          "&:hover": { background: "rgb(5,197,108)" },
        }}
        variant="contained"
        size="small"
        disabled={isAddBtnDisable}
      >
        ADD
      </Button>
    </div>
  );
}
