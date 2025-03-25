/**
 * 
 * @package Skianet_ProductGallery
 */

define([
    'jquery',
    'Skianet/productGallery'
    /* ricordarsi di inserire il nome della/e libreria/e */
], function ($, gallery) {
    'use strict';

    return function (widget) {

        $.widget('mage.configurable', widget, {
            // TODO: Logic to replace images
        });

        return $.mage.configurable;
    }
});
