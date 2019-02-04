$( function() {
    $( "#slider-vertical" ).slider({
      orientation: "vertical",
      range: "min",
      min: 0,
      max: 140,
      value: 60,
      step: 20,
      slide: function( event, ui ) {
        // $( "#amount" ).val( ui.value );
        var re_img_tag = new Image();
        var sliderValue = ui.value;
        re_img_tag.onload = function(){
          document.querySelector('#dispLayerFA').style.backgroundImage = 'url("' + '../stanford_truck_fa_ans/img_' + Math.floor(sliderValue/20) + ".png" + '")';
        }
        re_img_tag.src = '../stanford_truck_fa_ans/img_' + Math.floor(sliderValue/20) + ".png";
      }
    });

    $( "#slider-hz" ).slider({
      range: "min",
      min: 0,
      max: 1,
      value: 1,
      step: 1,
      slide: function( event, ui ) {
        // $( "#amount" ).val( ui.value );
        // var re_img_tag = new Image();
        // var sliderValue = ui.value;
        // re_img_tag.onload = function(){
        //   document.querySelector('#dispLayerFA').style.backgroundImage = 'url("' + '../stanford_truck_fa_ans/img_' + Math.floor(sliderValue/20) + ".png" + '")';
        // }
        // re_img_tag.src = '../stanford_truck_fa_ans/img_' + Math.floor(sliderValue/20) + ".png";
        if(ui.value == 1){
          localStorage.setItem('aperture-state','full');
          $( "#slider-vertical" ).slider({
            orientation: "vertical",
            range: "min",
            min: 0,
            max: 140,
            value: 60,
            step: 20,
            slide: function( event, ui ) {
              // $( "#amount" ).val( ui.value );
              var re_img_tag = new Image();
              var sliderValue = ui.value;
              re_img_tag.onload = function(){
                document.querySelector('#dispLayerFA').style.backgroundImage = 'url("' + '../stanford_truck_fa_ans/img_' + Math.floor(sliderValue/20) + ".png" + '")';
              }
              re_img_tag.src = '../stanford_truck_fa_ans/img_' + Math.floor(sliderValue/20) + ".png";
            }
          });
          document.querySelector('#dispLayerFA').style.backgroundImage = 'url("' + '../stanford_truck_fa_ans/img_3' + ".png" + '")';
          //change the display
          clickState = localStorage.getItem('state')
          if(clickState == 'varaperture'){
            document.getElementById("img-selector").innerHTML = '<div id="full-inner-circle" style="position: relative; background: black; border-radius: 50%; top: 1px; left: 1px; margin: 0px; height: 238px; width: 238px;"></div>';
            document.getElementById("frame-slider-partAperture").innerHTML = document.getElementById("frame-slider").innerHTML;
            document.getElementById('frame-slider').innerHTML = document.getElementById("frame-slider-FullAperture").innerHTML;
          }
          
        }
        else{
          localStorage.setItem('aperture-state','part');
          $( "#slider-vertical" ).slider({
            orientation: "vertical",
            range: "min",
            min: 0,
            max: 20,
            value: 10,
            step: 10,
            slide: function( event, ui ) {
              // $( "#amount" ).val( ui.value );
              var re_img_tag = new Image();
              var sliderValue = ui.value;
              re_img_tag.onload = function(){
                document.querySelector('#dispLayerPA').style.backgroundImage = 'url("' + '../Stopdown_truck/Img_' + Math.floor(sliderValue/10) + ".png" + '")';
              }
              re_img_tag.src = '../Stopdown_truck/Img_' + Math.floor(sliderValue/10) + ".png";
            }
          });
          document.querySelector('#dispLayerPA').style.backgroundImage = 'url("' + '../Stopdown_truck/Img_1' + ".png" + '")';
          //change the display
          clickState = localStorage.getItem('state')
          if(clickState == 'varaperture'){
            document.getElementById("img-selector").innerHTML = '<div id="full-inner-circle" style="position: relative; background: black; border-radius: 50%; top: 60px; left: 60px; margin: 0px; height: 120px; width: 120px;"></div>';
            document.getElementById('frame-slider-FullAperture').innerHTML = document.getElementById("frame-slider").innerHTML;
            document.getElementById('frame-slider').innerHTML = document.getElementById("frame-slider-partAperture").innerHTML;
          }
          
        }
      }
    });

    // $( "#amount" ).val( $( "#slider-vertical" ).slider( "value" ) );
  } );

localStorage.setItem('state', 'pinhole');
localStorage.setItem('aperture-state','full');

$(document).ready(function(e) {

  $('#img-selector-PinHole').innerHTML = $('#img-selector').innerHTML;
  $('#img-selector').click(function(e) {
      var posX = $(this).offset().left, posY = $(this).offset().top;
      // alert((e.pageX - posX)+ ' , ' + (e.pageY - posY));
      var newX = Math.floor((e.pageX - posX) / 16);
      var newY = Math.floor((e.pageY - posY) / 16);
      //now make the inner circle come here
      $('#inner-circle').css('top', newY*16 + 'px');
      $('#inner-circle').css('left', newX*16 + 'px');
      $('#inner-circle').css('margin', '0px 0px 0px 0px');
      // alert(newX + ' ' + newY);
      //now change the image being displayed
      var img_tag = new Image();
      img_tag.onload = function(){
        document.querySelector('#dispLayer').style.backgroundImage = 'url("' + '../stanford_truck_0.4/out_' + (newY+1) + "_" + (newX+1) + ".png" + '")';
      }
      img_tag.src = '../stanford_truck_0.4/out_' + (newY+1) + "_" + (newX+1) + ".png";
      // $('#dispLayer').css('background-image', 'url("' + '../stanford_truck_0.4/out_' + (newY+1) + "_" + (newX+1) + ".png" + '")');
        // $('#img-selector-PinHole').innerHTML = $('#img-selector').innerHTML;
    });

  $('#dispLayerFA').click(function(e){
        //refocus here
  });

  $('#dispLayerPA').click(function(e){
        //refocus here
  });

  });

function changeFramePinHole(){

  var clickState = localStorage.getItem('state')
  if(clickState == 'pinhole'){
    //do nothing
  }
  else{
    //enable change of views for pinhole
    document.getElementById('inner-circle').style.pointerEvents = 'auto';
    //save previous aperture state
    var apertureState = localStorage.getItem('aperture-state')
    if(apertureState == 'full'){
      document.getElementById('frame-slider-FullAperture').innerHTML = document.getElementById("frame-slider").innerHTML;  
    }
    else{
      document.getElementById('frame-slider-partAperture').innerHTML = document.getElementById("frame-slider").innerHTML;
    }
    //load pinhole state
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

function changeFrameVarAperture(){

  var clickState = localStorage.getItem('state')
  if(clickState == 'varaperture'){
    //do nothing
  }
  else{
    
    document.getElementById("frame-slider-PinHole").innerHTML = document.getElementById("frame-slider").innerHTML;
    document.getElementById("img-selector-PinHole").innerHTML = document.getElementById("img-selector").innerHTML;
    var apertureState = localStorage.getItem('aperture-state')
    if(apertureState == 'full'){
      document.getElementById("frame-slider").innerHTML = document.getElementById("frame-slider-FullAperture").innerHTML;
      document.getElementById("img-selector").innerHTML = '<div id="full-inner-circle" style="position: relative; background: black; border-radius: 50%; top: 1px; left: 1px; margin: 0px; height: 238px; width: 238px;"></div>';
    }
    else{
      document.getElementById("frame-slider").innerHTML = document.getElementById("frame-slider-partAperture").innerHTML;
      document.getElementById("img-selector").innerHTML = '<div id="full-inner-circle" style="position: relative; background: black; border-radius: 50%; top: 60px; left: 60px; margin: 0px; height: 120px; width: 120px;"></div>';
    }
  
    localStorage.setItem('state','varaperture');
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

//testing function
function movePointer(e){

  var target = (e.target) ? e.target : e.srcElement;
  var posX = target.position().left;
  var posY = target.position().top;
  var xPosition = e.pageX - posX;
  var yPosition = e.pageY - posY;
  alert(xPosition + ',' + yPosition);
}