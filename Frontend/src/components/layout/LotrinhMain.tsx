
import "./Main.css"
import axios from "axios";
import { useState, useEffect } from "react";

function LotrinhMain() {
    interface Course {
        id: number;
        name: string;
        title: string;
        image: string;
        hour: number;
        date: string;
      }
    const [courses, setCourses] = useState<Course[]>([]);
  
    useEffect(() => {
      const loadUser = async () => {
        const result = await axios.get("http://localhost:8000/api/v1/courses");
        setCourses(result.data.data);
      };
  
      loadUser();
    }, []);
  return (
    <div>
                <div className="mt-4">
                <div id="roadmap-home-page-pc" className="ant-row" style={{marginLeft: "-12px", marginRight: "-12px"}}>
                {courses.map((course) => {
            return (
                  <div  key={course.id} className="ant-col mt-4 ant-col-xs-24 ant-col-md-12 ant-col-lg-12" style={{paddingLeft: "12px", paddingRight: "12px"}}>
                    <a href="">
                    <div className="roadmap-container">
                      <div className="roadmap-content">
                        <div>
                          <img width={120} height={80} src={course.image} alt="" />
                        </div>
                        <div className="roadmap-info">
                          <div><h5>{course.name}</h5></div>
                          <div>
                            <div className="roadmap-info-time align-items-center">
                            <i style={{color:"black"}} className="fa-solid fa-clock"></i>
                            <span>{course.hour} giờ</span>
                            </div>
                            <div id="lotrinh" className="roadmap-info-created align-items-center">
                            {course.title}
                            </div>
                          </div>
                        </div>
                        <div className="roadmap-total d-flex" style={{display:"flex"}}>
                          <h5 className="ant-typography roadmap-total-course">
                            06 <br />
                            Khóa học
                          </h5>
                        </div>
                      </div>
                    </div>
                    </a>
                  </div>
                    )})}
                </div>
              </div>
          
  
    </div>
  )
}

export default LotrinhMain