import React, { useEffect } from 'react';
// import cloudinary from 'cloudinary';

// import { Button } from 'reactstrap';

import MainNavbar from '../components/MainNavbar';
import Footer from '../components/Footer';

const WorksPage = () => {
    useEffect(() => {
        document.title += ' | Works';
        document.getElementById('footer').style.position = 'initial';
    }, []);

    return (
        <div className="App container">
            <header className="App-header">
                <MainNavbar />
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
            </header>

            <div className="row" id="works-row">
                <div className="col-sm">
                    <h1>Website</h1>
                </div>
                <div className="w-100"></div>

                <div className="col-sm-6 project-preview">
                    <a href="https://benuasoftworks.com" target="_blank" rel="noopener noreferrer" id="sept-2018">
                        <p id="project-title-1" className="project-title">BENUA Softworks</p>
                        <p id="project-title-mobile-1" className="project-title-mobile">BENUA Softworks</p>
                        <img id="preimg1" className="previewimg" src="includes/img/works/Sept 2018/benuasoftworks.jpg" width='100%' alt='BENUA Softworks' />
                    </a>
                </div>
                <div className="col-sm-6 project-preview">
                    <a href="https://fralyx.github.io/Typist" target="_blank" rel="noopener noreferrer" id="sept-2018">
                        <p id="project-title-2" className="project-title">Typist</p>
                        <p id="project-title-mobile-2" className="project-title-mobile">Typist</p>
                        <img id="preimg2" className="previewimg" src="includes/img/works/Jul 2019/Typist.png" width='100%' alt='BENUA Softworks' />
                    </a>
                </div>

                <div className="w-100"></div>

                <div className="col-sm" id="works-heading">
                    <h1>Rainmeter</h1>
                </div>
                <div className="w-100"></div>

                <div className="col-sm-6 project-preview">
                    <a href="https://github.com/aircatcher/iometta" target="_blank" rel="noopener noreferrer" id="sept-2018">
                        <p id="project-title-3" className="project-title">iometta</p>
                        <p id="project-title-mobile-3" className="project-title-mobile">iometta</p>
                        <img id="preimg3" className="previewimg" src="includes/img/works/Sept 2018/iometta.png" width='100%' alt='iometta' />
                    </a>
                </div>
                <div className="w-100"></div>

                <div className="col-sm" id="works-heading">
                    <h1>Just For Fun</h1>
                </div>
                
                <div className="w-100"></div>

                <div className="col-sm-6 project-preview">
                    <a href="https://leekspin.netlify.app" target="_blank" rel="noopener noreferrer" id="apr-2020-1">
                        <p id="project-title-4" className="project-title">LEEKSPIN</p>
                        <p id="project-title-mobile-4" className="project-title-mobile">LEEKSPIN</p>
                        <img id="preimg4" className="previewimg" src="includes/img/works/Apr 2020/leekspin.png" width='100%' alt='LEEKSPIN' />
                    </a>
                </div>

                <div className="col-sm-6 project-preview">
                    <a href="https://marketplace.visualstudio.com/items?itemName=fralyx.evil-red-theme" target="_blank" rel="noopener noreferrer" id="apr-2020-2">
                        <p id="project-title-5" className="project-title">VS Code Theme: Evil Red</p>
                        <p id="project-title-mobile-5" className="project-title-mobile">VS Code Theme: Evil Red</p>
                        <img id="preimg5" className="previewimg" src="includes/img/works/Apr 2020/evil-red.png" width='100%' alt='Evil Red Theme' />
                    </a>
                </div>

                {/* <div className="col-sm-6 project-preview">
                    <img src={ cloudinary.url("http://benuasoftworks.com", { type: "url2png", sign_url: true }) } alt="BENUA Softworks" />
                    </div> */}
            </div>

            <br />
            <Footer />
        </div>
    );
}

// cloudinary.config(
// {
//     cloud_name: 'aircatcher',
//     api_key: '293621111226193',
//     api_secret: 'VoLVMe3Hz7MAXZN9BnuTGW32x68'
// })
export default WorksPage;