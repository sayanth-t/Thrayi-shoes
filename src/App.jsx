import Nav from './components/Nav' 
import { Hero , PopularProducts , SuperQuality , Services , SpecialOffer , CustomerReviews ,  Footer } from './sections/index.js' ;

const App = () => {
  return (
    <main>
      <nav>
        <Nav/>
      </nav> 
      <section className="xl:padding-l wide:padding-r padding-b ">
        <Hero/> 
      </section>
      <section className="padding">
        <PopularProducts/>
      </section>
      <section className="padding">
        <SuperQuality/>
      </section>
      <section className="padding-x">
        <Services/>
      </section>
      <section className="padding">
        <SpecialOffer/>
      </section>
      <section className="padding">
        <CustomerReviews/>
      </section>
      <section className="padding bg-black">
        <Footer/>
      </section>
    </main>
  )
} 

export default App ;
