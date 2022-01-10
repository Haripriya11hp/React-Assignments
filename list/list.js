let listelement = React.createElement('ul',null, 
React.createElement('li',{id:'Fruits'},'Fruits'),
React.createElement('li',{id:'Dates'},'Dates')
)


let mobiles = ['vivo','oppo','nokia','iphone']
let mobileItems = mobiles.map((mobile,index)=>
{
	return React.createElement('li',{key:mobile+index},mobile)
})

console.log(mobileItems)
let allitems = React.createElement('div',null,listelement,mobileItems)

//ReactDOM.render(listelement,document.getElementById('container'))
//ReactDOM.render(mobileItems,document.getElementById('container'))
ReactDOM.render(allitems,document.getElementById('container'))