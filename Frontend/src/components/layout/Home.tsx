import { Link } from "react-router-dom";
import "./Main.css";
import Navbar from "./Navbar";
import KhoahocMain from "./KhoahocMain";
import LotrinhMain from "./LotrinhMain";
import Footer from "./Footer";
import VideoMainSlide from "./VideoMainSlide"
function Home() {
  return (
    <div>
<Navbar/>
      <main className="ant-layout-content">
        <div className="home-page-introduce">
          <div className="home-background">
            <img
              src="https://transvelo.github.io/skola-html/5.1/assets/img/illustrations/illustration-7.svg"
              alt=""
            />
          </div>
          <div className="home-page-content" >
            <div className="home-page-content-detail" >
              <div className="home-page-header " >
                <div className="title-header">
                  <div className="title-custom">
                    Tìm khóa học
                    <span style={{ color: "red", margin: "5px", fontSize:"45px" }}>phù hợp</span>
                  </div>
                  <div className="title-description mt-4">
                    <span>lựa chọn khóa học yêu thích</span>
                    <br />
                    <span>cùng nhau học tập, nâng cao </span>
                    <br />
                    <span>trình độ</span>
                  </div>
                </div>
                <div className="ssearch-course mt-4 ">
                  <div className="ant-input-affix-wrapper">
                    <input
                      className="ant-input"
                      placeholder="Bạn muốn học gì hôm nay?"
                      type="text"
                    />
                    <span className="ant-input-suffix">
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="ant-col home-page-img-wrap ant-col-xs-24 ant-col-sm-12">
                <img
                  className="home-page-content-img"
                  src="https://learn.rikkeiacademy.com/static/media/1.b26ab8a7.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="ant-row roadmaps-home-page">
            <div className="ant-col ant-col-20 ant-col-offset-2">
              <div className="mt-5">
                <div>
                  <div><h4 className="ant-typography" style={{color: "rgb(187, 35, 39)"}}>Công nghệ thịnh hành</h4></div>
                  <div id="roadmap-home-page-pc" className="ant-row" style={{marginLeft: "-12px", marginRight: "-12px"}}>

                   <div className="ant-col mt-4 ant-col-xs-24 ant-col-sm-12 ant-col-md-8 ant-col-lg-8 ant-col-xl-4" style={{paddingLeft: "12px", paddingRight: "12px"}}>
                   <div className="training-card-wrapper">
                      <div className="training-card-content-wrapper">
                        <div className="training-card-content-icon">
                        <i style={{color:"blueviolet", fontSize:"60px"}} className="fa-brands fa-square-js"></i>
                        </div>
                        <div>JavaScript </div>
                      </div>
                    </div>
                   </div>
                   <div className="ant-col mt-4 ant-col-xs-24 ant-col-sm-12 ant-col-md-8 ant-col-lg-8 ant-col-xl-4" style={{paddingLeft: "12px", paddingRight: "12px"}}>
                   <div className="training-card-wrapper">
                      <div className="training-card-content-wrapper">
                        <div className="training-card-content-icon">
                        <i style={{color:"blueviolet", fontSize:"60px"}}  className="fa-brands fa-react"></i>
                        </div>
                        <div>ReactJS </div>
                      </div>
                    </div>
                   </div>
                   <div className="ant-col mt-4 ant-col-xs-24 ant-col-sm-12 ant-col-md-8 ant-col-lg-8 ant-col-xl-4" style={{paddingLeft: "12px", paddingRight: "12px"}}>
                   <div className="training-card-wrapper">
                      <div className="training-card-content-wrapper">
                        <div className="training-card-content-icon">
                        <i style={{color:"blueviolet", fontSize:"60px"}}  className="fa-brands fa-node"></i>
                        </div>
                        <div>NodeJS </div>
                      </div>
                    </div>
                   </div>
                   <div className="ant-col mt-4 ant-col-xs-24 ant-col-sm-12 ant-col-md-8 ant-col-lg-8 ant-col-xl-4" style={{paddingLeft: "12px", paddingRight: "12px"}}>
                   <div className="training-card-wrapper">
                      <div className="training-card-content-wrapper">
                        <div className="training-card-content-icon">
                        <img width={80} height={55} src="https://image.pngaaa.com/867/6645867-middle.png" alt="" />
                        </div>
                        <div>NestJS </div>
                      </div>
                    </div>
                   </div>
                   <div className="ant-col mt-4 ant-col-xs-24 ant-col-sm-12 ant-col-md-8 ant-col-lg-8 ant-col-xl-4" style={{paddingLeft: "12px", paddingRight: "12px"}}>
                   <div className="training-card-wrapper">
                      <div className="training-card-content-wrapper">
                        <div className="training-card-content-icon">
                        <i style={{color:"blueviolet", fontSize:"60px"}} className="fa-brands fa-java"></i>
                        </div>
                        <div>Java</div>
                      </div>
                    </div>
                   </div>
                   <div className="ant-col mt-4 ant-col-xs-24 ant-col-sm-12 ant-col-md-8 ant-col-lg-8 ant-col-xl-4" style={{paddingLeft: "12px", paddingRight: "12px"}}>
                   <div className="training-card-wrapper">
                      <div className="training-card-content-wrapper">
                        <div className="training-card-content-icon">
                        <img width={80} height={55} src="https://www.developer-tech.com/wp-content/uploads/sites/3/2022/04/spring4shell-spring-java-framework-exploit-vulnerability-security-cybersecurity-sonatype.jpg" alt="" />
                        </div>
                        <div>Spring</div>
                      </div>
                    </div>
                   </div>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <div>
                  <div><h4 className="ant-typography" style={{color: "rgb(187, 35, 39)"}}>Những khóa học mới nhất</h4></div>
                  <div className="mt-4">
                    <div className="swiper swiper-initialized swiper-horizontal swiper-pointer-events mySwiper">
                      <KhoahocMain/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <div>
                  <div><h4 className="ant-typography" style={{color: "rgb(187, 35, 39)"}}>Lộ trình phổ biến</h4></div>
                  <LotrinhMain/>
                </div>
                <div className=" roadmap-Home-page d-flex justify-content-center mt-4">
                  <Link to = "/baiviet">
                    <div className="d-flex align-items-center post-view-all">
                      <span className="ant-typography ml-2 mr-2"><strong>Xem tất cả </strong> </span>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="mt-5">
                <div>
                  <div><h4 className="ant-typography" style={{color: "rgb(187, 35, 39)"}}>Bài viết mới nhất</h4></div>
                </div>
                <div className="mt-2">
                  <div id="roadmap-home-page-pc" className="ant-row" style={{marginLeft: "-12px", marginRight: "-12px"}}>
                    <div className="ant-col mt-4 ant-col-xs-24 ant-col-sm-12 ant-col-md-8 ant-col-lg-6" style={{marginLeft: "-22px", marginRight: "17px"}}>
                      <div className="post-container">
                        <div className="post-wrapper-img"><img className="post-img" src="https://cdn.pixabay.com/photo/2016/11/23/18/27/hummingbird-1854225_640.jpg" alt="" /></div>
                        <div className="post-content">
                          <div className="d-flex justify-content-between  post-content-info">
                            <div className="d-flex">
                            <i style={{color:"black"}} className="fa-regular fa-user"></i>
                            <span>Admin</span>
                            </div>
                            <div className="d-flex">
                            <i  style={{color:"black"}}  className="fa-light fa-calendar"></i>
                            <span>12-1-2023</span>
                            </div>
                          </div>
                          <div className="post-content-title">
                            <h5 className="ant-typography">Advanced Concepts of JavaScript</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ant-col mt-4 ant-col-xs-24 ant-col-sm-12 ant-col-md-8 ant-col-lg-6" style={{marginLeft: "-22px", marginRight: "17px"}}>
                      <div className="post-container">
                        <div className="post-wrapper-img"><img className="post-img" src="https://cdn.pixabay.com/photo/2015/11/29/13/08/kingfisher-1068684_640.jpg" alt="" /></div>
                        <div className="post-content">
                          <div className="d-flex justify-content-between  post-content-info">
                            <div className="d-flex">
                            <i style={{color:"black"}} className="fa-regular fa-user"></i>
                            <span>Admin</span>
                            </div>
                            <div className="d-flex">
                            <i  style={{color:"black"}}  className="fa-light fa-calendar"></i>
                            <span>12-1-2023</span>
                            </div>
                          </div>
                          <div className="post-content-title">
                            <h5 className="ant-typography">Advanced Concepts of JavaScript</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ant-col mt-4 ant-col-xs-24 ant-col-sm-12 ant-col-md-8 ant-col-lg-6" style={{marginLeft: "-12px", marginRight: "17px"}}>
                      <div className="post-container">
                        <div className="post-wrapper-img"><img className="post-img" src="https://cdn.pixabay.com/photo/2017/06/01/15/23/peafowl-2363750_640.jpg" alt="" /></div>
                        <div className="post-content">
                          <div className="d-flex justify-content-between  post-content-info">
                            <div className="d-flex">
                            <i style={{color:"black"}} className="fa-regular fa-user"></i>
                            <span>Admin</span>
                            </div>
                            <div className="d-flex">
                            <i  style={{color:"black"}}  className="fa-light fa-calendar"></i>
                            <span>12-1-2023</span>
                            </div>
                          </div>
                          <div className="post-content-title">
                            <h5 className="ant-typography">Advanced Concepts of JavaScript</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ant-col mt-4 ant-col-xs-24 ant-col-sm-12 ant-col-md-8 ant-col-lg-6" style={{marginLeft: "-12px", marginRight: "17px"}}>
                      <div className="post-container">
                        <div className="post-wrapper-img"><img className="post-img" src="https://images.unsplash.com/photo-1551085254-e96b210db58a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmlyZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" /></div>
                        <div className="post-content">
                          <div className="d-flex justify-content-between  post-content-info">
                            <div className="d-flex">
                            <i style={{color:"black"}} className="fa-regular fa-user"></i>
                            <span>Admin</span>
                            </div>
                            <div className="d-flex">
                            <i  style={{color:"black"}}  className="fa-light fa-calendar"></i>
                            <span>12-1-2023</span>
                            </div>
                          </div>
                          <div className="post-content-title">
                            <h5 className="ant-typography">Advanced Concepts of JavaScript</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" roadmap-Home-page d-flex justify-content-center mt-4">
                  <Link to = "/baiviet">
                    <div className="d-flex align-items-center post-view-all">
                      <span className="ant-typography ml-2 mr-2"><strong>Xem tất cả </strong> </span>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="mt-5">
                <div>
                  <div><h4 className="ant-typography" style={{color: "rgb(187, 35, 39)"}}>Videos nổi bật</h4></div>
                  <div id="roadmap-home-page-pc" className="ant-row" style={{marginLeft: "-12px", marginRight: "-12px"}}>
                    <VideoMainSlide/>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <div>
                  <div className="ant-row" style={{marginLeft: "-12px", marginRight: "-12px"}}>
                    <div className="ant-col ant-col-sm-24 ant-col-lg-12" style={{paddingLeft: "12px", paddingRight: "12px"}}>
                      <div className="ant-image">
                        <img className="ant-image-img" src="https://learn.rikkeiacademy.com/static/media/anh-4.4d1be838.jpg" alt="" />
                      </div>
                    </div>
                    <div className="ant-col d-flex flex-column justify-content-center mt-4 ant-col-sm-24 ant-col-lg-12" style={{paddingLeft: "12px", paddingRight: "12px"}}>
                      <h3 className="ant-typography mb-4" style={{color: "rgb(187, 35, 39)"}}>Sứ mệnh “để nông dân biết code”</h3>
                      <div style={{marginBottom:"20px"}} className="ant-typography ant-typography-secondary">Khởi đầu bằng khát vọng, với mục đích hình thành học viện đào tạo công nghệ chất lượng và hiệu quả, Công ty Cổ phần Rikkeisoft cho ra đời đứa con tinh thần Rikkei Academy mang trong mình sứ mệnh cao cả – sứ mệnh “Để nông dân biết code”. Đây là kim chỉ nam để Rikkei Academy theo đuổi trọn đời.</div>
                      <div className="ant-typography ant-typography-secondary">Phương pháp đào tạo độc quyền cùng đội ngũ giảng viên chất lượng, chương trình học bám sát nhu cầu thực tế đã giúp RA tự tin đặt ra tầm nhìn đào tạo hơn 10.000 kỹ sư Nhật Bản đến năm 2025 và tiếp tục bứt phá mạnh mẽ để trở thành đại học Công nghệ chất lượng số 1.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default Home;
