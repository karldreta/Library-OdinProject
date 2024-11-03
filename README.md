# Library: Odin Project

### [See Live Preview here](https://karldreta.github.io/Library-OdinProject/)

## This is an Odin Project: [<u>Library</u>](https://www.theodinproject.com/lessons/node-path-javascript-library)

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
    
    I had feeling this would work. Here's the reasoning behind this approach:

    When the page loads, if the shelves already have books (e.g., `8` books on the top shelf and `6` books on the bottom shelf), I need to set the limits to `4` for the top and `6` for the bottom. This means the existing books are subtracted from the total book space each shelf can accommodate. For example, with `12` spaces per shelf, having `8` books already on the top shelf means there are `4` spaces left for new books.

    If a user removes a book right at the start, the `topShelfSpace` or `bottomShelfSpace` will move into negative numbers. For instance, if `let topShelfSpace` is initially `0` and the user removes a book, `topShelfSpace` will become `-1`. This continues until there are no more books to remove, making `topShelfSpace` equal to `-8`, if all `8` books are removed.

    As users add more books, the count will move back towards zero. So if `topShelfSpace` is `-8` after removing all books, adding one book will make it `-7`, and so on. It will eventually reach zero but will never exceed the limit of `4` for adding new books. This approach ensures that the number of books on each shelf is properly constrained within the set limits, even when starting with pre-existing books.

    Also since the `withdraw` button is on the books the user will not be able to remove a book unless there's a book to begin with. This ensures that the minimum value `topShelfSpace` or `bottomShelfSpace` can have is `-8`.

## Final Thoughts

While the project presented challenges (mostly my fault), it ultimately allowed me to create something truly original. I named it after the **Great Library of Alexandria**, famously destroyed by **Julius Caesar**, to symbolize that even when knowledge is lost, humanity's insatiable thirst for learning and innovation always lives on.


## References:

* [Web Dev Simplified: Dialog](https://blog.webdevsimplified.com/2023-04/html-dialog/)

* [Toggle Checkbox](https://www.youtube.com/watch?v=4y_IoxjOALQ)
