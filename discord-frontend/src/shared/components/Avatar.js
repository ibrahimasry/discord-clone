import React from "react";
import { styled } from "@mui/system";

const AvatarPreview = styled("div")({
  height: "4rem",
  width: "4rem",
  backgroundColor: "#5865f2",
  borderRadius: "4rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "2rem",
  fontWeight: "700",
  color: "white",
});

const Avatar = ({ username, large }) => {
  return (
    <AvatarPreview style={large ? { height: "8rem", width: "8rem" } : {}}>
      {username.substring(0, 2)}
    </AvatarPreview>
  );
};

export default Avatar;
