(function () {
    var logger = document.getElementById('log');
    
    window.log = function(message){
        console.log(message);
        if (typeof message == 'object') {
            logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : String(message)) + '<br />';
        } else {
            logger.innerHTML += message + '<br />';
        }
    };
})();