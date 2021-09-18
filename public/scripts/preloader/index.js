let isFinishedAnim = false;
(() => {
    document.body.style.overflow = "hidden";
    anime({
        targets: '.lines path',
        keyframes: [
            {
                strokeDashoffset: [anime.setDashoffset, 0],
                easing: 'easeInOutSine',
                duration: 2500,
                delay: function(el, i) { return i * 250 },
                direction: 'alternate',
                fill: "transparent"
            }
        ],
        update: (anim) => {
            if(Math.round(anim.progress) > 90 && !isFinishedAnim){
                isFinishedAnim = true;
                anim.animatables.forEach(({ target }) => {
                    target.style.transition = "2.5s";
                    target.style.fill = getComputedStyle(target).stroke;
                    target.style.stroke = "transparent";
                    setTimeout(()=>{
                        target.style.transition = ".3s";
                        target.style.opacity = 0;
                        const preloader = document.getElementById('preloader');
                        preloader.style.transition = ".3s";
                        preloader.style.opacity = 0;
                        document.body.style.overflow = "visible";
                        setTimeout(()=>{
                            preloader.style.display = "none";
                        }, 310);
                    }, 2600);
                });
            }
        },
        loop: false,
    });
})()