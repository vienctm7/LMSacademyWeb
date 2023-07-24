
import "./Footer.css"
import { Link} from "react-router-dom";

function Footer() {
  return (
    <div>
         <div className="footer">
        <div className="footer-div1">
        <Link to="/Home">
            <img
             style={{marginLeft: "20px"}}
              src="https://learn.rikkeiacademy.com/static/media/RIKKEI_ACADEMY_LOGO.e997e6f7.png"
              width={120}
              alt=""
            />
          </Link>
          <br />
            <span >Để nông dân biết code</span>
            <ul style={{marginTop:"20px", listStyleType:"none",marginBottom:"20px"}}>
                <li>
                <i className="fa-solid fa-phone"></i>
                <span>096-669-996</span></li>
                <li>
                <i className="fa-regular fa-envelope"></i>
                <span>   Email:daotao@rikkei.com</span>
                </li>
                <li>
                <i className="fa-solid fa-location-dot"></i>
                <span>
                Địa chỉ: Tầng 7 khối A tòa nhà Sông Đà, đường Phạm Hùng , Phường Mỹ Đình 1, Quận Nam Từ Liêm, Thành phố Hà Nội, Việt Nam</span>
                </li >
                </ul>
                <Link to="/Home">
            <img
             style={{marginLeft: "25px"}}
              src="https://fullstack.edu.vn/static/media/dmca.2593d9ecf1c982e3c3a2.png"
              width={120}
              alt=""
            />
          </Link>
            
        </div>
        <div className="footer-div2">
            <h4 style={{marginBottom:"20px"}}>Sản phẩm</h4>
            <ul >
                <li>Dành cho người mới bắt đầu</li>
                <li>Dành cho người có nền tảng</li>
                <li>Dành cho người muốn đi Nhật</li>
            </ul>
        </div>
        <div className="footer-div3">
            <h4  style={{marginBottom:"20px"}}>Hỗ trợ</h4>
            <ul style={{listStyle: "none"}}>
                <li>Liên hệ</li>
                <li>Bảo mật</li>
                <li>Điều khoản</li>
                <li>Cơ hội việc làm</li>
            </ul>
        </div>
        <div className="footer-div4">
            <h4 style={{marginBottom:"20px"}}>CÔNG TY TNHH RIKKEI EDUCATION</h4>
            <span>Mong muốn của chúng tôi sẽ mang đến thật nhiều cơ hội học tập 
              và làm việc tại Nhật Bản cho các lập trình viên Việt Nam. Đến với 
              Rikkei Academy bạn sẽ không còn cảm thấy lập trình viên là một nghề khó theo đuổi và cần trình độ cao, 
              chỉ cần bạn quyết tâm và nỗ lực chỉ sau 6 tháng ắt bạn sẽ gặt trái ngọt.</span><br />
              <span style={{fontStyle: "italic"}}>Anh Nguyễn Viết Lâm – CEO Rikkei Academy</span>
            <div className="iconbot">
                <Link to="facebook.com"><i style={{color:"blue"}} className="fa-brands fa-facebook"></i></Link>
                <Link to="telegram.com"><i style={{color:"blue"}} className="fa-brands fa-telegram"></i></Link>
            </div>
        </div>
        <div>
        </div>
        
    </div>
    </div>
  )
}

export default Footer