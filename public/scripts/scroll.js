window.addEventListener('scroll', () => {
    let border1 = document.querySelector('.border1');
    let shema1 = document.querySelector('.shema1');
   
    let border3 = document.querySelector('.border3');
    let shema3 = document.querySelector('.shema3');

    let border4 = document.querySelector('.border4');
    let shema4 = document.querySelector('.shema4');

    let border5 = document.querySelector('.border5');
    let shema5 = document.querySelector('.shema5');

    if(pageYOffset >= '100') {

        border1.style.top = '140px';
        border1.style.left = '110px';
        shema1.style.top = '163px';
        shema1.style.left = '130px';

        border3.style.top = '130px';
        border3.style.left = '380px';
        shema3.style.top = '162px';
        shema3.style.left = '408px';

        border4.style.top = '315px';
        border4.style.left = '50px';
        shema4.style.top = '345px';
        shema4.style.left = '81px';

        border5.style.top = '300px';
        border5.style.left = '405px';
        shema5.style.top = '326px';
        shema5.style.left = '429px';
    } else {

        border1.style.top = '30px';
        border1.style.left = '0px';
        shema1.style.top = '53px';
        shema1.style.left = '20px';

        border3.style.top = '100px';
        border3.style.left = '460px';
        shema3.style.top = '132px';
        shema3.style.left = '488px';

        border4.style.top = '345px';
        border4.style.left = '0px';
        shema4.style.top = '375px';
        shema4.style.left = '31px';

        border5.style.top = '500px';
        border5.style.left = '465px';
        shema5.style.top = '526px';
        shema5.style.left = '489px';
    }
    /*border1.setAttribute('style', 'left:'+(pageYOffset / 10)+'px; top:'+(pageYOffset / 8 + 30)+'px;');
    shcema1.setAttribute('style', 'left:'+(pageYOffset / 10 + 20)+'px; top:'+(pageYOffset / 8 + 53)+'px;');
    */
});