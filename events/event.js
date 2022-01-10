class Welcome extends React.Component{
	render(){
		return <div>
			<h1>Welcome, {this.props.firstName}</h1>
			<button onClick={this.getData}>click me </button>
			<button onClick={()=>{this.getName()}}>Get Name</button>
			<button onClick={()=>{this.getAge("18")}}>Get Age</button>
		</div>
	}
	getData()
	{
		console.log('get data executed');
	}
	getName()
	{
		console.log(this);
	}
	getAge(data)
	{
		console.log(data);
	}
}
ReactDOM.render(<Welcome firstName="dora"/>,document.getElementById('container'))