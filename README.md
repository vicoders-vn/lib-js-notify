#Note: The plugin dependencies jquery, fontawesome.
## If you use webpack, please add these code to webpack.config.js
```
plugins: [
    new webpack.ProvidePlugin({
       $: "jquery",
       jQuery: "jquery"
   })
]
```

## Usage:

### Add CSS file
```
<link rel="stylesheet" type="text/css" href="./node_modules/vicoders-notify/assets/css/notify.css">
```

### Parameters
```
function notify(type, content, time, scroll_top, close_callback) { }
```

### type
#### String. Default: success
#### Type of notify

### content 
String.
Content of notify

### time
Integer. Default: infinite
Time auto hide of notify

### scroll_top
Boolean. Default: false

### close_callback
Function

### To call a success notify
```
import { notify } from '../node_modules/vicoders-notify/assets/notify.js';
$(document).ready(function() {
	notify('success', 'Successfully!');
});
``` 

### Or you can call a warning notify with timeout is 5 seconds
```
$(document).ready(function() {
	notify('warning', 'Warning!', 5000);
});
```