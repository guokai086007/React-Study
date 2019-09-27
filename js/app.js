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
	
	edit(){
		this.props.onEdit(this.props.id,this.props.value);
	},
	
	remove(){
		this.props.onRemove(this.props.id);
	},
	
	render(){
		return <li className="list-group-item">{this.props.value}
			 <a href="#" className="right glyphicon glyphicon-trash" onClick={this.remove}></a>
			 <a href="#" className="right glyphicon glyphicon-wrench" onClick={this.edit}></a>
		</li>
	}
});

//ItemEditor组件
const ItemEditor = React.createClass({
	
	getInitialState(){
		return {
			value:this.props.value
		}
	},
	
	changeHandle(event){
		this.state.value = event.target.value;
		this.forceUpdate();
	},
	
	remove(){
		this.props.onRemove(this.props.id);
	},
	
	save(){
		this.props.onSave(this.props.id,this.state.value);
	},
	
	render(){
		return  <li className="list-group-item">
			{this.props.id+"、"}
		  	<input className="item-edit" onChange={this.changeHandle} value={this.state.value}/> 
		  	<a href="#" className="glyphicon glyphicon-plus-sign" onClick={this.save}></a>
		  	<a href="#" className="glyphicon glyphicon-remove" onClick={this.remove}></a>
		  </li>
	}
});

//List组件
const List = React.createClass({
	
	getInitialState(){
		return {
			key:0,
			list:new Map(),
			editList:new Map()
		}
	},
	
	add(){
		const key = ++this.state.key;
		this.state.editList.set(key,'');
		this.forceUpdate();
	},
	
	removeItem(id){
		this.state.list.delete(id);
		this.forceUpdate();
	},
	
	removeItemEditor(id){
		this.state.editList.delete(id);
		this.forceUpdate();
	},
	
	save(id,value){
		this.state.editList.delete(id);
		this.state.list.set(id,value);
		this.forceUpdate();
	},
	
	edit(id,value){
		this.state.list.delete(id);
		this.state.editList.set(id,value);
		this.forceUpdate();
	},
	
	render(){
		
		const listDOM = [];
		const editListDOM = [];
		
		for(let entity of this.state.list)
		{
			listDOM.push(<Item onRemove={this.removeItem} onEdit={this.edit} key={entity[0]} id={entity[0]} value={entity[1]} />);
		}
		
		for(let entity of this.state.editList)
		{
			editListDOM.push(<ItemEditor key={entity[0]} onSave={this.save} onRemove={this.removeItemEditor} id={entity[0]} value={entity[1]} />);
		}
		
		return <div>
			<br/> <br/>
			<button onClick={this.add} className="btn btn-info">Add</button>
			<br/><br/>
			<ul className="list-group">
			    {editListDOM}
				{listDOM}
			</ul>
		</div>
	}
});

ReactDOM.render(
	<List/>,
	document.getElementById('container')
);