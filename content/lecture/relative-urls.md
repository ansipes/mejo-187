---
title: Relative URLs
date: 2020-02-14
categories: []
draft: false
description: How to write URLs without using the domain or protocol.
---

## Introduction

When you are linking to resources inside your own website, you do not need to use the protocol or domain name in your URL. You can use something called relative URLs instead.

To keep things simple, I am going to advocate for a certain style of relative URL, one that is relative the current folder.

## Current Folder

In a relative URL, the way we convey the current folder is by using this:

```html
./
```

The ./ just means "start from the folder I am currently in."

Any path that you put after it will dig further into that current folder.

So, if I was looking at the home page of my site:

```html
https://www.mejo.com/
```

And I referenced an image like this:

```html
<img src="./images/space.jpg" alt="The Milky Way Galaxy"/>
```

The relative URL:

```html
./images/space.jpg
```

Is basically saying:

```html
https://www.mejo.com/ + images/space.jpg
```

Which gives us this:

```html
https://www.mejo.com/images/space.jpg
```

So you can think of the ./ as a method to add your relative URL to whatever the current URL is.


## Previous Folder

In a relative URL, we can also go back to higher level folders like this:

```html
../
```

Similar to how the ./ adds our URL fragments together, the ../ does the same, but it takes us up one folder level.

Here's an example. I have an inside page:

```html
https://mejo187.com/my-inside-page/
```

It needs to reference this file using a relative link:

```html
https://mejo187.com/images/space.jpg
```

The folder _my-inside-page_ and the folder _images_ are on the same level, so I need to jump up a level to relatively reference the file. This is what that looks like:

```html
<img src="../images/space.jpg" alt="The Milky Way Galaxy"/>
```

The relative URL:

```html
./../images/space.jpg
```

Is basically saying:

```html
https://www.mejo.com/my-inside-page + images/space.jpg
remove from the path ^^^^^^^^^^^^^^
```

Which gives us this:

```html
https://www.mejo.com/images/space.jpg
```

## Why

Sometimes you will need to move folders up or down a level in a site. If you were to use absolute URLs would have to go and redo all of them. With relative URLs we can save time.

This is especially important to us for when we publish our exercises on our personal websites.

When we are working on our exercises locally, we are treating the exercise like it is the root.

```html
http://127.0.0.1:5500/
```

But when we publish it to our actual personal website, it will be under something like:

```html
https://mywebsite.com/exercises/introduction-to-html/
```

Relative URLs make that process a breeze.

## Conclusion

After this quick lecture, you should have an understanding of why we want to use relative URLs when possible. It will take practice to get right! Check out this quick demo if you would like extra help.

[How to Use Relative Links](/demo/how-to-use-relative-links/)