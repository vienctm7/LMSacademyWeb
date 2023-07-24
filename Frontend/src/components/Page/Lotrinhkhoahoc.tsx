import { Link } from "react-router-dom"
import "./Lotrinh.css"
import Navbar from "../layout/Navbar"
import axios from "axios";
import { useState, useEffect } from "react";
import Footer from "../layout/Footer";
import { useNavigate, useParams } from "react-router-dom";

function Lotrinhkhoahoc() {
    interface newcourse {
        newcourseId: string;
        name: string;
        title: string;
        lesson: string;
        image: string;
        hour: number;
        status: string;
      }
      
      const [newcourse, setNewCourses] = useState<newcourse[]>([]);
      const { id } = useParams<{ id: string }>();
      console.log(id);
      
       const navigate = useNavigate();
    useEffect(() => {
      const loadUser =  async() => {
        const result = await axios.get(`http://localhost:8000/api/v1/courses/${id}`);
        setNewCourses(result.data.data);
        console.log(newcourse);
        
      };
  
      loadUser();
    }, []);
    console.log(newcourse);
    
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
                        &nbsp;<span style={{color:"red"}}><u>{newcourse.length} khóa học</u></span>
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
   {newcourse.map((course) => {
            return (
                            <div className="ant-col mt-4 ant-col-xs-24 ant-col-lg-6" key={course.newcourseId} style={{paddingLeft: "12px", paddingRight: "12px"}}>
                    <div className="roadmap-item">
                        <div className="roadmap-item-image">
                            <img className="road-item-image-link" width={100} height={100} src={course.image} alt="" />
                        </div>
                        <div className="roadmap-item-content">
                            <h5 className="ant-typography">{course.name}</h5>
                            <span className="ant-typography ant-typography-secondary roadmap-item-content-description">
                                {course.title}</span>
                             <div className="roadmap-item-content-footer">
                                <div className="roadmap-footer-content">
                                <i style={{color:"black"}} className="fa-solid fa-calendar-days"></i>
                                <span>{course.name}</span>
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

export default Lotrinhkhoahoc