import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import AddTodo from './MyComponents/AddTodo';
import About from './MyComponents/About';
import LandingPage from './MyComponents/pages/LandingPage';
import LoginPage from './MyComponents/pages/LoginPage';
import RegisterPage from './MyComponents/pages/RegisterPage';
import ForgetPasswordPage from './MyComponents/pages/ForgetPasswordPage';
import HomePage from './MyComponents/pages/HomePage';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const onDelete = (todo) => {
    const updatedTodos = todos.filter((e) => e !== todo);
    setTodos(updatedTodos);
  };

  const addTodo = (title, desc) => {
    const sno = todos.length === 0 ? 0 : todos[todos.length - 1].sno + 1;
    const newTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <Router>
      <div>
        <Header title="My Todos List" searchBar={false} />
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/forget-password" component={ForgetPasswordPage} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/">
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} />
          </Route>
          <Route exact path="/about" component={About} />
          <Route exact path="/landing" component={LandingPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
