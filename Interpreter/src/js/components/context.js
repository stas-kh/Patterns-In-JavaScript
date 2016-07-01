export class Context {
	constructor(input) {
		this._input = input;
		this._output = null;
	}

	set input(input) {
		this._input = input;
	}

	get input() {
		return this._input;
	}

	set output(output) {
		this._output = output;
	}

	get output() {
		return this._output;
	}
}