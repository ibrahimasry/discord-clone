import React from "react";
import Button from "@mui/material/Button";

const CustomPrimaryButton = ({
  label,
  additionalStyles,
  disabled,
  onClick,
}) => {
  return (
    <Button
      variant="contained"
      sx={{
        bgcolor: "#5865F2",
        color: "white",
        textTransform: "none",
        fontWeight: 500,
        fontSize: ".8rem",
      }}
      style={additionalStyles ? additionalStyles : {}}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default CustomPrimaryButton;
