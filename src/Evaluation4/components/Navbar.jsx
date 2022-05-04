
import {Link} from 'react-router-dom'


export const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "#8000ff", padding: 20 }}>
      {/* 
                all the links in navbar,
      IMPORTANT: Link should match as mentioned in problem statement 
      */}
      <Link  style={{color:"white" ,textDecoration: "none",margin:"10px"}}to="/">Home</Link>
      <Link   style={{color:"white" ,textDecoration: "none",margin:"10px"}}to="/about">About</Link>
      <Link   style={{color:"white" ,textDecoration: "none",margin:"10px"}}to="/products">products</Link>
      <Link   style={{color:"white" ,textDecoration: "none",margin:"10px"}}to="/products/men">Men</Link>
      <Link  style={{color:"white" ,textDecoration: "none",margin:"10px"}} to="/products/women">Women</Link>
      <Link   style={{color:"white" ,textDecoration: "none",margin:"10px"}}to= "/products/kids">Kids</Link>
      <Link   style={{color:"white" ,margin:"10px",textDecoration: "none"}}to="/products/home decor">Home decor</Link>
      
    </nav>
  );
};
