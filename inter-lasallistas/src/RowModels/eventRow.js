import React from 'react';

class EventRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          branches: [],
          schools:[],
          sport: "voleibol de sala",
          teams:[],
          show:false
        };
    
        
        //bindings
        this.deleteEvent = this.deleteEvent.bind(this);
       
      }   
      deleteEvent()
      {
          alert("Delete")
      }
    render() {
        return (
            <tr  key={this.props.x.id}>
            <td className="text-center">{this.props.i}</td>
            <td className="text-center">{this.props.x.fechaInicio}</td>
            <td className="text-center">{this.props.x.sede}</td>
            <td className="text-center">{this.props.x.nombre}</td>
            <td className="text-center">{this.props.x.modalidad}</td>
            <td className="text-center">
                <a className='btn btn-info btn-xs' href="#"><span className="glyphicon glyphicon-edit"></span> Edit</a> 
                <a href="#" className="btn btn-danger btn-xs" onClick={this.deleteEvent}>
                <span className="glyphicon glyphicon-remove"></span> Del</a>
            </td>
            </tr>
        );
      }

}

export default EventRow;