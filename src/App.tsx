import GlobalStyles from './GlobalStyles';
import Hero from './components/Hero/Hero';
import AboutMe from './components/AboutMe/AboutMe';
import MyProjects from './components/MyProjects/MyProjects';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Hero />
      <AboutMe />
      <MyProjects />
    </>
  );
}

export default App;
