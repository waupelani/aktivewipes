import React from 'react';
import { Link } from 'react-router-dom';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/logo.jpg`} alt="" />
      </Link>
      <header>
        <h2>Aktivewipes</h2>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Our proprietary AKTIVE wipes are made from top
        quality sources to provide you with a powerful solution
        to sterilizing commercial, industrial, and household surfaces.
        Ready to use disinfectant wipes are both durable,
        lightly scented. They won’t scratch surfaces or leave a residue.
      </p>
    </section>

    <section className="blurb">
      <h3><a href="mailto:sales@aktivewipes.com">sales@aktivewipes.com</a></h3>
      <h4>808-927-3685 </h4>
      <h5>BLT Ventures LLC</h5>
      <h6>40 Montague Ln
        Frisco TX 75036
      </h6>
    </section>

    <section id="footer">
      <p className="copyright">&copy; AKTIVEWIPES 2021 <Link to="/">aktivewipes.us</Link>.</p>
    </section>
  </section>
);

export default SideBar;
