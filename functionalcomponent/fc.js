function Header({brand,price})
{
	return <h1>IM HEADER {brand} {price}</h1>
}
function Content(props)
{
	console.log(props);
	return <h1>IM CONTENT {props.userName} { props.uId} </h1>
}
function Footer({person})
{
	return <h1>IM FOOTER {person.firstName}{person.secondName}
	</h1>
}
ReactDOM.render(<div>
<Header brand="audi" price="12" />
<Content userName="hp" uId="11" />
<Footer person={{firstName:'jk', secondName:'kk'}}/>
</div>	,document.getElementById('container'))