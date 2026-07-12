What was the hardest part to understand?

I struggled a bit to wrap my head around the syntax for the prototype concept, but I think with more practice I should be able to better understand how it works and how I can best use it in certain situations.

How does this code use "this" to tie data and behavior together?

If I were to make multiple Playlists, "this" allows me to ensure the behavior of the invoked method refers to that instance of the Playlist. In this sense, I am able to reuse behavior for different sets of data.

What would you do differently if you wrote this object from scratch?

Speaking honestly, I'm not familiar enough with JS syntax to know if there's a better way to build the code from the bottom up. When it comes to content, though, I would probably develop a more robust constructor, including more variables when creating an instance of a Playlist, such as a variable for the description. I would also include more methods that allow for internal manipulation of Playlists, like a method for shuffling, or for organizing songs in ways desired by the user (e.g. ordering songs by length, date added, or alphabetical order). I would also ensure songs that are skipped are not removed from the array.  