import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import './App.css';

const TEST = gql`
	query {
		jobs {
			title
			company {
				name
			}
			locationNames
		}
	}
`;

function App() {
	const { data } = useQuery(TEST);

	console.log(data);

	return (
		<div className='App'>
			<h1>GraphQL Jobs</h1>
		</div>
	);
}

export default App;
