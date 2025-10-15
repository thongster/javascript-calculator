# javascript-calculator
A calculator built with Javascript for the final project for the The Odin Project Foundations course.

This was admittedly difficult for me! Looking at it now, the logic is not that complicated, but it's very easy to get lost in doing it "one way", leading to over-debugging and creating more bugs than you're fixing. 

This is the first project I scrapped the majority of my code and had to rethink the logic altogether. 

I tried really hard not to use excessive if statements. For example, when I first started the calculator I was going to loop through each button with a for.Each loop, but I really wanted to aim towards cleaner code. I remembered a quote (I'm not sure from which course or YouTube video) that said: if you find yourself having to repeat something, you can probably rewrite the code more efficiently - or something to that effect. 

Thats what led me to using 1 button eventListener for all my buttons by applying it to the container, then using a few if statements just to compare the textContent of the html to the functions of the buttons.

One of the hardest parts of the project was to get the equations to work whether you pressed the "equals" button, or just strung together expressions such as 5 + 5 + 5 - 5. 

Overall a good project that really had me banging my head against the wall - until I figure it out it was self-induced and the logic was not actually that complicated.