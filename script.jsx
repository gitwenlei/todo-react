class List extends React.Component {
  constructor(){
    super()

    this.state = {
      word:"",
      list : []
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

  changeHandler(){
    // debugger;
    // console.log("TYPED: ", event.target.value);
    let currentValue = event.target.value;
    this.setState({word: currentValue});
  }

  render() {
      // render the list with a map() here

      console.log("rendering");
      return (
        <div className="container">
            <div className="input-group-lg">
                <h1>to-do-list</h1>
                <div className="list">
                    <input onChange={()=>{this.changeHandler()}} value={this.state.word} className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
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