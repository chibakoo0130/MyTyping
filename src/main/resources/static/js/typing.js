/**
 *
 */
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
		var words = ["asd", "雨"]
		var wordRomes = ["ASD", "AME"]
		let subWord = words[0]
		let subWordRome = wordRomes[0]
		displayWord(subWord, subWordRome);
		var i = 0;
		console.log(subWord + subWordRome)
		document.onkeydown = function(e) {
			typedChar = String.fromCharCode(e.keyCode);
			if (typedChar == subWordRome[i]) {
				console.log(typedChar)
				console.log('正解')
				i++;
			}
			if (subWordRome.length == i) {
				i = 0
				hiddenWord();
				subWord = words[1];
				subWordRome = wordRomes[1]
				displayWord(subWord, subWordRome);
			}

		}
	})
})

