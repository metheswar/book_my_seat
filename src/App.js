import Header from './Components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import BookingPage from './Components/BookingPage';
import { useContext, useEffect } from 'react';
import Context from './Store/Context';

function App() {
  const {standardSeats,setStandardSeats,setPremiumSeats} = useContext(Context);

  useEffect(()=>{
    let arr=[]
    for(let i=1;i<=50;i++){
    arr.push(i)
    }
    setStandardSeats(arr)
    let arr2=[]
    for(let i=51;i<=100;i++){
      arr2.push(i)
      }
    setPremiumSeats(arr2)
  },[])

  return (
<>

<Router>
<Header />
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/book' element={<BookingPage />} />
  </Routes>
</Router>
</>
  );
}

export default App;
