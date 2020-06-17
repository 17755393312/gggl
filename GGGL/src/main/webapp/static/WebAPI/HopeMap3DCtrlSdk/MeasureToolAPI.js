/**   
 * @fileOverview ��ά�ؼ����⹤�߽ӿ�   
 * @author <a href="http://www.ecitychina.com/">EcityCyber</a>   
 * @version 1.0 
 */
 
/**
 * ��ά���⹤�߲����ӿ�
 */
function MeasureToolAPI()
{
};

/**
 * ��ά���⹤�߲�������
 */
var MTOpObj = new MeasureToolAPI();

/**
 * ������ɫ��������ɫ������ɫ�������ɫ
 */
MeasureToolAPI.prototype.SetColor = function(textColor, lineColor, fillColor)
{

};

/**
 * �������
 */
MeasureToolAPI.prototype.MeasureDistacne = function()
{
	if (HasTDECtrl())
    {
        var param = new Array();
        return GetTDECtrl().InvokeCmd("MeasureToolOper", "MeasureDistacne", param);
    }
};

/**
 * �������
 */
MeasureToolAPI.prototype.MeasureArea = function()
{
    if (HasTDECtrl()) {
        var param = new Array();
        return GetTDECtrl().InvokeCmd("MeasureToolOper", "MeasureArea", param);
    }
};

MeasureToolAPI.prototype.MeasureHorLine = function()
{
    if (HasTDECtrl()) {
        var param = new Array();
        return GetTDECtrl().InvokeCmd("MeasureToolOper", "MeasureHor", param);
    }
};

MeasureToolAPI.prototype.MeasureVerLine = function()
{
    if (HasTDECtrl()) {
        var param = new Array();
        return GetTDECtrl().InvokeCmd("MeasureToolOper", "MeasureVer", param);
    }
};

MeasureToolAPI.prototype.MeasureBeeLine = function()
{
    if (HasTDECtrl()) {
        var param = new Array();
        return GetTDECtrl().InvokeCmd("MeasureToolOper", "MeasureBeeline", param);
    }
};

/**
 * ��������
 */
MeasureToolAPI.prototype.EndMeasure = function()
{
	var param = new Array();
	return GetTDECtrl().InvokeCmd("MeasureToolOper", "EndMeasure", param);
};

