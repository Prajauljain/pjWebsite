import React, { useState } from 'react'

const Contact = () => {
  const [data,setData] = useState({
    myName: '',
    myContact: '',
    myWhatsApp: '',
    myEmail: '',
    myMsg : ''
  });
  const fun =(event) =>{
    const {name,value} = event.target;
    setData((prev) =>{
      return {
        ...prev,
        [name] : value,
      }
    })
  }
  const formSubmit = (e) =>{
    alert(`${data.myName} ${data.myContact} ${data.myWhatsApp} ${data.myEmail} ${data.myMsg}`)
  }
  return (
    <>
      <div className='my-4'>
        <h1 className='text-center text-capitalize text-success'>contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit} action="">
              <div className="mb-3 ">
                <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                <input value={data.myName} name='myName' type="text" className="form-control " id="exampleFormControlInput1" onChange={fun} placeholder="Enter your name..." />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput2" className="form-label">Contact No.</label>
                <input value={data.myContact} name='myContact' type="number" className="form-control" id="exampleFormControlInput2" onChange={fun} placeholder="Enter Mobile Number..." />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput3" className="form-label">Whatsapp No. <span>*</span></label>
                <input value={data.myWhatsApp} name='myWhatsApp' type="number" className="form-control" id="exampleFormControlInput3" onChange={fun} placeholder="Enter Whatsapp Number..." />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput4" className="form-label">Email address</label>
                <input value={data.myEmail} name='myEmail' type="email" className="form-control" id="exampleFormControlInput4" onChange={fun} placeholder="Enter Your Email-id..." />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label ">Message</label>
                <textarea value={data.myMsg} name='myMsg' onChange={fun} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <div className="col-12 mx-auto">
                <button className="btn btn-primary" type="submit">Submit form</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
