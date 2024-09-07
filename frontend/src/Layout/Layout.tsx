
// import BusinessComponent from "../components/BusinessComponent/BusinessComponent"
import FAQSection from "../components/FAQ/FAQSection"
import Header from "../components/Header"
import Footer from "../Pages/Footer/Footer"
interface Props {
    children:React.ReactNode
}

const Layout = ({children}:Props)=>{
    return(
        <div className="flex flex-col min-h-screen ">
            <Header/>
            {/* <div className="container mx-auto">
                <SearchBar/>
            </div> */}
            <div className="">{children }</div>
            <Footer/>
        </div>
    )  
}
export default Layout