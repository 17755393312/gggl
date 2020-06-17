/**
 * @fileOverview ��ά�ؼ�
 * @author <a href="http://www.ecitychina.com/">EcityCyber</a>   
 * @version 1.0 
 */ 

/**
 * ��ά�ؼ��ӿڶ���
 */
var _3DControl;

/**
 * ��ȡ��ά�ؼ�����
 *
 * @ return ��ά�ؼ�����
 */
function GetTDECtrl() 
{
    HasTDECtrl();
    return _3DControl;
}

/**
 * �ж��Ƿ�����ά�ؼ��ӿڶ���
 * 
 * @return true��false
 */
function HasTDECtrl()
{
    if (_3DControl != null && _3DControl != "")
    {
        return true;
    }
    
    var version = "";
    
    _3DControl = document.getElementById("Web3DCtrl");
    if (_3DControl != null)
    {
        try
        {
            version = _3DControl.InvokeCmd("CommonOper", "GetVersion", null);
        }
        catch(e)
        {
            _3DControl = null;
        }
    }
    
    if (_3DControl == null)
    {
        _3DControl = document.getElementById("npWeb3DCtrl");
        
        try
        {
            version = _3DControl.InvokeCmd("CommonOper", "GetVersion", null);
        }
        catch(e)
        {
            _3DControl = null;
        }
    }
    
    if (_3DControl != null) return true;
    
    return false;
};

/**
 * ��ȡ��ά�ؼ�������ҳ�ĵ�ַ
 * 
 * @return ��ҳURL
 */
function GetCtrlBaseURL()
{
    return document.URL;
};

/**
 * ��ȡ��ά�ؼ�����
 * 
 * @return ��ά�ؼ��Ĳ���
 */
function GetCtrlParam()
{
    if (HasTDECtrl())
    {
        var paramstr = "";
        var ctrl = GetTDECtrl();
        var params = ctrl.childNodes;
        for (var i = 0; i < params.length; ++i)
        {
            var param = params[i];
            if (param.tagName == "PARAM")
            {
                var name = param["name"];
                name = name.replace(/%/g, "%1");
                name = name.replace(/=/g, "%2");
                name = name.replace(/&/g, "%3");
                var value = param["value"];
                value = value.replace(/%/g, "%1");
                value = value.replace(/=/g, "%2");
                value = value.replace(/&/g, "%3");
                paramstr += name + "=" + value + "&";            
            }
            
        }
        paramstr = paramstr.substr(0, paramstr.length - 1);
        return paramstr;
    }
    
    return null;
};

/**
 * ��ȡ����ľ���λ��
 * 
 * @return var[2]
 */
function GetAbsolutePos(obj) 
{
    var ow = new Array(0, 0);
    var pw = obj;
    while (pw && pw.offsetParent) 
    {
        ow[0] += pw.offsetLeft;
        ow[1] += pw.offsetTop;
        pw = pw.offsetParent;
    }
    return ow;
}

/**
 * ��������ȡ���ڴ�С
 * 
 * �ú���֧�����������
 */
function findDimensions() 
{
    var winWidth = 0;
    var winHeight = 0;

     //��ȡ���ڿ��
     if (window.innerWidth)
           winWidth = window.innerWidth;
     else if ((document.body) && (document.body.clientWidth))
           winWidth = document.body.clientWidth;
     //��ȡ���ڸ߶�
     if (window.innerHeight)
           winHeight = window.innerHeight;
     else if ((document.body) && (document.body.clientHeight))
           winHeight = document.body.clientHeight;
   
     //ͨ������Document�ڲ���body���м�⣬��ȡ���ڴ�С
     if (document.documentElement  
        && document.documentElement.clientHeight 
        && document.documentElement.clientWidth)
     {
         winHeight = document.documentElement.clientHeight;
         winWidth = document.documentElement.clientWidth;
     }
     
     //������
     var size = new Array(winWidth, winHeight);
     return size;
}


/**
 * ͨ�ò����ӿ�
 */
function CommonOperAPI()
{
};


/**
 * ͨ�ò�������
 */
var CommonOpObj = new CommonOperAPI();

/*
* ��ȡ��ά�ؼ��汾��Ϣ
*
*/
CommonOperAPI.prototype.GetVersion = function () {
    if (HasTDECtrl()) {
        return GetTDECtrl().InvokeCmd("CommonOper", "GetVersion", null);
    }
}

/*
* ��ȡ��ά�ؼ���32����64λ
*
*/
CommonOperAPI.prototype.GetPlatform = function () {
    if (HasTDECtrl()) {
        return GetTDECtrl().InvokeCmd("CommonOper", "GetPlatform", null);
    }
}

/*
* �л���ά��ͼ��ʾģʽ
* @param mode "earth" or "space"
*
*/
CommonOperAPI.prototype.SetDisplayMode = function (mode)
{
    if (HasTDECtrl())
    {
        var param = new Array();
		param[0] = mode;
		param[1] = "0";
		param[2] = "0";
        return GetTDECtrl().InvokeCmd("CommonOper", "SetVisibleMode", param);
    }
}

/*
 * ��ȡ��ά�ؼ�����Ŀ¼
 *
 */
CommonOperAPI.prototype.GetWorkDirectory = function ()
{
    if (HasTDECtrl())
    {
        var param = new Array();
        return GetTDECtrl().InvokeCmd("CommonOper", "GetCtrlPath", param);
    }
}

/*
* ��ȡ��ά���Ӧ����Ļ����
*
* @param x,y,z
*      ��ά�����
* @return ���ض�Ӧ����Ļ���꣬��ʼ����Ϊ��ά���ڵ����½�
*      ��ʽ��"x,y"
*/
CommonOperAPI.prototype.GetScreenPoint = function (x, y, z) {
    if (HasTDECtrl()) {
        var param = new Array();
        param[0] = x;
        param[1] = y;
        param[2] = z;
        return eval("(" + GetTDECtrl().InvokeCmd("CommonOper", "GetScreenPoint", param) + ")");
    }
}

/*
 * ʰȡҪ��
 *
 */
 CommonOperAPI.prototype.StartPick = function (query_callback)
{	
	if (HasTDECtrl())
	{
		var param = new Array();
		param[0] = query_callback;
		return GetTDECtrl().InvokeCmd("CommonOper","PickModel",param);
	}
};

CommonOperAPI.prototype.StartPickEx = function (query_callback)
{	
	if (HasTDECtrl())
	{
		var param = new Array();
		param[0] = query_callback;
		return GetTDECtrl().InvokeCmd("CommonOper","PickModel",param);
	}
};

/*
 * ֹͣʰȡҪ��
 *
 */
CommonOperAPI.prototype.EndPickModel = function ()
{	
    if (HasTDECtrl())
    {
		var param = new Array();
		return GetTDECtrl().InvokeCmd("CommonOper","EndPickModel",param);
	}
};

CommonOperAPI.prototype.SetSkyBoxOn = function ()
{	
    if (HasTDECtrl())
    {
		var param = new Array();
		param[0] = "true";
		return GetTDECtrl().InvokeCmd("CommonOper","setSkyBoxVisible",param);
	}
};


CommonOperAPI.prototype.SetSkyBoxOff = function ()
{	
    if (HasTDECtrl())
    {
		var param = new Array();
		param[0] = "false";
		return GetTDECtrl().InvokeCmd("CommonOper","setSkyBoxVisible",param);
	}
};

 CommonOperAPI.prototype.AddWaterEffect = function (x,y,z)
{	
    if (HasTDECtrl())
    {
		var param = new Array();
		param[0] = x;
		param[1] = y;
		param[2] = z;
		return GetTDECtrl().InvokeCmd("CommonOper","AddWaterEffect",param);
	}
};

CommonOperAPI.prototype.ClearWaterEffect = function ()
{	
    if (HasTDECtrl())
    {
		var param = new Array();
		return GetTDECtrl().InvokeCmd("CommonOper","ClearWaterEffect",param);
	}
};

CommonOperAPI.prototype.LoadXML = function (name)
{	
    if (HasTDECtrl())
    {
		var param = new Array();
		param[0] = name;
		GetTDECtrl().InvokeCmd("CommonOper","LoadXML",param);
	}
};

CommonOperAPI.prototype.SetConfig_AnimeScaleTime = function (time,scale)
{	
    if (HasTDECtrl())
    {
		var param = new Array();
		param[0] = time;
		param[0] = scale;
		GetTDECtrl().InvokeCmd("CommonOper","SetConfig_AnimeScaleTime",param);
	}
};

/*
* ��ʾCegui�˵�������
*
*/
CommonOperAPI.prototype.ShowUI = function (name) {
    this.SetGUI(name);
    if (HasTDECtrl()) {
        var param = new Array();
        GetTDECtrl().InvokeCmd("CommonOper", "ShowGUI", param);
    }
};

/*
* ����Cegui�˵�������
*
*/
CommonOperAPI.prototype.HideUI = function () {
    if (HasTDECtrl()) {
        var param = new Array();
        GetTDECtrl().InvokeCmd("CommonOper", "HideGUI", param);
    }
};

/*
* ��ʾWebKit�˵�������(��Ч)
*
*/
CommonOperAPI.prototype.ShowWebKit = function () {
    if (HasTDECtrl()) {
        var param = new Array();
        GetTDECtrl().InvokeCmd("CommonOper", "ShowWebKit", param);
    }
};

/*
* ����WebKit�˵�������(��Ч)
*
*/
CommonOperAPI.prototype.HideWebKit = function () {
    if (HasTDECtrl()) {
        var param = new Array();
        GetTDECtrl().InvokeCmd("CommonOper", "HideWebKit", param);
    }
};

/*
* ������ʾ�ĸ�GUI������UI��config�������ж�
*
*/
CommonOperAPI.prototype.SetGUI = function (name) {
    if (HasTDECtrl()) {
        var param = new Array();
        param[0] = name;
        GetTDECtrl().InvokeCmd("CommonOper", "SetGUI", param);
    }
};

/*
* ���������Cegui��ִ�и��ֲ���
* command��������1
* "oper:ShowEmptyFrame;alpha:0.5;x:100;y:100;width:200;height:400;"
* ��ʾ������͸���ȣ�λ�ã���С
*
* command��������2
* "oper:HideEmptyFrame;"
* ���ر�����
*
*  command��������3 (���ֿ�)
* "oper:showtooltip;alpha:0.5;x:100;y:100;width:200;height:400;FontColor:0xFF0000FF;Text:����1\r\n����2""
*
*
*
*  command��������3 (����)
*
*   var TipContent = {
        NameAndValues : null
    };

    TipContent.NameAndValues = new Array;
    TipContent.NameAndValues[0] = {n:"�ֶ�1", v:"����ֵ1" };
    TipContent.NameAndValues[1] = {n:"�ֶ�2", v:"����ֵ2" };
    TipContent.NameAndValues[2] = {n:"�ֶ�3", v:"����ֵ3" };
*
* "oper:showtooltip_table;alpha:0.5;x:100;y:100;width:200;height:400;FontColor:0xFF0000FF;Text:" + JSON.stringify(TipContent);
*/
CommonOperAPI.prototype.InvokeGUI = function (command) {
    if (HasTDECtrl()) {
        var param = new Array();
        param[0] = command;
        GetTDECtrl().InvokeCmd("CommonOper", "InvokeGUI", param);
    }
};

/*
* ��Cegui�˵�����Ļص�����
*/
CommonOperAPI.prototype.BindGUIEventFunction = function (jsFunctionName) {
    if (HasTDECtrl()) {
        var param = new Array();
        param[0] = jsFunctionName;
        GetTDECtrl().InvokeCmd("CommonOper", "BindGUIEventFunction", param);
    }
};

/*
* 
*
*/
CommonOperAPI.prototype.ShowTool = function (jsonDialog) {
    if (HasTDECtrl()) {
        var param = new Array();
        param[0] = jsonDialog;
        GetTDECtrl().InvokeCmd("CommonOper", "ShowTool", param);
    }
};

/*
* 
*
*/
CommonOperAPI.prototype.ShowDialog = function (jsonDialog) {
    if (HasTDECtrl()) {
        var param = new Array();
        param[0] = jsonDialog;
        GetTDECtrl().InvokeCmd("CommonOper", "ShowDialog", param);
    }
};

/*
* �����ĻͼƬ��ͼ���ã�
*/
CommonOperAPI.prototype.AddCustomImage = function (JSON_Param) {
    if (HasTDECtrl()) {
        var param = new Array();
		param[0] = JSON_Param;
        GetTDECtrl().InvokeCmd("CommonOper", "AddCustomImage", param);
    }
};

/*
* �Ƴ���ĻͼƬ��ͼ���ã�
*/
CommonOperAPI.prototype.RemoveCustomImage = function (name) {
    if (HasTDECtrl()) {
        var param = new Array();
		param[0] = name;
        GetTDECtrl().InvokeCmd("CommonOper", "RemoveCustomImage", param);
    }
};

/*
* ���ó����ĸ�λλ��point��ʽ:"x y z"
*/
CommonOperAPI.prototype.SetProjectedHome = function (point) {
    if (HasTDECtrl()) {
        var param = new Array();
        param[0] = point;
        GetTDECtrl().InvokeCmd("CommonOper", "SetProjectedHome", param);
    }
}

/*
* ���ó������ü�ֵ��
*/
CommonOperAPI.prototype.SetConfig = function (name, val) {
    if (HasTDECtrl()) {
        var param = new Array();
        param[0] = name;
        param[1] = val;
        GetTDECtrl().InvokeCmd("CommonOper", "SetConfig", param);
    }
}

/*
* ��������ģʽ
* @mode �ɴ�ֵ ANAGLYPHIC,HORIZONTAL_SPLIT,VERTICAL_SPLIT
*/
CommonOperAPI.prototype.SetStereoMode = function (mode) {
    if (HasTDECtrl()) {
        var param = new Array();
        param[0] = mode;
        GetTDECtrl().InvokeCmd("CommonOper", "SetStereoMode", param);
    }
}

/*
* ��������
* @mode �ɴ�ֵ ANAGLYPHIC,HORIZONTAL_SPLIT,VERTICAL_SPLIT
*/
CommonOperAPI.prototype.SetWeather = function (mode,density) {
    if (HasTDECtrl()) {
        var param = new Array();
        param[0] = mode;
        param[1] = density;
        GetTDECtrl().InvokeCmd("CommonOper", "SetWeather", param);
    }
}

/*
* ����ȫ��
*/
CommonOperAPI.prototype.SetFullScreen = function () {
    if (HasTDECtrl()) {
        var param = new Array();
        GetTDECtrl().InvokeCmd("HopeMap3DControl", "SetFullScreen", param);
    }
}

/*
* ����ȫ��
*/
CommonOperAPI.prototype.SetDeclutteringOptions = function (style) {
    if (HasTDECtrl()) {
        var param = new Array();
        param[0] = style;
        GetTDECtrl().InvokeCmd("CommonOper", "SetDeclutteringOptions", param);
    }
}

/*
* ��������
*/
CommonOperAPI.prototype.StartTool = function (toolname) {
    if (HasTDECtrl()) {
        var param = new Array();
        param[0] = toolname;
        GetTDECtrl().InvokeCmd("CommonOper", "StartTool", param);
    }
}


/**
* ��ά�Զ���ͼƬ����
*
* @param  VerticalALIGN : top,center,bottom
*		  HorizonALIGN : left,center,right
*		  Mergin : left:0;bottom:0;top:0;right:0
*/
function Hope3DImage() {
    this.Name = "";
    this.Url = "";
    this.HorizonALIGN = "left";
    this.VerticalALIGN = "bottom";
    this.Mergin = "bottom:1";
    this.Height = 0;
    this.Width = 0;
};

Hope3DImage.prototype.Show = function () {
    CommonOpObj.AddCustomImage(JSON.stringify(this));
}

Hope3DImage.prototype.Remove = function () {
    CommonOpObj.RemoveCustomImage(this.Name);
}

/**
* ��ά�ؼ���ʼ��������Ļص�����
*/
function OnHopeMap3DCoreIntialized()
{	
    if (HasTDECtrl())
    {
		onHopeMap3DInitialize();
	}
};



