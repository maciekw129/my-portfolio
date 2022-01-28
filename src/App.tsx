import GlobalStyles from './GlobalStyles';
import Header from './sections/Header/Header';
import Hero from './sections/Hero/Hero';
import AboutMe from './sections/AboutMe/AboutMe';
import MyProjects from './sections/MyProjects/MyProjects';
import ContactMe from './sections/ContactMe/ContactMe';
import Footer from './sections/Footer/Footer';
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
