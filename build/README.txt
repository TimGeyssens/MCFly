___  ___    ______ _       
|  \/  |    |  ___| |      
| .  . | ___| |_  | |_   _ 
| |\/| |/ __|  _| | | | | |
| |  | | (__| |   | | |_| |
\_|  |_/\___\_|   |_|\__, |
                      __/ |
                     |___/ 
                                                          
This package is proudly presented to you by 
Tim Geyssens (http://nibble.be) 

Still todo after install:

Add the following to your head element
<script src='https://www.google.com/recaptcha/api.js'></script>

And before the closing body element

<script src="https://code.jquery.com/jquery-3.1.0.min.js" integrity="sha256-cCueBR6CsyA4/9szpPfrX3s49M9vUU5BgtiJj06wt/s=" crossorigin="anonymous"></script>
    
<script src="https://ajax.aspnetcdn.com/ajax/jquery.validate/1.13.1/jquery.validate.min.js"></script>
    
<script src="https://ajax.aspnetcdn.com/ajax/mvc/5.2.3/jquery.validate.unobtrusive.min.js"></script>
    
<script src="https://cdn.jsdelivr.net/npm/jquery-ajax-unobtrusive@3.2.4/jquery.unobtrusive-ajax.min.js" type="text/javascript"></script>
@Html.RenderScripts()

You'll probably also want to update the recpatcha appsetting keys in the web.config (since the installed ones only work on localhost)