
chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){

    let divs = [];

    let x = document.body.getElementsByTagName("*");
    let l = x.length;
    for (i = 0; i < l; i++) {
        divs.push(x[i].tagName.toLowerCase());
    }
    const stylesElement = [];
    for (var i = 0; i < divs.length; i++) {
        let para = document.querySelector(divs[i]);
        let props = window.getComputedStyle(para, ["background-color", "color"]);
        if ((!stylesElement.includes(props.getPropertyValue('color'))) && (!stylesElement.includes(props.getPropertyValue('background-color')))) {
            stylesElement.push(props.getPropertyValue('color'));
        }
        if ((!stylesElement.includes(props.getPropertyValue('color'))) && (!stylesElement.includes(props.getPropertyValue('background-color')))) {
            stylesElement.push(props.getPropertyValue('background-color'));
        }
    }
    sendResponse({colors:stylesElement});
});