const list = [];

const database = {
	add(article){
		list.push(article);
		return list.length - 1;
	},
	del(index){
		list[index] = null;
	},
	update(index,newArticle){
		list.splice(index,1,newArticle);
	},
	get list(){
		return list;
	}
};

const Item = React.createClass({
	
	displayName:"Item",
	
	getDefaultProps()
	{
		return{
			value:"guokai3372",
		}
	},
	
	getInitialState()
	{
		return{
			value:this.props.value,
			name:"gk123",
			currentHistoryIndex:0,
			history:[this.props.value]
		}
	},
	
	componentWillMount()
	{
		this.state.dbkey = database.add({value:this.state.value});
	},
	
	componentDidMount()
	{
		 const dom = ReactDOM.findDOMNode(this);
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
		this.state.value = nextProps.value;
	},
	
	shouldComponentUpdate(nextProps,nextState){
		return true;
	},
	
	componentWillUpdate(nextProps,nextState){
		//update databases
		let dbkey = this.state.dbkey;
		database.update(dbkey,{value:this.state.value});
	},
	
	componentDidUpdate(oldProps,oldState){
		let dom = ReactDOM.findDOMNode(this);
		
		let oldStyle = dom.style.border;
		dom.style.border = '4px solid green';
		setTimeout(
			function(){
				dom.style.border = oldStyle;
			}
		,2000);
	},
	
	changeValue(event)
	{
		this.setState({value:event.target.value});
	},
	
	save(){
		const value = this.state.value;
		const history = this.state.history;
		const currentHistoryIndex = history.length;
		history.push(value);
		this.setState({
			history,
			currentHistoryIndex
		});
	},
	
	prev(){
		let currentHistoryIndex = this.state.currentHistoryIndex;
		if(currentHistoryIndex!==0){
			currentHistoryIndex-=1;
			this.setState({currentHistoryIndex});
		}
	},
	
	next(){
		let currentHistoryIndex = this.state.currentHistoryIndex;
		if(currentHistoryIndex!==this.state.history.length-1){
			currentHistoryIndex+=1;
			this.setState({currentHistoryIndex});
		}
	},
	
	render(){
		console.log('render');
		return <div style={{marginTop:30}}>
			<div>
				<button onClick={this.prev}>prev</button>
				<span style={{fontSize:30}}>{this.state.currentHistoryIndex+"--->"+this.state.history[this.state.currentHistoryIndex]}</span>
				<button onClick={this.next}>next</button>
			</div>
			<input value={this.state.value} onChange={this.changeValue}/>
			<button onClick={this.save}>save</button>
		</div>
	},
	
	componentWillUnmount()
	{
		console.log('component will unmount******');
		clearInterval(this.state.loopNum);
	}
	
});

ReactDOM.render(
	<div>
		<Item/>
	</div>,
    document.getElementById('container')
);
