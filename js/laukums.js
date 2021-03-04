
let LogoIMG = ["images/youtube.png", "images/word.png", "images/winrar.png", "images/windows.png", "images/whatsapp.png",
                "images/unity.png", "images/twitter.png", "images/twitch.png", "images/steam.png",  
                "images/spotify.png", "images/speedtest.png", "images/soundcloud.png", "images/snapchat.png",
                "images/skype.png", "images/shazam.png", "images/reddit.png", "images/powerpoint.png", 
                "images/pinterest.png", "images/photoshop.png","images/outlook.png", "images/netbeans.png", 
                "images/mozilla.png", "images/instagram.png", "images/illustrator.png", "images/flstudio.png", 
                "images/facebook.png", "images/excel.png", "images/edge.png", "images/duolingo.png", 
                "images/dropbox.png", "images/discord.png", "images/chrome.png", 
                 "images/blender.png", "images/audacity.png", "images/apple.png"];         
             
//let LogoIMG = ["youtube", "word", "winrar", "windows", "whatsapp", "unity", "twitter",
//                "twitch", "steam",  "spotify", "speedtest", "soundcloud", "snapchat",
//                "skype", "shazam", "reddit", "powerpoint", "pinterest", "photoshop",
//                "outlook", "netbeans", "mozilla", "instagram", "illustrator", "flstudio", 
//                "facebook", "excel", "edge", "duolingo", "dropbox", "discord", "chrome", 
//                 "blender", "audacity", "apple"];

let LogoName = ["YouTube", "Word", "WinRaR", "Windows", "Whatsapp", "Unity", "Twitter",
                "Twitch", "Steam",  "Spotify", "Speedtest", "Soundcloud", "Snapchat",
                "Skype", "Shazam", "Reddit", "Powerpoint", "Pinterest", "Photoshop",
                "Outlook", "Netbeans", "Mozilla", "Instagram", "Illustrator", "Flstudio", 
                "Facebook", "Excel", "Edge", "Duolingo", "Dropbox", "Discord", "Chrome", 
                 "Blender", "Audacity", "Apple"];

var mix = [];

function create(){
    let x = document.getElementById("x").value; //grid size
    let table = document.getElementById("laukums"); //table
    table.innerHTML = ''; //old table clear
    
    lalala = x;
    
    mixing();
    
    for(let i =0; i< x; i++){
        let row = table.insertRow(i);
        for(let j =0; j< x; j++){
            let button = document.createElement('BUTTON');
            button.classList.add("grid")
            
            if(mix[x*i+j].charAt(0)=='i'){
                let zaza = "url("+"'"+mix[x*i+j]+"'"+")center no-repeat";
                button.style.background = zaza ;
            }else button.innerHTML = mix[x*i+j];
//            button.style.background = "url(mix[0]) center no-repeat ";
            var text = document.createTextNode(x*i+j+1);
//            button.appendChild(text);

            let cell = row.insertCell(j);
            cell.appendChild(button);
            
//            button.onclick=()=>{
//                button.parentNode.parentNode.parentNode.remove();
//            };
        }   
    }
}

let doThis = document.getElementById("generate");
doThis.addEventListener("click", create);


function mixing(){
    mix = [];
    for(let i=0; i<(lalala*lalala*0.5);i++){
        mix.push(LogoIMG[i]);
        mix.push(LogoName[i]);
        console.log(mix);
    }
    
    console.log(mix.length);
    for(let i=0;i<mix.length;i++){
        var rand = Math.floor(Math.random() * mix.length);
        var tmp = mix[rand];
        mix[rand] = mix[i];
        mix[i]=tmp;
    }
    console.log(mix);
}


var klik = false;

function mainaBildi(){
    if (klik)document.getElementById("poga").src="maize.png";
    else document.getElementById("poga").src="musa.png";
    klik=!klik;
}
function maina(){
    let stils1, stils2;
    let tt=document.getElementById("pogab");
    stils1=tt.style.visibility;
    if (stils1=="visible")stils2="hidden"; else stils2="visible";
    tt.style.visibility=stils2;
    setTimeout(function(){tt.style.visibility=stils1;},2000);
}