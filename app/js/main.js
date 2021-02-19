'use strict';

const upcomingWebinars = document.querySelectorAll('.upcoming-webinars .webinars-list');
const pastWebinars = document.querySelectorAll('.past-webinars .webinars-list');
let clientWidth = document.body.clientWidth;


// Formation of an array of webinars
function searchWebinars(perrentSection) {
    let webinars = [];

    perrentSection.forEach(list => {

        for (var i = 0; i < list.childNodes.length; i++) {
            if (list.childNodes[i].className == "webinar") {
                webinars.push(list.childNodes[i]);
              i++;
            }       
        }
    });

    return webinars;
}

// Showing 3 webinars
function sortWebinar(perrentSection) {
    
    let webinars = searchWebinars(perrentSection);

    webinars.forEach((webinar, index) => {
        if (index > 2) {
            webinar.style.display = 'none';
        }
    });
}


// Hide webinar on mobile devise
function hideWebinarsOnMobile(perrentSection, width) {
    if (width < 810) {
        sortWebinar(perrentSection);
    } else {
        return;
    }
}

hideWebinarsOnMobile(upcomingWebinars, clientWidth);
hideWebinarsOnMobile(pastWebinars, clientWidth);

window.addEventListener('resize', () => {
    clientWidth = document.body.clientWidth; 
    hideWebinarsOnMobile(upcomingWebinars, clientWidth);
    hideWebinarsOnMobile(pastWebinars, clientWidth);
});