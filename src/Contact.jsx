import React,{useState} from 'react';
const Contact = () => {
  const[data,setData]=useState({
    fullname:'',
    phone:'',
    message:''
  })
  const inputEvent=(event)=>{
    const {name,phone,message,value}=event.target;
    setData((preVal)=>{
      return{
        ...preVal,
        [name]:value,
        [phone]:value,
        [message]:value
      }
    })
  }
  const formSubmit=(e)=>{
    e.preventDefault()
    console.log(`${data.fullname}`)
    console.log(`${data.phone}`)
    console.log(`${data.message}`)
  }
  return (
    <div>
      <div className="my-5">
        <h1 className="text-center">Contact US</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">FullName</label>
                <input type="text" name="fullname" onChange={inputEvent} value={data.fullname} className="form-control" id="exampleFormControlInput1" placeholder="Enter your name" />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Phone</label>
                <input type="text"  name="phone" onChange={inputEvent} value={data.phone} className="form-control" id="exampleFormControlInput1" placeholder="Enter your Mobile Number" />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                <textarea  name="message" onChange={inputEvent} value={data.message} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>

              <div className="col-12">
                <button type="submit" className="btn btn-outline-primary">Submit form</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Contact;
