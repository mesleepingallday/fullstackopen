import React from "react";

export default function Notification({ message }) {
  if (message === null) {
    return null;
  }

  if (message.type === "error") {
    return <div className="error">{message.data}</div>;
  }
  if (message.type === "success") {
    return <div className="successful">{message.data}</div>;
  }
  return null;
}
