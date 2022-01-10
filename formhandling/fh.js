function MyApp(){
	const [user, setuser] = React.useState({
		userName:'',
		password:''
	})
	let updateUserName= (event)=>
	{
		console.log(event.target.value);
		setuser({
			...user,
			userName:event.target.value
		})
	}
	let updatepassword= (event)=>
	{
		console.log(event.target.value);
		setuser({
			...user,
			password:event.target.value
		})
	}

let login=(event)=>{
	event.preventDefault();
	console.log(user);
	setuser({
		userName:'',
		password:''
	})
}

return <form>
	Username: <input type="text" value={user.userName} onChange={(event)=>{updateUserName(event)}}/>
	<br />
	<br />
	Password: <input type="text" value={user.password} onChange={(event)=>{updatepassword(event)}}/>
	<br />
	<br />
<button>Login</button>
</form>
}
ReactDOM.render(<MyApp />,document.getElementById('container'))