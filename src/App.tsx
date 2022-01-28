import GlobalStyles from './GlobalStyles';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import AboutMe from './components/AboutMe/AboutMe';
import MyProjects from './components/MyProjects/MyProjects';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';
import Provider from './utilities/languageContext';
import FirstPage from './components/FirstPage/FirstPage';
import AnimationContainer from './components/AnimationContainer/AnimationContainer';
import { useState, useEffect } from 'react';

const App = () => {

  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsAnimationComplete(!isAnimationComplete);
    }, 3000)
  }, [])

    return (
      <Provider>
        <GlobalStyles />
        <Header />
        {isAnimationComplete ?
        <AnimationContainer>
          <Hero />
          <AboutMe />
          <MyProjects />
          <ContactMe />
          <Footer />
        </AnimationContainer>
        : <FirstPage />
        }
      </Provider>
    );
} 

export default App;
