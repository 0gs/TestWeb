
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

var mixArray = [];
var buttonItems = [];
var clickCheck = false;
var idCheck;
var newArray = [];
var backCheck = 0;
var startTime;
var clickedFirst;
var x;
var numX;

function create() {
    newArray = [];
    clickedFirst = false;
    var x = document.getElementById("x").value; //grid size
    let table = document.getElementById("laukums"); //table
    table.innerHTML = ''; //old table clear
    numX = x;
    mixingItems();

    for (let i = 0; i < x; i++) {
        let row = table.insertRow(i);
        for (let j = 0; j < x; j++) {
            let button = document.createElement('BUTTON');
            button.style.background = "";
            button.style.background = 'url(images/cover.jpg)center no-repeat';
            button.style.backgroundSize = 'contain';
//            let imgCover = document.createElement("img");
//            imgCover.setAttribute("src", "images/cover.jpg");
//            imgCover.setAttribute("class", "imgCover");
//            button.appendChild(imgCover);
            button.classList.add("grid")
            button.setAttribute("id", x * i + j);

            if (mixArray[x * i + j].charAt(0) == 'i') {
                let logoForButton = "url(" + "'" + mixArray[x * i + j] + "'" + ")center no-repeat";
                buttonItems[x * i + j] = logoForButton;
            } else {
                buttonItems[x * i + j] = mixArray[x * i + j];
            }

//            var text = document.createTextNode(x * i + j + 1);
            let cell = row.insertCell(j);
            cell.appendChild(button);

            button.onclick = function () {
                if (!clickedFirst) {
                    clickedFirst = true;
                    startTime = new Date().getTime();
                }
                if (newArray.indexOf(button.id) == -1) {
                    switchIDs(button.id);
                }
            }
        }
    }
}

let doThis = document.getElementById("generate");
doThis.addEventListener("click", create);

function mixingItems() {
    mixArray = [];
    let xqxq = randomUniqueNum(30, (numX * numX * 0.5));
//    console.log(xqxq);
    for (let i = 0; i < (numX * numX * 0.5); i++) {
        mixArray.push(LogoIMG[xqxq[i]]);
        mixArray.push(LogoName[xqxq[i]]);
    }
    for (let i = 0; i < mixArray.length; i++) {
        var rand = Math.floor(Math.random() * mixArray.length);
        var tmp = mixArray[rand];
        mixArray[rand] = mixArray[i];
        mixArray[i] = tmp;
    }
}

function randomUniqueNum(range, outputCount) {
    let arr = []
    for (let gh = 1; gh <= range; gh++) {
        arr.push(gh)
    }
    let result = [];
    for (let gh = 1; gh <= outputCount; gh++) {
        const random = Math.floor(Math.random() * (range - gh));
        result.push(arr[random]);
        arr[random] = arr[range - gh];
    }
    return result;
}

function switchImages(w) {
    if (clickCheck) {
        document.getElementById(w).style.background = "";
        document.getElementById(w).innerHTML = "";
        document.getElementById(w).style.backgroundColor = 'white';
        document.getElementById(w).style.background = 'url(images/cover.jpg)center no-repeat';
        document.getElementById(w).style.backgroundSize = 'contain';
    } else {
        document.getElementById(w).innerHTML = "";
        if (mixArray[w].charAt(0) == 'i') {
            document.getElementById(w).style.background = "";
            document.getElementById(w).innerHTML = "";
            document.getElementById(w).style.backgroundColor = 'white';
            document.getElementById(w).style.background = buttonItems[w];
            document.getElementById(w).style.backgroundSize = 'contain';
        } else {
            document.getElementById(w).style.background = "";
            document.getElementById(w).innerHTML = "";
            document.getElementById(w).style.backgroundColor = 'white';
            document.getElementById(w).innerHTML = buttonItems[w];
        }
    }
}

function switchIDs(q) {
    if (backCheck == 1)
        return;
    if (!clickCheck) {
        idCheck = q;
        switchImages(q);
        clickCheck = true;
    } else {
        if (q == idCheck) {
            switchImages(q);
            clickCheck = false;
        } else {
            clickCheck = false;
            switchImages(q);
            let poga1 = mixArray[idCheck];
            let poga2 = mixArray[q];
            if (LogoName.indexOf(poga1) == LogoIMG.indexOf(poga2) && LogoIMG.indexOf(poga1) == LogoName.indexOf(poga2)) {
                newArray.push(idCheck);
                newArray.push(q);
                victory();
                idCheck = -1;
            } else {
                clickCheck = true;
                backCheck = 1;
                setTimeout(function () {
                    switchImages(q);
                    switchImages(idCheck);
                    clickCheck = false;
                    backCheck = 0;
                }, 500);
            }
        }
    }
}

function victory() {
    if (newArray.length == numX * numX) {
        var endTime = new Date().getTime();
        var timeSec = (endTime - startTime) / 1000;
        if (timeSec > 60) {
            let timeMin = timeSec / 60 - (timeSec / 60) % 1;
            timeSec = Math.round((timeSec - 60 * timeMin) * 1000) / 1000;
            let endResultTime1 = document.getElementById("winText");
            endResultTime1.innerHTML = "Apsveicu, tu pabeidzi spēli! Tavs laiks ir " + timeMin + " minūtes un " + timeSec + " sekundes.";
            $("#ex1").modal("show");
        } else {
            let endResultTime2 = document.getElementById("winText");
//            endResultTime2.innerHTML = "Apsveicu, tu pabeidzi spēli! Tavs laiks ir " + timeSec + " sekundes.";
//            $("#ex1").modal("show");

              fetch("https://api.chucknorris.io/jokes/random")  
              .then(res => res.json())
              .then((res) =>{
                endResultTime2.innerHTML = `Apsveicu, tu pabeidzi spēli! Tavs laiks ir ${timeSec} sekundes.
                Tagad tu uzzini arī šo faktu par Čaku Norisu --> ${res["value"]}`;
              });
              
              fetch("https://dog.ceo/api/breeds/image/random")  
              .then(response => response.json())
              .then((response) =>{ var img = new Image(); img.src = response["message"]; });
      
              $("#ex1").modal("show");
        }
    }
}