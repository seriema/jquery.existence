(function($) {
  'use strict';

  module('jQuery.existence exists');

  test('Simple element exists', function () {
    ok($('#has-children').exists());
  });

  test('Simple parent has children', function () {
     ok($('#has-children').children().exists());
  });

  module('jQuery.existence missing');

  test('Simple element missing', function () {
     ok($('#fake-id').missing());
  });

  test('Simle fake element has no children', function () {
     ok($('#fake-id').children().missing());
  });
}(jQuery));
