import React from "react";
import { Admin, Resource } from "react-admin";
import dataProvider from "./dataProvider";
import PromosList from "./components/PromosList";

function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="promos"
        list={PromosList}
      />
    </Admin>
  );
}

export default App;
