import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

export default function TodoDeleteBtn() {
  return (
    <div>
      <DeleteIcon
        sx={{
          color: "white",
          fontSize: "30px",
          "&:hover": { color: "#ED4337", cursor: "pointer" },
        }}
      />
    </div>
  );
}
