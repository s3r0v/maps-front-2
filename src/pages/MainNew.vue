<template>
    <div class="background-mainpage">
        <div class="background-fon-up-block" >
            <div class="content-up-block">
                <div class="analytic-tool-header">Карты для построения маршрутов</div>
                <span class="market-analysic-text">Абсолютно любые маршруты!</span>
                <div class="data-processed-text">Единственные карты в своём роде
на базе которых вы сможете выстраивать любые интерактивные пути в любом количестве!</div>
                <div class="browser-windows"></div>
                <button class="btn-usetool" @click="$router.push('/maps')"></button>
            </div>
            <div class="background-fon-second-block" >
                <div class="faq-block">
                    <div class="faq-header">О продукте</div>
                    <div class="faq-text-block">
                        <div class="faq-text-block-header">Польза для юзера</div>
                        <div class="faq-text-block-description">Создание и сохранение кастомных маршрутов которых нет на других платформах с картами</div>
                    </div>
                    <div class="faq-text-block">
                        <div class="faq-text-block-header">Архитектура продукта</div>
                        <div class="faq-text-block-description">На фронденде используется Vue, на бекенде - Django REST API</div>
                    </div>
                    <div class="faq-text-block">
                        <div class="faq-text-block-header">Монетизация продукта</div>
                        <div class="faq-text-block-description">Можно выставлять банерную рекламу и ввести систему подписок</div>
                    </div>
                    <div class="faq-text-block"><div class="faq-text-block-header">Перспектива расширения</div>
                        <div class="faq-text-block-description">Добавление возможности рисовать маршрут рукой и подстраивать его под места, где человек может пройти физически</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Poppins');
@import url('https://fonts.googleapis.com/css?family=Open+Sans');
.background-mainpage{
    position:absolute;
    overflow: hidden;
    width: 100%;
    height: 130.260416666vw;
    left: 0px;
    top: 0px;
    background: radial-gradient(71.64% 192.64% at 97.37% 10.13%, #FFD286 0%, rgba(255, 183, 167, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, radial-gradient(37.96% 104.94% at 0% 111.98%, #FF4479 0%, rgba(255, 183, 167, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, radial-gradient(168.69% 168.55% at 52.4% 32.81%, #F39261 0%, #FFB7A7 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    background-size: 100%;
}
.content-up-block{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    position: absolute;
    width: 64.7916666vw;
    height: 43.3333vw;
    top: 4.427083333vw;
    flex: none;
    order: 0;
    flex-grow: 0;
}
.analytic-tool-header{
    position: absolute;
    width: 14.322916666vw;
    height: 0.989583333vw;
    left: 0;
    top: 21.875%;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 0.8vw;
    line-height: 117.7%;
    /* or 19px */
    letter-spacing: -0.03em;
    color: #FFFFFF;
}
.market-analysic-text{
    position: absolute;
    width: 20.59375vw;
    height: 10vw;
    left: 0px;
    top: 26.322111538%;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 2.8125vw;
    line-height: 117.7%;
    /* or 64px */

    letter-spacing: -0.03em;

    color: #FFFFFF;
}
.data-processed-text{
    position: absolute;
    width: 23.75vw;
    height: 4.947916666vw;
    left: 0;
    top: 51.44423079%;

    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 700;
    font-size: 0.9375vw;
    line-height: 158.7%;
    /* or 29px */

    letter-spacing: -0.03em;

    color: #FFFFFF;

    opacity: 0.7;
}
.browser-windows{
    position: absolute;
    width: 37.2916666vw;
    height: 100%;
    left: 42.36334405%;
    top: 0;
    background: url(../media/browser-windows.svg) no-repeat;
    background-size: 100%;
}
.background-fon-up-block{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    position: absolute;
    overflow: hidden;
    width: 100vw;
    height: 205.364583333vw;
    left: 0px;
    top: 0px;
    background: url(../media/background-gradient-mainpage.svg) no-repeat;
    background-size: 100%;
}
.btn-usetool{
    position: absolute;
    width: 11.88%;
    height: 8.54%;
    left: 3.04px;
    top: 77.77%;
    background: url(../media/oprobovat-button.svg) no-repeat;
    background-size: 100%;
    border: 0;
}
.btn-usetool:hover{
    background: url(../media/oprobovat-button-hover.svg) no-repeat;
    background-size: 100%;
    border: 0;
}
.btn-moreinfo{
    box-sizing: border-box;
    position: absolute;
    width: 10.08%;
    height: 8.54%;
    left: 13.44%;
    top: 77.77%;
    background-size: 100%;
    border: 0;
}
.btn-moreinfo:hover{
    background-size: 100%;
}
.faq-block{
    display: flex;
    flex-direction:row;
    justify-content: center;
    align-items:center;
    grid-gap: 1.5625vw;
    position: absolute;
    width: 100%;
    height: 27.864583333vw;
    bottom: 5vw;
    }
.background-fon-second-block{
    display: flex;
    flex-direction:row;
    justify-content: center;
    align-items:stretch;
    padding-top: 0;
    grid-gap: 0;
    position: absolute;
    width: 100vw;
    height: 50vw;
    top:47.76041666vw;
    background: url(../media/cho-mi-fon.svg) no-repeat ;
    background-size: 100%;
}
.faq-header{
      position: absolute;
      top: 0;
      background-size: 100%;
      flex: none;
      order: 0;
      flex-grow: 0;
      width: 442px;
      height: 92px;

      font-family: 'Maven Pro';
      font-style: normal;
      font-weight: 600;
      font-size: 74px;
      line-height: 87px;

      background: linear-gradient(98.61deg, #DF632E 7.2%, rgba(255, 78, 78, 0.81) 91.1%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
}
.faq-text-block{
    display: flex;
    flex-direction:column;
    justify-content:left;
    align-items:flex-start;
    width: 13.69%;
    height: 18.22916666vw;
    top: 0;
    background: url(../media/faq-description-background-block.svg) no-repeat ;
    background-size: 100%;
}
.faq-text-block-header
{
    width: 80%;
    height: 7.8%;
    padding-left: 5.0416%;
    padding-top: 10%;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 800;
    font-size: 1.25vw;
    line-height: 1.71875vw;
    /* identical to box height */
    color: #FC5D54;
    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
}
.faq-text-block-description{
    width: 80.98%;
    height: 78.46153%;
    padding-left: 5.0416%;
    margin-top: 2vw;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 0.78125vw;
    line-height: 1.0416666vw;
    color: #FFFFFF;
    /* Inside auto layout */
    flex: none;
    order: 1;
    flex-grow: 0;
}
.faq-text-block:hover{
transform: scale(1.25);
transition: all .5s ease;

}
</style>
