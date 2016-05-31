'use strict';

class Song {
	constructor (path) {
		this.path = path;
		this.type = null;
		this.name = null;
		this.duration = null;

		this.generateSongInformation();
		this.getSongDuration();
	}
	generateSongInformation () {
		var songData = this.path.split(".");

		this.name = songData[0];
		this.type = songData[1];
	}
	getSongDuration () {
		var audio = document.createElement("audio");
		audio.src = this.path;

		this.duration = audio.duration;
	}
}

class AudioSplitter {
	constructor (song) {
		this.song = song;
		this.durationInterval = {
			from: 0,
			to: song.duration
		}
	}
	cut (startPoint, finalPoint) {
		this.cutFrom(startPoint);
		this.cutTo(finalPoint);
	}
	cutFrom (startPoint) {
		this.durationInterval.from = startPoint;
	}
	cutTo (finalPoint) {
		this.durationInterval.to = finalPoint;
	}
	/*
	 bad practice example:
	 generateSong() {
	 some implementation of song generating
	 }
	 */
}

class SongGenerator {
	static generateSong (audioSplitSong) {
		var el = document.createElement("audio"),
			song = audioSplitSong.song,
			interval = audioSplitSong.durationInterval;

		el.src = song.path;
		el.setAttribute("data-start-point", interval.from);
		el.setAttribute("data-final-point", interval.to);

		return el;
	}
}

var songExample = new Song("Muse - Unintended.mp3"),
	splitSong = new AudioSplitter(songExample);

splitSong.cut(2.5, 130);

console.log(SongGenerator.generateSong(splitSong));
