import { useState } from 'react';
import QRCode from 'react-qr-code';
import QRCodeLink from 'qrcode';
import './App.css';

function App() {

  const [link, setLink] = useState('')
  const [qrcodeLink, setqrcodeLink] = useState('')
  
  function handleGenerate(qrCodeurl){
    QRCodeLink.toDataURL(qrCodeurl, {
      width: 600,
      margin: 3,
    }, function(err, url){
      setqrcodeLink(url);
    })
  }

  function handleQrcode(e){
    setLink(e.target.value)
    handleGenerate(e.target.value)
  }

  return (
    <div className='container'>
      <div className="qrcode">
        <QRCode value={link}/>
      </div>
      <input type="text" placeholder='Your Link' value={link} onChange={ (e) => handleQrcode(e)} />
      <a href={qrcodeLink} download={'qrcode.png'}>DownLoad </a>
    </div>
  );
}

export default App;
