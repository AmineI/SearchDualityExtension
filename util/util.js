/** Adds a base tag with a target of "_parent" to the HTML's head.
 * This forces any link clicked in an iframe to open in the full tab, instead of opening in the iframe.
 * @param document document to add the tag in.
 */
function createBaseTagWithParentTarget(document) {
    let base = document.createElement("base");
    base.setAttribute("target", "_parent");
    document.getElementsByTagName("head")[0].appendChild(base);
}

/**Adds a stylesheet link to the HTML's head.
 * @param stylesheetUrl URL of the stylesheet to link.
 * @param document document to add the tag to.
 */
function addStylesheet(document, stylesheetUrl) {
    const link = document.createElement('link');
    link.href = stylesheetUrl;
    link.type = 'text/css';
    link.rel = 'stylesheet';
    document.getElementsByTagName('head')[0].appendChild(link);
}

/**
 * Creates a 45% width frame on the document
 * @param frameURL URL of the iframe to create
 * @param document document to add the frame to.
 * @returns {HTMLIFrameElement}
 */
function addDualSearchIFrame(document,frameURL) {
    let searchFrame = document.createElement('iframe');
    searchFrame.src = frameURL;
    searchFrame.id = 'dual-search-frame';
    //searchFrame.width = '45%'; - This should be done through CSS.

    //We add it to the document.
    document.getElementsByTagName('body')[0].appendChild(searchFrame);

    return searchFrame;
}
