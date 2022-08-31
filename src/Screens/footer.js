import React from 'react';

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* column1 */}
          <div className="col">
            <h4>CARTMAX PVT LTD</h4>
            <ul className="list-unstyled">
              <li>Kingston,New York</li>
              <li>56 camden street</li>
              <li>Zip code- 12466</li>
            </ul>
          </div>
          {/* column2 */}
          <div className="col">
            <h4>CONTACT</h4>
            <ul className="list-unstyled">
              <li>PHONE: 342-420-6969</li>
              <li>E-MAIL: cartmax@gmail.com</li>
            </ul>
          </div>
          {/* column3 */}
          <div className="col">
            <h4>SOCIAL</h4>
            <ul className="list-unstyled">
              <p>Connect with us </p>
              <div className="row">
                <li className="col">
                  <a
                    href="https://www.instagram.com/cartmax_shop_online"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fab fa-instagram fa-2x"></i>
                  </a>
                </li>
                <li className="col">
                  <a
                    href="https://twitter.com/Cartmax_store"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fab fa-twitter fa-2x"></i>
                  </a>
                </li>
                <li className="col">
                  <a
                    href="https://www.facebook.com/profile.php?id=100085121143768"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fab fa-facebook fa-2x"></i>
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} CARTMAX PRIVATE LIMITED | All
            rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
