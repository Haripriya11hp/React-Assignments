
//parent to child


//parent component
function App(props){
	return <div>
		<h1>welcome, {props.LoggedInUser} </h1>
		<Home appName="NETFLIX" userName={props.LoggedInUser}/>
	</div>
}

//child component
function Home(props)
{
	return <div>
		<h1>Home Page, {props.appName} </h1>
		<h2>Name of the user, {props.userName}</h2>
	</div>
}

//ReactDOM.render(<Home LoggedInUser="HP" />, document.getElementById('container'))
ReactDOM.render(<App LoggedInUser="HP" />, document.getElementById('container'))