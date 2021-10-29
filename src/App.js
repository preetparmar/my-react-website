// Importing Libraries
import { Switch, Route, Redirect } from "react-router-dom";
import React, { Suspense, Fragment } from "react";

// Importing Pages
// import Home from "./pages/home";
// import Education from "./pages/education";
// import Skills from "./pages/skills";
// import Experience from "./pages/experience";
// import Projects from "./pages/projects";
// import About from "./pages/about";
// import Blog from "./pages/blog";
import LoadingScreen from "./components/ui/LoadingScreen";
import NavigationOpen from "./components/navigation/NavigationOpen";

// Importing Lazy Loading Pages
const Home = React.lazy(() => import("./pages/home"));
const Education = React.lazy(() => import("./pages/education"));
const Skills = React.lazy(() => import("./pages/skills"));
const Experience = React.lazy(() => import("./pages/experience"));
const Projects = React.lazy(() => import("./pages/projects"));
const About = React.lazy(() => import("./pages/about"));
// const Blog = React.lazy(() => import("./pages/blog"));
// const ExternalLink = React.lazy(() => import("./components/ui/ExternalLink"));

// Main function
function App() {
  return (
    <Fragment>
      <Suspense fallback={<LoadingScreen />}>
        <Switch>
          <Route exact path="/home">
            <Redirect to="/" />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/testing">
            <NavigationOpen />
          </Route>
          <Route path="/education">
            <Education />
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/experience">
            <Experience />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          {/* <Route path="/blog">
            <ExternalLink link="https://blog.preetparmar.com/" />
          </Route> */}
          <Route path="/resume">{/* <ExternalLink link={resume} /> */}</Route>
          <Route path="/*">
            <Home />
          </Route>
        </Switch>
      </Suspense>
    </Fragment>
  );
}

export default App;
