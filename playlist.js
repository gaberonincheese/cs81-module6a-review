//GitHub link: https://github.com/gaberonincheese/cs81-module6a-review

// Constructor function. Uppercase first letter of function to indicate constructor.
// Takes a name parameter when initializing a new Playlist.
function Playlist(name) {
  // "this" refers to the instance of Playlist being created.
  this.name = name;
  this.songs = [];
  this.currentSong = null;
}

// Accesses the prototype of Playlist to add a method for including a song.
Playlist.prototype.addSong = function(songTitle) {
  // Pushing a song to the songs array of the current Playlist instance.
  this.songs.push(songTitle); // "this" refers to the instance of Playlist being accessed. 
};

// Accesses the prototype of Playlist to add a method for playing the first song.
Playlist.prototype.playFirst = function() {
  // Verifies that the array is more than 0 songs before attempting to play the first song.
  // "this" refers to the instance of Playlist being accessed. 
  if (this.songs.length > 0) {
    // The object's currentSong property is set to the first song in the songs array.
    this.currentSong = this.songs[0];
    // Outputs the current song.
    console.log("Now playing:", this.currentSong);
  }
};

// Accesses the prototype of Playlist to add a method for skipping the current song.
Playlist.prototype.skipSong = function() {
    // Verifies that the array is more than 0 songs before attempting to skip the current song.
    // "this" refers to the instance of Playlist being accessed. 
  if (this.songs.length > 1) {
    // Uses the shift() method to remove the first song from the songs array.
    this.songs.shift();
    // Sets the currentSong to the new first song in the array.
    this.currentSong = this.songs[0];
    // Outputs the new current song.
    console.log("Skipped! Now playing:", this.currentSong);
  } else {
    // If there's no songs in the array, outputs a message indicating that there are no more songs to skip.
    console.log("No more songs to skip.");
  }
};

// Accesses the prototype of Playlist to add a method for listing all songs.
Playlist.prototype.listSongs = function() {
  // Outputs the name of the playlist.
  // "this" refers to the instance of Playlist being accessed. 
  console.log("Playlist:", this.name);
  // Outputs the songs in the playlist using the join method to separate songs.
  console.log("Songs:", this.songs.join(", "));
};

// --- ADDED NEW METHODS ---
Playlist.prototype.getCurrentSong = function() {
    return this.currentSong;
}

Playlist.prototype.setCurrentSong = function(songTitle) {
    if (this.songs.includes(songTitle)) {
        this.currentSong = songTitle;
        this.songs.unshift(this.currentSong);
        console.log("You chose a new song! Current song set to: ", this.currentSong);
    } else {
        console.log("You tried to set the song to ", songTitle, "! That song isn't in the playlist!");
    }
}

let myMix = new Playlist("My Chill Mix");
myMix.addSong("Lofi Study");
myMix.addSong("Chillhop Beats");
myMix.addSong("Evening Jazz");
myMix.playFirst();
myMix.skipSong();
myMix.setCurrentSong("Chillhop Beats");
myMix.listSongs();

// --- SUGGESTION FOR IMPROVEMENT ---
// In the skip song function, instead of removing the song from the array,
// the song should be shifted to the back of the array. Otherwise,
// the song is effectively removed from the playlist and needs 
// to be manually re-added.