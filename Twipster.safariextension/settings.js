// var myVolume = safari.extension.settings.volume
// safari.extension.settings.getItem("bitlykey");


var userFontSize = safari.extension.settings.getItem("fontsize");


function fontSizeChange(event) {
    if (event.key == "fontsize") {
        userFontSize = event.newValue;
    }
}
 
safari.extension.settings.addEventListener("change", fontSizeChange, false);