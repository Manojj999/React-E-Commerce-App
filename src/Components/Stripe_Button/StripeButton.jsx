import React from 'react';
import StripeCheckout from 'react-stripe-checkout';



const StripeButton = ({price}) => {

    const priceForStripe = price*100;
    const publishableKey = 'pk_test_51HBg3OIzxgjj1euKTVva1CBesCTBBe4it5RP7VUXu2kBoJGsSVXMMIA9JK1Lxfs2kghnQyRbth7YztCEW2gwnTYV00zLk9szUy';

    const onToken = token =>{
        console.log(token);
        alert('PayMent SuccessFul');
    }
    return (
        <StripeCheckout 
            label="Pay Now"
            name="E-commerce-App Ltd."
            billingAddress
            shippingAddress
            image="https://sendeyo.com/up/d/f3eb2117da"
            description={`Your Total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeButton

