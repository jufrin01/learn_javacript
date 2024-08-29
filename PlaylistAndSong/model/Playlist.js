const fs = require('fs');
const { Pop, Rock } = require('./Song');

class Playlist {
    constructor(id, name, songs) {
        this.id = id;
        this.name = name;
        this.songs = songs || [];
    }

    static getPlaylist() {
        try {
            const data = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
            const playlists = data.map(playlist => {
                let { id, name, songs } = playlist;
                songs = songs.map(song => {
                    let { id, name, duration, genre } = song;
                    if (genre === 'Pop') {
                        return new Pop(id, name, duration);
                    } else if (genre === 'Rock') {
                        return new Rock(id, name, duration);
                    }
                });
                return new Playlist(id, name, songs);
            });
            return playlists;
        } catch (error) {
            console.error('Error reading playlist:', error);
            return [];
        }
    }

    static addSong(params) {
        try {
            const playlists = this.getPlaylist();
            const [name, duration, genre, playlistName] = params;
            let songAdded = false;

            playlists.forEach(playlist => {
                if (playlist.name === playlistName) {
                    let id = playlist.songs.length > 0 ? playlist.songs[playlist.songs.length - 1].id + 1 : 1;
                    if (genre === 'Pop') {
                        playlist.songs.push(new Pop(id, name, +duration));
                        songAdded = true;
                    } else if (genre === 'Rock') {
                        playlist.songs.push(new Rock(id, name, +duration));
                        songAdded = true;
                    }
                }
            });

            if (songAdded) {
                this.savePlaylist(playlists);
                console.log(`${name} added to ${playlistName} playlist successfully.`);
            } else {
                console.log(`Failed to add song. Playlist "${playlistName}" not found or invalid genre.`);
            }
        } catch (error) {
            console.error('Error adding song:', error);
        }
    }

    static showPlaylist() {
        let data = this.getPlaylist();
        console.log(JSON.stringify(data, null, 3));
    }

    static removeSong(params) {
        let playlists = this.getPlaylist();
        let [songName ,playlistName ] = params;

        playlists.map(playlist => {
            if (playlist.name === playlistName) {
                playlist.songs = playlist.songs.filter(song => song.name !== songName)
                return playlist
            }else {
                return playlist
            }
        })
        this.savePlaylist(playlists);
        console.log(`${songName} removed from ${playlistName} playlist successfully.`);
    }

    static makeSong(params) {
        let playlists = this.getPlaylist();
        let id = playlists[playlists.length -1].id + 1;
        let [name] = params;
        playlists.push(new Playlist(id, name));
        this.savePlaylist(playlists);
        console.log(`${name} added to playlist successfully.`);

    }

    static savePlaylist(data) {
        try {
            fs.writeFileSync('./data.json', JSON.stringify(data, null, 3));
        } catch (error) {
            console.error('Error saving playlist:', error);
        }
    }
}

module.exports = Playlist;