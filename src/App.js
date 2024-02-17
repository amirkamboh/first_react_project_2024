import HomePage from "./pages/homePage";
import Layout from "./globals/Layout";
import AboutPage from "./pages/aboutUs";
import ContactPage from "./pages/contactUs";
import DuctCleaning from "./pages/ductCleaning";
import { Route,Routes } from "react-router-dom";
import HttpRequests from "./pages/httpRequest";
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes> 
          <Route path='/' exact element={<HomePage />} />
          <Route path='/about-us' exact element={<AboutPage />} />
          <Route path='/contact-us' exact element={<ContactPage />} />
          <Route path="/get-data" exact element={<HttpRequests />} />
          <Route path="/duct-cleaning" exact element={<DuctCleaning />} /> 
        </Routes>
      </Layout>
      
    </div>
  );
}

export default App;
