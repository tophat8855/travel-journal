import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';

var application;

module('Acceptance: AddPhoto', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /photos/new', function(assert) {
  visit('/photos/new');

  andThen(function() {
    assert.equal(currentPath(), 'photos.new');
  });
});

test('creating a photo', function(assert) {
  visit('/photos/new');
  fillIn('#createImage', 'http://media.digitalcameraworld.com/wp-content/uploads/sites/123/2012/05/Landscape_photography_tips.foamy_3.jpg');
  fillIn('#createName', 'waterfall');
  fillIn('#createDescription', 'red cliff');
  click('.button');

  andThen(function() {
    assert.equal(currentPath(), 'photos.new');

    var listPhotos = findWithAssert('.image');
    click(listPhotos.last());


    andThen(function() {
      var image = $("#show");
      assert.notEqual(image[0].currentSrc.indexOf('http://media.digitalcameraworld.com/wp-content/uploads/sites/123/2012/05/Landscape_photography_tips.foamy_3.jpg'), -1);
    });
  });
});
