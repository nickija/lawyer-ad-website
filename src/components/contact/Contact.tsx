import React, { BaseSyntheticEvent} from 'react'
import styles from '../contact/Contact.module.scss'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser'
import {GoogleMap, useLoadScript, MarkerF} from "@react-google-maps/api"

const Contact = () => {

  const {isLoaded} = useLoadScript({googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY!, })

  type Client = {
    name: string;
    email: string;
    message: string;
  }

  const [clientInfo, setClientInfo] = React.useState<Client>({name: "" , email: "", message: ""})

  function handleChange(e : BaseSyntheticEvent): void {

    setClientInfo(prevInfo => {
      return {
        ...prevInfo,
        [e.target.name]: e.target.value
      }
    })
  }


  function submit(event: BaseSyntheticEvent): void {
    event.preventDefault();
    if(clientInfo.name && clientInfo.email && clientInfo.message ){
      event.preventDefault();
      emailjs.sendForm(process.env.REACT_APP_SERVICE_ID!, process.env.REACT_APP_TEMPLATE_ID!, event.target , process.env.REACT_APP_EMAILJS_KEY)
      toast.success("Thanks for contacting me! I will email you soon!");
      setClientInfo(prevInfo => ({name:"", email:"", message: ""}))
    }else{
      toast.error("Please enter valid inputs!");
    }
  }
 
  return (
    <div className={styles.container} id="contact" >
      
      <form className={styles.form} onSubmit={submit}>
        <div className={styles.title}>
          <h2>Please fill this form to contact me:</h2>
        </div>
        <br />
        <h3>Name:</h3>
        <input type="text" name="name" value={clientInfo.name} onChange={handleChange} />
        <h3>Email:</h3>
        <input type="email" name="email" value={clientInfo.email} onChange={handleChange} />
        <h3>Message:</h3>
        <textarea name="message" value={clientInfo.message} onChange={handleChange} cols={30} rows={5}></textarea>
        <br />
        <button  type="submit">Send</button>
      </form>
      { isLoaded ? <div className={styles.map}>
        <GoogleMap zoom={17} center={{lat: 37.75381368998132, lng: -87.10605261737005}} mapContainerClassName={styles.mapContainer}> 
          <MarkerF position={{lat: 37.75381368998132, lng: -87.10605261737005}}/>
        </GoogleMap>
      </div> :
       "Loading..."}
      <ToastContainer />
    </div>
  )
}

export default Contact