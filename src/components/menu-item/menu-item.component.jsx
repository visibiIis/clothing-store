import React from "react";

import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size }) => (
	<div className={`${size ? size : ""} menu-item`.trim()}>
		<div
			style={{
				backgroundImage: `url(${imageUrl})`,
			}}
			className="background-image"
		></div>
		<div className="content">
			<span className="title">{title}</span>
			<span className="subtitle">SHOP NOW</span>
		</div>
	</div>
);

export default MenuItem;
