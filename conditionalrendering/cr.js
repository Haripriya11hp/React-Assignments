class MyApp extends React.Component{
	state={
		adminName:"Jansi",
		userName:"Rani",
		isAdmin:true
	}
	render()
	{
		let {adminName,userName,isAdmin}=this.state;
		let renderData=null
		if(isAdmin)
		{
			renderData=<div>
				<h1> ADMIN NAME : {adminName} </h1>
				<h1>HOME</h1>
				<h1>LOGIN</h1>
			</div>
		}
		else{
			renderData=<div>
				<h1> USER NAME : {userName} </h1>
				<h1>LOGIN</h1>
			</div>
		}
		return <div>
			{renderData}
			<button onClick={()=>{this.changeAdminUserView()}}>{isAdmin ?"click to see user view " : "click to see admin view" }</button>
		</div>
	}

changeAdminUserView(){
	// if(this.state.isAdmin){
	// 	this.setState({
	// 		isAdmin:false
	// 	})

	// }else{
	// 	this.setState({
	// 		isAdmin:true
	// 	})
	this.setState({
		isAdmin: !this.state.isAdmin
	})
}
}


ReactDOM.render(<MyApp />,document.getElementById('container'))