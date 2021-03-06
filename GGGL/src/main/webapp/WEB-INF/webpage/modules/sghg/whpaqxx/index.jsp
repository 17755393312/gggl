<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/WEB-INF/webpage/include/taglib.jsp"%>
<html>
<head>
	<title>危化品安全信息管理</title>
	<meta name="decorator" content="default"/>
	<script type="text/javascript" src="${ctx}/static/model/js/sghg/whpaqxx/index.js?v=1"></script>
</head>
<body >
<!-- 工具栏 -->
<div id="sekb_whpaqxx_tb" style="padding:5px;height:auto">
	<form id="searchFrom" action="" style="margin-bottom: 8px;" class="form-inline">				
	<div class="form-group">
		<input type="text" id="sekb_whpaqxx_p_name" name="sekb_whpaqxx_p_name" class="easyui-textbox" style="height: 30px;" data-options="prompt: '化学品名称 '"/>
		<input type="text" id="cas" name="cas" class="easyui-textbox" style="height: 30px;" data-options="prompt: 'CAS号 '"/>
		<input id="jdp" name="jdp" class="easyui-combobox" style="height: 30px;" data-options="
								editable:false ,data: [
										{value:'0',text:'否'},
										{value:'1',text:'是'}],prompt: '剧毒品' "/> 
		<span  class="btn btn-primary btn-rounded btn-outline btn-sm " onclick="search()" ><i class="fa fa-search"></i> 查询</span>
		<span  class="btn btn-primary btn-rounded btn-outline btn-sm " onclick="reset()" ><i class="fa fa-refresh"></i> 全部</span>  	        
    </div>
	</form>

	<div class="row">
	<div class="col-sm-12">
		<div class="pull-left">
			<button class="btn btn-white btn-sm" data-toggle="tooltip" data-placement="left" onclick="view()" title="查看"><i class="fa fa-search-plus"></i> 查看</button>
			<button class="btn btn-white btn-sm" data-toggle="tooltip" data-placement="left" onclick="fileexport()" title="导出"><i class="fa fa-external-link"></i> 导出</button>
	       <button class="btn btn-white btn-sm " data-toggle="tooltip" data-placement="left" onclick="refresh()" title="刷新"><i class="glyphicon glyphicon-repeat"></i> 刷新</button>
		</div>
		<div class="pull-right">
		</div>
	</div>
	</div> 
	   
</div>


<table id="sekb_whpaqxx_dg"></table> 
<script type="text/javascript">
</script>
</body>
</html>