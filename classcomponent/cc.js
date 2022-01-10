class Header extends React.Component{
	render()
	{
		return <h1>IM HEADER</h1>
	}
}

class Content extends React.Component{
	render()
	{
		return <h4>IM CONTENT {this.props.firstname}</h4>
	}
}
class Footer extends React.Component{
	render()
	{
		return <h1>IM FOOTER</h1>
	}
}

ReactDOM.render(<div>
	<Header />
	<Content firstname = "hp" />
	<Content />
	<Content />
	<Footer />
</div>, document.getElementById('container'))