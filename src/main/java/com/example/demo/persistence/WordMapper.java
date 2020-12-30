package com.example.demo.persistence;

import java.util.List;

import com.example.demo.domain.Word;

public interface WordMapper {

	/**
	 * 単語idを全件取得する。
	 *
	 * @return 単語idのリスト
	 */
	public List<String>  selectId();

	/**
	 * idを条件に単語を取得する。
	 *
	 * @param id 単語id
	 * @return 単語
	 */
	public Word selectById(String id);

}
