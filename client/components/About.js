import React from 'react';

import s from './About.styl';

export const About = React.createClass({
  render() {
    return (
      <div className={s.page}>
        <div className={s.siteTitle}>
          <h1>Talks</h1>
        </div>
        <p>We organize talks & presentations from today's leading developers in React. We host them every 45-60 days.</p>
      </div>
    );
  }, 
});
