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
	
	var firstPwd = "";
	
	var pwdfn = function(obj){
		if(isNaN(obj.val())){
			obj.val('');
			return;
		}
		
		var pwd1 = this.comp("pwd1").$domNode,
			pwd2 = this.comp("pwd2").$domNode,
			pwd3 = this.comp("pwd3").$domNode,
			pwd4 = this.comp("pwd4").$domNode;
			
		var goon = this.comp("goon");
		
		
		if(pwd1.val().trim() != '' && pwd2.val().trim() != '' && pwd3.val().trim() != '' && pwd4.val().trim() != ''){
			goon.set({disabled:false});
		}else{
			goon.set({disabled:true});
		}
	};
	

	
	
	Model.prototype.pwd1Keyup = function(event){
		pwdfn.call(this, this.comp("pwd1").$domNode);
	};

	
	Model.prototype.pwd2Keyup = function(event){
		pwdfn.call(this, this.comp("pwd2").$domNode);
	};


	Model.prototype.pwd3Keyup = function(event){
		pwdfn.call(this, this.comp("pwd3").$domNode);
	};


	Model.prototype.pwd4Keyup = function(event){
		pwdfn.call(this, this.comp("pwd4").$domNode);
	};

	
	Model.prototype.button2Click = function(event){
		var contents = this.comp('contents');
		contents.to('content1');
	};

	
	Model.prototype.goonClick = function(event){
		var pwd1 = this.comp("pwd1").$domNode,
			pwd2 = this.comp("pwd2").$domNode,
			pwd3 = this.comp("pwd3").$domNode,
			pwd4 = this.comp("pwd4").$domNode;
			
		var goon = this.comp("goon");
			
		if(firstPwd == ""){
			firstPwd = pwd1.val().trim() + pwd2.val().trim() + pwd3.val().trim() + pwd4.val().trim();
			pwd1.val('');
			pwd2.val('');
			pwd3.val('');
			pwd4.val('');
			goon.set({disabled:true, label : "再输一次"});
		}else{
			goon.set({disabled:true, label : "保存中..."});
			var secondPwd = pwd1.val().trim() + pwd2.val().trim() + pwd3.val().trim() + pwd4.val().trim();
			if(firstPwd == secondPwd){
				var circle = this.comp("CircleName").$domNode;
				$.ajax({
					url : '/',
					type : 'POST',
					data : {
						name : circle.val().trim(),
						pwd : secondPwd
					},
					success : function(data){
						alert(data);
					}
				});
			}else{
				alert("两次密码输入不一致，重新输入");
				firstPwd = '';
				pwd1.val('');
				pwd2.val('');
				pwd3.val('');
				pwd4.val('');
				goon.set({disabled:true, label : "继续"});
			}
			
		}

	};

	
	Model.prototype.CircleNameKeyup = function(event){
		var self = this.comp("CircleName").$domNode;
		var button1 = this.comp("button1");

		var val = self.val().trim();
		if(val.length > 2){
			button1.set({disabled:false});
		}else{
			button1.set({disabled:true});
		}
	};

	
	return Model;
});