const Playlist = require('../model/Playlist');

class PlaylistController {

    static showPlaylist() {
        Playlist.showPlaylist();
    }

    static addSong(params) {
        Playlist.addSong(params);
    }

    static removeSong(params) {
        Playlist.removeSong(params);
    }

    static makeSong(params) {
        Playlist.makeSong(params);
    }
}

module.exports = PlaylistController;