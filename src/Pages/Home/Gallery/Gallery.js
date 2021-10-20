import React from 'react'
import './Gallery.css'
import img1 from '../../../img/gallery/gallery1.jpg'
import img2 from '../../../img/gallery/gallery2.jpg'
import img3 from '../../../img/gallery/gallery3.jpg'
import img4 from '../../../img/gallery/gallery4.jpg'
import img5 from '../../../img/gallery/gallery5.jpg'
import img6 from '../../../img/gallery/gallery6.jpg'

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="container">
        <div className="gallery-text">
          <h1 className="text-center">Gallery of Our Clinic</h1>
          <p className="text-center">Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo non habent claritatem insitamconsequat duis autem facilisis at vero eros</p>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card">
              <img src={img1} className="card-img-top" alt="..." />
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={img2} className="card-img-top" alt="..." />
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={img3} className="card-img-top" alt="..." />
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={img4} className="card-img-top" alt="..." />
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={img5} className="card-img-top" alt="..." />
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={img6} className="card-img-top" alt="..." />
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Gallery
