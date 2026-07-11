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
  if (this.songs.length > 0) {
    // The object's currentSong property is set to the first song in the songs array.
    this.currentSong = this.songs[0];
    // Outputs the current song.
    console.log("Now playing:", this.currentSong);
  }
};

Playlist.prototype.skipSong = function() {
  if (this.songs.length > 1) {
    this.songs.shift();
    this.currentSong = this.songs[0];
    console.log("Skipped! Now playing:", this.currentSong);
  } else {
    console.log("No more songs to skip.");
  }
};

Playlist.prototype.listSongs = function() {
  console.log("Playlist:", this.name);
  console.log("Songs:", this.songs.join(", "));
};


let myMix = new Playlist("My Chill Mix");
myMix.addSong("Lofi Study");
myMix.addSong("Chillhop Beats");
myMix.addSong("Evening Jazz");
myMix.playFirst();
myMix.skipSong();
myMix.listSongs();