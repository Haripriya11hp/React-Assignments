

function MyApp()
{
	//class component
	// state={
	// 	name:'priya',
	// 	age:20
	// } 

	//functional component
	const [Name, setName] = React.useState("priya")
	const [Age, setAge] = React.useState("20")
	let updateName=()=>{
		setName("Hari")
	setAge(25)
	}

	return <div>
		<h1>Welcome, {Name}  Age:{Age}</h1>
		<button onClick={()=>{updateName()}}>Update Name</button>
	</div>
}

ReactDOM.render(<MyApp />,document.getElementById('container'))