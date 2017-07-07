/**
 * @author Ivaylo Penev
 */

const songPlayingNow = function (input) {

    let song, singer, time;

    song = input[0];
    singer = input[1];
    time = input[2];


    return `Now Playing: ${singer} - ${song}[${time}]`;
};

console.log(songPlayingNow(['NumberOne', 'Nelly', '4:09']));
