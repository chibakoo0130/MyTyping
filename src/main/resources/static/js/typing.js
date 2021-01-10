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

document.addEventListener('DOMContentLoaded', function() {
	document.getElementById('startTyping').addEventListener('click', function() {
		let typedChar = "";
		let words = JSON.parse(document.getElementById('words').value);
		console.log(words)
		let wordList = new WordList();
		for (let word in words) {
			console.log(word)
			console.log(words[word])
			wordList.appendWord(words[word].wordStr, words[word].wordRome);
		}
		let wordListIt = wordList.iterator();
		let word =  wordListIt.next();
		let subWord = word.word;
		let subWordRome = word.wordRome;

		displayWord(subWord, subWordRome);

		// タイピング処理
		let i = 0;
		document.onkeydown = function(e) {
			typedChar = String.fromCharCode(e.keyCode);
			// タイプされた文字の判定
			if (typedChar == subWordRome[i]) {
				let typingWordRome = document.getElementById("typing-word-rome");
				typingWordRome.textContent = subWordRome.slice(i+1, subWordRome.length);
				let typed = document.getElementById("typed-word-rome");
				typed.textContent = subWordRome.slice(0, i+1);
				console.log('正解')
				i++;
			} else {
				//document.getElementById("miss").play();
				console.log('不正解')
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

function displayWord(word, wordRome) {
	let typingWordTag = document.getElementById('typing-word');
	let typingWord = document.createTextNode(word);
	typingWordTag.appendChild(typingWord);
	let typingWordRomeTag = document.getElementById('typing-word-rome');
	let typingWordRome = document.createTextNode(wordRome);
	typingWordRomeTag.appendChild(typingWordRome);
}

function hiddenWord() {
	document.getElementById('typing-word').removeChild(document.getElementById('typing-word').firstChild);
	document.getElementById('typed-word-rome').removeChild(document.getElementById('typed-word-rome').firstChild);
}




