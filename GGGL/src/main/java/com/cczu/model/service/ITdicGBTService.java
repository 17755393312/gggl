package com.cczu.model.service;

import com.cczu.model.entity.dto.Tdic_NoteTreeDto;

import java.util.List;

/**
 * 
 * @ClassName: ITdicGBTService
 * @Description: 字典_GBT4754
 * @author jason
 *
 */
public interface ITdicGBTService {

	/**
	 * 获取所有
	 * @return 集合
	 */
	public List<Tdic_NoteTreeDto> getGBTAll();

	/**
	 * GBT4754字典json
	 * @return 集合
	 */
	public String gbtjson();
	
	/**
	 * 获取所有
	 * @return 集合
	 */
	public List<Tdic_NoteTreeDto> getAJFLAll();
	/**
	 * 安监分类字典json
	 * @return 集合
	 */
	public String ajfljson();
	
}
