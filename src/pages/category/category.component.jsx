import React from "react";

import "./category.styles.scss";
import CollectionItem from "../../components/collection-item/collection-item.component";

const CategoryPage = ({ match }) => (
  <div className="category">
    {console.warn("match", match)}
    <h2>CATEGORY PAGE</h2>
    {/* <CollectionItem /> */}
  </div>
);

export default CategoryPage;
