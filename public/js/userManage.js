
var manageList=document.getElementsByClassName("manageList");
//var manageList=document.getElementById("manageList");
var manageLi=manageList[0].getElementsByTagName("li");
var manageH0=manageLi[0].getElementsByTagName("h4");
var manageH1=manageLi[5].getElementsByTagName("h4");
var manageH2=manageLi[9].getElementsByTagName("h4");
window.onload=manageLiLength0;
function manageLiLength0(){
        manageLi[0].className="userManageClick1";
        manageLi[5].className="userManageClick";
        manageLi[9].className="userManageClick";
}
manageH0[0].onclick=function(){
    manageLi[0].className="userManageClick1";
    manageLi[5].className="userManageClick";
    manageLi[9].className="userManageClick";
}
//manageH1[0].addEventListener("click",manageLiLength2,true);
manageH1[0].onclick=function(){
    manageLi[0].className="userManageClick";
    manageLi[5].className="userManageClick2";
    manageLi[9].className="userManageClick";
}
manageH2[0].onclick=function(){
    manageLi[0].className="userManageClick";
    manageLi[5].className="userManageClick";
    manageLi[9].className="userManageClick3";
}

