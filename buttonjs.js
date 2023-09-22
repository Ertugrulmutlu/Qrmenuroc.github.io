const on_secim =  document.getElementById("on_secim_section");
const ice_secim = document.getElementById("ice_secim_section");
const hot_secim = document.getElementById("hot_secim_section");
const kek_secim = document.getElementById("kek_secim_section");
const menü = document.getElementById("slider-food");

function iced_section() {
    document.body.style.backgroundColor = 'black';

    const sectionPosition = menü.getBoundingClientRect().top + window.scrollY;
    if (on_secim.style.display === "block") {

        anime({
            targets: '#on_secim_section',
            translateX: 1000,
            loop: false,
            duration: 1000,
            easing: 'easeInOutExpo',
            complete: function() {

                on_secim.style.display = "none";
                ice_secim.style.transform = 'translateX(1000px)';

                ice_secim.style.display = "block";

                anime({
                    targets: '#ice_secim_section',
                    translateX: 0,
                    loop: false,
                    duration: 2000,
                    easing: 'easeInOutExpo',
                    complete: function () {
                        document.body.style.backgroundColor = "white";

                        window.scrollTo({
                            top: sectionPosition - 50,
                            behavior: "smooth", // Optional: Add smooth scrolling animation
                        });
                    }
                  });
                // Animation is complete, now execute the code in the 'else' block

                
                // Scroll to the desired position with an offset

            }
        });


    }else if (hot_secim.style.display === "block"){

        anime({
            targets: '#hot_secim_section',
            translateX: 1000,
            loop: false,
            duration: 1000,
            easing: 'easeInOutExpo',
            complete: function() {
                hot_secim.style.display = "none";
                ice_secim.style.transform = 'translateX(1000px)';

                ice_secim.style.display = "block";

                anime({
                    targets: '#ice_secim_section',
                    translateX: 0,
                    loop: false,
                    duration: 2000,
                    easing: 'easeInOutExpo',
                    complete: function () {
                        document.body.style.backgroundColor = "white";

                        window.scrollTo({
                            top: sectionPosition - 50,
                            behavior: "smooth", // Optional: Add smooth scrolling animation
                        });
                    }
                  });

            }
        });
    } else if (kek_secim.style.display === "block"){
        document.body.style.backgroundColor = "#000000";

        anime({
            targets: '#kek_secim_section',
            translateX: 1000,
            loop: false,
            duration: 1000,
            easing: 'easeInOutExpo',
            complete: function() {
                kek_secim.style.display = "none";
                ice_secim.style.transform = 'translateX(1000px)';

                ice_secim.style.display = "block";

                anime({
                    targets: '#ice_secim_section',
                    translateX: 0,
                    loop: false,
                    duration: 2000,
                    easing: 'easeInOutExpo',
                    complete: function () {
                        document.body.style.backgroundColor = "white";

                        window.scrollTo({
                            top: sectionPosition - 50,
                            behavior: "smooth", // Optional: Add smooth scrolling animation
                        });
                    }
                  });
            }
        });
    }
}

function hot_section() {
    document.body.style.backgroundColor = 'black';

    const sectionPosition = menü.getBoundingClientRect().top + window.scrollY;
    if (on_secim.style.display === "block") {
        anime({
            targets: '#on_secim_section',
            translateX: 1000,
            loop: false,
            duration: 1000,
            easing: 'easeInOutExpo',
            complete: function() {
                on_secim.style.display = "none";
                hot_secim.style.transform = 'translateX(1000px)';

                hot_secim.style.display = "block";

                anime({
                    targets: '#hot_secim_section',
                    translateX: 0,
                    loop: false,
                    duration: 2000,
                    easing: 'easeInOutExpo',
                    complete: function () {
                        document.body.style.backgroundColor = "white";

                        window.scrollTo({
                            top: sectionPosition - 50,
                            behavior: "smooth", // Optional: Add smooth scrolling animation
                        });
                    }
                  });

            }
        });
    }else if (ice_secim.style.display === "block"){
        anime({
            targets: '#ice_secim_section',
            translateX: 1000,
            loop: false,
            duration: 1000,
            easing: 'easeInOutExpo',
            complete: function() {
                ice_secim.style.display = "none";
                hot_secim.style.transform = 'translateX(1000px)';

                hot_secim.style.display = "block";

                anime({
                    targets: '#hot_secim_section',
                    translateX: 0,
                    loop: false,
                    duration: 2000,
                    easing: 'easeInOutExpo',
                    complete: function () {
                        document.body.style.backgroundColor = "white";

                        window.scrollTo({
                            top: sectionPosition - 50,
                            behavior: "smooth", // Optional: Add smooth scrolling animation
                        });
                    }
                  });

            }
        });
    }else if(kek_secim.style.display === "block"){
        anime({
            targets: '#kek_secim_section',
            translateX: 1000,
            loop: false,
            duration: 1000,
            easing: 'easeInOutExpo',
            complete: function() {
                kek_secim.style.display = "none";
                hot_secim.style.transform = 'translateX(1000px)';

                hot_secim.style.display = "block";

                anime({
                    targets: '#hot_secim_section',
                    translateX: 0,
                    loop: false,
                    duration: 2000,
                    easing: 'easeInOutExpo',
                    complete: function () {
                        document.body.style.backgroundColor = "white";

                        window.scrollTo({
                            top: sectionPosition - 50,
                            behavior: "smooth", // Optional: Add smooth scrolling animation
                        });
                    }
                  });

            }
        });
    }

}


function kek_section() {
    document.body.style.backgroundColor = 'black';

    const sectionPosition = menü.getBoundingClientRect().top + window.scrollY;
    if (on_secim.style.display === "block") {
        anime({
            targets: '#on_secim_section',
            translateX: 1000,
            loop: false,
            duration: 1000,
            easing: 'easeInOutExpo',
            complete: function() {
                on_secim.style.display = "none";
                kek_secim.style.transform = 'translateX(1000px)';

                kek_secim.style.display = "block";

                anime({
                    targets: '#kek_secim_section',
                    translateX: 0,
                    loop: false,
                    duration: 2000,
                    easing: 'easeInOutExpo',
                    complete: function () {
                        document.body.style.backgroundColor = "white";

                        window.scrollTo({
                            top: sectionPosition - 50,
                            behavior: "smooth", // Optional: Add smooth scrolling animation
                        });
                    }
                  });

            }
        });
    }else if (ice_secim.style.display === "block"){
        anime({
            targets: '#ice_secim_section',
            translateX: 1000,
            loop: false,
            duration: 1000,
            easing: 'easeInOutExpo',
            complete: function() {
                ice_secim.style.display = "none";
                kek_secim.style.transform = 'translateX(1000px)';

                kek_secim.style.display = "block";

                anime({
                    targets: '#kek_secim_section',
                    translateX: 0,
                    loop: false,
                    duration: 2000,
                    easing: 'easeInOutExpo',
                    complete: function () {
                        document.body.style.backgroundColor = "white";

                        window.scrollTo({
                            top: sectionPosition - 50,
                            behavior: "smooth", // Optional: Add smooth scrolling animation
                        });
                    }
                  });

            }
        });
    }else if(hot_secim.style.display === "block"){
        anime({
            targets: '#hot_secim_section',
            translateX: 1000,
            loop: false,
            duration: 1000,
            easing: 'easeInOutExpo',
            complete: function() {
                hot_secim.style.display = "none";
                kek_secim.style.transform = 'translateX(1000px)';

                kek_secim.style.display = "block";

                anime({
                    targets: '#kek_secim_section',
                    translateX: 0,
                    loop: false,
                    duration: 2000,
                    easing: 'easeInOutExpo',
                    complete: function () {
                        document.body.style.backgroundColor = "white";

                        window.scrollTo({
                            top: sectionPosition - 50,
                            behavior: "smooth", // Optional: Add smooth scrolling animation
                        });
                    }
                  });

            }
        });
    }

}


function goImg(element) {
    const rect = element.getBoundingClientRect();
    const elementCenterY = rect.top + rect.height / 2;
    const screenHeight = window.innerHeight;
    const scrollY = elementCenterY - screenHeight / 2;

    window.scrollTo({
        top: scrollY + window.scrollY, // Add the current scroll position
        behavior: "smooth",
    });
}

