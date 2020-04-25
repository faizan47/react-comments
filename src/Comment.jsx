import React from 'react';

const Comment = ({ image, author, timestamp, content }) => {
	return (
		<div className="comment">
			<a href="/" className="avatar">
				<img alt="pic" src={image} />
			</a>
			<div className="content">
				<a href="/" className="author">
					{author}
				</a>
				<div className="metadata">
					<span className="date">{timestamp}</span>
				</div>
				<div className="text">{content}</div>
			</div>
		</div>
	);
};

export default Comment;
