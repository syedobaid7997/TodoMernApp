import React, { useState, useEffect } from 'react';
import "../styles.css";
import { API } from "../backend";
import Base from './Base';
import { getTodos } from './helper/coreapicalls';
import TodoCard from './TodoCard';



export default function Home() {

  const [todos, setTodos ] = useState([]);
  const [error, setError ] = useState(false);

  const loadAllTodos = () => {
    getTodos().then(data => {
          if(data.error){
              setError(data.error);
          } else {
              setTodos(data);
          }
      })
  }


  useEffect(() => {
      loadAllTodos()
  }, [])

  return (
    <Base title="Home Page" description="Welcome to the Todo app">
          <div className="row">
           <h1 className="text-white">All todos</h1>
           <div className="row">
               {todos.map((todo, index) => {
                   return(
                       <div key={index} className="mb-4">
                            <TodoCard todo = {todo}/>
                       </div>
                   )
               })}
           </div>
          </div>
      </Base>
  );
}


