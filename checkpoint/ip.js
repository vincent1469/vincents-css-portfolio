// variables for the displays underneath starter pokemon
var sTierDisplay = document.getElementById("sTierDisplay");
var aTierDisplay = document.getElementById("aTierDisplay");
var bTierDisplay = document.getElementById("bTierDisplay");
var cTierDisplay = document.getElementById("cTierDisplay");
var dTierDisplay = document.getElementById("dTierDisplay");

// variables for the displays underneath mega pokemon
var sTierDisplay2 = document.getElementById("sTierDisplay2");
var aTierDisplay2 = document.getElementById("aTierDisplay2");
var bTierDisplay2 = document.getElementById("bTierDisplay2");
var cTierDisplay2 = document.getElementById("cTierDisplay2");
var dTierDisplay2 = document.getElementById("dTierDisplay2");

// creates variable for the pokemon
var blaziken = document.getElementById("blaziken");

// waits until mouse hovers over the image
blaziken.addEventListener("mousemove", function() {
    
    // emptys all displays its not associated with
    sTierDisplay2.innerHTML = "";
    aTierDisplay2.innerHTML = "";
    bTierDisplay2.innerHTML = "";
    cTierDisplay2.innerHTML = "";
    dTierDisplay2.innerHTML = "";
    aTierDisplay.innerHTML = "";
    bTierDisplay.innerHTML = "";
    dTierDisplay.innerHTML = "";
    cTierDisplay.innerHTML = "";
    
    // displays the description for the pokemon
    sTierDisplay.innerHTML = "Blaziken is one of the best starter Pokemon because of his ability, Speed Boost. Speed Boost boosts his Speed stat by one stage after each turn, allowing it to outspeed anyone within a few turns. In addition to that, he has 120 attack and 110 special attack, making it a versatile attacker that excels at both Physical and Special attacks.";
});

var infernape = document.getElementById("infernape");

infernape.addEventListener("mousemove", function() {
    sTierDisplay2.innerHTML = "";
    aTierDisplay2.innerHTML = "";
    bTierDisplay.innerHTML = "";
    cTierDisplay2.innerHTML = "";
    dTierDisplay2.innerHTML = "";
    aTierDisplay.innerHTML = "";
    bTierDisplay.innerHTML = "";
    dTierDisplay.innerHTML = "";
    cTierDisplay.innerHTML = "";
    sTierDisplay.innerHTML = "Infernape is another excellent option for a starter because it is a fast Pokemon, with 108 speed. It is also a versatile attacker, with 104 attack and special attack. His ability Iron Fist boosts his moves such as Fire Punch and Mach Punch. Finally, it gets coverage moves such as Thunder Punch and Ice Punch (which are boosted by his ability).";
});

var greninja = document.getElementById("greninja");

greninja.addEventListener("mousemove", function() {
    sTierDisplay2.innerHTML = "";
    aTierDisplay2.innerHTML = "";
    bTierDisplay2.innerHTML = "";
    cTierDisplay2.innerHTML = "";
    dTierDisplay2.innerHTML = "";
    aTierDisplay.innerHTML = "";
    bTierDisplay.innerHTML = "";
    cTierDisplay.innerHTML = "";
    dTierDisplay.innerHTML = "";
    sTierDisplay.innerHTML = "Greninja is also great to have. His 128 speed outspeeds almost all Pokemon. He also has 103 special attack to deal powerful attacks. The real reason it is on the S-Tier is his ability, Protean. Protean changes the user's type to the type of the attack that Greninja is using, so all of his attacks will get a 50% damage bonus for having the same type as the user. A high special attack combined with a 50% bonus can deal immense damage to opponents.";
});

var feraligatr = document.getElementById("feraligatr");

feraligatr.addEventListener("mousemove", function() {
    sTierDisplay2.innerHTML = "";
    aTierDisplay2.innerHTML = "";
    bTierDisplay2.innerHTML = "";
    cTierDisplay2.innerHTML = "";
    dTierDisplay2.innerHTML = "";
    sTierDisplay.innerHTML = "";
    bTierDisplay.innerHTML = "";
    cTierDisplay.innerHTML = "";
    dTierDisplay.innerHTML = "";
    aTierDisplay.innerHTML = "Feraligatr has one of the best offensive abilities in Sheer Force. Sheer Force gives a 30% boost to moves with secondary effects, but removes them. A 30% bonus combined with 105 attack could deal heavy damage to opponents. In addition to that, it gets coverage moves such as Earthquake and Ice Punch. Finally, his Water typing only has two weaknesses, both of which it can counter. Its mediocre 78 speed brings it down to A-Tier, however.";
});

var decidueye = document.getElementById("decidueye");

decidueye.addEventListener("mousemove", function() {
    sTierDisplay2.innerHTML = "";
    aTierDisplay2.innerHTML = "";
    bTierDisplay2.innerHTML = "";
    cTierDisplay2.innerHTML = "";
    dTierDisplay2.innerHTML = "";
    sTierDisplay.innerHTML = "";
    aTierDisplay.innerHTML = "";
    cTierDisplay.innerHTML = "";
    dTierDisplay.innerHTML = "";
    bTierDisplay.innerHTML = "Decidueye is a great choice for your starter because it has a strong signature move. Its signature move, Spirit Shackle prevents the opponent from switching. This move is great against opponents that use Baton Pass to set up. Finally, it has 107 attack and 100 special attack so that Decidueye can work as a versatile attacker. Although it only has 70 speed, Decidueye can learn priority moves such as Sucker Punch or Shadow Sneak that always go first against non-priority moves. Unfortunately, its Grass/Ghost typing is terrible defensively, with 5 weaknesses.";
});

var venusaur = document.getElementById("venusaur");

venusaur.addEventListener("mousemove", function() {
    sTierDisplay2.innerHTML = "";
    aTierDisplay2.innerHTML = "";
    bTierDisplay2.innerHTML = "";
    cTierDisplay2.innerHTML = "";
    dTierDisplay2.innerHTML = "";
    sTierDisplay.innerHTML = "";
    bTierDisplay.innerHTML = "";
    dTierDisplay.innerHTML = "";
    cTierDisplay.innerHTML = "";
    aTierDisplay.innerHTML = "Venusaur is one of the more balanced Pokemon among the starters, with no stat falling below 80. Its ability Chlorophyll doubles its speed in the sun, allowing Venusaur to counter Fire-types with Sunny Day. It also gets a reliable coverage move in Earthquake. However, its Grass/Poison typing has weaknesses to Fire, Flying, Psychic, and Ice, all of which are strong offensive types that can easily kill Venusaur.";
});

var swampert = document.getElementById("swampert");
swampert.addEventListener("mousemove", function() {
    sTierDisplay2.innerHTML = "";
    aTierDisplay2.innerHTML = "";
    bTierDisplay2.innerHTML = "";
    cTierDisplay2.innerHTML = "";
    dTierDisplay2.innerHTML = "";
    sTierDisplay.innerHTML = "";
    bTierDisplay.innerHTML = "";
    dTierDisplay.innerHTML = "";
    cTierDisplay.innerHTML = "";
    aTierDisplay.innerHTML = "Swampert is a strong option for a starter because it has one of the best typings in Water/Ground. His only weakness is a 4x weakness Grass. However, he can counter this with coverage moves like Ice Beam that can be learned through TMs. His stats are also balanced, with 110 attack and 90 defense. The only thing keeping it from S-Tier is his abysmal 60 speed, and he doesn't get Swift Swim like his Mega Evolution does.";
});

var serperior = document.getElementById("serperior");

serperior.addEventListener("mousemove", function() {
    sTierDisplay2.innerHTML = "";
    aTierDisplay2.innerHTML = "";
    bTierDisplay2.innerHTML = "";
    cTierDisplay2.innerHTML = "";
    dTierDisplay2.innerHTML = "";
    sTierDisplay.innerHTML = "";
    bTierDisplay.innerHTML = "";
    dTierDisplay.innerHTML = "";
    cTierDisplay.innerHTML = "";
    aTierDisplay.innerHTML = "Serperior is a solid Pokemon that is highlighted by its ability, Contrary. Contrary reverses all stat changes. For example, Serperior's move Leaf Storm normally lowers Serperior's Special Attack by 2 stages, but with Contrary, it is increased by 2 stages! In addition to that, it has 113 speed to outspeed Fire-types such as Infernape or Charizard that the opponent might switch into. However, Serperior has a very limited movepool, only being able to learn Grass, Dark, Dragon, and Flying moves. Only one of Serperior's five weaknesses can be countered with Serperior's moveset.";
});

var primarina = document.getElementById("primarina");

primarina.addEventListener("mousemove", function() {
    sTierDisplay2.innerHTML = "";
    aTierDisplay2.innerHTML = "";
    bTierDisplay2.innerHTML = "";
    cTierDisplay2.innerHTML = "";
    dTierDisplay2.innerHTML = "";
    sTierDisplay.innerHTML = "";
    dTierDisplay.innerHTML = "";
    bTierDisplay.innerHTML = "";
    cTierDisplay.innerHTML = "";
    aTierDisplay.innerHTML = "Primarina has 126 special attack and 116 special defense, making it a powerful all-around Pokemon. It's ability Liquid Voice makes sound moves water type, and combined with the move Hyper Voice gives Primarina a 50% damage boost. Like Swampert, she only has 60 speed, preventing her from being S-Tier.";
});

var sceptile = document.getElementById("sceptile");

sceptile.addEventListener("mousemove", function() {
    sTierDisplay2.innerHTML = "";
    aTierDisplay2.innerHTML = "";
    bTierDisplay2.innerHTML = "";
    cTierDisplay2.innerHTML = "";
    dTierDisplay2.innerHTML = "";
    sTierDisplay.innerHTML = "";
    dTierDisplay.innerHTML = "";
    aTierDisplay.innerHTML = "";
    bTierDisplay.innerHTML = "";
    cTierDisplay.innerHTML = "Sceptile is another fast Pokemon (120 speed) that can hit hard (105 special attack). Sceptile also has the ability Unburden, which doubles its speed after using its item. Similar to Serperior, Sceptile's downfall is its bad typing, with Grass having 5 weaknesses. However, Sceptile is extremely frail with only 65 defense.";
});

var incineroar = document.getElementById("incineroar");

incineroar.addEventListener("mousemove", function() {
    sTierDisplay2.innerHTML = "";
    aTierDisplay2.innerHTML = "";
    bTierDisplay2.innerHTML = "";
    cTierDisplay2.innerHTML = "";
    dTierDisplay2.innerHTML = "";
    sTierDisplay.innerHTML = "";
    aTierDisplay.innerHTML = "";
    bTierDisplay.innerHTML = "";
    dTierDisplay.innerHTML = "";
    cTierDisplay.innerHTML = "Incineroar is a powerful physical attacker, with 115 attack. In addition to that, its defensive stats are well-rounded with 90 for defense and special defense. Also, its ability Intimidate, which lowers the stat stage of all opponents by 1 upon entering battle, is great against strong physical attackers. However, its speed of 60 hinders Incineroar greatly. Unlike Decidueye, it does not have priority moves to make up for this.";
});

var charizard = document.getElementById("charizard");

charizard.addEventListener("mousemove", function() {
    sTierDisplay2.innerHTML = "";
    aTierDisplay2.innerHTML = "";
    bTierDisplay2.innerHTML = "";
    cTierDisplay2.innerHTML = "";
    dTierDisplay2.innerHTML = "";
    sTierDisplay.innerHTML = "";
    aTierDisplay.innerHTML = "";
    bTierDisplay.innerHTML = "";
    dTierDisplay.innerHTML = "";
    cTierDisplay.innerHTML = "Charizard is a powerful special attacker with 109 special attack, and it has 100 speed to back it up. It also gets coverage moves in Earthquake and Focus Blast. However, his typing of Fire/Flying has a 4x weakness to Rock. Stealth Rocks (entry hazards that do damage based on Rock-type effectiveness) halve his health upon entering, making it easy to kill. Also, his defensive stats are subpar, with only 78 health and defense.";
});

var emboar = document.getElementById("emboar");

emboar.addEventListener("mousemove", function() {
    sTierDisplay2.innerHTML = "";
    aTierDisplay2.innerHTML = "";
    bTierDisplay2.innerHTML = "";
    cTierDisplay2.innerHTML = "";
    dTierDisplay2.innerHTML = "";
    sTierDisplay.innerHTML = "";
    aTierDisplay.innerHTML = "";
    bTierDisplay.innerHTML = "";
    cTierDisplay.innerHTML = "";
    dTierDisplay.innerHTML = "Emboar is a D-Tier Pokemon, but has some highlights. First off, lets start with the positives. It has 123 attack, 110 health, and 100 special attack. That is all poor Emboar has going for it, unfortunately. His defense, special defense, and speed stats are all at 65, making it a sitting duck for opponents. In addition to that, many of his useful moves have a negative effect associated to them. Flare Blitz and Wild Charge both have recoil, and Superpower lowers Emboar's attack and defense. In addition to that, his ability does not help this issue, unlike abilities like Rock Head (removes recoil) or Magic Guard (removes indirect damage). Instead, his ability is Reckless, which deals 20% more damage with moves that have recoil. While the effect is good, it causes Emboar to take more recoil damage. Emboar can only survive a few hits before dying, and does not have a reliable speed to get off multiple attacks.";
});

var chesnaught = document.getElementById("chesnaught");

chesnaught.addEventListener("mousemove", function() {
    sTierDisplay2.innerHTML = "";
    aTierDisplay2.innerHTML = "";
    bTierDisplay2.innerHTML = "";
    cTierDisplay2.innerHTML = "";
    dTierDisplay2.innerHTML = "";
    sTierDisplay.innerHTML = "";
    aTierDisplay.innerHTML = "";
    dTierDisplay.innerHTML = "";
    cTierDisplay.innerHTML = "";
    bTierDisplay.innerHTML = "Chesnaught is incredibly bulky, with 122 defense. Its ability Bulletproof can be used situationally. In addition to that, Chesnaught has 107 attack for it to use powerful physical moves such as Wood Hammer and Drain Punch. Also, its signature move, Spiky Shield, does damage if the opponent makes contact with it. Unfortunately for Chesnaught, his Grass/Fighting type has 6 weaknesses, and his 75 special defense and his 64 speed doesn't help.";
});

var meganium = document.getElementById("meganium");

meganium.addEventListener("mousemove", function() {
    sTierDisplay2.innerHTML = "";
    aTierDisplay2.innerHTML = "";
    bTierDisplay2.innerHTML = "";
    cTierDisplay2.innerHTML = "";
    dTierDisplay2.innerHTML = "";
    sTierDisplay.innerHTML = "";
    aTierDisplay.innerHTML = "";
    bTierDisplay.innerHTML = "";
    dTierDisplay.innerHTML = "";
    cTierDisplay.innerHTML = "Meganium has decent bulk, with 100 defense and special defense. It has 80 health and speed, 82 attack, and 83 special attack. Not terrible stats, but not good enough to top other grass starters such as Decidueye or Venusaur. Meganium suffers the same fate many Grass-types do, having 5 weaknesses. Although its moveset is slightly better than Serperior's, it still cannot counter a majority of its weaknesses.";
});

var torterra = document.getElementById("torterra");

torterra.addEventListener("mousemove", function() {
    sTierDisplay2.innerHTML = "";
    aTierDisplay2.innerHTML = "";
    bTierDisplay2.innerHTML = "";
    cTierDisplay2.innerHTML = "";
    dTierDisplay2.innerHTML = "";
    sTierDisplay.innerHTML = "";
    aTierDisplay.innerHTML = "";
    bTierDisplay.innerHTML = "";
    cTierDisplay.innerHTML = "";
    dTierDisplay.innerHTML = "Torterra is a D-Tier Pokemon, but at least it has a few redeeming qualities. Torterra has 100 defense and 85 special defense, plus 95 health for some more bulk. Also, it has 109 attack and access to a lot of coverage moves. Unfortunately, Torterra has only 56 speed. It has the least speed of all starter Pokemon and any C-Tier Pokemon can outspeed and kill it quickly. In addition to that, its Grass/Ground typing has 4 weaknesses, including a 4x weakness to Ice. Ice-types are among the strongest offensive Pokemon, and to add insult to injury, many Pokemon can learn Ice Beam through TMs. At least his ability Shell Armor, which prevents critical hits against Torterra, helps with Torterra's bulk. ";
});

var blastoise = document.getElementById("blastoise");

blastoise.addEventListener("mousemove", function() {
    sTierDisplay2.innerHTML = "";
    aTierDisplay2.innerHTML = "";
    bTierDisplay2.innerHTML = "";
    cTierDisplay2.innerHTML = "";
    dTierDisplay2.innerHTML = "";
    sTierDisplay.innerHTML = "";
    aTierDisplay.innerHTML = "";
    bTierDisplay.innerHTML = "";
    dTierDisplay.innerHTML = "";
    cTierDisplay.innerHTML = "Blastoise is a decent tank, with 100 defense and 105 special defense. It can clear stage hazards with Rapid Spin and it has coverage moves such as Ice Beam. However, its offensive capabilities are limited with 83 attack and 85 special attack. Also, it has a mediocre 78 speed.";
});

var empoleon = document.getElementById("empoleon");

empoleon.addEventListener("mousemove", function() {
    sTierDisplay2.innerHTML = "";
    aTierDisplay2.innerHTML = "";
    bTierDisplay2.innerHTML = "";
    cTierDisplay2.innerHTML = "";
    dTierDisplay2.innerHTML = "";
    sTierDisplay.innerHTML = "";
    aTierDisplay.innerHTML = "";
    cTierDisplay.innerHTML = "";
    dTierDisplay.innerHTML = "";
    bTierDisplay.innerHTML = "Empoleon is a great support Pokemon since it has access to a wide variety of status moves. Defog can clear stage hazards, Stealth Rock is a reliable stage hazard to set, and Roar can switch out buffed opponents. Also, it has 88 defense and 101 special defense to stall for longer to allow Empoleon to use more status moves. Unfortunately, Empoleon's speed of 60 isn't good competitively, and status users especially need.";
});

var typhlosion = document.getElementById("typhlosion");

typhlosion.addEventListener("mousemove", function() {
    sTierDisplay2.innerHTML = "";
    aTierDisplay2.innerHTML = "";
    bTierDisplay2.innerHTML = "";
    cTierDisplay2.innerHTML = "";
    dTierDisplay2.innerHTML = "";
    sTierDisplay.innerHTML = "";
    aTierDisplay.innerHTML = "";
    cTierDisplay.innerHTML = "";
    dTierDisplay.innerHTML = "";
    bTierDisplay.innerHTML = "Typhlosion is a fast special attacker, with 109 special attack and 100 attack. In addition to that, Typhlosion can access Eruption, which does more damage the more health you have. If Typhlosion goes first, it can get off a powerful Eruption attack to start off. However, Typhlosion is easily countered by many types, and it doesn't help that its defense is 78 and its special defense is 85. Also, Eruption's power gets worse as you lose health, making it unreliable as the primary damage-dealing move.";
});

var delphox = document.getElementById("delphox");

delphox.addEventListener("mousemove", function() {
    sTierDisplay2.innerHTML = "";
    aTierDisplay2.innerHTML = "";
    bTierDisplay2.innerHTML = "";
    cTierDisplay2.innerHTML = "";
    dTierDisplay2.innerHTML = "";
    sTierDisplay.innerHTML = "";
    aTierDisplay.innerHTML = "";
    cTierDisplay.innerHTML = "";
    dTierDisplay.innerHTML = "";
    bTierDisplay.innerHTML = "Delphox is a fast (104 speed) special attacker (114 special attack) that has some bulk (100 special defense). Its signature move, Mystical Fire, lowers the opponent's Special Attack by one stage while also doing damage. Its Fire/Psychic typing is great offensively, but terrible defensively. Delphox has five weaknesses, and its 72 defense doesn't help.";
});

var samurott = document.getElementById("samurott");

samurott.addEventListener("mousemove", function() {
    sTierDisplay2.innerHTML = "";
    aTierDisplay2.innerHTML = "";
    bTierDisplay2.innerHTML = "";
    cTierDisplay2.innerHTML = "";
    dTierDisplay2.innerHTML = "";
    sTierDisplay.innerHTML = "";
    aTierDisplay.innerHTML = "";
    bTierDisplay.innerHTML = "";
    dTierDisplay.innerHTML = "";
    cTierDisplay.innerHTML = "Samurott is a versatile attacker, with 100 attack and 107 special attack. Its pure Water typing only gives it two weaknesses (Electric and Grass), both of which he can counter with moves such as Dig or Ice Beam. Unfortunately, Samurott's other stats are not great. His special defense of 70 is especially bad against his weaknesses, both of which use special attacks. In addition to that, his 70 speed makes him an easy target for opponents.";
});

var rayquazaMega = document.getElementById("rayquazaMega");

rayquazaMega.addEventListener("mousemove", function() {
    sTierDisplay2.innerHTML = "Mega Rayquaza is an excellent attacker with 180 attack and special attack combined with 115 speed. In addition to that, its defenses are decent with 100 defense and special defense and 105 health. Its ability Delta Stream removes all of Mega Rayquaza's Flying based weaknesses while active, limiting its weaknesses to 2 (Dragon and Ice). Finally, its movepool is also great, with powerful moves such as Dragon Ascent, Draco Meteor, and V-create. Overall, Mega Rayquaza will continue to dominate the metagame with excellent stats, ability, and movepool.";
    aTierDisplay2.innerHTML = "";
    bTierDisplay2.innerHTML = "";
    cTierDisplay2.innerHTML = "";
    dTierDisplay2.innerHTML = "";
    sTierDisplay.innerHTML = "";
    aTierDisplay.innerHTML = "";
    bTierDisplay.innerHTML = "";
    dTierDisplay.innerHTML = "";
    cTierDisplay.innerHTML = "";
});

var blazikenMega = document.getElementById("blazikenMega");

blazikenMega.addEventListener("mousemove", function() {
    sTierDisplay2.innerHTML = "Mega Blaziken is the same as Blaziken, but better. It has the same amazing ability in Speed Boost, and it has better offensive stats in 160 attack and 130 special attack. In addition to that, its has a stellar movepool with moves such as Blaze Kick and High Jump Kick. Unfortunately, its defenses are average with only 80 health, defense, and special defense.";
    aTierDisplay2.innerHTML = "";
    bTierDisplay2.innerHTML = "";
    cTierDisplay2.innerHTML = "";
    dTierDisplay2.innerHTML = "";
    sTierDisplay.innerHTML = "";
    aTierDisplay.innerHTML = "";
    bTierDisplay.innerHTML = "";
    dTierDisplay.innerHTML = "";
    cTierDisplay.innerHTML = "";
});

var gengarMega = document.getElementById("gengarMega");

gengarMega.addEventListener("mousemove", function() {
    sTierDisplay2.innerHTML = "Mega Gengar is an excellent offensive option, with 170 special attack and 130 speed. It also has one of the best abilities in Shadow Tag. Its movepool consists of powerful moves such as Shadow Ball and Sludge Wave. Unfortunately, Gengar only has 60 health, and its mediocre 80 defense will leave Mega Gengar vulnerable to strong physical attackers if it isn't used in the best situation.";
    aTierDisplay2.innerHTML = "";
    bTierDisplay2.innerHTML = "";
    cTierDisplay2.innerHTML = "";
    dTierDisplay2.innerHTML = "";
    sTierDisplay.innerHTML = "";
    aTierDisplay.innerHTML = "";
    bTierDisplay.innerHTML = "";
    dTierDisplay.innerHTML = "";
    cTierDisplay.innerHTML = "";
});

var mewtwoMegaX = document.getElementById("mewtwoMegaX");

mewtwoMegaX.addEventListener("mousemove", function() {
    sTierDisplay2.innerHTML = "Mega Mewtwo X has more balanced stats than Mega Mewtwo Y, with 100 defense and special defense combined with 106 health. Mega Mewtwo X is also one of the best physical attackers out there with 190 attack, but it also has 154 special attack just in case. It has an excellent 130 speed as well. Although its ability Steadfast is too situational to be used to is advantage, Mega Mewtwo X has such good stats that he won't need to to rely on a good ability.";
    aTierDisplay2.innerHTML = "";
    bTierDisplay2.innerHTML = "";
    cTierDisplay2.innerHTML = "";
    dTierDisplay2.innerHTML = "";
    sTierDisplay.innerHTML = "";
    aTierDisplay.innerHTML = "";
    bTierDisplay.innerHTML = "";
    dTierDisplay.innerHTML = "";
    cTierDisplay.innerHTML = "";
});

var mewtwoMegaY = document.getElementById("mewtwoMegaY");

mewtwoMegaY.addEventListener("mousemove", function() {
    sTierDisplay2.innerHTML = "Mega Mewtwo Y is one of the best offensive Pokemon, with 194 special attack and 140 speed. Its strong moveset of powerful special moves such as Psystrike and Aura Sphere. Unfortunately, its 70 defense leaves it very vulnerable to powerful physical attackers. At least it could learn Recover to try and regain that health.";
    aTierDisplay2.innerHTML = "";
    bTierDisplay2.innerHTML = "";
    cTierDisplay2.innerHTML = "";
    dTierDisplay2.innerHTML = "";
    sTierDisplay.innerHTML = "";
    aTierDisplay.innerHTML = "";
    bTierDisplay.innerHTML = "";
    dTierDisplay.innerHTML = "";
    cTierDisplay.innerHTML = "";
});

var kangaskhanMega = document.getElementById("kangaskhanMega");

kangaskhanMega.addEventListener("mousemove", function() {
    sTierDisplay2.innerHTML = "Mega Kangaskhan has one of the best abilities in Parental Bond. Although it was nerfed in Generation 7, Parental Bond gives Mega Kangaskhan an extra attack that does 25% of normal damage, that has a separate critical chance and secondary effect chance. It has good balanced stats, with 100 speed, defense, and special defense combined with 125 attack and 105 health. Also, it has access to priority moves such as Fake Out and Sucker Punch. Unfortunately, its Normal typing doesn't give any resistances other than a Ghost immunity.";
    aTierDisplay2.innerHTML = "";
    bTierDisplay2.innerHTML = "";
    cTierDisplay2.innerHTML = "";
    dTierDisplay2.innerHTML = "";
    sTierDisplay.innerHTML = "";
    aTierDisplay.innerHTML = "";
    bTierDisplay.innerHTML = "";
    dTierDisplay.innerHTML = "";
    cTierDisplay.innerHTML = "";
});

var lucarioMega = document.getElementById("lucarioMega");

lucarioMega.addEventListener("mousemove", function() {
    sTierDisplay2.innerHTML = "Mega Lucario is a versatile attacker with 145 attack and 140 special attack. Its ability Adaptabilty changes the attack bonus of using attacks of the same type from 1.5x to 2x. Mega Lucario has an impressive moveset, with moves such as Aura Sphere or Flash Cannon on the special side, and Meteor Mash and Close Combat on the physical side. However, 70 health and special defense leaves Lucario vulnerable to strong special attackers.";
    aTierDisplay2.innerHTML = "";
    bTierDisplay2.innerHTML = "";
    cTierDisplay2.innerHTML = "";
    dTierDisplay2.innerHTML = "";
    sTierDisplay.innerHTML = "";
    aTierDisplay.innerHTML = "";
    bTierDisplay.innerHTML = "";
    dTierDisplay.innerHTML = "";
    cTierDisplay.innerHTML = "";
});

var metagrossMega = document.getElementById("metagrossMega");

metagrossMega.addEventListener("mousemove", function() {
    sTierDisplay2.innerHTML = "Mega Metagross is a balanced tank, with 145 attack and 150 defense plus 110 special defense and speed. Its ability Tough Claws boosts contact moves by 30%, allowing it to make further use of its high Attack. In addition to that, he gets a priority move Bullet Punch, which is boosted by his same type attack bonus and Tough Claws.";
    aTierDisplay2.innerHTML = "";
    bTierDisplay2.innerHTML = "";
    cTierDisplay2.innerHTML = "";
    dTierDisplay2.innerHTML = "";
    sTierDisplay.innerHTML = "";
    aTierDisplay.innerHTML = "";
    bTierDisplay.innerHTML = "";
    dTierDisplay.innerHTML = "";
    cTierDisplay.innerHTML = "";
});

var salamenceMega = document.getElementById("salamenceMega");

salamenceMega.addEventListener("mousemove", function() {
    sTierDisplay2.innerHTML = "Mega Salamence has one of the best abilities in Aerilate. Although it was nerfed in Generation 7, it boosts Normal-type moves by 20% and changes their type to Flying. This gives him a 50% same type attack bonus and a 20% boost from Aerilate. Also, it boasts an impressive statline of 145 attack, 130 defense, and 120 special attack and speed.";
    aTierDisplay2.innerHTML = "";
    bTierDisplay2.innerHTML = "";
    cTierDisplay2.innerHTML = "";
    dTierDisplay2.innerHTML = "";
    sTierDisplay.innerHTML = "";
    aTierDisplay.innerHTML = "";
    bTierDisplay.innerHTML = "";
    dTierDisplay.innerHTML = "";
    cTierDisplay.innerHTML = "";
});

var alakazamMega = document.getElementById("alakazamMega");

alakazamMega.addEventListener("mousemove", function() {
    sTierDisplay2.innerHTML = "";
    aTierDisplay2.innerHTML = "Alakazam and its Mega Evolution both have an excellent Special Attack stat, coupled with a fantastic Speed tier, which allows it to function effectively as a wallbreaker, revenge killer, and late-game sweeper. In addition, Mega Alakazam has access to a stellar ability in Trace (copies opponents ability). Last but not least, Alakazam has a wide array of utility options in its arsenal such as Thunder Wave, Encore, and Taunt, letting it function well against both offensive and defensive teams. However, Alakazam possesses a mediocre Psychic typing. To add insult to injury, Alakazam has paper-thin defenses due to its low HP and Defense stats.";
    bTierDisplay2.innerHTML = "";
    cTierDisplay2.innerHTML = "";
    dTierDisplay2.innerHTML = "";
    sTierDisplay.innerHTML = "";
    aTierDisplay.innerHTML = "";
    bTierDisplay.innerHTML = "";
    dTierDisplay.innerHTML = "";
    cTierDisplay.innerHTML = "";
});

var charizardMegaX = document.getElementById("charizardMegaX");

charizardMegaX.addEventListener("mousemove", function() {
    sTierDisplay2.innerHTML = "";
    aTierDisplay2.innerHTML = "Mega Charizard X is known to be one of the best Dragon Dancers in the entire tier; the combination of a base 130 Attack and a boost on both of its main STAB moves thanks to Tough Claws allows it to kill most foes after one Dragon Dance with Flare Blitz, meaning it can sweep almost effortlessly through teams, especially given how easy it is to set up with such a great defensive typing. Furthermore, Mega Charizard X can utilize its amazing typing, bulk, and movepool to be very unpredictable. Taking substantial Flare Blitz recoil limits its ability without being worn down.";
    bTierDisplay2.innerHTML = "";
    cTierDisplay2.innerHTML = "";
    dTierDisplay2.innerHTML = "";
    sTierDisplay.innerHTML = "";
    aTierDisplay.innerHTML = "";
    bTierDisplay.innerHTML = "";
    dTierDisplay.innerHTML = "";
    cTierDisplay.innerHTML = "";
});

var charizardMegaY = document.getElementById("charizardMegaY");

charizardMegaY.addEventListener("mousemove", function() {
    sTierDisplay2.innerHTML = "";
    aTierDisplay2.innerHTML = "Mega Charizard Y's amazing Fire type and base 159 Special Attack make it appear to be a powerful wallbreaker in and of themselves. However, Mega Charizard Y's claim to fame is its ability, Drought, which boosts Fire Blast's power even further, allowing it to kill or severely dent a significant portion of the tier, and makes Solar Beam a 120-Base Power Grass attack that takes only one turn to use, nullifying Water-types as possible checks. Its massive Stealth Rock weakness limits its opportunities to switch in, however.";
    bTierDisplay2.innerHTML = "";
    cTierDisplay2.innerHTML = "";
    dTierDisplay2.innerHTML = "";
    sTierDisplay.innerHTML = "";
    aTierDisplay.innerHTML = "";
    bTierDisplay.innerHTML = "";
    dTierDisplay.innerHTML = "";
    cTierDisplay.innerHTML = "";
});

var garchompMega = document.getElementById("garchompMega");

garchompMega.addEventListener("mousemove", function() {
    sTierDisplay2.innerHTML = "";
    aTierDisplay2.innerHTML = "Mega Garchomp has a Mega Evolution that boosts its offensive and defensive stats, turning it into a devastating wallbreaker. However, this comes at the cost of its Speed, leaving it outsped by even more offensive Pokemon. It also has a crippling 4x weakness to Ice-type attacks.";
    bTierDisplay2.innerHTML = "";
    cTierDisplay2.innerHTML = "";
    dTierDisplay2.innerHTML = "";
    sTierDisplay.innerHTML = "";
    aTierDisplay.innerHTML = "";
    bTierDisplay.innerHTML = "";
    dTierDisplay.innerHTML = "";
    cTierDisplay.innerHTML = "";
});

var gyaradosMega = document.getElementById("gyaradosMega");

gyaradosMega.addEventListener("mousemove", function() {
    sTierDisplay2.innerHTML = "";
    aTierDisplay2.innerHTML = "Mega Gyarados differentiates itself from other setup sweepers like Mega Salamence and Rayquaza with its access to Mold Breaker and Taunt, which lets it easily break through stall teams. A Dark typing gives Mega Gyarados an upper hand against Ghost-types. Mega Gyarados lacks initial pressure due to its rather weak same-type moves and mediocre Speed.";
    bTierDisplay2.innerHTML = "";
    cTierDisplay2.innerHTML = "";
    dTierDisplay2.innerHTML = "";
    sTierDisplay.innerHTML = "";
    aTierDisplay.innerHTML = "";
    bTierDisplay.innerHTML = "";
    dTierDisplay.innerHTML = "";
    cTierDisplay.innerHTML = "";
});

var medichamMega = document.getElementById("medichamMega");

medichamMega.addEventListener("mousemove", function() {
    sTierDisplay2.innerHTML = "";
    aTierDisplay2.innerHTML = "Mega Medicham's ability Pure Power doubles Mega Medicham's Attack stat, making it one of the most powerful wallbreakers. Mega Medicham also has access to priority moves such as Fake Out and Bullet Punch, which help patch up its only decent Speed stat and allow it to pick off faster offensive Pokemon. Mega Medicham's relatively low Speed stat alongside very poor bulk makes it rather easy to revenge kill.";
    bTierDisplay2.innerHTML = "";
    cTierDisplay2.innerHTML = "";
    dTierDisplay2.innerHTML = "";
    sTierDisplay.innerHTML = "";
    aTierDisplay.innerHTML = "";
    bTierDisplay.innerHTML = "";
    dTierDisplay.innerHTML = "";
    cTierDisplay.innerHTML = "";
});

var tyranitarMega = document.getElementById("tyranitarMega");

tyranitarMega.addEventListener("mousemove", function() {
    sTierDisplay2.innerHTML = "";
    aTierDisplay2.innerHTML = "Mega Tyranitar's ability Sand Stream provides it with a massive Special Defense boost. Its Rock/Dark typing hits the majority of the Pokemon in the metagame for at least neutral damage. It has common weaknesses in Fairy, Ground, Water, and Fighting, which force it to switch out very frequently. Very low Speed forces Tyranitar to take a hit before being able to react, meaning super effective coverage moves will easily dispose of it.";
    bTierDisplay2.innerHTML = "";
    cTierDisplay2.innerHTML = "";
    dTierDisplay2.innerHTML = "";
    sTierDisplay.innerHTML = "";
    aTierDisplay.innerHTML = "";
    bTierDisplay.innerHTML = "";
    dTierDisplay.innerHTML = "";
    cTierDisplay.innerHTML = "";
});

var galladeMega = document.getElementById("galladeMega");

galladeMega.addEventListener("mousemove", function() {
    sTierDisplay2.innerHTML = "";
    aTierDisplay2.innerHTML = "Mega Gallade's high Attack stat and access to Swords Dance allow it to function as a solid wallbreaker combined with 110 speed. Its physical bulk is rather lackluster, however, meaning that it's more prone to being revenge killed by commonly used priority moves and has limited setup opportunities.";
    bTierDisplay2.innerHTML = "";
    cTierDisplay2.innerHTML = "";
    dTierDisplay2.innerHTML = "";
    sTierDisplay.innerHTML = "";
    aTierDisplay.innerHTML = "";
    bTierDisplay.innerHTML = "";
    dTierDisplay.innerHTML = "";
    cTierDisplay.innerHTML = "";
});

var gardevoirMega = document.getElementById("gardevoirMega");

gardevoirMega.addEventListener("mousemove", function() {
    sTierDisplay2.innerHTML = "";
    aTierDisplay2.innerHTML = "Mega Gardevoir is a great wallbreaker with Pixilate-boosted Hyper Voice and a high Special Attack stat, easily breaking walls. It can check most threatening Dark- and Dragon-types. Mega Gardevoir's terrible physical bulk makes it weak to many common priority users and physical attackers.";
    bTierDisplay2.innerHTML = "";
    cTierDisplay2.innerHTML = "";
    dTierDisplay2.innerHTML = "";
    sTierDisplay.innerHTML = "";
    aTierDisplay.innerHTML = "";
    bTierDisplay.innerHTML = "";
    dTierDisplay.innerHTML = "";
    cTierDisplay.innerHTML = "";
});

var heracrossMega = document.getElementById("heracrossMega");

heracrossMega.addEventListener("mousemove", function() {
    sTierDisplay2.innerHTML = "";
    aTierDisplay2.innerHTML = "Mega Heracross is one of the most powerful wallbreakers in the tier, being able to dismantle defensive teams with Swords Dance along with its high Attack stat. Having a unique defensive typing along with respectable bulk allows Mega Heracross to check many top-tier offensive threats. In addition to its common weaknesses of Fairy, Fire, and Flying, Mega Heracross's poor Speed makes it easy to revenge kill.";
    bTierDisplay2.innerHTML = "";
    cTierDisplay2.innerHTML = "";
    dTierDisplay2.innerHTML = "";
    sTierDisplay.innerHTML = "";
    aTierDisplay.innerHTML = "";
    bTierDisplay.innerHTML = "";
    dTierDisplay.innerHTML = "";
    cTierDisplay.innerHTML = "";
});

var latiasMega = document.getElementById("latiasMega");

latiasMega.addEventListener("mousemove", function() {
    sTierDisplay2.innerHTML = "";
    aTierDisplay2.innerHTML = "Mega Latias' solid mixed bulk and the immunities and resistances granted by its typing and ability mean it can switch into both physical and special sets. It also has access to Defog and Healing Wish. However, it is heavily threatened by many strong offensive threats.";
    bTierDisplay2.innerHTML = "";
    cTierDisplay2.innerHTML = "";
    dTierDisplay2.innerHTML = "";
    sTierDisplay.innerHTML = "";
    aTierDisplay.innerHTML = "";
    bTierDisplay.innerHTML = "";
    dTierDisplay.innerHTML = "";
    cTierDisplay.innerHTML = "";
});

var latiosMega = document.getElementById("latiosMega");

latiosMega.addEventListener("mousemove", function() {
    sTierDisplay2.innerHTML = "";
    aTierDisplay2.innerHTML = "Mega Latios's great Speed and offensive stats make it a premier check to several threats in the metagame. Moreover, its excellent offensive typing, high-powered same-type attacks, and vast range of coverage options make Mega Latios a formidable offensive threat in its own right. Mega Latios also sports numerous type resistances, great bulk, and access to recovery, enabling it to act as a solid pivot into Water-, Grass-, Electric-, and Fire-type attacks. Despite its strengths, though, Mega Latios is threatened by common Fairy-types.";
    bTierDisplay2.innerHTML = "";
    cTierDisplay2.innerHTML = "";
    dTierDisplay2.innerHTML = "";
    sTierDisplay.innerHTML = "";
    aTierDisplay.innerHTML = "";
    bTierDisplay.innerHTML = "";
    dTierDisplay.innerHTML = "";
    cTierDisplay.innerHTML = "";
});

var pinsirMega = document.getElementById("pinsirMega");

pinsirMega.addEventListener("mousemove", function() {
    sTierDisplay2.innerHTML = "";
    aTierDisplay2.innerHTML = "Mega Pinsir is an extremely powerful wallbreaker thanks to Aerilate and its high Attack, which can be boosted further with Swords Dance. It possesses good coverage options in Earthquake and Close Combat. Aerilate-boosted Quick Attack uniquely gives Mega Pinsir Flying-type priority that lets it pick off Pokemon troubling Pokemon for offense. However, Mega Pinsir's typing leaves it with a nasty Stealth Rock weakness, making solid entry hazard control support highly recommended, something that not many offensive teams are able to afford. Mega Pinsir is also relatively frail on the special side and has a mediocre defensive typing.";
    bTierDisplay2.innerHTML = "";
    cTierDisplay2.innerHTML = "";
    dTierDisplay2.innerHTML = "";
    sTierDisplay.innerHTML = "";
    aTierDisplay.innerHTML = "";
    bTierDisplay.innerHTML = "";
    dTierDisplay.innerHTML = "";
    cTierDisplay.innerHTML = "";
});

var sableyeMega = document.getElementById("sableyeMega");

sableyeMega.addEventListener("mousemove", function() {
    sTierDisplay2.innerHTML = "";
    aTierDisplay2.innerHTML = "Mega Sableye's solid defensive stats allow it to act as one of the only switch-ins to Mega Medicham because of its Dark/Ghost typing. Mega Sableye's ability Magic Bounce further bolsters its defensive capabilities by reflecting troublesome entry hazards and status moves. Unfortunately, Mega Sableye is rather passive due to its atrocious offensive stats, so it is limited to being used on stall teams.";
    bTierDisplay2.innerHTML = "";
    cTierDisplay2.innerHTML = "";
    dTierDisplay2.innerHTML = "";
    sTierDisplay.innerHTML = "";
    aTierDisplay.innerHTML = "";
    bTierDisplay.innerHTML = "";
    dTierDisplay.innerHTML = "";
    cTierDisplay.innerHTML = "";
});

var mawileMega = document.getElementById("mawileMega");

mawileMega.addEventListener("mousemove", function() {
    sTierDisplay2.innerHTML = "";
    aTierDisplay2.innerHTML = "Mega Mawile is one of the strongest breakers in the OU metagame. Solid coverage options like Knock Off, Ice Punch, Fire Fang, and Thunder Punch alongside a setup move in Swords Dance make Mega Mawile impossible to deal with defensively, while its access to Sucker Punch gives it the ability to threaten offensive teams. However, because of its very poor Speed, Mega Mawile heavily relies on Sucker Punch to deal with faster threats. While Mega Mawile's typing is great, it does give Mega Mawile two weaknesses to extremely common types, namely Fighting, Ground, and Fire.";
    bTierDisplay2.innerHTML = "";
    cTierDisplay2.innerHTML = "";
    dTierDisplay2.innerHTML = "";
    sTierDisplay.innerHTML = "";
    aTierDisplay.innerHTML = "";
    bTierDisplay.innerHTML = "";
    dTierDisplay.innerHTML = "";
    cTierDisplay.innerHTML = "";
});

var lopunnyMega = document.getElementById("lopunnyMega");

lopunnyMega.addEventListener("mousemove", function() {
    sTierDisplay2.innerHTML = "";
    aTierDisplay2.innerHTML = "Mega Lopunny possesses an amazing Speed stat that lets it outpace most of the unboosted metagame, thus making it an excellent revenge killer. Furthermore, Lopunny's high-Base Power same-type moves give it perfect coverage thanks to its ability Scrappy. On top of that, Lopunny has access to a wide supportive movepool consisting of moves like Encore and Power-Up Punch that helps it take on bulkier Pokemon it struggles against. However, Lopunny lacks the immediate power to break through some of the bulkier Pokemon in the metagame.";
    bTierDisplay2.innerHTML = "";
    cTierDisplay2.innerHTML = "";
    dTierDisplay2.innerHTML = "";
    sTierDisplay.innerHTML = "";
    aTierDisplay.innerHTML = "";
    bTierDisplay.innerHTML = "";
    dTierDisplay.innerHTML = "";
    cTierDisplay.innerHTML = "";
});

var scizorMega = document.getElementById("scizorMega");

scizorMega.addEventListener("mousemove", function() {
    sTierDisplay2.innerHTML = "";
    aTierDisplay2.innerHTML = "Mega Scizor also sports key resistances to Dragon, Ice, Fairy, and Steel and an immunity to Toxic. Technician-boosted Bullet Punch makes Scizor able to consistently check Fairy-types. Scizor can use U-turn to pivot out of Pokemon it draws in. Scizor's typing combination is resisted by many threats, which can make it passive at times.";
    bTierDisplay2.innerHTML = "";
    cTierDisplay2.innerHTML = "";
    dTierDisplay2.innerHTML = "";
    sTierDisplay.innerHTML = "";
    aTierDisplay.innerHTML = "";
    bTierDisplay.innerHTML = "";
    dTierDisplay.innerHTML = "";
    cTierDisplay.innerHTML = "";
});

var venusaurMega = document.getElementById("venusaurMega");

venusaurMega.addEventListener("mousemove", function() {
    sTierDisplay2.innerHTML = "";
    aTierDisplay2.innerHTML = "Mega Venusaur's defensive typing, bulk, and Thick Fat ability give balance teams a Toxic immunity and a sturdy blanket check to many common threats in the metagame. With Leech Seed, Mega Venusaur is able to wear down most of its switch-ins. Mega Venusaur is shut down by Taunt, which prevents it from using Leech Seed and its other support moves.";
    bTierDisplay2.innerHTML = "";
    cTierDisplay2.innerHTML = "";
    dTierDisplay2.innerHTML = "";
    sTierDisplay.innerHTML = "";
    aTierDisplay.innerHTML = "";
    bTierDisplay.innerHTML = "";
    dTierDisplay.innerHTML = "";
    cTierDisplay.innerHTML = "";
});

var swampertMega = document.getElementById("swampertMega");

swampertMega.addEventListener("mousemove", function() {
    sTierDisplay2.innerHTML = "";
    aTierDisplay2.innerHTML = "Mega Swampert is the premier Mega Evolution choice on rain teams because of its Electric immunity. Mega Swampert suffers the same problem with other bulky physical attackers, as it is prone to chip damage from Rocky Helmet, Rough Skin, and Iron Barbs, meaning its bulk sometimes cannot be used practically. Mega Swampert is also dependent on rain to function, meaning it can only be used effectively when rain is active.";
    bTierDisplay2.innerHTML = "";
    cTierDisplay2.innerHTML = "";
    dTierDisplay2.innerHTML = "";
    sTierDisplay.innerHTML = "";
    aTierDisplay.innerHTML = "";
    bTierDisplay.innerHTML = "";
    dTierDisplay.innerHTML = "";
    cTierDisplay.innerHTML = "";
});

var diancieMega = document.getElementById("diancieMega");

diancieMega.addEventListener("mousemove", function() {
    sTierDisplay2.innerHTML = "";
    aTierDisplay2.innerHTML = "Mega Diancie's ability Magic Bounce is a really useful ability, as it's able to prevent entry hazards from being set on the field and also prevents Mega Diancie's foes from trying to spread status. Boasting a base 160 in both offensive stats, Mega Diancie is able to utilize a mixed set incredibly well, being able to quite effectively dent through dedicated special and physical walls. Although base 110 in both defenses is quite respectable, its low HP combined with the fact that it has to run a nature that reduces bulk results in Mega Diancie being rather frail, even when those stats are boosted. Although a base 110 Speed is relatively impressive on paper, it should be noted that many of Mega Diancie's checks actually outspeed it.";
    bTierDisplay2.innerHTML = "";
    cTierDisplay2.innerHTML = "";
    dTierDisplay2.innerHTML = "";
    sTierDisplay.innerHTML = "";
    aTierDisplay.innerHTML = "";
    bTierDisplay.innerHTML = "";
    dTierDisplay.innerHTML = "";
    cTierDisplay.innerHTML = "";
});

var aerodactylMega = document.getElementById("aerodactylMega");

aerodactylMega.addEventListener("mousemove", function() {
    sTierDisplay2.innerHTML = "";
    aTierDisplay2.innerHTML = "";
    bTierDisplay2.innerHTML = "Mega Aerodactyl's 150 speed paired with 135 Attack is great with its ability Tough Claws. It also has a wide arsenal of moves, such as Stone Edge, Earthquake, Wing Attack, and Pursuit. Unfortunately, its weak to powerful priority moves such as Bullet Punch and Ice Shard, and its weak to Stealth Rock.";
    cTierDisplay2.innerHTML = "";
    dTierDisplay2.innerHTML = "";
    sTierDisplay.innerHTML = "";
    aTierDisplay.innerHTML = "";
    bTierDisplay.innerHTML = "";
    dTierDisplay.innerHTML = "";
    cTierDisplay.innerHTML = "";
});

var aggronMega = document.getElementById("aggronMega");

aggronMega.addEventListener("mousemove", function() {
    sTierDisplay2.innerHTML = "";
    aTierDisplay2.innerHTML = "";
    bTierDisplay2.innerHTML = "Mega Aggrons Defense stat boosts to a gargantuan base 230, pairing nicely with its solid defensive typing in Steel. Filter makes for a fantastic ability, helping it against super effective attackers. However, its HP and Special Defense stats are rather mediocre, limiting its overall effectiveness as a tank. Additionally, Mega Aggron has no passive or reliable recovery, making it easily worn down over the course of a match. ";
    cTierDisplay2.innerHTML = "";
    dTierDisplay2.innerHTML = "";
    sTierDisplay.innerHTML = "";
    aTierDisplay.innerHTML = "";
    bTierDisplay.innerHTML = "";
    dTierDisplay.innerHTML = "";
    cTierDisplay.innerHTML = "";
});

var altariaMega = document.getElementById("altariaMega");

altariaMega.addEventListener("mousemove", function() {
    sTierDisplay2.innerHTML = "";
    aTierDisplay2.innerHTML = "";
    bTierDisplay2.innerHTML = "Mega Altaria receives a strong overall typing in Dragon/Fairy, several notable base stat boosts, and a fantastic ability in Pixilate. Its great defensive typing complements Mega Altaria's bulk nicely, letting it naturally check threats. Mega Altaria's downfall lies in its mediocre Speed stat of base 80, making it fairly easy to revenge kill, as well as its weakness to some of the most common Pokemon in Steel-types. Also, while solid, its offensive stats are nothing special, leading to struggles against mixed walls.";
    cTierDisplay2.innerHTML = "";
    dTierDisplay2.innerHTML = "";
    sTierDisplay.innerHTML = "";
    aTierDisplay.innerHTML = "";
    bTierDisplay.innerHTML = "";
    dTierDisplay.innerHTML = "";
    cTierDisplay.innerHTML = "";
});

var beedrillMega = document.getElementById("beedrillMega");

beedrillMega.addEventListener("mousemove", function() {
    sTierDisplay2.innerHTML = "";
    aTierDisplay2.innerHTML = "";
    bTierDisplay2.innerHTML = "Mega Beedrill is among the best offensive pivots available by virtue of amazing offensive stats and Adaptability. Its typing allows it to provide heavy offensive pressure to common Pokemon. Mega Beedrill also has access to Toxic Spikes, which it can use as it forces switches to wear down opposing Pokemon. However, Mega Beedrill has atrocious bulk, which leaves it vulnerable to Choice Scarf users and strong priority.";
    cTierDisplay2.innerHTML = "";
    dTierDisplay2.innerHTML = "";
    sTierDisplay.innerHTML = "";
    aTierDisplay.innerHTML = "";
    bTierDisplay.innerHTML = "";
    dTierDisplay.innerHTML = "";
    cTierDisplay.innerHTML = "";
});

var manectricMega = document.getElementById("manectricMega");

manectricMega.addEventListener("mousemove", function() {
    sTierDisplay2.innerHTML = "";
    aTierDisplay2.innerHTML = "";
    bTierDisplay2.innerHTML = "Mega Manectric is one of the best offensive pivots and revenge killers in the metagame, and it is one of the best Mega Evolutions for VoltTurn teams. Its access to strong Fire-type coverage moves like Overheat and Flamethrower and to Hidden Power Ice lets it pressure many of the Pokemon that resist or are immune to Volt Switch. Its extremely subpar bulk and lack of recovery make Mega Manectric easily taken out by Choice Scarf users.";
    cTierDisplay2.innerHTML = "";
    dTierDisplay2.innerHTML = "";
    sTierDisplay.innerHTML = "";
    aTierDisplay.innerHTML = "";
    bTierDisplay.innerHTML = "";
    dTierDisplay.innerHTML = "";
    cTierDisplay.innerHTML = "";
});

var steelixMega = document.getElementById("steelixMega");

steelixMega.addEventListener("mousemove", function() {
    sTierDisplay2.innerHTML = "";
    aTierDisplay2.innerHTML = "";
    bTierDisplay2.innerHTML = "Mega Steelix is a great tank that takes advantage of its great bulk, good typing, and high Attack to check prominent threats. Mega Steelix's Ground typing allows it to block Volt Switch, which gives it leverage over other Steel-types. Despite having eight resistances, Mega Steelix suffers from a weakness to common types including Fighting, Water, and Ground, which leaves it weak to other prominent threats. ";
    cTierDisplay2.innerHTML = "";
    dTierDisplay2.innerHTML = "";
    sTierDisplay.innerHTML = "";
    aTierDisplay.innerHTML = "";
    bTierDisplay.innerHTML = "";
    dTierDisplay.innerHTML = "";
    cTierDisplay.innerHTML = "";
});

var sharpedoMega = document.getElementById("sharpedoMega");

sharpedoMega.addEventListener("mousemove", function() {
    sTierDisplay2.innerHTML = "";
    aTierDisplay2.innerHTML = "";
    bTierDisplay2.innerHTML = "Mega Sharpedo is a great late-game cleaner, utilizing both its pre-Mega ability in Speed Boost and its post-Mega ability in Strong Jaw to sweep.  Its great Attack and Speed stats allow Mega Sharpedo to hit very hard and very fast at the same time, with Crunch severely damaging Pokemon. Strong Jaw also boosts the Base Power of coverage moves like Ice Fang and Psychic Fangs, allowing Mega Sharpedo to hit would-be checks and counters. Mega Sharpedo has terrible bulk and a defensive typing that gives it numerous weaknesses to common types like Fighting, Grass, and Bug, although it does resist a very important priority move in Bullet Punch. Said poor bulk means that if Mega Sharpedo doesn't kill what's in front of it, it will likely get killed in return.";
    cTierDisplay2.innerHTML = "";
    dTierDisplay2.innerHTML = "";
    sTierDisplay.innerHTML = "";
    aTierDisplay.innerHTML = "";
    bTierDisplay.innerHTML = "";
    dTierDisplay.innerHTML = "";
    cTierDisplay.innerHTML = "";
});

var pidgeotMega = document.getElementById("pidgeotMega");

pidgeotMega.addEventListener("mousemove", function() {
    sTierDisplay2.innerHTML = "";
    aTierDisplay2.innerHTML = "";
    bTierDisplay2.innerHTML = "Mega Pidgeot's great Speed, amazing offensive typing in Flying, and solid Special Attack make it a threatening attacker. No Guard gives Mega Pidgeot a 100% accurate Hurricane, which means it has something many special attacking Flying-types lack: a reliable, strong same-type move. Flying as an offensive typing is great, as few types resist it, although the types it hits super effectively are not very common. Mega Pidgeot also has solid coverage in Heat Wave, pivoting abilities in U-turn, and reliable recovery in Roost, giving it decent longevity and allowing it to fit on VoltTurn teams. Mega Pidgeot's flaws lie in its mediocre defensive typing, giving it very few useful resistances and a crippling weakness to Stealth Rock; its bulk is good enough to survive most neutral attacks, but not with Stealth Rock up, making entry hazard removal a priority on Mega Pidgeot teams.";
    cTierDisplay2.innerHTML = "";
    dTierDisplay2.innerHTML = "";
    sTierDisplay.innerHTML = "";
    aTierDisplay.innerHTML = "";
    bTierDisplay.innerHTML = "";
    dTierDisplay.innerHTML = "";
    cTierDisplay.innerHTML = "";
});

var houndoomMega = document.getElementById("houndoomMega");

houndoomMega.addEventListener("mousemove", function() {
    sTierDisplay2.innerHTML = "";
    aTierDisplay2.innerHTML = "";
    bTierDisplay2.innerHTML = "Mega Houndoom's Special Attack and Speed boosts Houndoom receives upon Mega Evolution make it a respectable sweeper. Its movepool complements its massive Special Attack stat and strong offensive typing perfectly, containing high-Base Power same-type moves, a great boosting move in Nasty Plot, and other intriguing options such as Sludge Bomb, Taunt, and Destiny Bond. With its high Speed, Mega Houndoom outspeeds most unboosted Pokemon. However, while its Dark/Fire typing is solid offensively, it leaves Mega Houndoom weak to common Water, Fighting, and Ground-type attacks. Mega Houndoom also finds itself vulnerable to all entry hazards, including a notable weakness to Stealth Rock, which in combination with its average bulk does not leave Mega Houndoom with many opportunities to fulfill its role.";
    cTierDisplay2.innerHTML = "";
    dTierDisplay2.innerHTML = "";
    sTierDisplay.innerHTML = "";
    aTierDisplay.innerHTML = "";
    bTierDisplay.innerHTML = "";
    dTierDisplay.innerHTML = "";
    cTierDisplay.innerHTML = "";
});

var absolMega = document.getElementById("absolMega");

absolMega.addEventListener("mousemove", function() {
    sTierDisplay2.innerHTML = "";
    aTierDisplay2.innerHTML = "";
    bTierDisplay2.innerHTML = "Mega Absol is a fast offensive trapper that's able to utilize its relatively high Speed and good movepool featuring Pursuit and Knock Off to outspeed and trap threats. Mega Absol also boasts solid coverage, with moves such as Superpower, Iron Tail, and Fire Blast allowing it to hit some if its switch-ins. Magic Bounce is a decent ability as well, giving Absol the capability to bounce back Thunder Wave and Will-O-Wisp as well as potentially dissuade the use of entry hazards. However, Absol is immensely frail, which makes it very difficult to get into battle safely as well as very vulnerable to priority. It is somewhat weak overall, as its moves have somewhat low power, and it cannot hold any items to boost its damage output. Its typing also burdens it with three very common weaknesses, leaving it vulnerable to popular threats such Cobalion, Scizor, and Mega Altaria.";
    cTierDisplay2.innerHTML = "";
    dTierDisplay2.innerHTML = "";
    sTierDisplay.innerHTML = "";
    aTierDisplay.innerHTML = "";
    bTierDisplay.innerHTML = "";
    dTierDisplay.innerHTML = "";
    cTierDisplay.innerHTML = "";
});

var sceptileMega = document.getElementById("sceptileMega");

sceptileMega.addEventListener("mousemove", function() {
    sTierDisplay2.innerHTML = "";
    aTierDisplay2.innerHTML = "";
    bTierDisplay2.innerHTML = "Mega Sceptile has a unique set of perks over the tier's other Mega Evolutions that make it an effective revenge killer, cleaner, and offensive check to the tier's many Water , Ground, and Electric-types. Chief among these are its exceptional Special Attack and Speed stats, which enable it to threaten many offensive teams with its powerful same-type moves. Its ability in Lighting Rod makes it a uniquely potent offensive answer to Electric-types. These traits make it quite an effective tool on offense against opposing offensive teams that lack a strong defensive presence and render it difficult to switch into consistently without a specially bulky Pokemon. It is also helplessly walled by most defensive Fairy-types, making it tough to use in the face of common threats such as Mega Altaria, Klefki, and Togekiss. It also relies heavily on punishable moves in Leaf Storm, Focus Blast, and the very weak Hidden Power Fire to do significant damage and cannot fit all of its ideal coverage onto a single set.";
    cTierDisplay2.innerHTML = "";
    dTierDisplay2.innerHTML = "";
    sTierDisplay.innerHTML = "";
    aTierDisplay.innerHTML = "";
    bTierDisplay.innerHTML = "";
    dTierDisplay.innerHTML = "";
    cTierDisplay.innerHTML = "";
});

var slowbroMega = document.getElementById("slowbroMega");

slowbroMega.addEventListener("mousemove", function() {
    sTierDisplay2.innerHTML = "";
    aTierDisplay2.innerHTML = "";
    bTierDisplay2.innerHTML = "Mega Slowbro has amazing physical bulk combined with a nice typing that allows it to check threats. Shell Armor prevents Slowbro from taking critical hits, which, combined with its access to Slack Off and Iron Defense, makes it easier to stall out physical attackers in the tier. Slowbro has average special bulk and somewhat common weaknesses that leave it weak to most of the common special attackers. Even though Slowbro has a decent Special Attack stat, the lack of a boosting move makes Slowbro passive, and Slowbro's 30 speed forces it to move last against almost anyone.";
    cTierDisplay2.innerHTML = "";
    dTierDisplay2.innerHTML = "";
    sTierDisplay.innerHTML = "";
    aTierDisplay.innerHTML = "";
    bTierDisplay.innerHTML = "";
    dTierDisplay.innerHTML = "";
    cTierDisplay.innerHTML = "";
});

var banetteMega = document.getElementById("banetteMega");

banetteMega.addEventListener("mousemove", function() {
    sTierDisplay2.innerHTML = "";
    aTierDisplay2.innerHTML = "";
    bTierDisplay2.innerHTML = "";
    cTierDisplay2.innerHTML = "Mega Banette relies on using Prankster Destiny Bond to put opponents into a double KO situation at best. By alternating between Prankster Destiny Bond and an attack without increased priority, any faster foe without effective priority of their own is always subject to a KO by Destiny Bond. It also has tools to prevent opponents from attempting to stall out Destiny Bond's low PP, such as Taunt to force bulkier foes to attack and even Infestation to prevent switching. Being a Ghost-type to block Rapid Spin as well as having access to Prankster Taunt and Destiny Bond, Mega Banette is quite capable of preventing the opponent from clearing entry hazards off the field. However, while Mega Banette has a high Attack stat, its moves don't have terrific Base Power, and it lacks a boosting move to contend with fellow Ghost-types. Mega Banette also has lackluster bulk, has few resistances, and lacks reliable recovery, meaning it usually only has a few chances at best to set up the Destiny Bond lock throughout the course of a match.";
    dTierDisplay2.innerHTML = "";
    sTierDisplay.innerHTML = "";
    aTierDisplay.innerHTML = "";
    bTierDisplay.innerHTML = "";
    dTierDisplay.innerHTML = "";
    cTierDisplay.innerHTML = "";
});

var ampharosMega = document.getElementById("ampharosMega");

ampharosMega.addEventListener("mousemove", function() {
    sTierDisplay2.innerHTML = "";
    aTierDisplay2.innerHTML = "";
    bTierDisplay2.innerHTML = "";
    cTierDisplay2.innerHTML = "Mega Ampharos is able to check a unique set of Pokemon with its typing of Electric/Dragon. An impressively high Special Attack stat and respectable bulk for an attacker allow Mega Ampharos to support its team by bringing in frailer Pokemon with a slow Volt Switch that packs a punch. However, Mega Ampharos is very slow for an attacker even after an Agility boost; if it is switching into an attack, it will have to be able to tank a second one should it wish to hit back.";
    dTierDisplay2.innerHTML = "";
    sTierDisplay.innerHTML = "";
    aTierDisplay.innerHTML = "";
    bTierDisplay.innerHTML = "";
    dTierDisplay.innerHTML = "";
    cTierDisplay.innerHTML = "";
});

var cameruptMega = document.getElementById("cameruptMega");

cameruptMega.addEventListener("mousemove", function() {
    sTierDisplay2.innerHTML = "";
    aTierDisplay2.innerHTML = "";
    bTierDisplay2.innerHTML = "";
    cTierDisplay2.innerHTML = "Mega Camerupt's Fire/Ground typing provides a valuable immunity to Electric-type moves and a resistance to Fairy-type moves, which, along with its solid bulk, allows Mega Camerupt to function as an effective check to Electric-types. Access to extremely powerful Fire and Ground-type same-type moves is very useful too, as it allows Mega Camerupt to shred common Pokemon found on bulky offense teams.  Mega Camerupt does struggle in the metagame, however, mostly due to its low Speed, which forces it to take a hit before it can attack back; this also often leads to it being very prediction reliant.";
    dTierDisplay2.innerHTML = "";
    sTierDisplay.innerHTML = "";
    aTierDisplay.innerHTML = "";
    bTierDisplay.innerHTML = "";
    dTierDisplay.innerHTML = "";
    cTierDisplay.innerHTML = "";
});

var blastoiseMega = document.getElementById("blastoiseMega");

blastoiseMega.addEventListener("mousemove", function() {
    sTierDisplay2.innerHTML = "";
    aTierDisplay2.innerHTML = "";
    bTierDisplay2.innerHTML = "";
    cTierDisplay2.innerHTML = "Mega Blastoise receives notable stat boosts in key areas such as Defense, Special Attack, and Special Defense to go along with a fantastic ability in Mega Launcher. Mega Launcher gifts moves such as Water Pulse, Dark Pulse, and Aura Sphere with massive boosts, pairing nicely with Mega Blastoise's remarkable Special Attack stat. Its strong natural bulk, solid defensive typing in Water, and vast powerful coverage options make it an ideal bulky wallbreaker. Mega Blastoise also has access to Rapid Spin, offering more utility to teams by clearing entry hazards. However, Mega Blastoise often finds itself worn down quickly due to its middling Speed and the numerous times it's forced to switch in and clear hazards.";
    dTierDisplay2.innerHTML = "";
    sTierDisplay.innerHTML = "";
    aTierDisplay.innerHTML = "";
    bTierDisplay.innerHTML = "";
    dTierDisplay.innerHTML = "";
    cTierDisplay.innerHTML = "";
});

var abomasnowMega = document.getElementById("abomasnowMega");

abomasnowMega.addEventListener("mousemove", function() {
    sTierDisplay2.innerHTML = "";
    aTierDisplay2.innerHTML = "";
    bTierDisplay2.innerHTML = "";
    cTierDisplay2.innerHTML = "";
    dTierDisplay2.innerHTML = "Mega Abomasnow is quite the threat to be reckoned with, as its potent same-type moves and solid coverage make it very difficult to switch into. Its solid bulk and key resistances to Water and Ground allow it multiple chances to fire off attacks or set up Swords Dance. Despite this, numerous common weaknesses mean Mega Abomasnow can be offensively pressured easily. Also, Mega Abomasnow is excruciatingly slow, so it needs considerable Speed investment to outpace most defensive Pokemon and is incapable of outspeeding the majority of offensive Pokemon; even with maximum Speed investment, Mega Abomasnow is unable to outspeed Pokemon such as Umbreon and Porygon2 unless it uses a Speed-boosting nature. Mega Abomasnow is also susceptible to all entry hazards and weak to Stealth Rock, which, alongside a recoil-causing same-type move in Wood Hammer, can lead to it being worn down quickly.";
    sTierDisplay.innerHTML = "";
    aTierDisplay.innerHTML = "";
    bTierDisplay.innerHTML = "";
    dTierDisplay.innerHTML = "";
    cTierDisplay.innerHTML = "";
});

var audinoMega = document.getElementById("audinoMega");

audinoMega.addEventListener("mousemove", function() {
    sTierDisplay2.innerHTML = "";
    aTierDisplay2.innerHTML = "";
    bTierDisplay2.innerHTML = "";
    dTierDisplay2.innerHTML = "Mega Audino is one of the premier walls, able to take on a large variety of the tier's attackers. Mega Audino also has access to an extremely wide support movepool, including many options such as Heal Bell, Wish, and Encore, as well as a wide offensive movepool, giving it exceptional coverage. However, very lackluster offensive stats, especially before Mega Evolving, force Mega Audino to rely on Toxic to deal damage, or otherwise it can be fairly passive. It is also easily worn down once afflicted with status conditions or Taunt, crippled by Trick and Switcheroo, and easily used as setup fodder.";
    cTierDisplay2.innerHTML = "";
    sTierDisplay.innerHTML = "";
    aTierDisplay.innerHTML = "";
    bTierDisplay.innerHTML = "";
    dTierDisplay.innerHTML = "";
    cTierDisplay.innerHTML = "";
});

// creates variable for button
var rateTeam = document.getElementById("rateTeam");

// waits for button to be clicked on
rateTeam.addEventListener("click", function() {
    
    // creates variables for the six pokemon slots and converts them to lowercase
    var megaPokemon = document.getElementById("megaPokemon").value.toLowerCase();
    var pokemon1 = document.getElementById("pokemon1").value.toLowerCase();
    var pokemon2 = document.getElementById("pokemon2").value.toLowerCase();
    var pokemon3 = document.getElementById("pokemon3").value.toLowerCase();
    var pokemon4 = document.getElementById("pokemon4").value.toLowerCase();
    var pokemon5 = document.getElementById("pokemon5").value.toLowerCase();
    
    // set pokemon tier to 0
    var toon1 = 0;
    var toon2 = 0;
    var toon3 = 0;
    var toon4 = 0;
    var toon5 = 0;
    var toon6 = 0;
    
    // creates variables for the six pokemon displays
    var firstPokemon = document.getElementById("firstPokemon");
    var secondPokemon = document.getElementById("secondPokemon");
    var thirdPokemon = document.getElementById("thirdPokemon");
    var fourthPokemon = document.getElementById("fourthPokemon");
    var fifthPokemon = document.getElementById("fifthPokemon");
    var sixthPokemon = document.getElementById("sixthPokemon");
    
    // creates variables for the team rating
    var teamRater = document.getElementById("teamRater");
    
    // searches for a pokemon in the associated slot in the official PU (homophone for pee yew) tier
    if (
        (megaPokemon == "oricorio-sensu") ||
        (megaPokemon == "oricorio sensu") ||
        (megaPokemon == "silvally-fairy") ||
        (megaPokemon == "silvally fairy") ||
        (megaPokemon == "alolan raichu") ||
        (megaPokemon == "alolan-raichu") ||
        (megaPokemon == "raichu-alola") ||
        (megaPokemon == "raichu alola") ||
        (megaPokemon == "sandslash-alola") ||
        (megaPokemon == "sandslash alola") ||
        (megaPokemon == "dugtrio-alola") ||
        (megaPokemon == "dugtrio alola") ||
        (megaPokemon == "alolan dugtrio") ||
        (megaPokemon == "alolan-dugtrio") ||
        (megaPokemon == "persian-alola") ||
        (megaPokemon == "persian alola") ||
        (megaPokemon == "alolan persian") ||
        (megaPokemon == "alolan-persian") ||
        (megaPokemon == "rotom-frost") ||
        (megaPokemon == "rotom frost") ||
        (megaPokemon == "absol") ||
        (megaPokemon == "poliwrath") ||
        (megaPokemon == "primeape") ||
        (megaPokemon == "dodrio") ||
        (megaPokemon == "hitmonchan") ||
        (megaPokemon == "kangaskhan") ||
        (megaPokemon == "omastar") ||
        (megaPokemon == "kabutops") ||
        (megaPokemon == "articuno") ||
        (megaPokemon == "lanturn") ||
        (megaPokemon == "quagsire") ||
        (megaPokemon == "quilfish") ||
        (megaPokemon == "ludicolo") ||
        (megaPokemon == "sableye") ||
        (megaPokemon == "aggron") ||
        (megaPokemon == "manectric") ||
        (megaPokemon == "roselia") ||
        (megaPokemon == "claydol") ||
        (megaPokemon == "regirock") ||
        (megaPokemon == "gastrodon") ||
        (megaPokemon == "skuntank") ||
        (megaPokemon == "spiritomb") ||
        (megaPokemon == "froslass") ||
        (megaPokemon == "mesprit") ||
        (megaPokemon == "stoutland") ||
        (megaPokemon == "liepard") ||
        (megaPokemon == "audino") ||
        (megaPokemon == "lilligant") ||
        (megaPokemon == "carracosta") ||
        (megaPokemon == "jellicent") ||
        (megaPokemon == "eelektross") ||
        (megaPokemon == "golurk") ||
        (megaPokemon == "aurorus") ||
        (megaPokemon == "lycanroc") ||
        (megaPokemon == "mudsdale") ||
        (megaPokemon == "lurantis") ||
        (megaPokemon == "drampa") ||
        (megaPokemon == "clefairy") ||
        (megaPokemon == "haunter") ||
        (megaPokemon == "scyther") ||
        (megaPokemon == "gurdurr")
    ) {

        // a PU pokemon is only worth one point
        toon6 = 1;
        
        // updates display for the first pokemon's rating
        firstPokemon.innerHTML = "Your first Pokemon sucks and there are many Pokemon that does this Pokemon's job better that you could have chosen instead.";

    }
    
    // searches for a pokemon in the associated slot in the NU (Never Used) tier
    else if (
        (megaPokemon == "exeggutor-alola") ||
        (megaPokemon == "alolan exeggutor") ||
        (megaPokemon == "exeggutor alola") ||
        (megaPokemon == "alolan-exeggutor") ||
        (megaPokemon == "charizard") ||
        (megaPokemon == "tauros") ||
        (megaPokemon == "typhlosion") ||
        (megaPokemon == "gallade") ||
        (megaPokemon == "samurott") ||
        (megaPokemon == "sawk") ||
        (megaPokemon == "archeops") ||
        (megaPokemon == "pyroar") ||
        (megaPokemon == "aromatisse") ||
        (megaPokemon == "minior") ||
        (megaPokemon == "blastoise") ||
        (megaPokemon == "golbat") ||
        (megaPokemon == "vileplume") ||
        (megaPokemon == "slowbro") ||
        (megaPokemon == "kingler") ||
        (megaPokemon == "hitmonlee") ||
        (megaPokemon == "weezing") ||
        (megaPokemon == "rhydon") ||
        (megaPokemon == "vaporeon") ||
        (megaPokemon == "aerodactyl") ||
        (megaPokemon == "xatu") ||
        (megaPokemon == "slowking") ||
        (megaPokemon == "steelix") ||
        (megaPokemon == "sneasel") ||
        (megaPokemon == "piloswine") ||
        (megaPokemon == "houndoom") ||
        (megaPokemon == "hitmontop") ||
        (megaPokemon == "miltank") ||
        (megaPokemon == "sceptile") ||
        (megaPokemon == "hariyama") ||
        (megaPokemon == "medicham") ||
        (megaPokemon == "torterra") ||
        (megaPokemon == "ambipom") ||
        (megaPokemon == "mismagius") ||
        (megaPokemon == "magmortar") ||
        (megaPokemon == "rotom") ||
        (megaPokemon == "seismitoad") ||
        (megaPokemon == "whimsicott") ||
        (megaPokemon == "scrafty") ||
        (megaPokemon == "sigilyph") ||
        (megaPokemon == "garbodor") ||
        (megaPokemon == "cinccino") ||
        (megaPokemon == "vanilluxe") ||
        (megaPokemon == "ferroseed") ||
        (megaPokemon == "klinklang") ||
        (megaPokemon == "cryogonal") ||
        (megaPokemon == "accelgor") ||
        (megaPokemon == "druddigon") ||
        (megaPokemon == "braviary") ||
        (megaPokemon == "delphox") ||
        (megaPokemon == "vivillon") ||
        (megaPokemon == "malamar") ||
        (megaPokemon == "clawitzer") ||
        (megaPokemon == "heliolisk") ||
        (megaPokemon == "diancie") ||
        (megaPokemon == "decidueye") ||
        (megaPokemon == "incineroar") ||
        (megaPokemon == "vikavolt") ||
        (megaPokemon == "comfrey") ||
        (megaPokemon == "passimian") ||
        (megaPokemon == "palossand") ||
        (megaPokemon == "sivally-steel") ||
        (megaPokemon == "togedemaru") ||
        (megaPokemon == "dhelmise") ||
        (megaPokemon == "guzzlord") ||
        (megaPokemon == "sivally-steel") ||
        (megaPokemon == "sivally Steel")
    ) {

        // a NU pokemon is worth 2  points
        toon6 = 2;
        
        // updates display for the associated pokemon's rating
        firstPokemon.innerHTML = "Your first Pokemon isn't good competitively can only be used situationally.";

    }
    
    // searches for a pokemon in the associated slot in the official RU (Rarely Used) tier
    else if (
        (megaPokemon == "marowak-alola") ||
        (megaPokemon == "alolan marowak") ||
        (megaPokemon == "marowak alola") ||
        (megaPokemon == "alolan-marowak") ||
        (megaPokemon == "rotom-mow") ||
        (megaPokemon == "rotom mow") ||
        (megaPokemon == "zygarde-10%") ||
        (megaPokemon == "lycanroc-dusk") ||
        (megaPokemon == "zygarde 10%") ||
        (megaPokemon == "lycanroc dusk") ||
        (megaPokemon == "venusaur") ||
        (megaPokemon == "kingdra") ||
        (megaPokemon == "exploud") ||
        (megaPokemon == "gigalith") ||
        (megaPokemon == "cofagrigus") ||
        (megaPokemon == "slurpuff") ||
        (megaPokemon == "barbaracle") ||
        (megaPokemon == "hoopa") ||
        (megaPokemon == "ribombee") ||
        (megaPokemon == "bruxish") ||
        (megaPokemon == "nidoqueen") ||
        (megaPokemon == "ninetales") ||
        (megaPokemon == "arcanine") ||
        (megaPokemon == "machamp") ||
        (megaPokemon == "cloyster") ||
        (megaPokemon == "jolteon") ||
        (megaPokemon == "snorlax") ||
        (megaPokemon == "feraligatr") ||
        (megaPokemon == "espeon") ||
        (megaPokemon == "umbreon") ||
        (megaPokemon == "forretress") ||
        (megaPokemon == "mantine") ||
        (megaPokemon == "donphan") ||
        (megaPokemon == "porygon2") ||
        (megaPokemon == "raikou") ||
        (megaPokemon == "linoone") ||
        (megaPokemon == "swellow") ||
        (megaPokemon == "gardevoir") ||
        (megaPokemon == "flygon") ||
        (megaPokemon == "milotic") ||
        (megaPokemon == "metagross") ||
        (megaPokemon == "registeel") ||
        (megaPokemon == "roserade") ||
        (megaPokemon == "honchkrow") ||
        (megaPokemon == "bronzong") ||
        (megaPokemon == "drapion") ||
        (megaPokemon == "toxicroak") ||
        (megaPokemon == "rhyperior") ||
        (megaPokemon == "yanmega") ||
        (megaPokemon == "uxie") ||
        (megaPokemon == "cresselia") ||
        (megaPokemon == "shaymin") ||
        (megaPokemon == "emboar") ||
        (megaPokemon == "escavalier") ||
        (megaPokemon == "galvantula") ||
        (megaPokemon == "mandibuzz") ||
        (megaPokemon == "virizion") ||
        (megaPokemon == "florges") ||
        (megaPokemon == "pangoro") ||
        (megaPokemon == "dragalge") ||
        (megaPokemon == "tyrantrum") ||
        (megaPokemon == "goodra") ||
        (megaPokemon == "noivern") ||
        (megaPokemon == "araquanid") ||
        (megaPokemon == "salazzle") ||
        (megaPokemon == "bewear") ||
        (megaPokemon == "tsareena") ||
        (megaPokemon == "golisopod") ||
        (megaPokemon == "stakataka") ||
        (megaPokemon == "necrozma") ||
        (megaPokemon == "audino-mega") ||
        (megaPokemon == "audino mega") ||
        (megaPokemon == "mega audino") ||
        (megaPokemon == "mega-audino") ||
        (megaPokemon == "abomasnow-mega") ||
        (megaPokemon == "abomasnow mega") ||
        (megaPokemon == "mega abomasnow") ||
        (megaPokemon == "mega-abomasnow")
    ) {

        // a RU pokemon is worth 3 points
        toon6 = 3;
        
        // updates display of the associated pokemon's rating
        firstPokemon.innerHTML = "Your first Pokemon is mediocre and will be difficult to use competitively.";

    }
    
    // searches for a pokemon in the associated slot in the official UU (Under Used) tier
    else if (
        (megaPokemon == "muk-alola") ||
        (megaPokemon == "alolan muk") ||
        (megaPokemon == "muk alola") ||
        (megaPokemon == "alolan-muk") ||
        (megaPokemon == "rotom-heat") ||
        (megaPokemon == "rotom heat") ||
        (megaPokemon == "kommo-o") ||
        (megaPokemon == "kommo o") ||
        (megaPokemon == "moltres") ||
        (megaPokemon == "venomoth") ||
        (megaPokemon == "entei") ||
        (megaPokemon == "sharpedo") ||
        (megaPokemon == "darmanitan") ||
        (megaPokemon == "zoroark") ||
        (megaPokemon == "reuniclus") ||
        (megaPokemon == "mienshao") ||
        (megaPokemon == "durant") ||
        (megaPokemon == "tornadus") ||
        (megaPokemon == "kyurem") ||
        (megaPokemon == "meloetta") ||
        (megaPokemon == "talonflame") ||
        (megaPokemon == "nidoking") ||
        (megaPokemon == "tentacruel") ||
        (megaPokemon == "magneton") ||
        (megaPokemon == "gengar") ||
        (megaPokemon == "starmie") ||
        (megaPokemon == "crobat") ||
        (megaPokemon == "gligar") ||
        (megaPokemon == "scizor") ||
        (megaPokemon == "heracross") ||
        (megaPokemon == "blissey") ||
        (megaPokemon == "suicune") ||
        (megaPokemon == "celebi") ||
        (megaPokemon == "swampert") ||
        (megaPokemon == "crawdaunt") ||
        (megaPokemon == "latias") ||
        (megaPokemon == "infernape") ||
        (megaPokemon == "empoleon") ||
        (megaPokemon == "lucario") ||
        (megaPokemon == "hippowdon") ||
        (megaPokemon == "togekiss") ||
        (megaPokemon == "mamoswine") ||
        (megaPokemon == "azelf") ||
        (megaPokemon == "krookadile") ||
        (megaPokemon == "amoonguss") ||
        (megaPokemon == "alomomola") ||
        (megaPokemon == "chandelure") ||
        (megaPokemon == "haxorus") ||
        (megaPokemon == "bisharp") ||
        (megaPokemon == "hydreigon") ||
        (megaPokemon == "cobalion") ||
        (megaPokemon == "terrakion") ||
        (megaPokemon == "chesnaught") ||
        (megaPokemon == "doublade") ||
        (megaPokemon == "sylveon") ||
        (megaPokemon == "klefki") ||
        (megaPokemon == "volcanion") ||
        (megaPokemon == "primarina") ||
        (megaPokemon == "nihilego") ||
        (megaPokemon == "zeraora") ||
        (megaPokemon == "camerupt-mega") ||
        (megaPokemon == "camerupt mega") ||
        (megaPokemon == "mega camerupt") ||
        (megaPokemon == "mega-camerupt") ||
        (megaPokemon == "ampharos-mega") ||
        (megaPokemon == "ampharos mega") ||
        (megaPokemon == "mega ampharos") ||
        (megaPokemon == "mega-ampharos") ||
        (megaPokemon == "banette-mega") ||
        (megaPokemon == "banette mega") ||
        (megaPokemon == "mega banette") ||
        (megaPokemon == "mega-banette") ||
        (megaPokemon == "blastoise-mega") ||
        (megaPokemon == "blastoise mega") ||
        (megaPokemon == "mega blastoise") ||
        (megaPokemon == "mega-blastoise")
    ) {
        
        // a UU pokemon is worth 4 points
        toon6 = 4
        
        // updates display for the associated pokemon's rating
        firstPokemon.innerHTML = "Your first Pokemon is a decent Pokemon that can be used competitively.";

    }
    
    // searches for a pokemon in the associated slot in the official OU (Over Used) tier
    else if (
        (megaPokemon == "ninetales-alola") ||
        (megaPokemon == "alolan ninetales") ||
        (megaPokemon == "alolan-ninetales") ||
        (megaPokemon == "ninetales alola") ||
        (megaPokemon == "ninetales-alola") ||
        (megaPokemon == "alolan ninetales") ||
        (megaPokemon == "alolan-ninetales") ||
        (megaPokemon == "ninetales alola") ||
        (megaPokemon == "ninetales-alola") ||
        (megaPokemon == "alolan ninetales") ||
        (megaPokemon == "alolan-ninetales") ||
        (megaPokemon == "ninetales alola") ||
        (megaPokemon == "ninetales-alola") ||
        (megaPokemon == "alolan ninetales") ||
        (megaPokemon == "alolan-ninetales") ||
        (megaPokemon == "ninetales alola") ||
        (megaPokemon == "alakazam") ||
        (megaPokemon == "gyarados") ||
        (megaPokemon == "gyarados") ||
        (megaPokemon == "dragonite") ||
        (megaPokemon == "dragonite") ||
        (megaPokemon == "azumarill") ||
        (megaPokemon == "breloom") ||
        (megaPokemon == "salamence") ||
        (megaPokemon == "latios") ||
        (megaPokemon == "staraptor") ||
        (megaPokemon == "weavile") ||
        (megaPokemon == "porygon-z") ||
        (megaPokemon == "porygon z") ||
        (megaPokemon == "manaphy") ||
        (megaPokemon == "conkeldurr") ||
        (megaPokemon == "scolipede") ||
        (megaPokemon == "thunderus") ||
        (megaPokemon == "thunderus-therian") ||
        (megaPokemon == "thunderus therian") ||
        (megaPokemon == "diggersby") ||
        (megaPokemon == "hoopa-unbound") ||
        (megaPokemon == "hoopa unbound") ||
        (megaPokemon == "buzzwole") ||
        (megaPokemon == "xurkitree") ||
        (megaPokemon == "blacephalon") ||
        (megaPokemon == "celesteela") ||
        (megaPokemon == "chansey") ||
        (megaPokemon == "clefable") ||
        (megaPokemon == "excadrill") ||
        (megaPokemon == "ferrothorn") ||
        (megaPokemon == "garchomp") ||
        (megaPokemon == "gliscor") ||
        (megaPokemon == "greninja") ||
        (megaPokemon == "ash-greninja") ||
        (megaPokemon == "ash greninja") ||
        (megaPokemon == "hawlucha") ||
        (megaPokemon == "heatran") ||
        (megaPokemon == "jirachi") ||
        (megaPokemon == "kartana") ||
        (megaPokemon == "keldeo") ||
        (megaPokemon == "keldeo-resolute") ||
        (megaPokemon == "keldeo resolute") ||
        (megaPokemon == "kyurem-black") ||
        (megaPokemon == "kyurem black") ||
        (megaPokemon == "landorus-therian") ||
        (megaPokemon == "landorus therian") ||
        (megaPokemon == "magearna") ||
        (megaPokemon == "magnezone") ||
        (megaPokemon == "mew") ||
        (megaPokemon == "mimikyu") ||
        (megaPokemon == "pelipper") ||
        (megaPokemon == "rotom-wash") ||
        (megaPokemon == "rotom wash") ||
        (megaPokemon == "serperior") ||
        (megaPokemon == "skarmory") ||
        (megaPokemon == "tangrowth") ||
        (megaPokemon == "toxapex") ||
        (megaPokemon == "tyranitar") ||
        (megaPokemon == "victini") ||
        (megaPokemon == "volcarona") ||
        (megaPokemon == "zapdos") ||
        (megaPokemon == "tapu-bulu") ||
        (megaPokemon == "tapu bulu") ||
        (megaPokemon == "tapu-fini") ||
        (megaPokemon == "tapu fini") ||
        (megaPokemon == "tapu-koko") ||
        (megaPokemon == "tapu koko") ||
        (megaPokemon == "tapu-lele") ||
        (megaPokemon == "tapu lele") ||
        (megaPokemon == "tornadus-therian") ||
        (megaPokemon == "tornadus therian") ||
        (megaPokemon == "absol-mega") ||
        (megaPokemon == "absol mega") ||
        (megaPokemon == "mega absol") ||
        (megaPokemon == "mega-absol") ||
        (megaPokemon == "houndoom-mega") ||
        (megaPokemon == "houndoom mega") ||
        (megaPokemon == "mega houndoom") ||
        (megaPokemon == "mega-houndoom") ||
        (megaPokemon == "sceptile-mega") ||
        (megaPokemon == "sceptile mega") ||
        (megaPokemon == "mega sceptile") ||
        (megaPokemon == "mega-sceptile") ||
        (megaPokemon == "slowbro-mega") ||
        (megaPokemon == "slowbro mega") ||
        (megaPokemon == "mega slowbro") ||
        (megaPokemon == "mega-slowbro") ||
        (megaPokemon == "altaria-mega") ||
        (megaPokemon == "altaria mega") ||
        (megaPokemon == "mega altaria") ||
        (megaPokemon == "mega-altaria") ||
        (megaPokemon == "aerodactyl-mega") ||
        (megaPokemon == "aerodactyl mega") ||
        (megaPokemon == "mega aerodactyl") ||
        (megaPokemon == "mega-aerodactyl") ||
        (megaPokemon == "aggron-mega") ||
        (megaPokemon == "aggron mega") ||
        (megaPokemon == "mega aggron") ||
        (megaPokemon == "mega-aggron") ||
        (megaPokemon == "beedrill-mega") ||
        (megaPokemon == "beedrill mega") ||
        (megaPokemon == "mega beedrill") ||
        (megaPokemon == "mega-beedrill") ||
        (megaPokemon == "manectric-mega") ||
        (megaPokemon == "manectric mega") ||
        (megaPokemon == "mega manectric") ||
        (megaPokemon == "mega-manectric") ||
        (megaPokemon == "pidgeot-mega") ||
        (megaPokemon == "pidgeot mega") ||
        (megaPokemon == "mega pidgeot") ||
        (megaPokemon == "mega-pidgeot") ||
        (megaPokemon == "sharpedo-mega") ||
        (megaPokemon == "sharpedo mega") ||
        (megaPokemon == "mega sharpedo") ||
        (megaPokemon == "mega-sharpedo") ||
        (megaPokemon == "steelix-mega") ||
        (megaPokemon == "steelix mega") ||
        (megaPokemon == "mega steelix") ||
        (megaPokemon == "mega-steelix")
    ) {
        
        // a OU pokemon is worth 5 points 
        toon6 = 5;
        
        // updates display for the first pokemon's rating
        firstPokemon.innerHTML = "Your first Pokemon is a great Pokemon that competes with others well.";

    }
    
    // searches for a pokemon in the associated slot in the official Uber tier
    else if (
        (megaPokemon == "mewtwo") ||
        (megaPokemon == "ho-oh") ||
        (megaPokemon == "ho oh") ||
        (megaPokemon == "kyurem-white") ||
        (megaPokemon == "kyurem white") ||
        (megaPokemon == "white-kyurem") ||
        (megaPokemon == "white kyurem") ||
        (megaPokemon == "lugia") ||
        (megaPokemon == "blaziken") ||
        (megaPokemon == "giratina") ||
        (megaPokemon == "kyogre") ||
        (megaPokemon == "groudon") ||
        (megaPokemon == "giratina-origin") ||
        (megaPokemon == "giratina origin") ||
        (megaPokemon == "shaymin-sky") ||
        (megaPokemon == "shaymin sky") ||
        (megaPokemon == "origin-giratina") ||
        (megaPokemon == "origin giratina") ||
        (megaPokemon == "sky-shaymin") ||
        (megaPokemon == "sky shaymin") ||
        (megaPokemon == "rayquaza") ||
        (megaPokemon == "deoxys") ||
        (megaPokemon == "phermosa") ||
        (megaPokemon == "marshadow") ||
        (megaPokemon == "genesect") ||
        (megaPokemon == "aegislash") ||
        (megaPokemon == "dialga") ||
        (megaPokemon == "palkia") ||
        (megaPokemon == "reshiram") ||
        (megaPokemon == "zekrom") ||
        (megaPokemon == "arceus") ||
        (megaPokemon == "landorus") ||
        (megaPokemon == "zygarde-complete") ||
        (megaPokemon == "zygarde complete") ||
        (megaPokemon == "deoxys-defense") ||
        (megaPokemon == "deoxys defense") ||
        (megaPokemon == "defense-deoxys") ||
        (megaPokemon == "defense deoxys") ||
        (megaPokemon == "deoxys-speed") ||
        (megaPokemon == "deoxys speed") ||
        (megaPokemon == "speed-deoxys") ||
        (megaPokemon == "speed deoxys") ||
        (megaPokemon == "deoxys-attack") ||
        (megaPokemon == "deoxys attack") ||
        (megaPokemon == "attack-deoxys") ||
        (megaPokemon == "attack deoxys") ||
        (megaPokemon == "zygarde") ||
        (megaPokemon == "xerneas") ||
        (megaPokemon == "yveltal") ||
        (megaPokemon == "solgaleo") ||
        (megaPokemon == "darkrai") ||
        (megaPokemon == "necrozma-ultra") ||
        (megaPokemon == "ultra-necrozma") ||
        (megaPokemon == "necrozma ultra") ||
        (megaPokemon == "ultra necrozma") ||
        (megaPokemon == "necrozma-dusk-mane") ||
        (megaPokemon == "dusk-mane-necrozma") ||
        (megaPokemon == "necrozma dusk mane") ||
        (megaPokemon == "dusk mane necrozma") ||
        (megaPokemon == "necrozma-dawn-wings") ||
        (megaPokemon == "dawn-wings-necrozma") ||
        (megaPokemon == "necrozma dawn wings") ||
        (megaPokemon == "dawn wings necrozma") ||
        (megaPokemon == "lunala") ||
        (megaPokemon == "gallade-mega") ||
        (megaPokemon == "gallade mega") ||
        (megaPokemon == "mega gallade") ||
        (megaPokemon == "mega-gallade") ||
        (megaPokemon == "gardevoir-mega") ||
        (megaPokemon == "gardevoir mega") ||
        (megaPokemon == "mega gardevoir") ||
        (megaPokemon == "mega-gardevoir") ||
        (megaPokemon == "latias-mega") ||
        (megaPokemon == "latias-mega") ||
        (megaPokemon == "mega-latias") ||
        (megaPokemon == "latias mega") ||
        (megaPokemon == "mega latias") ||
        (megaPokemon == "latios-mega") ||
        (megaPokemon == "mega-latios") ||
        (megaPokemon == "latios mega") ||
        (megaPokemon == "mega latios") ||
        (megaPokemon == "venusaur-mega") ||
        (megaPokemon == "mega venusaur") ||
        (megaPokemon == "venusaur mega") ||
        (megaPokemon == "mega-venusaur") ||
        (megaPokemon == "alakazam-mega") ||
        (megaPokemon == "gyarados-mega") ||
        (megaPokemon == "alakazam-mega") ||
        (megaPokemon == "gyarados-mega") ||
        (megaPokemon == "mega-alakazam") ||
        (megaPokemon == "mega-gyarados") ||
        (megaPokemon == "mega-alakazam") ||
        (megaPokemon == "mega-gyarados") ||
        (megaPokemon == "mega alakazam") ||
        (megaPokemon == "mega gyarados") ||
        (megaPokemon == "mega alakazam") ||
        (megaPokemon == "mega gyarados") ||
        (megaPokemon == "charizard-mega-x") ||
        (megaPokemon == "mega charizard x") ||
        (megaPokemon == "charizard-mega-y") ||
        (megaPokemon == "mega charizard y") ||
        (megaPokemon == "charizard mega x") ||
        (megaPokemon == "mega-charizard-x") ||
        (megaPokemon == "charizard mega-y") ||
        (megaPokemon == "mega-charizard-y") ||
        (megaPokemon == "charizard-mega-x") ||
        (megaPokemon == "charizard-mega-y") ||
        (megaPokemon == "diancie-mega") ||
        (megaPokemon == "diancie mega") ||
        (megaPokemon == "mega-diancie") ||
        (megaPokemon == "lopunny-mega") ||
        (megaPokemon == "mega lopunny") ||
        (megaPokemon == "lopunny mega") ||
        (megaPokemon == "mega-lopunny") ||
        (megaPokemon == "medicham-mega") ||
        (megaPokemon == "mega medicham") ||
        (megaPokemon == "medicham mega") ||
        (megaPokemon == "mega-medicham") ||
        (megaPokemon == "medicham-mega") ||
        (megaPokemon == "mawile-mega") ||
        (megaPokemon == "mega mawile") ||
        (megaPokemon == "mawile mega") ||
        (megaPokemon == "mega-mawile") ||
        (megaPokemon == "mawile-mega") ||
        (megaPokemon == "scizor-mega") ||
        (megaPokemon == "mega scizor") ||
        (megaPokemon == "heracross-mega") ||
        (megaPokemon == "mega heracross") ||
        (megaPokemon == "scizor mega") ||
        (megaPokemon == "mega-scizor") ||
        (megaPokemon == "heracross mega") ||
        (megaPokemon == "mega-heracross") ||
        (megaPokemon == "swampert-mega") ||
        (megaPokemon == "mega swampert") ||
        (megaPokemon == "swampert mega") ||
        (megaPokemon == "mega-swampert") ||
        (megaPokemon == "pinsir-mega") ||
        (megaPokemon == "pinsir mega") ||
        (megaPokemon == "mega pinsir") ||
        (megaPokemon == "mega-pinsir") ||
        (megaPokemon == "sableye-mega") ||
        (megaPokemon == "sableye mega") ||
        (megaPokemon == "mega sableye") ||
        (megaPokemon == "mega-sableye")
    ) {
        
        // a Uber pokemon is worth 6 points
        toon6 = 6;
        
        // updates display for the first pokemon's rating
        firstPokemon.innerHTML = "Your first Pokemon is an excellent top-tier Pokemon among the best.";

    }
    
    // searches for a pokemon in the associated slot in the official Uber tier that is mega-evolved
    else if (
        (megaPokemon == "blaziken-mega") ||
        (megaPokemon == "blaziken mega") ||
        (megaPokemon == "mega blaziken") ||
        (megaPokemon == "mega-blaziken") ||
        (megaPokemon == "gengar-mega") ||
        (megaPokemon == "gengar mega") ||
        (megaPokemon == "mega gengar") ||
        (megaPokemon == "mega-gengar") ||
        (megaPokemon == "kangaskhan-mega") ||
        (megaPokemon == "kangaskhan mega") ||
        (megaPokemon == "mega kangaskhan") ||
        (megaPokemon == "mega-kangaskhan") ||
        (megaPokemon == "lucario-mega") ||
        (megaPokemon == "lucario mega") ||
        (megaPokemon == "mega lucario") ||
        (megaPokemon == "mega-lucario") ||
        (megaPokemon == "metagross-mega") ||
        (megaPokemon == "metagross mega") ||
        (megaPokemon == "mega metagross") ||
        (megaPokemon == "mega-metagross") ||
        (megaPokemon == "salamence-mega") ||
        (megaPokemon == "salamence mega") ||
        (megaPokemon == "mega salamence") ||
        (megaPokemon == "mega-salamence") ||
        (megaPokemon == "mewtwo-mega-x") ||
        (megaPokemon == "mega mewtwo x") ||
        (megaPokemon == "mewtwo-mega-y") ||
        (megaPokemon == "mega mewtwo y") ||
        (megaPokemon == "mewtwo mega x") ||
        (megaPokemon == "mega-mewtwo-x") ||
        (megaPokemon == "mewtwo mega-y") ||
        (megaPokemon == "mega-mewtwo-y") ||
        (megaPokemon == "mewtwo-mega-x") ||
        (megaPokemon == "mewtwo-mega-y") ||
        (megaPokemon == "mewtwo-mega-x") ||
        (megaPokemon == "mewtwo-mega-y")
    ) {

        // a mega Uber pokemon is worth 7 points
        toon6 = 7;
        
        // updates the display of the first pokemon's rating
        firstPokemon.innerHTML = "Your first Pokemon is an excellent top-tier Pokemon among the best.";

    }
    
    // searches for a pokemon in the associated slot in the official AG (Anything Goes) tier
    else if (
        (megaPokemon == "mega rayquaza") ||
        (megaPokemon == "rayquaza mega") ||
        (megaPokemon == "mega-rayquaza") ||
        (megaPokemon == "rayquaza-mega")
    ) {

        // a AG pokemon is worth 8 points
        toon6 = 8;
        
        // updates the display of the first pokemon's rating
        firstPokemon.innerHTML = "Your first Pokemon is broken and will completely destroy the metagame.";

    }
    
    // checks if the associated slot is empty
    else if (
        (megaPokemon.length == 0)
    ) {
        
        // an empty slot is worth 0 points
        toon6 = 0;
        
        // updates the display of the first pokemon's rating
        firstPokemon.innerHTML = "Please enter a Pokemon in the first slot.";
    }
    
    // checks if there is something that isn't spelled correctly or its unranked 
    else {

        // a misspelled or unranked pokemon is worth 0 points
        toon6 = 0;
        
        // updates the display of the first pokemon's rating
        firstPokemon.innerHTML = "Sorry, your first Pokemon is either misspelled or unranked. Please check your spelling and/or your Pokemon choices.";

    }

    if (
        (pokemon1 == "oricorio-sensu") ||
        (pokemon1 == "oricorio sensu") ||
        (pokemon1 == "silvally-fairy") ||
        (pokemon1 == "silvally fairy") ||
        (pokemon1 == "raichu-alola") ||
        (pokemon1 == "raichu alola") ||
        (pokemon1 == "alolan raichu") ||
        (pokemon1 == "alolan-raichu") ||
        (pokemon1 == "sandslash-alola") ||
        (pokemon1 == "sandslash alola") ||
        (pokemon1 == "alolan sandslash") ||
        (pokemon1 == "alolan-sandslash") ||
        (pokemon1 == "dugtrio-alola") ||
        (pokemon1 == "dugtrio alola") ||
        (pokemon1 == "alolan dugtrio") ||
        (pokemon1 == "alolan-dugtrio") ||
        (pokemon1 == "persian-alola") ||
        (pokemon1 == "persian alola") ||
        (pokemon1 == "alolan persian") ||
        (pokemon1 == "alolan-persian") ||
        (pokemon1 == "sableye-mega") ||
        (pokemon1 == "sableye mega") ||
        (pokemon1 == "mega sableye") ||
        (pokemon1 == "mega-sableye") ||
        (pokemon1 == "aggron-mega") ||
        (pokemon1 == "aggron mega") ||
        (pokemon1 == "mega aggron") ||
        (pokemon1 == "mega-aggron") ||
        (pokemon1 == "manectric-mega") ||
        (pokemon1 == "manectric mega") ||
        (pokemon1 == "mega manectric") ||
        (pokemon1 == "mega-manectric") ||
        (pokemon1 == "rotom-frost") ||
        (pokemon1 == "rotom frost") ||
        (pokemon1 == "audino-mega") ||
        (pokemon1 == "audino mega") ||
        (pokemon1 == "mega audino") ||
        (pokemon1 == "mega-audino") ||
        (pokemon1 == "absol-mega") ||
        (pokemon1 == "mega absol") ||
        (pokemon1 == "absol mega") ||
        (pokemon1 == "mega-absol") ||
        (pokemon1 == "absol") ||
        (pokemon1 == "poliwrath") ||
        (pokemon1 == "primeape") ||
        (pokemon1 == "dodrio") ||
        (pokemon1 == "hitmonchan") ||
        (pokemon1 == "kangaskhan") ||
        (pokemon1 == "omastar") ||
        (pokemon1 == "kabutops") ||
        (pokemon1 == "articuno") ||
        (pokemon1 == "lanturn") ||
        (pokemon1 == "quagsire") ||
        (pokemon1 == "quilfish") ||
        (pokemon1 == "ludicolo") ||
        (pokemon1 == "sableye") ||
        (pokemon1 == "aggron") ||
        (pokemon1 == "manectric") ||
        (pokemon1 == "roselia") ||
        (pokemon1 == "claydol") ||
        (pokemon1 == "regirock") ||
        (pokemon1 == "gastrodon") ||
        (pokemon1 == "skuntank") ||
        (pokemon1 == "spiritomb") ||
        (pokemon1 == "froslass") ||
        (pokemon1 == "mesprit") ||
        (pokemon1 == "stoutland") ||
        (pokemon1 == "liepard") ||
        (pokemon1 == "audino") ||
        (pokemon1 == "lilligant") ||
        (pokemon1 == "carracosta") ||
        (pokemon1 == "jellicent") ||
        (pokemon1 == "eelektross") ||
        (pokemon1 == "golurk") ||
        (pokemon1 == "aurorus") ||
        (pokemon1 == "lycanroc") ||
        (pokemon1 == "mudsdale") ||
        (pokemon1 == "lurantis") ||
        (pokemon1 == "drampa") ||
        (pokemon1 == "clefairy") ||
        (pokemon1 == "haunter") ||
        (pokemon1 == "scyther") ||
        (pokemon1 == "gurdurr")
    ) {

        toon1 = 1;
        secondPokemon.innerHTML = "Your second Pokemon sucks and there are many Pokemon that does this Pokemon's job better that you could have chosen instead.";

    }
    else if (
        (pokemon1 == "charizard") ||
        (pokemon1 == "exeggutor-alola") ||
        (pokemon1 == "alolan exeggutor") ||
        (pokemon1 == "exeggutor alola") ||
        (pokemon1 == "alolan-exeggutor") ||
        (pokemon1 == "charizard-mega-x") ||
        (pokemon1 == "mega charizard x") ||
        (pokemon1 == "charizard-mega-y") ||
        (pokemon1 == "mega charizard y") ||
        (pokemon1 == "charizard mega x") ||
        (pokemon1 == "mega-charizard-x") ||
        (pokemon1 == "charizard mega-y") ||
        (pokemon1 == "mega-charizard-y") ||
        (pokemon1 == "tauros") ||
        (pokemon1 == "typhlosion") ||
        (pokemon1 == "gallade") ||
        (pokemon1 == "gallade-mega") ||
        (pokemon1 == "mega gallade") ||
        (pokemon1 == "gallade mega") ||
        (pokemon1 == "mega-gallade") ||
        (pokemon1 == "samurott") ||
        (pokemon1 == "sawk") ||
        (pokemon1 == "archeops") ||
        (pokemon1 == "pyroar") ||
        (pokemon1 == "aromatisse") ||
        (pokemon1 == "minior") ||
        (pokemon1 == "blastoise") ||
        (pokemon1 == "golbat") ||
        (pokemon1 == "vileplume") ||
        (pokemon1 == "slowbro") ||
        (pokemon1 == "kingler") ||
        (pokemon1 == "hitmonlee") ||
        (pokemon1 == "weezing") ||
        (pokemon1 == "rhydon") ||
        (pokemon1 == "vaporeon") ||
        (pokemon1 == "aerodactyl") ||
        (pokemon1 == "aerodactyl-mega") ||
        (pokemon1 == "mega aerodactyl") ||
        (pokemon1 == "aerodactyl mega") ||
        (pokemon1 == "mega-aerodactyl") ||
        (pokemon1 == "xatu") ||
        (pokemon1 == "slowking") ||
        (pokemon1 == "steelix") ||
        (pokemon1 == "steelix-mega") ||
        (pokemon1 == "mega steelix") ||
        (pokemon1 == "steelix mega") ||
        (pokemon1 == "mega-steelix") ||
        (pokemon1 == "sneasel") ||
        (pokemon1 == "piloswine") ||
        (pokemon1 == "houndoom") ||
        (pokemon1 == "houndoom-mega") ||
        (pokemon1 == "mega houndoom") ||
        (pokemon1 == "houndoom mega") ||
        (pokemon1 == "mega-houndoom") ||
        (pokemon1 == "hitmontop") ||
        (pokemon1 == "miltank") ||
        (pokemon1 == "sceptile") ||
        (pokemon1 == "sceptile-mega") ||
        (pokemon1 == "sceptile mega") ||
        (pokemon1 == "mega sceptile") ||
        (pokemon1 == "mega-sceptile") ||
        (pokemon1 == "hariyama") ||
        (pokemon1 == "medicham") ||
        (pokemon1 == "medicham-mega") ||
        (pokemon1 == "mega medicham") ||
        (pokemon1 == "medicham mega") ||
        (pokemon1 == "mega-medicham") ||
        (pokemon1 == "torterra") ||
        (pokemon1 == "ambipom") ||
        (pokemon1 == "mismagius") ||
        (pokemon1 == "magmortar") ||
        (pokemon1 == "rotom") ||
        (pokemon1 == "seismitoad") ||
        (pokemon1 == "whimsicott") ||
        (pokemon1 == "scrafty") ||
        (pokemon1 == "sigilyph") ||
        (pokemon1 == "garbodor") ||
        (pokemon1 == "cinccino") ||
        (pokemon1 == "vanilluxe") ||
        (pokemon1 == "ferroseed") ||
        (pokemon1 == "klinklang") ||
        (pokemon1 == "cryogonal") ||
        (pokemon1 == "accelgor") ||
        (pokemon1 == "druddigon") ||
        (pokemon1 == "braviary") ||
        (pokemon1 == "delphox") ||
        (pokemon1 == "vivillon") ||
        (pokemon1 == "malamar") ||
        (pokemon1 == "clawitzer") ||
        (pokemon1 == "heliolisk") ||
        (pokemon1 == "diancie") ||
        (pokemon1 == "diancie-mega") ||
        (pokemon1 == "mega diancie") ||
        (pokemon1 == "diancie mega") ||
        (pokemon1 == "mega-diancie") ||
        (pokemon1 == "decidueye") ||
        (pokemon1 == "incineroar") ||
        (pokemon1 == "vikavolt") ||
        (pokemon1 == "comfrey") ||
        (pokemon1 == "passimian") ||
        (pokemon1 == "palossand") ||
        (pokemon1 == "sivally-steel") ||
        (pokemon1 == "sivally steel") ||
        (pokemon1 == "togedemaru") ||
        (pokemon1 == "dhelmise") ||
        (pokemon1 == "guzzlord")
    ) {

        toon1 = 2;
        secondPokemon.innerHTML = "Your second Pokemon isn't good competitively can only be used situationally.";

    }

    else if (
        (pokemon1 == "venusaur") ||
        (pokemon1 == "kingdra") ||
        (pokemon1 == "venusaur-mega") ||
        (pokemon1 == "mega venusaur") ||
        (pokemon1 == "venusaur mega") ||
        (pokemon1 == "mega-venusaur") ||
        (pokemon1 == "exploud") ||
        (pokemon1 == "gigalith") ||
        (pokemon1 == "cofagrigus") ||
        (pokemon1 == "slurpuff") ||
        (pokemon1 == "barbaracle") ||
        (pokemon1 == "hoopa") ||
        (pokemon1 == "ribombee") ||
        (pokemon1 == "bruxish") ||
        (pokemon1 == "nidoqueen") ||
        (pokemon1 == "ninetales") ||
        (pokemon1 == "arcanine") ||
        (pokemon1 == "machamp") ||
        (pokemon1 == "cloyster") ||
        (pokemon1 == "marowak-alola") ||
        (pokemon1 == "alolan marowak") ||
        (pokemon1 == "marowak alola") ||
        (pokemon1 == "alolan-marowak") ||
        (pokemon1 == "jolteon") ||
        (pokemon1 == "snorlax") ||
        (pokemon1 == "feraligatr") ||
        (pokemon1 == "espeon") ||
        (pokemon1 == "umbreon") ||
        (pokemon1 == "forretress") ||
        (pokemon1 == "mantine") ||
        (pokemon1 == "donphan") ||
        (pokemon1 == "porygon2") ||
        (pokemon1 == "raikou") ||
        (pokemon1 == "linoone") ||
        (pokemon1 == "swellow") ||
        (pokemon1 == "gardevoir") ||
        (pokemon1 == "gardevoir-mega") ||
        (pokemon1 == "mega gardevoir") ||
        (pokemon1 == "gardevoir mega") ||
        (pokemon1 == "mega-gardevoir") ||
        (pokemon1 == "flygon") ||
        (pokemon1 == "milotic") ||
        (pokemon1 == "metagross") ||
        (pokemon1 == "metagross-mega") ||
        (pokemon1 == "mega metagross") ||
        (pokemon1 == "metagross mega") ||
        (pokemon1 == "mega-metagross") ||
        (pokemon1 == "registeel") ||
        (pokemon1 == "roserade") ||
        (pokemon1 == "honchkrow") ||
        (pokemon1 == "bronzong") ||
        (pokemon1 == "drapion") ||
        (pokemon1 == "toxicroak") ||
        (pokemon1 == "rhyperior") ||
        (pokemon1 == "yanmega") ||
        (pokemon1 == "rotom-mow") ||
        (pokemon1 == "uxie") ||
        (pokemon1 == "cresselia") ||
        (pokemon1 == "shaymin") ||
        (pokemon1 == "emboar") ||
        (pokemon1 == "escavalier") ||
        (pokemon1 == "galvantula") ||
        (pokemon1 == "mandibuzz") ||
        (pokemon1 == "virizion") ||
        (pokemon1 == "florges") ||
        (pokemon1 == "pangoro") ||
        (pokemon1 == "dragalge") ||
        (pokemon1 == "tyrantrum") ||
        (pokemon1 == "goodra") ||
        (pokemon1 == "noivern") ||
        (pokemon1 == "zygarde-10%") ||
        (pokemon1 == "lycanroc-dusk") ||
        (pokemon1 == "zygarde 10%") ||
        (pokemon1 == "lycanroc dusk") ||
        (pokemon1 == "araquanid") ||
        (pokemon1 == "salazzle") ||
        (pokemon1 == "bewear") ||
        (pokemon1 == "tsareena") ||
        (pokemon1 == "golisopod") ||
        (pokemon1 == "stakataka") ||
        (pokemon1 == "necrozma")
    ) {

        toon1 = 3;
        secondPokemon.innerHTML = "Your second Pokemon is mediocre and will be difficult to use competitively.";

    }
    else if (
        (pokemon1 == "moltres") ||
        (pokemon1 == "venomoth") ||
        (pokemon1 == "entei") ||
        (pokemon1 == "sharpedo") ||
        (pokemon1 == "darmanitan") ||
        (pokemon1 == "sharpedo-mega") ||
        (pokemon1 == "mega sharpedo") ||
        (pokemon1 == "sharpedo mega") ||
        (pokemon1 == "mega-sharpedo") ||
        (pokemon1 == "zoroark") ||
        (pokemon1 == "reuniclus") ||
        (pokemon1 == "mienshao") ||
        (pokemon1 == "durant") ||
        (pokemon1 == "tornadus") ||
        (pokemon1 == "kyurem") ||
        (pokemon1 == "meloetta") ||
        (pokemon1 == "talonflame") ||
        (pokemon1 == "nidoking") ||
        (pokemon1 == "tentacruel") ||
        (pokemon1 == "magneton") ||
        (pokemon1 == "muk-alola") ||
        (pokemon1 == "alolan muk") ||
        (pokemon1 == "muk alola") ||
        (pokemon1 == "alolan-muk") ||
        (pokemon1 == "gengar") ||
        (pokemon1 == "starmie") ||
        (pokemon1 == "crobat") ||
        (pokemon1 == "gligar") ||
        (pokemon1 == "scizor") ||
        (pokemon1 == "scizor-mega") ||
        (pokemon1 == "mega scizor") ||
        (pokemon1 == "heracross") ||
        (pokemon1 == "heracross-mega") ||
        (pokemon1 == "mega heracross") ||
        (pokemon1 == "scizor mega") ||
        (pokemon1 == "mega-scizor") ||
        (pokemon1 == "heracross mega") ||
        (pokemon1 == "mega-heracross") ||
        (pokemon1 == "blissey") ||
        (pokemon1 == "suicune") ||
        (pokemon1 == "celebi") ||
        (pokemon1 == "swampert") ||
        (pokemon1 == "swampert-mega") ||
        (pokemon1 == "mega swampert") ||
        (pokemon1 == "swampert mega") ||
        (pokemon1 == "mega-swampert") ||
        (pokemon1 == "crawdaunt") ||
        (pokemon1 == "latias") ||
        (pokemon1 == "latias-mega") ||
        (pokemon1 == "mega-latias") ||
        (pokemon1 == "latias mega") ||
        (pokemon1 == "mega latias") ||
        (pokemon1 == "infernape") ||
        (pokemon1 == "empoleon") ||
        (pokemon1 == "lucario") ||
        (pokemon1 == "hippowdon") ||
        (pokemon1 == "togekiss") ||
        (pokemon1 == "mamoswine") ||
        (pokemon1 == "rotom-heat") ||
        (pokemon1 == "rotom heat") ||
        (pokemon1 == "azelf") ||
        (pokemon1 == "krookadile") ||
        (pokemon1 == "amoonguss") ||
        (pokemon1 == "alomomola") ||
        (pokemon1 == "chandelure") ||
        (pokemon1 == "haxorus") ||
        (pokemon1 == "bisharp") ||
        (pokemon1 == "hydreigon") ||
        (pokemon1 == "cobalion") ||
        (pokemon1 == "terrakion") ||
        (pokemon1 == "chesnaught") ||
        (pokemon1 == "doublade") ||
        (pokemon1 == "sylveon") ||
        (pokemon1 == "klefki") ||
        (pokemon1 == "volcanion") ||
        (pokemon1 == "primarina") ||
        (pokemon1 == "kommo-o") ||
        (pokemon1 == "kommo o") ||
        (pokemon1 == "nihilego") ||
        (pokemon1 == "zeraora")
    ) {

        toon1 = 4;
        secondPokemon.innerHTML = "Your second Pokemon is a decent Pokemon that can be used competitively.";

    }
    else if (
        (pokemon1 == "ninetales-alola") ||
        (pokemon1 == "alolan ninetales") ||
        (pokemon1 == "alolan-ninetales") ||
        (pokemon1 == "ninetales alola") ||
        (pokemon1 == "alakazam") ||
        (pokemon1 == "gyarados") ||
        (pokemon1 == "dragonite") ||
        (pokemon1 == "azumarill") ||
        (pokemon1 == "alakazam-mega") ||
        (pokemon1 == "gyarados-mega") ||
        (pokemon1 == "mega-gyarados") ||
        (pokemon1 == "mega-alakazam") ||
        (pokemon1 == "mega alakazam") ||
        (pokemon1 == "mega gyarados") ||
        (pokemon1 == "alakazam mega") ||
        (pokemon1 == "gyarados mega") ||
        (pokemon1 == "breloom") ||
        (pokemon1 == "salamence") ||
        (pokemon1 == "salamence-mega") ||
        (pokemon1 == "mega-salamence") ||
        (pokemon1 == "salamence mega") ||
        (pokemon1 == "mega salamence") ||
        (pokemon1 == "latios") ||
        (pokemon1 == "latios-mega") ||
        (pokemon1 == "mega-latios") ||
        (pokemon1 == "latios mega") ||
        (pokemon1 == "mega latios") ||
        (pokemon1 == "staraptor") ||
        (pokemon1 == "weavile") ||
        (pokemon1 == "porygon-z") ||
        (pokemon1 == "porygon z") ||
        (pokemon1 == "manaphy") ||
        (pokemon1 == "conkeldurr") ||
        (pokemon1 == "scolipede") ||
        (pokemon1 == "thunderus") ||
        (pokemon1 == "thunderus-therian") ||
        (pokemon1 == "thunderus therian") ||
        (pokemon1 == "diggersby") ||
        (pokemon1 == "hoopa-unbound") ||
        (pokemon1 == "hoopa unbound") ||
        (pokemon1 == "buzzwole") ||
        (pokemon1 == "xurkitree") ||
        (pokemon1 == "blacephalon") ||
        (pokemon1 == "celesteela") ||
        (pokemon1 == "chansey") ||
        (pokemon1 == "clefable") ||
        (pokemon1 == "excadrill") ||
        (pokemon1 == "ferrothorn") ||
        (pokemon1 == "garchomp") ||
        (pokemon1 == "gliscor") ||
        (pokemon1 == "greninja") ||
        (pokemon1 == "ash-greninja") ||
        (pokemon1 == "ash greninja") ||
        (pokemon1 == "hawlucha") ||
        (pokemon1 == "heatran") ||
        (pokemon1 == "jirachi") ||
        (pokemon1 == "kartana") ||
        (pokemon1 == "keldeo") ||
        (pokemon1 == "keldeo-resolute") ||
        (pokemon1 == "keldeo resolute") ||
        (pokemon1 == "kyurem-black") ||
        (pokemon1 == "kyurem black") ||
        (pokemon1 == "landorus-therian") ||
        (pokemon1 == "landorus therian") ||
        (pokemon1 == "magearna") ||
        (pokemon1 == "magnezone") ||
        (pokemon1 == "mew") ||
        (pokemon1 == "mimikyu") ||
        (pokemon1 == "pelipper") ||
        (pokemon1 == "rotom-wash") ||
        (pokemon1 == "rotom wash") ||
        (pokemon1 == "serperior") ||
        (pokemon1 == "skarmory") ||
        (pokemon1 == "tangrowth") ||
        (pokemon1 == "toxapex") ||
        (pokemon1 == "tyranitar") ||
        (pokemon1 == "victini") ||
        (pokemon1 == "volcarona") ||
        (pokemon1 == "zapdos") ||
        (pokemon1 == "tapu-bulu") ||
        (pokemon1 == "tapu bulu") ||
        (pokemon1 == "tapu-fini") ||
        (pokemon1 == "tapu fini") ||
        (pokemon1 == "tapu-koko") ||
        (pokemon1 == "tapu koko") ||
        (pokemon1 == "tapu-lele") ||
        (pokemon1 == "tapu lele") ||
        (pokemon1 == "tornadus-therian") ||
        (pokemon1 == "tornadus therian")
    ) {

        toon1 = 5;
        secondPokemon.innerHTML = "Your second Pokemon is a great Pokemon that competes with others well.";

    }
    else if (
        (pokemon1 == "mewtwo") ||
        (pokemon1 == "ho-oh") ||
        (pokemon1 == "ho oh") ||
        (pokemon1 == "kyurem-white") ||
        (pokemon1 == "kyurem white") ||
        (pokemon1 == "white-kyurem") ||
        (pokemon1 == "white kyurem") ||
        (pokemon1 == "lugia") ||
        (pokemon1 == "blaziken") ||
        (pokemon1 == "giratina") ||
        (pokemon1 == "kyogre") ||
        (pokemon1 == "groudon") ||
        (pokemon1 == "giratina-origin") ||
        (pokemon1 == "shaymin-sky") ||
        (pokemon1 == "origin giratina") ||
        (pokemon1 == "sky shaymin") ||
        (pokemon1 == "rayquaza") ||
        (pokemon1 == "deoxys") ||
        (pokemon1 == "phermosa") ||
        (pokemon1 == "marshadow") ||
        (pokemon1 == "genesect") ||
        (pokemon1 == "aegislash") ||
        (pokemon1 == "dialga") ||
        (pokemon1 == "palkia") ||
        (pokemon1 == "reshiram") ||
        (pokemon1 == "zekrom") ||
        (pokemon1 == "arceus") ||
        (pokemon1 == "landorus") ||
        (pokemon1 == "zygarde-complete") ||
        (pokemon1 == "zygarde complete") ||
        (pokemon1 == "deoxys-defense") ||
        (pokemon1 == "deoxys defense") ||
        (pokemon1 == "defense-deoxys") ||
        (pokemon1 == "defense deoxys") ||
        (pokemon1 == "deoxys-speed") ||
        (pokemon1 == "deoxys speed") ||
        (pokemon1 == "speed-deoxys") ||
        (pokemon1 == "speed deoxys") ||
        (pokemon1 == "deoxys-attack") ||
        (pokemon1 == "deoxys attack") ||
        (pokemon1 == "attack-deoxys") ||
        (pokemon1 == "attack deoxys") ||
        (pokemon1 == "zygarde") ||
        (pokemon1 == "xerneas") ||
        (pokemon1 == "yveltal") ||
        (pokemon1 == "solgaleo") ||
        (pokemon1 == "darkrai") ||
        (pokemon1 == "necrozma-ultra") ||
        (pokemon1 == "ultra-necrozma") ||
        (pokemon1 == "necrozma ultra") ||
        (pokemon1 == "ultra necrozma") ||
        (pokemon1 == "necrozma-dusk-mane") ||
        (pokemon1 == "dusk-mane-necrozma") ||
        (pokemon1 == "necrozma dusk mane") ||
        (pokemon1 == "dusk mane necrozma") ||
        (pokemon1 == "necrozma-dawn-wings") ||
        (pokemon1 == "dawn-wings-necrozma") ||
        (pokemon1 == "necrozma dawn wings") ||
        (pokemon1 == "dawn wings necrozma") ||
        (pokemon1 == "lunala") ||
        (pokemon1 == "blaziken-mega") ||
        (pokemon1 == "blaziken mega") ||
        (pokemon1 == "mega blaziken") ||
        (pokemon1 == "mega-blaziken") ||
        (pokemon1 == "mewtwo-mega-x") ||
        (pokemon1 == "mega mewtwo x") ||
        (pokemon1 == "mewtwo-mega-y") ||
        (pokemon1 == "mega mewtwo y") ||
        (pokemon1 == "mewtwo mega x") ||
        (pokemon1 == "mega-mewtwo-x") ||
        (pokemon1 == "mewtwo mega-y") ||
        (pokemon1 == "mega-mewtwo-y") ||
        (pokemon1 == "mewtwo-mega-x") ||
        (pokemon1 == "mewtwo-mega-y") ||
        (pokemon1 == "mewtwo-mega-x") ||
        (pokemon1 == "mewtwo-mega-y")
    ) {

        toon1 = 6;
        secondPokemon.innerHTML = "Your second Pokemon is an excellent top-tier Pokemon among the best.";

    }
    
    else if (
        (pokemon1.length == 0)
    ) {
        
        toon1 = 0;
        pokemon1.innerHTML = "Please enter a Pokemon in the second slot.";
        
    }
    
    else {

        toon1 = 0;
        secondPokemon.innerHTML = "Sorry, your second Pokemon is either misspelled or unranked. Please check your spelling and/or your Pokemon choices.";

    }

    if (
        (pokemon2 == "oricorio-sensu") ||
        (pokemon2 == "oricorio sensu") ||
        (pokemon2 == "silvally-fairy") ||
        (pokemon2 == "silvally fairy") ||
        (pokemon2 == "raichu-alola") ||
        (pokemon2 == "raichu alola") ||
        (pokemon2 == "alolan raichu") ||
        (pokemon2 == "alolan-raichu") ||
        (pokemon2 == "sandslash-alola") ||
        (pokemon2 == "sandslash alola") ||
        (pokemon2 == "alolan sandslash") ||
        (pokemon2 == "alolan-sandslash") ||
        (pokemon2 == "dugtrio-alola") ||
        (pokemon2 == "dugtrio alola") ||
        (pokemon2 == "alolan dugtrio") ||
        (pokemon2 == "alolan-dugtrio") ||
        (pokemon2 == "persian-alola") ||
        (pokemon2 == "persian alola") ||
        (pokemon2 == "alolan persian") ||
        (pokemon2 == "alolan-persian") ||
        (pokemon2 == "sableye-mega") ||
        (pokemon2 == "sableye mega") ||
        (pokemon2 == "mega sableye") ||
        (pokemon2 == "mega-sableye") ||
        (pokemon2 == "aggron-mega") ||
        (pokemon2 == "aggron mega") ||
        (pokemon2 == "mega aggron") ||
        (pokemon2 == "mega-aggron") ||
        (pokemon2 == "manectric-mega") ||
        (pokemon2 == "manectric mega") ||
        (pokemon2 == "mega manectric") ||
        (pokemon2 == "mega-manectric") ||
        (pokemon2 == "rotom-frost") ||
        (pokemon2 == "rotom frost") ||
        (pokemon2 == "audino-mega") ||
        (pokemon2 == "audino mega") ||
        (pokemon2 == "mega audino") ||
        (pokemon2 == "mega-audino") ||
        (pokemon2 == "absol-mega") ||
        (pokemon2 == "mega absol") ||
        (pokemon2 == "absol mega") ||
        (pokemon2 == "mega-absol") ||
        (pokemon2 == "absol") ||
        (pokemon2 == "poliwrath") ||
        (pokemon2 == "primeape") ||
        (pokemon2 == "dodrio") ||
        (pokemon2 == "hitmonchan") ||
        (pokemon2 == "kangaskhan") ||
        (pokemon2 == "omastar") ||
        (pokemon2 == "kabutops") ||
        (pokemon2 == "articuno") ||
        (pokemon2 == "lanturn") ||
        (pokemon2 == "quagsire") ||
        (pokemon2 == "quilfish") ||
        (pokemon2 == "ludicolo") ||
        (pokemon2 == "sableye") ||
        (pokemon2 == "aggron") ||
        (pokemon2 == "manectric") ||
        (pokemon2 == "roselia") ||
        (pokemon2 == "claydol") ||
        (pokemon2 == "regirock") ||
        (pokemon2 == "gastrodon") ||
        (pokemon2 == "skuntank") ||
        (pokemon2 == "spiritomb") ||
        (pokemon2 == "froslass") ||
        (pokemon2 == "mesprit") ||
        (pokemon2 == "stoutland") ||
        (pokemon2 == "liepard") ||
        (pokemon2 == "audino") ||
        (pokemon2 == "lilligant") ||
        (pokemon2 == "carracosta") ||
        (pokemon2 == "jellicent") ||
        (pokemon2 == "eelektross") ||
        (pokemon2 == "golurk") ||
        (pokemon2 == "aurorus") ||
        (pokemon2 == "lycanroc") ||
        (pokemon2 == "mudsdale") ||
        (pokemon2 == "lurantis") ||
        (pokemon2 == "drampa") ||
        (pokemon2 == "clefairy") ||
        (pokemon2 == "haunter") ||
        (pokemon2 == "scyther") ||
        (pokemon2 == "gurdurr")
    ) {

        toon2 = 1;
        thirdPokemon.innerHTML = "Your third Pokemon sucks and there are many Pokemon that does this Pokemon's job better that you could have chosen instead.";

    }
    else if (
        (pokemon2 == "charizard") ||
        (pokemon2 == "exeggutor-alola") ||
        (pokemon2 == "alolan exeggutor") ||
        (pokemon2 == "exeggutor alola") ||
        (pokemon2 == "alolan-exeggutor") ||
        (pokemon2 == "charizard-mega-x") ||
        (pokemon2 == "mega charizard x") ||
        (pokemon2 == "charizard-mega-y") ||
        (pokemon2 == "mega charizard y") ||
        (pokemon2 == "charizard mega x") ||
        (pokemon2 == "mega-charizard-x") ||
        (pokemon2 == "charizard mega-y") ||
        (pokemon2 == "mega-charizard-y") ||
        (pokemon2 == "tauros") ||
        (pokemon2 == "typhlosion") ||
        (pokemon2 == "gallade") ||
        (pokemon2 == "gallade-mega") ||
        (pokemon2 == "mega gallade") ||
        (pokemon2 == "gallade mega") ||
        (pokemon2 == "mega-gallade") ||
        (pokemon2 == "samurott") ||
        (pokemon2 == "sawk") ||
        (pokemon2 == "archeops") ||
        (pokemon2 == "pyroar") ||
        (pokemon2 == "aromatisse") ||
        (pokemon2 == "minior") ||
        (pokemon2 == "blastoise") ||
        (pokemon2 == "golbat") ||
        (pokemon2 == "vileplume") ||
        (pokemon2 == "slowbro") ||
        (pokemon2 == "kingler") ||
        (pokemon2 == "hitmonlee") ||
        (pokemon2 == "weezing") ||
        (pokemon2 == "rhydon") ||
        (pokemon2 == "vaporeon") ||
        (pokemon2 == "aerodactyl") ||
        (pokemon2 == "aerodactyl-mega") ||
        (pokemon2 == "mega aerodactyl") ||
        (pokemon2 == "aerodactyl mega") ||
        (pokemon2 == "mega-aerodactyl") ||
        (pokemon2 == "xatu") ||
        (pokemon2 == "slowking") ||
        (pokemon2 == "steelix") ||
        (pokemon2 == "steelix-mega") ||
        (pokemon2 == "mega steelix") ||
        (pokemon2 == "steelix mega") ||
        (pokemon2 == "mega-steelix") ||
        (pokemon2 == "sneasel") ||
        (pokemon2 == "piloswine") ||
        (pokemon2 == "houndoom") ||
        (pokemon2 == "houndoom-mega") ||
        (pokemon2 == "mega houndoom") ||
        (pokemon2 == "houndoom mega") ||
        (pokemon2 == "mega-houndoom") ||
        (pokemon2 == "hitmontop") ||
        (pokemon2 == "miltank") ||
        (pokemon2 == "sceptile") ||
        (pokemon2 == "sceptile-mega") ||
        (pokemon2 == "sceptile mega") ||
        (pokemon2 == "mega sceptile") ||
        (pokemon2 == "mega-sceptile") ||
        (pokemon2 == "hariyama") ||
        (pokemon2 == "medicham") ||
        (pokemon2 == "medicham-mega") ||
        (pokemon2 == "mega medicham") ||
        (pokemon2 == "medicham mega") ||
        (pokemon2 == "mega-medicham") ||
        (pokemon2 == "torterra") ||
        (pokemon2 == "ambipom") ||
        (pokemon2 == "mismagius") ||
        (pokemon2 == "magmortar") ||
        (pokemon2 == "rotom") ||
        (pokemon2 == "seismitoad") ||
        (pokemon2 == "whimsicott") ||
        (pokemon2 == "scrafty") ||
        (pokemon2 == "sigilyph") ||
        (pokemon2 == "garbodor") ||
        (pokemon2 == "cinccino") ||
        (pokemon2 == "vanilluxe") ||
        (pokemon2 == "ferroseed") ||
        (pokemon2 == "klinklang") ||
        (pokemon2 == "cryogonal") ||
        (pokemon2 == "accelgor") ||
        (pokemon2 == "druddigon") ||
        (pokemon2 == "braviary") ||
        (pokemon2 == "delphox") ||
        (pokemon2 == "vivillon") ||
        (pokemon2 == "malamar") ||
        (pokemon2 == "clawitzer") ||
        (pokemon2 == "heliolisk") ||
        (pokemon2 == "diancie") ||
        (pokemon2 == "diancie-mega") ||
        (pokemon2 == "mega diancie") ||
        (pokemon2 == "diancie mega") ||
        (pokemon2 == "mega-diancie") ||
        (pokemon2 == "decidueye") ||
        (pokemon2 == "incineroar") ||
        (pokemon2 == "vikavolt") ||
        (pokemon2 == "comfrey") ||
        (pokemon2 == "passimian") ||
        (pokemon2 == "palossand") ||
        (pokemon2 == "sivally-steel") ||
        (pokemon2 == "sivally steel") ||
        (pokemon2 == "togedemaru") ||
        (pokemon2 == "dhelmise") ||
        (pokemon2 == "guzzlord")
    ) {

        toon2 = 2;
        thirdPokemon.innerHTML = "Your third Pokemon isn't good competitively can only be used situationally.";

    }

    else if (
        (pokemon2 == "venusaur") ||
        (pokemon2 == "kingdra") ||
        (pokemon2 == "venusaur-mega") ||
        (pokemon2 == "mega venusaur") ||
        (pokemon2 == "venusaur mega") ||
        (pokemon2 == "mega-venusaur") ||
        (pokemon2 == "exploud") ||
        (pokemon2 == "gigalith") ||
        (pokemon2 == "cofagrigus") ||
        (pokemon2 == "slurpuff") ||
        (pokemon2 == "barbaracle") ||
        (pokemon2 == "hoopa") ||
        (pokemon2 == "ribombee") ||
        (pokemon2 == "bruxish") ||
        (pokemon2 == "nidoqueen") ||
        (pokemon2 == "ninetales") ||
        (pokemon2 == "arcanine") ||
        (pokemon2 == "machamp") ||
        (pokemon2 == "cloyster") ||
        (pokemon2 == "marowak-alola") ||
        (pokemon2 == "alolan marowak") ||
        (pokemon2 == "marowak alola") ||
        (pokemon2 == "alolan-marowak") ||
        (pokemon2 == "jolteon") ||
        (pokemon2 == "snorlax") ||
        (pokemon2 == "feraligatr") ||
        (pokemon2 == "espeon") ||
        (pokemon2 == "umbreon") ||
        (pokemon2 == "forretress") ||
        (pokemon2 == "mantine") ||
        (pokemon2 == "donphan") ||
        (pokemon2 == "porygon2") ||
        (pokemon2 == "raikou") ||
        (pokemon2 == "linoone") ||
        (pokemon2 == "swellow") ||
        (pokemon2 == "gardevoir") ||
        (pokemon2 == "gardevoir-mega") ||
        (pokemon2 == "mega gardevoir") ||
        (pokemon2 == "gardevoir mega") ||
        (pokemon2 == "mega-gardevoir") ||
        (pokemon2 == "flygon") ||
        (pokemon2 == "milotic") ||
        (pokemon2 == "metagross") ||
        (pokemon2 == "metagross-mega") ||
        (pokemon2 == "mega metagross") ||
        (pokemon2 == "metagross mega") ||
        (pokemon2 == "mega-metagross") ||
        (pokemon2 == "registeel") ||
        (pokemon2 == "roserade") ||
        (pokemon2 == "honchkrow") ||
        (pokemon2 == "bronzong") ||
        (pokemon2 == "drapion") ||
        (pokemon2 == "toxicroak") ||
        (pokemon2 == "rhyperior") ||
        (pokemon2 == "yanmega") ||
        (pokemon2 == "rotom-mow") ||
        (pokemon2 == "uxie") ||
        (pokemon2 == "cresselia") ||
        (pokemon2 == "shaymin") ||
        (pokemon2 == "emboar") ||
        (pokemon2 == "escavalier") ||
        (pokemon2 == "galvantula") ||
        (pokemon2 == "mandibuzz") ||
        (pokemon2 == "virizion") ||
        (pokemon2 == "florges") ||
        (pokemon2 == "pangoro") ||
        (pokemon2 == "dragalge") ||
        (pokemon2 == "tyrantrum") ||
        (pokemon2 == "goodra") ||
        (pokemon2 == "noivern") ||
        (pokemon2 == "zygarde-10%") ||
        (pokemon2 == "lycanroc-dusk") ||
        (pokemon2 == "zygarde 10%") ||
        (pokemon2 == "lycanroc dusk") ||
        (pokemon2 == "araquanid") ||
        (pokemon2 == "salazzle") ||
        (pokemon2 == "bewear") ||
        (pokemon2 == "tsareena") ||
        (pokemon2 == "golisopod") ||
        (pokemon2 == "stakataka") ||
        (pokemon2 == "necrozma")
    ) {

        toon2 = 3;
        thirdPokemon.innerHTML = "Your third Pokemon is mediocre and will be difficult to use competitively.";

    }
    else if (
        (pokemon2 == "moltres") ||
        (pokemon2 == "venomoth") ||
        (pokemon2 == "entei") ||
        (pokemon2 == "sharpedo") ||
        (pokemon2 == "darmanitan") ||
        (pokemon2 == "sharpedo-mega") ||
        (pokemon2 == "mega sharpedo") ||
        (pokemon2 == "sharpedo mega") ||
        (pokemon2 == "mega-sharpedo") ||
        (pokemon2 == "zoroark") ||
        (pokemon2 == "reuniclus") ||
        (pokemon2 == "mienshao") ||
        (pokemon2 == "durant") ||
        (pokemon2 == "tornadus") ||
        (pokemon2 == "kyurem") ||
        (pokemon2 == "meloetta") ||
        (pokemon2 == "talonflame") ||
        (pokemon2 == "nidoking") ||
        (pokemon2 == "tentacruel") ||
        (pokemon2 == "magneton") ||
        (pokemon2 == "muk-alola") ||
        (pokemon2 == "alolan muk") ||
        (pokemon2 == "muk alola") ||
        (pokemon2 == "alolan-muk") ||
        (pokemon2 == "gengar") ||
        (pokemon2 == "starmie") ||
        (pokemon2 == "crobat") ||
        (pokemon2 == "gligar") ||
        (pokemon2 == "scizor") ||
        (pokemon2 == "scizor-mega") ||
        (pokemon2 == "mega scizor") ||
        (pokemon2 == "heracross") ||
        (pokemon2 == "heracross-mega") ||
        (pokemon2 == "mega heracross") ||
        (pokemon2 == "scizor mega") ||
        (pokemon2 == "mega-scizor") ||
        (pokemon2 == "heracross mega") ||
        (pokemon2 == "mega-heracross") ||
        (pokemon2 == "blissey") ||
        (pokemon2 == "suicune") ||
        (pokemon2 == "celebi") ||
        (pokemon2 == "swampert") ||
        (pokemon2 == "swampert-mega") ||
        (pokemon2 == "mega swampert") ||
        (pokemon2 == "swampert mega") ||
        (pokemon2 == "mega-swampert") ||
        (pokemon2 == "crawdaunt") ||
        (pokemon2 == "latias") ||
        (pokemon2 == "latias-mega") ||
        (pokemon2 == "mega-latias") ||
        (pokemon2 == "latias mega") ||
        (pokemon2 == "mega latias") ||
        (pokemon2 == "infernape") ||
        (pokemon2 == "empoleon") ||
        (pokemon2 == "lucario") ||
        (pokemon2 == "hippowdon") ||
        (pokemon2 == "togekiss") ||
        (pokemon2 == "mamoswine") ||
        (pokemon2 == "rotom-heat") ||
        (pokemon2 == "rotom heat") ||
        (pokemon2 == "azelf") ||
        (pokemon2 == "krookadile") ||
        (pokemon2 == "amoonguss") ||
        (pokemon2 == "alomomola") ||
        (pokemon2 == "chandelure") ||
        (pokemon2 == "haxorus") ||
        (pokemon2 == "bisharp") ||
        (pokemon2 == "hydreigon") ||
        (pokemon2 == "cobalion") ||
        (pokemon2 == "terrakion") ||
        (pokemon2 == "chesnaught") ||
        (pokemon2 == "doublade") ||
        (pokemon2 == "sylveon") ||
        (pokemon2 == "klefki") ||
        (pokemon2 == "volcanion") ||
        (pokemon2 == "primarina") ||
        (pokemon2 == "kommo-o") ||
        (pokemon2 == "kommo o") ||
        (pokemon2 == "nihilego") ||
        (pokemon2 == "zeraora")
    ) {

        toon2 = 4;
        thirdPokemon.innerHTML = "Your third Pokemon is a decent Pokemon that can be used competitively.";

    }
    else if (
        (pokemon2 == "ninetales-alola") ||
        (pokemon2 == "alolan ninetales") ||
        (pokemon2 == "alolan-ninetales") ||
        (pokemon2 == "ninetales alola") ||
        (pokemon2 == "alakazam") ||
        (pokemon2 == "gyarados") ||
        (pokemon2 == "dragonite") ||
        (pokemon2 == "azumarill") ||
        (pokemon2 == "alakazam-mega") ||
        (pokemon2 == "gyarados-mega") ||
        (pokemon2 == "mega-gyarados") ||
        (pokemon2 == "mega-alakazam") ||
        (pokemon2 == "mega alakazam") ||
        (pokemon2 == "mega gyarados") ||
        (pokemon2 == "alakazam mega") ||
        (pokemon2 == "gyarados mega") ||
        (pokemon2 == "breloom") ||
        (pokemon2 == "salamence") ||
        (pokemon2 == "salamence-mega") ||
        (pokemon2 == "mega-salamence") ||
        (pokemon2 == "salamence mega") ||
        (pokemon2 == "mega salamence") ||
        (pokemon2 == "latios") ||
        (pokemon2 == "latios-mega") ||
        (pokemon2 == "mega-latios") ||
        (pokemon2 == "latios mega") ||
        (pokemon2 == "mega latios") ||
        (pokemon2 == "staraptor") ||
        (pokemon2 == "weavile") ||
        (pokemon2 == "porygon-z") ||
        (pokemon2 == "porygon z") ||
        (pokemon2 == "manaphy") ||
        (pokemon2 == "conkeldurr") ||
        (pokemon2 == "scolipede") ||
        (pokemon2 == "thunderus") ||
        (pokemon2 == "thunderus-therian") ||
        (pokemon2 == "thunderus therian") ||
        (pokemon2 == "diggersby") ||
        (pokemon2 == "hoopa-unbound") ||
        (pokemon2 == "hoopa unbound") ||
        (pokemon2 == "buzzwole") ||
        (pokemon2 == "xurkitree") ||
        (pokemon2 == "blacephalon") ||
        (pokemon2 == "celesteela") ||
        (pokemon2 == "chansey") ||
        (pokemon2 == "clefable") ||
        (pokemon2 == "excadrill") ||
        (pokemon2 == "ferrothorn") ||
        (pokemon2 == "garchomp") ||
        (pokemon2 == "gliscor") ||
        (pokemon2 == "greninja") ||
        (pokemon2 == "ash-greninja") ||
        (pokemon2 == "ash greninja") ||
        (pokemon2 == "hawlucha") ||
        (pokemon2 == "heatran") ||
        (pokemon2 == "jirachi") ||
        (pokemon2 == "kartana") ||
        (pokemon2 == "keldeo") ||
        (pokemon2 == "keldeo-resolute") ||
        (pokemon2 == "keldeo resolute") ||
        (pokemon2 == "kyurem-black") ||
        (pokemon2 == "kyurem black") ||
        (pokemon2 == "landorus-therian") ||
        (pokemon2 == "landorus therian") ||
        (pokemon2 == "magearna") ||
        (pokemon2 == "magnezone") ||
        (pokemon2 == "mew") ||
        (pokemon2 == "mimikyu") ||
        (pokemon2 == "pelipper") ||
        (pokemon2 == "rotom-wash") ||
        (pokemon2 == "rotom wash") ||
        (pokemon2 == "serperior") ||
        (pokemon2 == "skarmory") ||
        (pokemon2 == "tangrowth") ||
        (pokemon2 == "toxapex") ||
        (pokemon2 == "tyranitar") ||
        (pokemon2 == "victini") ||
        (pokemon2 == "volcarona") ||
        (pokemon2 == "zapdos") ||
        (pokemon2 == "tapu-bulu") ||
        (pokemon2 == "tapu bulu") ||
        (pokemon2 == "tapu-fini") ||
        (pokemon2 == "tapu fini") ||
        (pokemon2 == "tapu-koko") ||
        (pokemon2 == "tapu koko") ||
        (pokemon2 == "tapu-lele") ||
        (pokemon2 == "tapu lele") ||
        (pokemon2 == "tornadus-therian") ||
        (pokemon2 == "tornadus therian")
    ) {

        toon2 = 5;
        thirdPokemon.innerHTML = "Your third Pokemon is a great Pokemon that competes with others well.";

    }
    else if (
        (pokemon2 == "mewtwo") ||
        (pokemon2 == "ho-oh") ||
        (pokemon2 == "ho oh") ||
        (pokemon2 == "kyurem-white") ||
        (pokemon2 == "kyurem white") ||
        (pokemon2 == "white-kyurem") ||
        (pokemon2 == "white kyurem") ||
        (pokemon2 == "lugia") ||
        (pokemon2 == "blaziken") ||
        (pokemon2 == "giratina") ||
        (pokemon2 == "kyogre") ||
        (pokemon2 == "groudon") ||
        (pokemon2 == "giratina-origin") ||
        (pokemon2 == "shaymin-sky") ||
        (pokemon2 == "origin giratina") ||
        (pokemon2 == "sky shaymin") ||
        (pokemon2 == "rayquaza") ||
        (pokemon2 == "deoxys") ||
        (pokemon2 == "phermosa") ||
        (pokemon2 == "marshadow") ||
        (pokemon2 == "genesect") ||
        (pokemon2 == "aegislash") ||
        (pokemon2 == "dialga") ||
        (pokemon2 == "palkia") ||
        (pokemon2 == "reshiram") ||
        (pokemon2 == "zekrom") ||
        (pokemon2 == "arceus") ||
        (pokemon2 == "landorus") ||
        (pokemon2 == "zygarde-complete") ||
        (pokemon2 == "zygarde complete") ||
        (pokemon2 == "deoxys-defense") ||
        (pokemon2 == "deoxys defense") ||
        (pokemon2 == "defense-deoxys") ||
        (pokemon2 == "defense deoxys") ||
        (pokemon2 == "deoxys-speed") ||
        (pokemon2 == "deoxys speed") ||
        (pokemon2 == "speed-deoxys") ||
        (pokemon2 == "speed deoxys") ||
        (pokemon2 == "deoxys-attack") ||
        (pokemon2 == "deoxys attack") ||
        (pokemon2 == "attack-deoxys") ||
        (pokemon2 == "attack deoxys") ||
        (pokemon2 == "zygarde") ||
        (pokemon2 == "xerneas") ||
        (pokemon2 == "yveltal") ||
        (pokemon2 == "solgaleo") ||
        (pokemon2 == "darkrai") ||
        (pokemon2 == "necrozma-ultra") ||
        (pokemon2 == "ultra-necrozma") ||
        (pokemon2 == "necrozma ultra") ||
        (pokemon2 == "ultra necrozma") ||
        (pokemon2 == "necrozma-dusk-mane") ||
        (pokemon2 == "dusk-mane-necrozma") ||
        (pokemon2 == "necrozma dusk mane") ||
        (pokemon2 == "dusk mane necrozma") ||
        (pokemon2 == "necrozma-dawn-wings") ||
        (pokemon2 == "dawn-wings-necrozma") ||
        (pokemon2 == "necrozma dawn wings") ||
        (pokemon2 == "dawn wings necrozma") ||
        (pokemon2 == "lunala") ||
        (pokemon2 == "blaziken-mega") ||
        (pokemon2 == "blaziken mega") ||
        (pokemon2 == "mega blaziken") ||
        (pokemon2 == "mega-blaziken") ||
        (pokemon2 == "mewtwo-mega-x") ||
        (pokemon2 == "mega mewtwo x") ||
        (pokemon2 == "mewtwo-mega-y") ||
        (pokemon2 == "mega mewtwo y") ||
        (pokemon2 == "mewtwo mega x") ||
        (pokemon2 == "mega-mewtwo-x") ||
        (pokemon2 == "mewtwo mega-y") ||
        (pokemon2 == "mega-mewtwo-y") ||
        (pokemon2 == "mewtwo-mega-x") ||
        (pokemon2 == "mewtwo-mega-y") ||
        (pokemon2 == "mewtwo-mega-x") ||
        (pokemon2 == "mewtwo-mega-y")
    ) {

        toon2 = 6;
        thirdPokemon.innerHTML = "Your third Pokemon is an excellent top-tier Pokemon among the best.";

    }
    
    else if (
        (pokemon2.length == 0)
    ) {
        
        toon2 = 0;
        pokemon2.innerHTML = "Please enter a Pokemon in the third slot.";
        
    }
    
    else {

        toon2 = 0;
        thirdPokemon.innerHTML = "Sorry, your third Pokemon is either misspelled or unranked. Please check your spelling and/or your Pokemon choices.";

    }

    if (
        (pokemon3 == "oricorio-sensu") ||
        (pokemon3 == "oricorio sensu") ||
        (pokemon3 == "silvally-fairy") ||
        (pokemon3 == "silvally fairy") ||
        (pokemon3 == "raichu-alola") ||
        (pokemon3 == "raichu alola") ||
        (pokemon3 == "alolan raichu") ||
        (pokemon3 == "alolan-raichu") ||
        (pokemon3 == "sandslash-alola") ||
        (pokemon3 == "sandslash alola") ||
        (pokemon3 == "alolan sandslash") ||
        (pokemon3 == "alolan-sandslash") ||
        (pokemon3 == "dugtrio-alola") ||
        (pokemon3 == "dugtrio alola") ||
        (pokemon3 == "alolan dugtrio") ||
        (pokemon3 == "alolan-dugtrio") ||
        (pokemon3 == "persian-alola") ||
        (pokemon3 == "persian alola") ||
        (pokemon3 == "alolan persian") ||
        (pokemon3 == "alolan-persian") ||
        (pokemon3 == "sableye-mega") ||
        (pokemon3 == "sableye mega") ||
        (pokemon3 == "mega sableye") ||
        (pokemon3 == "mega-sableye") ||
        (pokemon3 == "aggron-mega") ||
        (pokemon3 == "aggron mega") ||
        (pokemon3 == "mega aggron") ||
        (pokemon3 == "mega-aggron") ||
        (pokemon3 == "manectric-mega") ||
        (pokemon3 == "manectric mega") ||
        (pokemon3 == "mega manectric") ||
        (pokemon3 == "mega-manectric") ||
        (pokemon3 == "rotom-frost") ||
        (pokemon3 == "rotom frost") ||
        (pokemon3 == "audino-mega") ||
        (pokemon3 == "audino mega") ||
        (pokemon3 == "mega audino") ||
        (pokemon3 == "mega-audino") ||
        (pokemon3 == "absol-mega") ||
        (pokemon3 == "mega absol") ||
        (pokemon3 == "absol mega") ||
        (pokemon3 == "mega-absol") ||
        (pokemon3 == "absol") ||
        (pokemon3 == "poliwrath") ||
        (pokemon3 == "primeape") ||
        (pokemon3 == "dodrio") ||
        (pokemon3 == "hitmonchan") ||
        (pokemon3 == "kangaskhan") ||
        (pokemon3 == "omastar") ||
        (pokemon3 == "kabutops") ||
        (pokemon3 == "articuno") ||
        (pokemon3 == "lanturn") ||
        (pokemon3 == "quagsire") ||
        (pokemon3 == "quilfish") ||
        (pokemon3 == "ludicolo") ||
        (pokemon3 == "sableye") ||
        (pokemon3 == "aggron") ||
        (pokemon3 == "manectric") ||
        (pokemon3 == "roselia") ||
        (pokemon3 == "claydol") ||
        (pokemon3 == "regirock") ||
        (pokemon3 == "gastrodon") ||
        (pokemon3 == "skuntank") ||
        (pokemon3 == "spiritomb") ||
        (pokemon3 == "froslass") ||
        (pokemon3 == "mesprit") ||
        (pokemon3 == "stoutland") ||
        (pokemon3 == "liepard") ||
        (pokemon3 == "audino") ||
        (pokemon3 == "lilligant") ||
        (pokemon3 == "carracosta") ||
        (pokemon3 == "jellicent") ||
        (pokemon3 == "eelektross") ||
        (pokemon3 == "golurk") ||
        (pokemon3 == "aurorus") ||
        (pokemon3 == "lycanroc") ||
        (pokemon3 == "mudsdale") ||
        (pokemon3 == "lurantis") ||
        (pokemon3 == "drampa") ||
        (pokemon3 == "clefairy") ||
        (pokemon3 == "haunter") ||
        (pokemon3 == "scyther") ||
        (pokemon3 == "gurdurr")
    ) {

        toon3 = 1;
        fourthPokemon.innerHTML = "Your fourth Pokemon sucks and there are many Pokemon that does this Pokemon's job better that you could have chosen instead.";

    }
    else if (
        (pokemon3 == "charizard") ||
        (pokemon3 == "exeggutor-alola") ||
        (pokemon3 == "alolan exeggutor") ||
        (pokemon3 == "exeggutor alola") ||
        (pokemon3 == "alolan-exeggutor") ||
        (pokemon3 == "charizard-mega-x") ||
        (pokemon3 == "mega charizard x") ||
        (pokemon3 == "charizard-mega-y") ||
        (pokemon3 == "mega charizard y") ||
        (pokemon3 == "charizard mega x") ||
        (pokemon3 == "mega-charizard-x") ||
        (pokemon3 == "charizard mega-y") ||
        (pokemon3 == "mega-charizard-y") ||
        (pokemon3 == "tauros") ||
        (pokemon3 == "typhlosion") ||
        (pokemon3 == "gallade") ||
        (pokemon3 == "gallade-mega") ||
        (pokemon3 == "mega gallade") ||
        (pokemon3 == "gallade mega") ||
        (pokemon3 == "mega-gallade") ||
        (pokemon3 == "samurott") ||
        (pokemon3 == "sawk") ||
        (pokemon3 == "archeops") ||
        (pokemon3 == "pyroar") ||
        (pokemon3 == "aromatisse") ||
        (pokemon3 == "minior") ||
        (pokemon3 == "blastoise") ||
        (pokemon3 == "golbat") ||
        (pokemon3 == "vileplume") ||
        (pokemon3 == "slowbro") ||
        (pokemon3 == "kingler") ||
        (pokemon3 == "hitmonlee") ||
        (pokemon3 == "weezing") ||
        (pokemon3 == "rhydon") ||
        (pokemon3 == "vaporeon") ||
        (pokemon3 == "aerodactyl") ||
        (pokemon3 == "aerodactyl-mega") ||
        (pokemon3 == "mega aerodactyl") ||
        (pokemon3 == "aerodactyl mega") ||
        (pokemon3 == "mega-aerodactyl") ||
        (pokemon3 == "xatu") ||
        (pokemon3 == "slowking") ||
        (pokemon3 == "steelix") ||
        (pokemon3 == "steelix-mega") ||
        (pokemon3 == "mega steelix") ||
        (pokemon3 == "steelix mega") ||
        (pokemon3 == "mega-steelix") ||
        (pokemon3 == "sneasel") ||
        (pokemon3 == "piloswine") ||
        (pokemon3 == "houndoom") ||
        (pokemon3 == "houndoom-mega") ||
        (pokemon3 == "mega houndoom") ||
        (pokemon3 == "houndoom mega") ||
        (pokemon3 == "mega-houndoom") ||
        (pokemon3 == "hitmontop") ||
        (pokemon3 == "miltank") ||
        (pokemon3 == "sceptile") ||
        (pokemon3 == "sceptile-mega") ||
        (pokemon3 == "sceptile mega") ||
        (pokemon3 == "mega sceptile") ||
        (pokemon3 == "mega-sceptile") ||
        (pokemon3 == "hariyama") ||
        (pokemon3 == "medicham") ||
        (pokemon3 == "medicham-mega") ||
        (pokemon3 == "mega medicham") ||
        (pokemon3 == "medicham mega") ||
        (pokemon3 == "mega-medicham") ||
        (pokemon3 == "torterra") ||
        (pokemon3 == "ambipom") ||
        (pokemon3 == "mismagius") ||
        (pokemon3 == "magmortar") ||
        (pokemon3 == "rotom") ||
        (pokemon3 == "seismitoad") ||
        (pokemon3 == "whimsicott") ||
        (pokemon3 == "scrafty") ||
        (pokemon3 == "sigilyph") ||
        (pokemon3 == "garbodor") ||
        (pokemon3 == "cinccino") ||
        (pokemon3 == "vanilluxe") ||
        (pokemon3 == "ferroseed") ||
        (pokemon3 == "klinklang") ||
        (pokemon3 == "cryogonal") ||
        (pokemon3 == "accelgor") ||
        (pokemon3 == "druddigon") ||
        (pokemon3 == "braviary") ||
        (pokemon3 == "delphox") ||
        (pokemon3 == "vivillon") ||
        (pokemon3 == "malamar") ||
        (pokemon3 == "clawitzer") ||
        (pokemon3 == "heliolisk") ||
        (pokemon3 == "diancie") ||
        (pokemon3 == "diancie-mega") ||
        (pokemon3 == "mega diancie") ||
        (pokemon3 == "diancie mega") ||
        (pokemon3 == "mega-diancie") ||
        (pokemon3 == "decidueye") ||
        (pokemon3 == "incineroar") ||
        (pokemon3 == "vikavolt") ||
        (pokemon3 == "comfrey") ||
        (pokemon3 == "passimian") ||
        (pokemon3 == "palossand") ||
        (pokemon3 == "sivally-steel") ||
        (pokemon3 == "sivally steel") ||
        (pokemon3 == "togedemaru") ||
        (pokemon3 == "dhelmise") ||
        (pokemon3 == "guzzlord")
    ) {

        toon3 = 2;
        fourthPokemon.innerHTML = "Your fourth Pokemon isn't good competitively can only be used situationally.";

    }

    else if (
        (pokemon3 == "venusaur") ||
        (pokemon3 == "kingdra") ||
        (pokemon3 == "venusaur-mega") ||
        (pokemon3 == "mega venusaur") ||
        (pokemon3 == "venusaur mega") ||
        (pokemon3 == "mega-venusaur") ||
        (pokemon3 == "exploud") ||
        (pokemon3 == "gigalith") ||
        (pokemon3 == "cofagrigus") ||
        (pokemon3 == "slurpuff") ||
        (pokemon3 == "barbaracle") ||
        (pokemon3 == "hoopa") ||
        (pokemon3 == "ribombee") ||
        (pokemon3 == "bruxish") ||
        (pokemon3 == "nidoqueen") ||
        (pokemon3 == "ninetales") ||
        (pokemon3 == "arcanine") ||
        (pokemon3 == "machamp") ||
        (pokemon3 == "cloyster") ||
        (pokemon3 == "marowak-alola") ||
        (pokemon3 == "alolan marowak") ||
        (pokemon3 == "marowak alola") ||
        (pokemon3 == "alolan-marowak") ||
        (pokemon3 == "jolteon") ||
        (pokemon3 == "snorlax") ||
        (pokemon3 == "feraligatr") ||
        (pokemon3 == "espeon") ||
        (pokemon3 == "umbreon") ||
        (pokemon3 == "forretress") ||
        (pokemon3 == "mantine") ||
        (pokemon3 == "donphan") ||
        (pokemon3 == "porygon2") ||
        (pokemon3 == "raikou") ||
        (pokemon3 == "linoone") ||
        (pokemon3 == "swellow") ||
        (pokemon3 == "gardevoir") ||
        (pokemon3 == "gardevoir-mega") ||
        (pokemon3 == "mega gardevoir") ||
        (pokemon3 == "gardevoir mega") ||
        (pokemon3 == "mega-gardevoir") ||
        (pokemon3 == "flygon") ||
        (pokemon3 == "milotic") ||
        (pokemon3 == "metagross") ||
        (pokemon3 == "metagross-mega") ||
        (pokemon3 == "mega metagross") ||
        (pokemon3 == "metagross mega") ||
        (pokemon3 == "mega-metagross") ||
        (pokemon3 == "registeel") ||
        (pokemon3 == "roserade") ||
        (pokemon3 == "honchkrow") ||
        (pokemon3 == "bronzong") ||
        (pokemon3 == "drapion") ||
        (pokemon3 == "toxicroak") ||
        (pokemon3 == "rhyperior") ||
        (pokemon3 == "yanmega") ||
        (pokemon3 == "rotom-mow") ||
        (pokemon3 == "uxie") ||
        (pokemon3 == "cresselia") ||
        (pokemon3 == "shaymin") ||
        (pokemon3 == "emboar") ||
        (pokemon3 == "escavalier") ||
        (pokemon3 == "galvantula") ||
        (pokemon3 == "mandibuzz") ||
        (pokemon3 == "virizion") ||
        (pokemon3 == "florges") ||
        (pokemon3 == "pangoro") ||
        (pokemon3 == "dragalge") ||
        (pokemon3 == "tyrantrum") ||
        (pokemon3 == "goodra") ||
        (pokemon3 == "noivern") ||
        (pokemon3 == "zygarde-10%") ||
        (pokemon3 == "lycanroc-dusk") ||
        (pokemon3 == "zygarde 10%") ||
        (pokemon3 == "lycanroc dusk") ||
        (pokemon3 == "araquanid") ||
        (pokemon3 == "salazzle") ||
        (pokemon3 == "bewear") ||
        (pokemon3 == "tsareena") ||
        (pokemon3 == "golisopod") ||
        (pokemon3 == "stakataka") ||
        (pokemon3 == "necrozma")
    ) {

        toon3 = 3;
        fourthPokemon.innerHTML = "Your fourth Pokemon is mediocre and will be difficult to use competitively.";

    }
    else if (
        (pokemon3 == "moltres") ||
        (pokemon3 == "venomoth") ||
        (pokemon3 == "entei") ||
        (pokemon3 == "sharpedo") ||
        (pokemon3 == "darmanitan") ||
        (pokemon3 == "sharpedo-mega") ||
        (pokemon3 == "mega sharpedo") ||
        (pokemon3 == "sharpedo mega") ||
        (pokemon3 == "mega-sharpedo") ||
        (pokemon3 == "zoroark") ||
        (pokemon3 == "reuniclus") ||
        (pokemon3 == "mienshao") ||
        (pokemon3 == "durant") ||
        (pokemon3 == "tornadus") ||
        (pokemon3 == "kyurem") ||
        (pokemon3 == "meloetta") ||
        (pokemon3 == "talonflame") ||
        (pokemon3 == "nidoking") ||
        (pokemon3 == "tentacruel") ||
        (pokemon3 == "magneton") ||
        (pokemon3 == "muk-alola") ||
        (pokemon3 == "alolan muk") ||
        (pokemon3 == "muk alola") ||
        (pokemon3 == "alolan-muk") ||
        (pokemon3 == "gengar") ||
        (pokemon3 == "starmie") ||
        (pokemon3 == "crobat") ||
        (pokemon3 == "gligar") ||
        (pokemon3 == "scizor") ||
        (pokemon3 == "scizor-mega") ||
        (pokemon3 == "mega scizor") ||
        (pokemon3 == "heracross") ||
        (pokemon3 == "heracross-mega") ||
        (pokemon3 == "mega heracross") ||
        (pokemon3 == "scizor mega") ||
        (pokemon3 == "mega-scizor") ||
        (pokemon3 == "heracross mega") ||
        (pokemon3 == "mega-heracross") ||
        (pokemon3 == "blissey") ||
        (pokemon3 == "suicune") ||
        (pokemon3 == "celebi") ||
        (pokemon3 == "swampert") ||
        (pokemon3 == "swampert-mega") ||
        (pokemon3 == "mega swampert") ||
        (pokemon3 == "swampert mega") ||
        (pokemon3 == "mega-swampert") ||
        (pokemon3 == "crawdaunt") ||
        (pokemon3 == "latias") ||
        (pokemon3 == "latias-mega") ||
        (pokemon3 == "mega-latias") ||
        (pokemon3 == "latias mega") ||
        (pokemon3 == "mega latias") ||
        (pokemon3 == "infernape") ||
        (pokemon3 == "empoleon") ||
        (pokemon3 == "lucario") ||
        (pokemon3 == "hippowdon") ||
        (pokemon3 == "togekiss") ||
        (pokemon3 == "mamoswine") ||
        (pokemon3 == "rotom-heat") ||
        (pokemon3 == "rotom heat") ||
        (pokemon3 == "azelf") ||
        (pokemon3 == "krookadile") ||
        (pokemon3 == "amoonguss") ||
        (pokemon3 == "alomomola") ||
        (pokemon3 == "chandelure") ||
        (pokemon3 == "haxorus") ||
        (pokemon3 == "bisharp") ||
        (pokemon3 == "hydreigon") ||
        (pokemon3 == "cobalion") ||
        (pokemon3 == "terrakion") ||
        (pokemon3 == "chesnaught") ||
        (pokemon3 == "doublade") ||
        (pokemon3 == "sylveon") ||
        (pokemon3 == "klefki") ||
        (pokemon3 == "volcanion") ||
        (pokemon3 == "primarina") ||
        (pokemon3 == "kommo-o") ||
        (pokemon3 == "kommo o") ||
        (pokemon3 == "nihilego") ||
        (pokemon3 == "zeraora")
    ) {

        toon3 = 4;
        fourthPokemon.innerHTML = "Your fourth Pokemon is a decent Pokemon that can be used competitively.";

    }
    else if (
        (pokemon3 == "ninetales-alola") ||
        (pokemon3 == "alolan ninetales") ||
        (pokemon3 == "alolan-ninetales") ||
        (pokemon3 == "ninetales alola") ||
        (pokemon3 == "alakazam") ||
        (pokemon3 == "gyarados") ||
        (pokemon3 == "dragonite") ||
        (pokemon3 == "azumarill") ||
        (pokemon3 == "alakazam-mega") ||
        (pokemon3 == "gyarados-mega") ||
        (pokemon3 == "mega-gyarados") ||
        (pokemon3 == "mega-alakazam") ||
        (pokemon3 == "mega alakazam") ||
        (pokemon3 == "mega gyarados") ||
        (pokemon3 == "alakazam mega") ||
        (pokemon3 == "gyarados mega") ||
        (pokemon3 == "breloom") ||
        (pokemon3 == "salamence") ||
        (pokemon3 == "salamence-mega") ||
        (pokemon3 == "mega-salamence") ||
        (pokemon3 == "salamence mega") ||
        (pokemon3 == "mega salamence") ||
        (pokemon3 == "latios") ||
        (pokemon3 == "latios-mega") ||
        (pokemon3 == "mega-latios") ||
        (pokemon3 == "latios mega") ||
        (pokemon3 == "mega latios") ||
        (pokemon3 == "staraptor") ||
        (pokemon3 == "weavile") ||
        (pokemon3 == "porygon-z") ||
        (pokemon3 == "porygon z") ||
        (pokemon3 == "manaphy") ||
        (pokemon3 == "conkeldurr") ||
        (pokemon3 == "scolipede") ||
        (pokemon3 == "thunderus") ||
        (pokemon3 == "thunderus-therian") ||
        (pokemon3 == "thunderus therian") ||
        (pokemon3 == "diggersby") ||
        (pokemon3 == "hoopa-unbound") ||
        (pokemon3 == "hoopa unbound") ||
        (pokemon3 == "buzzwole") ||
        (pokemon3 == "xurkitree") ||
        (pokemon3 == "blacephalon") ||
        (pokemon3 == "celesteela") ||
        (pokemon3 == "chansey") ||
        (pokemon3 == "clefable") ||
        (pokemon3 == "excadrill") ||
        (pokemon3 == "ferrothorn") ||
        (pokemon3 == "garchomp") ||
        (pokemon3 == "gliscor") ||
        (pokemon3 == "greninja") ||
        (pokemon3 == "ash-greninja") ||
        (pokemon3 == "ash greninja") ||
        (pokemon3 == "hawlucha") ||
        (pokemon3 == "heatran") ||
        (pokemon3 == "jirachi") ||
        (pokemon3 == "kartana") ||
        (pokemon3 == "keldeo") ||
        (pokemon3 == "keldeo-resolute") ||
        (pokemon3 == "keldeo resolute") ||
        (pokemon3 == "kyurem-black") ||
        (pokemon3 == "kyurem black") ||
        (pokemon3 == "landorus-therian") ||
        (pokemon3 == "landorus therian") ||
        (pokemon3 == "magearna") ||
        (pokemon3 == "magnezone") ||
        (pokemon3 == "mew") ||
        (pokemon3 == "mimikyu") ||
        (pokemon3 == "pelipper") ||
        (pokemon3 == "rotom-wash") ||
        (pokemon3 == "rotom wash") ||
        (pokemon3 == "serperior") ||
        (pokemon3 == "skarmory") ||
        (pokemon3 == "tangrowth") ||
        (pokemon3 == "toxapex") ||
        (pokemon3 == "tyranitar") ||
        (pokemon3 == "victini") ||
        (pokemon3 == "volcarona") ||
        (pokemon3 == "zapdos") ||
        (pokemon3 == "tapu-bulu") ||
        (pokemon3 == "tapu bulu") ||
        (pokemon3 == "tapu-fini") ||
        (pokemon3 == "tapu fini") ||
        (pokemon3 == "tapu-koko") ||
        (pokemon3 == "tapu koko") ||
        (pokemon3 == "tapu-lele") ||
        (pokemon3 == "tapu lele") ||
        (pokemon3 == "tornadus-therian") ||
        (pokemon3 == "tornadus therian")
    ) {

        toon3 = 5;
        fourthPokemon.innerHTML = "Your fourth Pokemon is a great Pokemon that competes with others well.";

    }
    else if (
        (pokemon3 == "mewtwo") ||
        (pokemon3 == "ho-oh") ||
        (pokemon3 == "ho oh") ||
        (pokemon3 == "kyurem-white") ||
        (pokemon3 == "kyurem white") ||
        (pokemon3 == "white-kyurem") ||
        (pokemon3 == "white kyurem") ||
        (pokemon3 == "lugia") ||
        (pokemon3 == "blaziken") ||
        (pokemon3 == "giratina") ||
        (pokemon3 == "kyogre") ||
        (pokemon3 == "groudon") ||
        (pokemon3 == "giratina-origin") ||
        (pokemon3 == "shaymin-sky") ||
        (pokemon3 == "origin giratina") ||
        (pokemon3 == "sky shaymin") ||
        (pokemon3 == "rayquaza") ||
        (pokemon3 == "deoxys") ||
        (pokemon3 == "phermosa") ||
        (pokemon3 == "marshadow") ||
        (pokemon3 == "genesect") ||
        (pokemon3 == "aegislash") ||
        (pokemon3 == "dialga") ||
        (pokemon3 == "palkia") ||
        (pokemon3 == "reshiram") ||
        (pokemon3 == "zekrom") ||
        (pokemon3 == "arceus") ||
        (pokemon3 == "landorus") ||
        (pokemon3 == "zygarde-complete") ||
        (pokemon3 == "zygarde complete") ||
        (pokemon3 == "deoxys-defense") ||
        (pokemon3 == "deoxys defense") ||
        (pokemon3 == "defense-deoxys") ||
        (pokemon3 == "defense deoxys") ||
        (pokemon3 == "deoxys-speed") ||
        (pokemon3 == "deoxys speed") ||
        (pokemon3 == "speed-deoxys") ||
        (pokemon3 == "speed deoxys") ||
        (pokemon3 == "deoxys-attack") ||
        (pokemon3 == "deoxys attack") ||
        (pokemon3 == "attack-deoxys") ||
        (pokemon3 == "attack deoxys") ||
        (pokemon3 == "zygarde") ||
        (pokemon3 == "xerneas") ||
        (pokemon3 == "yveltal") ||
        (pokemon3 == "solgaleo") ||
        (pokemon3 == "darkrai") ||
        (pokemon3 == "necrozma-ultra") ||
        (pokemon3 == "ultra-necrozma") ||
        (pokemon3 == "necrozma ultra") ||
        (pokemon3 == "ultra necrozma") ||
        (pokemon3 == "necrozma-dusk-mane") ||
        (pokemon3 == "dusk-mane-necrozma") ||
        (pokemon3 == "necrozma dusk mane") ||
        (pokemon3 == "dusk mane necrozma") ||
        (pokemon3 == "necrozma-dawn-wings") ||
        (pokemon3 == "dawn-wings-necrozma") ||
        (pokemon3 == "necrozma dawn wings") ||
        (pokemon3 == "dawn wings necrozma") ||
        (pokemon3 == "lunala") ||
        (pokemon3 == "blaziken-mega") ||
        (pokemon3 == "blaziken mega") ||
        (pokemon3 == "mega blaziken") ||
        (pokemon3 == "mega-blaziken") ||
        (pokemon3 == "mewtwo-mega-x") ||
        (pokemon3 == "mega mewtwo x") ||
        (pokemon3 == "mewtwo-mega-y") ||
        (pokemon3 == "mega mewtwo y") ||
        (pokemon3 == "mewtwo mega x") ||
        (pokemon3 == "mega-mewtwo-x") ||
        (pokemon3 == "mewtwo mega-y") ||
        (pokemon3 == "mega-mewtwo-y") ||
        (pokemon3 == "mewtwo-mega-x") ||
        (pokemon3 == "mewtwo-mega-y") ||
        (pokemon3 == "mewtwo-mega-x") ||
        (pokemon3 == "mewtwo-mega-y")
    ) {

        toon3 = 6;
        fourthPokemon.innerHTML = "Your fourth Pokemon is an excellent top-tier Pokemon among the best.";

    }
    
    else if (
        (pokemon3.length == 0)
    ) {
        
        toon3 = 0;
        pokemon3.innerHTML = "Please enter a Pokemon in the fourth slot.";
        
    }
    
    else {

        toon3 = 0;
        fourthPokemon.innerHTML = "Sorry, your fourth Pokemon is either misspelled or unranked. Please check your spelling and/or your Pokemon choices.";

    }

    if (
        (pokemon4 == "oricorio-sensu") ||
        (pokemon4 == "oricorio sensu") ||
        (pokemon4 == "silvally-fairy") ||
        (pokemon4 == "silvally fairy") ||
        (pokemon4 == "raichu-alola") ||
        (pokemon4 == "raichu alola") ||
        (pokemon4 == "alolan raichu") ||
        (pokemon4 == "alolan-raichu") ||
        (pokemon4 == "sandslash-alola") ||
        (pokemon4 == "sandslash alola") ||
        (pokemon4 == "alolan sandslash") ||
        (pokemon4 == "alolan-sandslash") ||
        (pokemon4 == "dugtrio-alola") ||
        (pokemon4 == "dugtrio alola") ||
        (pokemon4 == "alolan dugtrio") ||
        (pokemon4 == "alolan-dugtrio") ||
        (pokemon4 == "persian-alola") ||
        (pokemon4 == "persian alola") ||
        (pokemon4 == "alolan persian") ||
        (pokemon4 == "alolan-persian") ||
        (pokemon4 == "sableye-mega") ||
        (pokemon4 == "sableye mega") ||
        (pokemon4 == "mega sableye") ||
        (pokemon4 == "mega-sableye") ||
        (pokemon4 == "aggron-mega") ||
        (pokemon4 == "aggron mega") ||
        (pokemon4 == "mega aggron") ||
        (pokemon4 == "mega-aggron") ||
        (pokemon4 == "manectric-mega") ||
        (pokemon4 == "manectric mega") ||
        (pokemon4 == "mega manectric") ||
        (pokemon4 == "mega-manectric") ||
        (pokemon4 == "rotom-frost") ||
        (pokemon4 == "rotom frost") ||
        (pokemon4 == "audino-mega") ||
        (pokemon4 == "audino mega") ||
        (pokemon4 == "mega audino") ||
        (pokemon4 == "mega-audino") ||
        (pokemon4 == "absol-mega") ||
        (pokemon4 == "mega absol") ||
        (pokemon4 == "absol mega") ||
        (pokemon4 == "mega-absol") ||
        (pokemon4 == "absol") ||
        (pokemon4 == "poliwrath") ||
        (pokemon4 == "primeape") ||
        (pokemon4 == "dodrio") ||
        (pokemon4 == "hitmonchan") ||
        (pokemon4 == "kangaskhan") ||
        (pokemon4 == "omastar") ||
        (pokemon4 == "kabutops") ||
        (pokemon4 == "articuno") ||
        (pokemon4 == "lanturn") ||
        (pokemon4 == "quagsire") ||
        (pokemon4 == "quilfish") ||
        (pokemon4 == "ludicolo") ||
        (pokemon4 == "sableye") ||
        (pokemon4 == "aggron") ||
        (pokemon4 == "manectric") ||
        (pokemon4 == "roselia") ||
        (pokemon4 == "claydol") ||
        (pokemon4 == "regirock") ||
        (pokemon4 == "gastrodon") ||
        (pokemon4 == "skuntank") ||
        (pokemon4 == "spiritomb") ||
        (pokemon4 == "froslass") ||
        (pokemon4 == "mesprit") ||
        (pokemon4 == "stoutland") ||
        (pokemon4 == "liepard") ||
        (pokemon4 == "audino") ||
        (pokemon4 == "lilligant") ||
        (pokemon4 == "carracosta") ||
        (pokemon4 == "jellicent") ||
        (pokemon4 == "eelektross") ||
        (pokemon4 == "golurk") ||
        (pokemon4 == "aurorus") ||
        (pokemon4 == "lycanroc") ||
        (pokemon4 == "mudsdale") ||
        (pokemon4 == "lurantis") ||
        (pokemon4 == "drampa") ||
        (pokemon4 == "clefairy") ||
        (pokemon4 == "haunter") ||
        (pokemon4 == "scyther") ||
        (pokemon4 == "gurdurr")
    ) {

        toon4 = 1;
        fifthPokemon.innerHTML = "Your fifth Pokemon sucks and there are many Pokemon that does this Pokemon's job better that you could have chosen instead.";

    }
    else if (
        (pokemon4 == "charizard") ||
        (pokemon4 == "exeggutor-alola") ||
        (pokemon4 == "alolan exeggutor") ||
        (pokemon4 == "exeggutor alola") ||
        (pokemon4 == "alolan-exeggutor") ||
        (pokemon4 == "charizard-mega-x") ||
        (pokemon4 == "mega charizard x") ||
        (pokemon4 == "charizard-mega-y") ||
        (pokemon4 == "mega charizard y") ||
        (pokemon4 == "charizard mega x") ||
        (pokemon4 == "mega-charizard-x") ||
        (pokemon4 == "charizard mega-y") ||
        (pokemon4 == "mega-charizard-y") ||
        (pokemon4 == "tauros") ||
        (pokemon4 == "typhlosion") ||
        (pokemon4 == "gallade") ||
        (pokemon4 == "gallade-mega") ||
        (pokemon4 == "mega gallade") ||
        (pokemon4 == "gallade mega") ||
        (pokemon4 == "mega-gallade") ||
        (pokemon4 == "samurott") ||
        (pokemon4 == "sawk") ||
        (pokemon4 == "archeops") ||
        (pokemon4 == "pyroar") ||
        (pokemon4 == "aromatisse") ||
        (pokemon4 == "minior") ||
        (pokemon4 == "blastoise") ||
        (pokemon4 == "golbat") ||
        (pokemon4 == "vileplume") ||
        (pokemon4 == "slowbro") ||
        (pokemon4 == "kingler") ||
        (pokemon4 == "hitmonlee") ||
        (pokemon4 == "weezing") ||
        (pokemon4 == "rhydon") ||
        (pokemon4 == "vaporeon") ||
        (pokemon4 == "aerodactyl") ||
        (pokemon4 == "aerodactyl-mega") ||
        (pokemon4 == "mega aerodactyl") ||
        (pokemon4 == "aerodactyl mega") ||
        (pokemon4 == "mega-aerodactyl") ||
        (pokemon4 == "xatu") ||
        (pokemon4 == "slowking") ||
        (pokemon4 == "steelix") ||
        (pokemon4 == "steelix-mega") ||
        (pokemon4 == "mega steelix") ||
        (pokemon4 == "steelix mega") ||
        (pokemon4 == "mega-steelix") ||
        (pokemon4 == "sneasel") ||
        (pokemon4 == "piloswine") ||
        (pokemon4 == "houndoom") ||
        (pokemon4 == "houndoom-mega") ||
        (pokemon4 == "mega houndoom") ||
        (pokemon4 == "houndoom mega") ||
        (pokemon4 == "mega-houndoom") ||
        (pokemon4 == "hitmontop") ||
        (pokemon4 == "miltank") ||
        (pokemon4 == "sceptile") ||
        (pokemon4 == "sceptile-mega") ||
        (pokemon4 == "sceptile mega") ||
        (pokemon4 == "mega sceptile") ||
        (pokemon4 == "mega-sceptile") ||
        (pokemon4 == "hariyama") ||
        (pokemon4 == "medicham") ||
        (pokemon4 == "medicham-mega") ||
        (pokemon4 == "mega medicham") ||
        (pokemon4 == "medicham mega") ||
        (pokemon4 == "mega-medicham") ||
        (pokemon4 == "torterra") ||
        (pokemon4 == "ambipom") ||
        (pokemon4 == "mismagius") ||
        (pokemon4 == "magmortar") ||
        (pokemon4 == "rotom") ||
        (pokemon4 == "seismitoad") ||
        (pokemon4 == "whimsicott") ||
        (pokemon4 == "scrafty") ||
        (pokemon4 == "sigilyph") ||
        (pokemon4 == "garbodor") ||
        (pokemon4 == "cinccino") ||
        (pokemon4 == "vanilluxe") ||
        (pokemon4 == "ferroseed") ||
        (pokemon4 == "klinklang") ||
        (pokemon4 == "cryogonal") ||
        (pokemon4 == "accelgor") ||
        (pokemon4 == "druddigon") ||
        (pokemon4 == "braviary") ||
        (pokemon4 == "delphox") ||
        (pokemon4 == "vivillon") ||
        (pokemon4 == "malamar") ||
        (pokemon4 == "clawitzer") ||
        (pokemon4 == "heliolisk") ||
        (pokemon4 == "diancie") ||
        (pokemon4 == "diancie-mega") ||
        (pokemon4 == "mega diancie") ||
        (pokemon4 == "diancie mega") ||
        (pokemon4 == "mega-diancie") ||
        (pokemon4 == "decidueye") ||
        (pokemon4 == "incineroar") ||
        (pokemon4 == "vikavolt") ||
        (pokemon4 == "comfrey") ||
        (pokemon4 == "passimian") ||
        (pokemon4 == "palossand") ||
        (pokemon4 == "sivally-steel") ||
        (pokemon4 == "sivally steel") ||
        (pokemon4 == "togedemaru") ||
        (pokemon4 == "dhelmise") ||
        (pokemon4 == "guzzlord")
    ) {

        toon4 = 2;
        fifthPokemon.innerHTML = "Your fifth Pokemon isn't good competitively can only be used situationally.";

    }

    else if (
        (pokemon4 == "venusaur") ||
        (pokemon4 == "kingdra") ||
        (pokemon4 == "venusaur-mega") ||
        (pokemon4 == "mega venusaur") ||
        (pokemon4 == "venusaur mega") ||
        (pokemon4 == "mega-venusaur") ||
        (pokemon4 == "exploud") ||
        (pokemon4 == "gigalith") ||
        (pokemon4 == "cofagrigus") ||
        (pokemon4 == "slurpuff") ||
        (pokemon4 == "barbaracle") ||
        (pokemon4 == "hoopa") ||
        (pokemon4 == "ribombee") ||
        (pokemon4 == "bruxish") ||
        (pokemon4 == "nidoqueen") ||
        (pokemon4 == "ninetales") ||
        (pokemon4 == "arcanine") ||
        (pokemon4 == "machamp") ||
        (pokemon4 == "cloyster") ||
        (pokemon4 == "marowak-alola") ||
        (pokemon4 == "alolan marowak") ||
        (pokemon4 == "marowak alola") ||
        (pokemon4 == "alolan-marowak") ||
        (pokemon4 == "jolteon") ||
        (pokemon4 == "snorlax") ||
        (pokemon4 == "feraligatr") ||
        (pokemon4 == "espeon") ||
        (pokemon4 == "umbreon") ||
        (pokemon4 == "forretress") ||
        (pokemon4 == "mantine") ||
        (pokemon4 == "donphan") ||
        (pokemon4 == "porygon2") ||
        (pokemon4 == "raikou") ||
        (pokemon4 == "linoone") ||
        (pokemon4 == "swellow") ||
        (pokemon4 == "gardevoir") ||
        (pokemon4 == "gardevoir-mega") ||
        (pokemon4 == "mega gardevoir") ||
        (pokemon4 == "gardevoir mega") ||
        (pokemon4 == "mega-gardevoir") ||
        (pokemon4 == "flygon") ||
        (pokemon4 == "milotic") ||
        (pokemon4 == "metagross") ||
        (pokemon4 == "metagross-mega") ||
        (pokemon4 == "mega metagross") ||
        (pokemon4 == "metagross mega") ||
        (pokemon4 == "mega-metagross") ||
        (pokemon4 == "registeel") ||
        (pokemon4 == "roserade") ||
        (pokemon4 == "honchkrow") ||
        (pokemon4 == "bronzong") ||
        (pokemon4 == "drapion") ||
        (pokemon4 == "toxicroak") ||
        (pokemon4 == "rhyperior") ||
        (pokemon4 == "yanmega") ||
        (pokemon4 == "rotom-mow") ||
        (pokemon4 == "uxie") ||
        (pokemon4 == "cresselia") ||
        (pokemon4 == "shaymin") ||
        (pokemon4 == "emboar") ||
        (pokemon4 == "escavalier") ||
        (pokemon4 == "galvantula") ||
        (pokemon4 == "mandibuzz") ||
        (pokemon4 == "virizion") ||
        (pokemon4 == "florges") ||
        (pokemon4 == "pangoro") ||
        (pokemon4 == "dragalge") ||
        (pokemon4 == "tyrantrum") ||
        (pokemon4 == "goodra") ||
        (pokemon4 == "noivern") ||
        (pokemon4 == "zygarde-10%") ||
        (pokemon4 == "lycanroc-dusk") ||
        (pokemon4 == "zygarde 10%") ||
        (pokemon4 == "lycanroc dusk") ||
        (pokemon4 == "araquanid") ||
        (pokemon4 == "salazzle") ||
        (pokemon4 == "bewear") ||
        (pokemon4 == "tsareena") ||
        (pokemon4 == "golisopod") ||
        (pokemon4 == "stakataka") ||
        (pokemon4 == "necrozma")
    ) {

        toon4 = 3;
        fifthPokemon.innerHTML = "Your fifth Pokemon is mediocre and will be difficult to use competitively.";

    }
    else if (
        (pokemon4 == "moltres") ||
        (pokemon4 == "venomoth") ||
        (pokemon4 == "entei") ||
        (pokemon4 == "sharpedo") ||
        (pokemon4 == "darmanitan") ||
        (pokemon4 == "sharpedo-mega") ||
        (pokemon4 == "mega sharpedo") ||
        (pokemon4 == "sharpedo mega") ||
        (pokemon4 == "mega-sharpedo") ||
        (pokemon4 == "zoroark") ||
        (pokemon4 == "reuniclus") ||
        (pokemon4 == "mienshao") ||
        (pokemon4 == "durant") ||
        (pokemon4 == "tornadus") ||
        (pokemon4 == "kyurem") ||
        (pokemon4 == "meloetta") ||
        (pokemon4 == "talonflame") ||
        (pokemon4 == "nidoking") ||
        (pokemon4 == "tentacruel") ||
        (pokemon4 == "magneton") ||
        (pokemon4 == "muk-alola") ||
        (pokemon4 == "alolan muk") ||
        (pokemon4 == "muk alola") ||
        (pokemon4 == "alolan-muk") ||
        (pokemon4 == "gengar") ||
        (pokemon4 == "starmie") ||
        (pokemon4 == "crobat") ||
        (pokemon4 == "gligar") ||
        (pokemon4 == "scizor") ||
        (pokemon4 == "scizor-mega") ||
        (pokemon4 == "mega scizor") ||
        (pokemon4 == "heracross") ||
        (pokemon4 == "heracross-mega") ||
        (pokemon4 == "mega heracross") ||
        (pokemon4 == "scizor mega") ||
        (pokemon4 == "mega-scizor") ||
        (pokemon4 == "heracross mega") ||
        (pokemon4 == "mega-heracross") ||
        (pokemon4 == "blissey") ||
        (pokemon4 == "suicune") ||
        (pokemon4 == "celebi") ||
        (pokemon4 == "swampert") ||
        (pokemon4 == "swampert-mega") ||
        (pokemon4 == "mega swampert") ||
        (pokemon4 == "swampert mega") ||
        (pokemon4 == "mega-swampert") ||
        (pokemon4 == "crawdaunt") ||
        (pokemon4 == "latias") ||
        (pokemon4 == "latias-mega") ||
        (pokemon4 == "mega-latias") ||
        (pokemon4 == "latias mega") ||
        (pokemon4 == "mega latias") ||
        (pokemon4 == "infernape") ||
        (pokemon4 == "empoleon") ||
        (pokemon4 == "lucario") ||
        (pokemon4 == "hippowdon") ||
        (pokemon4 == "togekiss") ||
        (pokemon4 == "mamoswine") ||
        (pokemon4 == "rotom-heat") ||
        (pokemon4 == "rotom heat") ||
        (pokemon4 == "azelf") ||
        (pokemon4 == "krookadile") ||
        (pokemon4 == "amoonguss") ||
        (pokemon4 == "alomomola") ||
        (pokemon4 == "chandelure") ||
        (pokemon4 == "haxorus") ||
        (pokemon4 == "bisharp") ||
        (pokemon4 == "hydreigon") ||
        (pokemon4 == "cobalion") ||
        (pokemon4 == "terrakion") ||
        (pokemon4 == "chesnaught") ||
        (pokemon4 == "doublade") ||
        (pokemon4 == "sylveon") ||
        (pokemon4 == "klefki") ||
        (pokemon4 == "volcanion") ||
        (pokemon4 == "primarina") ||
        (pokemon4 == "kommo-o") ||
        (pokemon4 == "kommo o") ||
        (pokemon4 == "nihilego") ||
        (pokemon4 == "zeraora")
    ) {

        toon4 = 4;
        fifthPokemon.innerHTML = "Your fifth Pokemon is a decent Pokemon that can be used competitively.";

    }
    else if (
        (pokemon4 == "ninetales-alola") ||
        (pokemon4 == "alolan ninetales") ||
        (pokemon4 == "alolan-ninetales") ||
        (pokemon4 == "ninetales alola") ||
        (pokemon4 == "alakazam") ||
        (pokemon4 == "gyarados") ||
        (pokemon4 == "dragonite") ||
        (pokemon4 == "azumarill") ||
        (pokemon4 == "alakazam-mega") ||
        (pokemon4 == "gyarados-mega") ||
        (pokemon4 == "mega-gyarados") ||
        (pokemon4 == "mega-alakazam") ||
        (pokemon4 == "mega alakazam") ||
        (pokemon4 == "mega gyarados") ||
        (pokemon4 == "alakazam mega") ||
        (pokemon4 == "gyarados mega") ||
        (pokemon4 == "breloom") ||
        (pokemon4 == "salamence") ||
        (pokemon4 == "salamence-mega") ||
        (pokemon4 == "mega-salamence") ||
        (pokemon4 == "salamence mega") ||
        (pokemon4 == "mega salamence") ||
        (pokemon4 == "latios") ||
        (pokemon4 == "latios-mega") ||
        (pokemon4 == "mega-latios") ||
        (pokemon4 == "latios mega") ||
        (pokemon4 == "mega latios") ||
        (pokemon4 == "staraptor") ||
        (pokemon4 == "weavile") ||
        (pokemon4 == "porygon-z") ||
        (pokemon4 == "porygon z") ||
        (pokemon4 == "manaphy") ||
        (pokemon4 == "conkeldurr") ||
        (pokemon4 == "scolipede") ||
        (pokemon4 == "thunderus") ||
        (pokemon4 == "thunderus-therian") ||
        (pokemon4 == "thunderus therian") ||
        (pokemon4 == "diggersby") ||
        (pokemon4 == "hoopa-unbound") ||
        (pokemon4 == "hoopa unbound") ||
        (pokemon4 == "buzzwole") ||
        (pokemon4 == "xurkitree") ||
        (pokemon4 == "blacephalon") ||
        (pokemon4 == "celesteela") ||
        (pokemon4 == "chansey") ||
        (pokemon4 == "clefable") ||
        (pokemon4 == "excadrill") ||
        (pokemon4 == "ferrothorn") ||
        (pokemon4 == "garchomp") ||
        (pokemon4 == "gliscor") ||
        (pokemon4 == "greninja") ||
        (pokemon4 == "ash-greninja") ||
        (pokemon4 == "ash greninja") ||
        (pokemon4 == "hawlucha") ||
        (pokemon4 == "heatran") ||
        (pokemon4 == "jirachi") ||
        (pokemon4 == "kartana") ||
        (pokemon4 == "keldeo") ||
        (pokemon4 == "keldeo-resolute") ||
        (pokemon4 == "keldeo resolute") ||
        (pokemon4 == "kyurem-black") ||
        (pokemon4 == "kyurem black") ||
        (pokemon4 == "landorus-therian") ||
        (pokemon4 == "landorus therian") ||
        (pokemon4 == "magearna") ||
        (pokemon4 == "magnezone") ||
        (pokemon4 == "mew") ||
        (pokemon4 == "mimikyu") ||
        (pokemon4 == "pelipper") ||
        (pokemon4 == "rotom-wash") ||
        (pokemon4 == "rotom wash") ||
        (pokemon4 == "serperior") ||
        (pokemon4 == "skarmory") ||
        (pokemon4 == "tangrowth") ||
        (pokemon4 == "toxapex") ||
        (pokemon4 == "tyranitar") ||
        (pokemon4 == "victini") ||
        (pokemon4 == "volcarona") ||
        (pokemon4 == "zapdos") ||
        (pokemon4 == "tapu-bulu") ||
        (pokemon4 == "tapu bulu") ||
        (pokemon4 == "tapu-fini") ||
        (pokemon4 == "tapu fini") ||
        (pokemon4 == "tapu-koko") ||
        (pokemon4 == "tapu koko") ||
        (pokemon4 == "tapu-lele") ||
        (pokemon4 == "tapu lele") ||
        (pokemon4 == "tornadus-therian") ||
        (pokemon4 == "tornadus therian")
    ) {

        toon4 = 5;
        fifthPokemon.innerHTML = "Your fifth Pokemon is a great Pokemon that competes with others well.";

    }
    else if (
        (pokemon4 == "mewtwo") ||
        (pokemon4 == "ho-oh") ||
        (pokemon4 == "ho oh") ||
        (pokemon4 == "kyurem-white") ||
        (pokemon4 == "kyurem white") ||
        (pokemon4 == "white-kyurem") ||
        (pokemon4 == "white kyurem") ||
        (pokemon4 == "lugia") ||
        (pokemon4 == "blaziken") ||
        (pokemon4 == "giratina") ||
        (pokemon4 == "kyogre") ||
        (pokemon4 == "groudon") ||
        (pokemon4 == "giratina-origin") ||
        (pokemon4 == "shaymin-sky") ||
        (pokemon4 == "origin giratina") ||
        (pokemon4 == "sky shaymin") ||
        (pokemon4 == "rayquaza") ||
        (pokemon4 == "deoxys") ||
        (pokemon4 == "phermosa") ||
        (pokemon4 == "marshadow") ||
        (pokemon4 == "genesect") ||
        (pokemon4 == "aegislash") ||
        (pokemon4 == "dialga") ||
        (pokemon4 == "palkia") ||
        (pokemon4 == "reshiram") ||
        (pokemon4 == "zekrom") ||
        (pokemon4 == "arceus") ||
        (pokemon4 == "landorus") ||
        (pokemon4 == "zygarde-complete") ||
        (pokemon4 == "zygarde complete") ||
        (pokemon4 == "deoxys-defense") ||
        (pokemon4 == "deoxys defense") ||
        (pokemon4 == "defense-deoxys") ||
        (pokemon4 == "defense deoxys") ||
        (pokemon4 == "deoxys-speed") ||
        (pokemon4 == "deoxys speed") ||
        (pokemon4 == "speed-deoxys") ||
        (pokemon4 == "speed deoxys") ||
        (pokemon4 == "deoxys-attack") ||
        (pokemon4 == "deoxys attack") ||
        (pokemon4 == "attack-deoxys") ||
        (pokemon4 == "attack deoxys") ||
        (pokemon4 == "zygarde") ||
        (pokemon4 == "xerneas") ||
        (pokemon4 == "yveltal") ||
        (pokemon4 == "solgaleo") ||
        (pokemon4 == "darkrai") ||
        (pokemon4 == "necrozma-ultra") ||
        (pokemon4 == "ultra-necrozma") ||
        (pokemon4 == "necrozma ultra") ||
        (pokemon4 == "ultra necrozma") ||
        (pokemon4 == "necrozma-dusk-mane") ||
        (pokemon4 == "dusk-mane-necrozma") ||
        (pokemon4 == "necrozma dusk mane") ||
        (pokemon4 == "dusk mane necrozma") ||
        (pokemon4 == "necrozma-dawn-wings") ||
        (pokemon4 == "dawn-wings-necrozma") ||
        (pokemon4 == "necrozma dawn wings") ||
        (pokemon4 == "dawn wings necrozma") ||
        (pokemon4 == "lunala") ||
        (pokemon4 == "blaziken-mega") ||
        (pokemon4 == "blaziken mega") ||
        (pokemon4 == "mega blaziken") ||
        (pokemon4 == "mega-blaziken") ||
        (pokemon4 == "mewtwo-mega-x") ||
        (pokemon4 == "mega mewtwo x") ||
        (pokemon4 == "mewtwo-mega-y") ||
        (pokemon4 == "mega mewtwo y") ||
        (pokemon4 == "mewtwo mega x") ||
        (pokemon4 == "mega-mewtwo-x") ||
        (pokemon4 == "mewtwo mega-y") ||
        (pokemon4 == "mega-mewtwo-y") ||
        (pokemon4 == "mewtwo-mega-x") ||
        (pokemon4 == "mewtwo-mega-y") ||
        (pokemon4 == "mewtwo-mega-x") ||
        (pokemon4 == "mewtwo-mega-y")
    ) {

        toon4 = 6;
        fifthPokemon.innerHTML = "Your fifth Pokemon is an excellent top-tier Pokemon among the best.";

    }
    
    else if (
        (pokemon4.length == 0)
    ) {
        
        toon4 = 0;
        pokemon4.innerHTML = "Please enter a Pokemon in the fifth slot.";
        
    }
    
    else {

        toon4 = 0;
        fifthPokemon.innerHTML = "Sorry, your fifth Pokemon is either misspelled or unranked. Please check your spelling and/or your Pokemon choices.";

    }

    if (
        (pokemon5 == "oricorio-sensu") ||
        (pokemon5 == "oricorio sensu") ||
        (pokemon5 == "silvally-fairy") ||
        (pokemon5 == "silvally fairy") ||
        (pokemon5 == "raichu-alola") ||
        (pokemon5 == "raichu alola") ||
        (pokemon5 == "alolan raichu") ||
        (pokemon5 == "alolan-raichu") ||
        (pokemon5 == "sandslash-alola") ||
        (pokemon5 == "sandslash alola") ||
        (pokemon5 == "alolan sandslash") ||
        (pokemon5 == "alolan-sandslash") ||
        (pokemon5 == "dugtrio-alola") ||
        (pokemon5 == "dugtrio alola") ||
        (pokemon5 == "alolan dugtrio") ||
        (pokemon5 == "alolan-dugtrio") ||
        (pokemon5 == "persian-alola") ||
        (pokemon5 == "persian alola") ||
        (pokemon5 == "alolan persian") ||
        (pokemon5 == "alolan-persian") ||
        (pokemon5 == "sableye-mega") ||
        (pokemon5 == "sableye mega") ||
        (pokemon5 == "mega sableye") ||
        (pokemon5 == "mega-sableye") ||
        (pokemon5 == "aggron-mega") ||
        (pokemon5 == "aggron mega") ||
        (pokemon5 == "mega aggron") ||
        (pokemon5 == "mega-aggron") ||
        (pokemon5 == "manectric-mega") ||
        (pokemon5 == "manectric mega") ||
        (pokemon5 == "mega manectric") ||
        (pokemon5 == "mega-manectric") ||
        (pokemon5 == "rotom-frost") ||
        (pokemon5 == "rotom frost") ||
        (pokemon5 == "audino-mega") ||
        (pokemon5 == "audino mega") ||
        (pokemon5 == "mega audino") ||
        (pokemon5 == "mega-audino") ||
        (pokemon5 == "absol-mega") ||
        (pokemon5 == "mega absol") ||
        (pokemon5 == "absol mega") ||
        (pokemon5 == "mega-absol") ||
        (pokemon5 == "absol") ||
        (pokemon5 == "poliwrath") ||
        (pokemon5 == "primeape") ||
        (pokemon5 == "dodrio") ||
        (pokemon5 == "hitmonchan") ||
        (pokemon5 == "kangaskhan") ||
        (pokemon5 == "omastar") ||
        (pokemon5 == "kabutops") ||
        (pokemon5 == "articuno") ||
        (pokemon5 == "lanturn") ||
        (pokemon5 == "quagsire") ||
        (pokemon5 == "quilfish") ||
        (pokemon5 == "ludicolo") ||
        (pokemon5 == "sableye") ||
        (pokemon5 == "aggron") ||
        (pokemon5 == "manectric") ||
        (pokemon5 == "roselia") ||
        (pokemon5 == "claydol") ||
        (pokemon5 == "regirock") ||
        (pokemon5 == "gastrodon") ||
        (pokemon5 == "skuntank") ||
        (pokemon5 == "spiritomb") ||
        (pokemon5 == "froslass") ||
        (pokemon5 == "mesprit") ||
        (pokemon5 == "stoutland") ||
        (pokemon5 == "liepard") ||
        (pokemon5 == "audino") ||
        (pokemon5 == "lilligant") ||
        (pokemon5 == "carracosta") ||
        (pokemon5 == "jellicent") ||
        (pokemon5 == "eelektross") ||
        (pokemon5 == "golurk") ||
        (pokemon5 == "aurorus") ||
        (pokemon5 == "lycanroc") ||
        (pokemon5 == "mudsdale") ||
        (pokemon5 == "lurantis") ||
        (pokemon5 == "drampa") ||
        (pokemon5 == "clefairy") ||
        (pokemon5 == "haunter") ||
        (pokemon5 == "scyther") ||
        (pokemon5 == "gurdurr")
    ) {

        toon5 = 1;
        sixthPokemon.innerHTML = "Your sixth Pokemon sucks and there are many Pokemon that does this Pokemon's job better that you could have chosen instead.";

    }
    else if (
        (pokemon5 == "charizard") ||
        (pokemon5 == "exeggutor-alola") ||
        (pokemon5 == "alolan exeggutor") ||
        (pokemon5 == "exeggutor alola") ||
        (pokemon5 == "alolan-exeggutor") ||
        (pokemon5 == "charizard-mega-x") ||
        (pokemon5 == "mega charizard x") ||
        (pokemon5 == "charizard-mega-y") ||
        (pokemon5 == "mega charizard y") ||
        (pokemon5 == "charizard mega x") ||
        (pokemon5 == "mega-charizard-x") ||
        (pokemon5 == "charizard mega-y") ||
        (pokemon5 == "mega-charizard-y") ||
        (pokemon5 == "tauros") ||
        (pokemon5 == "typhlosion") ||
        (pokemon5 == "gallade") ||
        (pokemon5 == "gallade-mega") ||
        (pokemon5 == "mega gallade") ||
        (pokemon5 == "gallade mega") ||
        (pokemon5 == "mega-gallade") ||
        (pokemon5 == "samurott") ||
        (pokemon5 == "sawk") ||
        (pokemon5 == "archeops") ||
        (pokemon5 == "pyroar") ||
        (pokemon5 == "aromatisse") ||
        (pokemon5 == "minior") ||
        (pokemon5 == "blastoise") ||
        (pokemon5 == "golbat") ||
        (pokemon5 == "vileplume") ||
        (pokemon5 == "slowbro") ||
        (pokemon5 == "kingler") ||
        (pokemon5 == "hitmonlee") ||
        (pokemon5 == "weezing") ||
        (pokemon5 == "rhydon") ||
        (pokemon5 == "vaporeon") ||
        (pokemon5 == "aerodactyl") ||
        (pokemon5 == "aerodactyl-mega") ||
        (pokemon5 == "mega aerodactyl") ||
        (pokemon5 == "aerodactyl mega") ||
        (pokemon5 == "mega-aerodactyl") ||
        (pokemon5 == "xatu") ||
        (pokemon5 == "slowking") ||
        (pokemon5 == "steelix") ||
        (pokemon5 == "steelix-mega") ||
        (pokemon5 == "mega steelix") ||
        (pokemon5 == "steelix mega") ||
        (pokemon5 == "mega-steelix") ||
        (pokemon5 == "sneasel") ||
        (pokemon5 == "piloswine") ||
        (pokemon5 == "houndoom") ||
        (pokemon5 == "houndoom-mega") ||
        (pokemon5 == "mega houndoom") ||
        (pokemon5 == "houndoom mega") ||
        (pokemon5 == "mega-houndoom") ||
        (pokemon5 == "hitmontop") ||
        (pokemon5 == "miltank") ||
        (pokemon5 == "sceptile") ||
        (pokemon5 == "sceptile-mega") ||
        (pokemon5 == "sceptile mega") ||
        (pokemon5 == "mega sceptile") ||
        (pokemon5 == "mega-sceptile") ||
        (pokemon5 == "hariyama") ||
        (pokemon5 == "medicham") ||
        (pokemon5 == "medicham-mega") ||
        (pokemon5 == "mega medicham") ||
        (pokemon5 == "medicham mega") ||
        (pokemon5 == "mega-medicham") ||
        (pokemon5 == "torterra") ||
        (pokemon5 == "ambipom") ||
        (pokemon5 == "mismagius") ||
        (pokemon5 == "magmortar") ||
        (pokemon5 == "rotom") ||
        (pokemon5 == "seismitoad") ||
        (pokemon5 == "whimsicott") ||
        (pokemon5 == "scrafty") ||
        (pokemon5 == "sigilyph") ||
        (pokemon5 == "garbodor") ||
        (pokemon5 == "cinccino") ||
        (pokemon5 == "vanilluxe") ||
        (pokemon5 == "ferroseed") ||
        (pokemon5 == "klinklang") ||
        (pokemon5 == "cryogonal") ||
        (pokemon5 == "accelgor") ||
        (pokemon5 == "druddigon") ||
        (pokemon5 == "braviary") ||
        (pokemon5 == "delphox") ||
        (pokemon5 == "vivillon") ||
        (pokemon5 == "malamar") ||
        (pokemon5 == "clawitzer") ||
        (pokemon5 == "heliolisk") ||
        (pokemon5 == "diancie") ||
        (pokemon5 == "diancie-mega") ||
        (pokemon5 == "mega diancie") ||
        (pokemon5 == "diancie mega") ||
        (pokemon5 == "mega-diancie") ||
        (pokemon5 == "decidueye") ||
        (pokemon5 == "incineroar") ||
        (pokemon5 == "vikavolt") ||
        (pokemon5 == "comfrey") ||
        (pokemon5 == "passimian") ||
        (pokemon5 == "palossand") ||
        (pokemon5 == "sivally-steel") ||
        (pokemon5 == "sivally steel") ||
        (pokemon5 == "togedemaru") ||
        (pokemon5 == "dhelmise") ||
        (pokemon5 == "guzzlord")
    ) {

        toon5 = 2;
        sixthPokemon.innerHTML = "Your sixth Pokemon isn't good competitively can only be used situationally.";

    }

    else if (
        (pokemon5 == "venusaur") ||
        (pokemon5 == "kingdra") ||
        (pokemon5 == "venusaur-mega") ||
        (pokemon5 == "mega venusaur") ||
        (pokemon5 == "venusaur mega") ||
        (pokemon5 == "mega-venusaur") ||
        (pokemon5 == "exploud") ||
        (pokemon5 == "gigalith") ||
        (pokemon5 == "cofagrigus") ||
        (pokemon5 == "slurpuff") ||
        (pokemon5 == "barbaracle") ||
        (pokemon5 == "hoopa") ||
        (pokemon5 == "ribombee") ||
        (pokemon5 == "bruxish") ||
        (pokemon5 == "nidoqueen") ||
        (pokemon5 == "ninetales") ||
        (pokemon5 == "arcanine") ||
        (pokemon5 == "machamp") ||
        (pokemon5 == "cloyster") ||
        (pokemon5 == "marowak-alola") ||
        (pokemon5 == "alolan marowak") ||
        (pokemon5 == "marowak alola") ||
        (pokemon5 == "alolan-marowak") ||
        (pokemon5 == "jolteon") ||
        (pokemon5 == "snorlax") ||
        (pokemon5 == "feraligatr") ||
        (pokemon5 == "espeon") ||
        (pokemon5 == "umbreon") ||
        (pokemon5 == "forretress") ||
        (pokemon5 == "mantine") ||
        (pokemon5 == "donphan") ||
        (pokemon5 == "porygon2") ||
        (pokemon5 == "raikou") ||
        (pokemon5 == "linoone") ||
        (pokemon5 == "swellow") ||
        (pokemon5 == "gardevoir") ||
        (pokemon5 == "gardevoir-mega") ||
        (pokemon5 == "mega gardevoir") ||
        (pokemon5 == "gardevoir mega") ||
        (pokemon5 == "mega-gardevoir") ||
        (pokemon5 == "flygon") ||
        (pokemon5 == "milotic") ||
        (pokemon5 == "metagross") ||
        (pokemon5 == "metagross-mega") ||
        (pokemon5 == "mega metagross") ||
        (pokemon5 == "metagross mega") ||
        (pokemon5 == "mega-metagross") ||
        (pokemon5 == "registeel") ||
        (pokemon5 == "roserade") ||
        (pokemon5 == "honchkrow") ||
        (pokemon5 == "bronzong") ||
        (pokemon5 == "drapion") ||
        (pokemon5 == "toxicroak") ||
        (pokemon5 == "rhyperior") ||
        (pokemon5 == "yanmega") ||
        (pokemon5 == "rotom-mow") ||
        (pokemon5 == "uxie") ||
        (pokemon5 == "cresselia") ||
        (pokemon5 == "shaymin") ||
        (pokemon5 == "emboar") ||
        (pokemon5 == "escavalier") ||
        (pokemon5 == "galvantula") ||
        (pokemon5 == "mandibuzz") ||
        (pokemon5 == "virizion") ||
        (pokemon5 == "florges") ||
        (pokemon5 == "pangoro") ||
        (pokemon5 == "dragalge") ||
        (pokemon5 == "tyrantrum") ||
        (pokemon5 == "goodra") ||
        (pokemon5 == "noivern") ||
        (pokemon5 == "zygarde-10%") ||
        (pokemon5 == "lycanroc-dusk") ||
        (pokemon5 == "zygarde 10%") ||
        (pokemon5 == "lycanroc dusk") ||
        (pokemon5 == "araquanid") ||
        (pokemon5 == "salazzle") ||
        (pokemon5 == "bewear") ||
        (pokemon5 == "tsareena") ||
        (pokemon5 == "golisopod") ||
        (pokemon5 == "stakataka") ||
        (pokemon5 == "necrozma")
    ) {

        toon5 = 3;
        sixthPokemon.innerHTML = "Your sixth Pokemon is mediocre and will be difficult to use competitively.";

    }
    else if (
        (pokemon5 == "moltres") ||
        (pokemon5 == "venomoth") ||
        (pokemon5 == "entei") ||
        (pokemon5 == "sharpedo") ||
        (pokemon5 == "darmanitan") ||
        (pokemon5 == "sharpedo-mega") ||
        (pokemon5 == "mega sharpedo") ||
        (pokemon5 == "sharpedo mega") ||
        (pokemon5 == "mega-sharpedo") ||
        (pokemon5 == "zoroark") ||
        (pokemon5 == "reuniclus") ||
        (pokemon5 == "mienshao") ||
        (pokemon5 == "durant") ||
        (pokemon5 == "tornadus") ||
        (pokemon5 == "kyurem") ||
        (pokemon5 == "meloetta") ||
        (pokemon5 == "talonflame") ||
        (pokemon5 == "nidoking") ||
        (pokemon5 == "tentacruel") ||
        (pokemon5 == "magneton") ||
        (pokemon5 == "muk-alola") ||
        (pokemon5 == "alolan muk") ||
        (pokemon5 == "muk alola") ||
        (pokemon5 == "alolan-muk") ||
        (pokemon5 == "gengar") ||
        (pokemon5 == "starmie") ||
        (pokemon5 == "crobat") ||
        (pokemon5 == "gligar") ||
        (pokemon5 == "scizor") ||
        (pokemon5 == "scizor-mega") ||
        (pokemon5 == "mega scizor") ||
        (pokemon5 == "heracross") ||
        (pokemon5 == "heracross-mega") ||
        (pokemon5 == "mega heracross") ||
        (pokemon5 == "scizor mega") ||
        (pokemon5 == "mega-scizor") ||
        (pokemon5 == "heracross mega") ||
        (pokemon5 == "mega-heracross") ||
        (pokemon5 == "blissey") ||
        (pokemon5 == "suicune") ||
        (pokemon5 == "celebi") ||
        (pokemon5 == "swampert") ||
        (pokemon5 == "swampert-mega") ||
        (pokemon5 == "mega swampert") ||
        (pokemon5 == "swampert mega") ||
        (pokemon5 == "mega-swampert") ||
        (pokemon5 == "crawdaunt") ||
        (pokemon5 == "latias") ||
        (pokemon5 == "latias-mega") ||
        (pokemon5 == "mega-latias") ||
        (pokemon5 == "latias mega") ||
        (pokemon5 == "mega latias") ||
        (pokemon5 == "infernape") ||
        (pokemon5 == "empoleon") ||
        (pokemon5 == "lucario") ||
        (pokemon5 == "hippowdon") ||
        (pokemon5 == "togekiss") ||
        (pokemon5 == "mamoswine") ||
        (pokemon5 == "rotom-heat") ||
        (pokemon5 == "rotom heat") ||
        (pokemon5 == "azelf") ||
        (pokemon5 == "krookadile") ||
        (pokemon5 == "amoonguss") ||
        (pokemon5 == "alomomola") ||
        (pokemon5 == "chandelure") ||
        (pokemon5 == "haxorus") ||
        (pokemon5 == "bisharp") ||
        (pokemon5 == "hydreigon") ||
        (pokemon5 == "cobalion") ||
        (pokemon5 == "terrakion") ||
        (pokemon5 == "chesnaught") ||
        (pokemon5 == "doublade") ||
        (pokemon5 == "sylveon") ||
        (pokemon5 == "klefki") ||
        (pokemon5 == "volcanion") ||
        (pokemon5 == "primarina") ||
        (pokemon5 == "kommo-o") ||
        (pokemon5 == "kommo o") ||
        (pokemon5 == "nihilego") ||
        (pokemon5 == "zeraora")
    ) {

        toon5 = 4;
        sixthPokemon.innerHTML = "Your sixth Pokemon is a decent Pokemon that can be used competitively.";

    }
    else if (
        (pokemon5 == "ninetales-alola") ||
        (pokemon5 == "alolan ninetales") ||
        (pokemon5 == "alolan-ninetales") ||
        (pokemon5 == "ninetales alola") ||
        (pokemon5 == "alakazam") ||
        (pokemon5 == "gyarados") ||
        (pokemon5 == "dragonite") ||
        (pokemon5 == "azumarill") ||
        (pokemon5 == "alakazam-mega") ||
        (pokemon5 == "gyarados-mega") ||
        (pokemon5 == "mega-gyarados") ||
        (pokemon5 == "mega-alakazam") ||
        (pokemon5 == "mega alakazam") ||
        (pokemon5 == "mega gyarados") ||
        (pokemon5 == "alakazam mega") ||
        (pokemon5 == "gyarados mega") ||
        (pokemon5 == "breloom") ||
        (pokemon5 == "salamence") ||
        (pokemon5 == "salamence-mega") ||
        (pokemon5 == "mega-salamence") ||
        (pokemon5 == "salamence mega") ||
        (pokemon5 == "mega salamence") ||
        (pokemon5 == "latios") ||
        (pokemon5 == "latios-mega") ||
        (pokemon5 == "mega-latios") ||
        (pokemon5 == "latios mega") ||
        (pokemon5 == "mega latios") ||
        (pokemon5 == "staraptor") ||
        (pokemon5 == "weavile") ||
        (pokemon5 == "porygon-z") ||
        (pokemon5 == "porygon z") ||
        (pokemon5 == "manaphy") ||
        (pokemon5 == "conkeldurr") ||
        (pokemon5 == "scolipede") ||
        (pokemon5 == "thunderus") ||
        (pokemon5 == "thunderus-therian") ||
        (pokemon5 == "thunderus therian") ||
        (pokemon5 == "diggersby") ||
        (pokemon5 == "hoopa-unbound") ||
        (pokemon5 == "hoopa unbound") ||
        (pokemon5 == "buzzwole") ||
        (pokemon5 == "xurkitree") ||
        (pokemon5 == "blacephalon") ||
        (pokemon5 == "celesteela") ||
        (pokemon5 == "chansey") ||
        (pokemon5 == "clefable") ||
        (pokemon5 == "excadrill") ||
        (pokemon5 == "ferrothorn") ||
        (pokemon5 == "garchomp") ||
        (pokemon5 == "gliscor") ||
        (pokemon5 == "greninja") ||
        (pokemon5 == "ash-greninja") ||
        (pokemon5 == "ash greninja") ||
        (pokemon5 == "hawlucha") ||
        (pokemon5 == "heatran") ||
        (pokemon5 == "jirachi") ||
        (pokemon5 == "kartana") ||
        (pokemon5 == "keldeo") ||
        (pokemon5 == "keldeo-resolute") ||
        (pokemon5 == "keldeo resolute") ||
        (pokemon5 == "kyurem-black") ||
        (pokemon5 == "kyurem black") ||
        (pokemon5 == "landorus-therian") ||
        (pokemon5 == "landorus therian") ||
        (pokemon5 == "magearna") ||
        (pokemon5 == "magnezone") ||
        (pokemon5 == "mew") ||
        (pokemon5 == "mimikyu") ||
        (pokemon5 == "pelipper") ||
        (pokemon5 == "rotom-wash") ||
        (pokemon5 == "rotom wash") ||
        (pokemon5 == "serperior") ||
        (pokemon5 == "skarmory") ||
        (pokemon5 == "tangrowth") ||
        (pokemon5 == "toxapex") ||
        (pokemon5 == "tyranitar") ||
        (pokemon5 == "victini") ||
        (pokemon5 == "volcarona") ||
        (pokemon5 == "zapdos") ||
        (pokemon5 == "tapu-bulu") ||
        (pokemon5 == "tapu bulu") ||
        (pokemon5 == "tapu-fini") ||
        (pokemon5 == "tapu fini") ||
        (pokemon5 == "tapu-koko") ||
        (pokemon5 == "tapu koko") ||
        (pokemon5 == "tapu-lele") ||
        (pokemon5 == "tapu lele") ||
        (pokemon5 == "tornadus-therian") ||
        (pokemon5 == "tornadus therian")
    ) {

        toon5 = 5;
        sixthPokemon.innerHTML = "Your sixth Pokemon is a great Pokemon that competes with others well.";

    }
    else if (
        (pokemon5 == "mewtwo") ||
        (pokemon5 == "ho-oh") ||
        (pokemon5 == "ho oh") ||
        (pokemon5 == "kyurem-white") ||
        (pokemon5 == "kyurem white") ||
        (pokemon5 == "white-kyurem") ||
        (pokemon5 == "white kyurem") ||
        (pokemon5 == "lugia") ||
        (pokemon5 == "blaziken") ||
        (pokemon5 == "giratina") ||
        (pokemon5 == "kyogre") ||
        (pokemon5 == "groudon") ||
        (pokemon5 == "giratina-origin") ||
        (pokemon5 == "shaymin-sky") ||
        (pokemon5 == "origin giratina") ||
        (pokemon5 == "sky shaymin") ||
        (pokemon5 == "rayquaza") ||
        (pokemon5 == "deoxys") ||
        (pokemon5 == "phermosa") ||
        (pokemon5 == "marshadow") ||
        (pokemon5 == "genesect") ||
        (pokemon5 == "aegislash") ||
        (pokemon5 == "dialga") ||
        (pokemon5 == "palkia") ||
        (pokemon5 == "reshiram") ||
        (pokemon5 == "zekrom") ||
        (pokemon5 == "arceus") ||
        (pokemon5 == "landorus") ||
        (pokemon5 == "zygarde-complete") ||
        (pokemon5 == "zygarde complete") ||
        (pokemon5 == "deoxys-defense") ||
        (pokemon5 == "deoxys defense") ||
        (pokemon5 == "defense-deoxys") ||
        (pokemon5 == "defense deoxys") ||
        (pokemon5 == "deoxys-speed") ||
        (pokemon5 == "deoxys speed") ||
        (pokemon5 == "speed-deoxys") ||
        (pokemon5 == "speed deoxys") ||
        (pokemon5 == "deoxys-attack") ||
        (pokemon5 == "deoxys attack") ||
        (pokemon5 == "attack-deoxys") ||
        (pokemon5 == "attack deoxys") ||
        (pokemon5 == "zygarde") ||
        (pokemon5 == "xerneas") ||
        (pokemon5 == "yveltal") ||
        (pokemon5 == "solgaleo") ||
        (pokemon5 == "darkrai") ||
        (pokemon5 == "necrozma-ultra") ||
        (pokemon5 == "ultra-necrozma") ||
        (pokemon5 == "necrozma ultra") ||
        (pokemon5 == "ultra necrozma") ||
        (pokemon5 == "necrozma-dusk-mane") ||
        (pokemon5 == "dusk-mane-necrozma") ||
        (pokemon5 == "necrozma dusk mane") ||
        (pokemon5 == "dusk mane necrozma") ||
        (pokemon5 == "necrozma-dawn-wings") ||
        (pokemon5 == "dawn-wings-necrozma") ||
        (pokemon5 == "necrozma dawn wings") ||
        (pokemon5 == "dawn wings necrozma") ||
        (pokemon5 == "lunala") ||
        (pokemon5 == "blaziken-mega") ||
        (pokemon5 == "blaziken mega") ||
        (pokemon5 == "mega blaziken") ||
        (pokemon5 == "mega-blaziken") ||
        (pokemon5 == "mewtwo-mega-x") ||
        (pokemon5 == "mega mewtwo x") ||
        (pokemon5 == "mewtwo-mega-y") ||
        (pokemon5 == "mega mewtwo y") ||
        (pokemon5 == "mewtwo mega x") ||
        (pokemon5 == "mega-mewtwo-x") ||
        (pokemon5 == "mewtwo mega-y") ||
        (pokemon5 == "mega-mewtwo-y") ||
        (pokemon5 == "mewtwo-mega-x") ||
        (pokemon5 == "mewtwo-mega-y") ||
        (pokemon5 == "mewtwo-mega-x") ||
        (pokemon5 == "mewtwo-mega-y")
    ) {

        toon5 = 6;
        sixthPokemon.innerHTML = "Your sixth Pokemon is an excellent top-tier Pokemon among the best.";

    }
    
    else if (
        (pokemon5.length == 0)
    ) {
        
        toon5 = 0;
        pokemon5.innerHTML = "Please enter a Pokemon in the sixth slot.";
        
    }
    
    else {

        toon5 = 0;
        sixthPokemon.innerHTML = "Sorry, your sixth Pokemon is either misspelled or unranked. Please check your spelling and/or your Pokemon choices.";

    }
    
    // adds up all of the points for the team and checks which category its in
    if (toon1 + toon2 + toon3 + toon4 + toon5 + toon6 >= 31) {
        
        // updates display for the team rating
        teamRater.innerHTML = "Your team is S-Tier. You have an excellent team and you can take on the best teams competitively.";
    }
    if ((toon1 + toon2 + toon3 + toon4 + toon5 + toon6 <= 31) && (toon1 + toon2 + toon3 + toon4 + toon5 + toon6 >= 25)) {
        teamRater.innerHTML = "Your team is A-Tier. You have a good team that is competitive.";
    }
    if ((toon1 + toon2 + toon3 + toon4 + toon5 + toon6 <= 24) && (toon1 + toon2 + toon3 + toon4 + toon5 + toon6 >= 18)) {
        teamRater.innerHTML = "Your team is B-Tier. You have a decent team that can become competitive.";
    }
    if ((toon1 + toon2 + toon3 + toon4 + toon5 + toon6 <= 17) && (toon1 + toon2 + toon3 + toon4 + toon5 + toon6 >= 11)) {
        teamRater.innerHTML = "Your team is C-Tier. You have a mediocre team that will struggle competitively.";
    }
    if ((toon1 + toon2 + toon3 + toon4 + toon5 + toon6 <= 10)) {
        teamRater.innerHTML = "Your team is D-Tier. You have a bad team that isn't competitive at all.";
    }
    if ((toon1 + toon2 + toon3 + toon4 + toon5 + toon6 == 0)) {
        teamRater.innerHTML = "Please enter at least one Pokemon.";
    }
});
