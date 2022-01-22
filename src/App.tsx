import GlobalStyles from './GlobalStyles';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import AboutMe from './components/AboutMe/AboutMe';
import MyProjects from './components/MyProjects/MyProjects';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';
import Provider from './utilities/languageContext';
import FirstPage from './components/FirstPage/FirstPage';
import { useState } from 'react';

const App = () => {

  const [isLanguageChosen, setIsLanguageChosen] = useState(true);

  if(isLanguageChosen) {
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
  } else {
    return (
      <FirstPage />
    )
  }
}

export default App;
