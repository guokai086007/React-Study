//ReactDOM.render(
//	  	<div>
//		  	<br/> <br/>
//			<button className="btn btn-info">Add</button>
//			<br/><br/>
//			<ul className="list-group">
//			  <li className="list-group-item">
//			  	<input className="item-edit" /> 
//			  	<a href="#" className="glyphicon glyphicon-plus-sign"></a>
//			  	<a href="#" className="glyphicon glyphicon-remove"></a>
//			  </li>
//			  <li className="list-group-item">Cras justo odio <a href="#" className="right glyphicon glyphicon-trash"></a><a href="#" className="right glyphicon glyphicon-wrench"></a></li>
//			</ul>
//		</div>,
//	    document.getElementById('container')
//);

//Item组件
const Item = React.createClass({
	
	getInitialState(){
		return {
			isEdit:true
		}
	},
	
	edit(){
		this.setState({isEdit:true});
		this.forceUpdate();
	},
	
	remove(){
		this.props.onRemove(this.props.id);
	},
	
	changeHandle(event){
		this.state.value = event.target.value;
		this.forceUpdate();
	},
	
	save(){
		this.props.onSave(this.props.id,this.refs.inputText.value);
		this.setState({isEdit:false});
	},
	
	render(){
		return this.state.isEdit ?
		<li className="list-group-item">
			{this.props.id+"、"}
		  	<input className="item-edit" onChange={this.changeHandle} ref="inputText"  defaultValue={this.props.value}/> 
		  	<a href="#" className="glyphicon glyphicon-plus-sign" onClick={this.save}></a>
		  	<a href="#" className="glyphicon glyphicon-remove" onClick={this.remove}></a>
		 </li> 
		 
		 :
		 
		<li className="list-group-item">
			 {this.props.id+"、           "+this.props.value}
			 <a href="#" className="right glyphicon glyphicon-trash" onClick={this.remove}></a>
			 <a href="#" className="right glyphicon glyphicon-wrench" onClick={this.edit}></a>
		</li>
	}
});

//List组件
const List = React.createClass({
	
	getInitialState(){
		return {
			key:0,
			list:new Map()
		}
	},
	
	add(){
		const key = ++this.state.key;
		this.state.list.set(key,'');
		this.forceUpdate();
	},
	
	removeItem(id){
		this.state.list.delete(id);
		this.forceUpdate();
	},
	
	save(id,value){
		this.state.list.set(id,value);
		this.forceUpdate();
	},
	
	render(){
		
		const listDOM = [];
		
		for(let entity of this.state.list)
		{
			listDOM.push(<Item onSave={this.save} onRemove={this.removeItem} onEdit={this.edit} key={entity[0]} id={entity[0]} value={entity[1]} />);
		}
		
		return <div>
			<br/> <br/>
			<button onClick={this.add} className="btn btn-info">Add</button>
			<br/><br/>
			<ul className="list-group">
				{listDOM}
			</ul>
		</div>
	}
});

ReactDOM.render(
	<List/>,
	document.getElementById('container')
);