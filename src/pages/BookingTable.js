import React, { useContext } from 'react'
import submitSchema from "../FormValidation/SubmitValidation"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AppContext } from '../App'
import { useNavigate } from 'react-router-dom'

export const BookingTable = () => {

  const { setName, setTelephone, setNumPeople, setBookingDate, setBookingTime} = useContext(AppContext);

  const navigate = useNavigate();

  //get date
  const current = new Date();
  current.setDate(current.getDate()); 
  var date = String(current.toDateString())
  current.setDate(current.getDate()+1);
  var date1 = current.toDateString().toString()
  current.setDate(current.getDate()+1);
  var date2 = String(current.toDateString())
  current.setDate(current.getDate()+1);
  var date3 = String(current.toDateString())
  current.setDate(current.getDate()+1);
  var date4 = String(current.toDateString())
  current.setDate(current.getDate()+1);
  var date5 = String(current.toDateString())

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(submitSchema),
  });

  const formSubmitHandler = (data) => {   
    setName(data.name)
    setTelephone(data.telephone) 
    setNumPeople(data.numPeople)
    setBookingDate(data.bookingDate)
    setBookingTime(data.bookingTime)
    navigate("/confirm")
    console.log(data)
  };

  return (
    <>
      <form onSubmit={handleSubmit(formSubmitHandler)}>
        <div>
          <label htmlFor="name">Name</label>
          <input  type="text" 
                  id="name" 
                  name="name" 
                  placeholder="name" 
                  {...register("name")}
            />
          {errors.name ? (<span>{errors.name.message}</span>) : (<></>)}
        </div>

        <div>
          <label htmlFor="telephone">Telephone</label>
          <input  type="tel" 
                  id="telepone" 
                  name="telephone" 
                  placeholder="telephone"
                  {...register("telephone")}
            />
          {errors.telephone ? (<span>{errors.telephone.message}</span>):(<></>)}
        </div>

        <div>
          <label htmlFor="numPeople">Number of People</label>
          <input  type="number"
                  name="numPeople"
                  id="numPeople"
                  min="1"
                  max="6"
                  placeholder="1"
                  {...register("numPeople")}
          />
          {errors.numPeople? (<apan>{errors.numPeople.message}</apan>):(<></>)}
        </div>

        <div>
          <label htmlFor="bookingDate">Booking date</label>
          <select id="bookingDate"
                  name="bookingDate"
                  {...register("bookingDate")}
          >
            <option value={date}>{date}</option>
            <option value={date1}>{date1}</option>
            <option value={date2}>{date2}</option>
            <option value={date3}>{date3}</option>
            <option value={date4}>{date4}</option>
            <option value={date5}>{date5}</option>
          </select>
          {errors.bookingDate? (<apan>{errors.bookingDate.message}</apan>):(<></>)}
        </div>

        <div>
          <label htmlFor="bookingTime">Booking Time</label>
          <input  type="time" 
                  id="bookingTime" 
                  name="bookingTime"
                  min="09:00" 
                  max="18:00"
                  pattern="[5-9]{2}:[5-9]{2}" minLength={50} maxLength={50}
                  onChange={(e)=>{setBookingTime(e.target.value)}}
                  {...register("bookingTime")}
            />
            {errors.bookingTime? (<span>{errors.bookingTime.message}</span>):(<></>)}
        </div>

        <input type='submit'/>

      </form>    

    </>
  )
}
