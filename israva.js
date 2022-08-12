function isJavaScriptFile(filename) {

    if (filename.match(/\.[0-9a-z]+$/i)) {
        if (filename.endsWith('.js')) {
            return true;
        }
        else { return false }
    }
    else {
        return "invalid filename"
    }

}
console.log(isJavaScriptFile("shafrin.js"));
var patt1 = /\.[0-9a-z]+$/i;

