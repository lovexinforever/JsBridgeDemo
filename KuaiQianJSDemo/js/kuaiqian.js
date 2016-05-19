 (function() {
  var sendMessageList = [];
  var receiveMesssageList = [];
  
  var callbacks = {};
  var uniqueId = 1;
  
  var messagingIframe;
    
  var isSafe = true;
  
  function init(config) {

  };
  
  function _setSafe(safe) {
    isSafe =  safe;
  };
  
  function _createQueueReadyIframe(doc) {
    messagingIframe = doc.createElement('iframe');
    messagingIframe.style.display = 'none';
    doc.documentElement.appendChild(messagingIframe);
  };
  
  function _notifyMessageSent() {
    if (isSafe) {
      _jsBridge.notifyMessageSent();
    } else {
      messagingIframe.src = PROTOCOL + 'notifyMessageSent';
    }
  };
  
  function _sendMessage(messageString) {
    if (isSafe) {
      _jsBridge.sendMessage(messageString);
    } else {
      messagingIframe.src = PROTOCOL + 'sendMessage/' + messageString;
    }
  };
  
  function sendMessage(functionName, params) {
    console.log('sendMessage');
    var deviceType = getDeviceType();
    if ("android" == deviceType){
      var message = {
        functionName: functionName,
        params: params,
      };
        if (params.success) {
            console.log(params.success);
            var callbackId = 'cb_' + (uniqueId++) + '_' + new Date().getTime();
            callbacks[callbackId] = params.success;
            message.params.successCallbackId = callbackId;
        }
        if (params.error) {
            console.log(params.error);
            var callbackId = 'cb_' + (uniqueId++) + '_' + new Date().getTime();
            callbacks[callbackId] = params.error;
            message.params.errorCallbackId = callbackId;
        }
        _sendMessage(JSON.stringify(message));
    }else if("iOS" == deviceType){
      var successCallBackId;
      var errorCallBackId;

      if (params.success) {
          successCallBackId = 'cb_' + (uniqueId++) + '_' + new Date().getTime();
          callbacks[successCallBackId] = params.success;
      }
  
      if (params.error) {
          errorCallBackId = 'cb_' + (uniqueId++) + '_' + new Date().getTime();
          callbacks[errorCallBackId] = params.error;
      }
      var paramString = JSON.stringify(params);
      var schemeParam = {paramJson:paramString,"successCallbackId":successCallBackId,"errorCallBackId":errorCallBackId}
      var schemeParamStr = JSON.stringify(schemeParam);
      window.location.href = "bill99app://kuaiqianbao/"+functionName+"?"+schemeParamStr;
    }

  };
  
  function _fetchMessages() {
    console.log('_fetchMessages');
    var messageString = JSON.stringify(sendMessageList);
    sendMessageList = [];

    _sendMessage(messageString);
  };
  
  function _callback(msg) {
    console.log('_callback');
    var message = JSON.parse(msg);
    callback = callbacks[message.callbackId];
    if (callback) {
      console.log(callback);
      callback(message.result);
    }

    delete callbacks[message.callbackId];
  };
  
  function getMsg(params) {
    var paramsJson = {
      name: params.name
    };

    sendMessage('getMsg', paramsJson);
  };
  
  function getDeviceType(){

    var u = navigator.userAgent;
    if(u.indexOf('Android') > -1 || u.indexOf('Linux') > -1){
      return "android";
    }else if(u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1){
      return "iOS";
    }
    return "android";
  };
  
  function appCallBack(message) {
      console.log('iOSCallback');
      callback = callbacks[message.callbackId];
      if (callback) {        
        callback(message);
      }
      delete callbacks[message.callbackId];
  };
  
  function showMessage(paramJson){
      sendMessage('showToast', paramJson);
  };
  
  function kuaiqianPay(paramJson){
      sendMessage('pay', paramJson);
  };
  
  function Bill99appPayResult(paramJson){
    if(paramJson.isSuccess){
      formSubmitProcess(paramJson.payTypeDesc,"111");
    }else{
      formSubmitProcess(paramJson.payTypeDesc,"112");
    }
  };
  
  function applyWandaCard(){
    sendMessage('applyWandaCard','', '');
  };
  
  function wandaMoviePay(paramJson){
    sendMessage('wandaMoviePay',paramJson);
  };
  
  function wandaMovieGoback(){
    sendMessage('wandaMovieGoback','', '');
  };
  
  function wandaMovieBackBtn(paramJson){
    sendMessage('wandaMovieBackBtn',paramJson);
  };
  
  function kuaiqianShare(paramJson){
    sendMessage('share',paramJson);
  };
  
  function creditGoback(){
    sendMessage('creditGoback','', '');
  };
  
  function loadGoback(){
    sendMessage('goback','', '');
  };
  
  function camera(){
    sendMessage('camera','', '');
  };
  
  function openNativeBusiness(paramJson){
    sendMessage('openBusinessHome',paramJson);
  };
  
  function applyKuaiYiHua(){
    sendMessage('applyKuaiYiHua','', '');
  };
  
  function openNewPage(paramJson){
    sendMessage('openNewPage',paramJson);
  };
  
  function faceVerify(paramsJson) {
  sendMessage('faceVerify', paramsJson);
  };
  
  function navigationBarMenu(paramsJson){
	 sendMessage('navigationBarMenu', paramsJson); 
  }
  function getIPAddress(paramsJson) {
  sendMessage('getIPAddress', paramsJson);
  };
  
  function getDeviceId(paramsJson) {
  sendMessage('getDeviceId', paramsJson);
  };
  
  function getGeoPosition(paramsJson) {
  sendMessage('getGeoPosition', paramsJson);
  };
  
  function tel(paramsJson) {
  sendMessage('tel', paramsJson);
  };
  function openNewPage(paramJson){
	  sendMessage('openNewPage',paramJson);
  }
  function pay(paramJson){
	  sendMessage('pay',paramJson);
  }
  function openBusinessHome(paramJson){
	  sendMessage('openBusinessHome',paramJson);
  }
  function applyKuaiYiHua(paramJson){
	  sendMessage('applyKuaiYiHua',paramJson);
  }
  function setPageTitle(paramJson){
	  sendMessage('setPageTitle',paramJson);
  }
  function getAccessToken(paramJson){
	  sendMessage('getAccessToken',paramJson);
  }
  function goback(paramJson){
	  sendMessage('goback',paramJson);
  }
  function getContacts(paramJson){
	  sendMessage('getContacts',paramJson);
  }
  function share(paramJson){
	  sendMessage('share',paramJson);
  }
  
  var kuaiqian = window.kuaiqian = {
    init: init,
    getMsg: getMsg,
    showMessage:showMessage,
    openNewPage:openNewPage,
    applyKuaiYiHua:applyKuaiYiHua,
    openNativeBusiness:openNativeBusiness,
    camera:camera,
    loadGoback:loadGoback,
    creditGoback:creditGoback,
    kuaiqianShare:kuaiqianShare,
    wandaMovieGoback:wandaMovieGoback,
    wandaMovieBackBtn:wandaMovieBackBtn,
    wandaMoviePay:wandaMoviePay,
    applyWandaCard:applyWandaCard,
    kuaiqianPay:kuaiqianPay,
    Bill99appPayResult:Bill99appPayResult,
    appCallBack:appCallBack,
    faceVerify:faceVerify,
    getIPAddress:getIPAddress,
    getDeviceId:getDeviceId,
    getGeoPosition:getGeoPosition,
    tel:tel,
	openNewPage:openNewPage,
	pay:pay,
	openBusinessHome:openBusinessHome,
	applyKuaiYiHua:applyKuaiYiHua,
	setPageTitle:setPageTitle,
	getAccessToken:getAccessToken,
	navigationBarMenu:navigationBarMenu,
	goback:goback,
	getContacts:getContacts,
	share:share
  };
  
  
  var _kuaiqian = window._kuaiqian = {
    _fetchMessages: _fetchMessages,
    _callback: _callback,
    _setSafe: _setSafe
  };
  var doc = document;
  _createQueueReadyIframe(doc);
  var readyEvent = doc.createEvent('Events');
  readyEvent.initEvent('kuaiqianReady');
  readyEvent.bridge = kuaiqian;
  doc.dispatchEvent(readyEvent);
  
  console.log('Initialized!');
})();