'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Song = function () {
	function Song(path) {
		_classCallCheck(this, Song);

		this.path = path;
		this.type = null;
		this.name = null;
		this.duration = null;

		this.generateSongInformation();
		this.getSongDuration();
	}

	_createClass(Song, [{
		key: "generateSongInformation",
		value: function generateSongInformation() {
			var songData = this.path.split(".");

			this.name = songData[0];
			this.type = songData[1];
		}
	}, {
		key: "getSongDuration",
		value: function getSongDuration() {
			var audio = document.createElement("audio");
			audio.src = this.path;

			this.duration = audio.duration;
		}
	}]);

	return Song;
}();

var AudioSplitter = function () {
	function AudioSplitter(song) {
		_classCallCheck(this, AudioSplitter);

		this.song = song;
		this.durationInterval = {
			from: 0,
			to: song.duration
		};
	}

	_createClass(AudioSplitter, [{
		key: "cut",
		value: function cut(startPoint, finalPoint) {
			this.cutFrom(startPoint);
			this.cutTo(finalPoint);
		}
	}, {
		key: "cutFrom",
		value: function cutFrom(startPoint) {
			this.durationInterval.from = startPoint;
		}
	}, {
		key: "cutTo",
		value: function cutTo(finalPoint) {
			this.durationInterval.to = finalPoint;
		}
		/*
   bad practice example:
   generateSong() {
   some implementation of song generating
   }
   */

	}]);

	return AudioSplitter;
}();

var SongGenerator = function () {
	function SongGenerator() {
		_classCallCheck(this, SongGenerator);
	}

	_createClass(SongGenerator, null, [{
		key: "generateSong",
		value: function generateSong(audioSplitSong) {
			var el = document.createElement("audio"),
			    song = audioSplitSong.song,
			    interval = audioSplitSong.durationInterval;

			el.src = song.path;
			el.setAttribute("data-start-point", interval.from);
			el.setAttribute("data-final-point", interval.to);

			return el;
		}
	}]);

	return SongGenerator;
}();

var songExample = new Song("Muse - Unintended.mp3"),
    splitSong = new AudioSplitter(songExample);

splitSong.cut(2.5, 130);

console.log(SongGenerator.generateSong(splitSong));

//# sourceMappingURL=s-compiled.js.map