//
console.log("LOADing");
window.onload = function() {
    const sliderNavs = document.querySelectorAll(".slider-navlink");
    const sliderCont = document.getElementById("slider");
    sliderNavs.forEach((nav, i) => {
        console.log({nav, i});
        nav.onclick = (e) => 
        {
            console.log("SC:", i, sliderCont);
            console.log("CL:", document.getElementById("slider").scrollLeft)
            ;
            const w = document.querySelector("#slider").getBoundingClientRect().width;
            console.log({w});
            document.querySelector(".slider-container").scrollLeft = w*(1+i);
        };
    });
}