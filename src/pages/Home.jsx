import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import ChiSiamo from '../components/ChiSiamo'
import Products from '../components/Products'
import Reviews from '../components/Reviews'
import Contacts from '../components/Contacts'
import '../styles/general.css'

function Index(){
    return(
        <>
            <NavBar />
            <Hero />
            <ChiSiamo />
            <Products />
            <Reviews />
            <Contacts />
        </>
    )
}

export default Index