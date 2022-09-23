// import modules
import './form';
import './submit';
import { initdb, getDb, postDb } from './database';

// Import CSS files
import "../css/index.css";

// Import bootstrap stuff
import { Tooltip, Toast, Popover } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import pictures
import Logo from '../images/logo.png';
import Bear from '../images/bear.png';
import Dog from '../images/dog.png';

// use pictures on load
window.addEventListener('load', function(){
    initdb();

    getDb();
    postDb("NitroCoffee", "nitro.coffee@example.com", "5555555555", "Bear");
    getDb();
    
    document.getElementById('logo').src = Logo;
    document.getElementById('bearThumbnail').src = Bear;
    document.getElementById('dogThumbnail').src = Dog;
});