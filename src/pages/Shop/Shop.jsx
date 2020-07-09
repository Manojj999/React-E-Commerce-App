import React from 'react';
import Shop_Data from './Shop_Data';

import Collection_Preview from '../../Components/Collection-Preview/Collection_Preview';
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
                    <Collection_Preview key={id} {...otherCollection}/>
                ))
            }
        </div> );
    }
}
 
export default Shop;