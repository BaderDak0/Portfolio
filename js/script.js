

function updateicon() {

    $.getJSON("data/bader-portfolio.json", function (data) {
        console.log(data.media[1].linkedinlink);
        console.log(data.aboutme.length)
        $(".linkedin > a").attr("href", data.media[1].linkedinlink);
        $(".linkedin i").addClass(data.media[1].linkedinicon);
        $(".facebook > a").attr("href", data.media[0].facebooklink);
        $(".facebook i").addClass(data.media[0].facebookicon);
        $(".github > a").attr("href", data.media[2].githublink);
        $(".github i").addClass(data.media[2].giticon);

        for (var i = 0; i < data.aboutme.length ; i++) {
            $(".about-us-list").append("<li class='points'>"+data.aboutme[i].list+"</li>");
        }
    });


}





$(document).ready(function () {

    updateicon();

    
    $( "#CV" ).click(function() {
        window.open('contact/BaderDakaCV.pdf', '_blank');
      });
   


});