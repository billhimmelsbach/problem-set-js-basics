
console.log('Javascript working!');

$("input[placeholder]").each(function () {
  $(this).attr('size', $(this).attr('placeholder').length);
});

$("#submit").on("click", function handleclick(event) {
  $("h1").empty();
  var namePull = $('#name').val();
  var insultNumPull = $('#insultNum').val();
  var insultFinal = generateInsult(namePull, insultNumPull);
  $("h1").append(insultFinal);
});

//Code below is for the shakesperian code generator function, placed together for code review convenience
var first_word = ["yeasty", "weedy", "wayward", "warped", "villainous", "venomed", "vain", "unmuzzled", "tottering", "surly", "spongy", "spleeny", "saucy", "ruttish", "roguish", "reeky", "rank", "qualling", "puny", "puking", "pribbling", "paunchy", "mewling", "mangled", "mammering", "lumpish", "loggerheaded", "jarring", "infectious", "impertinent", "gorbellied", "goatish", "gleeking", "frothy", "froward", "fobbing", "fawning", "errant", "droning", "dissembling", "dankish", "currish", "craven", "clouted", "cockered", "churlish", "bootless", "beslubbering", "bawdy", "artless"];
var second_word = ["weather-bitten", "unchin-snouted", "toad-spotted", "tickle-brained", "tardy-gaited", "swag-bellied", "spur-galled", "sheep-biting", "shard-borne", "rump-fed", "rude-growing", "rough-hewn", "reeling-ripe", "pox-marked", "pottle-deep", "plume-plucked", "onion-eyed", "motley-minded", "milk-livered", "knotty-pated", "ill-nurtured", "ill-breeding", "idle-headed", "hell-hated", "hedge-born", "hasty-witted", "half-faced", "guts-griping", "full-gorged", "fool-born", "folly-fallen", "fly-bitten", "flap-mouthed", "fen-sucked", "fat-kidneyed", "elf-skinned", "earth-vexing", "dread-bolted", "doghearted", "dizzy-eyed", "dismal-dreaming", "crook-pated", "common-kissing", "clay-brained", "clapper-clawed", "boil-brained", "beetle-headed", "beef-witted", "bat-fowling", "base-court"];
var third_word = ["wagtail", "whey-face", "vassal", "varlet", "strumpet", "skainsmate", "scut", "ratsbane", "pumpion", "puttock", "pignut", "pigeon-egg", "nut-hook", "mumble-news", "moldwarp", "miscreant", "minnow", "measle", "mammet", "malt-worm", "maggot-pie", "lout", "lewdster", "joithead", "hugger-mugger", "horn-beast", "hedge-pig", "harpy", "haggard", "gudgeon", "giglet", "fustilarian", "foot-licker", "flirt-gill", "flax-wench", "flap-dragon", "dewberry", "death-token", "codpiece", "coxcomb", "clotpole", "clack-dish", "canker-blossom", "bum-bailey", "bugbear", "boar-pig", "bladder", "barnacle", "baggage", "apple-john"];
var firstAndSecondWords = first_word.concat(second_word);

generateInsult = function(name, words) {
  var firstAndSecondWordsFinalList = [];
  for (i=words; i>1; i--) {
    firstAndSecondWordsFinalList.push(firstAndSecondWords[Math.floor(Math.random()*firstAndSecondWords.length)]);
  }

  for (i=words; i>0; i--) {
    thirdWordLast = third_word[Math.floor(Math.random()*third_word.length)];
  }

  var firstAndSecondWordsFinalListNoCommas = firstAndSecondWordsFinalList.join(" ");
    return ("Why " + name + ", you " + firstAndSecondWordsFinalListNoCommas + " " + thirdWordLast + "!" + " ");
};


// sample function
// generateInsult("Bill", 7);
