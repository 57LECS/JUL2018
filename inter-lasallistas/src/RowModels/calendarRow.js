import React from 'react';

class CalendarRow extends React.Component {
    render() {
 
            return (
               
               <tr  key={this.props.x.id}>
                        <th scope="row">{this.props.x.fecha}</th>
                        <td className="text-center">{this.props.x.equipo1}</td>
                        <td className="text-center">-</td>
                        <td className="text-center">-</td>
                        <td className="text-center">{this.props.x.equipo2}</td>
                        <td className="text-center"><i className="far fa-futbol"></i></td>
                </tr>
               
              
            );
 
    }

}

export default CalendarRow;