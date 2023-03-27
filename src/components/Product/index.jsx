import "./style.scss"
import Count from "../Count";
import ButtonDelete from "../ButtonDelete";
import formatPrice from "../../utils/priceFormater";

const Product = ({product, deleteProduct, increase, decrease, changeCount}) => {
    const { img, title, priceTotal, count, id } = product;

    
    return ( 
        <section className="product">
            <div className="product__img"><img src={`./img/products/${img}`} alt={title}/></div>
            <div className="product__title">{title}</div>
            <div className="product__count">
                <Count product={product} count={count} increase={increase} decrease={decrease} changeCount={changeCount} id={id} />
            </div>
            <div className="product__price">{formatPrice(priceTotal)}</div>
            <div className="product__controls">
                <ButtonDelete deleteProduct={deleteProduct} id={id} />
            </div>
        </section>
     );
}
 
export default Product;