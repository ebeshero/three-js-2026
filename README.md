# Simple Three-JS Project
For use as a model supporting my Digit 400: Digital Project Design class at Penn State Behrend.
Works with [Mia Borgia's "Three.JS Tutorial - Create 3D Environments with HTML and Javascript"](https://newtfire.github.io/newTutorials/threeJS/threeJS.html).

## 2026-10-20: Changes Introduced

Let's not follow Vite's default configurations because they complicate file relationships when we build and try to publish.

After vite is initiated, move `main.js` and `style.css` out of `src/` and up to the root directory at the same level as index.html (as you see in this repo.)

When you've moved `main.js` and `style.css` files, we can get rid of these directories:
* `public/`
* `src/`

We'll be building this project in the root of your folder.
You can also set up a `images/` folder and a `models/` or other folders like that to read from.

### Configure vite.config.js
To make vite work with our new, simplified structure, set up a `vite.config.js` file as you see here. There's a variable that includes names of any folders (like `images` and `models`) that you'll want to be packaged up in your `dist/` for publication.






