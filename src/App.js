import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BookingTable } from './pages/BookingTable';
import { createContext, useState } from 'react';
//import Navbar from './pages/Navbar';
import ConfirmPage from './pages/ConfirmPage';
import { Helmet } from 'react-helmet';
import logo from "./image/logo.png"

export const AppContext = createContext(null);

function App() {

  const [name, setName] = useState("")
  const [telephone, setTelephone] = useState("")
  const [numPeople, setNumPeople] = useState("")
  const [bookingDate, setBookingDate] = useState("")
  const [bookingTime, setBookingTime] = useState("")

  return (
    <>
      <AppContext.Provider value={{ name, setName, telephone, setTelephone, numPeople, setNumPeople, bookingDate, setBookingDate, bookingTime, setBookingTime}}>
        <Router>
          <Helmet>
            <title>Little Lemon</title>
            <meta name="description" content="Little Lemon Restaurant table booking page"/>
            <meta name="robots" content="index,follow"/>
            <meta name="googlebot" content="index,follow"/>
            <meta property="og:title" content="Little Lemon Restaurant" />
            <meta property="og:description" content="Little Lemon Restaurant table booking page." />
            <meta property="og:image" content={logo} />
          </Helmet>

          {/* <Navbar/> */}
          <Routes>
            <Route path="/" element={<BookingTable/>}/>
            <Route path="/confirm" element={<ConfirmPage/>} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </>
  );
}

export default App;
