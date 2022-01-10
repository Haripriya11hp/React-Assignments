
class Parent extends React.Component{
	state={
		text:''
	}
	render()
	{
		return <div>
			<h1>Im parent</h1>
			<h2>Data from child :{this.state.text} </h2>
			<Child action={this.getDataFromChild.bind(this)} />
		</div>
	}
	//chocolate
	getDataFromChild(childData){
		console.log(childData);
this.setState({
	text:childData
})
	}
}

function Child(props){
	let str="I have your mobile";
	return <div>
		<h1>Im child</h1>
		<button onClick={()=>{props.action(str)}}>Send data to parent</button>
	</div>
}

ReactDOM.render(<Parent />,document.getElementById('container'))