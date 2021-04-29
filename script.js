var imagens = []
const form = document.getElementById('formulario')
form.onsubmit = function() {
   event.preventDefault()
   var nomeprotagonista = document.getElementById('nomeprotagonista').value
   var monster = document.getElementById('monstros').value
   var protagonist = document.getElementById('espprotagonista').value
   var weapon = document.getElementById('arma').value
   var historyplace = document.getElementById('localhistoria').value
   var accidentt = document.getElementById('acidente').value
   var novahistoria = new History(nomeprotagonista ,monster, protagonist, weapon, historyplace, accidentt, imagens)
   novahistoria.construirhistoria()
   novahistoria.backgroundmove()
   

   //
   const createbtnnewhis = document.createElement('button')
   createbtnnewhis.classList.add('btnvoltar')
   createbtnnewhis.innerText = 'Criar nova historia'
   document.getElementById("sechistoria").appendChild(createbtnnewhis)
   document.getElementById("sechistoria").style.border = '1px solid rgb(255,255,255)'
   document.getElementById("sechistoria").style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
   form.style.display = 'none'
   
   //

   // btn nova historia
   createbtnnewhis.onclick = function() {
       window.location.href = "/"
   }
   //

   var a = 0;
   var txt = novahistoria.construirhistoria()
   var speed = 40; 

   function typeWriter() {
   if (a < txt.length) {
       document.getElementById("insertext").innerHTML += txt.charAt(a);
       a++;
       setTimeout(typeWriter, speed);
   }
   }
   



   typeWriter()
}




class History{
   constructor(nomeprotagonista ,monstro, protagonista, arma, localhistoria, acidente, imagens=[]){
       this.nomeprotagonista = nomeprotagonista
       this.monstro = monstro
       this.protagonista = protagonista
       this.arma = arma
       this.localhistoria = localhistoria
       this.acidente = acidente
       this.imagens = imagens
   }

   construirhistoria(){
       var i = 0
       switch (this.monstro) {
       case 'Zumbis':
           this.imagens.push('/img/zumbies/1.jpg')
           this.imagens.push('/img/zumbies/2.jpg')
           this.imagens.push('/img/zumbies/3.jpg')
           document.body.style.backgroundImage = `url(${this.imagens[0]})`
           break;
       case 'Orcs':
           this.imagens.push('/img/orcs/1.jpg')
           this.imagens.push('/img/orcs/2.jpg')
           this.imagens.push('/img/orcs/3.jpg')
           document.body.style.backgroundImage = `url(${this.imagens[0]})`
           break;
       case 'Vampiros':
           this.imagens.push('/img/vampire/1.jpg')
           this.imagens.push('/img/vampire/2.jpg')
           this.imagens.push('/img/vampire/3.jpg')
           document.body.style.backgroundImage = `url(${this.imagens[0]})`
           break;
       case 'Lobisomens':
           this.imagens.push('/img/lycan/1.jpg')
           this.imagens.push('/img/lycan/2.jpg')
           this.imagens.push('/img/lycan/3.jpg')
           document.body.style.backgroundImage = `url(${this.imagens[0]})`
           break;
       case 'Golems':
           this.imagens.push('/img/golem/1.jpg')
           this.imagens.push('/img/golem/2.jpg')
           this.imagens.push('/img/golem/3.jpg')
           document.body.style.backgroundImage = `url(${this.imagens[0]})`
           break;
       case 'Fénix':
           this.imagens.push('/img/phoenix/1.jpg')
           this.imagens.push('/img/phoenix/2.jpg')
           this.imagens.push('/img/phoenix/3.jpg')
           document.body.style.backgroundImage = `url(${this.imagens[0]})`
           break;
       case 'Minotauros': 
           this.imagens.push('/img/minotaur/1.jpg')
           this.imagens.push('/img/minotaur/2.jpg')
           this.imagens.push('/img/minotaur/3.jpg')
           document.body.style.backgroundImage = `url(${this.imagens[0]})`
           break;
       case 'Ogros':
           this.imagens.push('/img/ogre/1.jpg')
           this.imagens.push('/img/ogre/2.jpg')
           this.imagens.push('/img/ogre/3.png')
           document.body.style.backgroundImage = `url(${this.imagens[0]})`
           break;
    }
   
       var history = `Era uma vez em lugar chamado ${this.localhistoria} lá um habitante que se chamava ${this.nomeprotagonista}, ele/ela era um ${this.protagonista} muito alegre, até que foi chegada a era dos ${this.monstro}, que foi causada em ${new Date().getFullYear()} por uma/um ${this.acidente} que fazia com que os humanos pertos se tornassem ${this.monstro}, criaturas sem qualquer tipo de consciência, suas únicas motivações eram comer ${this.protagonista} e soltar pipa. O ${this.protagonista} se viu obrigado a aprender técnicas de combate aprimoradas, até que encontrou no Submundo de ${this.localhistoria} uma/um ${this.arma}, ferramenta que ele utilizou por décadas no combate destes ${this.monstro}, até que um dia aprendeu uma magia capaz de trazer os ${this.monstro} de volta a sanidade mental, esses por sua vez não esqueceram como Soltar pipa... The end XD`
       return history
       
   }
 

   backgroundmove(){ 
       var i = 1
       setInterval(() => {
           document.body.style.backgroundImage = `url(${this.imagens[i]})` 
           i++
           if (i > 2){
               i = 0
           } 
       }, 5000);
   }
   
}