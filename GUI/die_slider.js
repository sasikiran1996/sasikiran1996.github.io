$( function() {
    $( "#slider-vertical" ).slider({
      orientation: "vertical",
      range: "min",
      min: 0,
      max: 90,
      value: 50,
      step: 10,
      slide: function( event, ui ) {
        // $( "#amount" ).val( ui.value );
        var re_img_tag = new Image();
        var sliderValue = ui.value;
        re_img_tag.onload = function(){
          document.querySelector('#dispLayerFA').style.backgroundImage = 'url("' + '../Die_ans/shiftAdd_' + (Math.floor(sliderValue/10)+1) + ".png" + '")';
        }
        re_img_tag.src = '../Die_ans/shiftAdd_' + (Math.floor(sliderValue/10)+1) + ".png";
      }
    });
    // $( "#amount" ).val( $( "#slider-vertical" ).slider( "value" ) );
  } );

localStorage.setItem('state', 'pinhole');

$(document).ready(function(e) {

  $('#img-selector-PinHole').innerHTML = $('#img-selector').innerHTML;
  $('#img-selector').click(function(e) {
      var posX = $(this).offset().left, posY = $(this).offset().top;
      // alert((e.pageX - posX)+ ' , ' + (e.pageY - posY));
      var newX = Math.floor((e.pageX - posX) / 20);
      var newY = Math.floor((e.pageY - posY) / 20);
      //now make the inner circle come here
      $('#inner-circle').css('top', newY*20 + 'px');
      $('#inner-circle').css('left', newX*20 + 'px');
      $('#inner-circle').css('margin', '0px 0px 0px 0px');
      // alert(newX + ' ' + newY);
      //now change the image being displayed
      var img_tag = new Image();
      img_tag.onload = function(){
        document.querySelector('#dispLayer').style.backgroundImage = 'url("' + '../Die_LF/lf_F_' + (newY) + "_" + (newX) + ".png" + '")';
      }
      img_tag.src = '../Die_LF/lf_F_' + (newY) + "_" + (newX) + ".png";
      // $('#dispLayer').css('background-image', 'url("' + '../stanford_truck_0.4/out_' + (newY+1) + "_" + (newX+1) + ".png" + '")');
        // $('#img-selector-PinHole').innerHTML = $('#img-selector').innerHTML;
    });

  $('#dispLayerFA').click(function(e){
        //refocus here
  });

  });

function changeFramePinHole(){

  var clickState = localStorage.getItem('state')
  if(clickState == 'pinhole'){
    //do nothing
  }
  else{
    //in full-aperture state
    document.getElementById('inner-circle').style.pointerEvents = 'auto';
    document.getElementById('frame-slider-FullAperture').innerHTML = document.getElementById("frame-slider").innerHTML;
    document.getElementById("frame-slider").innerHTML = document.getElementById("frame-slider-PinHole").innerHTML;
    document.getElementById("img-selector").innerHTML = document.getElementById("img-selector-PinHole").innerHTML;
    
    localStorage.setItem('state','pinhole')
  }
  // document.getElementById("img-selector-FullAperture").innerHTML = document.getElementById("img-selector").innerHTML;
  // window.alert(document.getElementById("frame-slider-PinHole").innerHTML);
  // window.alert(document.getElementById("frame-slider").innerHTML);
  // var sliderOptions=
  // {
  //   sliderId: "slider",
  //   startSlide: 0,
  //   effect: "13",
  //   effectRandom: false,
  //   pauseTime: 1800,
  //   /*change transition time here*/
  //   transitionTime: 150,
  //   slices: 12,
  //   boxes: 8,
  //   hoverPause: 1,
  //   autoAdvance: false,
  //   captionOpacity: 0.3,
  //   captionEffect: "slide",
  //   thumbnailsWrapperId: "thumbs",
  //   m: false,
  //   license: "mylicense"
  // };

  // var imageSlider=new mcImgSlider(sliderOptions);

}

function changeFrameFullAperture(){

  var clickState = localStorage.getItem('state')
  if(clickState == 'fullaperture'){
    //do nothing
  }
  else{
    document.getElementById("frame-slider-PinHole").innerHTML = document.getElementById("frame-slider").innerHTML;
    document.getElementById("img-selector-PinHole").innerHTML = document.getElementById("img-selector").innerHTML;
    document.getElementById("frame-slider").innerHTML = document.getElementById("frame-slider-FullAperture").innerHTML;
    document.getElementById("img-selector").innerHTML = '<div id="full-inner-circle" style="position: relative; background: black; border-radius: 50%; top: 1px; left: 1px; margin: 0px; height: 218px; width: 218px;"></div>';
  
    localStorage.setItem('state','fullaperture');
  }
  
  // $('#inner-circle').css('top', '0px');
  // $('#inner-circle').css('left', '0px');
  // $('#inner-circle').css('height', '240px');
  // $('#inner-circle').css('width', '240px');
  // $('#inner-circle').css('margin','0px');
  // //disable onclick-function
  // $('#inner-circle').off('click');
  // document.getElementById('inner-circle').style.pointerEvents = 'none';
}

function init(){
  document.getElementById("frame-slider-PinHole").innerHTML = document.getElementById("frame-slider").innerHTML;
  // document.getElementById("img-selector-PinHole").innerHTML = document.getElementById("img-selector").innerHTML;
  // alert(document.getElementById("img-selector").innerHTML);
  //pre-load all the images
  var ii, jj;
  
  for(ii=1;ii<16;ii++){
    for(jj=1;jj<16;jj++){
      var Img = new Image();
      Img.src = '../stanford_truck_0.4/out_' + (jj) + "_" + (ii) + ".png";
    }
  }

  for(ii=0;ii<8;ii++){
    var Img = new Image();
    Img.src = '../stanford_truck_fa_ans/img_' + (ii) + ".png";
  }
}

function movePointer(e){

  var target = (e.target) ? e.target : e.srcElement;
  var posX = target.position().left;
  var posY = target.position().top;
  var xPosition = e.pageX - posX;
  var yPosition = e.pageY - posY;
  alert(xPosition + ',' + yPosition);
}