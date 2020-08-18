import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'
import {toRead} from './Toread.js'
import {list} from './Todo.js'
import './Toread.css'
import './Todo.css'
import { AiFillCaretRight } from 'react-icons/ai';
import { SwipeableList, SwipeableListItem } from '@sandstreamdev/react-swipeable-list';
import '@sandstreamdev/react-swipeable-list/dist/styles.css'



class App extends Component {
  constructor(props){
    super(props);
    this.state={
      myArrays: list
    }
  }

  changeStatus=(p)=>{
    p.completed=true;
    let index= this.state.myArrays.findIndex(item=>item.id===p.id)
    let newArray= this.state.myArrays
    newArray[index]=p
    this.setState({
      myArrays:newArray
    })
    }
  

  render(){
  return (
    <div className="App">
    

      <h1> Action Items</h1>
      
      <Tabs>
    <TabList>
      <Tab>To DO</Tab>
      <Tab>To Read</Tab>
   	</TabList>
 
    <TabPanel>



      <div >
        {this.state.myArrays.map((person, index) => (
          <div className="mapAlign">

             <div className="btnAlign">
                <div className="card">
                   <h1>{person.title} </h1>
                   <h2 className="subtitle">{person.subtitle} </h2>
                   <p style={{color:person.completed===true? "Green": "Red" }}>{person.time} </p>
                 </div>

                
                <div className="statusCheck">
                   <p >{person.completed ? "Completed" : "pending"} </p>
                   <button onClick={()=>this.changeStatus(person)}>Mark as Completed </button>
                 </div>
                </div>
            </div>
          ))}
      </div>

      
              

    </TabPanel>

    <TabPanel>
      
      
      <div >
      {toRead.map((person, index) => (
      <div class="container">
        <div class="box" >
        <div className="index"> <p>{index.toString()}</p></div>
        <img className="imageview" src={person.image}></img>
        </div>
        <div class="box stack-top" style={{backgroundColor: "AliceBlue"}}>
        <h2 > {person.title}</h2>
        <h3>   <AiFillCaretRight /> </h3>

        </div>

    </div>
))}
      </div>

    </TabPanel>
  </Tabs>
          </div>
  );
}
}

export default App;
