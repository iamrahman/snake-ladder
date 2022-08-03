import * as React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";

export default function Coin({ noOfPlayer = 1 }) {
  let size = 18;
  switch (noOfPlayer) {
    case 1:
      size = 32;
      break;
    case 2:
      size = 24;
      break;
    case 3:
      size = 18;
      break;
    case 4:
      size = 18;
      break;
    default:
      size = 18;
      break;
  }
  return (
    <AvatarGroup max={5}>
      {noOfPlayer >= 1 && (
        <Avatar alt="Red" sx={{ bgcolor: "#cc0000", width: size, height: size }}>
          {``}
        </Avatar>
      )}
      {noOfPlayer >= 2 && (
        <Avatar alt="Blue" sx={{ bgcolor: "blue", width: size, height: size }}>
          {``}
        </Avatar>
      )}
      {noOfPlayer >= 3 && (
        <Avatar
          alt="Green"
          sx={{ bgcolor: "yellow", width: size, height: size }}
        >
          {``}
        </Avatar>
      )}
      {noOfPlayer >= 4 && (
        <Avatar
          alt="Yellow"
          sx={{ bgcolor: "green", width: size, height: size }}
        >
          {``}
        </Avatar>
      )}
    </AvatarGroup>
  );
}
