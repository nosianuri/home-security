// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './MainBanner.css';

// const mainBanner = () => {
//     // const navigate = useNavigate();
//     // sending data to zapier
//     let sendLeadToZapier = async (e) => {
//         e.preventDefault()
//         let firstName = e.target.first_name.value
//         let lastName = e.target.last_name.value
//         let phone = e.target.phone.value
//         let email = e.target.email.value
//         let zipCode = e.target.zip_code.value
//         console.log(phone.length)

//         let responseToZapier = await fetch("https://hooks.zapier.com/hooks/catch/13844305/bny126t/", {
//             method: "POST",
//             body: JSON.stringify({
//                 "lp_campaign_id": "61c158df57694",
//                 "lp_campaign_key": "MQkGFrhcbtx4BDzq87TP",
//                 "first_name": firstName,
//                 "last_name": lastName,
//                 "phone": phone,
//                 "email": email,
//                 "zip_code": zipCode,
//             })
//         })
//             .then(output => output.json())
//             .then(data => {
//                 console.log(data);
//                 // navigate("/thanks");
//             })
//             .catch(error => console.log(error))

//         console.log("direct zap")

//         let responseToSheets = await fetch("https://hooks.zapier.com/hooks/catch/13844305/bny126t/", {
//             method: "POST",
//             body: JSON.stringify({
//                 "lp_campaign_id": "61c158df57694",
//                 "lp_campaign_key": "MQkGFrhcbtx4BDzq87TP",
//                 "first_name": firstName,
//                 "last_name": lastName,
//                 "phone": phone,
//                 "email": email,
//                 "zip_code": zipCode,
//             })
//         })
//             .then(output => output.json())
//             .then(data => {
//                 console.log(data);
//                 // navigate("/thanks");
//             })
//             .catch(error => console.log(error))
//         console.log("Sheets")
//         // navigate to somewhere


//         // console.log(responseToSheets.body)
//         // navigate to somewhere
//         // navigate()

//     }


//     return (
//         <div >
//             <div className='banner banner-text' >
//             <div className='banner-format'>
//                 <div className='d-flex justify-content-center article'>
//                     <div className='article-lead ml-16'>
//                         <h1 className='text-6xl text-white leading-normal font-bold mb-5'>Send us your request Today! </h1>
//                         <h2 className='text-white text-4xl leading-normal'>Fill our <a href="/#left-form" className='font-bold text-5xl text-[#0988f1] italic'>Form</a> give us a <a href="tel:+18554301263" className='font-bold text-5xl text-[#057be1] italic'>Call</a> to directly assist Intelligent Home or Business Security System.</h2>
//                         <ul className='pl-10 text-white text-lg text-2xl mt-5'>
//                             <li>Professionals with a valid certification.</li>
//                             <li>Free Installation.</li>
//                             <li>Lifetime Warrenty on Devices & Car Guard.</li>
//                             <li>Advance Home Automation.</li>
                            
//                         </ul>
//                         <h3 className='text-3xl text-white font-bold mt-5'>Get a Free Estimate Today! No Obligation!</h3>
//                     </div>
//                 </div>
// </div>
//                 <div>
//                     <div>


//                         <div className='d-flex justify-content-center'>
//                             <div className='banner-form form-group '>
//                                 <h4 className='mt-5'>Experience Smarter Security with Vivint-monitored Home Security Systems</h4>
//                                 <h5 className='mt-3 mb-3'>Get peace of mind with an Vivint smart home security
//               system customized to the needs of your home and family.</h5>
//                                 <form onSubmit={sendLeadToZapier} id='topform'>
//                                     <div className='grid grid-cols-1 justify-items-center px-8 gap-5 '>
//                                         <div className='flex gap-4'>
//                                             <input
//                                                 type='text'
//                                                 name="first_name"
//                                                 placeholder='First Name*'
//                                                 className='input w-1/2 '
//                                             /><input
//                                                 type='text'
//                                                 name="last_name"
//                                                 placeholder='Last Name*'
//                                                 className='input w-1/2  '
//                                             />
//                                         </div>

//                                         <input
//                                             type='text'
//                                             name="zip_code"
//                                             placeholder='ZIP Code*'
//                                             className='input w-full max-w-md '
//                                         />
//                                         <input
//                                             type='text'
//                                             maxLength="10"
//                                             name="phone"
//                                             minLength="10"
//                                             placeholder='Phone Number*'
//                                             className='input w-full max-w-md '
//                                         />
//                                         <input
//                                             type='email'
//                                             name="email"
//                                             placeholder='Email Address'
//                                             className='input w-full max-w-md'
//                                         />

//                                         <p className='text-slate-400  mute-text'>By submitting this form you agree to our <span className='text-[#1e73be]'>Communication and Privacy Policy </span></p>
//                                         <button className='btn lg:px-32 md:px-16 sm:px-10 bg-[#1e73be] mb-10 text-lg font-bold text-white submit-btn'>Submit</button>
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </div>

//     )
// }

// export default mainBanner;