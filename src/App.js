import React, { Component } from 'react'; 
import { Admin, Resource } from 'react-admin';
/* import simpleRestProvider from 'ra-data-json-server'; */
import dataProvider from './dataProvider';
import AuthProvider from './authProvider';

import { UserList, UserEdit, UserCreate, User } from './components/User/User';
import { ClientCreate, ClientEdit, ClientList, ClientShow } from './components/Client/Client';
import Dashboard from './components/Dashboard/Dashboard';
import LoginPage from './components/Form/LoginPage';

/* const httpClient = (url , options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ 'Accept': "application/json" });
  }
  const token = localStorage.getItem('token');
  options.headers.set('Authorization',`bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
}

const dataProvider = simpleRestProvider('http://localhost:5000', httpClient); */

class App extends Component {

  render() {
    return (
      <Admin 
        loginPage={LoginPage} 
        {...this.props} 
        authProvider={AuthProvider} 
        dataProvider={dataProvider} 
        dashboard={Dashboard}>
          {permissions => {
            return [
              <Resource name="client"
                options={{ label: 'Client' }}
                list={ClientList}
                show={ClientShow}
                edit={ClientEdit}
                create={ClientCreate} />,
              <Resource name="phone" />,
              permissions === 'admin' ? 
                <Resource 
                  name="user" 
                  options={{ label: 'User' }} 
                  list={UserList} 
                  show={User}
                  edit={UserEdit}
                  create={UserCreate} /> : null
            ]
          }}
      </Admin>
    );
  }
}

export default App;
