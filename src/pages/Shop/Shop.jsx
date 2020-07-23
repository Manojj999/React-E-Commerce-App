import React from 'react';
import Shop_Data from './Shop_Data';

import CollectionPreview from '../../Components/Collection-Preview/CollectionPreview';
class Shop extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            collections:Shop_Data
         }
    }
    render() {
        const {collections} =this.state; 
        return ( <div className="shop-page">
            {
                collections.map(({id , ...otherCollection}) => (
                    <CollectionPreview key={id} {...otherCollection}/>
                ))
            }
        </div> );
    }
}
 
export default Shop;