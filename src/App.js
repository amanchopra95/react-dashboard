import React, { Component } from 'react'; 
import { Admin, Resource, fetchUtils } from 'react-admin';
import simpleRestProvider from 'ra-data-json-server';

import AuthProvider from './authProvider';
import { Client } from './components/Client/Client';
import ClientCreate from './components/Client/ClientCreate/ClientCreate';
import ClientEdit from './components/Client/ClientEdit/ClientEdit';
import ClientList from './components/Client/ClientList/ClientList';
import Dashboard from './components/Dashboard/Dashboard';
import LoginForm from './components/Form/Auth';

const httpClient = (url , options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ 'Accept': "application/json" });
  }
  const token = localStorage.getItem('token');
  options.headers.set('Authorization',`bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
}

const dataProvider = simpleRestProvider('http://localhost:5000', httpClient);

class App extends Component {

  render() {
    return (
      <Admin loginPage={LoginForm} authProvider={AuthProvider} dataProvider={dataProvider} dashboard={Dashboard}>
        <Resource name="client"
          options={{ label: 'Client' }}
          list={ClientList}
          show={Client}
          edit={ClientEdit}
          create={ClientCreate} />
        <Resource name="phone" />
        <Resource name="user" />
      </Admin>
    );
  }
}

export default App;
