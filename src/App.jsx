import { useState, useReducer } from 'react'


const initialState = {
	count: 0
}

function reducer(state, {type, number}) {
	switch (type) {
		case 'inc':
			return { count: state.count + number };

		case 'dec':
			return { count: state.count - number };

		case 'reset':
			return { count: initialState.count};

		default:
			console.log("can you see me? default")
			throw Error("this is not a valid option")
	}
}

function App() {
	const [value, setValue] = useState(0)
	const [state, dispatch] = useReducer(reducer, initialState)

	console.log("🚀 ~ file: App.jsx:30 ~ App ~ state", state)

	return (
		<div style={{ backgroundColor: value }}>
			<h2>Hello world : {value}</h2>
			<input type={"text"} value={value} onChange={(e) => setValue(e.target.value)} />

			<h1>this is our count : {state.count}</h1>
			<button onClick={() => dispatch({ type: 'inc', number: 1 })}> Inc </button>
			<button onClick={() => dispatch({ type: 'dec', number: 1 })}> Dec </button>
			<button onClick={() => dispatch({ type: 'reset' })}> Reset </button>
		</div>
	)
}

export default App
