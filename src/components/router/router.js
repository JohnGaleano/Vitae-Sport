import React from 'react';
import { BrowserRouter as Router,
        Route,
        Switch,
} from  'react-router-dom';
import Login from '../login/login';
import PrivateRoute from '../auth/privateroute';
//import Empleados from '../crud';
import Empleados from '../empleados/crud';
import Home from '../home/home'
import Products from '../products/products';
import Contact from '../contact Us/contact';


export default function AppRouter(){
    return(
        <Router>
        <Switch>
            <Route exact path={["/", "/login"]} component = { Login } />
            {/* <PrivateRoute exact path = {[ "/home" ]} component ={ Home }/> */}
            <Route exact path= {["/empleados"]} component ={ Empleados } />
            <Route exact path= {["/home"]} component ={ Home } />
            <Route exact path= {["/products"]} component ={ Products } />
            <Route exact path= {["/contact"]} component ={ Contact } />
            <Route
                path={'*'} 
                component = {() =>(
                    <h2 style={{ marginTop: 300 }}>
                        404
                        <br />
                        PÁGINA NO ENCONTRADA
                    </h2>
                )}
                />
        </Switch>
        </Router>
    )   
};

// function Home(){
//     return(
//         <div>
//             <h2 style={{marginTop:100}}>Home</h2>
//         </div> 
//     )
// }