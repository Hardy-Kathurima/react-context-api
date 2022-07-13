import { Routes ,Route } from 'react-router-dom';
import EditContribution from './components/EditContribution';
import Home from './components/Home';
import { GlobalProvider } from './context/GlobalState';



function App() {
  return (

    <GlobalProvider>
    <div className="App">
    <Routes>
        <Route path="/" element= {<Home/>}  />
        <Route path="/edit/:id" element = {<EditContribution/>}  />
      </Routes>
    </div>
  </GlobalProvider>
    // <div className="App">
    //  <Header/>
     
    //  <div className="container p-4">

    //  <GlobalProvider>

    //  <AddContribution/>
    //  <ContributionList/>
     
    //  </GlobalProvider>


    //  </div>
     
    // </div>
  );
}

export default App;
