
// import axios from "axios";
import React, { useEffect, useRef } from "react";
import "./Login.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {  resetPerson, savePerson } from "../../store/features/personSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import Loading from "../../assets/Loading";
import Navbar from "../layout/Navbar";

function Login() {

  const email = useRef<string>("");
  const dispatch = useAppDispatch();

  const passwords = useRef<string>("");
  
  const [showPassword, setShowpassword] = useState(false);
  const {users, error, isFetching} = useAppSelector((state)=>state.person)
  console.log(users);
  console.log(error);
  
  const navigate = useNavigate()

  const handleChangeLogin = (e: any) => {
    e.preventDefault();
    console.log("username :", email, "passwords :", passwords);
  };
  const handleShowEyeChange = () => {
    setShowpassword(!showPassword);
  };

  useEffect(()=>{
    if(users.length>0 && users[0].role == 0){
      navigate('/home')
    }else if(users.length>0 && users[0].role ==1){
      navigate("/adminCourse")
    }
  },[users])

  useEffect(()=>{
    if(error){
      const timeout = setTimeout(()=>{
        dispatch(resetPerson())
      },4000)
      return ()=>clearTimeout(timeout)
    }
  },[error])

  useEffect(()=>{
    if(isFetching){
      const timeout = setTimeout(()=>{
        dispatch(resetPerson())
      },2000)
      return ()=>clearTimeout(timeout)
    }
  },[isFetching])

  return (
    <div>
      <Navbar/>
      {isFetching&&<div className="fixed left-1/2 -translate-x-1/2 w-5 top-30"><Loading/></div>}
      <div className="form-tt">
      {error&&<div className="fixed top-3 bg-white shadow-2xl flex items-center justify-center rounded-lg w-1/4 h-20 left-1/2 -translate-x-1/2 text-red-600 text-xl"><h1>{error}</h1></div>}
        <h2>Đăng nhập </h2>
        <input
          id="username"
          type="text"
          placeholder="Tên đăng nhập"
          onChange={(e) => (email.current = e.target.value)}
        />
        <div className="eyechange">
          <input
            id="current-password"
            type={showPassword ? "text" : "password"}
            placeholder="Mật khẩu"
            onChange={(e) => (passwords.current = e.target.value)}
          />
          <span onClick={handleShowEyeChange}>
            <i
              id="eye"
              className={
                !showPassword ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"
              }
            ></i>
          </span>
        </div>
        <input type="checkbox" id="checkbox" name="checkbox" />
        <label className="checkbox-text">Nhớ đăng nhập lần sau</label>
        <input
          id="login"
          onClick={(e) =>{e.preventDefault(), dispatch(savePerson({ email: email.current, passwords: passwords.current }))}}
          type="submit"
          value="Đăng nhập"
        />
        <label className="psw-text">Quên mật khẩu</label>
        <br />
        <div className="signup-link">
          <Link
            to="/signup"
            role="button"
            style={{ textDecoration: "none", color: "black" }}
          >
            Đăng kí tài khoản
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login