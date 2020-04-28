if (window == top) {//If the google page is the top window, we want to add another search engine's frame to it

    let baseSearchUrl = 'https://www.bing.com/search';
    //TODO Get this URL from somewhere else, (settings + Json ?) to support multiple scenarios (Google+Bing, or Google+DuckDuckGo, for example, based on user choices)

    let hostAdjustmentsStylesheet = 'stylesheets/Google/hostPage.css';

    // We get the search query from the Google URL parameters.
    const url = new URL(window.location.href);
    const searchQuery = url.searchParams.get('q');
    //Number of the first result. Appears when changing pages.
    const resultsStart = 0||url.searchParams.get('start');//Hardcoded for google. TODO Extract
    //TODO : The "start" parameter name is NOT standard between search engines. Generalize this somehow, or drop support since people never go further than the first results page.

    //We add an iframe with the search query
    //TODO REM const frameSearchURL = baseSearchUrl + searchQuery;
    let frameSearchURL = new URL(baseSearchUrl);
    frameSearchURL.searchParams.append('q',searchQuery);
    frameSearchURL.searchParams.append('first',resultsStart);//Hardcoded for Bing. TODO Extract
    addDualSearchIFrame(document,frameSearchURL);

    //We add style adjustments to the page to make it "adjust" to the new frame we added in it.
    //Note : This path has to be declared in the manifest to be accessible from the webpage.
    const stylesheetURL = chrome.extension.getURL(hostAdjustmentsStylesheet);
    addStylesheet(document, stylesheetURL);
}
else{//If the google page is not the top window, it may be in a frame.

    // We would want to inject our frame adjustments only in this case. as they are not suitable for a full Google window

    //TODO - As of now only Google+Bing is supported, not Bing+Google

}
