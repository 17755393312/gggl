<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/WEB-INF/webpage/include/taglib.jsp"%>
<%
    String logotitle="企业智慧安全、环保、消防一体化云平台";
    if(session.getAttribute("logotitle")!=null&&!session.getAttribute("logotitle").equals(""))
        logotitle=(String)session.getAttribute("logotitle");
%>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" type="text/css" href="${ctxStatic}/model/css/index/style.css" />
<link rel="stylesheet" type="text/css" href="${ctxStatic}/model/css/index/main.css" />
<link rel="stylesheet" type="text/css" href="${ctxStatic}/model/css/index/nav.css" />
<script type="text/javascript" src="${ctxStatic}/jquery/jquery.js" ></script>
<script type="text/javascript" src="${ctxStatic}/model/js/index/global.js"></script>
<script type="text/javascript" src="${ctxStatic}/model/js/index/nav.js"></script>
<script type="text/javascript" src="${ctxStatic}/model/js/index/Menu.js"></script>
<script src="${ctxStatic}/layer-v2.0/layer/layer.js"></script>

<title><%=logotitle %></title>
</head>

<body>
<div id="container">
	<div id="hd">
    	<div class="hd-top">
            <h1 class="logo">公共管廊事故多米诺风险评价与应急辅助决策支持系统</h1>
            <div class="setting ue-clear">
                <ul class="setting-main ue-clear">
                    <li><a class="close-btn exit" onclick="logout()"></a></li>
                </ul>
            </div>
            <div class="user-info">
                <a href="javascript:;" title="个人档案" class="user-avatar"><span></span></a>
                <span class="user-name"><shiro:principal property="name"/>，欢迎您</span>

            </div>

        </div>
        <div class="hd-bottom">
            <div style="height:10px"></div>
        	<!--<i class="home"><a href="javascript:;"></a></i>-->
        	<div class="nav-wrap">
                <ul class="nav ue-clear" id ="menulist">
                </ul>
            </div>
            <a href="javascript:;" class="nav-add-btn"></a>
            <div class="nav-btn">

            	<a href="javascript:;" class="nav-prev-btn"></a>
                <a href="javascript:;" class="nav-next-btn"></a>
            </div>
        </div>
    </div>
	<div id="bd">
    	<div class="sidebar">
        	<div class="sidebar-bg"></div>
            <i class="sidebar-hide"></i>

            <ul class="nav2">
                <li class="subnav-li" href="${ctx}/a/home" data-id="1"><a href="javascript:;" class="ue-clear"><i class="subnav-icon"></i><span class="subnav-text">首页</span></a></li>
            </ul>
            <div class="tree-list outwindow">
            	<div class="tree ztree"></div>
            </div>
        </div>
         <div class="main">
        	<div class="title">
                <i class="sidebar-show"></i>
                <ul class="tab ue-clear">

                </ul>
                <i class="tab-more"></i>
                <i class="tab-close"></i>
            </div>
            <div class="content">
            </div>
        </div>
    </div>

    <div id="ft" class="ue-clear">
    	<div class="ft1 ue-clear">
        	<i class="ft-icon1"></i>
            <span>智慧安全管理系统</span>
            <em>ZHONGAN LIANKE</em>
        </div>
        <div class="ft2 ue-clear">
        	<span>中安联科</span>
            <em>V2.0 2018</em>
            <i class="ft-icon2"></i>
        </div>
    </div>
</div>
<%--<div class="opt-panel skin-opt" style="top:37px;right:119px;display: none;">
   <ul class="ue-clear">
   		<li><a class="text" onclick="openDialog('消息查看','${ctx}/system/message/index?msgtype=dxj')">待巡检<span class="num" id="dxj">(0)</span></a></li>
        <li><a class="text" onclick="openDialog('消息查看','${ctx}/system/message/index?msgtype=dsh')">待审核<span class="num" id="dsh">(0)</span></a></li>
        <li><a class="text" onclick="openDialog('消息查看','${ctx}/system/message/index?msgtype=dsp')">待审批<span class="num" id="dsp">(0)</span></a></li>
        <li><a class="text" onclick="openDialog('消息查看','${ctx}/system/message/index?msgtype=dzg')">待整改<span class="num" id="dzg">(0)</span></a></li>
        &lt;%&ndash;<li><a class="text" onclick="openDialog('消息查看','${ctx}/system/message/index?msgtype=djc')">待检查<span class="num" id="djc">(0)</span></a></li>&ndash;%&gt;
        <li><a class="text" onclick="openDialog('消息查看','${ctx}/system/message/index?msgtype=xwj')">新文件<span class="num" id="xwj">(0)</span></a></li>
        <li><a class="text" onclick="openDialog('消息查看','${ctx}/system/message/index?msgtype=pxtz')">培训通知<span class="num"id="pxtz">(0)</span></a></li>
        <li><a class="text" onclick="openDialog('消息查看','${ctx}/system/message/index?msgtype=dcwj')">调查问卷<span class="num"id="dcwj">(0)</span></a></li>
    </ul>
</div>--%>
<div class="more-bab-list">
   <ul></ul>
    <div class="opt-panel-ml"></div>
    <div class="opt-panel-mr"></div>
    <div class="opt-panel-bc"></div>
    <div class="opt-panel-br"></div>
    <div class="opt-panel-bl"></div>
</div>

</body>
<script type="text/javascript" src="${ctxStatic}/model/js/index/core.js"></script>
<script type="text/javascript" src="${ctxStatic}/model/js/index/jquery.dialog.js"></script>
<script type="text/javascript">
//遍历菜单生成html
var html="";
var firstlogin = true;
var Gdata=[];
var msgbool= false;
$(function(){
	//请求菜单数据
	$("#bd").height($(window).height()-$("#hd").outerHeight()-35);
	//指定菜单，缺少导致无法展开左侧菜单
	var menu = new Menu({
		defaultSelect: $('.nav2').find('li[data-id="1"]')
	});

	$(window).resize(function(e) {
	    $("#bd").height($(window).height()-$("#hd").outerHeight()-35);
	});

	msgtx();

	$.ajax({
        type:"POST",
        url:"${ctx}/system/permission/i/menujson",
        dataType: 'json',
        success:function(data){
            Gdata = data;
        	showMenu();
    		//menuaction();
        }
    });

	/*$.each($('.skin-opt li'),function(index, element){
		if((index + 1) % 3 == 0){
			$(this).addClass('third');
		}
		$(this).css('background',$(this).attr('attr-color'));
	});*/

	$('.setting-skin').click(function(e) {
        /*$('.skin-opt').toggle();*/
        openDialog("消息查看","${ctx}/new/message/index");
        msgtx();
    });

	//离开隐藏控件
    /*$(".skin-opt").hover(function(){
    },function(){
	 	$('.skin-opt').toggle();
    });

	$('.skin-opt').click(function(e) {
        if($(e.target).is('li')){
			alert($(e.target).attr('attr-color'));
		}
    });*/

	$('.user-info').click(function(e) {
       $(this).toggleClass('active');
	   $('.user-opt').toggle();
    });

	hideElement($('.user-opt'), function(current, target){
	});

});

//消息提醒
function msgtx(){
    /*$.post("${ctx}/system/message/msgjson",function(data){
 	   var msgtotal = 0;
        for(var item of data){
        		$("#"+item.msgtype).text("("+item.total+")");
        		if(item.msgtype=='dxj'||item.msgtype=='dsh'||item.msgtype=='dsp'||item.msgtype=='pxtz'||item.msgtype=='djc'||item.msgtype=='xwj'||item.msgtype=='dcwj'){
        			msgtotal+=item.total;
        		}
        }
        if(msgtotal>99){
     	   msgtotal = '...';
        }
        $("#msgtotal").text(msgtotal);
    });*/
}

//横向一级导航栏拼接显示
function showMenu(){
	$.each(Gdata, function(i, item) {
		var li="";
		html+='<li><a href="javascript:void(0);" id="'+item.id+'"><img src="${ctxStatic}/model/main/images/'+item.icon+'"/>'+item.name+'</a></li>';
	});
	$('#menulist').append(html);
	var totalWidth = 0, current = 1;

	//根据 横向一级导航栏 计算宽度
	$.each($('.nav').find('li'), function(){
		totalWidth += $(this).outerWidth();
	});

	$('.nav').width(totalWidth+500);

	function currentLeft(){
		return -(current - 1) * 120;
	}

	//横向一级导航栏 最右方按钮点击 图标移动距离
	$('.nav-btn a').click(function(e) {
		var tempWidth = totalWidth - ( Math.abs($('.nav').css('left').split('p')[0]) + $('.nav-wrap').width() );
        if($(this).hasClass('nav-prev-btn')){
			if( parseInt($('.nav').css('left').split('p')[0])  < 0){
				current--;
				Math.abs($('.nav').css('left').split('p')[0]) > 120 ? $('.nav').animate({'left': currentLeft()}, 200) : $('.nav').animate({'left': 0}, 200);
			}
		}else{
			if(tempWidth  > 0)	{
			   	current++;
				tempWidth > 120 ? $('.nav').animate({'left': currentLeft()}, 200) : $('.nav').animate({'left': $('.nav').css('left').split('p')[0]-tempWidth}, 200);
			}
		}
    });
	//横向一级导航栏激活标签
	$(".nav li a").click(function(){
	    if(firstlogin){
	    	//首次进来默认隐藏，加载首页地址
        	$(".sidebar-show").click();
			firstlogin = false;
	    }
	    $(".nav li a").removeClass("active");
	    $(this).addClass("active");
		$(".nav2").empty();
	    var id  = $(this).attr("id");
	    var html='';//父节点html
        for(var i=0; i<Gdata.length; i++){
	    //for(var item of Gdata){
            if(Gdata[i].id==id){
			//if(item.id==id){
				var childs = Gdata[i].children;
			    if(childs&&childs.length>0){
					//var f= true;
                    for(var j=0; j<childs.length; j++){
      				//for(var subitem of childs){//二级菜单循环
                            if(childs[j].children&&childs[j].children.length>0) {
      						//if(subitem.children&&subitem.children.length>0){//存在三级菜单
	      						html+='<li class="nav-li"><a href="javascript:;" class="ue-clear"><i class="nav-ivon"></i><span class="nav-text">'+childs[j].name+'</span></a>';
      							//三级菜单
      							html+='<ul class="subnav">';
                                var cchilds = childs[j].children;
                                for(var m=0; m<cchilds.length; m++) {
         						//for(var ssubitem of subitem.children){
         						    html+='<li class="subnav-li" data-id="'+cchilds[m].id+'" href="${ctx }/'+cchilds[m].href+'"><a href="javascript:;" class="ue-clear"><i class="subnav-icon"></i><span class="subnav-text">'+cchilds[m].name+'</span></a></li>';
         						}
         						html+='</ul>';
      						}else{//不存在三级菜单
      							html+='<li class="nav-li" data-id="'+childs[j].id+'" href="${ctx }/'+childs[j].href+'"><a href="javascript:;" class="ue-clear"><span class="nav-text" style="margin-left:33px;">'+childs[j].name+'</span></a>';
      						}
      						//f=false;
      						html+='</li>';
      					}
      			    }
			   	$(".nav2").append(html);
			    break;
			}
	    }
	    /* if($(".nav li a").eq(0).attr("class")=='active'){

	    } */
	});
	//首次进入默认激活第一个标签
	$(".nav li a").eq(0).click();
}
function openDialog(title,url){
	layer.open({
	    type: 2,
	    shift: 1,
	    area: ["40%", "55%"],
	    title: title,
    	maxmin: true,
	    content: url
	});
}
function logout(){
    window.location.href="${ctx}/a/logout";
    /*layer.confirm('你确定要退出系统？', {icon: 3, title:'提示'}, function(index){
	  layer.close(index);
	});*/
}

//屏幕改变事件
var resizeTimeout;
$(window).resize(function(){
	$(".main").attr("style","overflow:auto;height:"+(document.documentElement.clientHeight - 149)+"px;");
	resizeTimeout = setTimeout(function() {
		$('iframe[name="myiframe"]').height($(window).height()-181);
    }, 1);
});

</script>

</html>
