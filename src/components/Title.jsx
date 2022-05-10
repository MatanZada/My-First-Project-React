import React from "react";

export default function Title(props) {
  const { title = "A day at the beach" } = props;
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}
