var namaDirektor = ["D-1","D-2","D-3"];
var pass = ["W","Kurwa899","A Thousand Night"];
function sub(){
    var curname = document.getElementById("name").value;
    var curpass = document.getElementById('password').value;
    for (let i = 0; i < namaDirektor.length; i++){
        if(curname == namaDirektor[i]){
            var curi = i;
            localStorage.setItem("name",namaDirektor[curi]);
        }
    }

    if(curpass == pass[curi]){
        alert("WELCOME BACK "+ namaDirektor[curi]);
        logged_in();
    }

}
function logged_in(){
    var loginpage = document.getElementById("LoginID");
    loginpage.style.opacity = '0';
    setTimeout(() => loginpage.remove(),1000);
    setTimeout(() => location.replace('logged.html?'+localStorage.getItem("name")),1000);
}

function load2(){
    var loggedname = localStorage.getItem("name");
    document.getElementById("Welcome").innerHTML = "Welcome back "+loggedname;

    var cardone = document.getElementById("Card1");
    cardone.style.cursor = 'pointer';
    cardone.onclick = function(){
        window.location.href = 'AbnoList.html?'+localStorage.getItem("name");
    };

    var cardtwo = document.getElementById("Card2");
    cardtwo.style.cursor = 'pointer';
    cardtwo.onclick = function(){
        window.location.href = 'SiteStatus.html?'+localStorage.getItem("name");
    };

    var cardtri = document.getElementById("Card3");
    cardtri.style.cursor = 'pointer';
    cardtri.onclick = function(){
        window.location.href = 'DirectorStatus.html?'+localStorage.getItem("name");
    };
}

function GoSite(clicked_id){
    alert(clicked_id);
    if(clicked_id == "Poznan"){
        window.location.href = 'SitePoznan.html';
    }
}

