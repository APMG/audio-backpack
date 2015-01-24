import Ember from 'ember';
export default Ember.Route.extend({
    //Looks at the URL and uses a base36 decoding to try and turn it into a playlist short URL
    model: function(params){
        if (params.path === 'not-found'){
            //this.router.location.formatURL('/not-found');
            Ember.$('head').append('<meta name="prerender-status-code" content="404">');
            this.transitionTo('/not-found');
            return;
        }
        var that = this;
        var p = params.path.split("/");
        var ID = parseInt(p[0],36);
        //console.log(ID);
        if (ID > 10000  && ID < 100000000){
            ID = ID-10000;
            //console.log(ID);
            this.store.find('list',ID).then(function(list){
                that.transitionTo('lists.list', list);
            }, function(){ //error
                 //console.log(error);
                that.router.location.formatURL('/not-found');
                that.transitionTo('/not-found');
            });
        } else {
            var url = this.router.location.formatURL('/not-found');
            if (window.location.pathname !== url) {
                Ember.$('head').append('<meta name="prerender-status-code" content="404">');
                this.transitionTo('/not-found');
            }
        }
    }
});