package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.domain.Word;
import com.example.demo.persistence.WordMapper;

@Service
public class TypingService {

	@Autowired
	WordMapper wordMapper;

	/**
	 * 単語idを全件取得する
	 *
	 * @return 単語idリスト
	 */
	public List<String> selectId() {
		return wordMapper.selectId();
	}

	/**
	 * 単語idを条件に単語を取得する。
	 *
	 * @param id 単語id
	 * @return 単語
	 */
	public Word selectById(String id) {
		return wordMapper.selectById(id);
	}

}
