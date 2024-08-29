const command = process.argv[2];
const params = process.argv.slice(3);
const PlaylistController = require('./controller/PlaylistController');

switch (command) {
    case 'add' :
        PlaylistController.addSong(params);
        break;

    case 'remove':
        PlaylistController.removeSong(params);
        break;

    case 'make':
       PlaylistController.makeSong(params);
        break;

    case 'show':
    PlaylistController.showPlaylist();
        break;

    default :
console.log('Invalid command. Use add, remove, make, or show Playlist');
        break;
}