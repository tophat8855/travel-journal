import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';

var application;

module('Acceptance: DeletePhoto', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('deleting a photo', function(assert) {
  visit('/photos');
  var listPhotos = findWithAssert('.image');
  var numberOfPhotos = listPhotos.length;

  click(listPhotos.last());

  andThen(function() {
    assert.equal(currentPath(), 'photos.show');

    click('.red');
    andThen(function() {
      var newNumberOfPhotos = findWithAssert('.image').length;

      assert.equal(newNumberOfPhotos, numberOfPhotos - 1);
    });
  });
});
