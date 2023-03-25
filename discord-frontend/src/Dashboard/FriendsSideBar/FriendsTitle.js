import React from "react";
import { Typography } from "@mui/material";

const FriendsTitle = ({ title }) => {
  return (
    <Typography
      sx={{
        textTransform: "uppercase",
        color: "#8e9297",
        marginTop: "10px",
        textAlign: "center",
      }}
    >
      {title}
    </Typography>
  );
};

export default FriendsTitle;
