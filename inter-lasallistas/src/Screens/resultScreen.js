// Fer
import React from 'react';

class ResultScreen extends React.Component {

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
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>News</td>
                    <td>News Cate</td>
                    <td className="text-center"><a className='btn btn-info btn-xs' href="#"><span className="glyphicon glyphicon-edit"></span> Edit</a> <a href="#" className="btn btn-danger btn-xs"><span className="glyphicon glyphicon-remove"></span> Del</a></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Products</td>
                    <td>Main Products</td>
                    <td className="text-center"><a className='btn btn-info btn-xs' href="#"><span className="glyphicon glyphicon-edit"></span> Edit</a> <a href="#" className="btn btn-danger btn-xs"><span className="glyphicon glyphicon-remove"></span> Del</a></td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Blogs</td>
                    <td>Parent Blogs</td>
                    <td className="text-center"><a className='btn btn-info btn-xs' href="#"><span className="glyphicon glyphicon-edit"></span> Edit</a> <a href="#" className="btn btn-danger btn-xs"><span className="glyphicon glyphicon-remove"></span> Del</a></td>
                  </tr>
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