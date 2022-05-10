import React from "react";

function NicePragrapes(props) {
  const {
    paragraph = [
      "Hey pal",
      "what name would you call a dog that has no both legs?",
      "well it does not matter what name you might call him",
      "trust me he is not coming!",
    ],
  } = props;
  let dataWarehouse = [];
  for (let i = 0; i < paragraph.length; i++) {
    dataWarehouse.push(
      <div key={i}>
        <span>{paragraph[i]}</span>
      </div>
    );
  }
  return <h1>{dataWarehouse}</h1>;
}

export default NicePragrapes;
