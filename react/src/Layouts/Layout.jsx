import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
export default function Layout(props) {
  return (
    <>
      <Navbar title={props.title}/>
      {props.children}
      <Footer/>
    </>
  );
}
