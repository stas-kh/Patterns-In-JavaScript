import {Memento} from "./memento";
import {IOriginator} from "./interfaces/IOriginator";

export class TicTacToe extends IOriginator {
	constructor(callback) {
		super();
		
		this._CROSS = "x";
		this._NULL = "o";
		this._FIELD_SELECTOR = ".tic-tac";
		this._CELL_SELECTOR = ".cell";
		this._CELL = "cell";
		this._LOCALES = {
			NO_WINNERS_MSG: "No winners in current game! Play again to have more fun",
			CRUBS: "Crubs",
			DUCKS: "Ducks",
			WINNING_MSG: " win!!!"
		};
		this._ICONS = {
			CRABBY: "crabby-icon",
			DUCK: "duck-icon"
		};

		this._field = [0, 0, 0, 0, 0, 0, 0, 0, 0];
		this._lastMove = null;
		this._gameOverCallback = callback;
	}

	move(isAutoMove, index) {
		let move = this._checkMoveType(),
			emptyCells = this._getEmptyIndexes();

		if (isAutoMove === true) {
			if (emptyCells.length !== 0) {
				index = emptyCells[this._generateRandomIndex(emptyCells)];
				this._updateField(move, index);
				this.checkVictory();
			} else {
				// stop the algorithm in case when no more empty fields
				this._callGameOver(this._LOCALES.NO_WINNERS_MSG);
			}
		} else {
			if (this._field[index] === 0) {
				this._updateField(move, index);
				// last cell was changed, but there is no winners, we show game over message
				if (this.checkVictory() === false && emptyCells.length === 1) {
					this._callGameOver(this._LOCALES.NO_WINNERS_MSG);
				}
			}
		}
	}

	_getEmptyIndexes() {
		let result = [];
		this._field.forEach((element, index) => {
			if (element === 0) {
				result.push(index);
			}
		});
		return result;
	}

	_updateField(move, index) {
		this._field[index] = move;
		this._lastMove = move;
		this.reRender();
	}

	_generateRandomIndex(array) {
		return Math.floor((Math.random() * (array.length - 1)));
	}

	checkVictory() {
		let result = false,
			winningMessage = "";
		if (this._field[0] == this._field[1] && this._field[1] == this._field[2] && this._field[2] !== 0) {
			result = true;
		}
		if (this._field[3] == this._field[4] && this._field[4] == this._field[5] && this._field[5] !== 0) {
			result = true;
		}
		if (this._field[6] == this._field[7] && this._field[7] == this._field[8] && this._field[8] !== 0) {
			result = true;
		}
		if (this._field[6] == this._field[3] && this._field[3] == this._field[0] && this._field[0] !== 0) {
			result = true;
		}
		if (this._field[7] == this._field[4] && this._field[4] == this._field[1] && this._field[1] !== 0) {
			result = true;
		}
		if (this._field[8] == this._field[5] && this._field[5] == this._field[2] && this._field[2] !== 0) {
			result = true;
		}
		if (this._field[6] == this._field[4] && this._field[4] == this._field[2] && this._field[2] !== 0) {
			result = true;
		}
		if (this._field[0] == this._field[4] && this._field[4] == this._field[8] && this._field[8] !== 0) {
			result = true;
		}
		if (result === true) {
			if (this._lastMove === this._CROSS) {
				winningMessage += this._LOCALES.CRUBS;
			} else if (this._lastMove === this._NULL) {
				winningMessage += this._LOCALES.DUCKS;
			}
			winningMessage += this._LOCALES.WINNING_MSG;
			this._callGameOver(winningMessage);
		}
		return result;
	}

	_callGameOver(message) {
		if (this._gameOverCallback !== null && this._gameOverCallback !== undefined && typeof this._gameOverCallback === "function") {
			this._gameOverCallback.call(window, message);
		}
	}
	
	_render() {
		let renderedHTML = "",
			cssClass = this._CELL,
			index = 0;
		this._field.forEach(() => {
			renderedHTML += `<p class='${cssClass}' data-index='${index}'></p>`;
			index++;
		});
		document.querySelector(this._FIELD_SELECTOR).innerHTML = renderedHTML;
	}

	reRender() {
		let cells = document.querySelectorAll(this._CELL_SELECTOR);
		for (var i = 0; i < cells.length; i++) {
			let additionalClass = "";
			if (this._field[i] === this._CROSS) {
				additionalClass += this._ICONS.CRABBY;
			} else if (this._field[i] === this._NULL) {
				additionalClass  += this._ICONS.DUCK;
			} else {
				cells[i].className = this._CELL;
			}
			if (additionalClass !== null && additionalClass !== undefined && additionalClass !== "") {
				cells[i].classList.add(additionalClass);
			}
		}
	}

	_resetField() {
		this._field = [0, 0, 0, 0, 0, 0, 0, 0, 0];
	}

	startGame() {
		this._resetField();
		this._render();
	}

	resetGame() {
		this._resetField();
		this.reRender();
	}

	_checkMoveType() {
		let type = "";
		if (this._lastMove === null) {
			type = this._CROSS;
		} else {
			type = ((this._lastMove === this._CROSS) ? this._NULL : this._CROSS);
		}
		return type;
	}

	set memento(memento) {
		if(memento instanceof Memento) {
			this._field = memento.state;
		}
	}

	createMemento() {
		return new Memento(this._field.slice());
	}
}