// Settings Box

    var fa_gear = document.querySelector('.toggle-settings .fa-gear');
    var settings_box_open = document.querySelector('.settings-box');

    
    fa_gear.onclick = function() {

    // Toggle Class fa-spin For Rotaiton On Self
    this.classList.toggle('fa-spin');
    // Toggle Class open On Main Settings Box
    settings_box_open.classList.toggle('open');
}


// Swich Color
const colorLi = document.querySelectorAll('.color-list li');

// Loop On All li
colorLi.forEach(li => {

    // Click On Every li
    li.addEventListener('click', (e) => {

        // Set Color On Root
        document.documentElement.style.setProperty('--main--color', e.target.dataset.color )

    })
})


// ===========================================================

// Select Landing Page Element
let landingPage = document.querySelector('.landing-page');

// Get Array Of Images
let imagesArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg"];

setInterval(() => {

    // Get Random Number 
    let randomNumber = Math.floor(Math.random() * imagesArray.length);
    //Change Background Imgaes Url
    //  landingPage.style.backgroundImage = 'url("Images/' +imagesArray[randomNumber] +'")';
}, 3000) 


// ======================================================

//Select Skills => Progress

let ourskills = document.querySelector('.skills');

window.onscroll = function () {

    // Skills Offset Top
    let skillsOffsetTop = ourskills.offsetTop;

    // Skills Outer height
    let skillsOuterHeight = ourskills.offsetHeight; 

    // Window Height
    let windowHeight = this.innerHeight;

    // Window ScrollTop
    let windowScrollTop = this.pageYOffset;

    if (windowScrollTop >= (skillsOffsetTop + skillsOuterHeight - windowHeight)) {

        let allSkills = document.querySelectorAll('.skills .skill-box .skill-progress span');

        allSkills.forEach( skill => {

            skill.style.width = skill.dataset.progress;

    })};
};

// ======================================================

// gallery popup

let ourgallery = document.querySelectorAll('.gallery .images-box img');

ourgallery.forEach(img => {

    img.addEventListener('click', (e) => {

        // creat overlay popup
        let overlay = document.createElement('div');

        // Add class to overlay
        overlay.classList = 'overlay-popup';

        // add overlay to body
        document.body.appendChild(overlay);

        // creat popup box
        let popupBox = document.createElement('div');

        // add class to popup box
        popupBox.classList = 'popup-box';

        
        if(img.alt !== null) {
            //creat heading
            let imageHeading = document.createElement('h3');
            // create text to heading
            let imageText = document.createTextNode(img.alt);
            //appen the text to heading
            imageHeading.appendChild(imageText);
            // append the heading to popup Box
            popupBox.appendChild(imageHeading);

            // create close span
            let closeButton = document.createElement('span');
            // create text close
            let textClose = document.createTextNode('X');
            //append text to close Button
            closeButton.appendChild(textClose);
            // add class to close button
            closeButton.className = "close-button";
            // append close button to popupBox
            popupBox.appendChild(closeButton);
        }

        // creat the img
        let popupImage = document.createElement('img');

        // set image source
        popupImage.src = img.src;

        // add image to popup box
        popupBox.appendChild(popupImage);

        // add popup box to body
        document.body.appendChild(popupBox);

        // close popup 
        let closeOverlay = document.querySelector('.overlay-popup');
        
        document.addEventListener('click', close => {

            if(close.target.className == 'close-button') {

                // remove this class button
                close.target.parentNode.remove();
                // remove overlay
                closeOverlay.remove();
            }
        })

    })
})

// ======================================================
// Select All Bullets
const allBullets = document.querySelectorAll('.nav-bullets .bullet');

// Select All links

const allLinks = document.querySelectorAll('.links a');

//  All function
function scrollSomeWhere(elements) {

    elements.forEach(ele => {

        ele.addEventListener('click', (e) => {
    
            e.preventDefault();
    
            document.querySelector(e.target.dataset.section).scrollIntoView({
    
                behavior: "smooth"

            });
    
        });
    
    });
}

scrollSomeWhere(allBullets);
scrollSomeWhere(allLinks);


// Icon Menu 

let toggleButton = document.querySelector('.toggle-menu'),
    links = document.querySelector('.links');

toggleButton.onclick = function () {

    this.classList.toggle('menu-active');

    links.classList.toggle('open');

}

// Click anywher outside menu and toggle button

document.addEventListener('click', (e) => {

    if(e.target !== toggleButton && e.target !== links) {

        // check if menu is open 
        if (links.classList.contains('open')) {

            toggleButton.classList.toggle('menu-active');

            links.classList.toggle('open');
        }

    }
})

// stop proPagation on menu
links.onclick = function (e) {

    e.stopPropagation();

}
