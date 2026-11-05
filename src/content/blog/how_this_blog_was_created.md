---
title: 'How this blog was created (Not a tutorial)'
date: '2023-08-12'
---

A lot of blood, sweat and tears.

Nah, just kidding.

I used Next.js, the kickass React framework.

## Why would you use a framework of a framework?!
This is the question I had, as I stared blankly at the Next.js landing page. I was looking for the 'right' tool to build my little blog and here I was.
A button labelled [`Learn Next.js`](https://nextjs.org/learn/foundations/about-nextjs?utm_source=next-site&utm_medium=homepage-cta&utm_campaign=home) led me to some articles for getting up to speed with the basics:
 - [Foundations of Next.js](https://nextjs.org/learn/foundations/about-nextjs),
 - [Create your first app](https://nextjs.org/learn/basics/create-nextjs-app)
 and more.

[**I'm a creator at heart**](https://www.melroynoronha.online/).
So I skimmed quickly through the article on [`Foundations of Next.js`](https://nextjs.org/learn/foundations/about-nextjs) and jumped right into the exciting stuff:

[`Create your first app ✨`](https://nextjs.org/learn/basics/create-nextjs-app)

## Yup, Next.js is solid!
The tutorial begins by going through setup instructions, which for me was as simple as running this in my terminal:

`npx create-next-app@latest project-name`.

As I progressed through the tutorial I was introduced to the following concepts and features of Next.js:
- Next.js pages. Every route in a Next.js app is mapped to a page component. What's great about the Next.js `pages` system is that the app's routing is mapped to it's directory structure. So if I want to add a new page to my app, all I have to do is create a `blog` directory with an `index.tsx` component and Next.js will automatically create a `www.mydomain.com/blog` route. The `index.tsx` component under the `blog` directory will now be rendered when we visit the `/blog` route. To implement the same using plain old React.js I would have had to install and set up some kind of routing library like [`react-router`](https://reactrouter.com/en/main).
- Navigating between pages using the `Link` component, which works exactly like the HTML `<a/>` tag, but has the added benefit of client-side navigation. So navigating within the same Next.js app does not re-render the entire page but only the parts that are different between the pages.
Also the code for the linked page is automatically prefetched in the background. This results in a smoother navigation experience within the app. Sweet!
- Another sweet feature that Next.js has is API routes. This allows you to define routes that don't render a page but instead return some data, just like a REST API endpoint would. Simply epic!

At this point I was already sold on Next.js, and what had me even more excited was the fact that most of the code used to create the app in the tutorial could be reused to create my little blog.

## This blog is born
Building out the simple blog site from the tutorial gave me enough confidence to start implementing my own blog using Next.js. That's the beauty of tutorials that walk you through new concepts as you're building a little project.

I needed two pages:
1. A `/blog` page that lists out the links to all the posts that have been published.
To implement this I had to create a `blog` directory along with an `index.tsx` component which would be rendered when the user visits [www.melroynoronha.online/blog](https://www.melroynoronha.online/blog/hello_world).

2. A page to show the blog that the user clicked on.
To implement this I had to create a [dynamic route](https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes). This dynamic route would be something like `/blog/[id]` where `id` would be the name of the markdown file that contains the full contents of the blog post. I created the `pages/blog/[id]` directory, which is one way of creating dynamic routes in a Next.js app. The `index.tsx` component under a dynamic route receives the URL params as a prop, in our case that would be `id`. This `id` could then be used to fetch the contents of the blog from a markdown file and render them on the page.

To make these pages functional, I was able to copy over most of the logic from the tutorial app and implement functions that do the following:
- Create the IDs from the filenames of all the markdown files in the `blogs` directory. Use these IDs to generate links like `/blog/hello_world`, `/blog/another_blog_post` etc. and return all the links as data for the blog's index.
- Return the contents of the markdown file using the ID. This enabled the page rendered by the dynamic route `/blog/[id]` to fetch and display the full contents of the blog that the user clicked on, at the `/blog` route.

You can delve deeper into the source code to see exactly how this is implemented. [Here's the public repo](https://github.com/MelroyNoronha/my-website/).

To test out that things are working as intended, I created a `hello_world.md` file under the `blogs` directory. I added some content for the blog and visited the `/blog` route. And there it was. A shiny new link to the [`Hello World`](https://www.melroynoronha.online/blog/hello_world) blog post. I clicked on the link and was able to see the title, the date and the full contents from the source markdown file, rendered beautifully on the next page.

A few more styling tweaks and a bit of code formatting, to keep things neat and clean and I was ready to ship it. 🚀

I deployed the app using [Vercel](https://vercel.com/), which makes Next.js app deployment super easy.

And that's the story of how this blog was born.

![](https://github.com/MelroyNoronha/my-website/assets/16273203/373892d9-7b48-4b21-9728-deb7cd4567d6)
