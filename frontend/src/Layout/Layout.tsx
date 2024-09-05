import Header from "../components/Header"
import HeroPage from "../components/HeroPage"
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
            <div className="container mx-auto flex-1">{children}</div>
            {/* <HeroPage/> */}
        </div>
    )  
}
export default Layout