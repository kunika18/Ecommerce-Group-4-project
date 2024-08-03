import React from 'react'
import { ShopContext } from '../Context/ShopContext'

const Product=()=>{

    const {all_product}=useContext(ShopContext)
    const {productId} = useParams();
    const product=all_product.find((e)=>e.id==Number(productId));
    return (
        <div>
            <Breadcrum product={product}/>
            <ProductDisplay product={product}/>
        </div>
    )
}

export default Product