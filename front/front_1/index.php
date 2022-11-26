<?php 
    session_start(); 
?>

<link rel="icon" href="data:image/png;base64,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" type="image/gif" sizes="16x16">
<meta charset="UTF-8">
<?php 
    if(isset($_SESSION['server'])){
 
     $serve=   $_SESSION['server'];
      if($serve=="on"){
        echo "connexion reussi " ; 
      
  header('Location:login/index.php');
 
  exit();
 
      }
      else {
        echo "echec de la connexion" ;
       }
    }
    else{
      if(isset($_SESSION['style_change'])){          
          //  $_SESSION['style_1_html']             
      }
      else {
        $_SESSION['style_change'] = "1";        
      } 
    }
    include("ip.php") ; 

?>
<!DOCTYPE html>
<html lang="fr">
<head>
  <title>Bokonzi</title>
</head> 
<body>
  <?php 
 // Source total style et scrypt    
      /*
        Liste des ressource néssesaire au programme 
        exemple: 
        * Source css
        * Class JS 
        * Class Php 
   */
  ?>
  </div>
<div id="body"  > 
<!--
    @mouseover="position_mouse"    
    Code Vue JS 
    Enregistre la position de la sourie lorsque l'utilisateur survole la page web
    Raciene vue.js
-->    
<?php    
 include("model/class/php/Class.php");  
 //include("json_active.php");
 // fichier configuration à l'interrieur 
 // contenue general de la page dans class\php\index_body.php 
 /*
 include("model/class/php/Class.php");  
                include("model/class/php/index_body.php");  
                  <index_body>
                            <header>
                            </header>
                            <section>
                            </secttion>
                            <footer>
                            </footer>
                  </index_body>
 */
?>
</div>
<!--
  Besoin de vue Js pour s'avoir le comportement des utilisateurs 
-->
<?php 
if($config_==false){ 
// si la page de connexion n'existe pas elle afiche le formulaire de connexion 
// si non elle efface a l'aide du CSS mais le formulaire est toujours present juste invisible 
    ?>
<script>
  const montre=false;
</script>
    <?php 
}
 else {
    include("model/class/php/remove_db.php"); 
    /*
    Execution d'un test si il existe pas d'erreur dans la Bdd 
    SI il existe une erreur il efface le fichier de configuration 
    */
    ?>
<script>
  const montre=true;
</script>
    <?php 
 } 
 include("link.html") ; 
?>
<div id="showcoords_position"></div> 
 <script src="js.js"></script>
 </body>
</html>


 