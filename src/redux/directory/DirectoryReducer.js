const INITIAL_STATE = {
    sections:[
        {
          title: 'hats',
          imageUrl: 'https://ae01.alicdn.com/kf/HTB1VzRiMXXXXXXNapXXq6xXFXXXI/227599890/HTB1VzRiMXXXXXXNapXXq6xXFXXXI.jpg?size=83833&height=800&width=800&hash=0a23efe40913adbb0c2cf0306874ef19',
          id: 1,
          linkUrl: 'shop/hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkUrl: 'shop/jackets'
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: 'shop/sneakers'
        },
        {
          title: 'womens',
          // imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          imageUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190423-institute-sustanable-clothing-1556057761.png?crop=0.502xw:1.00xh;0.242xw,0&resize=640:*',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens'
        },
        {
          title: 'mens',
          // imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          imageUrl: 'https://cdn.shopify.com/s/files/1/1270/6637/products/HCXY-2017-New-Men-Jacket-Spring-Autumn-Fashion-Brand-Slim-Fit-aviator-Coats-Male-Baseball-Bomber_b36f2a16-f709-423c-b410-44e305844b96.jpg?v=1528029383',
          
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens'
        }
      ]
}



const DirectoryReducer = (state = INITIAL_STATE ,action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default DirectoryReducer
