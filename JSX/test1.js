
const Item = React.createClass({
	render(){
		return React.createElement(
			'h1',
			 {style:{backgroundColor: false ? 'red' : 'blue',fontSize:30}},
			 'if one can do, you must do!'
		);
	}
});

const bool = true;
const result = [];
//if(bool)
//{
//	result.push(<Item/>);
//	result.push(<Item/>);
//}
//else
//{
//	result.push(<h1>1111</h1>);
//	result.push(<h1>1111</h1>);
//}
//
//ReactDOM.render(<ul style={{backgroundColor:'yellow'}}>
//	   {result}
//	   <Item/>
//	</ul>,
//	document.getElementById('container')
//);


if(bool)
{
	result.push(React.createElement(Item));
	result.push(React.createElement(Item));
}
else
{
	result.push(React.createElement('h1',null,'my name is guokai'));
	result.push(React.createElement('h1',null,'my name is guokai'));
}
ReactDOM.render(
	React.createElement('ul',
	   {style:{backgroundColor:'yellow',fontSize:30}},
	   [
//			bool ? React.createElement(Item)
//						: 
//			React.createElement('h1',null,'my name is guokai'),

			result,
			
			React.createElement(Item),
			React.createElement(Item),
	   ]
	),
	document.getElementById('container')
);