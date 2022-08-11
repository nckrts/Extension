const generateSTYLES = () => {
    return `<style>
    /*@import url(https://fonts.googleapis.com/css?family=opensans:500);*/
  body {
    background: #ff00e5;
    color: #ffffff;
    font-family: "Open Sans", sans-serif;
    max-height: 700px;
    overflow: hidden;
  }
  .c {
    text-align: center;
    display: block;
    position: relative;
    width: 80%;
    margin: 100px auto;
  }
  ._404 {
    font-size: 300px;
    position: relative;
    display: inline-block;
    z-index: 2;
    height: 250px;
    letter-spacing: 15px;
  }
  ._1 {
    margin-top: 20px;
    text-align: center;
    display: block;
    position: relative;
    letter-spacing: 12px;
    font-size: 3em;
    line-height: 80%;
    border-bottom: black 10px;
  }
  ._2 {
   margin: 25px;
    text-align: center;
    display: block;
    position: relative;
    letter-spacing: 12px;
    font-size: 1em;
    line-height: 80%;
    border-bottom: black 10px;
  }
  .text {
    font-size: 70px;
    text-align: center;
    position: relative;
    display: inline-block;
    margin: 19px 0px 0px 0px;
    /* top: 256.301px; */
    z-index: 3;
    width: 100%;
    line-height: 1.2em;
    display: inline-block;
  }
  
 
  .right {
    float: right;
    width: 60%;
  }
  
  hr {
    padding: 0;
    border: none;
    border-top: 5px solid #fff;
    color: #fff;
    text-align: center;
    margin: 0px auto;
    width: 420px;
    height: 10px;
    z-index: -10;
  }
  
  hr:after {
    display: inline-block;
    position: relative;
    top: -0.20em;
    font-size: 2em;
    padding: 0 0.2em;
    background: #c600ff;
  }
  
  .cloud {
    width: 350px;
    height: 120px;
    
    background: #fff;
    background: linear-gradient(top, #fff 100 %);
    background: -webkit-linear-gradient(top, #fff 100 %);
    background: -moz-linear-gradient(top, #fff 100 %);
    background: -ms-linear-gradient(top, #fff 100 %);
    background: -o-linear-gradient(top, #fff 100 %);
  
    
    border-radius: 100px;
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
    
    position: absolute;
    margin: 120px auto 20px;
    z-index: -1;
    transition: ease 1s;
  }
  
  .cloud img{
    position: absolute;
    left: 50%;
    top: 20px;
    transform: translate(-50%);
    width: auto;
    height: calc(40% + 40px);
  }
  
  .cloud:after,
  .cloud:before {
    content: "";
    position: absolute;
    background: #fff;
    z-index: -1;
  }
  
  .cloud:after {
    width: 100px;
    height: 100px;
    top: -50px;
    left: 50px;
  
    border-radius: 100px;
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
  }
  
  .cloud:before {
    width: 180px;
    height: 180px;
    top: -90px;
    right: 50px;
  
    border-radius: 200px;
    -webkit-border-radius: 200px;
    -moz-border-radius: 200px;
  }
  
  .x1 {
    top: -50px;
    left: 100px;
    -webkit-transform: scale(0.3);
    -moz-transform: scale(0.3);
    transform: scale(0.3);
    opacity: 0.9;
    -webkit-animation: moveclouds 15s linear infinite;
    -moz-animation: moveclouds 15s linear infinite;
    -o-animation: moveclouds 15s linear infinite;
  }
  
  .x1_5 {
    top: -80px;
    left: 250px;
    -webkit-transform: scale(0.3);
    -moz-transform: scale(0.3);
    transform: scale(0.3);
    -webkit-animation: moveclouds 17s linear infinite;
    -moz-animation: moveclouds 17s linear infinite;
    -o-animation: moveclouds 17s linear infinite;
  }
  
  .x2 {
    left: 250px;
    top: 30px;
    -webkit-transform: scale(0.6);
    -moz-transform: scale(0.6);
    transform: scale(0.6);
    opacity: 0.6;
    -webkit-animation: moveclouds 25s linear infinite;
    -moz-animation: moveclouds 25s linear infinite;
    -o-animation: moveclouds 25s linear infinite;
  }
  
  .x3 {
    left: 250px;
    bottom: -70px;
  
    -webkit-transform: scale(0.6);
    -moz-transform: scale(0.6);
    transform: scale(0.6);
    opacity: 0.8;
  
    -webkit-animation: moveclouds 25s linear infinite;
    -moz-animation: moveclouds 25s linear infinite;
    -o-animation: moveclouds 25s linear infinite;
  }
  
  .x4 {
    left: 470px;
    botttom: 20px;
  
    -webkit-transform: scale(0.75);
    -moz-transform: scale(0.75);
    transform: scale(0.75);
    opacity: 0.75;
  
    -webkit-animation: moveclouds 18s linear infinite;
    -moz-animation: moveclouds 18s linear infinite;
    -o-animation: moveclouds 18s linear infinite;
  }
  
  .x5 {
    left: 200px;
    top: 300px;
  
    -webkit-transform: scale(0.5);
    -moz-transform: scale(0.5);
    transform: scale(0.5);
    opacity: 0.8;
  
    -webkit-animation: moveclouds 20s linear infinite;
    -moz-animation: moveclouds 20s linear infinite;
    -o-animation: moveclouds 20s linear infinite;
  }
  
 .button{
 top: 50px;
  width: 200px;
  padding: 15px 0;
  text-align: center;
  margin: 20px 10px;
  border-radius: 25px;
  font-weight: bold;
  border: 2px solid #bc00ff;
  background: transparent;
  color: #fff;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: ease-in-out 0.3s;
}


.button:hover{
  border: none;
  background: #ff005a;
  transform: translateY(-7px);
}

.move {
  animation-name: move;
  animation-duration: 700ms;
  animation-fill-mode: backwards;
  animation-delay: 250ms;
}
  
  
  @-webkit-keyframes moveclouds {
    0% {
      margin-left: 2000px;
    }
    100% {
      margin-left: -1000px;
    }
  }
  @-moz-keyframes moveclouds {
    0% {
      margin-left: 2000px;
    }
    100% {
      margin-left: -1000px;
    }
  }
  @-o-keyframes moveclouds {
    0% {
      margin-left: 2000px;
    }
    100% {
      margin-left: -1000px;
    }
  }
   </style>`;
};


const generateHTML = (pageName) => {
    return `
   
   <div id="clouds">
      <div class="cloud x1"><img src="https://i.imgur.com/x6T9Jun.png"></div>
      <div class="cloud x1_5"><img src="https://i.imgur.com/x6T9Jun.png"></div>
      <div class="cloud x2"><img src="https://i.imgur.com/x6T9Jun.png"></div>
      <div class="cloud x3"><img src="https://i.imgur.com/x6T9Jun.png"></div>
      <div class="cloud x4"><img src="https://i.imgur.com/x6T9Jun.png"></div>
      <div class="cloud x5"><img src="https://i.imgur.com/x6T9Jun.png"></div>
  </div>
  <div class='c'>
      <div class='_404'><img src="https://i.imgur.com/x6T9Jun.png"></div>
      <hr>
      <div class='_2'>NAVEGAÇÃO BLOQUEADA</div>
      <div class='_1'>CLIQUE NO BOTÃO PARA LIBERAR</div>
      
  <button class="button" id="btn">LIBERAR NAVEGAÇÃO !</button>
  </div>
   `;
};

const date = new Date().toLocaleTimeString();
const startTime = '08:00:00';
const finalTime = '18:00:00';

pointpress = 0;
pointpressverification = localStorage.getItem('pointpress');

if (pointpressverification === null) {
    if (pointpress === 0) {
        document.head.innerHTML = generateSTYLES();
        document.body.innerHTML = generateHTML("IOPOINT");

    }
}

document.querySelector('#btn').addEventListener('click', function (){
    pointpress = 1;
    localStorage.setItem('pointpress', JSON.stringify(pointpress));
    console.log('entrou no event');
    window.location.reload();
})

                              //block with schedule //

// if (date > startTime || date < finalTime) {
//     pointpress = 0;
//     localStorage.setItem('pointpress', JSON.stringify(pointpress));
//     window.location.reload();
// }