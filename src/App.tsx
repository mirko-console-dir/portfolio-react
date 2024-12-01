import '@/css/App.css'
import Navbar from '@/components/navbar/Navbar'
import Hero from '@/components/hero/Hero'
import About from '@/components/about/About'
import Experience from '@/components/experience/Experience'
import Tech from '@/components/tech/Tech'
import Works from '@/components/works/Works'
import Feedbacks from '@/components/feedback/Feedbacks'

function App() {

  return (
    <div className='overflow-hidden no-select'>
      <Navbar />
      <Hero/>
      <About />
      <Experience/>
      <Tech/>
      <Works />
      <Feedbacks/>
    </div>
  )
}

export default App
