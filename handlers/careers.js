const HtmlParser = require('../utils/htmlparser');
const fetchHandler = require('../handlers/fetch');

async function careers(department) {
    // Make an API call
    const careersHtmlContent = await fetchHandler.fetchData('/company/careers');
    const htmlParser = new HtmlParser(careersHtmlContent);
    const openPositionTitles = htmlParser.getOpenPositionTitleNames(department);

    return { jobTitles: openPositionTitles };
}


module.exports = careers;