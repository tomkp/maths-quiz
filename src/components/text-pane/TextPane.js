import React from 'react';
import './text-pane.css';

const TextPane = ({ update, questions }) => {
	return (
		<div className="TextPane">
			<textarea onChange={(e) => update(e.target.value) } value={questions} />
		</div>
	);
};

TextPane.propTypes = {
};

export default TextPane;