
//passing data from parent to child need to call parent inside child using props

function App(props)
{
	const data = ['apple','mango','kiwi','grapes']
	return <div>
		<h1>Welcome , {props.userName}</h1>
		<List fruits={data} />
	</div>
}

function List(props){
	return <div>
		<h2>Hi Hp</h2>
		{props.fruits.map((value,index)=>{
			return <li key={value+index}>{value}</li>
		})}
	</div>
}
ReactDOM.render(<App userName="HPP" />,document.getElementById('container'))