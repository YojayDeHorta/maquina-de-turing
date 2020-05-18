var intervalo1 = undefined;
var intervalo2 = undefined;
var velocidadturing=document.getElementById("range");
var valor=document.getElementById('valor');
var notepases=0;
var vel=2000;
function recargar() {
  location.reload();
}
function cambiarvelocidad(){
  vel=velocidadturing.value;
  valor.innerHTML=vel;
}
function turing() {
      var bandera = 0; 
      var valor= document.getElementById("string_turing");
      var string_turing = valor.value;
      var vacio = "#";
      if(notepases==1){
        recargar();
      }
      //alert(string_turing);
      //revisar si no hay intrusos y crear los cuadros
      for(var j=0; j < string_turing.length; j++){
        if(string_turing[j] != 'a' && string_turing[j] != 'b'){
          bandera = 1; 
        }
    
        $( "#numerosid"+j+"" ).after( $( "<div class='numeros' id='numerosid"+(j+1)+"'/>" ) );
      }
      for(var k=0;k< string_turing.length;k++){
        
        $( "#numerosid"+(k+1)+"" ).append( $( "<p id='texto"+(k+1)+"'>"+string_turing[k]+"</p>" ) );
      }
      
      var i=0;
      
      
        if(bandera == 0){
          
          
            string_turing =vacio + string_turing + vacio;
              //empieza el cambio con el estado 1
              intervalo1 = setInterval(() => {
                vel=velocidadturing.value;
                if(string_turing[i+1]=="b"){
                    string_turing[i+1]=="a";
                    
                    $('#estado').html("(q1,b)=(q1,a,R)");
                    $( "#texto"+(i+1)+"" ).replaceWith( "<p>a</p>" );
                    $( "#numerosid"+(i+1)+"" ).slideUp( 300 ).delay( 800 );
                    
                }
                if(string_turing[i+1]=="a"){
                  $( "#texto"+(i+1)+"" ).replaceWith( "<p>a</p>" );
                  $( "#numerosid"+(i+1)+"" ).slideUp( 300 ).delay( 800 );
                  $('#estado').html("(q1,a)=(q1,a,R)");
                }
                if(string_turing[i+1]==vacio){
                  $('#estado').html("(q1,ẞ)=(q2,ẞ,L)");
                  bandera = 1;
                  clearInterval(intervalo1);
                  turingintervalo2(i,string_turing);
                }

                cs = string_turing.substring(0,string_turing.length-1);
                i++;
            }, vel);
            
            
        } else{
          alert("no recibimos mas letras a parte de a y b");
          recargar();
        }
      
      notepases++;
      
      

}
function turingintervalo2(i,string_turing){
  
  
  intervalo2 = setInterval(() => {
    vel=velocidadturing.value;
    i--;
    $('#estado').html("(q2,a)=(q2,a,L)");
  $( "#numerosid"+(i+1)+"" ).fadeIn( 400 );
    
    if(i==0){
      
      //llego a q3
      $('#estado').html("(q2,ẞ)=(q2,ẞ,R)");

      i++;//el puntero llega a su destino

      $('#iniciar').replaceWith( "<input type='button' class='rainbow-button' id='reset' onclick='recargar()' value='reset' >" );
      velocidadturing.value=2000;
      valor.innerHTML=2000;
      
      clearInterval(intervalo2);
    }
  }, vel);
    
    
}
function recargar() {
  location.reload();
}
