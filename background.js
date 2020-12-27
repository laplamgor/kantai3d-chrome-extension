chrome.webRequest.onBeforeRequest.addListener(
    function (info)
{
    console.log('chrome.webRequest.onBeforeRequest');
    console.log(info);

        // The code here is to replace the main.js by a dataurl with no content
    return {  redirectUrl: 'data:application/javascript,;;' };

},
{
    // filters
    // Only block the main.js when the request has version number query (by original code)
    // Only block the main.js when the request has no version number query (by patcher)
    urls: ['http://*/kcs2/js/main.js?version*']
},
    // extraInfoSpec
    ['blocking']);
