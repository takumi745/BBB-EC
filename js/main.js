// jQuery(function ($) {
//     var fadeIn = $('.box_1');
//     $(window).scroll(function () {
//       $(fadeIn).each(function () {
//         var offset = $(this).offset().top;
//         var scroll = $(window).scrollTop(); 
//         var windowHeight = $(window).height();
//         if (scroll > offset - windowHeight + 150) {
//           $(this).addClass("fade-in-left");
//         }
//       });
//     });
// });

'use strict';

{
    // Intersection Observer API

    function callback(entries, obs) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }

            entry.target.classList.add('appear');
            // 監視対象から外す
            obs.unobserve(entry.target);
        })
        console.log(obs);
    }

    const options = {
        threshold: 0.2,
    };

    // Intersection Observer APIのインスタンスを取得する
    const observer = new IntersectionObserver(callback, options);

    // const targets = document.querySelectorAll('.box1');
    const targets = document.querySelectorAll('.box');
    console.log(targets);

    targets.forEach(target => {
        observer.observe(target);
    });
}

{
    // Intersection Observer API

    function callback(entries, obs) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }

            entry.target.classList.add('appear');
            // 監視対象から外す
            obs.unobserve(entry.target);
        })
        console.log(obs);
    }

    const options = {
        threshold: 0.2,
    };

    // Intersection Observer APIのインスタンスを取得する
    const observer = new IntersectionObserver(callback, options);

    // const targets = document.querySelectorAll('.box1');
    const targets = document.querySelectorAll('.voice-position');
    console.log(targets);

    targets.forEach(target => {
        observer.observe(target);
    });
}