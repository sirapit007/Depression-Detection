import React, { useEffect } from 'react';
import './Page.css';
import pic1 from '../images/new1.png'
import pic2 from '../images/new2.png'
import pic3 from '../images/new3.png'
import pic4 from '../images/new4.png'
import pic5 from '../images/new5.png'
import pic6 from '../images/new6.png'
import pic7 from '../images/new7.png'
import pic8 from '../images/new8.png'

function Home() {
  useEffect(() => {
    document.title = 'Depression Detection';
  }, []);

  return (
    <div className='home'>
      <div className='to'>
        <div className='block'>
          <img src={pic1} alt="Logo" className='photo'/>
          <a style={{textDecoration: 'none'}} href='https://www.rama.mahidol.ac.th/ramamental/generalknowledge/general/09042014-1017'>
            <p></p>
            <p>"โรคซึมเศร้าโดยละเอียด" RamaMental</p>
          </a>
        </div>
        <div className='block'>
          <img src={pic2} alt="Logo" className='photo'/>
          <a style={{textDecoration: 'none'}} href='https://www.rama.mahidol.ac.th/th/depression_risk'>
            <p></p>
            <p>แบบทดสอบภาวะซึมเศร้า PHQ-9</p>
          </a>
        </div>
      </div>
      <div className='to'>
        <div className='block'>
          <img src={pic3} alt="Logo" className='photo'/>
          <a style={{textDecoration: 'none'}} href='https://new.camri.go.th/Knowledge/%E0%B8%9A%E0%B8%97%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1/%E0%B8%AD%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B9%82%E0%B8%A3%E0%B8%84%E0%B8%8B%E0%B8%B6%E0%B8%A1%E0%B9%80%E0%B8%A8%E0%B8%A3%E0%B9%89%E0%B8%B2'>
            <p></p>
            <p>"อาการโรคซึมเศร้าในวัยรุ่น" CAMRI</p>
          </a>
        </div>
        <div className='block'>
          <img src={pic4} alt="Logo" className='photo'/>
          <a style={{textDecoration: 'none'}} href='http://www.thaimentalhealth.com/%E0%B8%AA%E0%B9%81%E0%B8%81%E0%B8%99%E0%B9%83%E0%B8%88/%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%A1%E0%B8%B4%E0%B8%99%E0%B9%82%E0%B8%A3%E0%B8%84%E0%B8%8B%E0%B8%B6%E0%B8%A1%E0%B9%80%E0%B8%A8%E0%B8%A3%E0%B9%89%E0%B8%B2-9-%E0%B8%84%E0%B8%B3%E0%B8%96%E0%B8%B2%E0%B8%A1-9q.html'>
            <p></p>
            <p>แบบประเมินโรคซึมเศร้า 9 คำถาม (9Q)</p>
          </a>
        </div>
      </div>
      <div className='to'>
        <div className='block'>
          <img src={pic5} alt="Logo" className='photo'/>
          <a style={{textDecoration: 'none'}} href='https://www.medparkhospital.com/content/depression'>
            <p></p>
            <p>"โรคซึมเศร้า" MedPark</p>
          </a>
        </div>
        <div className='block'>
          <img src={pic6} alt="Logo" className='photo'/>
          <a style={{textDecoration: 'none'}} href='https://new.camri.go.th/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%A1%E0%B8%B4%E0%B8%99%E0%B8%AA%E0%B8%B8%E0%B8%82%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%88%E0%B8%B4%E0%B8%95/%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%97%E0%B8%94%E0%B8%AA%E0%B8%AD%E0%B8%9A%E0%B8%A0%E0%B8%B2%E0%B8%A7%E0%B8%B0%E0%B8%8B%E0%B8%B6%E0%B8%A1%E0%B9%80%E0%B8%A8%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B9%83%E0%B8%99%E0%B8%A7%E0%B8%B1%E0%B8%A2%E0%B8%A3%E0%B8%B8%E0%B9%88%E0%B8%99'>
            <p></p>
            <p>แบบประเมินซึมเศร้าสำหรับวัยรุ่น (CES-D)</p>
          </a>
        </div>
      </div>
      <div className='to'>
        <div className='block'>
          <img src={pic7} alt="Logo" className='photo'/>
          <a style={{textDecoration: 'none'}} href='https://www.sikarin.com/health/%E0%B9%82%E0%B8%A3%E0%B8%84%E0%B8%8B%E0%B8%B6%E0%B8%A1%E0%B9%80%E0%B8%A8%E0%B8%A3%E0%B9%89%E0%B8%B2-depression'>
            <p></p>
            <p>"เรียนรู้และเข้าใจ โรคซึมเศร้า" Sikarin</p>
          </a>
        </div>
        <div className='block'>
          <img src={pic8} alt="Logo" className='photo'/>
          <a style={{textDecoration: 'none'}} href='https://www.manarom.com/test/depression_thai.html'>
            <p></p>
            <p>Depression and Risk of suicide</p>
          </a>
        </div>
      </div>
    </div>
  );
}

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

export default Home;
