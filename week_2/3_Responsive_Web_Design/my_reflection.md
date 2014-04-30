# U1.W2: Responsive Design Reflection

* What is responsive web design? Do you like it?  Do you think it's a good practice? Why or why not?
* How do you think smartphones and tablets have changed web design? How do you think new technology will change web design in the future?
* How do you think visually impaired people use the web? Can they? Should we design and development for them?
* What ideas and concepts have resonated with you when learning about the web and design? What seems stupid or doesn't make sense?
* Did you find any resources on your own that helped you better understand a topic? If so, please list it.

Reponsive web design is building web sites that can dynamically adapt to different media devices.   You can easily build layouts that would change if you we're using your desktop with a huge display, a laptop with low resolution, a tablet, or a mobile phone.    I think it is great practice.  Since I came from a world where I used to build sites using tables and fixed dimension in pixels, I now have to adjust my thinking to use em measurement and percentages only in layout.   Instead of having to build a specific pixel layout for each screen type, responsive web design will allow me to adjust a css file to adapt to multiple screens.

Smartphone and tablets has greatly changed the web design format.    Computer screens we're pretty uniform.   800x600, 1024x768, 1280x1024, 1920x1080, 2560x1600 was pretty standard for resolutions to go with.   Laptops had a few more odd sizes but with smartphones, tablets, and hdtvs, it is the wild west now.   High density (retina) screens has made screen type enormous also.   So to make a web layout for every single resolution type is possible, but extremely tedious and maintenance will multiply.   Also with super high resolution screens, you might want to use all the available space to provide a better experience.   If the screen is small, you might want a simple layout that isnt spread across the screen with tons of side scrolling.   

Visually impaired people now have to ability to use screen readers to provide voice over so everyone not just visually impaired people can hear the web page content.   We should definitely design for them.  Why exclude people if they can also be potential customers.   

Learning about responsive design is a big eye opener for me. Having your content adapt and adjust to different screen format was something I didn't really think about.  I simply thought that you can build a whole separate layout to accomodate for it using a desktop and a mobile version.   But with so many products blending with each other such as Windows Surface tablet that is a full blown pc that just has a tablet screen, its so important to make sure the site visitors have a good experience using your site.   What doesn't make too much sense to me at the moment is the use of em.   I understand that to convert pixel to em you use the formula Target/Context = Result.   But that still makes me think in pixels not ems and then afterwards I need to convert it.  I guess after a while, I might start thinking in ems only.   

My responsive design page is at http://tleung999.github.io/unit1_projects/class1/completed/responsive.html

Other Resources<br>
Sidenotes - to get the correct font em size from pixel use the following formula.<br>
  Font size in pixel (Target) / Context (16px default) = em size.<br>
  If you need an em size but the tag is nested, the context is the font px size of the parent.<br>
	Example:<br>
    h1   { font-size: 24px; }
    h1 a { font-size: 0.75em; }
    
  Creating Fluid Images<br>
  Example:<br>
    img {
      max-width:100%;
    }
  	img {
  	  max-width:100%;
	  }

  Designing a Fluid Grid Layout<br>
  https://www.youtube.com/watch?v=MBZYJ7QbN_c<br>
  Creating Fluid Images<br>
  https://www.youtube.com/watch?v=_dnM6kIn4A8
