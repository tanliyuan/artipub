
// const log4js = require("log4js");
// log4js.configure({
//   appenders: { cheese: { type: "file", filename: "cheese.log" } },
//   categories: { default: { appenders: ["cheese"], level: "error" } }
// });

// const logger = log4js.getLogger("cheese");
// logger.trace("Entering cheese testing");
// logger.debug("Got cheese.");
// logger.info("Cheese is Comté.");
// logger.warn("Cheese is quite smelly.");
// logger.error("Cheese is too ripe!");
// logger.fatal("Cheese was breeding ground for listeria.");

(async () => {
  const PCR = require("puppeteer-chromium-resolver");
  const stats = await PCR();
  const browser = await stats.puppeteer
    .launch({
      headless: false,
      args: ["--no-sandbox"],
      executablePath: stats.executablePath
    })
    .catch(function(error) {
      console.log(error);
    });
    const context = browser.defaultBrowserContext();
context.overridePermissions("https://www.mdnice.com/", ["clipboard-read"]);
  const page = await browser.newPage();

  await page.goto("https://www.mdnice.com/");
  await page.waitFor(2000);
  await page.click("#nice-sidebar-wechat");

  const html = await page.evaluate(() => navigator.clipboard.readText());
  console.log(html)
  browser.close();
})();
