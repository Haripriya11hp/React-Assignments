const username ='Hp'
const element = <h1 id="demo">Hello, {username} </h1>


let fruits = ['mango', 'apple','orange','kiwi','cherry']

let items = <ul>
	{
	fruits.map((value,index)=> {
return <li key={value+index}>{value}</li>
	}
	 )
}
</ul>



//ReactDOM.render(element,document.getElementById('container'))
let allitems = 	React.createElement('div',null,element,fruits)
ReactDOM.render(allitems,document.getElementById('container'))
