
let LogoIMG = ["images/youtube.png", "images/word.png", "images/winrar.png", "images/windows.png", "images/whatsapp.png",
    "images/unity.png", "images/twitter.png", "images/twitch.png", "images/steam.png",
    "images/spotify.png", "images/speedtest.png", "images/soundcloud.png", "images/snapchat.png",
    "images/skype.png", "images/shazam.png", "images/reddit.png", "images/powerpoint.png",
    "images/pinterest.png", "images/photoshop.png", "images/outlook.png", "images/netbeans.png",
    "images/mozilla.png", "images/instagram.png", "images/illustrator.png", "images/flstudio.png",
    "images/facebook.png", "images/excel.png", "images/edge.png", "images/duolingo.png",
    "images/dropbox.png", "images/discord.png", "images/chrome.png",
    "images/blender.png", "images/audacity.png", "images/apple.png"];

let LogoName = ["YouTube", "Word", "WinRaR", "Windows", "Whatsapp", "Unity", "Twitter",
    "Twitch", "Steam", "Spotify", "Speedtest", "Soundcloud", "Snapchat",
    "Skype", "Shazam", "Reddit", "Powerpoint", "Pinterest", "Photoshop",
    "Outlook", "Netbeans", "Mozilla", "Instagram", "Illustrator", "Flstudio",
    "Facebook", "Excel", "Edge", "Duolingo", "Dropbox", "Discord", "Chrome",
    "Blender", "Audacity", "Apple"];

var mix = [];
var buttonItems = [];
var buttonStack;
var counter = 0;

function create() {
    let x = document.getElementById("x").value; //grid size
    let table = document.getElementById("laukums"); //table
    table.innerHTML = ''; //old table clear

    lalala = x;

    mixing();

    for (let i = 0; i < x; i++) {
        let row = table.insertRow(i);
        for (let j = 0; j < x; j++) {
            let button = document.createElement('BUTTON');
            button.classList.add("grid")

            if (mix[x * i + j].charAt(0) == 'i') {
                let zaza = "url(" + "'" + mix[x * i + j] + "'" + ")center no-repeat";
                buttonItems[x * i + j] = zaza;
//                button.style.background = zaza ;
//                button.style.backgroundSize = 'contain';
            } else {
                buttonItems[x * i + j] = mix[x * i + j];
//                button.innerHTML = mix[x*i+j];
            }
            ;
            var text = document.createTextNode(x * i + j + 1);
//            button.appendChild(text);

            let cell = row.insertCell(j);
            cell.appendChild(button);

            var first;
            var second;
            var klikk = 0;

            button.onclick = () => {

                if (counter == 2) {
                    button.style.background = "";
                    button.innerHTML = "";
                    button.style.backgroundColor = 'white';
                    counter = 0;

                } else {
                    if (mix[x * i + j].charAt(0) == 'i') {
                        button.style.background = buttonItems[x * i + j];
                        button.style.backgroundSize = 'contain';
                        first = button.id;
                        console.log(first);
                    } else {
                        button.innerHTML = buttonItems[x * i + j];
                        second = button.id;
                    }
                }
                counter++;
            }
        }
    }
}


let doThis = document.getElementById("generate");
doThis.addEventListener("click", create);


function mixing() {
    mix = [];
    for (let i = 0; i < (lalala * lalala * 0.5); i++) {
//        let lol = Math.floor(Math.random() * Math.floor(30));
        mix.push(LogoIMG[i]);
        mix.push(LogoName[i]);
//        console.log(mix);
    }

    console.log(mix.length);
    for (let i = 0; i < mix.length; i++) {
        var rand = Math.floor(Math.random() * mix.length);
        var tmp = mix[rand];
        mix[rand] = mix[i];
        mix[i] = tmp;
    }
//    console.log(mix);
}