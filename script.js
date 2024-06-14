function loadingAnimation(){
    var t1 = gsap.timeline();
t1.from(".line1 h1", {
    y: 100,
    stagger: 0.5,
    duration: 0.6,
    delay: 0.5
});
t1.from(".line1 h2", {
    opacity: 0,
    duration: 0.6,
    onStart: function () {
        var h5timer = document.querySelector("#zero h5");
        var grow = 0;
        setInterval(function () {
            if (grow < 100) {
                h5timer.innerHTML = grow++;
            } else {
                h5timer.innerHTML = grow;
            }
        }, 25);
    }
});

t1.to("#loader", {
    opacity: 0,
    duration: 0.2,
    delay:3
});
t1.from("page1",{
    dealay:0.2,
    Y:1200,
    opacity:0,
    duration: 0.5,
    ease:Power4
})
t1.to("#loadre",{
    display:"none"
}
    
)

}
loadingAnimation()