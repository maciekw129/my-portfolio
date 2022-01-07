import GlobalStyles from './GlobalStyles';
import Hero from './components/Hero/Hero';
import AboutMe from './components/AboutMe/AboutMe';
import MyProjects from './components/MyProjects/MyProjects';
import ContactMe from './components/ContactMe/ContactMe';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Hero />
      <AboutMe />
      <MyProjects />
      <ContactMe />
    </>
  );
}

export default App;
