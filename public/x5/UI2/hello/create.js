define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	

	var Model = function(){
		this.callParent();
	};

	Model.prototype.backBtn1Click = function(event){
		justep.Portal.closeWindow();
	};

	Model.prototype.backBtn2Click = function(event){
		var contents = this.comp('contents');
		contents.to('content1');
	};

	Model.prototype.button1Click = function(event){
		var contents = this.comp('contents');
		contents.to("content2");
	};
	
	Model.prototype.pwd1Change = function(event){
		var PwdTip = $('#pwdtip');
		PwdTip.text("asdasdasd");
		console.log(PwdTip);
		console.dir(PwdTip);
	};

	
	return Model;
});