import React from "react";

function SubTitle(props) {
  const { subTitles = "A nice day at the beach" } = props;
  return (
    <React.Fragment>
      <h1>{subTitles}</h1>
    </React.Fragment>
  );
}

export default SubTitle;
