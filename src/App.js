import "./App.css";
import Header from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import { Todos } from "./MyComponents/Todos";
import AddTodo from "./MyComponents/AddTodo";
// import  About  from "./MyComponents/About";
import React, { useState, useEffect } from "react";
// import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route 
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("I am onDelete of Todo", todo);
    // let index = todos.indexOf(todo);
    // todos.splice(index,1); Deleting a todo this way won't work in react!
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const addTodo = (title, desc) => {
    console.log("I am adding this to-do", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };

  //   if(localStorage.getItem("todos")){

  //   }
  // }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return(
    <>
    <Header title="Kajal's To dos list" searchBar={true}/>
    <AddTodo addTodo={addTodo} />
    <Todos todos={todos} onDelete={onDelete} />
    <Footer />
    </>
    );
    }

  // return (
  //   <>
  //   <Router>
  //     <Header title="Kajal's To dos list" searchBar={true} />
  //     <Routes>
  //         <Route exact path="/" 
  //          element={() => {
  //           return(
  //             <>
  //             <AddTodo addTodo={addTodo} />
  //             <Todos todos={todos} onDelete={onDelete} />
  //             </>)
  //          }}>
  //         </Route>
  //         <Route exact path="/about" element={<About/>}>
  //           {/* <About /> */}
  //         </Route>
  //         </Routes>      
  //     <Footer />
  //     </Router>
  //   </>
 

export default App;
