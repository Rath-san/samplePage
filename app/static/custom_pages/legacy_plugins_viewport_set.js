/**
 * Changes viewport scale depending on screen width.
 * Used only in legacy montionvfx plugin templates that are not responsive.
 */

let viewportMeta = document.getElementById('viewportMeta'); // Fetch viewport element.

// Check in viewport meta tag is present.
if (viewportMeta) {
    checkScreenSize(); // Set the correct viewport value on page load.

    window.onresize = () => checkScreenSize(); // Set the scale on each screen orientation change.
}

/**
 * Chooses an appropriate scale to current screen width.
 */
function checkScreenSize() {
    let screenWidth = screen.width; // Check device screen width.

    if (screenWidth <= 385) {
        setScale('0.2');
    } else if (screenWidth < 499) {
        setScale('0.3');
    } else if (screenWidth < 740) {
        setScale('0.4');
    } else if (screenWidth < 865) {
        setScale('0.5');
    } else if (screenWidth < 1000) {
        setScale('0.6');
    } else if (screenWidth < 1140) {
        setScale('0.7');
    } else if (screenWidth < 1275) {
        setScale('0.8');
    } else {
        setScale('0.9');
    }
}

/**
 * Sets initial scale to meta tag.
 * @param {string} initialScale 
 */
function setScale(initialScale) {
    viewportMeta.setAttribute('content', `width=device-width, initial-scale=${initialScale}, maximum-scale=0.9, user-scalable=yes`);
}
