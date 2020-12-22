/**
 *
 */
function typing() {
	var typingWordTag = document.getElementById('typing-word');
	var typingWord = document.createTextNode('雨のち晴れ');
	typingWordTag.appendChild(typingWord);
	var typingWordRomeTag = document.getElementById('typing-word-rome');
	var typingWordRome = document.createTextNode('AMENOTIHARE');
	typingWordRomeTag.appendChild(typingWordRome);
	judgeWord();
}

function judgeWord() {
	var typing = document.getElementById('typing');
	console.log(typing)
	typing.readOnly = false;
}

function judge() {
	var inputWord = document.getElementById('typing').value;
	console.log('AMENOTIHARE'.charAt(inputWord.length-1));
	console.log(inputWord.charAt(inputWord.length-1));
	if ('AMENOTIHARE'.charAt(inputWord.length-1).toLowerCase() == inputWord.charAt(inputWord.length-1)) {
	} else {
		console.log('不正解');
	}

}

document.addEventListener('DOMContentLoaded', function() {
	document.getElementById('startTyping').addEventListener('click', function() {
		typing();
	})
})