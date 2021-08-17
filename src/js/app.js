// swap event image src based on active event
// change event header font weight
$("#btn-event1").click(function () {
    $(".event-img").attr({
        "src": "images/vivid-sydney.jpg"
    })
    $(".header-event1").addClass('active')
    $(".header-event2").removeClass('active')
    $(".header-event3").removeClass('active')
})

$("#btn-event2").click(function () {
    $(".event-img").attr({
        "src": "images/queens-birthday-celebrations.jpg"
    })
    $(".header-event2").addClass('active')
    $(".header-event1").removeClass('active')
    $(".header-event3").removeClass('active')
})

$("#btn-event3").click(function () {
    $(".event-img").attr({
        "src": "images/fathers-day-dining.jpg"
    })
    $(".header-event3").addClass('active')
    $(".header-event1").removeClass('active')
    $(".header-event2").removeClass('active')
})
