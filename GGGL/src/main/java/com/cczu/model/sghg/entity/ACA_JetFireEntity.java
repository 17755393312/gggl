package com.cczu.model.sghg.entity;

import com.cczu.util.entity.BaseEntity;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * 
 * @ClassName: ACA_JetFireEntity
 * @Description: 事故后果计算_喷射火
 * @author jason
 *
 */
@Entity
@Table(name="aca_jetfire")
public class ACA_JetFireEntity extends BaseEntity {

	/**
	 * @Fields serialVersionUID
	 */
	private static final long serialVersionUID = 1L;
	
	public ACA_JetFireEntity() {
	}

	public ACA_JetFireEntity(Long id) {
		this.ID=id;
	}
	
	public ACA_JetFireEntity(String m1, String m1_1, String m2, String m3, String m4,
                             String m5, String m6, String m11, String m12 ) {
		this.M1 = m1;
		this.M1_1 = m1_1;
		this.M2 = m2;
		this.M3 = m3;
		this.M4 = m4;
		this.M5 = m5;
		this.M6 = m6;
		this.M11= m11;
		this.M12= m12;
	}
	
	@Column(name="M1", nullable=true, columnDefinition="varchar(200)")
	@Setter
	@Getter
	private String M1;//物质
	
	@Column(name="M1_1", nullable=true, columnDefinition="varchar(200)")
	@Setter
	@Getter
	private String M1_1;//物质中文名称
	
	@Column(name="M2", nullable=true, columnDefinition="varchar(200)")
	@Setter
	@Getter
	private String M2;//比热容
	
	@Column(name="M3", nullable=true, columnDefinition="varchar(200)")
	@Setter
	@Getter
	private String M3;//压力：P
	
	@Column(name="M4", nullable=true, columnDefinition="varchar(200)")
	@Setter
	@Getter
	private String M4;//分子量：M
	
	@Column(name="M5", nullable=true, columnDefinition="varchar(200)")
	@Setter
	@Getter
	private String M5;//燃烧热：Er
	
	@Column(name="M6", nullable=true, columnDefinition="varchar(200)")
	@Setter
	@Getter
	private String M6;//孔径：D
	
	@Column(name="M7", nullable=true, columnDefinition="varchar(200)")
	@Setter
	@Getter
	private String M7;//T环境温度 25
	
	@Column(name="M8", nullable=true, columnDefinition="varchar(200)")
	@Setter
	@Getter
	private String M8;//RH湿度  0.5
	
	@Column(name="M9", nullable=true, columnDefinition="varchar(200)")
	@Setter
	@Getter
	private String M9;//7.5 代表死亡
	
	@Column(name="M9_1", nullable=true, columnDefinition="varchar(200)")
	@Setter
	@Getter
	private String M9_1;//25代表重伤

	@Column(name="M9_2", nullable=true, columnDefinition="varchar(200)")
	@Setter
	@Getter
	private String M9_2;//12.5 代表轻伤
	
	@Column(name="M10", nullable=true, columnDefinition="varchar(200)")
	@Setter
	@Getter
	private String M10;//死亡计算结果
	
	@Column(name="M10_1", nullable=true, columnDefinition="varchar(200)")
	@Setter
	@Getter
	private String M10_1;//重伤计算结果
	
	@Column(name="M10_2", nullable=true, columnDefinition="varchar(200)")
	@Setter
	@Getter
	private String M10_2;//轻伤计算结果
	
	@Column(name="M11", nullable=true, columnDefinition="varchar(200)")
	@Setter
	@Getter
	private String M11;//经度
	
	@Column(name="M12", nullable=true, columnDefinition="varchar(200)")
	@Setter
	@Getter
	private String M12;//纬度
	
	@Column(name = "ID1", nullable = true, columnDefinition="bigint")
	@Setter
	@Getter
	public long ID1;//用户
}
