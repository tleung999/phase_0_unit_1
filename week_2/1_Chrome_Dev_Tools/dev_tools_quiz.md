#### Include an inline screenshot of your codeschool's points from the profile page:
![tleung Codeschool](http://tleung999.github.io/unit1_projects/images/tleungcodeschool.png)

<!-- Modify the Markdown to include your answers. Don't delete the questions! -->

##QUIZ
* Explain which tabs support the following actions and how.
  * Realtime editing of HTML and CSS  - The "Elements" tab will allow you to edit the HTML and CSS in real time.   You can double click on attibutes, right click on the element to edit attributes, add attributes, and edit HTML.  You can also drag and drop the element above or below another element.

  * Javascript Debugging - The "Console" is your primary spot to debug Javascript.  You can use console.log(), document.getElementID(), $0, $("#ID"), and even call up functions to get their results.   

  * Performance Optimization - The "Network" tab is your spot to view performance optimization.   The tab will display the page load times in ms.  It will show the file name, the status if there is a 404 error for example, the type of file, the initiator of the file that called up the asset, the size of the content, and a timeline on when the asset was loaded up and when it finished on the waterfall.   Also each type of file has a different color.   Purple = images, Blue = html, Green = CSS, Yellow = javascript.

* What's the quick key for your OS to spawn the Dev Tools inspector?  <p>I usually use the Javascript console which takes me to the same place.   The command for the Javascript console is Command + Option + J.  The Developer Tool console is Command + Option + I.  </p>

* Go to http://www.postmachina.com/ and analyze and tweak this nicely designed page.
  * What is the current background color for the page?  (Surprisingly, it's not just black!) 
  <p>The background color of the page is #0b0f11</p>

  * Tweak the background color to white.
  <p>Changed to the following:
  "html, body {
    color: #afafaf;
    background-color: #FFFFFF;
  }"
  <p>
  * Tweak the height of the side bar that contains the logo.  Shrink it down to 85px.
  <p>Changed to the following:
  "#sidebar a#logo {
    width: 244px;
    height: 85px;
    display: block;
    text-indent: -9999px;
    background: url(../images/logo.gif) no-repeat 0 0;
    margin-bottom: 53px;
  }" </p>

  * Roll over the navigation links.  When you hover over them, they dissapear.  Let's change the hover color to black instead.
  <p>Changed to the following:
  "#sidebar ul#navigation li a:hover {
    color: #000;
  }"</p>

  * Now take a screenshot of your new (and maybe not so improved) design.  It should match this screenshot: http://postimg.org/image/5ak1jkpl5/
  <p>To makde a screenshot of just the window use Command + Shift + 4.  Then press space bar, and click on screen.   </p>

  * Upload your own image to the web using an image hosting service.  It should match the image above. The last nav link in the image above is black because the mouse was hovering there when the screenshot was taken. Do the same, and don't take a screenshot of your whole desktop, just the browser window. (This is part of the challenge.)
  ![Site Tweak](http://tleung999.github.io/unit1_projects/images/devtoolsitetweak.png)

* For the postmachina website, why can't you tweak the color of the text "The most important things are not things"?  Please explain.<p>
You can't tweak the color of the text or even delete the text because the p tag inside the main div is using a background image that is located at /images/home_bg.gif.  The background image is called using CSS using the selector "#home #main p".   </p>

* Go to www.ticketswizard.com and analyze the page.  
  * What is the largest image on the website? 
  <p>Largest image is 316kb </p>

  * Explain how you would find out this information, and list the URL of offending image here and how big it is.
  <p>To find this information, simply use Dev Tools and click on the network tab.   Once you load up the network tab, click on the Size and sort by decending order.   Your biggest file will be up top.   Finally find the biggest file that is purple which is an image.    The URL of the image is http://www.ticketswizard.com/Images/Catalog/92624182-c482-4a35-8da2-4fbf2f502e94_Large_Large.png</p>

* Test the www.ticketswizard.com website with google's [PageSpeed Insights](http://www.ticketswizard.com/).  (You can also download the chrome plugin).  What is the lowest hanging fruit to optimize the website?  How many kilobytes of data can be eliminated?  <p>
Assuming that the lowest hanging fruit means the Highest priority item, Minimize payload by optimizing the images. Optimize the following images to reduce their size by 885.9KiB (39% reduction).</p>