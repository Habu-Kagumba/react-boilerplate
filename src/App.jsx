// @flow
import React from "react";

import mainStyles from "./assets/styles/styles.scss";

const App = () => (
  <section className={mainStyles.main}>
    <div className={mainStyles.header}>
      <span className={mainStyles.rivetOne} />
      <span className={mainStyles.title}>React Boilerplate</span>
      <span className={mainStyles.rivetTwo} />
    </div>
  </section>
);

export default App;
