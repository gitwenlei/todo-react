class ListItem extends React.Component {
    render() {
        console.log("the list: ", this.props.item);
        return (
            <li>{this.props.item}</li>
            );
    }
}





class List extends React.Component {
  constructor(){
    super()

    this.state = {
      word:"",
      length: 0,
      list : [],
      className: ""
    }
  }

  addItem(){
    // debugger;
    // push user input into list
    // console.log("PUSHHHHHH:", this.state.word);
    let currentList = this.state.list;
    currentList.push(this.state.word); //push new word into currentList
    this.setState({list: currentList}); //update state of list key to currentList
    console.log("inside list liaoz", this.state.list);
  }

    changeHandler() {
        // debugger;
        // console.log("TYPED: ", event.target.value);
        let currentValue = event.target.value;
        let currentLength = event.target.value.length;
        let maxChar = 50;

        // input must less than 50 characters
        if ( currentLength <= maxChar ) {
            this.setState({length: currentLength});
            this.setState({word: currentValue});
        } else {
            // if length more than 50 user input will not be entered
            // console.log(currentValue.substring(0, maxChar));
            // let chopWord = currentValue.substring(0, maxChar);
            // this.setState({className: "warning"});
            // this.setState({word: chopWord});
            alert("too many words");
        }

    }

    render() {
        // render the list with a map() here
        // console.log("rendering");

        // render each item from the list
        let eachItem = this.state.list.map( (item, index) => {
            return <ListItem item={item} key={index}></ListItem>;
        });
        // console.log("each item:", eachItem);

        return (

        <div className="container">
            <div className="input-group-lg">
                <h1>to-do-list</h1>
                <div className="list">
                <ul>{eachItem}</ul>
                    <input onChange={()=>{this.changeHandler()}} value={this.state.word} className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                    <p>letters left: {this.state.length } / 50 </p>
                    <button onClick={()=>{this.addItem()}}>add item</button>
                </div>
            </div>
        </div>
      );
  }
}

ReactDOM.render(
    <List/>,
    document.getElementById('root')
);