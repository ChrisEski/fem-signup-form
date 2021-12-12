# Frontend Mentor - Intro component with sign up form solution

![Design preview for the Intro component with sign up form coding challenge](./design/desktop-preview.jpg)

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_

### Screenshots

![Desktop Layout](./screenshots/screenshot-desktop.png)
![Desktop - Error Layout](./screenshots/screenshot-error.png)
![Mobile Layout](./screenshots/screenshot-mobile.png)

### Links

- Solution URL: [GitHub](https://github.com/ChrisEski/fem-signup-form)
- Live Site URL: [https://fem-signup-form.netlify.app/](https://fem-signup-form.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- SASS
- Flexbox
- Mobile-first workflow

### What I learned

During this challenged I learned how to create custom client-side form validation, as well as implementing and using the `data-` attribute in the HTML elements.

This way I did not have to rely on classes to apply the styles for the error states, and I believe it makes the code clearer for other devs and future debugging.

### Useful resources

- [JAVASCRIPT FORM VALIDATION AND SUBMIT TO ANOTHER PAGE](https://www.youtube.com/watch?v=ap2ntgOb-Hg) - This YoutTube video from **DANIEL CODE LAB** was really helpful as for the approach on form validation.
  But I decided to take it one step further, so I avoiding using classes for the error states, but instead i practiced on `data-` attributes. Also I modified the JavaScript part in order to adjust it to my own HTML structure.

## Author

- Frontend Mentor - [ChrisEski](https://www.frontendmentor.io/profile/ChrisEski)
- Twitter - [ChrisEski91](https://twitter.com/ChrisEski91)
