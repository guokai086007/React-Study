
const exf = {
	test(){
		alert('my name is guokai-->'+this.props.group);
	}
};

//const Item = React.createClass(
//	{
//	
//		displayName:'guokai',
//		
//		mixins: [exf],
//		
//		getDefaultProps(){
//			return{
//				group:"abcdefg"
//			}
//		},
//		
//		render(){
//			return <div style={{fontSize:30, marginTop:50}}>
//			    {this.props.group}
//			    <hr/>
//				<button onClick={this.test}> onClick me! </button>
//			</div>
//		
//			//React.createElement('div',null,this.props.group);
//		}
//  }	
//);

class Item extends React.Component{
	
	   constructor(props)
	   {
	   	   super(props);
	   	   this.state = {
	   	   	   result:123
	   	   }
	   }
	
	   static defaultProps()
	   {
			return
			{
				group:"abcdefg"
			}
	   }
	   
	   test()
	   {
	   	    alert('my name is guokai-->'+this.props.group);
	   }
		
		render(){
			return <div style={{fontSize:30, marginTop:50}}>
			    {this.props.group+"--->"+this.state.result}
			    <hr/>
				<button onClick={this.test.bind(this)}> onClick me! </button>
			</div>
		}
}

ReactDOM.render(
	<Item group="hello"/>,
	document.getElementById('container')
);