import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import style from './Carousal.module.css'

function Carousalpic() {
  return (
    <div className={style.carousalcaontainer}>
      <Carousel>
        <Carousel.Item>
          <img className={style.hadeesimage} src="https://dcok7u9o4gc10.cloudfront.net/uploads/ckeditor/pictures/2363/content_3.png" alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className={style.hadeesimage} src="https://dcok7u9o4gc10.cloudfront.net/uploads/ckeditor/pictures/2365/content_5.png" alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className={style.hadeesimage} src="https://dcok7u9o4gc10.cloudfront.net/uploads/ckeditor/pictures/2364/content_4.png" alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Carousalpic;