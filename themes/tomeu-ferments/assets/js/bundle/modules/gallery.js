import lightGallery from 'lightgallery';

// Plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'


export default function () {
    const $dynamicGallery = document.getElementById('abrir-galeria');

    var images = JSON.parse($('#abrir-galeria').attr('data-images'));
    var items = [];
    for (var i = 0; i < images.length; i++) {
        items.push({src: images[i].src, thumb: images[i].thumb});
    }
    const dynamicGallery = lightGallery($dynamicGallery, {
        dynamic: true,
        dynamicEl: items,
        plugins: [lgZoom, lgThumbnail],
        thumbnail: true
    });
    $dynamicGallery.addEventListener('click', function () {
        // Starts with third item.(Optional).
        // This is useful if you want use dynamic mode with
        // custom thumbnails (thumbnails outside gallery),
        dynamicGallery.openGallery(0);
    });


}
