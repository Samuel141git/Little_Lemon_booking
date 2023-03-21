import React, {useContext} from 'react'
import { AppContext } from '../App'
import { Link } from 'react-router-dom'

const ConfirmPage = () => {

  const {name, telephone, numPeople, bookingDate, bookingTime} = useContext(AppContext)

  return (
    <>
      <div>Congratulations!</div>
      <div>{name}, You book a table for {numPeople} on {bookingDate} at {bookingTime}.</div>
      <div>We will send you text message to {telephone} for reminder.</div>
      <Link to="/">
        <button>Back to booking page</button>
      </Link>
      
    </>
  )
}

export default ConfirmPage