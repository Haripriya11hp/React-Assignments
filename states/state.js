class Greet extends React.Component
{
	state={
		firstName:"Nandhu",
		age:"23"
	}
	render()
	{
		return <div>
			<h1>Welcome, {this.state.firstName} Age : {this.state.age} </h1>
			<button onClick={()=>{this.changeName()}}>Click to Change Name</button>
		</div>

	}
	changeName()
	{
		console.log('before :',this.state.firstName);
		//this.state.firstName="Hp"
		
		this.setState({
						firstName:"HP",
						age:"20"
		},()=>{
		console.log('After :',this.state.firstName);})
	}
}


ReactDOM.render(<Greet />,document.getElementById('container'))