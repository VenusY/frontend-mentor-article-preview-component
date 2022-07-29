# frontend-mentor-article-preview-component
Solution to the Frontend Mentor article preview component challenge using semantic HTML and SCSS.

## My process

Built with:
- Semantic HTML5 markup
- SCSS
- CSS custom properties
- Flexbox
- Mobile-first workflow

The card was centered on the page using flexbox by setting the height of the <main> tag to 100vh, then setting both justify-content and align-items to 'center'. The layout of the card on desktop was also created using flexbox, as was the author section at the bottom of the text section.

## What I learned

- You can remove unwanted whitespace from an anchor tag by setting the font size to 0.
- Transitions don't work with elements that have a display property. If you want an element to be hidden so that it's links and buttons are unclickable, but still want to use transitions on it, you need to use 'visiblity: hidden;' instead of 'display: none;'.
- Transitions with the visibility property don't work the same way as other properties. Instead of the visibility changing over the amount of time specified in the transition, the amount of time actually indicates the delay before the visibility effect takes place.

## Useful resources

- [How to draw triangles in CSS](https://alvaromontoro.com/blog/67970/drawing-a-triangle-with-css) - This helped me create the triangle on the share section for the desktop version of the webpage.
