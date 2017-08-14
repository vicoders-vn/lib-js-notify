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