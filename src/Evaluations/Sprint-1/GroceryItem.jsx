// reusable card component
import CartButton from './CartButton';
import './style.css'
const GroceryItem = (props) => {
  return <>
     <div className="parent">
    
     <div className='grocery'>
      <div className='image'>
      <img src={props.imgURL} alt="groceries" />
      </div>
      <p>{props.title}</p>
      <p>{props.sellingPrice}</p>
      <p style={{color:"red"}}>{props.mrp}</p>
      <div className='discount'>
      <p >{props.discount}</p>
      </div>
      < CartButton/>
     </div>
    
     </div>
  </>;
};
export default GroceryItem;
