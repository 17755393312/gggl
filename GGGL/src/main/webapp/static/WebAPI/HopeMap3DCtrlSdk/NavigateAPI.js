/**   
 * @fileOverview ��ά�ؼ������ӿ�   
 * @author <a href="http://www.ecitychina.com/">EcityCyber</a>   
 * @version 1.0 
 */
 
/**
 * �����ӿ�
 */
function NavigateAPI()
{
};

/**
 * ������������
 */
var NaviOpObj = new NavigateAPI();


/**
 * ���õ�ǰ���ӵ���Ϣ ...�̣߳����룬��λ�ǣ��߶Ƚ�
 */
NavigateAPI.prototype.SetViewPoint = function(x, y, z, heading_deg, pitch_deg, range, duration)
{
    if (HasTDECtrl())
    {
        var param = new Array();
        param[0] = x;
        param[1] = y;
        param[2] = z;
        param[3] = heading_deg;
        param[4] = pitch_deg;
        param[5] = range;
        param[6] = duration;
        return GetTDECtrl().InvokeCmd("NaviOper", "SetViewInfo", param);
    }
};



/**
 * ��ȡ��ǰ���ӵ���Ϣ����ע��x����ע��y����ע��z����λ�ǣ��߶Ƚǣ��������۲��ľ���
 *	��λ������Ϊ0�� ��������Ϊ90�ȣ���180����270
 *  �߶Ƚ�ˮƽ��ǰΪ0�ȣ��������¿�Ϊ-90��,�������Ϊ90��,���ڳ���������Ⲣ��һ��������90�ȿ����
 */
 
NavigateAPI.prototype.GetViewPoint = function()
{
    if (HasTDECtrl())
    {
        var param = new Array();
		
        var result = GetTDECtrl().InvokeCmd("NaviOper", "GetViewInfo", param);
		
		//alert(result);
		
		param = result.split(",");
		
		return param;
    }
};

/**
 * ·������
 *	
 */
NavigateAPI.prototype.ShowTravelTool = function()
{
    if (HasTDECtrl())
    {
        var param = new Array();
		
        return GetTDECtrl().InvokeCmd("NaviOper", "ShowTravelTool", param);
    }
};

/**
 * ·������
 *	
 */
NavigateAPI.prototype.CreateTravel = function()
{
    if (HasTDECtrl())
    {
        var param = new Array();
		
        return GetTDECtrl().InvokeCmd("NaviOper", "CreateTravel", param);
    }
};

/**
 * ·������
 *	
 */
NavigateAPI.prototype.AddPathPoint = function(x,y,z)
{
    if (HasTDECtrl())
    {
        var param = new Array();
		param[0] = x;
		param[1] = y;
		param[2] = z;
        return GetTDECtrl().InvokeCmd("NaviOper", "AddPathPoint", param);
    }
};

/**
 * ·������
 *	
 */
NavigateAPI.prototype.StartStravel = function()
{
    if (HasTDECtrl())
    {
        var param = new Array();
		
        return GetTDECtrl().InvokeCmd("NaviOper", "StartStravel", param);
    }
};

/**
 * ·������
 *	
 */
NavigateAPI.prototype.EndStravel = function()
{
    if (HasTDECtrl())
    {
        var param = new Array();
		
        return GetTDECtrl().InvokeCmd("NaviOper", "EndStravel", param);
    }
};

/**
 * �����ٶ�
 *	
 */
NavigateAPI.prototype.SetSpeed = function(speed)
{
    if (HasTDECtrl())
    {
        var param = new Array();
		param[0] = speed;
        return GetTDECtrl().InvokeCmd("NaviOper", "SetSpeed", param);
    }
};

/**
 * ���ý������
 *	
 */
NavigateAPI.prototype.SetRange = function(range)
{
    if (HasTDECtrl())
    {
        var param = new Array();
		param[0] = range;
        return GetTDECtrl().InvokeCmd("NaviOper", "SetRange", param);
    }
};


/**
* �����ӽǸ���
*	
*/
NavigateAPI.prototype.SetAutoTravel = function (isOpen) {
    if (HasTDECtrl()) {
        var param = new Array();
        param[0] = isOpen;
        return GetTDECtrl().InvokeCmd("NaviOper", "SetAutoTravel", param);
    }
};

/**
* �������ι��̵ĸ�����
*	
*/
NavigateAPI.prototype.SetConstantTile = function (isOpen,angle) {
    if (HasTDECtrl()) {
        var param = new Array();
        param[0] = isOpen;
        param[1] = angle;
        return GetTDECtrl().InvokeCmd("NaviOper", "SetTilt", param);
    }
};

/**
 * ·���Ƿ����
 *	
 */
NavigateAPI.prototype.RouteVisible = function(visible)
{
    if (HasTDECtrl())
    {
        var param = new Array();
		param[0] = visible;
        return GetTDECtrl().InvokeCmd("NaviOper", "RouteVisible", param);
    }
};

/**
 * ���ó���λ���ƶ��¼��ص�����
 *	
 */
NavigateAPI.prototype.RegisterOnMoveEvent = function(callback)
{
    if (HasTDECtrl())
    {
        var param = new Array();
		param[0] = callback;
        return GetTDECtrl().InvokeCmd("NaviOper", "RegisterOnMoveEvent", param);
    }
};

/**
* ���ó���λ���ƶ��¼��ص�����
*	
*/
NavigateAPI.prototype.RegisterOnMoveEvent = function (callback) {
    if (HasTDECtrl()) {
        var param = new Array();
        param[0] = callback;
        return GetTDECtrl().InvokeCmd("NaviOper", "RegisterOnMoveEvent", param);
    }
};

/**
* ���ó����л�ƽ�桢����Ļص�����
*	
*/
NavigateAPI.prototype.RegisterOnChangeSceneEvent = function (callback)
{
    if (HasTDECtrl())
    {
        var param = new Array();
        param[0] = callback;
        return GetTDECtrl().InvokeCmd("NaviOper", "RegisterOnChangeSceneEvent", param);
    }
};

NavigateAPI.prototype.SetPlanePlayer = function()
{
    if (HasTDECtrl())
    {
        var param = new Array();
        return GetTDECtrl().InvokeCmd("NaviOper", "SetPlanePlayer", param);
    }
};

NavigateAPI.prototype.SetPersonPlayer = function()
{
    if (HasTDECtrl())
    {
        var param = new Array();
        return GetTDECtrl().InvokeCmd("NaviOper", "SetPersonPlayer", param);
    }
};

/**
 * ��ͣ
 *	
 */
NavigateAPI.prototype.PauseTravel = function()
{
    if (HasTDECtrl())
    {
        var param = new Array();

        return GetTDECtrl().InvokeCmd("NaviOper", "PauseTravel", param);
    }
};

/**
 * ����
 *	
 */
NavigateAPI.prototype.ResumeTravel = function()
{
    if (HasTDECtrl())
    {
        var param = new Array();
		
        return GetTDECtrl().InvokeCmd("NaviOper", "ResumeTravel", param);
    }
};

/**
 * ģ���Ƿ����
 *	
 */
NavigateAPI.prototype.SetModelVisible = function(visible)
{
    if (HasTDECtrl())
    {
        var param = new Array();
		param[0] = visible;
        return GetTDECtrl().InvokeCmd("NaviOper", "SetModelVisible", param);
    }
};

/**
 * ����ͼ��
 *	
 */
NavigateAPI.prototype.AddLabel = function(x,y,z,text,icon)
{
    if (HasTDECtrl())
    {
        var param = new Array();
		param[0] = x;
		param[1] = y;
		param[2] = z;
		param[3] = text;
		param[4] = icon;
        return GetTDECtrl().InvokeCmd("NaviOper", "AddLabel", param);
    }
};

/**
 * ����ͼ��
 *	
 */
NavigateAPI.prototype.RemoveAllLabel = function()
{
    if (HasTDECtrl())
    {
        var param = new Array();

        return GetTDECtrl().InvokeCmd("NaviOper", "RemoveAllLabel", param);
    }
};

/**
* �����������
*	
*/
NavigateAPI.prototype.SetUnderGroundView = function (height) {
    if (HasTDECtrl()) {
        var param = new Array();
        param[0] = height;
        return GetTDECtrl().InvokeCmd("NaviOper", "SetUnderGroundView", param);
    }
};

/**
* �رյ������
*	
*/
NavigateAPI.prototype.CloseUnderGroundView = function () {
    if (HasTDECtrl()) {
        var param = new Array();
        param[0] = "0";
        return GetTDECtrl().InvokeCmd("NaviOper", "SetUnderGroundView", param);
    }
};

/**
* ����ģ��
*	
*/
NavigateAPI.prototype.TraceFeature = function (featureID,layerID) {
    if (HasTDECtrl()) {
        var param = new Array();
        param[0] = featureID;
        param[1] = layerID;

        return GetTDECtrl().InvokeCmd("NaviOper", "TraceFeature", param);
    }
};

/**
* ֹͣ����ģ��
*	
*/
NavigateAPI.prototype.EndTrace = function () {
    if (HasTDECtrl()) {
        var param = new Array();
        return GetTDECtrl().InvokeCmd("NaviOper", "EndTrace", param);
    }
};

/**
* ���÷�Χ�¼��ص�����(�����ģ���ߵ�ĳ����Χ�ڴ������¼�)
*	
*/
NavigateAPI.prototype.SetRegionEventCallback = function (jsFunc) {
    if (HasTDECtrl()) {
        var param = new Array();
        param[0] = jsFunc;
        return GetTDECtrl().InvokeCmd("NaviOper", "SetRegionEventCallback", param);
    }
};


/**
* ��ӷ�Χ�¼�(�����ģ���ߵ�ĳ����Χ�ڴ������¼�)
*	
*/
NavigateAPI.prototype.AddRegionEvent = function (regionObj) {
    if (HasTDECtrl()) {
        var param = new Array();
        param[0] = regionObj;
        return GetTDECtrl().InvokeCmd("NaviOper", "AddRegionEvent", param);
    }
};
