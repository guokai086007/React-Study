
const Item = React.createClass({
	
	displayName:"Item",
	
	getDefaultProps(){
		console.log("getDefaultProps !!");
		return{
			group:123
		}
	},
	
	getInitialState(){
		console.log("getInitialState ....");
		return{
			name:'hahahaha'
		}
	},
	
	componentWillMount(){
		console.log('component will mount');
		this.state.name = 'GK007';
	},
	
	componentDidMount(){
		console.log('component did mount');
		const dom = ReactDOM.findDOMNode(this);
		console.log(dom);
		
		let isYellow = true;
		window.setInterval(function(){
			if(isYellow)
			{
				dom.style.backgroundColor = 'red';
				isYellow = false;
			}
			else
			{
				dom.style.backgroundColor = 'yellow';
				isYellow = true;
			}
		},1000);
	},
	
	render(){
		console.log('render');
		return <div style={{fontSize:30, marginTop:50}}>
				{this.props.group+"====>"+this.state.name}
		   </div>
	}
	
});

ReactDOM.render(
	<div>
		<Item/>
	</div>
	,document.getElementById('container')
);