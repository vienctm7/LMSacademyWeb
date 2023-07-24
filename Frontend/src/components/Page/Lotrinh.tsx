import { Link } from "react-router-dom"
import "./Lotrinh.css"
import Navbar from "../layout/Navbar"
import axios from "axios";
import { useState, useEffect } from "react";
import Footer from "../layout/Footer";


function Lotrinh() {
    interface Courses {
        coursesId: string;
        name: string;
        title: string;
        image: string;
        hour: number;
        date: string;
      }
      
      const [courses, setCourses] = useState<Courses[]>([]);
  
    useEffect(() => {
      const loadUser = async () => {
        const result = await axios.get("http://localhost:8000/api/v1/courses");
        setCourses(result.data.data);
      };
  
      loadUser();
    }, []);
    console.log(courses);
    
  return (
    <>
    <Navbar/>
    <section style={{background:"white"}} className="ant-layout">
    <main className="ant-layout-content">
        <div className="roadmap-container">
            <header className="roadmap-header">
                <div className="container text-center">
                <h1>Lộ trình</h1>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb breadcrumb-scroll justify-content-center">
                        <li className="breadcrumb-item">
                            <Link to = "/Home"   className="text-secondary">Trang chủ</Link>
                        </li>
                        <li className="breadcrumb-item text-secondary" style={{color:"red"}}>/ lộ trình</li>
                    </ol>
                </nav>
                </div>
            </header>
            <div className="course-filter">
                <div className="filter-box">
                    <div>
                        <span style={{color:"red"}}>Rikkei Academy</span>
                        &nbsp;sẵn có
                        &nbsp;<span style={{color:"red"}}><u>5 lộ trình</u></span>
                        &nbsp;cho bạn
                    </div>
                    <div className="filter-items">
                        <div className="filter-search">
                            <div className="input-holder">
                                <input className="search-input" placeholder="Tìm kiếm khóa học" style={{color: "rgb(0, 0, 0)"}} type="text" />
                                <div className="search-icon"><i className="fa-solid fa-magnifying-glass"></i></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="ant-row mb-4" style={{marginLeft: "-12px", marginRight: "-12px"}}>
   {courses.map((course) => {
            return (
                              <div className="ant-col mt-4 ant-col-xs-24 ant-col-lg-6" key={course.coursesId} style={{paddingLeft: "12px", paddingRight: "12px"}}>
                    <div className="roadmap-item">
                        <div className="roadmap-item-image">
                        <Link to={`/lotrinh/${course.coursesId}`}><img className="road-item-image-link" width={100} height={100} src={course.image} alt="" /></Link>
                        </div>
                        <div className="roadmap-item-content">
                            <h5 className="ant-typography">{course.name}</h5>
                            <span className="ant-typography ant-typography-secondary roadmap-item-content-description">
                                {course.title}</span>
                             <div className="roadmap-item-content-footer">
                                <div className="roadmap-footer-content">
                                <i style={{color:"black"}} className="fa-solid fa-calendar-days"></i>
                                <span>{course.date}</span>
                                </div>
                                <div className="roadmap-footer-content">
                                <i style={{color:"black"}} className="fa-solid fa-clock"></i>
                                <span>{course.hour} giờ</span>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
            )})}
  
            </div>
        </div>
    </main>
    <Footer/>
    </section>
    
</>
  )
}

export default Lotrinh