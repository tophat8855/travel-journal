import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    deletePhoto: function(photo) {
      var _this = this;
      this.store.find('photo', photo.id).then(function(photo) {
        photo.destroyRecord().then(function() {
          _this.transitionToRoute('photos.index');
        });
      });
    }
   }
});
