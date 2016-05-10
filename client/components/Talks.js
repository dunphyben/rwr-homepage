import React from 'react';

import s from './Talks.styl';

export const Talks = React.createClass({
  render() {
    return (
      <div className={s.page}>
        <div className={s.talksBanner}>
          <div className={s.siteTitle}>
            <h1>Talks</h1>
          </div>
        </div>

        <div className={s.pageContent}>
          <p>We organize talks & presentations from today's leading developers in React. We host them every 45-60 days.</p>
        </div>
      </div>
    );
  }, 
});
