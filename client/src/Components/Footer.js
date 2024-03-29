import React from 'react';
import facebook from '../Icons/facebookcircleC.png'; 
import instagram from '../Icons/instacircle1C.png'; 
import soundcloud from '../Icons/resizedsoundcloudC.png'; 

function Footer () {

    return (
        <footer> 
            <div className="icons">
                <a href='https://www.facebook.com/wellknownweddingdj'>
                    <img src={facebook} link="" alt="facebookwidget" className="iconF"/>
                </a>
                <a href='https://www.instagram.com/wellknownweddingdj/'>
                    <img src={instagram} link="" alt="instagramwidget" className="iconI" />
                </a>
                <a href='https://soundcloud.com/wellknownweddingdj' >
                    <img src={soundcloud} link="" alt="soundcloudwidget" className="iconS" /> 
                </a>
            </div>
    </footer>

    ); 
}

export default Footer; 