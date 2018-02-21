
$(document).on('click','.active', function (event) {
    var opcion = $(this);
    var type = opcion.data('type');

    if(type == 1){
        $("#video").attr("src","primerVideo.mp4");
    }
    if(type == 2){
        $("#video").attr("src","segundoVideo.mp4");
    }
    if(type == 3){
        $("#video").attr("src","tercerVideo.mp4");
    }
});
