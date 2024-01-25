import React, { useState } from 'react'
import css from './contact.module.scss'
import { IoLogoInstagram } from "react-icons/io";
import {  toast } from 'react-toastify';
import Fade from 'react-reveal/Fade';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import 'react-toastify/dist/ReactToastify.css';
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FaLocationArrow } from "react-icons/fa6";
const Contact = () => {

  const form = useRef();
  const [data, setData] = useState({ name: '', phone: '', message: '' });

  const notifyA = (msg) => toast.error(msg)
  const notifyB = (msg) => toast.success(msg)




  const handleClick = async () => {

   
      const sendEmail = () => {
        try{
        

          
      
          emailjs.sendForm('service_u636c7q', 'template_0a551z8', form.current, 'Ff0ehUacs-SPxliQT')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        }catch(error){

          console.log("email not send",error.message)
        }
      }
      sendEmail();
        
        
    
      
   



    try {

      await fetch("http://localhost:4000/api/savedata", {

        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: data.name, phone: data.phone, message: data.message })
      }).then(res => res.json())
        .then(data => {

          if (data.error) {
            notifyA(data.error)
            setData({ name: '', phone: '', message: '' })


          }
          else {
            notifyB(data.message)
            setData({ name: '', phone: '', message: '' })
          }
        
        })

    } catch (error) {
      notifyA(error.message)
      setData({ name: '', phone: '', message: '' })

    }




  }
  return (

    <div className={css.whole}>

      <div className={css.contactinfo}>
        <Fade bottom duration={2500}>
          <div className={css.contactInfo}>Contact Info</div>

          <div className={css.profile}><CgProfile size={30}   /> <span style={{ marginLeft: '17px' }}> Vikash Mishra</span></div>
          <div className={css.phone}> <a href="tel:+918979481819"><FaPhoneAlt size={22} /></a><span style={{ marginLeft: '15px' }}>+918979481819</span></div>
          <div className={css.email}><a href="mailto: vikashmishra8371@gmail.com"><AiOutlineMail /><span style={{ marginLeft: '17px' }}> vikashmishra8371@gmail.com</span></a></div>
          <div className={css.location}><FaLocationArrow size={22} /><span style={{ marginLeft: '15px' }}> Mathura, uttar pradesh</span></div>
          <div className={css.social} id={css.social}>Social -  </div>
          <div className={css.icon} >


            <a id={css.insta} href="https://instagram.com/v.i.k.a.s.h.123?igshid=MzRlODBiNWFlZA=="><IoLogoInstagram /></a>
            <a id={css.linked} href="https://www.linkedin.com/in/vikash-mishra-099478277?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"> <FaLinkedin /></a>
            <a id={css.whats} href="https://wa.me/8979481819"> <FaWhatsapp /></a>
          </div>



        </Fade>
      </div>


      <div className={css.wrappper}>
        <Fade top duration={2500}> <span className={css.talk} > Let's Talk To Me</span></Fade>
        <div className={css.container}>
          <Fade bottom duration={3000}>
           


            <div  className={css.inputs}>
              <h2>Contact Me</h2>

            <form ref={form}>


              <input type="text" name='name' value={data.name} onChange={(e) => { setData({ ...data, [e.target.name]: e.target.value }) }} placeholder='name' />
              <input type="text" name='phone' value={data.phone} onChange={(e) => { setData({ ...data, [e.target.name]: e.target.value }) }} placeholder='number' />
              <input type="text" name='message' value={data.message} onChange={(e) => { setData({ ...data, [e.target.name]: e.target.value }) }} placeholder='message' />
            </form>
            </div>
            <div className={css.button}>

              <button onClick={handleClick}>send</button>
            </div>
          </Fade>


        </div>

      </div>

    </div>

  )
}

export default Contact
