---
title: Project III
date: 2021-04-08
categories: []
draft: false
description: The project will be a single-page web app that implements multiple interactive features and of a topic of your choosing.
---

## Introduction

For your final project, you will be telling a story in the form of an interactive dashboard. The project will be a single-page web app that features multiple interactive/dynamic features. Here are some random examples:

- Any kind of dynamic content that get from an API and render to the page
- Little cards that can expand and collapse to show more info
- Date visualization using something like Googe Charts or Flourish
- An advanced carousel that features more content / animation
- Something like the little bee story (see examples)
- Animations or effects that occur when content is scrolled into view
- A recipe ingredient checklist
- An interactive map
- An interactive image plus markers (like on instagram or wayfair)
- An interactive timeline*

*This is a decent choice, especially for chronological content. But my goodness, it has been used so much. If you want to do this, make sure to make it your own, and not just copy the timeline from w3schools. While timelines can be effective story telling devices, there are so many other widgets/features that will also be valuable and fun for you.

The project will tie together all of the skills you have learned in this class, including visual design, information architecture, branding, HTML, CSS, and JavaScript.

It should be aesthetic, compelling, and user-friendly. The app should be a true “dashboard”. That is, it should have minimal text on the screen, other than the title and a brief introduction, and it must entice the user to explore and read the story by interacting with the various visual elements on the page.

## The Story

You may choose any topic you wish, within reason.

The story must lend itself to an interactive treatment and data visualization. The best topics for this project will be ones that can be naturally segmented into a sequence of individual items, such as years, people, places, etc., and have available data/content from which you can build a visualization.

I'd like you to submit your topic on Sakai by next Thursday.

Following is a short list of sources for reliable data sets. These are good starting points, but there are many others, so start exploring.

- [The Milne Library of Open Data Sets](http://libguides.geneseo.edu/data)
- [Data.gov](https://www.data.gov/)
- [U.S. Census Bureau](https://www.census.gov/data.html)
- [MEAD (Magazine of Early American Datasets)](https://repository.upenn.edu/mead/)
- [Pew Research Center](http://www.pewinternet.org/datasets/)

## The Interactive(s)

This will be the heart of your project; it’s where you will tell the story. As mentioned earlier, the content should be revealed primarily through interactive elements. It should not be a static article complimented by an interactive graphic; rather, it should be the reverse: the text content and/or other assets should be revealed in sections as the user explores the interactive.

You could do single large interactive (like a gallery or timeline that is pretty slick) or you could do maybe more of a traditional article with several interactive elements spread throughout.

You probably want to check in with me to see if what you have is "enough", but these are the things I'd love to see, JavaScript-wise:

- Do your own custom things with the "class toggling" pattern we've used over and over
- Event listeners with events other than "click"
- User-generated data (i.e. have inputs on your page that add to the content displayed)
- Dynamically build HTML and appened it to the page (i.e. take an array of basketball players and turn it into a list on the page)

## The Layout

The app must be responsive, using the CSS methods we've discussed. Please consider this when planning your interactive graphic; it must look good on both desktop and mobile. This may require using a different layout for your interactive in different viewports. I will pay attention to your responsive code (or lack thereof) when assessing the design.

All of the content in the interactive dashboard should be available to the user without going to a new page. You will have links to your outside sources, of course, but the list of sources should not be put in a separate HTML page; it should appear in a lightbox or other modal window when the user clicks on the “Sources” object. I think the slickest way of doing this would be an accordion at the very bottom - click "Sources" and the footer expands just a tad more to reveal your sources.

Following is the list of required items in this project app:

1. Story title
2. Short introduction
3. Main interactive graphic (or a handful of smaller ones) built with pure JavaScript
4. Data visualization (could be a simple chart, or you could all out with Flourish)
5. An expandable element for your Sources (modal or accordion is fine)

## Grading

Following is a general breakdown, so you can plan accordingly:

### Functionality

The app must meet all of the requirements, and all of the interactive elements must work, without glitches. Your code should be clean, efficient, commented, and complete (no missing meta tags or alt tags on images, etc.). The app’s responsiveness should be handled primarily through Grid and/or Flex, with adjustments on individual elements, if necessary. Your code should incorporate the best practices we’ve discussed in class.

### Design

Your design should look great on mobile and desktop; but remember, usability is paramount, especially with interactive features. According to Apple’s Human Interface Guidelines, the target area for touch events should be at least 44 pixels wide by 44 pixels tall. The layout should be aesthetically pleasing and intuitive. It should fit with the style established in your portfolio. You should demonstrate your understanding of design principles (CCS and CRAP).

### Content

Your story should be accurate, compelling, and well-researched. You should provide sources for all data. The content should be free of grammatical and typographical errors.

## Rubric

### Wireframe and Prototype (5pts)

Site was first wireframe and prototyped in XD.

### Functionality (25pts)

The app must meet all of the requirements, and all of the interactive elements must work, without glitches. Your code should be clean, efficient, commented, and complete (no missing meta tags or alt tags on images, etc.). The app’s responsiveness should be handled primarily through Grid and/or Flex, with adjustments on individual elements, if necessary. Your code should incorporate the best practices we’ve discussed in class.

### Efficiency and Organization (10pts)

HTML and CSS files are clean and smooth behind the scenes. That means structure is logical; notes used when necessary; tags and classes used appropriately. There is a reasonable commit history in the GitHub repo. The commits have descriptive messages, i.e. not "Did project 2."

Here are some examples of good commits:

- "Stubbed out project files."
- "Added global navigation."
- "Added text content."
- "Finalized mobile home page."
- etc

### Aesthetics (10pts)

Design choices consistent, professional and effective.

### Responsive Design (10pts)

Website looks proper on iPhone X and on Desktop at 1280px wide.

### A11y (Accessibility) (10pts)

Semantic elements are used where appropriate. Proper headings are used to split different sections. All anchor elements have titles. All image elements have alt attributes. All text is easy to read and meets recommended contrast levels.

### Above and Beyond (20pts)

You can also call this Innovation and Creativity. It just means doing more than what is explicitly outlined to futher develop your development and research skills. It gives you a bit of freedom to make the project your own.

### Explain (10pts)

While you do not have to present your project to the class, you will meet with me one-on-one and walk me through your code. This will be an opportunity to explain some decisions you made and to demonstrate your skills in HTML/CSS/JavaScript. Being able to speak knowledgably about these topics is an important goal for the class!

This means that you should not copy/paste JavaScript or layouts that you don't understand. Whatever you use on your page, be prepared to speak on it.

Here's a tip: if you comment your code extensively and make sure you use a formatter like Prettier, it will make this code review session much easier. With enough comments, it is basically open note; just read me your explanations!

## Examples

Here are some examples of work from previous semesters. These are not flawless, and their designs should not, necessarily, be emulated. Your own story should inform your own design. Blatantly copying any of this stuff is a big no no.

- http://dominiquejabbour.com/project4/
- http://coemacfarlane.com/project-4/
- http://madelinekraft.com/mejo187_project4/
- http://nataliemcaleer.com/project-4/
