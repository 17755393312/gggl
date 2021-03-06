package com.cczu.model.sghg.service;

import com.cczu.model.sghg.dao.AcaFireballDao;
import com.cczu.model.sghg.entity.ACA_FireballEntity;
import com.cczu.sys.comm.mapper.JsonMapper;
import com.cczu.sys.comm.utils.DateUtils;
import com.cczu.sys.system.service.ShiroRealm.ShiroUser;
import com.cczu.sys.system.utils.UserUtil;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.sql.Timestamp;
import java.util.List;
import java.util.Map;

@Transactional(readOnly=true)
@Service("AcaFireballService")
public class AcaFireballService {
	@Resource
	private AcaFireballDao acaFireball;

	public String countSave(ACA_FireballEntity aca) throws Exception {
//		ShiroUser sessionuser= UserUtil.getCurrentShiroUser();
//		Timestamp t=DateUtils.getSysTimestamp();
//		aca.setS1(t);
//		aca.setS2(t);
//		aca.setS3(0);
//		aca.setID1(sessionuser.getId());
		return JsonMapper.getInstance().writeValueAsString(acaFireball.saveInfo(aca));
	}
	
	public String jccountSave(ACA_FireballEntity aca) throws Exception {
		ShiroUser sessionuser= UserUtil.getCurrentShiroUser();
		Timestamp t= DateUtils.getSysTimestamp();
		aca.setS1(t);
		aca.setS2(t);
		aca.setS3(0);
		aca.setID1(sessionuser.getId());
		return JsonMapper.getInstance().writeValueAsString(acaFireball.jcsaveInfo(aca));
	}


	public List<ACA_FireballEntity> findAll() {
		// TODO Auto-generated method stub
		return null;
	}

	public List<ACA_FireballEntity> findAllByUserId(long id1) {
		// TODO Auto-generated method stub
		return null;
	}

	public Map<String, Object> dataGrid(Map<String, Object> mapData) {
		// TODO Auto-generated method stub
		return null;
	}

	public ACA_FireballEntity findInfoById(long id) {
		// TODO Auto-generated method stub
		return null;
	}

	public List<Map<String, Object>> appFire(String str1, String str2) throws Exception {
		// TODO Auto-generated method stub
		return acaFireball.appFire(str1, str2);
	}
}
