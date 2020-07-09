import React from 'react';
import './preview.scss';
import Collection_Item from '../Collection-Item/Collection_Item';


function Collection_Preview({title,items}) {
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items.filter((item,index) => index< 4).map(({id , ...otherProps}) => (
                        <Collection_Item key={id} {...otherProps} />
                    ))
                }
            </div>
        </div>
    )
}

export default Collection_Preview

