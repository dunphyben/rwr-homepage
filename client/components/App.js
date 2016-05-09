import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import 'normalize.css';

// Using CSS Modules so we assign the styles to a variable
import s from './App.styl';
import logo from './img/rwreact-logo.svg'; 

// Favicon link is in the template, this just makes webpack package it up for us
import './favicon.ico';

export const Home = React.createClass({
  render() {
    return (
      <div className={s.page}>
        <div className={s.siteBackground}>
        </div>
        <div className={s.siteLogo}>
          <img src={logo} alt='Real World React Logo' />
        </div>
        <div className={s.siteTitle}>
          <h1 className={s.centerText}>Talks. Workshops. Community.</h1>
        </div>
        <div className={s.homeDescription}>
          <p className={s.centerText}>Advancing knowledge, awareness, and usage of React.js</p>
          <p>Organizers</p>
        </div>
        <ul>
          <li>Ian <span className={s.hl}>Sinnott</span></li>
          <li>Berkeley <span className={s.hl}>Martinez</span></li>
          <li>Benjamin <span className={s.hl}>Dunphy</span></li>
        </ul>
      </div>
    );
  },
});

export const NotFound = React.createClass({
  render() {
    return (
      <div className={s.page}>
        <h4>Not found</h4>
      </div>
    );
  },
});

/**
 * NOTE: As of 2015-11-09 react-transform does not support a functional
 * component as the base compoenent that's passed to ReactDOM.render, so we
 * still use createClass here.
 */
export const App = React.createClass({
  propTypes: {
    children: PropTypes.any,
  },
  render() {
    return (
      <div className={s.App}>
        <nav className={s.nav}>
          <IndexLink to='/' activeClassName={s.active}>Home</IndexLink>
          <Link to='/talks' activeClassName={s.active}>Talks</Link>
          <Link to='/workshops' activeClassName={s.active}>Workshops</Link>
        </nav>
        {this.props.children}
      </div>
    );
  },
});
