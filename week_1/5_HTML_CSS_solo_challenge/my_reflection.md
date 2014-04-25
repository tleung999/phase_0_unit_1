## 5. [HTML/CSS Solo Challenge](5_HTML_CSS_solo_challenge/readme.md) Reflection

* What questions did you ask during this challnge? What resources did you find to help you answer them?  
* What concepts are you having trouble with, or did you just figure something out? If so, what?  
* Did you learn any new skills or tricks?
* How confident are you with each of the Learning Competencies for this challenge? 
* Which parts of the challenge did you enjoy?
* Which parts of the challenge did you find tedious?

One big question I had was when to use an ID vs a Class.  When using Sublime Text 2, I noticed that in my editor it was throwing warning messages stating "Don't use ID in Selectors".   Sublime doesnt not explain why, but my css code works perfectly fine.   From my understanding it seems that you use an ID if you are only going to see one instance of it.  Use class if you are going to manipulate multiple elements.   On my webpage, I was only using IDs to change the header, footer, sidebar, content, and sub-content.   And since they are all unique in their positioning, and style, I decided an ID is best for them.   But the warning message in Sublime was bothering me so I really wanted to make sure I'm not doing something wrong.   

Site I read for more information on ID vs Class

http://css-tricks.com/the-difference-between-id-and-class/

http://stackoverflow.com/questions/12889362/difference-between-id-and-class-in-css-and-when-to-use-it

In CSS it took me some time to figure out how to apply styles to only certain childs and siblings.   Like for example when I wanted to only adjust the first and last child element in my unordered list in the sub-content section and not affect the unordered list in the navbar. I ended up treeing down from "#sub-content ul li:first-child" and "#sub-content ul li: last-child".  
I also learned that my footer kept interfering with the floating elements until I set clear: left to the footer.    

I felt pretty confident with each of the learning competencies, the HTML was pretty easy.  But the CSS got a little more tricky the more HTML tags I built.   Especially when you want to only manipulate a specific tag thats a child and not affect any parent tags.    

I really enjoyed learning about the different CSS properties and the values you can assign to them.    

It was a little tedious to have to specify the CSS properties for each id.    But I wanted each container to have a custom size, borders, and color.   

I also wanted to note that I was going to put all the internal CSS properties into the css file, but all the internal CSS properties we're part of the HTML experiment.  All the CSS properties in the css file was created based on the CSS experiment.   Which was why it was spread out.  I definitely prefer using an external CSS file only to keep all pages uniform in look and layout.   
