class List extends React.Component {
  constructor(){
    super()

    this.state = {
      word:"",
      list : []
    }
  }

  addItem(){
    debugger;
  }

  changeHandler(){
    // debugger;
    console.log("TYPED: ", event.target.value);
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