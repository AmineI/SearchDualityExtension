if (window == top) {//If the Bing page is the top window,
    // we would want to add another search engine's frame to it.
    //TODO - As of now only Google+Bing is supported, not Bing+Google

}
else{//If the bing page is not the top window, it may be in a frame.
    // We inject our frame adjustments only in this case. as they are not suitable for a full bing window

    let frameAdjustmentsStylesheet= 'stylesheets/Bing/framePage.css';

    //We "fix" links so that a clicked search result is opened in the full tab instead of in the iframe
    createBaseTagWithParentTarget(document)

    //Style adjustments for the iframe
    //Note : This path has to be declared in the manifest to be accessible from the webpage.
    const stylesheetURL = chrome.extension.getURL(frameAdjustmentsStylesheet);
    addStylesheet(document, stylesheetURL);
}
