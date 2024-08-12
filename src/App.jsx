import {BrowerRouter} from 'react-router-dom';
import {About, Contace, Experience, Feedback, Hero, Navbar, Tech, Works, StarsCanvas, Contact} from './components' 

const App = () => {
  return (
    <BrowserRouter>
        <div className="relative z-0 bg-primary">
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <Navbar />
                <Hero />
            </div>
            <About />
            <Experience />
            <Tech />
            <Works />
            <Feedbacks />
            <div className= "relative z-0">
                <Contact />
                <StarCanvas />
            </div>
        </div>
    </BrowserRouter>
  )
} 

export default App
