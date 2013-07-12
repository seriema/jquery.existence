/*! jQuery Existence - v0.1.1 - 2013-07-12
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