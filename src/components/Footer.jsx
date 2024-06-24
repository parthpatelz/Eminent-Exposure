import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { socialicon01, socialicon02, socialicon03, socialicon04 } from '../imagePath';

const Footer = () => {
  return (
    <div className="bg-white px-4 text-white text-center mt-10">
      <div className="row">
        <div className="col-xl-3 col-sm-6 col-12">
          <a href="https://www.youtube.com/channel/UCk5d3SkOYK__Dp7hY_kvS7A" target="_blank" rel="noopener noreferrer">
            <div className="card flex-fill linkedin sm-box">
              <div className='social-likes'>
                <p>Subscribe us on Youtube</p>
                <h6>69</h6>
              </div>
              <div className="social-boxs">
                <img src={socialicon04} alt="Social Icon" />
              </div>
            </div>
          </a>
        </div>

        <div className="col-xl-3 col-sm-6 col-12">
          <a href='https://www.facebook.com/profile.php?id=61554977925542' target="_blank" rel="noopener noreferrer">
            <div className="card flex-fill fb sm-box">
              <div className="social-likes">
                <p>Like us on facebook</p>
                <h6>50</h6>
              </div>
              <div className="social-boxs">
                <img src={socialicon01} alt="Social Icon" />
              </div>
            </div>
          </a>
        </div>
        <div className="col-xl-3 col-sm-6 col-12">
          <a href='https://www.instagram.com/vpn_studios_/' target="_blank" rel="noopener noreferrer">

            <div className="card flex-fill twitter sm-box">
              <div className="social-likes">
                <p>Follow us on twitter</p>
                <h6>48</h6>
              </div>
              <div className="social-boxs">
                <img src={socialicon02} alt="Social Icon" />
              </div>
            </div>
          </a>
        </div>

        <div className="col-xl-3 col-sm-6 col-12">
          <a href='https://www.instagram.com/vpn_studios_/' target="_blank" rel="noopener noreferrer">

            <div className="card flex-fill insta sm-box">
              <div className="social-likes">
                <p>Follow us on instagram</p>
                <h6>131</h6>
              </div>
              <div className="social-boxs">
                <img src={socialicon03} alt="Social Icon" />
              </div>
            </div>
          </a>
        </div>
      </div>
      <footer>
        <p>Copyright © 2024 VPN Studios.</p>
      </footer>

    </div>
  );
}

export default Footer