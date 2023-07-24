import Footer from "../layout/Footer"
import Navbar from "../layout/Navbar"
import "./Baiviet.css"

function Baiviet() {
  return (
    <div>
    <section className="ant-layout">
        <Navbar/>
        <main className="ant-layout-content">
            <div className="rikkei_list_posts">
                <div className="breadcrumb_wrap">
                    <nav className="woocommerce_breadcrumb ">
                        <a href="">Trang chu</a>
                        <a className="active" href="">/ Bài viết</a>
                    </nav>
                    <div className="filter-search">
                        <div className="input-holder">
                            <input className="search-input" placeholder="Tìm kiếm bài viết" type="text" style={{color: "rgb(0, 0, 0)"}} />
                            <div className="search-icon">
                            <i className="fa-solid fa-magnifying-glass"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="list_post_content">
                    <div className="list_post_grid_view">
                        <main>
                            <article>
                                <div className="post_inner">
                                    <div className="post_thumbnail">
                                    <img src="https://www.interviewbit.com/blog/wp-content/uploads/2023/05/Artboard-1-copy-3.jpg" alt="" />
                                    </div>
                                    <div className="post_content">
                                        <header className="entry_header">
                                            <div className="entry_meta">
                                                <div className="posted_on">03-01-2023</div>
                                                <div className="posted_author">/ BY ADMIN</div>
                                            </div>
                                            <div className="entry_title"><span>Advanced Concepts of JavaScript</span></div>
                                        </header>
                                        <div className="entry_content">
                                            <p>Advanced Concepts of JavaScript</p>
                                            <div>
                                                <div className="category_link"><span>in </span><a href="">RIKKEI ACADEMY</a></div>
                                                <div className="read_more"><span>ĐỌC THÊM</span></div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </article>
                            <article>
                                <div className="post_inner">
                                    <div className="post_thumbnail">
                                        <img src="https://miro.medium.com/v2/resize:fit:970/1*0DlZeUQ-AF7i58MdkD9E4Q.jpeg" alt="loi" />
                                    </div>
                                    <div className="post_content">
                                        <header className="entry_header">
                                            <div className="entry_meta">
                                                <div className="posted_on">03-01-2023</div>
                                                <div className="posted_author">/ BY ADMIN</div>
                                            </div>
                                            <div className="entry_title"><span>Top 10 JavaScript Features</span></div>
                                        </header>
                                        <div className="entry_content">
                                            <p>Top 10 JavaScript Features</p>
                                            <div>
                                                <div className="category_link"><span>in </span><a href="">RIKKEI ACADEMY</a></div>
                                                <div className="read_more"><span>ĐỌC THÊM</span></div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </article>
                            <article>
                                <div className="post_inner">
                                    <div className="post_thumbnail">
                                        <img src="https://miro.medium.com/v2/resize:fit:1400/1*A8LYHKP8G3q5xIuAjOgqbw.jpeg" alt="o" />
                                    </div>
                                    <div className="post_content">
                                        <header className="entry_header">
                                            <div className="entry_meta">
                                                <div className="posted_on">03-01-2023</div>
                                                <div className="posted_author">/ BY ADMIN</div>
                                            </div>
                                            <div className="entry_title"><span>Top 10 Things You Should Learn About JavaScript</span></div>
                                        </header>
                                        <div className="entry_content">
                                            <p>Top 10 Things You Should Learn About JavaScript</p>
                                            <div>
                                                <div className="category_link"><span>in </span><a href="">RIKKEI ACADEMY</a></div>
                                                <div className="read_more"><span>ĐỌC THÊM</span></div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </article>
                            <article>
                                <div className="post_inner">
                                    <div className="post_thumbnail">
                                        <img src="https://miro.medium.com/v2/resize:fit:1200/1*int2Cu4gDCW6LIGr1cgKqg.jpeg" alt="loi" />
                                    </div>
                                    <div className="post_content">
                                        <header className="entry_header">
                                            <div className="entry_meta">
                                                <div className="posted_on">03-01-2023</div>
                                                <div className="posted_author">/ BY ADMIN</div>
                                            </div>
                                            <div className="entry_title"><span>Giới thiệu về dbdiagram</span></div>
                                        </header>
                                        <div className="entry_content">
                                            <p>Build db</p>
                                            <div>
                                                <div className="category_link"><span>in </span><a href="">RIKKEI ACADEMY</a></div>
                                                <div className="read_more"><span>ĐỌC THÊM</span></div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </article>
                        </main>
                    </div>
                    <div className="suggess_content">
                        <div className="sticky">
                            <div className="popular_posts">
                                <div className="popular_title"><h2>Bài viết phổ biến</h2></div>
                                <div className="list_posts">
                                    <a href="" style={{color: "inherit"}}>
                                        <div className="posts">
                                            <img src="https://www.interviewbit.com/blog/wp-content/uploads/2023/05/Artboard-1-copy-3.jpg" alt="" />
                                            <div className="posts_details">
                                                <div className="posts_title">Advanced Concepts of JavaScript</div>
                                                <p className="posts_des">1. Error Handling Sometimes our codes have errors. These errors happen because of our mistakes, maybe an unexpected input, or for a hundred other reasons. So, we use try…catch to handle these errors.</p>
                                                 <div className="posts_all_info d-flex align-items-center">
                                                    <div className="posts_info">
                                                    <i style={{color:"black"}} className="fa-solid fa-calendar-days"></i>
                                                    <div style={{fontSize:"12px"}}>12-01-2023</div>
                                                    </div>
                                                 </div>
                                            </div>
                                            </div>
                                    </a>
                                    <a href="" style={{color: "inherit"}}>
                                        <div className="posts">
                                            <img src="https://miro.medium.com/v2/resize:fit:970/1*0DlZeUQ-AF7i58MdkD9E4Q.jpeg" alt="" />
                                            <div className="posts_details">
                                                <div className="posts_title">Top 10 JavaScript Features</div>
                                                <p className="posts_des">1. Error Handling Sometimes our codes have errors. These errors happen because of our mistakes, maybe an unexpected input, or for a hundred other reasons. So, we use try…catch to handle these errors.</p>
                                                 <div className="posts_all_info d-flex align-items-center">
                                                    <div className="posts_info">
                                                    <i style={{color:"black"}} className="fa-solid fa-calendar-days"></i>
                                                    <div style={{fontSize:"12px"}}>12-01-2023</div>
                                                    </div>
                                                 </div>
                                            </div>
                                            </div>
                                    </a>
                                    <a href="" style={{color: "inherit"}}>
                                        <div className="posts">
                                            <img src="https://miro.medium.com/v2/resize:fit:1400/1*A8LYHKP8G3q5xIuAjOgqbw.jpeg" alt="" />
                                            <div className="posts_details">
                                                <div className="posts_title">Top 10 Things You Should Learn About JavaScript</div>
                                                <p className="posts_des">1. Error Handling Sometimes our codes have errors. These errors happen because of our mistakes, maybe an unexpected input, or for a hundred other reasons. So, we use try…catch to handle these errors.</p>
                                                 <div className="posts_all_info d-flex align-items-center">
                                                    <div className="posts_info">
                                                    <i style={{color:"black"}} className="fa-solid fa-calendar-days"></i>
                                                    <div style={{fontSize:"12px"}}>12-01-2023</div>
                                                    </div>
                                                 </div>
                                            </div>
                                            </div>
                                    </a>
                                    <a href="" style={{color: "inherit"}}>
                                        <div className="posts">
                                            <img src="https://miro.medium.com/v2/resize:fit:1200/1*int2Cu4gDCW6LIGr1cgKqg.jpeg" alt="" />
                                            <div className="posts_details">
                                                <div className="posts_title">Giới thiệu về dbdiagram</div>
                                                <p className="posts_des">1. Error Handling Sometimes our codes have errors. These errors happen because of our mistakes, maybe an unexpected input, or for a hundred other reasons. So, we use try…catch to handle these errors.</p>
                                                 <div className="posts_all_info d-flex align-items-center">
                                                    <div className="posts_info">
                                                    <i style={{color:"black"}} className="fa-solid fa-calendar-days"></i>
                                                    <div style={{fontSize:"12px"}}>12-01-2023</div>
                                                    </div>
                                                 </div>
                                            </div>
                                            </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <Footer/>
    </section>
    </div>
  )
}

export default Baiviet