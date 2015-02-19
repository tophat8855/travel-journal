import Ember from 'ember';

export default Ember.Controller.extend({
  isValid: Ember.computed.notEmpty('newImage'),
  actions: {
    createPhoto: function() {
      var image = this.get('newImage');
      var name = this.get('newName');
      var description = this.get('newDescription');
      if(this.get('isValid')){
        var photo = this.store.createRecord('photo', {image: image, name: name, description: description,});
        photo.save();
        this.set('newImage', '');
        this.set('newName', '');
        this.set('newDescription', '');
      }
    }
  }
});
