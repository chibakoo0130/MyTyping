package com.example.demo.domain;

import java.io.Serializable;
import java.util.Date;

import lombok.Data;

@Data
public class Word implements Serializable {

	private  final static long serialVersionUID = 1L;

	/** 単語ID */
	private String wordId;
	/** 単語 **/
	private String wordStr;
	/** 単語ローマ字 */
	private String wordRome;
	/** 登録日 */
	private Date inpDate;
	/** 更新日 */
	private Date updDate;

}
