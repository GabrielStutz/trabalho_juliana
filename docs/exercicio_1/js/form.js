function likeOrDoNot() {
    let likes = document.getElementsByName('like');
    for(let i = 0; i < likes.length; i++) {
        if(likes[i].checked) {
            if(likes[i].value == 'yes') {
                document.getElementById('hidenItems').style.display = 'block';
            } else {
                window.location.href = "./explanation_page.html";
            }
            break;
        }
    }
}

function getOption() {
    let selectElement = document.querySelector("#select2");
    let text = selectElement.value;
    if(text == 'omen') {
        document.body.style.backgroundImage = "url(https://static.valorantzone.gg/news/2021/01/10120915/OMEN.jpg)";
    } else if(text == 'brimstone') {
        document.body.style.backgroundImage = "url(https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt51e641a4eecce839/615f8c6fc2ff901292ac802d/Brimstone.png)";
    } else if(text == 'sage') {
        document.body.style.backgroundImage = "url(https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta0c8db31a4e10e82/615f8c3da481550b84bdb618/Sage_v2.png)";
    } else if(text == 'jett') {
        document.body.style.backgroundImage = "url(https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt909ba6b565908b76/6259e1e12777714c51b30c0a/Jett_1920x1080.jpg)"   
    } else if(text == 'raze') {
        document.body.style.backgroundImage = "url(https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt39cb66a45c3e9721/615f8adab4dc5405a577a6ed/Raze_v2.png)"
    } else if(text == 'viper') {
        document.body.style.backgroundImage = "url(https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta87d0624165d1cbe/615f8c1056faa61e63fdd085/Viper_v2.png)";
    } else if(text == 'phoenix') {
        document.body.style.backgroundImage = "url(https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltaec838cb8cfa46a1/632d2ed604361d715f55321f/09262022_AgentInsightsPhoenixArticle_Phoenix_Portrait_In-Line_FINAL.jpg)";
        document.body.style.backgroundSize = "cover";
    } else if( text == 'sova') {
        document.body.style.backgroundImage = "url(https://i.pinimg.com/originals/91/13/43/9113436077b1a2cd2e39c4034269b425.jpg)";
        document.body.style.backgroundSize = "cover";
    } else if(text == 'reyna') {
        document.body.style.backgroundImage = "url(https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt41a00efc125c83c8/615f8bdbaeba391136e443bf/Reyna.png)"; 
    } else if(text == 'breach') {
        document.body.style.backgroundImage = "url(https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt7a3b142dbf4d86fa/615f8ba156faa61e63fdd081/Breach_v2.png)";
    } else if(text == 'cypher') {
        document.body.style.backgroundImage = "url(https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta9f28e2dbaf92b8b/615f8bf67c52211d10e3037c/Cypher_v2.png)";
    } else if(text == 'killjoy') {
        document.body.style.backgroundImage = "url(https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt7c955c4d9004fa91/615f8bbce29d690734fef6ab/Killjoy_v2.png)";
    } else if(text == 'skye') {
        document.body.style.backgroundImage = "url(https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5010901c019d4917/615f8a8fdd1cf90b821ddf1a/Skye_v2.png)";
    } else if(text == 'yoru') {
        document.body.style.backgroundImage = "url(https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt69b47ab13d56dd1a/615f8b61a8d4d0113d89ad8e/Yoru.png)";
    } else if(text == 'astra') {
        document.body.style.backgroundImage = "url(https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt9cb7ae443e0fb87d/603ed6833c41f30bce481cff/Astra.jpg)";
    } else if(text == 'kayo') {
        document.body.style.backgroundImage = "url(https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt9919a54bf30dc376/60d22010ae0d50495b4f8e6b/Kayo.png)";
    }
}

function getPlayer() {
    let player = document.getElementById('player').value;
    let text = '';
    if(player == 'Pancada' || player == 'pancada') {
        text = `Oh, ${player} is my favorite player too, he really is best player.`;
        document.getElementById("pri").innerHTML = text;
    } else {
        text = `I have to admit, ${player} really is a great player, but my favorite is Pancada.`;
        document.getElementById("pri").innerHTML = text;
    }
}

function getTeam() {
    let team = document.getElementById('team').value;
    let text = '';
    if(team == 'Sentinels' || team == 'sentinels') {
        text = `Oh, ${team} is my favorite team too, they really are best team.`;
        document.getElementById("sec").innerHTML = text;
    } else {
        text = `I have to admit, ${team} really is a great team, but my favorite is Sentinels.`;
        document.getElementById("sec").innerHTML = text;
    }
}

function  getMaps() {
    let checkBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
    let text = "The maps you like are: ";
    for (let i = 0; i < checkBoxes.length; i++) {
        if(i == 0) {
            text = text + checkBoxes[i].value;
        } else if(i != 0) {
            text = text + ", " + checkBoxes[i].value;
        }
    }
    document.getElementById("ter").innerHTML = text;
}