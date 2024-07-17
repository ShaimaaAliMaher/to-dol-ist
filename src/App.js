
import { useRef, useState } from 'react';
import './App.css';

function App() {
  const [todos,setTodos] = useState([]);
  const inputRef= useRef()
  const [editItem ,setEditItem ]=useState(-1)

  const added=(index)=>{
    if(editItem===-1){
      const text =inputRef.current.value;
      const newItem= {completed: false , text }
      setTodos([...todos, newItem])
      inputRef.current.value=""
  }
    else{
      
      const Update=[...todos];
      Update[editItem].text =inputRef.current.value;
      setTodos(Update);
      setEditItem(-1);
      inputRef.current.value=""
       }
     
      
  }

 const done=(index)=>{
     const newtodos=[...todos]
     newtodos[index].completed =!newtodos[index].completed;
     setTodos(newtodos)
 }
 const deleteItem=(index)=>{
    const newtodos=[...todos]
    newtodos.splice(index ,1 )
    setTodos(newtodos)
 }
 const edit=(index )=>{
    const edittodos =[...todos]
    edittodos.find((i)=>i[index]===index)
    // console.log(edittodos[index].text)
   inputRef.current.value=edittodos[index].text;
   setEditItem(index)
 }
 
  return (
    <div className="App">
   <h2>📋 To Do List</h2>
   <div className='line'></div>
   <div className='to-do-container'>
   <ul>
    {todos.map(({text , completed} ,index )=>{
      return <div className='item'>
        <li className={completed?"done":""} key={index} onClick={()=>{done(index)}}>{text}</li>
        <div>
        <span onClick={()=>edit(index)}>✏️</span>
        <span onClick={()=>deleteItem(index)}>🗑️</span> 
        </div>
        </div> })}
   </ul>
   <input ref={inputRef} placeholder='Enter item...'/>
   <button className='btn' onClick={added}>Add</button>
   </div>
    </div>
  );
}

export default App;
