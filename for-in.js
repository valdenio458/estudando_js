// for/in em objetos:
var Celular = {
    fabricante:"Apple",
    modelo:"iPhone-6s",
    cor: "Branca"
}; 
           
for (let prop in Celular) {            
   //console.log(prop); 
   //console.log(Celular[prop]);   
   console.log("Em "+ prop + " nós temos " + Celular[prop])   
   
}    

// for/in em arrays:
var nomes = ["Ana","Luiz","Raphaela"]
            
           
for (let prop in nomes) {            
   //console.log(prop); 
   //console.log(Celular[prop]);   
   console.log(`Em ${prop} nós temos ${nomes[prop]}`)       
}    