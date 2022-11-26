//ACTION POSSIBLE APRES EXECUTION DE LA CLASSE CHARGEMENT  
// Deplus_information 
// Action manuelle n°1
function action_information(_this){
    // ACTION MANUELLE BOUTTON N°1  
   
     Information_title = _this.title ; 
     document.getElementById("information_1").scrollTop="0" ; 
     document.getElementById("colors_block").className="colors0" ; 
     
     
     var information_1 = document.getElementById("information_1");
     information_1.innerHTML="" ; 
     
     
     var total_ = deplus_1.length ; 
     var scroll_plus =25 ; 
     ii_plus =  scroll_plus;
     
     
     
     
     for(var ii = 1 ; ii<scroll_plus;ii++){  
     
     var para = document.createElement("div");
     
     switch (_this.title) {
     case "get_result_villes_nom_array_2": 
     // Create element:    
     
     
     scroll_plus_total = deplus_1.length ;
      para.innerHTML = deplus_1[ii].get_result_villes_nom_array_2;  
      para.setAttribute("title",deplus_1[ii].get_result_villes_nom_array_2);   
     break;
     case "get_club_nom_complet_array_2": 
    
     // Create element:    
     para.innerHTML = deplus_2[ii].get_club_nom_complet_array_2; 
      scroll_plus_total = deplus_2.length ;
      para.setAttribute("title",deplus_2[ii].get_club_nom_complet_array_2);    
     break;
     case "get_club_region_array_2": 
     // Create element:    
     para.innerHTML = deplus_3[ii].get_club_region_array_2;   
      scroll_plus_total = deplus_3.length ;
      para.setAttribute("title",deplus_3[ii].get_club_region_array_2);  
     break;
     case "get_club_departement_array_2": 
     // Create element:    
     para.innerHTML = deplus_4[ii].get_club_departement_array_2;  
      scroll_plus_total = deplus_4.length ;
      para.setAttribute("title",deplus_4[ii].get_club_departement_array_2);   
     break;
     case "get_epreuve_nom_complet": 
     // Create element:    
     para.innerHTML = deplus_5[ii].get_epreuve_nom_complet;  
      scroll_plus_total = deplus_5.length ;  
      para.setAttribute("title",deplus_5[ii].get_epreuve_nom_complet); 
       
      break;  
     case "Accueil": 
     // Create element:    
     information_1.innerHTML="" ; 
     
     break;    
     
     }
     
      //para.setAttribute("onclick","action_get_information(this)"); 
      para.setAttribute("onclick","action_get_information(this)"); 
      
      // action_information
      para.setAttribute("class","bgcolors") ;      
     // Append to another element:
     document.getElementById("information_1").appendChild(para); 
     document.getElementById("information_1").className="" ; 
     } 
     
    
     }
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx

// apres l'action n°1 automatique 
// Apres l'action manuelle de l'utilisateur qui affiche les element 
// L'orsque l'utilisateur scroll la page les element aparaisse  pour eviter un grand nombre de chargement
// Action manuelle n°2 
function onscroll_function(_this){
    // FONCTION AUTOMATIQUE n°2 
    // Permet de charger les element lors que l'utilisateur scroll pour eviter un grand chargement au depart 
    //console.log(_this.scrollTop) ; 
    /*
    console.log(scroll_plus_total) ; 
    console.log(Information_title) ; 
    */
    console.log(scroll_plus_total) ; 
    
    if(scroll_plus_total>ii_plus+1){
    
    
    
    switch (Information_title) {
    case "get_result_villes_nom_array_2":
    
     // console.log(ii_plus) ; 
    
    
    for(var i_2 = 1 ; i_2<50; i_2++){
    
    if(deplus_1[ii_plus].get_result_villes_nom_array_2!=undefined){
    var para = document.createElement("div");
    para.innerHTML = deplus_1[ii_plus].get_result_villes_nom_array_2;  
    
    para.setAttribute("title",deplus_1[ii_plus].get_result_villes_nom_array_2); 
    para.setAttribute("onclick","action_get_information(this)");   
    para.setAttribute("class","bgcolors") ; 
    document.getElementById("information_1").appendChild(para); 
    ii_plus ++;
    }
    
    }
    
    break;
    
    case "get_club_nom_complet_array_2":
    
    
    for(var i_2 = 1 ; i_2<50; i_2++){
    
    if(deplus_2[ii_plus].get_club_nom_complet_array_2!=undefined){
    var para = document.createElement("div");
    para.innerHTML = deplus_2[ii_plus].get_club_nom_complet_array_2;  
    
    para.setAttribute("title",deplus_2[ii_plus].get_club_nom_complet_array_2); 
    para.setAttribute("onclick","action_get_information(this)");   
    para.setAttribute("class","bgcolors") ; 
    document.getElementById("information_1").appendChild(para); 
    ii_plus ++;
    }
    
    }
      break;
    case "get_club_region_array_2":
    
    
    for(var i_2 = 1 ; i_2<50; i_2++){
    
    if(deplus_3[ii_plus].get_club_region_array_2!=undefined){
    var para = document.createElement("div");
    para.innerHTML = deplus_3[ii_plus].get_club_region_array_2;  
    
    para.setAttribute("title",deplus_3[ii_plus].get_club_region_array_2); 
    para.setAttribute("onclick","action_get_information(this)");   
    para.setAttribute("class","bgcolors") ; 
    document.getElementById("information_1").appendChild(para); 
    ii_plus ++;
    }
    
    }
    
    
      break;
    case "get_club_departement_array_2":
    
    
    for(var i_2 = 1 ; i_2<50; i_2++){
    
    if(deplus_4[ii_plus].get_club_departement_array_2!=undefined){
    var para = document.createElement("div");
    para.innerHTML = deplus_4[ii_plus].get_club_departement_array_2;  
    
    para.setAttribute("title",deplus_4[ii_plus].get_club_departement_array_2); 
    para.setAttribute("onclick","action_get_information(this)");   
    para.setAttribute("class","bgcolors") ; 
    document.getElementById("information_1").appendChild(para); 
    ii_plus ++;
    }
    
    }
      break;
    case "get_epreuve_nom_complet":
    
    
    for(var i_2 = 1 ; i_2<50; i_2++){
    
    if(deplus_5[ii_plus].get_epreuve_nom_complet!=undefined){
    var para = document.createElement("div");
    para.innerHTML = deplus_5[ii_plus].get_epreuve_nom_complet;  
    
    para.setAttribute("title",deplus_5[ii_plus].get_epreuve_nom_complet); 
    para.setAttribute("onclick","action_get_information(this)");   
    para.setAttribute("class","bgcolors") ; 
    document.getElementById("information_1").appendChild(para); 
    ii_plus ++;
    }
    
    }
      break;
    
    
    
    }
    
    
    }
    
    
    }     
// // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx
// ACTION MANUELLE INDEPENDANTE  N°1
// L'utilisateur a la possibilite de changer la couleur de la page a tout moment et enregistrer 
// a l'aide de session les modification
function style_change(_this){
 
    document.getElementById("style6").className="display_none" ; 
   var ok = new Information("style_change_6.php"); // création de la classe 
   ok.add("style_change", _this.title); // ajout de l'information pour lenvoi 
   ok.add("style_change_value", _this.value); // ajout de l'information pour lenvoi 
    
   console.log(ok.info()); // demande l'information dans le tableau
   ok.push(); // envoie l'information au code pkp 
     // couleur par defaut 



              const myTimeout = setTimeout(myStopFunction, 300);

          function myStopFunction() {
            const xhttp = new XMLHttpRequest();
            xhttp.onload = function() {
              document.getElementById("style_change").innerHTML =
              this.responseText;
            }
            xhttp.open("GET", "style_all.php");
            xhttp.send();

          }






     }
// // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx

 
// Couleurs par defaut donne a l'utilsateur 6 couleur possible avec les petit carre sur le code
function style_change_plus(_this){  
 

    document.getElementById("style6").className="style6" ;    
   
      }
// // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx  

// ACTION MANUELLE N°3 
var info_action_get_information_1 = "" ;
var info_action_get_information_2 = "" ;
var info_action_get_information_3 = "" ;
var info_action_get_information_4 = "" ;
var info_action_get_information_5 = "" ;

function action_get_information(_this)
{ 
 
  console.log(Information_title) ; 
  document.getElementById("information_1").innerHTML="" ; 
  document.getElementById("information_1").className="display_none" ; 



 // canvas 


 //
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myObj = JSON.parse(this.responseText);
       info_action_get_information_1  =myObj ; 
       console.log(myObj.length);
       console.log(info_action_get_information_1) ; 
       document.getElementById("model1").className="" ;
       document.getElementById("total").innerText=myObj.length ;

        
       
    }
  };
  xmlhttp.open("GET", 'https://bokonzi.com/all_data/my_doc/index.php/SELECT * FROM `info_all_array` WHERE `'+Information_title+'`="'+_this.title+'"', true);
  xmlhttp.send();
}


/// efacer le tableau existant 
//  ajouter informations en scrolll 
/// afficher sur le code les nombre de information disponible
/// afficher   le niveau de compétence 
/// 


 

 