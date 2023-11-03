import React from "react";
import {Link} from "react-router-dom";
import * as style from "../assets/css/LandingPage.module.css";
import lottie from 'lottie-web';
import {
  Row,
  Col,
  Card,
  Container
} from "reactstrap";

function LandingPage() {
  React.useEffect(() => {
    const container = document.getElementById('animation');
    if (!container)
    {
      container.innerHTML = 'Sorry, we could not load the animation.';
      return;
    }
    const animation = lottie.loadAnimation({
      container: document.getElementById('animation'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: "https://assets4.lottiefiles.com/packages/lf20_DMgKk1.json"
    });

    return () => {
      animation.destroy();
    };
  }, []);
  return (
    <>
    <Container className={style.landing}>
    <Row>
      <Col className={style.LandingPageCardCol}>
        <Card className={style.LandingPageCard}>
          <div className={style.div1}>
            <span >
              <div className={style.div2}>
                به کاتیوشا خوش اومدین!
              </div>
              <br/>
              <div className={style.div3} style={{textAlign: "right"}} >
                این سامانه به شما کمک می کنه که:
                <li>
                  برنامه هفتگی و لیست واحدها و امتحاناتون رو ببینین 📆
                </li>
                <li>
                 برای ترم آینده برنامه ریزی کنین 📒
                </li>
                <li style={{fontSize:"17px",textAlign: "right"}} >
                    و کلی قابلیت منحصر به فرد دیگه برای اینکه بتونین انتخاب واحد خوب و راحتی داشته باشین
                </li>
              </div>
              <br/>
              <Row className={style.LandingPageRow}>
                <Col>
                  <Link to="../Signup">
                    <button 
                      className={style.Buttons}
                    > 
                      ثبت نام
                    </button>
                  </Link>
                </Col>
                <Col>
                <Link to="../Login">
                    <button 
                      className={style.Buttons}
                    >
                      ورود
                    </button>
                  </Link>
                </Col>
              </Row>
            </span>
          </div>
          <span>
            <div className={style.div4}>
              <Row style={{fontSize:"15px",color:"#494f5d"}}>
                کنجکاویم که نظرات و پیشنهاداتتون رو درباره کاتیوشا بدونیم:
                katyushaiust@gmail.com
              </Row>
            </div>
          </span>
        </Card>
      </Col>
      <Col className={style.BGimgCol}>
        <div id="animation"></div>
      </Col>
    </Row>
    </Container>
    </>
  );
}
export default LandingPage;


