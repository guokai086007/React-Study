
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
		this.state.loopNum = window.setInterval(function(){
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
	
	componentWillReceiveProps(nextProps){
		console.log('componentWillReceiveProps.....');
	},
	
	shouldComponentUpdate(nextProps,nextState){
		console.log('shouldComponentUpdate.....');
		return true;
	},
	
	componentWillUpdate(nextProps,nextState){
		console.log('component will update.....');
	},
	
	componentDidUpdate(oldProps,oldState){
		console.log('component did update。。。。。');
	},
	
	update(){
		this.setState({name:'郭凯 yes！'});
		//this.forceUpdate();
	},
	
	render(){
		console.log('render');
		return <div style={{fontSize:30, marginTop:50}}>
				{this.props.group+"====>"+this.state.name}
				<hr/>
			    <button style={{fontSize:25}} onClick={this.update}>点击我!</button>
		    </div>
	},
	
	componentWillUnmount(){
		console.log('component will unmount******');
		clearInterval(this.state.loopNum);
	}
	
});

function render(bool){
	ReactDOM.render(
		<div>
			 {bool ? <Item/> : ''}
		</div>,
	   document.getElementById('container')
	);
}

render(true);

document.getElementById('b1').onclick = function(){
	render();
}
