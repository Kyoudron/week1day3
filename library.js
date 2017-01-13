var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}


// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function () {
  for(var playId in library.playlists) {
    var list = library.playlists[playId]
    console.log(playId + ": " + list.name + " - " + list.tracks.length + " tracks ")

  }
}

printPlaylists();

// // // prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
  // console.log(threeTracks)
  for(var theTrackId in library.tracks) {
    // console.log(theTrackId)
  var listTrack = library.tracks[theTrackId]
  console.log(theTrackId + ": " + listTrack.name + " by " + listTrack.artist + " (" + listTrack.album + ")")
  }

}

printTracks();


// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function(playlistId) {;
  var access = library.playlists[playlistId];
  console.log(access.id + ": " + access.name + " - " + access.tracks.length + " tracks.")
  for(var allTracks in access.tracks) {
    var access2 = access.tracks[allTracks];
    console.log(access2 + ": " + library.tracks[access2].name + " by "
      + library.tracks[access2].artist + " (" + library.tracks[access2].album + ")");
  }
}

printPlaylist("p01")



// // adds an existing track to an existing playlist
var addTrackToPlaylist = function (trackId, playlistId) {
    library.playlists[playlistId].tracks.push(library.tracks[trackId].id);
}

addTrackToPlaylist("t01", "p01");


// // generates a unique id
// // (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

// // adds a track to the library
var addTrack = function (name, artist, album) {
  library.tracks["t04"] = {id: "t04", name: "One Dance" , artist: "Drake", album: "Views"};
  console.log(library.tracks);
}

addTrack(uid(), uid(), uid());

// // adds a playlist to the library
var addPlaylist = function (name) {
  library.playlists["p03"] = {id: "p03", name: "One Dance"}
  console.log(library.playlists);
}

addPlaylist(uid());


// // STRETCH:
// // given a query string string, prints a list of tracks
// // where the name, artist or album contains the query string (case insensitive)
// // tip: use "string".search("tri")
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
var printSearchResults = function(query) {

}


