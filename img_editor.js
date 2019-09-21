

function addImage(e) {
    let imgUrl = $("#imgUrl").val();

    if (imgUrl.length) {
        $('#imageContainer img').attr('src', imgUrl);
    }

    console.log(imgUrl);

    e.preventDefault();

}

// on click of go(submit) button, addImage() will be called
$('#go').click(function(){
    $('#pre-img-txt').remove();
    $('.sampleUrl').remove();
});

$('#go').click(addImage);

// on pressing return(enter), addImage() will be called

$('#urlBox').submit(function(){
    $('#pre-img-txt').remove();
    $('.sampleUrl').remove();
})

$('#urlBox').submit(addImage);

function editImage() {
    let gs = $('#gs').val();
    let blur = $('#blur').val();
    let sat = $('#saturation').val();
    let bright = $('#brightness').val();
    let contrast = $('#contrast').val();
    let sepia = $('#sepia').val();

    $('#imageContainer img').css('-webkit-filter', 'grayscale('+ gs +'%) blur('+ blur + 'px) sepia('+ sepia + '%) contrast('+ contrast +'%) brightness('+ bright + '%) saturate('+ sat +'%)');

    $('#reset').click(function() {
        blur = 0;
        gs = 0;
        sat = 100;
        bright = 100;
        contrast = 100;
        sepia = 0;

        $('#imageContainer img').css('-webkit-filter', 'grayscale('+ gs +'%) blur('+ blur + 'px) sepia('+ sepia + '%) brightness('+ bright + '%) contrast('+ contrast +'%) saturate('+ sat +'%)');
        $('input[class=value0]').val(0);
        $('input[class=value100] ').val(100);
    });

};

$('input[type=range]').change(editImage).mousemove(editImage);
