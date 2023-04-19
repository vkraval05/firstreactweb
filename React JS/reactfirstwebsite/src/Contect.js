import React, { useState } from 'react'

const Contect = () => {
  const [data, setData] = useState({
    fullName: '',
    Number: '',
    Email: '',
    massage: '',
  })
  const InputEvent = (e) => {
    const { name, value } = e.target;
    setData((preval) => {
      return {
        ...preval,
        [name]: value,
      }
    })
  }

  const formSubmit = (e) => {
    e.preventDefault();
    alert(`Your Full Name is ${data.fullName}.\nYour Mobile Number is ${data.Number}.\nYour Email is ${data.Email}\nYour Masssage is ${data.massage}`)
  }


  return (
    <>
      <div className="my-5">
        <h1 className="text-center">
          Contect Us
        </h1>
      </div>
      <div className="container contect_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form  onSubmit={formSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" name="fullName" value={data.fullName} onChange={InputEvent} placeholder="Enter Your Name" required={true} />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Mobile No.</label>
                <input type="number" className="form-control" id="exampleFormControlInput1" name="Number" value={data.Number} onChange={InputEvent} placeholder="Enter Your Number" required={true} />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" name="Email" value={data.Email} onChange={InputEvent} placeholder="Enter Your Email" required={true} />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" name='massage' value={data.massage} onChange={InputEvent} rows="3"></textarea>
              </div>
              <div className="col-12">
                <button className='btn btn-outline-primary' type='submit'>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contect
