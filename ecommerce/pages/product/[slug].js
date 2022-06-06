import React, {useState} from 'react'
import {client, urlFor} from '../../lib/client'
import { AiOutlineMenu, AiFillStar, AiOutlineStar, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import {Product} from '../../components'
import {useStateContext} from '../../context/StateContext'

const ProductDetails = ({product, products}) => {
  // destructing the props
  const {image, name, details, price} = product
//  slice of state so that the index can be asssigned to a variables and displayed dynamically
  const [index, setIndex] = useState(0)

  const { decQty, incQty, qty} = useStateContext()

  return (
      <div>
        <div className="product-detail-container">
          <div>
            <div className="image-container">
              <img src={urlFor(image && image[index])} className="product-detail-image" />
            </div>
            <div className="small-images-container">
              {/* maps through the item and finds the index to display the picture @ thei ndex */}
              {image?.map((item, i) => (
                <img 
                  key={i}
                  src={urlFor(item)}
                  className={i === index ? 'small-image selected-image' : 'small-image'}
                  onMouseEnter={() => setIndex(i)}
                />
              ))}
            </div>
          </div>
  
          <div className="product-detail-desc">
            <h1>{name}</h1>
            <div className="reviews">
              <div>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div>
              <p>
                (20)
              </p>
            </div>
            <h4>Details: </h4>
            <p>{details}</p>
            <p className="price">${price}</p>
            <div className="quantity">
              <h3>Quantity:</h3>
              <p className="quantity-desc">
                <span className="minus" onClick={decQty}><AiOutlineMinus /></span>
                <span className="num">{qty}</span>
                <span className="plus" onClick={incQty}><AiOutlinePlus /></span>
              </p>
            </div>
            <div className="buttons">
              <button type="button" className="add-to-cart" onClick={() => onAdd(product, )}>Add to Cart</button>
              <button type="button" className="buy-now" onClick=''>Buy Now</button>
            </div>
          </div>
        </div>
  
        <div className="maylike-products-wrapper">
            <h2>You may also like</h2>
            <div className="marquee">
              <div className="maylike-products-container track">
                {products.map((item) => (
                  <Product key={item._id} product={item} />
                ))}
              </div>
            </div>
        </div>
      </div>
    )
  }

  // creating the path and calling the specific product schema
export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: { 
      slug: product.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}


// api call, passes in the props to the Product detail function to access the schema
// products lets you query the whole, and product lets you query the product and slug`
export const getStaticProps = async ({ params: { slug }}) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]'
  
  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  console.log(product);

  return {
    props: { products, product }
  }
}

export default ProductDetails
