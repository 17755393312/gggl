/**   
 * @fileOverview ��ά�ؼ�ʸ����ͼ�ӿ�   
 * @author <a href="http://www.ecitychina.com/">EcityCyber</a>   
 * @version 1.0 
 */
 
/**
 * ��άʸ����ͼ�����ӿ�
 */

function VectorDrawAPI()
{
};

/**
 *
 * ��άʸ����ͼ��������
 */
var VectorDrawOpObj = new VectorDrawAPI();

/**
*   ����ʱʸ��ͼ����Ӷ���
*   ��������Hope3DVector����
*/
VectorDrawAPI.prototype.Add = function(geomJson)
{
    if (HasTDECtrl())
    {
        var param = new Array();
        param[0] = geomJson;
       
        return GetTDECtrl().InvokeCmd("VectorOper", "Add", param);
    }
};

VectorDrawAPI.prototype.StartDrawVector = function (hope3dLabel, callback) {
    if (HasTDECtrl()) {
        var param = new Array();
        param[0] = hope3dLabel;
        param[1] = callback;
        return GetTDECtrl().InvokeCmd("VectorOper", "StartDrawVector", param);
    }
};

/**
 * ��ʼ����ͼ��
 *
 * @param name
 *      ʸ��ͼ����
 * @param type
 *      ʸ��ͼ�����ͣ�������<code>lines, rectangle, ellipse, polygon, circle, point</code>
 * @param bdColor 
 *      ͼ�α߽���ɫ
 * @param fillColor 
 *      ͼ�������ɫ(��������Ч)
 * @param opacity
 *      ͸����
 * @param lineWidth 
 *      �߿�
 * @param lineStyle 
 *      ���Σ�������<code>solid, dash, dot, dashdot��dashdotdot</code>
 * @param isTemp
 *      �Ƿ�Ϊ��ʱͼ��(RemoveTemp()�����Ƿ������Ӱ��)
 * @param isContinue
 *      �Ƿ�Ϊ��������
 * @param callback
 *      �ص�������������ɺ󱻵���
 *      �ú�������������������
 *      ��һ����������������ͼ�ε�����
 *      �ڶ�����������������ͼ�ε�����
 *      ��������������������ͼ�εļ�����Ϣ
 *      ������Ϣ<br>
 *      <li>�߶���Ϣ��ʽ��<br>
 *      <code>x1,y1|x2,y2|...</code>
 *      <li>������Ϣ��ʽ��<br>
 *      <code>minx,miny,maxx,maxy</code>
 *      <li>��Բ��Ϣ��ʽ��<br>
 *      <code>minx,miny,maxx,maxy</code>
 *      <li>�������Ϣ��ʽ��<br>
 *      <code>x1,y1|x2,y2|...</code>
 *      <li>Բ����Ϣ��ʽ��<br>
 *      <code>minx,miny,maxx,maxy</code>
 *      <li>����Ϣ��ʽ<br>
 *      <code>x,y</code>
 */
VectorDrawAPI.prototype.StartDraw = function(name, type, bdColor, fillColor, opacity, lineWidth, lineStyle, isContinue, isTemp, callback)
{
    if (HasTDECtrl())
    {
        var param = new Array();
        param[0] = name;
        param[1] = type;
        param[2] = bdColor;
        param[3] = fillColor;
        param[4] = opacity;
        param[5] = lineWidth;
        param[6] = lineStyle;
        param[7] = isTemp;
        param[8] = isContinue;
        param[9] = callback;
        return GetTDECtrl().InvokeCmd("VectorOper", "StartDraw", param);
    }
};

/**
 * ��������
 *
 * �ú�������ֹ���ڽ��еĻ��Ʋ���
 */
VectorDrawAPI.prototype.EndDraw = function()
{
    if (HasTDECtrl())
    {
		var param = new Array();
        return GetTDECtrl().InvokeCmd("VectorOper", "EndDraw", param);
    }
};

/**
 * �������
 *
 * �ú�����������л��ƵĶ���
 */
VectorDrawAPI.prototype.ClearDraw = function()
{
    if (HasTDECtrl())
    {
		var param = new Array();
        return GetTDECtrl().InvokeCmd("VectorOper", "ClearDraw", param);
    }
};

/**
 * �������
 *
 * �����ʱͼ�������ʸ������
 */
VectorDrawAPI.prototype.RemoveAll = function()
{
    if (HasTDECtrl())
    {
		var param = new Array();
        return GetTDECtrl().InvokeCmd("VectorOper", "RemoveAll", param);
    }
};

VectorDrawAPI.prototype.AddVector = function (vectorJSON) {
    if (HasTDECtrl()) {
        var param = new Array();
        param[0] = vectorJSON;
        return GetTDECtrl().InvokeCmd("VectorOper", "AddVector", param);
    }
};

VectorDrawAPI.prototype.RemoveVector = function (vectorID, layerID) {
    if (HasTDECtrl()) {
        var param = new Array();
        param[0] = vectorID;
        param[1] = layerID;
        return GetTDECtrl().InvokeCmd("VectorOper", "RemoveVector", param);
    }
};

VectorDrawAPI.prototype.RemoveAllVector = function (layerID) {
    if (HasTDECtrl()) {
        var param = new Array();
        param[0] = layerID;
        return GetTDECtrl().InvokeCmd("VectorOper", "RemoveAllVector", param);
    }
};

VectorDrawAPI.prototype.GetTempVectorLayer = function () {
    if (HasTDECtrl()) {
        var param = new Array();
        return GetTDECtrl().InvokeCmd("VectorOper", "GetTempVectorLayer", param);
    }
};

VectorDrawAPI.prototype.CreateVectorLayer = function (layerID,layerName) {
    if (HasTDECtrl()) {
        var param = new Array();
        param[0] = layerID;
        param[1] = layerName;
        return GetTDECtrl().InvokeCmd("VectorOper", "CreateVectorLayer", param);
    }
};



/**
* ��άʸ������
*
* @param GeomΪJSON��ʽ�ļ����ַ���
*/
function Hope3DVector() {
    this.VecotorID = "";
    this.LayerID = "";
    this.Geom = "";
    this.LineColor = 0xFFFF00FF;
    this.FillColor = 0x00333366;
    this.LineWidth = 1.0;
    this.OffsetHeight = 0.0;
    this.Stipple = 0;
};

Hope3DVector.prototype.Show = function () {
    this.VecotorID = VectorDrawOpObj.AddVector(JSON.stringify(this));
}

Hope3DVector.prototype.Remove = function () {
    VectorDrawOpObj.RemoveVector(this.VecotorID, this.LayerID);
}

Hope3DVector.prototype.StartDraw = function (callback) {
    VectorDrawOpObj.StartDrawVector(JSON.stringify(this), callback);
}