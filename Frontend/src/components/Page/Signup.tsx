import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { resetPerson, postPerson } from "../../store/features/personSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import Navbar from "../layout/Navbar";
import { notification } from "antd";

interface FormValue {
  email: string;
  passwords: string;
  phone: string;
  name: string;
  repeatpassword: string;
  role: string;
}

const initFormValue: FormValue = {
  email: "",
  passwords: "",
  phone: "",
  name: "",
  repeatpassword: "",
  role: "",
};

const isEmptyValue = (value: any) => {
  return !value || value.trim().length < 1;
};

const isEmailValid = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

function Signup() {
  const dispatch = useAppDispatch();
  const {persons, error} = useAppSelector(state=>state.person)
   

  useEffect(()=>{
    if(persons.length>0){
      notification.success({
        message:"Đăng kí thành công"
      })
      setTimeout(() => {
        navigate('/login')
      }, 2000);
    
    }
  },[persons])

  useEffect(()=>{
    if(error){
notification.error({
  message:"Email đã tồn tại vui lòng nhập lại"
})
    }
  },[error])


  const navigate = useNavigate();

  const [formValue, setFormValue] = useState<FormValue>(initFormValue);
  const [formError, setFormError] = useState<Record<string, string>>({});

  const validateForm = () => {
    const error: Record<string, string> = {};
    if (isEmptyValue(formValue.email)) {
      error["email"] = "email is required";
    }
    if (isEmptyValue(formValue.passwords)) {
      error["passwords"] = "passwords is required";
    }
    if (isEmptyValue(formValue.phone)) {
      error["phone"] = "phone is required";
    } else {
      if (!isEmailValid(formValue.email)) {
        error["email"] = "Email is invalid";
      }
    }
    if (isEmptyValue(formValue.name)) {
      error["name"] = "name is required";
    }
    if (isEmptyValue(formValue.repeatpassword)) {
      error["repeatpassword"] = "repeatpassword is required";
      if (isEmptyValue(formValue.role)) {
        error["role"] = "role is required";
      }
    } else if (formValue.repeatpassword !== formValue.passwords) {
      error["confirmPassword"] = "Confirm password does not match";
    }
    setFormError(error);

    return Object.keys(error).length === 0;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (validateForm()) {
      console.log("formValue", formValue);
      console.log("121", formValue.phone);
      dispatch(postPerson(formValue));
    } else {
      console.log("form invalid");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="main" style={{ marginTop: "100px" }}>
        <label className="label1" htmlFor="chk" aria-hidden="true">
          Đăng kí
        </label>
        <input
          id="usernameSignup"
          className="input1"
          type="email"
          name="email"
          placeholder="Email"
          value={formValue.email}
          onChange={handleChange}
        />
        {formError.email && <div className="error">{formError.email}</div>}
        <input
          id="usernameSignup"
          className="input1"
          type="password"
          name="passwords"
          placeholder="Passwords"
          value={formValue.passwords}
          onChange={handleChange}
        />
        {formError.passwords && (
          <div className="error">{formError.passwords}</div>
        )}
        <input
          id="emailSignup"
          className="input1"
          type="number"
          name="phone"
          placeholder="Phone Number"
          value={formValue.phone}
          onChange={handleChange}
        />
        {formError.phone && <div className="error">{formError.phone}</div>}
        <input
          id="passwordSignup"
          className="input1"
          type="text"
          name="name"
          placeholder="Full Name"
          value={formValue.name}
          onChange={handleChange}
        />
        {formError.name && <div className="error">{formError.name}</div>}
        <input
          id="passwordSignup"
          className="input1"
          type="password"
          name="repeatpassword"
          placeholder="Confirm Password"
          value={formValue.repeatpassword}
          onChange={handleChange}
        />
        {formError.repeatpassword && (
          <div className="error">{formError.repeatpassword}</div>
        )}
        <input
          id="passwordSignup"
          className="input1"
          type="text"
          name="role"
          placeholder="Role"
          value={formValue.role}
          onChange={handleChange}
        />
        {formError.role && <div className="error">{formError.role}</div>}
        <button className="button1" onClick={handleSubmit}>
          Đăng kí
        </button>
      </div>
    </div>
  );
}

export default Signup;
