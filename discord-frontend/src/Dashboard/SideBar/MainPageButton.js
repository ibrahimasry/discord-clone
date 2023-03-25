import React from "react";
import Button from "@mui/material/Button";
import GroupsIcon from "@mui/icons-material/Groups";
import { MyButton } from "./CreateRoomButton";

const MainPageButton = () => {
  return (
    <MyButton>
      <GroupsIcon />
    </MyButton>
  );
};

export default MainPageButton;
