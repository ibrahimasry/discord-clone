import React from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import * as roomHandler from "../../realtimeCommunication/roomHandler";
import styled from "@emotion/styled";
export const MyButton = styled(Button)({
  width: "3rem",
  height: "3rem",
  borderRadius: "1.6rem",
  margin: 0,
  padding: 0,
  minWidth: 0,
  marginTop: "1rem",
  color: "white",
  backgroundColor: "#5865F2",
  "@media (max-width:700px)": {
    width: "2rem",
    height: "2rem",
    borderRadius: ".6rem",
  },
});

const CreateRoomButton = ({ isUserInRoom }) => {
  const createNewRoomHandler = () => {
    roomHandler.createNewRoom();
  };

  return (
    <MyButton disabled={isUserInRoom} onClick={createNewRoomHandler}>
      <AddIcon />
    </MyButton>
  );
};

export default CreateRoomButton;
