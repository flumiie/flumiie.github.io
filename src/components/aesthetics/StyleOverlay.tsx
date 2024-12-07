import { Fragment } from "react";

import "/src/css/style-overlay.scss";

const StyleOverlay = () => {
  return (
    <Fragment>
      <div id="grid-area" />
      <div id="left-shadow" />
      <div id="right-shadow" />
    </Fragment>
  );
};

export default StyleOverlay;
