import UsersList from "./components/UsersList";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App(){
 //state
 return (
 <div>
  <NavBar/>
  <div>
    <UsersList/>
  </div>
  <Footer/>
 </div>
 );
}
export default App;