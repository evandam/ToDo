var React = require('react');
var ReactDOM = require('react-dom');

var ToDoApp = React.createClass({
	render: () => {
		return (
			<div>
				<h1>Hello, World!</h1>
			</div>
		);
	}
});

ReactDOM.render(
	<ToDoApp />,
	document.getElementById('container')
);
