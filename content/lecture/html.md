---
title: HTML
date: 2020-02-10
categories: []
draft: true
description: When developing websites, we use HTML to markup and organize our content.
---

## Introduction

Now that we have built high-fidelity prototypes in Adobe XD, it is time to start making real websites.

## Resources

First, let's discuss the three resources that make up most websites.

- Content
- Styles
- Logic

### Content

Content is the information that your page offers.

- Text
- Images
- Videos
- Hyperlinks
- _much_ more

When thinking back to Adobe XD, you can closely associate the layers panel and canvas as places that manage and define your content.

### Style

Style is the way we present that information. It involves both aesthetics and visual hierarchy.

- Layout
- Font
- Color
- Transform
- _much_ more

When thinking back to Adobe XD, you can closely assocaite the property inspector as a place that manages and defines your style.

### Logic

Logic is the part of a website that "does stuff" besides conveying static content and styles.

- React to user input
- If this then that
- 2 + 2 = ?
- Get data from ...
- _much_ more

We will do more with these kind of scenarios later in the class.

## Languages

There is a language for each of these resources.

- HTML is for our Content
- CSS is for our Style
- JavaScript is for our Logic

For now, we will focus on HTML.

### HTML

Here are some things you should know about HTML.

- HTML stands for Hyper Text Markup Langauge
- Consists of nested _elements_ that contain _content_
- Adds _semantics_ (meaning) to _content_
- Uses the file extension .html

So, what is an element?

- An _element_ is content that is encapsulated by _tags_
- Content can be plain text or more HTML _elements_

So, what is a tag? (last one, I promise)

- A set of characters (letters and symbols) that represent an _element_ type
- A tag always begins with **<** and ends with **>**
- If an element encapsulates content, it has an opening and closing tag
- Closing tags **/** after the **<**

Let's break this down into a real example. We are going to start with some plain text content and make it a paragraph element. We use the paragraph element for regular text in HTML. (i.e. not headings, subheadings, lists, etc.)

Here is the plain text.

```html
Hello, world!
```

Here is an opening tag for the paragraph element.

```html
<p>
```

Here is a closing tag for the paragraph element.

```html
</p>
```

An element consists of content encapsulated by tags. So let's put the opening tag, the plain text content, and the closing tag together.

```html
<p>Hello, world!</p>
```

Now we have a paragraph element!

### Elements

There are alot of elements out there! Here are some super common ones you will be using.

- ```<p>``` (paragraph)
- ```<a>``` (hyperlink)
- ```<h1>...<h6>``` (headings)
- ```<ul>``` (unordered list)
- ```<ol>``` (ordered list)
- ```<li>``` (list item)
- ```<article>``` (article)
- ```<nav>``` (navigation)
- ```<main>``` (main)
- ```<div>``` (generic container)
- ```<input>``` (input)
- ```<button>``` (button)
- ```<img>``` (image)
- ```<video>``` (video)
- _much_ more

Do not feel overwhelmed by the amount of elements available to you. This class does not expect you to develop encyclopedic knowledge. Instead, you should become comfortable refrencing documentation, Googling, and problem solving.

My favorite resource to use is Mozilla's Developer Notes. The reference page groups elements by function.

[MDN Element Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

### Semantics

A big benefit of HTML is the ability to assign meaning to content. This can help a computer better interpret the significance of your content (i.e. Search Engine Optimization) and it can help people who have a disability better navigate your website.

It also helps with styles later on!

Here's a quick example of semantics. I have a grocery list of three items.

- Apples
- Bananas
- Grapes

In HTML, we could write that out using three paragraph elements.

```html
<p>• Apples</p>
<p>• Bananas</p>
<p>• Grapes</p>
<!-- Note, I am literally typing the bullet character -->
```
Visually, this will give us the look we're going for, but it is semantically incorrect.

This structure does not convey that the items are related in anyway, even though they belong to the same list. To fix these, we will use the unordered list element, along with the list item element.

```html
<ul>
  <li>Apples</li>
  <li>Bananas</li>
  <li>Grapes</li>
</ul>
```
This has multiple perks. First, you'll notice that the list items are nested inside of the unordered list. It is clear they are grouped together.

Additionally, I didn't have to manually type out dashes or bullets. This can be handled with CSS or the browser's built-in styling.

There are tons of scenarios / use-cases just like this that will come up when you are completing your assignments and projects. Unsure if you are using best practice? Just Google it!

_"What is the best way to represent an article in HTML?"_

99.99% of the questions you will ask have been asked before, and there is likely a wonderfully crafted answer on Stack Overflow that will help!

### Attributes

We can further customize our HTML elements by using attributes. These are extra bits of information that go in the opening tag of an element. They are made of a name, an equals sign, and a value in quotations.

Let's look at element that needs an attribute to work properly, the anchor element (also called the "a" tag). The anchor element defines a hyperlink. In other words, it takes some text and makes it so you can click it and go to another page.

That means it needs two things.

- The text that is clickable
- The URL to the next page

Here is the element without the attribute.

```html
<a>Visit MEJO 187's Website</a>
```

We are going to add an attribute called _href_ to the opening tag of the anchor element. The value will be the URL to the page.

```html
<a href="https://mejo187.com">Visit MEJO 187's Website</a>
```

How did I know to use that attribute name? Simple, I read the documentation.

[Read the Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)

The image element is another common element that requires two attributes.

- The URL to the image
- Some alternative text that describes the image

```html
<img src="./images/space.jpg" alt="The Milky Way Galaxy"/>

<!-- The ./ basically says start from my current directory -->
<!-- The alt attribute helps when the image cannot be displayed -->
```

## Conslusion

I hope this lecture was a quick crash course on what HTML is and why we use it. Stay tuned for a lecture on project architecture and a demo!

If you want to learn more or do more review, I highly recommend this guide from Mozilla Developer Notes.

[HTML Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)