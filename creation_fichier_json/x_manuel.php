<?php


header("Access-Control-Allow-Origin: *");

session_start();

echo 'Bienvenue à la page numéro 1';


 


if(isset($_SESSION['on'])){

  $_SESSION['nom']  ++ ; 
  $_SESSION['on'] = $_SESSION['on'] +1; 
 
  
  echo "<br/>" ; 
  
  
 


  if( $_SESSION['on']>20){
    $_SESSION['on'] = 0;
    $_SESSION['on2'] ++ ; 

     
?>
 <meta http-equiv="refresh" content="0; URL=">

<?php
  }
  else {
    ?>
    
<meta http-equiv="refresh" content="0; URL=">
    <?php 
  }

}
else{
  $_SESSION['on'] = 0;
  $_SESSION['on2'] = 0 ; 
  echo "DEMARRAGE" ; 
}
 
  $ajout =  1000 ;


  $cars = array(
    "a",
    "b",
    "c",
    "d",
    "e",
    "g",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "w",
    "x",
    "y",
    "z",
);
 
  


  $name =$_SESSION['on'] ;  
 $number_limit = $_SESSION['on']*$ajout ;
 echo "<br/>" ; 
 echo $number_limit.'LIMITE' ;



 $letres_ = $cars[$_SESSION['on2']] ; 



 echo "LETRE". $letres_;
// création du fichier



class Information {
 
  public $servername ; 
  public $username ; 
  public $password ; 
  public $dbname ; 
  public $sql ; 

  public $row =array();

  function __construct(
  $servername,
  $username,
  $password,
  $dbname
  ) {
    $this->servername = $servername;
    $this->username = $username;
    $this->password = $password;
    $this->dbname = $dbname;
  }
  function get_servername() {
    return $this->servername;
  }
  function get_username() {
    return $this->username;
  }
  function get_password() {
    return $this->password;
  }
  function get_dbname() {
    return $this->dbname;
  }

  function get_sql() {
    return $this->sql;
  }
  function get_row($number) {
    return $this->row[$number];
  }


  function set_servername($servername) {
    $this->servername = $servername ; 
  }
  function set_username($username) {
    $this->username = $username ; 
  }
  function set_password($password) {
    $this->password = $password ; 
  }
  function set_dbname($dbname) {
    $this->dbname = $dbname ; 
  }
  function set_sql($sql) {
    $this->sql=  $sql;
  }
  function set_row($row){
    array_push($this->row,$row);
  }

  function execution(){
    $nom_file =  $_SESSION['nom'].".php";
$n="\n" ; 
  
$texte ="<?php"; 
$texte = $texte.$n ;
$texte = $texte.'header("Access-Control-Allow-Origin: *");'.$n ;
$texte = $texte."?>".$n ;

$texte = $texte."[".$n ;
 


 
   //// echo '[' ; 
    // Create connection
    $conn = mysqli_connect($this->servername, $this->username, $this->password, $this->dbname);
    // Check connection
    if (!$conn) {
      die("Connection failed: " . mysqli_connect_error());
    }
    
    $sql = $this->sql;
    $result = mysqli_query($conn, $sql);
    
    if (mysqli_num_rows($result) > 0) {
      // output data of each row
      while($row = mysqli_fetch_assoc($result)) {

       ////  echo '{' ;
          $texte = $texte. '{'.$n; 

        foreach ($this->row as $value) {
      //// echo   '"'.$value.'":"'.$row[$value].'",'; 
      $texte = $texte.' "'.$value.'":"'.$row[$value].'",'.$n; 

      $texte = $texte.$n;

          }
          //// echo '"":""';
          $texte = $texte.'"":""'.$n;
       ////  echo '},' ; 
        $texte = $texte.'},'.$n;
          
      }
    }     
    mysqli_close($conn);

    //// echo  '{ }';
    $texte = $texte.'{ }'.$n;


    $texte = $texte."]" ;

 
   

    //// echo ']';
   //  $texte = $texte.']'.$n;



    $f = fopen('src2/'.$nom_file, "a+");
// écriture
fputs($f, $texte );
// fermeture
fclose($f);

  }



}

$apple = new Information(
"localhost",
"u481158665_ffa",
"v3p9r3e@59A",
"u481158665_ffa");
$apple->set_sql('SELECT DISTINCT `get_result_users_nom_1_array_2`,`get_result_users_nom_2_array_2`,`get_result_users_nom_3_array_2`,`get_result_users_nom_4_array_2` FROM `info_all_array` WHERE `get_result_users_nom_1_array_2` LIKE "'.$letres_.'%" LIMIT '.$number_limit.','.$ajout.'') ;


 
$apple->set_row("get_result_users_nom_1_array_2"); 

$apple->set_row("get_result_users_nom_2_array_2"); 
$apple->set_row("get_result_users_nom_3_array_2"); 
$apple->set_row("get_result_users_nom_4_array_2"); 
 


$apple->execution(); 


 
?>



 