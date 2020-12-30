package com.example.demo.web;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.demo.domain.Word;
import com.example.demo.service.TypingService;

@Controller
public class TypingController {

	@Autowired
	TypingService typingService;

	/**
	 * メニュー画面に遷移する。
	 *
	 * @return /menu
	 */
	@RequestMapping("/menu")
	public String menu() {
		return "/menu";
	}

	/**
	 * スタート画面に遷移する。
	 *
	 * @param model モデル
	 * @return /start
	 */
	@PostMapping("/start")
	public String start(Model model) {
		// 単語idを全て取得
		List<String> ids = typingService.selectId();
		// todo JSONで試す
		// 単語綴りのマップと単語ローマ字のマップをもつリストを格納するリストを生成
		List<List<Map<String, String>>> words = new ArrayList<List<Map<String, String>>>();
		for (String id: ids) {
			Word word = typingService.selectById(id);
			List<Map<String, String>> wordStrRm = new ArrayList<Map<String,String>>();
			Map<String, String> wordString = new HashMap<String, String>();
			wordString.put("wordString", word.getWord());
			Map<String, String> wordRome = new HashMap<String, String>();
			wordRome.put("wordRome", word.getWordRome());
			wordStrRm.add(wordString);
			wordStrRm.add(wordRome);
			words.add(wordStrRm);
		}
		model.addAttribute("words", words);
		return "/start";
	}
}
