import './App.css'
import Header from './Header'
import barcode from './assets/barcode.gif'
import qrcode from './assets/qrcode.png'
import Footer from './Footer'

function Counter() {
    return (
        <div className="body">
            <div className="card">
                
                <Header />

                <div className="inner">

                    <img 
                        src="https://mistudebnath.ryecsm.in/me.png" 
                        alt="Mistu Profile" 
                        id="image" 
                    />

                    <div className="name">
                        <h1>Mistu Debnath</h1>
                    </div>

                    <div className="id">
                        <p><i>ID: CA/DF1/27009</i></p>
                    </div>

                    <div className="description">
                        <p>Backend Engineer Intern </p>
                       
                    </div>

                    <div className="qr">
                        <img src={qrcode} alt="QR Code" id="qr" />
                    </div>

                    <div className="barcode">
                        <img src={barcode} alt="Barcode" id="barcode" />
                    </div>

                    <div className="footer-bar">
                        <Footer />
                    </div>

                </div>
              
            </div>
             
        </div>
    )
}

export default Counter