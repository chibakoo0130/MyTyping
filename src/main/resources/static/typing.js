/**
 *
 */
function typing(word, wordRome) {
	var typingWordTag = document.getElementById('typing-word');
	var typingWord = document.createTextNode(word);
	typingWordTag.appendChild(typingWord);
	var typingWordRomeTag = document.getElementById('typing-word-rome');
	var typingWordRome = document.createTextNode(wordRome);
	typingWordRomeTag.appendChild(typingWordRome);
	judgeWord();
	judge();
}

function judgeWord() {
	var typing = document.getElementById('typing');
	console.log(typing)
	typing.readOnly = false;
}

function judge() {
	var wordRome = window.sessionStorage.getItem(['wordRome']);
	var inputWord = document.getElementById('typing').value;
	console.log(wordRome.charAt(inputWord.length-1));
	console.log(inputWord.charAt(inputWord.length-1));
	console.log(event.code)
	if (wordRome == inputWord) {
		window.alert('終わり！');
	}
	if (wordRome.charAt(inputWord.length-1).toLowerCase() == inputWord.charAt(inputWord.length-1)) {
	} else {
		console.log('不正解');
		document.getElementById('typing').value = inputWord.slice(0, inputWord.length-1);
	}

}

document.addEventListener('DOMContentLoaded', function() {
	document.getElementById('startTyping').addEventListener('click', function() {
		//var word = '雨のち晴れ';
		//var wordRome = 'AMENOTIHARE';
		var words = ['雨のち晴れ', 'コメ'];
		var wordRomes = ['AMENOTIHARE', 'KOME'];
		for (var i = 0, len = words.length; i < len; i++) {
			var word = words[i];
			var wordRome = wordRomes[i];
			typing(word, wordRome);
			// todo セッションにword, wordRomeを分けて格納するのか、データ構造で格納どちらが良いのか
			window.sessionStorage.setItem(['word'], [word]);
			window.sessionStorage.setItem(['wordRome'], [wordRome]);
		}



	})
})