import React, { Component } from 'react';
import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';

import { Client } from './components/Client/Client';
import ClientCreate from './components/Client/ClientCreate/ClientCreate';
import ClientEdit from './components/Client/ClientEdit/ClientEdit';
import ClientList from './components/Client/ClientList/ClientList';
import Dashboard from './components/Dashboard/Dashboard';

const dataProvider = simpleRestProvider('http://localhost:5000');

class App extends Component {

  render() {
    return (
      <Admin dataProvider={dataProvider} dashboard={Dashboard}>
        <Resource name="client" 
          options={{label: 'Client'}} 
          list={ClientList} 
          show={Client} 
          edit={ClientEdit}
          create={ClientCreate}/>
        <Resource name="phone" />
      </Admin>
    );
  }
}

export default App;
