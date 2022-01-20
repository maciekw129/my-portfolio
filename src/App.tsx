import GlobalStyles from './GlobalStyles';
import Hero from './components/Hero/Hero';
import AboutMe from './components/AboutMe/AboutMe';
import MyProjects from './components/MyProjects/MyProjects';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';
import LanguageButton from './components/LanguageButton/LanguageButton';
import Provider from './utilities/languageContext';

const App = () => {
  return (
    <Provider>
      <GlobalStyles />
      <Hero />
      <AboutMe />
      <MyProjects />
      <ContactMe />
      <Footer />
      <LanguageButton />
    </Provider>
  );
}

export default App;
