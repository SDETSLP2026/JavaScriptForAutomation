/*
Objects_Assignment-7
PS: Playwright Configuration Object
Create a configuration object:
browser, baseURL, headless, timeout, retries
Example:
{
browser: "chromium",
baseURL: "https://example.com",
headless: true,
timeout: 30000,
retries: 2
}
Perform:
1. Print all configuration values.
2. Change the browser.
3. Change the timeout.
4. Add screenshot: "only-on-failure".
5. Check whether retries exists.
6. Create a copy with a different baseURL.
*/

let browserObject = {
    browser: "chromium",
    baseURL: "https://example.com",
    headless: true,
    timeout: 30000,
    retries: 2
};

console.log("1. Print all configuration values.");
let configValues = Object.values(browserObject);
console.log(configValues); // ['chromium', 'https://example.com', true, 30000, 2]
console.log("--------------------------------------------------");

console.log("2. Change the browser.");
browserObject.browser = "firefox";
console.log(browserObject); // { browser: 'firefox', baseURL: 'https://example.com', headless: true, timeout: 30000, retries: 2 }
console.log("--------------------------------------------------");

console.log("3. Change the timeout.");
browserObject.timeout = 60000;
console.log(browserObject); // { browser: 'firefox', baseURL: 'https://example.com', headless: true, timeout: 60000, retries: 2 }
console.log("--------------------------------------------------");

console.log("4. Add screenshot: 'only-on-failure'.");
browserObject.screenshot = "only-on-failure";
console.log(browserObject); // { browser: 'firefox', baseURL: 'https://example.com', headless: true, timeout: 60000, retries: 2, screenshot: 'only-on-failure' }
console.log("--------------------------------------------------");

console.log("5. Check whether retries exists.");
console.log(browserObject.hasOwnProperty("retries")); // true
console.log("--------------------------------------------------");

console.log("6. Create a copy with a different baseURL.");
let newBrowserObject = { ...browserObject, baseURL: "https://newexample.com" };
console.log(newBrowserObject); // { browser: 'firefox', baseURL: 'https://newexample.com', headless: true, timeout: 60000, retries: 2, screenshot: 'only-on-failure' }

/*
1. Print all configuration values.
[ 'chromium', 'https://example.com', true, 30000, 2 ]
--------------------------------------------------
2. Change the browser.
{
  browser: 'firefox',
  baseURL: 'https://example.com',
  headless: true,
  timeout: 30000,
  retries: 2
}
--------------------------------------------------
3. Change the timeout.
{
  browser: 'firefox',
  baseURL: 'https://example.com',
  headless: true,
  timeout: 60000,
  retries: 2
}
--------------------------------------------------
4. Add screenshot: 'only-on-failure'.
{
  browser: 'firefox',
  baseURL: 'https://example.com',
  headless: true,
  timeout: 60000,
  retries: 2,
  screenshot: 'only-on-failure'
}
--------------------------------------------------
5. Check whether retries exists.
true
--------------------------------------------------
6. Create a copy with a different baseURL.
{
  browser: 'firefox',
  baseURL: 'https://newexample.com',
  headless: true,
  timeout: 60000,
  retries: 2,
  screenshot: 'only-on-failure'
}
*/