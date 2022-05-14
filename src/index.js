import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'
class MessageList extends React.Component {
  constructor(props){
    super(props);
  this.state = {
   messages:[ 
     {author:"",
  text:""},
  ],
  currentauthor:'',
  currenttext:'',
  robot:"Sucessful"
  }
  this.handleChange1 = this.handleChange1.bind(this);
  this.handleChange2 = this.handleChange2.bind(this);
  this.handleChange = this.handleChange.bind(this);
}
  handleChange1(event) {
    this.setState({currentauthor:event.target.value});
  }
  handleChange2(event) {
    this.setState({currenttext:event.target.value});
  }
  handleChange() {
    let newMes={author:this.state.currentauthor, text:this.state.currenttext}
    this.state.messages.push(newMes)
    this.setState({messages:this.state.messages});
  }
 
  render() {
  return (
  <div class="wrapper">
    <div >
    {this.state.messages.map((item)=>(
      <div class="message">
        <span class="author">Author: {item.author}</span>
        <span class="text"> Message: {item.text}</span>
        </div>
    ))}
    </div>
    <div class="area">
   <input class="input" placeholder="Author" type="text" value={this.state.currentauthor}  onChange={this.handleChange1} />
    <input class="input" placeholder="Message" type="text" value={this.state.currenttext} onChange={this.handleChange2}/>
  <button class="button" onClick={this.handleChange}>
  Add
  </button>
  </div>
  </div>
  );
  }
  }

  function Button() {
    const [robot] = useState(MessageList.state);
    useEffect(() => {
      console.log(robot)
      }
    ,);
    return (
  <div>{robot}</div>
    )
  };
    const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
<MessageList />
<Button/>
  </React.StrictMode>
);

