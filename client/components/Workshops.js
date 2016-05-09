import React from 'react';

import s from './Workshops.styl';
import rwrVip from './img/rwr-vip.svg';

export const Workshops = React.createClass({
	render() {
		return (
			<div className={s.page}>
				<div className={s.workshopBanner}>
					<div className={s.siteTitle}>
						<h1>Workshops</h1>
					</div>
				</div>

				<div className={s.pageContent}>
					<p>Learn to build real-world apps with react, <span className={s.blueStrong}>today.</span></p>
					<p>Our workshops are taught by instructors with years of experience building real-world applications.</p>
					<p>Join our VIP mailing list and get first notification regarding meetup announcements, workshops, and other events.</p>

					<div className={s.vipLogo}>
						<img src={rwrVip} alt='Real World React VIP Logo' />
					</div>
				</div>
			</div>
		);
	},
});