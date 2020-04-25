import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

class App extends Component {
	render() {
		return (
			<div className="ui container comments">
				<ApprovalCard>
					<Comment
						author={faker.name.firstName()}
						timestamp="2 hours ago"
						image={faker.image.avatar()}
						content={faker.lorem.text()}
					/>
				</ApprovalCard>
				<ApprovalCard>
					<Comment
						author={faker.name.firstName()}
						timestamp="6 hours ago"
						image={faker.image.avatar()}
						content={faker.lorem.text()}
					/>
				</ApprovalCard>
				<ApprovalCard>
					<Comment
						author={faker.name.firstName()}
						timestamp="30 minutes ago"
						image={faker.image.avatar()}
						content={faker.lorem.text()}
					/>
				</ApprovalCard>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
