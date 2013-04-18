/*! jQuery Existence - v0.1.0 - 2013-04-19
* https://github.com/seriema/jquery.existence
* Copyright (c) 2013 John-Philip Johansson; Licensed MIT */
(function ($) {
    'use strict';

    $.fn.missing = function () {
        return !this.length;
    };

    $.fn.exists = function () {
        return this.length;
    };
}(jQuery));