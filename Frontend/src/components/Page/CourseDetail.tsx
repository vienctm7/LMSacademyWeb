import Footer from "../layout/Footer"
import Navbar from "../layout/Navbar"
import "./CourseDetail.css"

function CourseDetail() {
  return (
    <div>
        <Navbar/>
        <section className='ant-layout'>
            <div className='ant-layout-content'>
                <div id="courseDetail">
                    <div className='ant-row banner-cover'>
                        <div className='ant-col ant-col-12 ant-col-offset-4 banner-menu'>
                            <nav className='ant-breadcrumb'>
                                <ol>
                                    <li><span className='ant-breadcrumb-link'><a href="./home">Home</a></span></li>
                                    <span className='ant-breadcrumb-separator'><span></span></span>
                                    <li><span className='ant-breadcrumb-link'><a href="./Khoahoc">Danh sách khóa học</a></span></li>
                                    <span className='ant-breadcrumb-separator'><span></span></span>
                                    <li><span className='ant-breadcrumb-link'><a href="./home">[V2.0] Web Front-end Fundamental</a></span></li>
                                </ol>
                                
                            </nav>
                        </div>
                        <div className='ant-col banner-content ant-col-xs-20 ant-col-xs-offset-2 ant-col-sm-20 ant-col-sm-offset-2 ant-col-lg-12 ant-col-lg-offset-4'>
                            <div className='banner-content-title'>[V2.0] Web Front-end Fundamental</div>
                            <div className='banner-content-description'>[V2.0] Web Front-end Fundamental</div>
                        </div>
                        <div className='ant-col d-flex ant-col-xs-22 ant-col-xs-offset-2 ant-col-sm-22 ant-col-sm-offset-2 ant-col-lg-12 ant-col-lg-offset-4'>
                            <div className='d-flex' >
                                <div className='padding-banner-items f-white'>
                                <i style={{color:"green", fontSize:"20px"}} className="fa-solid fa-minus"></i>
                                <i style={{color:"white", fontSize:"20px",marginLeft:"0px"}} className="fa-solid fa-minus"></i>
                                <i style={{color:"white", fontSize:"20px",marginLeft:"0px"}} className="fa-solid fa-minus"></i>
                                Cơ bản</div>
                            </div>
                            <div className=' padding-banner-items f-white align-items-center' style={{display: "flex", alignItems: "center", gap: "5px"}}>
                                <div className='anticon anticon-user'><i style={{color:"white"}} className="fa-solid fa-user"></i></div>
                                <div className='m-0'>1380 học viên đã đăng kí</div>
                            </div>
                        </div>
                        <div className='ant-col ant-col-12 ant-col-offset-4 avt-lecturer-banner'>
                            <div className='ant-avatar ant-avatar-circle ant-avatar-image'>
                                <img src="https://static.ybox.vn/2020/1/1/1578276819686-1576157616611-1574132277731-1562117357982-1561186638622-1.jpg" alt="" />
                            </div>
                            <div className='f-white' style={{marginLeft: "10px"}}>Trần Minh Cường</div>
                        </div>
                    </div>
                    <div className='course-detail-container' style={{padding: "20px 0px"}}>
                        <div className='ant-row  course-detail-info'>
                            <div className='ant-col ant-col-xs-23 ant-col-xs-offset-1 ant-col-sm-22 ant-col-sm-offset-2 ant-col-lg-20 ant-col-lg-offset-4'>
                                <div className='ant-anchor-wrapper menu-scroll' style={{maxHeight: "100vh"}}>
                                    <div className='ant-anchor ant-anchor-fixed'>
                                        <div className='ant-anchor-ink'>
                                            <span className='ant-anchor-ink-ball' style={{top: "19px"}}></span>
                                        </div>
                                        <div className='ant-anchor-link'><a href="" className='ant-anchor-link-title'>Mô tả</a></div>
                                        <div className='ant-anchor-link'><a href="" className='ant-anchor-link-title'>Bạn sẽ học</a></div>
                                        <div className='ant-anchor-link'><a href="" className='ant-anchor-link-title'>Yêu cầu</a></div>
                                        <div className='ant-anchor-link'><a href="" className='ant-anchor-link-title'>Nội dung</a></div>
                                        <div className='ant-anchor-link'><a href="" className='ant-anchor-link-title'>Giảng viên</a></div>
                                    </div>
                                        
                                </div>
                            </div>
                            <div className='ant-col ant-col-xs-22 ant-col-xs-offset-1 ant-col-sm-22 ant-col-sm-offset-1 ant-col-lg-20 ant-col-lg-offset-4'>
                                <div id='Description'>
                                    <div className='title-menu'>Mô tả</div>
                                    <div><p>
                                    Training Program Preparation giúp học viên làm quen với các khái niệm trong lập trình web, từng bước xây dựng cho mình một Websit  cơ bản với HTML, CSS và Javascript. Có khả năng chuyển đổi từ thiết kế  (Figma, Photoshop) sang website hoàn chỉnh. Học viên làm chủ các kiến thức lập trình cơ bản và tư duy giải quyết vấn đề, có đủ kiến thức và kỹ năng nền tảng về lập trình để bước sang giai đoạn học lập trình chuyên sâu. <br />Kết thúc module này giúp học viên thành thạo được các kỹ thuật lập trình cơ bản với ngôn ngữ JavaScript, xây dựng được các ứng dụng cần tính toán sử dụng các kiến thức lập trình cơ bản, tạo nền tảng vững chắc khi chuyển sang học các kỹ thuật lập trình nâng cao hơn với các loại ngôn ngữ lập trình khác nhau như Java, C#, PHP, NodeJS v.v..</p></div>
                                </div>
                            </div>
                            <div className='ant-col ant-col-xs-22 ant-col-xs-offset-1 ant-col-sm-22 ant-col-sm-offset-1 ant-col-lg-20 ant-col-lg-offset-4'>
                                <div id='Learn'>
                                    <div className='title-menu mb-3'> Bạn sẽ học</div>
                                    <div className='ant-row'>
                                        <div className='ant-col learn-menu ant-col-xs-20 ant-col-sm-20 ant-col-lg-12' style={{display: "flex", alignItems: "center"}}>
                                        <span><i style={{color:"black"}} className="fa-solid fa-clock"></i></span>
                                        <span className='learn-text'>HTML5</span>
                                        </div>
                                        <div className='ant-col learn-menu ant-col-xs-20 ant-col-sm-20 ant-col-lg-12' style={{display: "flex", alignItems: "center"}}>
                                        <span><i style={{color:"black"}} className="fa-solid fa-clock"></i></span>
                                        <span className='learn-text'>CSS3</span>
                                        </div>
                                        <div className='ant-col learn-menu ant-col-xs-20 ant-col-sm-20 ant-col-lg-12' style={{display: "flex", alignItems: "center"}}>
                                        <span><i style={{color:"black"}} className="fa-solid fa-clock"></i></span>
                                        <span className='learn-text'>Git, GitHub</span>
                                        </div>
                                        <div className='ant-col learn-menu ant-col-xs-20 ant-col-sm-20 ant-col-lg-12' style={{display: "flex", alignItems: "center"}}>
                                        <span><i style={{color:"black"}} className="fa-solid fa-clock"></i></span>
                                        <span className='learn-text'>Git-flow</span>
                                        </div>
                                        <div className='ant-col learn-menu ant-col-xs-20 ant-col-sm-20 ant-col-lg-12' style={{display: "flex", alignItems: "center"}}>
                                        <span><i style={{color:"black"}} className="fa-solid fa-clock"></i></span>
                                        <span className='learn-text'>Grid layout</span>
                                        </div>
                                        <div className='ant-col learn-menu ant-col-xs-20 ant-col-sm-20 ant-col-lg-12' style={{display: "flex", alignItems: "center"}}>
                                        <span><i style={{color:"black"}} className="fa-solid fa-clock"></i></span>
                                        <span className='learn-text'>Flexbox layout</span>
                                        </div>
                                        <div className='ant-col learn-menu ant-col-xs-20 ant-col-sm-20 ant-col-lg-12' style={{display: "flex", alignItems: "center"}}>
                                        <span><i style={{color:"black"}} className="fa-solid fa-clock"></i></span>
                                        <span className='learn-text'>Flowchart</span>
                                        </div>
                                        <div className='ant-col learn-menu ant-col-xs-20 ant-col-sm-20 ant-col-lg-12' style={{display: "flex", alignItems: "center"}}>
                                        <span><i style={{color:"black"}} className="fa-solid fa-clock"></i></span>
                                        <span className='learn-text'>Pseudo-code</span>
                                        </div>
                                        <div className='ant-col learn-menu ant-col-xs-20 ant-col-sm-20 ant-col-lg-12' style={{display: "flex", alignItems: "center"}}>
                                        <span><i style={{color:"black"}} className="fa-solid fa-clock"></i></span>
                                        <span className='learn-text'>Variables</span>
                                        </div>
                                        <div className='ant-col learn-menu ant-col-xs-20 ant-col-sm-20 ant-col-lg-12' style={{display: "flex", alignItems: "center"}}>
                                        <span><i style={{color:"black"}} className="fa-solid fa-clock"></i></span>
                                        <span className='learn-text'>Data types</span>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className='ant-col ant-col-xs-22 ant-col-xs-offset-1 ant-col-sm-22 ant-col-sm-offset-1 ant-col-lg-20 ant-col-lg-offset-4'>
                                <div id="Request">
                                    <div className="title-menu" style={{marginBottom: "20px"}}>Yêu cầu</div>
                                    <ul className="dot-icon">
                                        <li> Biết sử dụng máy vi tính</li>
                                        <li>Kỹ năng đọc, hiểu tốt</li>
                                        <li>Đã tốt nghiệp THPT</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='ant-col ant-col-xs-22 ant-col-xs-offset-1 ant-col-sm-22 ant-col-sm-offset-1 ant-col-lg-20 ant-col-lg-offset-4'>
                                <div id="Content">
                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                        <div className="title-menu">Nội dung</div>
                                        <div className="total-content text-muted">26 Chương học • 69 Bài học</div>
                                    </div>
                                    <div className="ant-collapse ant-collapse-icon-position-start" role="tablist" style={{textAlign: "left", border: "none"}}>
                                        <div className="ant-collapse-item ant-collapse-item-custom" >
                                            <div className="ant-collapse-header">
                                                <div className="ant-collapse-expand-icon"><i style={{color:"black"}} className="fa-solid fa-angle-right"></i></div>
                                                <div className="ant-collapse-header-text">
                                                    <span className="ant-row ant-row-end" style={{width: "100%"}}>
                                                        <div className="ant-col ant-col-xs-14 ant-col-sm-14 ant-col-lg-18" style={{flex: "1 1 auto"}}>[V2.0][M1] Warming Up</div>
                                                        <div className="ant-col course-detail-timeline ant-col-xs-10 ant-col-sm-10 ant-col-lg-6">
                                                            <div className="ant-divider ant-divider-horizontal ant-divider-with-text ant-divider-with-text-right" role="separator">
                                                                <span className="ant-divider-inner-text">1 Bài học </span>
                                                            </div>
                                                        </div>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ant-collapse ant-collapse-icon-position-start" role="tablist" style={{textAlign: "left", border: "none"}}>
                                        <div className="ant-collapse-item ant-collapse-item-custom" >
                                            <div className="ant-collapse-header">
                                                <div className="ant-collapse-expand-icon"><i style={{color:"black"}} className="fa-solid fa-angle-right"></i></div>
                                                <div className="ant-collapse-header-text">
                                                    <span className="ant-row ant-row-end" style={{width: "100%"}}>
                                                        <div className="ant-col ant-col-xs-14 ant-col-sm-14 ant-col-lg-18" style={{flex: "1 1 auto"}}>[V2.0][M1] Session 01 - HTML Basic</div>
                                                        <div className="ant-col course-detail-timeline ant-col-xs-10 ant-col-sm-10 ant-col-lg-6">
                                                            <div className="ant-divider ant-divider-horizontal ant-divider-with-text ant-divider-with-text-right" role="separator">
                                                                <span className="ant-divider-inner-text">2 Bài học </span>
                                                            </div>
                                                        </div>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ant-collapse ant-collapse-icon-position-start" role="tablist" style={{textAlign: "left", border: "none"}}>
                                        <div className="ant-collapse-item ant-collapse-item-custom" >
                                            <div className="ant-collapse-header">
                                                <div className="ant-collapse-expand-icon"><i style={{color:"black"}} className="fa-solid fa-angle-right"></i></div>
                                                <div className="ant-collapse-header-text">
                                                    <span className="ant-row ant-row-end" style={{width: "100%"}}>
                                                        <div className="ant-col ant-col-xs-14 ant-col-sm-14 ant-col-lg-18" style={{flex: "1 1 auto"}}>[V2.0][M1] Session 02 - HTML5</div>
                                                        <div className="ant-col course-detail-timeline ant-col-xs-10 ant-col-sm-10 ant-col-lg-6">
                                                            <div className="ant-divider ant-divider-horizontal ant-divider-with-text ant-divider-with-text-right" role="separator">
                                                                <span className="ant-divider-inner-text">2 Bài học </span>
                                                            </div>
                                                        </div>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ant-collapse ant-collapse-icon-position-start" role="tablist" style={{textAlign: "left", border: "none"}}>
                                        <div className="ant-collapse-item ant-collapse-item-custom" >
                                            <div className="ant-collapse-header">
                                                <div className="ant-collapse-expand-icon"><i style={{color:"black"}} className="fa-solid fa-angle-right"></i></div>
                                                <div className="ant-collapse-header-text">
                                                    <span className="ant-row ant-row-end" style={{width: "100%"}}>
                                                        <div className="ant-col ant-col-xs-14 ant-col-sm-14 ant-col-lg-18" style={{flex: "1 1 auto"}}>[V2.0][M1] Session 03 - HTML Form & Table</div>
                                                        <div className="ant-col course-detail-timeline ant-col-xs-10 ant-col-sm-10 ant-col-lg-6">
                                                            <div className="ant-divider ant-divider-horizontal ant-divider-with-text ant-divider-with-text-right" role="separator">
                                                                <span className="ant-divider-inner-text">2 Bài học </span>
                                                            </div>
                                                        </div>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ant-collapse ant-collapse-icon-position-start" role="tablist" style={{textAlign: "left", border: "none"}}>
                                        <div className="ant-collapse-item ant-collapse-item-custom" >
                                            <div className="ant-collapse-header">
                                                <div className="ant-collapse-expand-icon"><i style={{color:"black"}} className="fa-solid fa-angle-right"></i></div>
                                                <div className="ant-collapse-header-text">
                                                    <span className="ant-row ant-row-end" style={{width: "100%"}}>
                                                        <div className="ant-col ant-col-xs-14 ant-col-sm-14 ant-col-lg-18" style={{flex: "1 1 auto"}}>[V2.0][M1] Session 04 - CSS Basic</div>
                                                        <div className="ant-col course-detail-timeline ant-col-xs-10 ant-col-sm-10 ant-col-lg-6">
                                                            <div className="ant-divider ant-divider-horizontal ant-divider-with-text ant-divider-with-text-right" role="separator">
                                                                <span className="ant-divider-inner-text">2 Bài học </span>
                                                            </div>
                                                        </div>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ant-collapse ant-collapse-icon-position-start" role="tablist" style={{textAlign: "left", border: "none"}}>
                                        <div className="ant-collapse-item ant-collapse-item-custom" >
                                            <div className="ant-collapse-header">
                                                <div className="ant-collapse-expand-icon"><i style={{color:"black"}} className="fa-solid fa-angle-right"></i></div>
                                                <div className="ant-collapse-header-text">
                                                    <span className="ant-row ant-row-end" style={{width: "100%"}}>
                                                        <div className="ant-col ant-col-xs-14 ant-col-sm-14 ant-col-lg-18" style={{flex: "1 1 auto"}}>[V2.0][M1] Session 05 - CSS3</div>
                                                        <div className="ant-col course-detail-timeline ant-col-xs-10 ant-col-sm-10 ant-col-lg-6">
                                                            <div className="ant-divider ant-divider-horizontal ant-divider-with-text ant-divider-with-text-right" role="separator">
                                                                <span className="ant-divider-inner-text">2 Bài học </span>
                                                            </div>
                                                        </div>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ant-collapse ant-collapse-icon-position-start" role="tablist" style={{textAlign: "left", border: "none"}}>
                                        <div className="ant-collapse-item ant-collapse-item-custom" >
                                            <div className="ant-collapse-header">
                                                <div className="ant-collapse-expand-icon"><i style={{color:"black"}} className="fa-solid fa-angle-right"></i></div>
                                                <div className="ant-collapse-header-text">
                                                    <span className="ant-row ant-row-end" style={{width: "100%"}}>
                                                        <div className="ant-col ant-col-xs-14 ant-col-sm-14 ant-col-lg-18" style={{flex: "1 1 auto"}}>[V2.0][M1] Session 06 - CSS Layout structure</div>
                                                        <div className="ant-col course-detail-timeline ant-col-xs-10 ant-col-sm-10 ant-col-lg-6">
                                                            <div className="ant-divider ant-divider-horizontal ant-divider-with-text ant-divider-with-text-right" role="separator">
                                                                <span className="ant-divider-inner-text">2 Bài học </span>
                                                            </div>
                                                        </div>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ant-collapse ant-collapse-icon-position-start" role="tablist" style={{textAlign: "left", border: "none"}}>
                                        <div className="ant-collapse-item ant-collapse-item-custom" >
                                            <div className="ant-collapse-header">
                                                <div className="ant-collapse-expand-icon"><i style={{color:"black"}} className="fa-solid fa-angle-right"></i></div>
                                                <div className="ant-collapse-header-text">
                                                    <span className="ant-row ant-row-end" style={{width: "100%"}}>
                                                        <div className="ant-col ant-col-xs-14 ant-col-sm-14 ant-col-lg-18" style={{flex: "1 1 auto"}}>[V2.0][M1] Session 07 - Introduction to basic programming</div>
                                                        <div className="ant-col course-detail-timeline ant-col-xs-10 ant-col-sm-10 ant-col-lg-6">
                                                            <div className="ant-divider ant-divider-horizontal ant-divider-with-text ant-divider-with-text-right" role="separator">
                                                                <span className="ant-divider-inner-text">2 Bài học </span>
                                                            </div>
                                                        </div>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ant-collapse ant-collapse-icon-position-start" role="tablist" style={{textAlign: "left", border: "none"}}>
                                        <div className="ant-collapse-item ant-collapse-item-custom" >
                                            <div className="ant-collapse-header">
                                                <div className="ant-collapse-expand-icon"><i style={{color:"black"}} className="fa-solid fa-angle-right"></i></div>
                                                <div className="ant-collapse-header-text">
                                                    <span className="ant-row ant-row-end" style={{width: "100%"}}>
                                                        <div className="ant-col ant-col-xs-14 ant-col-sm-14 ant-col-lg-18" style={{flex: "1 1 auto"}}>[V2.0][M1] Session 08 - JavaScript Basic</div>
                                                        <div className="ant-col course-detail-timeline ant-col-xs-10 ant-col-sm-10 ant-col-lg-6">
                                                            <div className="ant-divider ant-divider-horizontal ant-divider-with-text ant-divider-with-text-right" role="separator">
                                                                <span className="ant-divider-inner-text">2 Bài học </span>
                                                            </div>
                                                        </div>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ant-collapse ant-collapse-icon-position-start" role="tablist" style={{textAlign: "left", border: "none"}}>
                                        <div className="ant-collapse-item ant-collapse-item-custom" >
                                            <div className="ant-collapse-header">
                                                <div className="ant-collapse-expand-icon"><i style={{color:"black"}} className="fa-solid fa-angle-right"></i></div>
                                                <div className="ant-collapse-header-text">
                                                    <span className="ant-row ant-row-end" style={{width: "100%"}}>
                                                        <div className="ant-col ant-col-xs-14 ant-col-sm-14 ant-col-lg-18" style={{flex: "1 1 auto"}}>[V2.0][M1] Session 09 - Variables,Data types,Operators</div>
                                                        <div className="ant-col course-detail-timeline ant-col-xs-10 ant-col-sm-10 ant-col-lg-6">
                                                            <div className="ant-divider ant-divider-horizontal ant-divider-with-text ant-divider-with-text-right" role="separator">
                                                                <span className="ant-divider-inner-text">2 Bài học </span>
                                                            </div>
                                                        </div>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ant-collapse ant-collapse-icon-position-start" role="tablist" style={{textAlign: "left", border: "none"}}>
                                        <div className="ant-collapse-item ant-collapse-item-custom" >
                                            <div className="ant-collapse-header">
                                                <div className="ant-collapse-expand-icon"><i style={{color:"black"}} className="fa-solid fa-angle-right"></i></div>
                                                <div className="ant-collapse-header-text">
                                                    <span className="ant-row ant-row-end" style={{width: "100%"}}>
                                                        <div className="ant-col ant-col-xs-14 ant-col-sm-14 ant-col-lg-18" style={{flex: "1 1 auto"}}>[V2.0][M1] Session 10 - Decision Making (1)</div>
                                                        <div className="ant-col course-detail-timeline ant-col-xs-10 ant-col-sm-10 ant-col-lg-6">
                                                            <div className="ant-divider ant-divider-horizontal ant-divider-with-text ant-divider-with-text-right" role="separator">
                                                                <span className="ant-divider-inner-text">2 Bài học </span>
                                                            </div>
                                                        </div>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='ant-col ant-col-xs-22 ant-col-xs-offset-1 ant-col-sm-22 ant-col-sm-offset-1 ant-col-lg-20 ant-col-lg-offset-4' style={{marginTop: "20px"}}>
                                <div id="Lecturers">
                                    <div className="title-menu mb-4 ">Giảng viên</div>
                                    <div className="ant-row ant-row-middle profile-lecturers ">
                                    <div className='ant-avatar ant-avatar-circle ant-avatar-image'>
                                <img src="https://static.ybox.vn/2020/1/1/1578276819686-1576157616611-1574132277731-1562117357982-1561186638622-1.jpg" alt="" />
                            </div>
                                        <div className="profile">
                                            <span className="h5 mb-1">Trần Minh Cường</span>
                                            <div className="mb-1">Java Professor</div>
                                            <div className="d-flex ">
                                                <span className="text-muted" style={{display: "flex", alignItems: "center", gap: "5px"}}>
                                                <i style={{color:"black"}} className="fa-solid fa-book-open"></i>
                                                <p className="m-0"> 2 Khóa học</p>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>Javascript Master</div>
                                </div>
                            </div>
                            <div className='ant-col ant-col-xs-22 ant-col-xs-offset-1 ant-col-sm-22 ant-col-sm-offset-1 ant-col-lg-20 ant-col-lg-offset-4' style={{marginTop: "20px"}}>
                                <div id="Lecturers">
                                    <div className="title-menu mb-4 ">Giảng viên</div>
                                    <div className="ant-row ant-row-middle profile-lecturers ">
                                    <div className='ant-avatar ant-avatar-circle ant-avatar-image'>
                                <img src="https://static.ybox.vn/2020/1/1/1578276819686-1576157616611-1574132277731-1562117357982-1561186638622-1.jpg" alt="" />
                            </div>
                                        <div className="profile">
                                            <span className="h5 mb-1">Hồ Xuân Hùng</span>
                                            <div className="mb-1">Java Professor</div>
                                            <div className="d-flex ">
                                                <span className="text-muted" style={{display: "flex", alignItems: "center", gap: "5px"}}>
                                                <i style={{color:"black"}} className="fa-solid fa-book-open"></i>
                                                <p className="m-0"> 8 Khóa học</p>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>Hồ Xuân Hùng</div>
                                </div>
                            </div>
                            <div className='ant-col ant-col-xs-22 ant-col-xs-offset-1 ant-col-sm-22 ant-col-sm-offset-1 ant-col-lg-20 ant-col-lg-offset-4' style={{marginTop: "20px"}}>
                                <div id="Lecturers">
                                    <div className="title-menu mb-4 ">Giảng viên</div>
                                    <div className="ant-row ant-row-middle profile-lecturers ">
                                    <div className='ant-avatar ant-avatar-circle ant-avatar-image'>
                                <img src="https://static.ybox.vn/2020/1/1/1578276819686-1576157616611-1574132277731-1562117357982-1561186638622-1.jpg" alt="" />
                            </div>
                                        <div className="profile">
                                            <span className="h5 mb-1">Lê Việt Dũng</span>
                                            <div className="mb-1">Java Professor</div>
                                            <div className="d-flex ">
                                                <span className="text-muted" style={{display: "flex", alignItems: "center", gap: "5px"}}>
                                                <i style={{color:"black"}} className="fa-solid fa-book-open"></i>
                                                <p className="m-0"> 1 Khóa học</p>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>Lê Việt Dũng</div>
                                </div>
                            </div>
                            <div className='ant-col ant-col-xs-22 ant-col-xs-offset-1 ant-col-sm-22 ant-col-sm-offset-1 ant-col-lg-20 ant-col-lg-offset-4' style={{marginTop: "20px"}}>
                                <div id="Lecturers">
                                    <div className="title-menu mb-4 ">Giảng viên</div>
                                    <div className="ant-row ant-row-middle profile-lecturers ">
                                    <div className='ant-avatar ant-avatar-circle ant-avatar-image'>
                                <img src="https://static.ybox.vn/2020/1/1/1578276819686-1576157616611-1574132277731-1562117357982-1561186638622-1.jpg" alt="" />
                            </div>
                                        <div className="profile">
                                            <span className="h5 mb-1">Ngọ Văn Qúy</span>
                                            <div className="mb-1">Java Professor</div>
                                            <div className="d-flex ">
                                                <span className="text-muted" style={{display: "flex", alignItems: "center", gap: "5px"}}>
                                                <i style={{color:"black"}} className="fa-solid fa-book-open"></i>
                                                <p className="m-0"> 6 Khóa học</p>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>Ngọ Văn Qúy</div>
                                </div>
                            </div>
                            <div className='ant-col ant-col-xs-22 ant-col-xs-offset-1 ant-col-sm-22 ant-col-sm-offset-1 ant-col-lg-20 ant-col-lg-offset-4' style={{marginTop: "20px"}}>
                                <div id="Lecturers">
                                    <div className="title-menu mb-4 ">Giảng viên</div>
                                    <div className="ant-row ant-row-middle profile-lecturers ">
                                    <div className='ant-avatar ant-avatar-circle ant-avatar-image'>
                                <img src="https://static.ybox.vn/2020/1/1/1578276819686-1576157616611-1574132277731-1562117357982-1561186638622-1.jpg" alt="" />
                            </div>
                                        <div className="profile">
                                            <span className="h5 mb-1">Hoàng Thiên Phú</span>
                                            <div className="mb-1">Java Professor</div>
                                            <div className="d-flex ">
                                                <span className="text-muted" style={{display: "flex", alignItems: "center", gap: "5px"}}>
                                                <i style={{color:"black"}} className="fa-solid fa-book-open"></i>
                                                <p className="m-0"> 8 Khóa học</p>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>Hoàng Thiên Phú</div>
                                </div>
                            </div>
                        </div>
                        <div className='course-banner'>
                            <div className="banner">
                                <div className="img-container">
                                    <img src="https://media.istockphoto.com/id/610041376/photo/beautiful-sunrise-over-the-sea.jpg?s=612x612&w=0&k=20&c=R3Tcc6HKc1ixPrBc7qXvXFCicm8jLMMlT99MfmchLNA=" alt="detail_image" />
                                </div>
                                <div style={{padding: "10px 20px"}}>
                                    <button style={{marginBottom: "10px", backgroundColor:"#dc3545"}} type="button" className="ant-btn ant-btn-primary ant-btn-lg ant-btn-block">
                                        <span>Tham gia ngay</span>
                                    </button>
                                    <div>
                                        <div className="ant-row border-banner mt-10">
                                            <div className="ant-col ant-col-12">
                                                <div className="pt-10" style={{display: "flex", alignItems: "center", gap: "5px"}}>
                                                <i style={{color:"black"}} className="fa-solid fa-book-open"></i>
                                                <span>Chương</span>
                                                </div>
                                            </div>
                                            <div className="ant-col ant-col-12 p-0">
                                                <div className="text-right">26</div>
                                            </div>
                                        </div>
                                        <div className="ant-row border-banner">
                                        <div className="ant-col ant-col-12">
                                                <div className="pt-10" style={{display: "flex", alignItems: "center", gap: "5px"}}>
                                                <i style={{color:"black"}} className="fa-solid fa-folder"></i>
                                                <span>Bài kiểm tra</span>
                                                </div>
                                            </div>
                                            <div className="ant-col ant-col-12 p-0">
                                                <div className="text-right">0</div>
                                            </div>
                                        </div>
                                        <div className="ant-row border-banner">
                                        <div className="ant-col ant-col-12">
                                                <div className="pt-10" style={{display: "flex", alignItems: "center", gap: "5px"}}>
                                                <i style={{color:"black"}} className="fa-regular fa-clock"></i>
                                                <span>Thời lượng</span>
                                                </div>
                                            </div>
                                            <div className="ant-col ant-col-12 p-0">
                                                <div className="text-right">192</div>
                                            </div>
                                        </div>
                                        <div className="ant-row border-banner">
                                        <div className="ant-col ant-col-12">
                                                <div className="pt-10" style={{display: "flex", alignItems: "center", gap: "5px"}}>
                                                <i style={{color:"black"}} className="fa-sharp fa-solid fa-database"></i>
                                                <span>Cấp độ</span>
                                                </div>
                                            </div>
                                            <div className="ant-col ant-col-12 p-0">
                                                <div className="text-right">Cơ bản</div>
                                            </div>
                                        </div>
                                        <div className="ant-row">
                                        <div className="ant-col ant-col-12">
                                                <div className="pt-10" style={{display: "flex", alignItems: "center", gap: "5px"}}>
                                                <i style={{color:"black"}} className="fa-solid fa-building-flag"></i>
                                                <span>Chứng nhận</span>
                                                </div>
                                            </div>
                                            <div className="ant-col ant-col-12 p-0">
                                                <div className="text-right">Có</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
    </div>
  )
}

export default CourseDetail