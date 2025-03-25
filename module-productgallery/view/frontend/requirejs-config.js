/**
 * 
 * @package Skianet_ProductGallery
 */

var config = {
    map: {
        '*': {
            "Skianet/productGallery": "Skianet_ProductGallery/js/product-gallery"
        }
    },
    config: {
        mixins: {
            'Magento_Swatches/js/swatch-renderer': {
                'Skianet_ProductGallery/js/swatch-renderer-mixin': true
            },
            'Magento_ConfigurableProduct/js/configurable': {
                'Skianet_ProductGallery/js/configurable-mixin': true
            }
        }
    }
};
