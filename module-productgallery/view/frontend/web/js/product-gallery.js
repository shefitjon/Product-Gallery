/**
 * 
 * @package Skianet_ProductGallery
 */

define([
    'jquery'
    /* ricordarsi di inserire il nome della/e libreria/e */
], function ($) {
    'use strict';

    $.widget('Skianet.productGallery', {

        options: {
            initialImages: {}
        },

        _init: function () {
            this.setupGalleryPreview();
            this.initExternalJs();
            window.initialImages = this.options.initialImages;
        },

        setupGalleryPreview: function () {

            /*
                - inserire qui eventuali script tipo owlCarousel
                - ricordarsi di distruggere la galleria prima di inizializzarla
             */

        },

        initExternalJs: function() {

            /*
                - inserire qui ulteriori script se necessari
                - anche in questo caso ricordarsi di distruggere il plugin e ricaricarlo
             */

        }

    });

    return $.Skianet.productGallery;

});
