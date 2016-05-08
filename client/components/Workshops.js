import React from 'react';

import s from './Workshops.styl';

export const Workshops = React.createClass({
	render() {
		return (
			<div className={s.page}>
				<div className={s.siteTitle}>
					<h1>Workshops</h1>
				</div>
				<p>Welcome to Workshops</p>
			</div>
		);
	},
});