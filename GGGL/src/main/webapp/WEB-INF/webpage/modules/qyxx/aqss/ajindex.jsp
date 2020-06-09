<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/WEB-INF/webpage/include/taglib.jsp"%>
<html>
<head>
	<title>安全设施信息</title>
	<meta name="decorator" content="default"/>
	<script type="text/javascript" src="${ctx}/static/model/js/qyxx/aqss/ajindex.js?v=1.7"></script>
</head>
<body class="gray-bg">
<!-- 工具栏 -->
<div id="bis_aqss_tb" style="padding:5px;height:auto">
	<form id="searchFrom" action="" style="margin-bottom: 8px;" class="form-inline">
				
	<div class="form-group">
		<input type="text" id="bis_aqss_qy_name" name="bis_aqss_qy_name" class="easyui-combobox"  style="height: 30px;" data-options="editable:true ,valueField: 'text',textField: 'text',url:'${ctx}/bis/qyjbxx/idjson',prompt: '企业名称' "/>
		<input type="text" name="bis_aqss_lb" class="easyui-combobox" style="height: 30px;" data-options="prompt: '类别',editable:false ,data: [
								        {value:'预防事故设施',text:'预防事故设施'},
								        {value:'控制事故设施',text:'控制事故设施'},
								        {value:'减少与消除事故影响设施',text:'减少与消除事故影响设施'} ]," />
    	<input type="text" name="bis_aqss_sbmc" class="easyui-textbox" style="height: 30px;"  data-options="prompt: '安全设施名称'" />
    	<input type="text" id="bis_aqss_dqsj"name="bis_aqss_dqsj" class="easyui-datebox" style="height: 30px;" data-options="panelHeight:'auto' ,editable:false , prompt: '到期时间' "/>
		<input type="text" name="bis_aqss_zt" class="easyui-combobox" style="height: 30px;" data-options="panelHeight:'auto' ,editable:false ,valueField: 'value',textField: 'text',prompt: '状态',data: [
								        {value:'1',text:'失效'},
								    	{value:'2',text:'停用'},
								    	{value:'0',text:'正常'}]"/>
		<span  class="btn btn-primary btn-rounded btn-outline btn-sm " onclick="search()" ><i class="fa fa-search"></i> 查询</span>
		<span  class="btn btn-primary btn-rounded btn-outline btn-sm " onclick="reset()" ><i class="fa fa-refresh"></i> 全部</span>
    </div>
	</form>

	<div class="row">
	<div class="col-sm-12">
		<div class="pull-left">
			<shiro:hasPermission name="bis:aqss:add">
		       		<button class="btn btn-white btn-sm" data-toggle="tooltip" data-placement="left" onclick="add()" title="添加"><i class="fa fa-plus"></i> 添加</button>
			</shiro:hasPermission>
			<shiro:hasPermission name="bis:aqss:update">
			    <button class="btn btn-white btn-sm" data-toggle="tooltip" data-placement="left" onclick="upd()" title="修改"><i class="fa fa-file-text-o"></i> 修改</button> 
			</shiro:hasPermission>
			<shiro:hasPermission name="bis:aqss:delete">
				<button class="btn btn-white btn-sm" data-toggle="tooltip" data-placement="left" onclick="del()" title="删除"><i class="fa fa-trash-o"></i> 删除</button> 
			</shiro:hasPermission>
			<shiro:hasPermission name="bis:aqss:view">
        		<button class="btn btn-white btn-sm" data-toggle="tooltip" data-placement="left" onclick="view()" title="查看"><i class="fa fa-search-plus"></i> 查看</button> 
        	</shiro:hasPermission>
        	<shiro:hasPermission name="bis:aqss:export">
        		<button class="btn btn-white btn-sm" data-toggle="tooltip" data-placement="left" onclick="fileexport()" title="导出"><i class="fa fa-external-link"></i> 导出</button> 
        	</shiro:hasPermission>
	       <button class="btn btn-white btn-sm " data-toggle="tooltip" data-placement="left" onclick="refresh()" title="刷新"><i class="glyphicon glyphicon-repeat"></i> 刷新</button>
		
			</div>
	</div>
	</div> 
	   
</div>


<table id="bis_aqss_dg"></table> 
<script type="text/javascript">
   var f='${sys}';
/*    $(function(){
   if(f!=''&&f=='sys'){
	   var date = new Date();
      $("#bis_aqss_dqsj").datebox('setValue',date.format("yyyy-MM-dd"));
         var obj=$("#searchFrom").serializeObject();
         $('#bis_aqss_dg').datagrid('load',obj); 
}
}) */
</script> 

</body>
</html>