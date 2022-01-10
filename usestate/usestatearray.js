function MyApp(){
	const[fruits, setfruits] = React.useState(['Apple','Orange','Mango','Kiwi'])
	let removeKiwi=()=>{
		let indexOfKiwi = fruits.indexOf('Kiwi')
		console.log(indexOfKiwi);
	
	if(indexOfKiwi >= 0 ){
	fruits.splice(indexOfKiwi,1)
	setfruits(
		[...fruits]
	)}
}

return <div>
	{
		fruits.map((fruits,index)=>{
			return <p key={index+fruits}>{fruits}</p>
		})
	}
	<button onClick={removeKiwi}>Remove Kiwi</button>
</div>
		}
		ReactDOM.render(<MyApp />,document.getElementById('container'))