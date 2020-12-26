import React from 'react';

function Card(props) {
    return (
    <div className="job-card">
        {/* <!-- Logo --> */}
		<div className="job-card__logo"></div>

		{/* <!-- Content with title/subtitle --> */}
        <div className="job-card__content">
            <div className="job-card__title">{props.company}</div>
            <div className="job-card__subtitle">{props.position}</div>
        </div>
    </div>
    );
}

export default Card;