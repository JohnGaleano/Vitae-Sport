import React from "react";
import { Container, Row} from "react-bootstrap";
import '../../empleados/empleados.css';
import Datagrid from "../../grid/grid";

const columns = [{
  dataField: '_id',
  text: 'ID',
  hidden: true
}, {
  dataField: 'nombre',
  text: 'Nombre'
}, {
  dataField: 'apellido_p',
  text: 'Apellido Paterno'
},  {
    dataField: 'apellido_m',
    text: 'Apellido Materno'
  },  {
    dataField: 'telefono',
    text: 'Teléfono'
  },  {
    dataField: 'mail',
    text: 'Correo Electrónico'
  },  {
    dataField: 'direccion',
    text: 'Dirección'
  }
];

export default class EmpleadosBuscar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
        this.onClickEditButton = this.onClickEditButton.bind(this);
    }

    componentDidMount(){}

    onClickEditButton(row){
      // console.log(row);
      this.props.setIdEmpleado(row._id);
      this.props.changeTab('editar');
    }

    render() { 
        return ( 
            <Container id="empleados-buscar-container">
                <Row>
                    <h2>BUSCAR EMPLEADOS</h2>
                </Row>
                <Row>
                    <Datagrid url= "/empleados" 
                    columns = {columns} 
                    showEditButton = {true}
                    onClickEditButton= {this.onClickEditButton} />
                </Row>
            </Container>
         );
    }
}
  