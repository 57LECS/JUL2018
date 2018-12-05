// Andres
import React from 'react';

class Error extends React.Component {

    render() {
        return (
          <div>
            <h2 className="text-center" >ERROR 404: PAGINA NO ENCONTRADA</h2>
            <h1 className="text-center" style={{fontSize:'70px'}} ><i class="fas fa-sad-cry"></i></h1>
          </div>
        );
      }

}

export default Error;