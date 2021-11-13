# 🏄 Lifestyle

>some css classes

## Install

Donwload style folder
```
npx github-download-directory c4co/lifestyle styles
```

Add data-theme attribute on <html> tag.
```html
<html data-theme="light"> ... </html>
```

## Theme Structure
```css
[data-theme="theme-name"]{
  /* css variables */
}
```

## Elements

#### 🟢 • Buttons
```css
/* base */
.button

/* loading */
.button--loading

/* outline */
.button--outline

/* size */
.button--big
.button--small
.button--full

/* borders */
.button--rounded
```

#### 🟢 • Forms
```css
/* forms */
.form
.fieldset
.legend

/*inputs*/
.label
.input
.input--error
.input--success

/* select */
.select

/* textarea */
.textarea

/* message */
.input__message
.input__message--error
```

Checkbox and radio
```html
<!-- checkbox -->
<div class='checkbox'>
  <input id='first-check' type='checkbox' />
  <label htmlFor='first-check'> First </label>
</div>

<!-- radio -->
<div class='radio'>
  <input id='second-radio' type='radio' name='group' />
  <label htmlFor='second-radio'> Second button </label>
</div>
```

Inputs
```html
<div>
  <label class="label"> Label </label>
  <input type="text" class="input" placeholder="Placeholder" />
  <span class="input__message">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  </span>
</div>
```

#### 🟢 • Grid
```css
.row
.col
```

#### 🟢 • Types
```css
.text

/* size */
.text--small
.text--mid
.text--big

/* align */
.text--center
.text--start
.text--end
.text--left

.text--right

/* transform */
.text--uppercase
.text--lowercase
.text--capitalize

/* weight */
.text--bold
.text--normal

/* links */
.link

/* titles */
.title
.title--mid

/* colors */
.text--primary
.text--success
.text--danger
```

---

MIT © [C4co](https://github.com/C4co)
