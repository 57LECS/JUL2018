// Fer
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
  
class HomeScreen extends Component {
  render() {
    return (
      <div classNameName="App" style={{backgroundImage: "url( ../images/campusFiltered.jpg)",height:950}}>
      <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
        <div className="card-deck">
        <div className="card"  style={{margin:35}}>
            <img className="card-img-top" src="../images/calendar.png" alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">Calendario</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
          <div className="card"  style={{margin:35}}>
            <img className="card-img-top" src="../images/calendar.png" alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">Equipos</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
          
          <div className="card"  style={{margin:35}}>
            <img className="card-img-top" src="../images/calendar.png" alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">Canchas</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
          <div className="card"  style={{margin:35}}>
            <img className="card-img-top" src="../images/trophy.png" alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">Resultados</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
          
     
        </div>
      </div>
    );
  }
}

export default HomeScreen;
