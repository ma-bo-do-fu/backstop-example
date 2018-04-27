module.exports = async (page, scenario, vp) => {
    await require('./loadCookies')(page, scenario);
    if (vp.label === 'phone') {
        await page.setUserAgent(
            'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1'
        );
    }
};
