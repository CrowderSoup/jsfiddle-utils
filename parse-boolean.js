(function () {
	Boolean.prototype.parse = function(val) {
		if(typeof val === "boolean"){
			return val;
		} else if (typeof val === "string") {
			if(isNaN(val)){
				return val.toLowerCase() === "true";
			}
			
			return val >= 1;
		} else if (typeof val === "number") {
			return val >= 1;
		}
		
		return Boolean(val);
	};
})();