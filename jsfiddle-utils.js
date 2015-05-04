(function () {
    
    window.log = function(message){
        console.log(message);
        
        // We're only going to log to the body of the page if we have a logger element
        var logger = document.getElementById('log');
        if(logger != null){
            if (typeof message == 'object') {
                logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : String(message)) + '<br />';
            } else {
                logger.innerHTML += message + '<br />';
            }
        }
    };
})();