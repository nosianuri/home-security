import React from 'react';
import homebanner from "../assets/smart-switch.webp";
import './Banner.css';
import rightform from "../assets/rightform.png";
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const navigate = useNavigate();
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
      .then(data => {
        console.log(data);
        navigate("/thanks");
      })
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
      .then(data => {
        console.log(data);
        navigate("/thanks");
      })
      .catch(error => console.log(error))
    console.log("Sheets")
    // navigate to somewhere


    // console.log(responseToSheets.body)
    // navigate to somewhere
    // navigate()

  }



  return (
    <div >
      <div className='banner banner-text' >
        <div style={{
        background: `url(${homebanner})`
      }} className=' !bg-cover !bg-no-repeat'>
          <div className='d-flex justify-content-center article bg-opacity-25 '>
            <div className='article-lead mr-5 lg:mt-32'>
            <div className='pl-10 '>
              <h1 className='lg:text-5xl text-xl pt-5 !leading-normal font-bold mb-5'>Send us your request Today! </h1>
              <h2 className=' fill-text leading-normal'>Need Free Certified Assistance for your Intelligent Home or Business Security System Now?</h2>
              <button className='text-xl btn fill-btn bg-[#5BB318] mb-10 font-bold text-white mr-5'><a href="\#topform">Fill Form</a> </button> Or
              <button className='text-xl btn bg-[#CD104D] mb-10 font-bold text-white ml-5 call-us-btn'><a href='tel:+18554301263'>Call Us</a></button>
              
              
             </div>
             
            </div>
          </div>
        </div>

        <div>
          <div>

            <div className='text-center' id='topform'>
              <div className='d-flex justify-content-center'>
                <div className='banner-form items-center form-group '>
                  <h4 className='mt-5 !text-white '>Experience Smarter Security with Vivint-monitored Home Security Systems</h4>
                  <h5 className='mt-3 mb-3 text-white'>Get peace of mind with a Vivint smart home security
                    system customized to the needs of your home and family.</h5>
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

                      <p className='text-white  mute-text'>By submitting this form you agree to our <span className='text-[#F5EEDC] text-xs'>Communication and Privacy Policy </span></p>
                      <button className='btn lg:px-32 md:px-16 sm:px-10 !bg-[#7743DB] mb-10 text-lg font-bold text-white submit-btn'>Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>

  )
}

export default Banner