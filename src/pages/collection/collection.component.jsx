import React from "react";

import "./collection.styles.scss";

const CollectionPage = ({ match }) => (
  <div className="collection-page">
    {console.warn("collection page match", match)}
    <h2>Collection PAGE</h2>
  </div>
);

export default CollectionPage;
