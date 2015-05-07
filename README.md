# jsutils
Just a few JavaScript utils that I write to make my life easier or generally
just have fun.

## jsfiddle-utils.js
Some stuff that makes life easier when using [JSFiddle](https://jsfiddle.net).

### log(_message_)
This function logs things to the console using `console.log()`. It also spits 
things out to the "Results" pane in JSFiddle when you include a `div` in your
HTML with an ID of `log`, like so

```
<div id="log"></div>
```

This makes working with scripts that don't manipulate the DOM in any way easier.

## parse-boolean
This module adds a function (`parseBoolean`) to the global scope.

### parseBoolean(_value_)
This function will take any value and attempt to convert it to a `boolean`.
The folly in trying to convert values to `boolean` is that it's generally 
pretty error prone. This function give you the most basic functionality,
nothing more.

**Things to remember**
- Strings are converted to lower case
- if a value isn't a boolean, string, or number we'll return it's 
"truthy"/"falsey" value (objects are true, always)

Examples ([jsFiddle](http://jsfiddle.net/CrowderSoup/5fywj34f/2/)):
```
(function() {
    var shouldBeABool = [
        "true",   // true
        "test",   // true
        "false",  // false
        "1",      // true
        "0",      // false
        "2",      // true
        1,        // true
        0,        // false
        2,        // true
        {},       // true
        [],       // true
        true,     // true
        false,    // false
        function() { return true; }, // true
        function() { return false; } // true
    ];
        
    for(var i = 0; i < shouldBeABool.length; i++){
        var val = shouldBeABool[i];
        log("(" + (typeof val) + ") " + val + ": " + parseBoolean(val));
    }
})();
```

Some surprising things:
- Any string that doesn't equal "false" will be true
- A function, even if it returns `false`, will be true.