/**   
 * @fileOverview ��ά�ؼ���ά��ע�����ӿ�   
 * @author <a href="http://www.ecitychina.com/">EcityCyber</a>   
 * @version 1.0 
 */
 
/**
 * ��ά��ע�����ӿ�
 */
function LabelAPI()
{
};

/**
 * ��ά��ע��������
 */
var LabelOpObj = new LabelAPI();

/**
 * ��� ��ע
 *
 * @param Label_JSON
 *      ������ע�Ĳ���,����Hope3DLabel
 * @return 
 *      ���ش�����ע��Identify
 */
LabelAPI.prototype.AddLabel = function(Label_JSON)
{
    if (HasTDECtrl())
    {
        var param = new Array();
        param[0] = Label_JSON;
        return GetTDECtrl().InvokeCmd("LabelOper", "AddLabel", param);
    }
};

/**
 * �Ƴ�
 */
LabelAPI.prototype.RemoveLabel = function (name, layerID)
{
    if (HasTDECtrl())
    {
        var param = new Array();
        param[0] = name;
        param[1] = layerID;
        return GetTDECtrl().InvokeCmd("LabelOper", "RemoveLabel", param);
    }
};

/**
 * ע����Ч
 */
LabelAPI.prototype.SetLabelEffect = function (name, layerID,effectStyle) {
    if (HasTDECtrl()) {
        var param = new Array();
        param[0] = name;
        param[1] = layerID;
        param[2] = effectStyle;
        return GetTDECtrl().InvokeCmd("LabelOper", "SetLabelEffect", param);
    }
}


/**
* �Ƴ�ͼ�����ж���
*/
LabelAPI.prototype.RemoveAll = function (layerID) {
    if (HasTDECtrl()) {
        var param = new Array();
        param[0] = layerID;
        return GetTDECtrl().InvokeCmd("LabelOper", "RemoveAll", param);
    }
};

/**
 * ����ע��ͼ��
 */
LabelAPI.prototype.CreateLayer = function(Layer_JSON)
{
    if (HasTDECtrl())
    {
        var param = new Array();
		param[0] = Layer_JSON;
        return GetTDECtrl().InvokeCmd("LabelOper", "CreateLayer", param);
    }
};

/**
 * ��ȡ��ʱע��ͼ��
 */
LabelAPI.prototype.GetTempLayer = function()
{
    if (HasTDECtrl())
    {
        var param = new Array();
        return GetTDECtrl().InvokeCmd("LabelOper", "GetTempLayer", param);
    }
};

// ToolTip
/**
 * ���Tooltip
 * �ú������Զ�����ToolTip��λ��
 * �����Ҫ�ֶ����ƣ���ʹ�� SetToolTipPos����
 *
 * @param x,y,z
 *      ToolTipָ�����ά��
 * @bdColor
 *      �߿���ɫ
 * @param width,height
 *      ToolTip�ĸ߿�
 * @return 
 *      ����ToolTip������
 */
LabelAPI.prototype.AddToolTip = function(JSON_XYZ)
{
    if (HasTDECtrl())
    {
        var param = new Array();
        param[0] = JSON_XYZ;
        return GetTDECtrl().InvokeCmd("LabelOper", "AddToolTip", param);
    }
}

LabelAPI.prototype.HideToolTip = function () {
    if (HasTDECtrl()) {
        var param = new Array();
        return GetTDECtrl().InvokeCmd("LabelOper", "HideToolTip", param);
    }
}

/**
* ��ά��ע����
*
* @param Type��TextAndIcon,Bubble
*/
function Hope3DLabel() {
    this.LabelID = "";
    this.LayerID = "";
    this.Text = "";
    this.Url = "";
    this.Type = "TextAndIcon";
    this.OffsetX = 0;
    this.OffsetY = 0;
    this.OffsetZ = 0;
    this.Scale = 1.0;
    this.FontSize = 12;
    this.Opacity = 0.8;
    this.FontColor = 0xFFFFFFFF;
    this.BorderColor = 0x000000FF;
    this.BackGroundColor = 0xFFFFFFFF;
    this.VisibleDistance = 5000;
    this.BubbleTipStyle = "bw:1.2;aw:20;ah:40;cr:8"; //[bw]border width,[aw]arrow width,[ah]arraow heigth,[cr]corner radius
};

Hope3DLabel.prototype.Show = function () {
    this.LabelID = LabelOpObj.AddLabel(JSON.stringify(this));
}

Hope3DLabel.prototype.Remove = function () {
    LabelOpObj.RemoveLabel(this.LabelID, this.LayerID);
}

Hope3DLabel.prototype.HighLight = function () {
    LabelOpObj.SetLabelEffect(this.LabelID, this.LayerID, "effect:scale-animation;loop:2;");
}