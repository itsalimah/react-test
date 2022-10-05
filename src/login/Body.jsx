import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Body() {
    const [formData,setFormData] = useState({email:"",password:""});
    const [errors,setErrors] = useState({email:"",password:""})
    const [isValid,setIsValid] = useState({email:"",password:""})
    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )?true:false
      };
    function handleChange(e) {
        const {name,value} = e.target
        setFormData(prevFormData=>{return {...prevFormData,[name]:value}})
        if (value==="") {
            setErrors(prevErrors=>{return {...prevErrors,[name]:`${name} connot be empty`}})
            setIsValid(prevIsValid=>{return {...prevIsValid,[name]:"is-invalid"}})
        }else {
            if (name==="email"&&!validateEmail(value)) {
                setErrors(prevErrors=>{return {...prevErrors,[name]:"email error"}})
                setIsValid(prevIsValid=>{return {...prevIsValid,[name]:"is-invalid"}})
                return
            }
            setErrors(prevErrors=>{return {...prevErrors,[name]:""}})
            setIsValid(prevIsValid=>{return {...prevIsValid,[name]:"is-valid"}})
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(formData);
    }
  return (
    <Form onSubmit={handleSubmit} className="w-50 m-auto">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  name="email" onChange={handleChange} value={formData.email} className={isValid.email}/>
        {errors.email && <Form.Text className="text-danger">
          {errors.email}
        </Form.Text>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  name="password" onChange={handleChange} value={formData.password} className={isValid.password}/>
        {errors.password && <Form.Text className="text-danger">
          {errors.password}
        </Form.Text>}
      </Form.Group>
      <Button variant="primary" type="submit" disabled={isValid.email==="is-valid"&&isValid.password==="is-valid"?false:true}>
        Submit
      </Button>
    </Form>
  );
}

export default Body;