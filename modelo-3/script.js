function verificar(){
   var data = new Date();
   var ano = data.getFullYear();
   var fano = document.getElementById('txtano');
   var res = document.querySelector("#res");

   if(fano.value.length == 0 || fano.value > ano){
       alert("ERRO! Verifique os dados e tente novamente")
   }else{
       var sex = document.getElementsByName("radsex");
       var idade = ano - Number(fano.value);
       var genero = "";
       var img = document.createElement('img');
       img.setAttribute('id','foto');

       if(sex[0].checked) {
           genero = 'homem'
           if(idade >= 0 && idade < 10){
               // Criança
               img.setAttribute('src','bebe-h.png')
           } else if(idade < 21){
               // Jovem
               img.setAttribute('src','crianca-h1.png')
           } else if(idade < 50){
               // Adulto
               img.setAttribute('src','jovem-h1.png')
           } else{
               // Idoso
               img.setAttribute('src','idoso-h1.png')
           }
       } else if(sex[1].checked) {
           genero = 'mulher'
           if(idade >= 0 && idade < 10){
            // Criança
            img.setAttribute('src','bebe-m.png')
        }else if(idade < 21){
            // Jovem
            img.setAttribute('src','crianca-m1.png')  
        }else if(idade < 50){
            // Adulto
            img.setAttribute('src','jovem-m1.png')
        }else{
            // Idoso
            img.setAttribute('src','idoso-m1.png')
        }
       }
       res.style.textAlign = 'center';
       res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
       res.appendChild(img);
   }

}
