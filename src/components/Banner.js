import React from 'react';
import homebanner from "../assets/banner.avif";
import './Banner.css';
import rightform from "../assets/rightform.png";
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  let navigate = new useNavigate()
  // sending data to zapier
  let sendLeadToZapier = async (e) => {
    e.preventDefault()
    let firstName = e.target.first_name.value
    let lastName = e.target.last_name.value
    let phone = e.target.phone.value
    let email = e.target.email.value
    let zipCode = e.target.zip_code.value
    console.log(phone.length)

        let responseToZapier = await fetch("https://hooks.zapier.com/hooks/catch/13844305/bny126t/", {
          method: "POST",
          body: JSON.stringify({
            "lp_campaign_id": "61c158df57694",
            "lp_campaign_key": "MQkGFrhcbtx4BDzq87TP",
            "first_name": firstName,
            "last_name": lastName,
            "phone": phone,
            "email": email,
            "zip_code": zipCode,
          })
        })
        .then(output => output.json())
        .then(data=> console.log(data))
        .catch(error => console.log(error))
        
        console.log("direct zap")

        let responseToSheets = await fetch("https://hooks.zapier.com/hooks/catch/13844305/bny126t/", {
          method: "POST",
          body: JSON.stringify({
            "lp_campaign_id": "61c158df57694",
            "lp_campaign_key": "MQkGFrhcbtx4BDzq87TP",
            "first_name": firstName,
            "last_name": lastName,
            "phone": phone,
            "email": email,
            "zip_code": zipCode,
          })
        })
            .then(output => output.json())
            .catch(error => console.log(error))
        console.log("Sheets")
        // navigate to somewhere
          
       
        // console.log(responseToSheets.body)
        // navigate to somewhere
        // navigate()

  }



  return (
    <div className='' id='topform'>
      <div style={{
                background: `url(${homebanner})` 
            }} className='!bg-cover !bg-no-repeat'>
            <div className="bg-opacity-25"></div>

      <div className='px-10 py-14 items-center justify-center bg-opacity-25 bg-gray-900'>
      
        <div className='text-center pb-5 text-white bg-opacity-25'>
          <p className='lg:text-4xl md:text-2xl text-xl pb-3 font-bold'>
            Get smart home products to protect <br /> what matters most
          </p>
          <h1 className=''>Customize your home security with 24/7 alarm monitoring</h1>
        </div>
        <div className='lg:flex justify-center mt-10'>
          <div className='lg:mt-16 bg-[#986b72] h-1/2 p-5 right-form' >
            <p className='text-white text-xl'>Vivint Smart Home Offers:</p>
            <p className='text-white'><i className="fa-solid fa-check pr-2"></i>Vivint remote mobile access</p>
            <p className='text-white'><i className="fa-solid fa-check pr-2"></i>Get video push notification</p>
            <p className='text-white'><i className="fa-solid fa-check pr-2"></i>Smart home automation</p>
            <p className='text-white'><i className="fa-solid fa-check pr-2"></i>1080p HD video quality</p>
            <p className='text-white'><i className="fa-solid fa-check pr-2"></i>24/7 continuous video recording</p>
          </div>
          <div className='sub-form lg:w-[450px]  rounded-2xl shadow-md  ' >
            <div>
            <div className='text-center pb-5 pt-8 px-5'>
            <p className='lg:text-3xl sm:text-xl pb-3 text-white'>
              <span className='font-bold '>Experience Smarter
                Security</span> with
              Vivint-monitored <span className='font-bold'>Home
                Security Systems</span>
            </p>
            <h1 className='text-white'>Get peace of mind with an Vivint smart home security
              system customized to the needs of your home and family.</h1>
          </div>
              {/* <div className='text-center pb-5 '>
                <p className='text-xl relative form_header  font bold'>
                <div className='h-[40px] w-[40px] absolute bg-[#365314] right-[200px]  rotate-45'></div>
                  <span className='absolute text-center justify-center right-[110px]'>Get a FREE quote now</span>
                </p>
                <h1 className='mt-3'>Just give us a few details to get your <br /> FREE personalized quote!</h1>
              </div> */}
            </div>
            <form onSubmit={sendLeadToZapier}>
            <div className='grid grid-cols-1 justify-items-center px-8 gap-5 '>
            <div className='flex gap-4'>
              <input
                type='text'
                name="first_name"
                placeholder='First Name*'
                className='input w-1/2 '
              /><input
                type='text'
                name="last_name"
                placeholder='Last Name*'
                className='input w-1/2  '
              />
            </div>

            <input
              type='text'
              name="zip_code"
              placeholder='ZIP Code*'
              className='input w-full max-w-md '
            />
            <input
              type='text'
              maxLength="10"
              name="phone" 
              minLength="10"
              placeholder='Phone Number*'
              className='input w-full max-w-md '
            />
             <input
              type='email'
              name="email"
              placeholder='Email Address'
              className='input w-full max-w-md'
            />

            <p className='text-slate-400  mute-text'>By submitting this form you agree to our <span className='text-[#1e73be]'>Communication and Privacy Policy </span></p>
            <button className='btn lg:px-32 md:px-16 sm:px-10 bg-[#1e73be] mb-5 text-lg font-bold text-white submit-btn'>Submit</button>
            </div>
</form>
          </div>
          <div className='mt-16 bg-[#986b72] h-1/2 p-9'>
            <img width={100} src={rightform} alt="" />
            <p className='text-white font-bold'>Call to Get a Free 1-on-1</p>
            <p className='text-white font-bold'>Smart Home Security <br /> Consultation</p>
          </div>
        </div>

      </div>
      </div>
    </div>
  )
}

export default Banner