
button=document.querySelectorAll("bt").value;

// fonction effacer
function delet(){
    document.getElementById("affi").value="";
}
// fonction afficher
function calculer(){
  let  input=document.getElementById("affi").value;
  document.getElementById("affi").value=eval(input)
   
    } 

function Affich(x){
    document.getElementById("affi").value+=x;
    document.getElementById("affi").style.color+="#fff";


}

