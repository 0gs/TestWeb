anime ({
    targets: 'div.box',
    translateY: [
        {value: 400, duration: 1600},
        {value:0, duration: 1600}  
    ],
    rotate: {
    value: '1turn',
    },
    borderRadius: 50,
    direction: 'alternate',
    easing: 'easeInOutQuad',
    delay: function() { return anime.random(0, 1000); },
    // autoplay: false,
    loop: true,
    elasticity: 200 
   
}); 
