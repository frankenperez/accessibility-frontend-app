// React
import React from "react";

// Routing
import { useRoutes } from "react-router-dom";
import routes from "routes/routes";

function App() {
  const appRoutes = useRoutes(routes);

  return (
    <>
      <React.Suspense>{appRoutes}</React.Suspense>
    </>
  );
}

export default App;
