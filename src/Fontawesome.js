import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Fontawesome(props) {
  return (
    <FontAwesomeIcon
      icon={props.icon}
      style={{
        padding: props.padding,
        background: props.color,
        fontSize: "18px",
        borderRadius: "50%",
        color: "white",
        marginRight: props.marginR,
        marginLeft: props.marginL,
      }}
    />
  );
}
