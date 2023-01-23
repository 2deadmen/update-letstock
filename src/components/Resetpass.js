import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";

const Resetpass = () => {
    let navigate = useNavigate();
    const search = useLocation().search;
    const gmail=new URLSearchParams(search).get("email");
    console.log(gmail)

    const [creds, setcreds] = useState({password: "",cpassword:"",otp:"" });

    const onChange = (e) => {
        setcreds({ ...creds, [e.target.name]: e.target.value });
      };
 
      const handlesubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`https://let-stock.vercel.app/api/auth/reset-password`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email:gmail, password: creds.password,otp: creds.otp }),
        });
        const json = await response.json();
        if (json.success) {

            navigate('/Login');
    
        } else {
        }
      };

    
    return (
    <> <div  className='container w-50'>
    <form  onSubmit={handlesubmit}>
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">Password</label>
      <input type="password" onChange={onChange} className="form-control" id="exampleInputEmail1" name="password" aria-describedby="emailHelp" placeholder="Enter password"/>
    </div>
    <div className="form-group">
      <label htmlFor="exampleInputPassword1">Confirm Password</label>
      <input type="password" name='cpassword' onChange={onChange} className="form-control" placeholder="Re-enter Password"/>
    </div>
    <div className="form-group">
      <label htmlFor="exampleInputPassword1">One Time Password</label>
      <input type="text" name='otp' onChange={onChange} className="form-control" placeholder="Enter your Otp"/>
    </div>


    
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
  </div>  
  </>
  )
}

export default Resetpass