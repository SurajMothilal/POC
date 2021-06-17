import './App.css';
import { useState } from 'react'
import InnerImageZoom from'react-inner-image-zoom'
import {
  isMobile
} from "react-device-detect";
import Modal from 'react-modal'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css'
import small from './small.jpg'
import large from './large.jpg'
import small2 from './small2.jpg'
import large2 from './large2.jpg'


const App = () => {
  const [showModal, setShowModal] = useState(false)
  const [displayedImage, setDisplayedImage] = useState(large)
  if (isMobile) {
    return (
      <div>
        <img src={small} width="90%" style={{ margin: 10 }} onClick={() => setShowModal(true)}/>
        <h1 style={{ marginLeft: 10 }}>This is a title</h1>
        <h2 style={{ marginLeft: 10 }}>Author</h2>
        <Modal isOpen={showModal}>
          <div style={{ textAlign: "center"}}>
            <div style={{ marginBottom: 5 }}>
              This is the item title
              <button style={{ display: 'inline', marginLeft: 10 }} onClick={() => setShowModal(false)}>x</button>
            </div>
            <InnerImageZoom
              src={displayedImage === large ? small : small2}
              zoomSrc={displayedImage}
              width={400}
              fullScreenOnMobile={true}
              hasSpacer={true}
            />
            <div>
              <img src={small} width={40} style={{ marginRight: 10 }} onClick={() => setDisplayedImage(large)} />
              <img src={small2} width={40} style={{ marginRight: 10 }} onClick={() => setDisplayedImage(large2)} />
              <img src={small} width={40} onClick={() => setDisplayedImage(large)} />
            </div>
          </div>
        </Modal>
      </div>
    )
  }
  return (
    <div style={{ paddingLeft: 30, paddingTop: 30, flexDirection: 'row'}}>
      <InnerImageZoom
        src={small}
        zoomSrc={large}
        width={400}
        hasSpacer={true}
      />
      <div style={{ display: 'inline-block', verticalAlign: 'top' }}>
        <h1 style={{ marginLeft: 10 }}>This is a title</h1>
        <h2 style={{ marginLeft: 10 }}>Author</h2>
      </div>
    </div>
    )
}

export default App;
