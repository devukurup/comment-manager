import React, { useEffect, useState } from "react";

import { Route, BrowserRouter as Router } from "react-router-dom";

import { setAuthHeaders } from "./apis/axios";
import Dashboard from "./components/Dashboard";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setAuthHeaders(setLoading);
  });
  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Router>
      <Route component={Dashboard} path="/" />
    </Router>
  );
};

export default App;
