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

        $.widget('mage.SwatchRenderer', widget, {
            options: {
                galleryPreviewElement: '#product-gallery-images'
            },

            _init: function () {
                this._super();
                this.options.mediaGalleryInitial = window.initialImages;
            },

            _loadMedia: function (eventName) {
                if (this.options.useAjax) {
                    this._debouncedLoadProductMedia();
                }  else {
                    var images = this.options.jsonConfig.images[this.getProduct()];

                    if (!images) {
                        images = this.options.mediaGalleryInitial;
                    }

                    this._updateProductGallery(images);
                    this._galleryInit();

                }
            },

            _updateProductGallery: function (images) {
                var self = this;

                $(this.options.galleryPreviewElement).empty();

                $.each(images, function (index, value) {
                    $('<img src="' + value.img + '" alt="' + value.caption + '"/>')
                        .appendTo(self.options.galleryPreviewElement);
                });
            },

            _galleryInit: function(){
                gallery();
            }

        });

        return $.mage.SwatchRenderer;
    }

});
