# Portfolio

## Layout

### Header

&nbsp;&nbsp;&nbsp;Using React-Spring, the text flows left to right with an initial welcome message. This welcome message does not repeat itself like the other "Flying Text" objects. 

### Navbar

&nbsp;&nbsp;&nbsp;Using Bootstrap's navigation presets, I was able to make a mobile-first designed navbar. Within REACT, the nav links will bring the page to separate url/page links that are read through a switch statement using window.location.pagename. This removes the need to include multiple HTML Documents on the hosted site.

### Content

&nbsp;&nbsp;&nbsp;My approach to displaying the content on each page is essentially giving my elevator pitch on my home page, projects, resume, and an about section containing a personal bio.

## Using REACT

&nbsp;&nbsp;&nbsp;This is my first project with React. Given my comparable skills in web development before I learned about it, I was able to really do anything I wanted to with it. The libraries are incredibly vast and everything is configurable if you dig far enough into it. Personally, when I built my components, rather than extending React.Component I used functions as exports to return the pseudo HTML. I have seen that you can do it either way and I simply prefer it this way.

### How to build

&nbsp;&nbsp;&nbsp;Once you have Node installed, you must create a new project using `npx create-react-app 'project-name'` in the command line in your desired directory. This will load a new project with the correct node modules. You may then gut out the demo project files and replace them with the source code in the repo. (Note: You may have to mess with the project name in package.json, the base name is 'portfolio' but your project might have been named differently)