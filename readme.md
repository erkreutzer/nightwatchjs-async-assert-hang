# Nightwatch.js hang on async/await assertion failure 

Start with:

```shell
npm i
```

When using `browser.assert.fail` within an async/await style test the session hangs instead of closing out the session.

For completeness there is a chained version that shows the expected behavior.

To test the chained version:

```shell
npx nightwatch ecosia-chained.js
```


To test the async/await version:

```shell
npx nightwatch ecosia-async.js
```

Notably, without the `saveScreenshot()` call the async/await version works as expected. 
An async/await version without the `saveScreenshot()` works as expected:

```shell
npx nightwatch ecosia-async-no-screenshot.js
```
