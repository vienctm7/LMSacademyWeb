// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import axios from "axios";
import { useState, useEffect } from "react";

// import required modules
import { Pagination, Autoplay, Navigation } from "swiper/modules";

export default function App() {
  interface newcourse {
    id: number;
    name: string;
    title: string;
    lesson: string;
    image: string;
    hour: number;
    status: string;
  }

  const [newcourse, setNewcourse] = useState<newcourse[]>([]);

  useEffect(() => {
    const loadUser = async () => {
      const result = await axios.get("http://localhost:8000/api/v1/newcourse");
      setNewcourse(result.data.data);
    };

    loadUser();
  }, []);

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          className="ant-row mb-4"
          style={{ marginLeft: "-12px", marginRight: "-12px" }}
        >
          {newcourse.map((element) => {
            return (
              <SwiperSlide>
                <div 
                  className="ant-col mt-4 ant-col-xs-24 "
                  key={element.id}
                  style={{ paddingLeft: "12px", paddingRight: "12px" }}
                >
                  <div className="roadmap-item">
                    <div className="roadmap-item-image">
                      <img
                        className="road-item-image-link"
                        style={{height:"250px"}}
                        src={element.image}
                        alt=""
                      />
                    </div>
                    <div className="roadmap-item-content">
                      <h5 className="ant-typography">{element.title}</h5>
                      <span
                        style={{ color: "black" }}
                        className="ant-typography ant-typography-secondary roadmap-item-content-description"
                      >
                        <i
                          style={{ color: "black" }}
                          className="fa-solid fa-calendar-days"
                        ></i>
                        {element.status}
                      </span>
                      <div
                        className="roadmap-item-content-footer"
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <div className="roadmap-footer-content">
                          <i
                            style={{ color: "black" }}
                            className="fa-solid fa-book-open-reader"
                          ></i>
                          <span style={{ marginLeft: "5px" }}>
                            {element.lesson}
                          </span>
                        </div>
                        <div className="roadmap-footer-content">
                          <i
                            style={{ color: "black" }}
                            className="fa-solid fa-clock"
                          ></i>
                          <span>{element.hour}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
    </>
  );
}
