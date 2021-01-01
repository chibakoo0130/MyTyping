package com.example.demo.web;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.demo.domain.Word;
import com.example.demo.service.TypingService;

@Controller
public class TypingController {

	final private int WORD_NUM = 4;

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
		//  単語idを取得
		List<String> ids = getIds(WORD_NUM);
		model.addAttribute("words", getWords(ids));
		return "/start";
	}

	/**
	 * 無作為に選ばれた単語idのリストを取得する。
	 *
	 * @param word_num 取得したい単語数
	 * @return 単語idのリスト
	 */
	public List<String> getIds(int word_num) {
		// 単語idを全て取得
		List<String> idList = typingService.selectId();
		List<String> ids = new ArrayList<String>();
		for (int i = 0; i < word_num; i++) {
			int rand = new Random().nextInt(idList.size());
			ids.add(idList.get(rand));
		}

		return ids;
	}

	/**
	 * 単語idリストをから単語を取得しJSON形式で返す。
	 *
	 * @param ids 単語idのリスト
	 * @return JSON化された単語リスト
	 */
	public JSONObject getWords(List<String> ids) {
		JSONObject words = new JSONObject();
		int idx = 0;
		for (String id: ids) {
			idx++;
			Word word = typingService.selectById(id);
			JSONObject childNode = new JSONObject();
			childNode.put("wordStr", word.getWordStr());
			childNode.put("wordRome", word.getWordRome());
			words.put("word" + idx, childNode);
		}
		return words;
	}
}
