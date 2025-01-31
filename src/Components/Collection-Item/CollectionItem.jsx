import React from 'react';
import CustomButtom from '../Custom-Button/CustomButton';
import './Collection_item.scss';
import {connect } from 'react-redux';
import {addItem} from '../../redux/cart/CartAction'
function CollectionItem({item,addItem}) {
    const { name,price,imageUrl} =item;
    return (
        <div className="collection-item">
            <div className="image" style={{backgroundImage:`url(${imageUrl})`}}>

            </div>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButtom  onClick = {() => addItem(item)} inverted>Add To Cart</CustomButtom>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    addItem:item => dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(CollectionItem)
