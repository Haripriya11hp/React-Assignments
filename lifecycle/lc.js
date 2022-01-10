class Parent extends React.Component{
	constructor(props){
		super(props)
		this.state={
			text:'mounting phase',
			show:true
		}
		console.log('Parent constructor executed');
	}
	static getDerivedStateFromProps(props,state){
		//1. return new state or if no is required in state then return null
		console.log('parent getDerivedStateFromProps executed');
		return state 
	}
	render(){
		//2. return jsx and no side effects and should not update state in render
		console.log('parent render executed');
		return <div>
			<p>{this.state.text}</p>
			<button onClick={this.updateText('updating phase')}
		</div>
	}
	componentDidMount(){
//first time mounting to real dom
//used to make side effects if we make all api calling
//interacting with real dom
//used to update 
console.log('parent componentDidMount executed')
	}
}