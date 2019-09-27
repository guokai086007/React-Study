
class Button extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			data : 0
		};
		this.setNewNumber = this.setNewNumber.bind(this);
		this.removeChild = this.removeChild.bind(this);
	}
	
	setNewNumber()
	{
		this.setState({data:this.state.data+1})
	}
	
	removeChild()
	{
		//ReactDOM.unmountComponentAtNode(document.getElementById('container'));
		const dom = ReactDOM.findDOMNode(this);
		console.log(dom);
	}
	
	render()
	{
		return(
			<div>
				<button  onClick={this.setNewNumber}>please click me!</button>
				<Content  myNumber={this.state.data}></Content>
				<button  onClick={this.removeChild}>removeChild!</button>
			</div>
		);
	}
}


class Content extends React.Component
{
	 componentWillMount()
	 {
	 	console.log('component will mount!!');
	 }
	 
	 componentDidMount()
	 {
	 	console.log('component did mount!!');
	 }
	 
	 componentWillReceiveProps(newProps)
	 {
	 	console.log('component will receive props');
	 	console.log(newProps);
	 }
	 
	 shouldComponentUpdate(newProps,newState)
	 {
	 	console.log('should component update!');
	 	return true;
	 }
	 
	 componentWillUpdate(nextProps,nextState)
	 {
	 	console.log('component will update!!');
	 }
	 
	 componentDidUpdate(prevProps,prevState)
	 {
	 	console.log('component did update!!');
	 }
	 
	 componentWillUnmount()
	 {
	 	console.log('component will Unmount!!');
	 }
	 
	 render()
	 {
	 	console.log('render!!!!!');
	 	
	 	return(
	 		<div>
	 			<h3>{this.props.myNumber}</h3>
	 		</div>
	 	);
	 }
}

ReactDOM.render(
 	 <div>
 		 <Button/>
 	 </div>,
 	 document.getElementById('container')
);

