import React, { useEffect } from 'react';

import MainNavbar from '../components/MainNavbar';
import Footer from '../components/Footer';

const StatsPage = () => {
    useEffect(() => {
        document.title += ' | Stats';
    }, []);

    return (
        <div className="App container">
            <header className="App-header">
                <MainNavbar />
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
            </header>

            <div className="row" id="homepage-row">
                <div className="col-sm-3"></div>
                <div className='col-sm-6'>
                    <h1>Stats</h1>
                    <a id="page-stats" href='https://clustrmaps.com/site/1au3f' title='Visit tracker'><img src='//clustrmaps.com/map_v2.png?cl=ffffff&w=1000&t=tt&d=IGOwZPIUQU6COEzG1RUo5aTAZLsWd_2gvDJUg6VR3ZY&co=0015d6&ct=ffffff' alt="" /></a>
                </div>
                <div className='col-sm-3'></div>
            </div>

            <Footer />
        </div>
    );
}

export default StatsPage;