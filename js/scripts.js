$(document).ready(function (){



$("#lightlink").click(function(event){
	
		event.preventDefault();

		$("#lightbox").fadeIn();
		$("#lightboxwrapper").fadeIn();

});


$("#closebutton").click(function(event){

	event.preventDefault();

	$("#lightbox").fadeOut();
	$("#lightboxwrapper").fadeOut();


});

$("#lightboxwrapper").click(function(event){

	$("#lightbox").fadeOut();
	$("#lightboxwrapper").fadeOut();

});




///lightbox


var lightboximages = [
 { 
    src: "images/cityguides.png",
    title: "Guardian interctive city guides",
    caption: "copy here on city guides",
    link: "http://www.guardian.co.uk/travel/city-guides"
 }, { 
    src: "images/tokyovid.png",
    title: "Immersive video guides to Tokyo using Condition One iPad software",
    caption: "copy here on immersive",
    link: "http://www.guardian.co.uk/info/2012/feb/01/tokyo-japan-city-guide-beta"
 }, { 
    src: "images/scrollinggallery.png",
    title: "Zoomable panoramic Lake District gallery",
    caption: "copy here on scrolling zooms!",
    link: "http://www.guardian.co.uk/travel/interactive/2012/mar/28/lake-district-mountain-panoramas-photography"
 }, { 
    src: "images/vimeogallery.png",
    title: "Interactive Vimeo gallery",
    caption: "copy here on scrolling zooms!",
    link: "http://www.guardian.co.uk/travel/interactive/2012/jul/04/hongkong-vimeo-gallery-timelapse-tilt-shift"
 }, { 
    src: "images/interactivemaps.png",
    title: "Categorised maps for budget British eats",
    caption: "copy here on scrolling zooms!",
    link: "http://www.guardian.co.uk/travel/interactive/2011/jan/07/britain-best-budget-eats-restaurants-cafes"
 }
];

var lightboxCurrent = 0;

function lightboxRight() {
	
	lightboxCurrent += 1

	if (lightboxCurrent>=lightboximages.length)
	{ 
 		lightboxCurrent = 0
 	}
 	
 		$("#lightboxpic img").attr("src", lightboximages[lightboxCurrent].src);
 		$("#lightboxh2 h2").html(lightboximages[lightboxCurrent].title)
 		$("#lightboxp p").html(lightboximages[lightboxCurrent].caption)
 		$("#lightboxpic a, #lightboxcaption a").attr("href", lightboximages[lightboxCurrent].link)


}

$("#lightboxcontrolRight").click(function(event){
 	event.preventDefault();


 	lightboxRight();
});


function lightboxLeft() {

	if (lightboxCurrent==0) {

		lightboxCurrent = lightboximages.length
	}
	
	lightboxCurrent -=1;

	$("#lightboxpic img").attr("src", lightboximages[lightboxCurrent].src);
 	$("#lightboxh2 h2").html(lightboximages[lightboxCurrent].title)
 	$("#lightboxp p").html(lightboximages[lightboxCurrent].caption)
 	$("#lightboxpic a, #lightboxcaption a").attr("href", lightboximages[lightboxCurrent].link)

}


$("#lightboxcontrolLeft").click(function(event){
 	event.preventDefault();

 	
 	lightboxLeft();
});








}); //ready