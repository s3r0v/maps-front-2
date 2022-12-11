<template>
    <div class="navbar-block">
        <div class="navbar-block-logo" @click="$router.push('/')"></div>
        <div class="navbar-block-menu">
            <button class="navbar-block-menu-button" @click="$router.push('/')">Главная</button>
            <button class="navbar-block-menu-button">О нас</button>
            <button class="navbar-block-menu-button" @click="$router.push('/maps')">Карты</button>
        </div>
        <button class="navbar-login-button" @click="showloginModal = true">Войти</button>
    </div>
    <div v-if="showloginModal" class="backgroundfon-trans">
        <form class="login" @submit.prevent="login">
            <div class="background-fon-form">
                    <div class="sign_in_main_text">Sign in</div>
                    <input class="login-input" id='user' placeholder="Username"/>
                    <input  class="password-input" id="pass" placeholder="Пароль" type="password"/>
                    <button class="sign-in-button" v-on:click="login()">Войти</button>
                    <div class="line-form"></div>
                    <div class="registration_text" @click="showloginModal = false, showRegistrationModal = true">Registration</div>
                    <button class="closeform" @click="showloginModal = false">X</button>

            </div>
        </form>
    </div>
    <div v-if="showRegistrationModal" class="backgroundfon-trans">
        <form class="login" @submit.prevent="login">
                <div class="background-fon-form">
                    <div class="registration_main_text">Registration</div>
                    <input class="login-input" type="text" placeholder="Email"/>
                    <input class="password-input" type="password" placeholder="Пароль"/>
                    <input class="confirm-password-input" type="password" placeholder="Повторите пароль"/>
                    <button class="sign-in-button">Зарегистрироваться</button>
                    <div class="line-form"></div>
                    <div class="already_registered_text">Уже зарегистрированы?</div>
                    <div class="sign_in_text" @click="showRegistrationModal = false, showloginModal = true">Sign in</div>
                    <button class="closeform" @click="showRegistrationModal = false">X</button>
                </div>
        </form>
    </div>

</template>

<script>

export default{
    name: "Tool",
    data (){
        return{
            showloginModal: false,
            showRegistrationModal: false
        }
    },
    methods: {
        closePopup(){
            this.$emit('closePopup')
        },
        async login(){
          const request = new XMLHttpRequest();

          const user = document.getElementById('user').value
          const password = document.getElementById('pass').value

          request.open('POST', `http://164.92.223.247/api/login?Password=${password}&Username=${user}`, false);
          request.send();
          if (request.status != 200){
            return null;
          }
          let authToken = JSON.parse(request.response)[0];
          console.log(authToken);
          localStorage.setItem('token', authToken)
        }
    }

}

</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans');
.navbar-block{
    position: absolute;
    overflow: hidden;
    width: 100%;
    height: 3.125vw;
    left: 0;
    top: 0.625vw;
}
.navbar-block-logo{
    position: absolute;
    overflow: hidden;
    width: 9.9vw;
    height: 3.125vw;
    left: 16.5625vw;
    top: 0;
    background: url(../media/maps-navbar-logo.svg) no-repeat;
    background-size: 100%;


}
.navbar-block-menu{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 1vw;
    position: absolute;
    width: 12vw;
    height: 2.03125vw;
    left: 45.3125vw;
    top: 0.416666vw;
}
.navbar-block-menu-button{
    width: 23;
    height: 2.03125vw;
    align-items: center;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 0.8333333vw;
    line-height: 1.197916666vw;
    /* identical to box height, or 23px */
    background: none;
    border: 0;
    letter-spacing: -0.04em;
    color: #FFFFFF;
    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
}
.navbar-block-menu-button:hover{
    color: #b8b5b5
}
.navbar-login-button{
    position: absolute;
    width: 4.739583334vw;
    height: 2.239583334vw;
    left: 78.385416666vw;
    top: 0.416666vw;
    box-sizing: border-box;
    border: 0.104vw solid rgba(255, 255, 255, 0.3);
    border-radius: 100px;
    border: 0.1vw solid;
    background: transparent;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 0.78125vw;
    line-height: 167.3%;
    /* or 25px */
    color: #ffffff;

}
.navbar-login-button:hover{
    color: #626262;
    background-color: rgba(44, 44, 44, 0.5);
    border: 0;
}
@import url('https://fonts.googleapis.com/css?family=Poppins');
@import url('https://fonts.googleapis.com/css?family=Montserrat');
.background-fon-black-login{
    position:absolute;
    overflow: hidden;
    width: 100%;
    height: 78.125vw;
    left: 0px;
    top: 0px;
    margin: 0%;
    padding: 0%;
    background-color: #131722;
}
.background-fon-form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    position: absolute;
    width: 41.25vw;
    height: 37.083vw;
    margin-left: 29.375vw;
    margin-top: 8.33vw;
    background: linear-gradient(180deg, rgba(116, 116, 116, 0.21) 0%, rgba(210, 210, 210, 0.518) 100%);
    box-shadow: inset 0px 1px 2px rgba(239, 232, 232, 0.6);
    backdrop-filter: blur(15px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 20px;
}
.sign_in_main_text{
    position: absolute;
    width: 7.55vw;
    height: 3.4895vw;
    left: 16.82291vw;
    top: 4.63541666vw;
    font-family: 'Montserrat';
    font-style:normal;
    font-weight: 700;
    font-size: 2.083333vw;
    line-height: 167.3%;
    /* identical to box height, or 67px */
    text-align: center;
    color: #FFFFFF;
}
.login-input{
    position: absolute;
    width: 28.58333vw;
    height: 2.91666vw;
    left: 5.78125vw;
    top: 11.458333vw;
    padding-left: 1vw;
    outline: 0;
    outline-offset: 0;
    background: rgba(255, 122, 0, 0.3);
    box-shadow: inset 0px 1px 2px rgba(239, 232, 232, 0.6);
    backdrop-filter: blur(1.5px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 15px;
    border: 0;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 0.78125vw;
    /* or 25px */
    color: #ffffff;
}
.backgroundfon-trans{
    position: absolute;
    width: 100%;
    height: 130vw;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0, 0.5);

}
.password-input{
    position: absolute;
    width: 28.58333vw;
    height: 2.91666vw;
    left: 5.78125vw;
    top: 15.625vw;
    padding-left: 1vw;
    outline: 0;
    outline-offset: 0;
    background: rgba(255, 122, 0, 0.3);
    box-shadow: inset 0px 1px 2px rgba(239, 232, 232, 0.6);
    backdrop-filter: blur(1.5px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 15px;
    border: 0;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 0.78125vw;
    line-height: 167.3%;
    /* or 25px */
    color: #ffffff;
}
.sign-in-button{
    position: absolute;
    width: 29.583333vw;
    height: 2.916666vw;
    left: 5.78125vw;
    top: 23.9583333vw;
    background: linear-gradient(4.19deg, #FFB772 -17.59%, #FF927B 115.3%);
    box-shadow: inset 0px 1px 2px rgba(239, 232, 232, 0.6);
    backdrop-filter: blur(2.5px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 15px;
    border: 0;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 0.78125vw;
    line-height: 167.3%;
    /* or 25px */
    color: #ffffff;
}
.sign-in-button:hover{
    background: linear-gradient(4.19deg, #ad7d50 -17.59%, #b87467 115.3%);
    background-size: 100%;
    border: 0;
}
.line-form{
    position: absolute;
    width: 29.583333vw;
    height: 0px;
    left: 5.78125vw;
    top: 30.15625vw;
    border: 1px solid #FFFFFF;
}
.registration_text{
    position: absolute;
    width: 4.89583333vw;
    height: 1.0416666vw;
    left: 18.125vw;
    top: 31.6666vw;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 0.72916666vw;
    line-height: 140%;
    /* identical to box height, or 20px */
    text-align: right;
    text-decoration-line: underline;
    /* Green */
    color: #73FFF2;
}
.registration_text:hover{
    color: #636363;
}
.registration_main_text{
    position: absolute;
    width: 7.55vw;
    height: 3.4895vw;
    left: 13.854167vw;
    top: 4.63541666vw;
    font-family: 'Montserrat';
    font-style:normal;
    font-weight: 700;
    font-size: 2.083333vw;
    line-height: 167.3%;
    /* identical to box height, or 67px */
    text-align: center;
    color: #FFFFFF;
}
.confirm-password-input{
    position: absolute;
    width: 28.58333vw;
    height: 2.91666vw;
    left: 5.78125vw;
    top: 19.84375vw;
    padding-left: 1vw;
    outline: 0;
    outline-offset: 0;
    background: rgba(255, 122, 0, 0.3);
    box-shadow: inset 0px 1px 2px rgba(239, 232, 232, 0.6);
    backdrop-filter: blur(1.5px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 15px;
    border: 0;
    font-family: 'Montserrat';
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 0.78125vw;
    line-height: 167.3%;
    /* or 25px */
    color: #ffffff;
}
.line-form{
    position: absolute;
    width: 29.583333vw;
    height: 0px;
    left: 5.78125vw;
    top: 30.15625vw;
    border: 1px solid #FFFFFF;
}
.sign_in_text{
    position: absolute;
    width: 4.89583333vw;
    height: 1.0416666vw;
    left: 30.604167vw;
    top: 31.40625vw;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 0.72916666vw;
    line-height: 140%;
    /* identical to box height, or 20px */
    text-align: right;
    text-decoration-line: underline;
    /* Green */
    color: #73FFF2;
}
.sign_in_text:hover{
    color: #636363;
}
.already_registered_text{
    position: absolute;
    width: 10vw;
    height: 1.0441667vw;
    left: 5.78125vw;
    top: 31.40625vw;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 0.729167vw;
    line-height: 140%;
    /* identical to box height, or 20px */
    color: #FFFFFF;
}
.closeform{
    box-sizing: border-box;
    position: absolute;
    width: 2vw;
    height: 2vw;
    left: 92%;
    top: 1.5vw;
    border-radius: 1.5vw;
    background-color: transparent ;
    border: 0.1vw solid;
    border-color: #767676;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 900;
    font-size: 0.78125vw;
}
.closeform:hover{
    background-color: rgba(122, 122, 122, 0.518);
}

</style>
