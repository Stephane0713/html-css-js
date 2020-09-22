$(function () {

    //Bouton 1
    $("#btn1").click(() => {
        $("#p1").css("color", "red")
    })

    //Bouton 2
    $("#btn2").click(() => {
        $(".para").css({ "color": "white", "background-color": "black" })
    })

    //Bouton 3
    $("#btn3").click(() => {
        $("section:first-of-type p:nth-child(odd)").slideToggle()
    })

    //Bouton 4
    $("#btn4").click(() => {
        $("<p>test</p>").insertBefore($("section:nth-of-type(2) p:nth-child(3n + 1), section:nth-of-type(2) p:last-child"))
    })
});
