<template>
    <div class="background-mapspage">
      <map-block>

        <button id="draw">рисовать</button>
        <button id="save">сохранить</button>
        <div id="container" style="position: relative;">
          <div id="map"></div>
          <canvas id="draw-canvas" style="position: absolute; left: 0; top: 0; display: none;"></canvas>
        </div>
      </map-block>
        <div class="user-routes">
            <div class="user-routes-header"></div>
            <div class="tasksform">
            <div class="task" v-for="taskLocal in taskslocal">
                <div class="line-task"></div>
                <div class="task-description">
                <div class="task-name-group">
                    <div class="name-task">{{taskLocal.id}}. {{taskLocal.NameofRout}}</div>
                    <div class="time-task">{{taskLocal.TimeofRout}}</div>
                </div>
                  <button class="start-task-button" @click="showModal = true"></button>
                  <button class="edit-task-button" @click="showModal = true"></button>
                </div>

            </div>
            </div>
        </div>

    </div>

</template>

<script>
import {loadYmap, yandexMap, ymapMarker} from 'vue-yandex-maps'

var polygonOptions = {
  strokeColor: '#0000ff',
  fillColor: '#8080ff',
  interactivityModel: 'default#transparent',
  strokeWidth: 4,
  opacity: 0.7
};

var canvasOptions = {
  strokeStyle: '#0000ff',
  lineWidth: 4,
  opacity: 0.7
};

ymaps.ready(['Map', 'Polygon']).then(function() {
  var map = new ymaps.Map('map', { center: [55.75, 37.62], zoom: 8 });
  var polygon = null;

  var drawButton = document.querySelector('#draw');
  var saveButton = document.querySelector('#save');

  saveButton.onclick = function(){
    const request = new XMLHttpRequest();

    const user = document.getElementById('user').value
    const password = document.getElementById('pass').value

    request.open('POST', `http://164.92.223.247/api/set_routes?`, false);
    request.send();
    if (request.status != 200){
      return null;
    }
    let authToken = JSON.parse(request.response)[0];
  }

  drawButton.onclick = function() {
    drawButton.disabled = true;

    drawLineOverMap(map)
        .then(function(coordinates) {
          // Переводим координаты из 0..1 в географические.
          var bounds = map.getBounds();
          coordinates = coordinates.map(function(x) {
            return [
              // Широта (latitude).
              // Y переворачивается, т.к. на canvas'е он направлен вниз.
              bounds[0][0] + (1 - x[1]) * (bounds[1][0] - bounds[0][0]),
              // Долгота (longitude).
              bounds[0][1] + x[0] * (bounds[1][1] - bounds[0][1]),
            ];
          });

          // Тут надо симплифицировать линию.
          // Для простоты я оставляю только каждую третью координату.
          coordinates = coordinates.filter(function (_, index) {
            return index % 3 === 0;
          });


          drawButton.disabled = false;
        });
  };
});

function drawLineOverMap(map) {
  var canvas = document.querySelector('#draw-canvas');
  var ctx2d = canvas.getContext('2d');
  var drawing = false;
  var coordinates = [];

  // Задаем размеры канвасу как у карты.
  var rect = map.container.getParentElement().getBoundingClientRect();
  canvas.style.width = rect.width + 'px';
  canvas.style.height = rect.height + 'px';
  canvas.width = rect.width;
  canvas.height = rect.height;

  // Применяем стили.
  ctx2d.strokeStyle = canvasOptions.strokeStyle;
  ctx2d.lineWidth = canvasOptions.lineWidth;
  canvas.style.opacity = canvasOptions.opacity;

  ctx2d.clearRect(0, 0, canvas.width, canvas.height);

  // Показываем канвас. Он будет сверху карты из-за position: absolute.
  canvas.style.display = 'block';

  canvas.onmousedown = function(e) {
    // При нажатии мыши запоминаем, что мы начали рисовать и координаты.
    drawing = true;
    coordinates.push([e.offsetX, e.offsetY]);
  };

  canvas.onmousemove = function(e) {
    // При движении мыши запоминаем координаты и рисуем линию.
    if (drawing) {
      var last = coordinates[coordinates.length - 1];
      ctx2d.beginPath();
      ctx2d.moveTo(last[0], last[1]);
      ctx2d.lineTo(e.offsetX, e.offsetY);
      ctx2d.stroke();

      coordinates.push([e.offsetX, e.offsetY]);
    }
  };

  return new Promise(function(resolve) {
    // При отпускании мыши запоминаем координаты и скрываем канвас.
    canvas.onmouseup = function(e) {
      coordinates.push([e.offsetX, e.offsetY]);
      canvas.style.display = 'none';
      drawing = false;

      coordinates = coordinates.map(function(x) {
        return [x[0] / canvas.width, x[1] / canvas.height];
      });

      resolve(coordinates);
    };
  });
}

const request = new XMLHttpRequest();
request.open('POST', `http://164.92.223.247/api/get_routes?`, false);
request.setRequestHeader('Authorization', localStorage.getItem('token'))
request.send();
if (request.status != 200){
  let tasks = [];
}
let tasks = JSON.parse(request.response);

export default{
    name: "Tool",
    data (){
        return{
            showModal: false,
            taskslocal: tasks,
        }
    },
    computed: {
    },
    methods: {
        addTaskLocal() {
            const newTask = {
                id: this.id,
                Name: this.Name,
            }
            this.taskslocal.push(newTask)
        },
    },
}

</script>

<style>
map-block{
    position: absolute;
    width: 100vw;
    height: 49.53125vw;
    left:0;
    top: 5.052083333vw;
    background-color: #594c4a;
    border-radius: 1.7vw;

}
#map {
  width: 100%;
  height: 100%;
  min-height: 500px;
}

#app {
  width: 100%;
  height: 100vh;
}

.ymap-container {
  height: 100%;
}


.background-mapspage{
    position:absolute;
    overflow: hidden;
    width: 100%;
    height: 130.260416666vw;
    left: 0px;
    top: 0px;
    margin: 0%;
    padding: 0%;
    background: radial-gradient(71.64% 192.64% at 97.37% 10.13%, #FFD286 0%, rgba(255, 183, 167, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, radial-gradient(37.96% 104.94% at 0% 111.98%, #FF4479 0%, rgba(255, 183, 167, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, radial-gradient(168.69% 168.55% at 52.4% 32.81%, #F39261 0%, #FFB7A7 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    background-size: 100%;
}
.user-routes{
    position: absolute;
    width: 100vw;
    height: 40.9375vw;
    left: 0;
    top: 60.572916666vw;
    background: url(../media/back\ fon.svg) no-repeat;
    background-size: 100%;
}
.user-routes-header{
    position: absolute;
    width: 36.458333vw;
    height: 5.78125vw;
    left: 22.395833vw;
    top: 3.28125vw;
    background: url(../media/user-routes-header.svg) no-repeat;
    background-size: 100%;
}
.tasksform{
    position: absolute;
    width: 59.427083vw;
    height: 26.041667vw;
    top: 11.770833vw;
    left: 20.3125vw;
    overflow: auto;
    overflow-x: hidden;

}
.task{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 59.427083vw;
    height: 8.022917vw;
    left: 20.3125vw;
}
.line-task{
    width: 59.427083vw;
    border: 0.15625vw solid rgba(255, 255, 255, 0.7);
    background: #FFFFFF;
    transform: rotate(0.26deg);
    border-radius: 1vw;
    margin-top: 0.5vw;
    flex: none;
    order: 0;
    flex-grow: 0;
}
.name-task{
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 1.666667vw;
    line-height: 2.291667vw;

    color: #FFFFFF;
    flex: none;
    order: 0;
    flex-grow: 0;
}
.time-task{
    max-height: 5vw;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 1.041667vw;
    line-height: 1.40625vw;

    color: rgba(255, 255, 255, 0.6);

    margin-left: 2vw;
    flex: none;
    order: 1;
    flex-grow: 0;

}
.start-task-button{
    width: 2.916667vw;
    height: 2.916667vw;;
    background: url(../media/start-task-button.svg) no-repeat;
    background-size: 100%;
    border: 0;
    flex: none;
    order: 1;
    flex-grow: 0;

}
.edit-task-button{
    width: 10.729167vw;
    height: 2.916667vw;
    background: url(../media/edit-task-button.svg) no-repeat;
    background-size: 100%;
    border: 0;
    margin-left: 3vw;
    flex: none;
    order: 2;
    flex-grow: 0;

}
.task-name-group{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 36vw;
    height: 5.729167vw;
    flex: none;
    order: 0;
    flex-grow: 0;


}
.task-description{
    display: flex;
    flex-direction: row;
    justify-content:stretch;
    align-items:center;
    padding: 0;
    left: 0;
    width: 59.427083vw;
    height: 8.022917vw;
    flex: none;
    order: 1;
    flex-grow: 0;



}

</style>
