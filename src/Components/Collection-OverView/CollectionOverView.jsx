import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../Collection-Preview/CollectionPreview";
import "./CollectionOverView.scss";
import { selectCollectionsForPreview } from "../../redux/shop/ShopSelector";

const CollectionOverView = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollection }) => (
        <CollectionPreview key={id} {...otherCollection} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
    collections:selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverView);
