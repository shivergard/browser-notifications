Notification = {
    isNotifyActive : false,

    /**
        Returns [ active | default | ]
    **/
    requestPermission : function(){
        return Notification.requestPermission();
    },

    checkPermission : function () {
      if (Notification.permission){
            ## Firefox
            return Notification.permission;
      } else {
            ## Chrome
            return (new Notification "check").permission;   
      }
    },

    createNotification : function (title , body , icon) {
        notification = new Notification( title ,
                         {
                            tag: title,
                            body: body ,
                            iconUrl: icon,
                            icon: icon
                         };
                          
        notification.onclick = function () {
              notification.close();
              window.open().close();
              window.focus();
        };
    },

    informWorkerLoaded : function () {
        
    }

    registerService : function (serviceWorkerPath){
        if ('serviceWorker' in navigator) {
          navigator.serviceWorker.register(serviceWorkerPath).then(function(reg) {
            this.informWorkerLoaded(1);
          }).catch(function(err) {
            this.informWorkerLoaded(0);
          });
        }
    }

};