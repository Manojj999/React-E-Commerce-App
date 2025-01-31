import React from 'react';
import './preview.scss';
import CollectionItem from '../Collection-Item/CollectionItem';


function Collection_Preview({title,items}) {
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items.filter((item,index) => index< 4).map((item) => (
                        <CollectionItem key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default Collection_Preview

