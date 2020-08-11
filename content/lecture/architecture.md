---
title: Architecture
date: 2020-02-12
categories: []
draft: true
description: Simple websites consist of files and folders.
---

## Introduction

An important part of web development is keeping things organized. Here we will talk about URLs, folders, and naming conventions.

## URLs

This is an oversimplified view of how URLs work, but it is appropriate for our class.

URL stands for Uniform Resource Locator. It is just a standard way to tell your browser where to go to grab a file so it can display it for you.

Let's look at this URL from this site.

```
https://mejo187.com/lecture/index.html
```

This is the protocol.

```html
https
```

This is the domain name.

```html
www.mejo187.com
```
This is the path.

```html
/lecture/index.html
```

The path exposes the literal folder structure of this website. I made a folder called _lecture_ and put a file called _index.html_ inside of it. You can effectively have as many subfolders as you'd like. (folders inside folders)

If you would like a more thorough explanation, check out this article.

[MDN What is a URL?](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL)

## Folders

You should use folders to organize your websites. Here are some things you should make a folder for.

- The website itself (i.e. the root folder)
- Any inside pages
- Images
- Videos
- Styles
- Scripts

The home page of your website should go in the root folder. Remember, when we say "root" we basically mean something at the top level – much like how the ```<html>``` element is the root element of an HTML document.

Any inside pages should go into their own folders. You should name those folders according to how you want them to appear in the URL.

For example, if I wanted a contact page on this site, I would make a folder called _contact_ and then put an HTML file inside of it called _index.html_.

The URL to that page would be:

```html
https://www.mejo187.com/contact/index.html
```

## Names

The way you name your files is important. You will need to reference those file names when you:

- Link to a page
- Reference an image or video
- Reference a style or script
- ...

If your naming is all over the place, you might type it differently somewhere else. That will lead to broken pages and frustration.

So, here are a couple of rules that you should abide by to make things easier.

### HTML

Every HTML file you create in this class should be named _index.html_.

Why?

By default, most web server software will look for an _index.html_ if a file type is not specified in the request URL.

If we follow this design pattern, we can have prettier URLs. Instead of having this:

```html
https://www.mejo187.com/contact/index.html
```

We can just do this:

```html
https://www.mejo187.com/contact/
```

Because the server defaults to index.html for us.

When using this pattern, the name of your page that appears in the URL actually corresponds with the folder containing the HTML file, not the HTML file itself.


### Kebab Case

This is a notation that makes all characters in a name lowercase and replaces all spaces with hyphens. So something like this:

**iT WoRks On mY CoMPuTeR**

is instead written like this:

**it-works-on-my-computer**

This results in clean, human-readible URLs. We want this for our URLs, because it makes them easy to type in, remember, and understand.

Every stylesheet, script, image, video, and folder should be named using kebab case.

## Conclusion

After this lecture, you should have some best practices that will guide the way you set up your websites. Incorporating these rules will not only save you time and frustration, but they will earn you easy points on your next project!