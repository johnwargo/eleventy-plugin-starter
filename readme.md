# Eleventy Plugin Starter (JavaScript)

When I first started trying to figure out how to write my own Eleventy plugin, many of the articles showed how to do it, but never showed a complete project. For me, to truly understand what I had to deliver in my plugin, I had to know what the project structure looked like. Once I had that, the rest of the work was just writing the JavaScript code for the plugin. 

This repository contains a complete Eleventy plugin as well as a complete Eleventy site that exercises the plugin. With this approach, you done have to maintain an external Eleventy project to test the plugin as you work, you can code and test the plugin in the same place.

To make this project more useful to you, it includes several Eleventy capabilities through the plugin:

* An Eleventy `randomNumbers` collection that returns a list of 10 random numbers.
* An Eleventy `hello` shortcode that takes a name variable and returns the standard "hello, Name" you see in many examples
* Two Eleventy filters, one that generates dynamic HTML based in input values and another that reformats content using default and configurable options.

The repository also includes an Eleventy site that exercises the plugin capabilities on the site's home page (shown below).

Take a look at the repository's `src/index.md` file to see the source for the home page.

To launch the site, open a terminal window or command prompt to the project folder and execute the following commands:

```shell
npm install
npm start
```

This installs the required modules then builds the site:

```text
> eleventy-plugin-starter-template@0.0.1 start
> eleventy --serve

[11ty] Writing _site/index.html from ./src/index.md (liquid)
[11ty] Copied 3 files / Wrote 1 file in 0.10 seconds (v2.0.1)
[11ty] Watching…
[11ty] Server at http://localhost:8080/
```

Open the link listed in the build output to launch the generated site.

![Eleventy Site Home Page](home.png)