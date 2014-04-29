# U1.W2: Chrome Dev Tools Challenge Reflection

* Describe the Document Object Model? What about it makes sense to you? What doesn't? What seems good and bad about it?
* How did using Chrome Web Tools to look at your site and a wordpress.com site compare?
* Did you find Chrome Web Tools fun, helpful, or a pain to work with?
* Did you have an "aha" moments or were any concepts solidified?
* Did you find any resources on your own that helped you better understand a topic? If so, please list it.

DOM (Document Object Model) is a programming interface for HTML and XML documents. It provides a structured representation of the document and it defines a way that the structure can be accessed from programs so that they can change the document structure, style and content.  It basically enables us to create fun, interactive, and dynamic websites.   It makes sense to me since each HTML element is an object within the document. You can tree down the document to trigger events, adjust properties, or call methods.  What seems questionable is if all the browser creators such as IE, Firefox, Chrome support all the DOM calls.  From what I read online is that it has gotten a lot better from when it was first created.   

Comparing my site (tleung999.github.io) vs a wordpress site (http://snoringdogstudio.wordpress.com/).   The wordpress site has a ton of javascript and since we havent touch js yet, I have none.    Also I notice that in wordpress, some of their classes are really long.  Example "class="home blog logged-in admin-bar no-customize-support custom-background mp6 typekit-enabled highlander-enabled highlander-light custom-colors infinite-scroll neverending"".   The wordpress site is pretty beefy, its about 2.8MB and took 5.39 seconds to load.   My site is 851KB and took 377ms to load.   Lastly I noticed that the wordpress site has some of the js files load async to speed up the initial load of the page and let the js file finish later.

I found the web tools fun and very helpful.   I used the javacript console before to console.log() for debugging.   But I never knew I could change HTML and CSS elements in the Dev Tool.   This will save me a ton of time because I was changing things locally and using git to upload my changes over and over to see if my changes were correct.    Now I can just change it in Dev Tool and save the changes locally, and then upload back up to the repository using git.  
My aha moment was being able to change CSS values on the fly and seeing it automatically changing on the screen.   

