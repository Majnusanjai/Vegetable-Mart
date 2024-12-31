import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container">
        <div className="row">
          
          <div className="col-md-4 text-primary">
            <h5>About Us</h5>
            <p>
              Welcome to our Vegetable Mart! We provide fresh vegetables directly from farms. 
              Quality and freshness are our top priorities.
            </p>
          </div>

         
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Home</a></li>
              <li><a href="#" className="text-white">Products</a></li>
              <li><a href="#" className="text-white">Contact Us</a></li>
              <li><a href="#" className="text-white">About Us</a></li>
            </ul>
          </div>

          
          <div className="col-md-4 text-success">
            <h5>Contact Us</h5>
            <p><i className="fas fa-map-marker-alt"></i> 123 Vegetable Street, Fresh City</p>
            <p><i className="fas fa-phone"></i> +1 (234) 567-890</p>
            <p><i className="fas fa-envelope"></i> contact@vegetablemart.com</p>
          </div>
        </div>

        
        <div className="text-center mt-4">
          <p>&copy; 2024 Vegetable Mart. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
