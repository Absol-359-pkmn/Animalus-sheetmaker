//code for canvas
function myCanvas() {
var STR = 3
var INT = 3
var DEX = 3
var instinct = 0
var anthropology = 0
var wisdom = 0
var perception = 0
var listen = 0
var smell = 0
var fight = 0

//get information from input
const canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerWidth*1.42;
let CS = document.getElementById("CS")
let CScover = document.getElementById("CScover")
var job = document.getElementById("job")
if(job.value == "傭兵（マーシナリー）"){
STR = STR+1
INT = INT-1
instinct = instinct +1
}else if(job.value == "機械技師（エンジニア）"){
STR = STR+1
DEX = DEX-1
anthropology = anthropology+1
}else if(job.value == "学者（スカラー）"){
INT = INT+1
STR = STR-1
wisdom = wisdom +1
}else if(job.value == "医者（ドクター）"){
INT = INT+1
DEX = DEX-1
perception = perception +1
}else if(job.value == "盗賊（シーカー）"){
DEX = DEX+1
INT = INT-1
listen = listen+1
}else if(job.value == "商人（マーチャンター）"){
DEX = DEX+1
STR = STR-1
smell = smell+1
}
var name = document.getElementById("name")
var race = document.getElementById("race")
var gender = document.getElementById("gender")
var age = document.getElementById("age")
var attack = document.getElementById("attack")
var attack2 = document.getElementById("attack2")
var typnum = 0
if(type.value == "carnivore"){
typnum = 0
STR = STR+1
type = "肉食獣"
}else if(type.value == "herbivore"){
typnum = 1
DEX = DEX+1
type = "草食獣"
}else if(type.value == "omnivore"){
typnum = 2
INT = INT+1
type = "雑食獣"
}
var anima = 50

var exskill = document.getElementById("exskill")

if(exskill.value == "本能"){
instinct = instinct +1

if(job.value == "傭兵（マーシナリー）"){
anima = anima - 30
} else {
anima = anima -20
}
}else if (exskill.value == "人類学"){
anthropology = anthropology +1

if(job.value == "機械技師（エンジニア）"){
anima = anima - 30
} else {
anima = anima -20
}
}else if (exskill.value == "知恵"){
wisdom = wisdom +1

if(job.value == "学者（スカラー）"){
anima = anima - 30
} else {
anima = anima -20
}
}else if (exskill.value == "観察"){
perception = perception +1

if(job.value == "医者（ドクター）"){
anima = anima - 30
} else {
anima = anima -20
}
}else if (exskill.value == "聴覚"){
listen = listen +1

if(job.value == "盗賊（シーカー）"){
anima = anima - 30
} else {
anima = anima -20
}
}else if (exskill.value == "嗅覚"){
smell = smell +1

if(job.value == "商人（マーチャンター）"){
anima = anima - 30
} else {
anima = anima -20
}
}else if (exskill.value == "戦闘技能"){
fight = fight +1
anima = anima -30
}

var colour = document.getElementById("colour")
ctx.drawImage(CS,0,0,canvas.width,canvas.width*1.42);
ctx.font = canvas.width*0.03+"px Arial";
ctx.fillText(name.value, canvas.width*0.08, canvas.width*0.115);
ctx.fillText(race.value, canvas.width*0.08, canvas.width*0.175);
ctx.fillText(type, canvas.width*0.35, canvas.width*0.175);
ctx.fillText(job.value, canvas.width*0.6, canvas.width*0.5);
ctx.fillText(gender.value, canvas.width*0.08, canvas.width*0.235);
ctx.fillText(age.value, canvas.width*0.35, canvas.width*0.235);
ctx.fillText(attack.value, canvas.width*0.12, canvas.width*1.15);
ctx.fillText(attack2.value, canvas.width*0.12, canvas.width*1.2);

// make status parameters
ctx.fillStyle = colour.value;
ctx.globalAlpha = 0.5
ctx.fillRect(canvas.width*0.015,canvas.width*0.268, canvas.width*0.0914*(STR),canvas.width*0.0695);
ctx.fillRect(canvas.width*0.015,canvas.width*0.363, canvas.width*0.0914*(INT),canvas.width*0.0695);
ctx.fillRect(canvas.width*0.015,canvas.width*0.458, canvas.width*0.0914*(DEX),canvas.width*0.0695);

// make a rectangle that symbolizes remaining anima and HP
ctx.globalAlpha = 1
ctx.strokeStyle = colour.value;
ctx.lineWidth = 5;
ctx.strokeRect(canvas.width*0.45,canvas.width*0.57, canvas.width*0.09,canvas.width*0.051);
ctx.fillStyle = "white";
ctx.fillRect(canvas.width*0.45,canvas.width*0.57, canvas.width*0.09,canvas.width*0.051);
ctx.fillStyle = colour.value;
ctx.fillText(anima, canvas.width*0.478, canvas.width*0.605);
ctx.globalAlpha = 0.5
ctx.fillRect(canvas.width*0.0173,canvas.width*0.659, canvas.width*0.0097*99,canvas.width*0.071);
ctx.fillRect(canvas.width*0.0173,canvas.width*0.56, canvas.width*0.0097*anima,canvas.width*0.071);

// make skill parameters
ctx.fillRect(canvas.width*0.016,canvas.width*0.744, canvas.width*0.091*(instinct+1),canvas.width*0.044);
ctx.fillRect(canvas.width*0.016,canvas.width*0.805, canvas.width*0.091*(anthropology +1),canvas.width*0.044);
ctx.fillRect(canvas.width*0.016,canvas.width*0.866, canvas.width*0.091*(wisdom +1),canvas.width*0.045);
ctx.fillRect(canvas.width*0.016,canvas.width*0.926, canvas.width*0.091*(perception +1),canvas.width*0.045);
ctx.fillRect(canvas.width*0.016,canvas.width*0.987, canvas.width*0.091*(listen +1),canvas.width*0.045);
ctx.fillRect(canvas.width*0.016,canvas.width*1.0475, canvas.width*0.091*(smell +1),canvas.width*0.045);
ctx.fillRect(canvas.width*0.016,canvas.width*1.113, canvas.width*0.093,canvas.width*0.048*(fight+1));

//covering with black
ctx.drawImage(CScover,0,0,canvas.width,canvas.width*1.42);

//create commands to copy for the game (some jobs gets exclusive commands)
var chatpalet =
STR + "AM<=1,1 【STR能力判定(1成功)】\\n" +
INT + "AM<=1,1 【INT能力判定(1成功)】\\n" +
DEX + "AM<=1,1 【DEX能力判定(1成功)】\\n" +
"3AM<=" + (instinct+1) + ",1 【本能判定(1成功)】\\n" +
"3AM<=" + (anthropology+1) + ",1 【人類学判定(1成功)】\\n" +
"3AM<=" + (wisdom+1) + ",1 【知恵判定(1成功)】\\n" +
"3AM<=" + (perception+1) + ",1 【観察判定(1成功)】\\n" +
"3AM<=" + (listen+1) + ",1 【聴覚判定(1成功)】\\n" +
"3AM<=" + (smell+1) + ",1 【嗅覚判定(1成功)】\\n" +
"AA<=" + (fight+1) + " 【戦闘技能: " + attack.value + "】\\n" +
"AG=t 【防御判定】\\n" +
"AD=t 【回避判定】";

//used to print ultimate attacks
if(job.value == "傭兵（マーシナリー）"){
    ult ="クリティカルヒット: 戦闘中、自分が攻撃する前に宣言することで使えます。攻撃判定に使うダイスの数を2つ増やすことができます。";
}else if (job.value == "機械技師（エンジニア）"){
    ult = "アナライザー: 戦闘中、自分の攻撃判定を行った後に使えます。攻撃判定に使ったダイス1つを好きな出目に変更することができます。";
}else if (job.value == "学者（スカラー）"){
    ult = "ウィークメイカー: 戦闘中、味方のターン開始時に使えます。このターンで味方が攻撃に成功した時そのダメージを+2することができます。";
}else if (job.value == "医者（ドクター）"){
    ult = "パナスィーア: 戦闘中、自分のターンに攻撃判定を行う代わりに使えます。味方1人のHPを3d6回復することができます。この回復に伴うアニマの消費はありません。";
}else if (job.value == "盗賊（シーカー）"){
    ult = "フェイタルウォンド: 戦闘中、自分の攻撃判定を行った後に使えます。攻撃判定に使ったダイスに6の出目のダイスを1つ追加することができます。この攻撃に対し相手は防御および回避判定をすることはできません。";
}else if (job.value == "商人（マーチャンター）"){
    ult = "ジャックポッド: 戦闘中、自分の攻撃判定を行う前に使えます。自分が1の出目を使って攻撃に成功した時、そのダメージが10になります。ただし、それ以外で攻撃に成功しても、そのダメージは1になってしまいます。";
}



// print the completed command palette
document.getElementById("chat").value = chatpalet;

//create ccfolia character
const charaData = {
  kind: "character",
  data: {
    params: [
      { label: "STR", value: STR },
      { label: "INT", value: INT },
      { label: "DEX", value: DEX }
    ],
    status: [
      { label: "HP", value: 15, max: 15 },
      { label: "アニマ", value: anima, max: 99 }
    ],
    name: name.value,
    initiative: 0,
    memo:
      "名前: " + name.value + "\n" +
      "職業: " + job.value + "\n\n" +
      "必殺技: " + ult + "\n\n" +
      "持ち物: \n",
    externalUrl: " ",
    commands: chatpalet
  }
};

var chara = JSON.stringify(charaData);

document.getElementById("chara").value = chara;
// testing if the upload works...

}

function copychat() {
  var copyText = document.getElementById("chat");

  copyText.select();
  //スマホ対応用
  copyText.setSelectionRange(0, 359359);

  navigator.clipboard.writeText(copyText.value);

  alert("チャパレをコピーしました！");
}

function copychara() {
  var copyText = document.getElementById("chara");

  copyText.select();
  //スマホ対応用
  copyText.setSelectionRange(0, 359359);

  navigator.clipboard.writeText(copyText.value);

  alert("キャラクターをコピーしました！");
}