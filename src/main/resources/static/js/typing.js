/**
 *
 */
class WordList {
	constructor() {
		this.words = [];
		this.last = 0;
	}

	getWordAt(index) {
		return this.words[index];
	}

	appendWord(word, wordRome) {
		this.words.push({ "word" : word, "wordRome" : wordRome });
		this.last = this.words.length;
	}

	getLength() {
		return this.last;
	}

	iterator() {
		return new WordListIterator(this);
	}
}

class WordListIterator {
	constructor(wordList) {
		this.wordList = wordList;
		this.index = 0;
	}

	hasNext() {
		if (this.index < this.wordList.getLength()) {
			return true;
		} else {
			return false;
		}
	}

	next() {
		this.word = this.wordList.getWordAt(this.index);
		this.index++;
		return this.word;
	}
}

function displayWord(word, wordRome) {
	var typingWordTag = document.getElementById('typing-word');
	var typingWord = document.createTextNode(word);
	typingWordTag.appendChild(typingWord);
	var typingWordRomeTag = document.getElementById('typing-word-rome');
	var typingWordRome = document.createTextNode(wordRome);
	typingWordRomeTag.appendChild(typingWordRome);
}

function hiddenWord() {
	document.getElementById('typing-word').removeChild(document.getElementById('typing-word').firstChild);
	document.getElementById('typing-word-rome').removeChild(document.getElementById('typing-word-rome').firstChild);
}

document.addEventListener('DOMContentLoaded', function() {
	document.getElementById('startTyping').addEventListener('click', function() {
		var typedChar = "";
		let wordList = new WordList();
		wordList.appendWord('米', 'KOME');
		wordList.appendWord('雨のち晴れ', 'AMENOTIHARE');
		wordList.appendWord('宇宙', 'UTYUU');
		wordList.appendWord('アメリカ', 'AMERIKA');
		let wordListIt = wordList.iterator();
		let word =  wordListIt.next();
		let subWord = word.word;
		let subWordRome = word.wordRome;
		displayWord(subWord, subWordRome);
		// タイピング処理
		var i = 0;
		document.onkeydown = function(e) {
			typedChar = String.fromCharCode(e.keyCode);
			// タイプされた文字の判定
			if (typedChar == subWordRome[i]) {
				console.log(typedChar)
				console.log('正解')
				i++;
			}
			// 正解した文字数とお題の単語の文字数を比較
			if (subWordRome.length == i) {	// 一致すれば次の単語
				i = 0
				if (wordListIt.hasNext()) {
					hiddenWord();
					word = wordListIt.next();
					subWord = word.word;
					subWordRome = word.wordRome;
					displayWord(subWord, subWordRome);
				} else {
					window.alert('終了');
				}
			}

		}
	})
})

