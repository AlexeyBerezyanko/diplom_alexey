const swaper = new Swiper('.swiper',{
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    direction: 'vertical',   
      
    spaceBetween: 100,
})