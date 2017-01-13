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
             },


  printPlaylists: function () {
    for (var eachPlaylist in this.playlists) {
      var access = this.playlists[eachPlaylist];
      console.log(access.id + ": " + access.name + " - " + access.tracks.length + " tracks")
    }
  },


  printTracks: function () {
    for (var eachTrack in this.tracks) {

      var access = this.tracks[eachTrack];

      console.log(access.id + ": " + access.name + " by " + access.artist + " (" + access.album + ")");

    }

  },


  printPlaylist: function (playlistId) {
    var access = this.playlists[playlistId];
    console.log(access.id + ": " + access.name + " - " + access.tracks.length + " tracks");
    for (eachTrack in access.tracks) {
      access2 = access.tracks[eachTrack];
      console.log(access.tracks[eachTrack] + ": " + this.tracks[access2].name
        + " by " + this.tracks[access2].artist + " (" + this.tracks[access2].album + ")");
    }
  },


  addTrackToPlaylist: function (trackId, playlistId) {
    this.playlists[playlistId].tracks.push(this.tracks[trackId].id);
  },

  uid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },



  addTrack: function (name, artist, album) {
    this.tracks["t04"] = {id: "t04", name: name, artist: artist, album: album};
    console.log(this.tracks);
  },


  addPlaylist: function (name) {
    this.playlists["p03"] = {id: "p03", name: name}
    console.log(this.playlists);
  }
}