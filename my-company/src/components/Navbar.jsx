import { Link } from 'react-router-dom';

function Navbar() {
  const navStyle = { 
    padding: '10px', 
    backgroundColor: '#f0f0f0',  // changed from 'background'
    marginBottom: '20px',
    display: 'flex',              // added
    justifyContent: 'space-around' // added
  };

  const linkStyle = { marginRight: '15px', textDecoration: 'none', color: 'black' };

  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/about" style={linkStyle}>About</Link>
      <Link to="/services" style={linkStyle}>Services</Link>
      <Link to="/contact" style={linkStyle}>Contact</Link>
    </nav>
  );
}

export default Navbar;

