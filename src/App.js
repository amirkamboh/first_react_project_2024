import HomePage from "./pages/homePage";
import Layout from "./globals/Layout";
import AboutPage from "./pages/aboutUs";
import ContactPage from "./pages/contactUs";
import { Route,Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path='/' exact element={<HomePage />} />
          <Route path='/about-us' exact element={<AboutPage />} />
          <Route path='/contact-us' exact element={<ContactPage />} />
        </Routes> 
      </Layout>
      
    </div>
  );
}

export default App;
