import './App.css';
import { useState } from 'react'
import InnerImageZoom from'react-inner-image-zoom'
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";
import Modal from 'react-modal'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css'


const App = () => {
  const [showModal, setShowModal] = useState(false)
  if (isMobile) {
    return (
      <div>
        <img src="https://picsum.photos/200/300" width={400} onClick={() => setShowModal(true)}/>
        <Modal isOpen={showModal}>
          <div style={{ textAlign: "center"}}>
            <img src="https://picsum.photos/200/300" width={400} onClick={() => setShowModal(false)}/>
          </div>
        </Modal>
      </div>
    )
  }
  return (
      <InnerImageZoom
        src="https://picsum.photos/200/300"
        zoomSrc="https://picsum.photos/800/1200"
        width={400}
        fullScreenOnMobile={true}
        hasSpacer={true}
      />
    )
}

export default App;
