import React from 'react';
import { useNavigate } from 'react-router-dom';
import reach from "../assets/banner-form.jpg";
import './SubmitForm.css';

const SubmitForm = () => {
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
        .then(data=> {
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
            .then(data=> {
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

    <div id='getquote'>
      <div style={{
        background: `url(${reach})`
      }} className=' !bg-cover !bg-no-repeat'>
        <div className='px-10 py-14 flex items-center mt-10 bg-opacity-25 bg-gray-900'>

          <div className='sub-form w-[500px] p-8 rounded-2xl shadow-md' >
            <div className='text-center pb-5 '>
              <p className='lg:text-3xl sm:text-xl pb-3 text-white'>
                <span className=''>Experience Smarter
                  Security</span> with
                Vivint-monitored <span className=''>Home
                  Security Systems</span>
              </p>
              <h1 className='text-white'>Get peace of mind with an Vivint smart home security
                system customized to the needs of your home and family.</h1>
            </div>
            <form onSubmit={sendLeadToZapier}>
              <div className='grid grid-cols-1 justify-items-center px-8 gap-5 '>
                <div className='flex gap-4'>
                  <input
                    type='text'
                    name="first_name"
                    placeholder='First Name*'
                    className='input w-1/2 '
                    required
                  /><input
                    type='text'
                    name="last_name"
                    placeholder='Last Name*'
                    className='input w-1/2  '
                    required
                  />
                </div>

                <input
                  type='text'
                  name="zip_code"
                  placeholder='ZIP Code*'
                  className='input w-full max-w-md '
                  required
                />
                <input
                  type='text'
                  maxLength="10"
                  name="phone"
                  placeholder='Phone Number*'
                  className='input w-full max-w-md '
                  required
                />
                <input
                  type='email'
                  name="email"
                  placeholder='Email Address'
                  className='input w-full max-w-md'
                  required
                />

                <p className='text-slate-400  mute-text'>By submitting this form you agree to our <span className='text-[#1e73be]'>Communication and Privacy Policy </span></p>
                <button className='btn lg:px-32 md:px-16 sm:px-10  mb-5 text-lg  text-white submit-btn'>Submit</button>
              </div>
            </form>

          </div>

        </div>

      </div>


    </div>
  )
}

export default SubmitForm