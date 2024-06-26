# libraryProject-odin
Project: Library from JS path of The Odin Project


## This is an Odin Project: Library

* For now, I am expected to create a Library App, for this I will demonstrate my understanding of:

    * Arrays
    * Objects
    * Object Constructors

* For the moment this project is only a an early draft. I am not yet expected to add any type of storage to save the information, since "I will have the option to come back to this project later on in the course".


## Finish the project

* I let my imagination run wild with this one, and it took me almost a month to complete. It could have taken less time, but my creativity got the best of me (LOL). However, the final result looks exactly how I pictured it, and I learned a lot in the process.

* I have been able to:

    * Experimented with modals: Loved this part!
    * Learned about CSS selectors and JS ones.
    * Have a deeper dive into scoping.
    * Understood `this` in JavaScript
    * Worked with constructors: Not too challenging in this project.

* My favorite parts:

    * Creating the modals with the `<dialog>`.
    * Creating the toggle checkbox (Now I know how those awesome toggle buttons work).
    * The validation too, tho I only salvaged the code from the previous project.
    * Constraining the number of books on the shelves: This was a fun challenge. Here's how I did it:
        ``` 
            let topShelfSpace = 0;
            let bottomShelfSpace = 0;
        ```
        I set a limit of 4 books for the top shelf and 6 books for the bottom shelf. `topShelfSpace < 4` and `bottomShelfSpace < 6 `, then: 
        ``` 
            // Incrementing them respectively for each added book.
            topShelfSpace++; 
            bottomShelfSpace++;

            // And decrementing for each withdraw(remove)
            topShelfSpace--; 
            bottomShelfSpace--;
        ```
    
    I had feeling this would work since if the shelves already had books in them, then I just need to subtract the existing books from the total book space each shelf can accommodate and the result will be the limit. And on removal the numbers will just move down to `0` and into `negative numbers`.

## Final Thoughts

While the project was challenging (mostly my fault), it allowed me to create something original. I named it after the Great Library of Alexandria (which was apparently burned down by Julius Caesar) as a testament that though scrolls may burn, still our hunger for learning lives on.


## References:

* [Web Dev Simplified: Dialog](https://blog.webdevsimplified.com/2023-04/html-dialog/)

* [Toggle Checkbox](https://www.youtube.com/watch?v=4y_IoxjOALQ)