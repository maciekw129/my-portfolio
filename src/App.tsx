import GlobalStyles from './GlobalStyles';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import AboutMe from './components/AboutMe/AboutMe';
import MyProjects from './components/MyProjects/MyProjects';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';
import Provider from './utilities/languageContext';

const App = () => {
  return (
    <Provider>
      <GlobalStyles />
      <Header />
      <Hero />
      <AboutMe />
      <MyProjects />
      <ContactMe />
      <Footer />
    </Provider>
  );
}

export default App;
