window.onbeforeunload = function (e) {
    // Cancel the event
    e.preventDefault();

    // Chrome requires returnValue to be set
    e.returnValue = 'Really want to quit the game?';
};

function prevention(e){
    e.preventDefault();
    e.stopPropagation();
    break;
}

//Prevent Ctrl+S (and Ctrl+W for old browsers and Edge)
document.onkeydown = function (e) {
    e = e || window.event;//Get event

    var code = e.which || e.keyCode;//Get key code

    if (!e.ctrlKey) {
        switch (code) {
            case 76: window.open("https://www.linkedin.com/in/aykhanhuseyn/", "_blank"); //Press L to Open LinkedIn
            case 71: window.open("https://www.github.com/aykhanhuseyn", "_blank"); //Press G to Open Github
            case 70: window.open("https://www.facebook.com/aykhan.huseyn7", "_blank"); //Press F to Open Facebook
            case 84: window.open("https://www.twitter.com/aykhanhuseyn", "_blank"); //Press T to Open Twitter
            case 77: window.open("mailto:aykhanrh@code.edu.az?subject=I want my own website!&body=I want my own website!", "_blank"); //Press M to Open Mail
            case 67: window.open("tel: +994552171845", "_self"); //Press C to Open Caller
            case 82: window.open("https://t.me/aykhanhuseyn", "_blank"); //Press R to Open Telegram
            case 87: window.open("https://api.whatsapp.com/send?phone=994552171845&text=I want my own website!", "_blank"); //Press W to Open WhatsApp
        }
    } else
    // switch (code) {
    //     case 82://Block Ctrl+R
    //     case 83://Block Ctrl+S
    //     case 87://Block Ctrl+W -- Not work in Chrome and new Firefox
    //         prevention(e);
    // }
};