(function () {  
  'use strict';
    function addCustomActions() {  
      try {
        var clientContext, site, userCustomActions, newUserCustomAction;
        
            clientContext = new SP.ClientContext();    
            site = clientContext.get_web();
            userCustomActions = site.get_userCustomActions();
        
        newUserCustomAction = userCustomActions.add(); 
        newUserCustomAction.set_location('ScriptLink');
        newUserCustomAction.set_scriptSrc('~Site/SiteAssets/hide field.js'); //edit here: path to script  
        newUserCustomAction.set_sequence(10);       
        newUserCustomAction.set_title('HideField'); //edit here: set name for the script         
        newUserCustomAction.set_description('Additional Atlas Copco cutom funtionality!');        
        newUserCustomAction.update();      
        
        clientContext.executeQueryAsync(Function.createDelegate(this, onQuerySucceeded), Function.createDelegate(this, onQueryFailed));    
      } catch(ex) {      
        alert('Error: ' + ex);  
      }
    }
    function onQuerySucceeded(sender, args) {    
      alert('New Support files added to Site.\n\nRefresh the page.'); 
   }
   function onQueryFailed(sender, args) {   
      alert('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace());    
   }
   addCustomActions();
   })();
