import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import Footer from './Component/Footer';
import List from './Component/List';

function App() {


  const list=['penine', 'Kamana','Kamanzi']

  const message = ()=>{
    alert("Sure to leave this page?")
  }
  return (
    <>
      <List list={list}  message={message} />
      <Header />
      <Footer />
    </>
  );
}

export default App;
