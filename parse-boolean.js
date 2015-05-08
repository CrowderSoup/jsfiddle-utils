(function () {
    window.parseBoolean = function(val) {
        if (typeof val === "boolean") {
            return val;
        } else if (typeof val === "string") {
            if (!isNaN(val)) {
                return fromNumber(val);
            }
            
            return fromString(val);
        } else if (typeof val === "number") {
            return fromNumber(val);
        }
        
        return Boolean(val);
    };
    
    var fromNumber = function (val) {
        return !!val;
    };
    
    var fromString = function (val) {
        return !(val.toLowerCase() === "false");
    };
})();