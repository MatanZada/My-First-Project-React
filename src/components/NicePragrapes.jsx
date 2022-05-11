import React from "react";

function NicePragrapes(props) {
  const { paragraph = [] } = props;
  let dataWarehouse = [];
  for (let i = 0; i < paragraph.length; i++) {
    dataWarehouse.push(
      <div>
        <span>{paragraph[i]}</span>
      </div>
    );
  }
  return <h1>{dataWarehouse}</h1>;
}

export default NicePragrapes;
