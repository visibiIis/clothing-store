import React from "react";
import { withRouter } from "react-router-dom";

import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => (
	<div
		className={`${size ? size : ""} menu-item`.trim()}
		onClick={() => history.push(`${match.url}${linkUrl}`)}
	>
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

export default withRouter(MenuItem);
