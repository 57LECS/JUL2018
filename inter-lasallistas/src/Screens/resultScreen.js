// Fer
import React from 'react';
import * as firebase from 'firebase'

class ResultScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      games: []
    };

    //bindings

  }

  componentDidMount()
  {
    const rootref = firebase.database().ref();
    var db = firebase.firestore();
    const firestore = firebase.firestore();
    const settings = {/* your settings... */ timestampsInSnapshots: true};
    firestore.settings(settings);
  
    console.log("fire")
  
    firestore.collection('partidos').doc('oct2018').collection('voleibol_de_sala').get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log("DD")
          console.log(doc.id, " => ", doc.data());
      });
  });
  

  }

  render() {
    return (
      <div>
        <div className="container">
          <h1>Pantalla Resultados</h1>
          <div className="row">
            <div col="col-md-6">

              <br />
              <a href="#" className="btn btn-primary btn-xs pull-right"><b>+</b> Add new categories</a>
              <br /><br />
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>cancha</th>
                    <th>local</th>
                    <th>visitante</th>
                    <th>fecha</th>
                    <th>modalidad</th>
                  </tr>
                </thead>
                <tbody>
                {this.state["games"].map(function (x, i = 1) { 
                return (
                <tr key={"trGame" + i}>cluster {++i}: {x}
                
                </tr>
              
              
              )})}

                  </tbody>
              </table>
            </div>

            <div col="col-md-6">
              tabla Resultados

             <table className="table table-bordered">
                <thead>

                  <tr>
                    <th></th>
                    <th>JJ</th>
                    <th>JG</th>
                    <th>JE</th>
                    <th>JP</th>
                    <th>PEG</th>
                    <th>GF</th>
                    <th>GC</th>
                    <th>%</th>
                    <th>DIF</th>
                    <th>Pts.</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Salle Bajio</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>Salle Neza</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>Salle Oaxaca</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default ResultScreen;