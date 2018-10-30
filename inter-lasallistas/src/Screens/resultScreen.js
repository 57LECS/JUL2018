// Fer
import React from 'react';

class ResultScreen extends React.Component {

    render() {
        return (
          <div>
            
            <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
              
            <div class="container">
            <h1>Hola Pantalla Resultados</h1>
            <div class="row">
              <div col="col-md-6">
              
             <table class="table table-bordered">
              <thead>
              <a href="#" class="btn btn-primary btn-xs pull-right"><b>+</b> Add new categories</a>
    
                <tr>
                  <th>Firstname</th>
                  <th>Lastname</th>
                  <th>Email</th>
                  <th class="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                <td>1</td>
                <td>News</td>
                <td>News Cate</td>
                <td class="text-center"><a class='btn btn-info btn-xs' href="#"><span class="glyphicon glyphicon-edit"></span> Edit</a> <a href="#" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-remove"></span> Del</a></td>
            </tr>
            <tr>
                <td>2</td>
                <td>Products</td>
                <td>Main Products</td>
                <td class="text-center"><a class='btn btn-info btn-xs' href="#"><span class="glyphicon glyphicon-edit"></span> Edit</a> <a href="#" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-remove"></span> Del</a></td>
            </tr>
            <tr>
                <td>3</td>
                <td>Blogs</td>
                <td>Parent Blogs</td>
                <td class="text-center"><a class='btn btn-info btn-xs' href="#"><span class="glyphicon glyphicon-edit"></span> Edit</a> <a href="#" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-remove"></span> Del</a></td>
            </tr>
              </tbody>
            </table>
            </div>
                        
              <div col="col-md-6">
              tabla Resultados
              
             <table class="table table-bordered">
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