define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var Model = function(){
		this.callParent();
	};
	
	Model.prototype.SearchBt = function(){
		$.ajax({
			url : '/',
			type : 'POST',
			data : {
				name : 'iverson',
				age : 12
			},
			success : function(data){
				alert(data);
			}
		});
	};


	return Model;
});