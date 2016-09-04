var request;
var $current;
var cache = {
  "cll/img/photo-1.jpg": {
    "$img": jQuery object,
    "isLoading": false
  },
  "cll/img/photo-2.jpg": {
   "$img": jQuery object,
   "isLoading": false
  },
  "cll/img/photo-3.jpg": {
   "$img": jQuery object,
   "isLoading": false
  }
};
var $frame = $('#photo-viewer');
var $thumbs = $('.thumb');

function crossfade($img) {

if ($current) {
$current.stop().fadeOut('slow');
}

$img.css({
marginLeft: -$img.width() / 2,
marginTop: -$img.height() / 2
});

$img.stop().fadeTo('slow',1);

$current =$img;

}
