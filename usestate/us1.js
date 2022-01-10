function MyApp(){
	const[person, setperson] = React.useState({
		firstName: 'Hari',
		secondName: 'Priya'
	})

console.log(person);

	let updateFirstName=()=>{
		setperson({
			...person,
			firstName: "Jansi",
			// secondName: "Rani"
		})
	}
	return <div>
		<h2>FirstName:{person.firstName}</h2>
		<h2>LastName:{person.secondName}</h2>
		<button onClick={updateFirstName}>Update FirstName</button>
	</div>
}

ReactDOM.render(<MyApp />,document.getElementById('container'))