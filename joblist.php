<?php
header ('Access-Control-Allow-Origin: *');
require_once("utils.php");
session_start();

//echo "<div class='intro'>Tervetuloa tietotekniikan kilta Cluster Ry:n projektipankkiin. Sivu tarjoaa yrityksille ja muille tahoille suoran rekrytointikanavan tietotekniikan opiskelijoihin ja opiskelijoille keskitetyn listan juuri heille tarkoitetuista töistä. Kyseessä on www-harkkatyö joka on vielä \"work in progress\", joten selkeät bugit yms. kehitysehdotukset voi välittää osoitteeseen kuisma.narhi@student.lut.fi</div>";
//echo "<p class='separator'></p>";
$db = connectDb();

$joblist = array();
$stmt = $db->prepare("SELECT * FROM jobs");
$stmt->execute();
$rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
//printtaa yksittäiset työlistaukset omiksi kokonaisuuksikseen jotka css:llä erotellaan visuaalisesti.
foreach ($rows as $row) {
    //users-taulusta haku firmId:n mukaan, jotta kannassa ei ole päällekkäisyyksiä
    $stmt2 = $db->prepare("SELECT username, email FROM users WHERE id =" . $row["firmid"]);
    $stmt2->execute();
    $firm = $stmt2->fetchAll(PDO::FETCH_ASSOC);
    //työluokkien printtauksen muotoilu 
    $job = array();
    $job = [
        "firm" => $firm[0]["username"],
        "jobtype" => $row["jobtype"],
        "jobname" => $row["jobname"],
        "location" => $row["location"],
        "jobdesc" => $row["description"],
        "jobstart" => $row["jobstart"],
        "jobend" => $row["jobend"],
        "email" => $firm[0]["email"],
        "applydate" =>$row["applydate"],
        "salary" =>$row["salary"]
        ];
    array_push($joblist, $job);
    
};
$joblist = json_encode($joblist);
echo $joblist;

?>