import React from "react";
import { Route } from "react-router-dom";
import CollectionOverView from "../../Components/Collection-OverView/CollectionOverView";
import CollectionPage from "../Collection/Collection";

const Shop = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionOverView} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default Shop;
