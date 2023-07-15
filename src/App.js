import { Routes } from "./app/routes";
import { Providers } from "./app/providers";
import { Header } from './components/Header'
require("./app/stylesheets/application.sass");

const App = () => (
  <div id="main-page">
    <Providers>
      <Header />
      <Routes />
    </Providers>
  </div>
);
export default App;
