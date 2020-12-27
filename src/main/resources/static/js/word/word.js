/**
 *
 */
class Word {
	constructor(word, wordRome) {
		this.word = word;
		this.wordRome = wordRome;
	}

	get word() {
		return this._word;
	}

	set word(value) {
		this._word = value;
	}

	get wordRome() {
		return this._wordRome;
	}

	set wordRome(value) {
		this._wordRome = value;
	}

	getWord() {
		return this.word + ":" + this.wordRome;
	}

}