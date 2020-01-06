var mobile = $('#detecteMobile').css("display");
var refreshInitialHeight  = window.innerHeight;

	$('#menuManette').css({'top':refreshInitialHeight-170});

$(document).ready(function(){
	var initialScreenSizeHeight  = window.innerHeight; // heuteur au chargement
	var initialScreenSizeWidth = window.innerWidth;
	var oImage = new Image();

	oImage.onload = function(){
		img=document.getElementById("imgPanneau");
		img.src = oImage.src;
		$('#presentation #fondPanneau').css({'width':initialScreenSizeWidth-60, 'height': initialScreenSizeHeight -200});
		//var widthImgInit = img.width;
		var widthImg = img.width;
		var heightInit = img.height;
		$('#presentation #btnPanneau').css({'width':widthImg, 'height':heightInit});
		$('#presentation #btnPanneau img').css({'height':heightInit/10});
	 	resizeDiv(initialScreenSizeHeight, initialScreenSizeWidth, initialScreenSizeHeight, initialScreenSizeWidth);
	};
	oImage.src = 'public/img/fond/panneau.jpg';

	$(window).resize(function(){
		var haut = window.innerHeight;
		var larg = window.innerWidth;
		var oImage = new Image();

		oImage.onload = function(){
			img=document.getElementById("imgPanneau");
			img.src = oImage.src;
			$('#presentation #fondPanneau').css({'width':larg-60, 'height': haut-200});
			var widthImgInit = img.width;
		
			var widthImg = img.width;
			var heightInit = img.height;
			$('#presentation #btnPanneau').css({'width':widthImg, 'height':heightInit});
			$('#presentation #btnPanneau img').css({'height':heightInit/10});

			if((initialScreenSizeWidth == larg) && (initialScreenSizeHeight != haut)){ // si changement de hauteur mais pas de largeur, c'est clavier mobile/tablette qui apparait
				var diffSize = initialScreenSizeHeight - haut;
				resizeDiv(haut, larg, initialScreenSizeHeight, initialScreenSizeWidth);
				resizeDivFormMobile(initialScreenSizeHeight, diffSize);
			}
			else if((initialScreenSizeWidth == larg) && (initialScreenSizeHeight == haut)){
				resizeDiv(haut, larg, initialScreenSizeHeight, initialScreenSizeWidth);
			}else{ // en cas de rotation écran, les 2 valeurs change
				resizeDiv(haut, larg, initialScreenSizeHeight, initialScreenSizeWidth);
			}
		 	
		};
		oImage.src = 'public/img/fond/panneau.jpg';
	})
});

// redimentionne sur mobile pour pallier au clavier virtuel qui pousse tout ce qui est position absolute
function resizeDivFormMobile(haut, diffSize){
	$('#contact').css({'height':haut+1});
	$('#menuManette').css({'top':'-200px'});
	$('#contact .slidePortfolio').css({'height':haut+diffSize});
	$('#contact .slidePortfolio form').css({'min-height': haut+diffSize+300});
	$('#pigeon').css({'right': '-60px'});
	//$('#contact #confirmSendMail')
};

//redimentionn les fenetres lors d'un changement de taille (mode pausage)
function resizeDiv(haut, larg, heightInit, widthInit){

	$('#containTransform').css({'height': haut-200});
	$('#slider > div').css({'height': '100%'});
	$('#containeSlider').css({'width':larg, 'height':haut});

	$('#portfolio').css({'width':larg+1, 'height':haut+1});
	$('#contact').css({'width':larg+1, 'height':haut+1});

	$('#menuManette').css({'top':haut-170});
	$('.slidePortfolio').css({'height': haut-200});
	$('#contact .slidePortfolio').css({'min-height':haut-200});
	$('#pigeon').css({'right': larg+29})
	$('#confirmSendMail').css({'right': larg+29})
	$('#contact .slidePortfolio form').css({'min-height': haut+200});

	$('#presentation').css({'width':larg+1, 'height':haut+1});
	$('#presentation div.slidePortfolio').css({'width':larg-60});

	$('#presentation #fondPanneau').css({'width':larg-60, 'height': haut-200});

	$('#parcours').css({'width':larg+1, 'height':haut+1});
	$('#politique').css({'width':larg+1, 'height':haut+1});
	$('#mention').css({'width':larg+1, 'height':haut+1});
	$('#siteWeb').css({'width':larg+1, 'height':haut+1});
	$('#coinHaut').css({'width':larg+1, 'height':haut+1});
	$('#coinBas').css({'width':larg+1, 'height':haut+1});
	$('#parcours > div').css({'height': haut});
	$('#parcours div.slidePortfolio').css({'height': haut-200});
	
	$('#menuPortFolio').css({'height': haut+1});
	$('#menuPortFolio .flexColumn.containSlide').css({'height': haut-70});

	$('#siteWeb > div:nth-child(1)').css({'height': haut+1});
	$('#slide_grap').css({'height': haut-200});
	$('#slide_tattoo').css({'height': haut-200});

	
	if(mobile == 'block'){
		$('#slide_web').css({'height': haut-150});
		$('#slide_web #containtPictoSiteWeb').css({'height': '150px', 'width':$('#slide_web').width()});
		$('#slide_web #descSiteWeb').css({'height': (haut-150)/2, 'width': $('#slide_web').width()});
	}else{
		$('#slide_web').css({'height': haut-200});
		$('#slide_web #containtPictoSiteWeb').css({'height': '200px', 'width':$('#slide_web').width()});
		$('#slide_web #descSiteWeb').css({'height': (haut-200)/2, 'width': $('#slide_web').width()});
	}

	if(larg <= 499){
		$('#menuPortFolio .flexColumn.containSlide').css({'height': haut-110});
	}
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
					// MENU ANIMATION SITE
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// déplace l'affichage du site
function menuManette(btnManette, styleStartSelect, topDiv, leftDiv){
	var btnParent = $(btnManette).parent().attr('id')
	$('#transformTranslate').fadeIn(200);
	$('#containeSlider div#slider').delay(300).animate({'left':leftDiv, 'top' : topDiv},0);
	if((btnParent == 'btnMention') || (btnParent == 'btnPolitique')){
		$(btnManette).animate({'height': '37px', 'width': '37px', 'top':'4px', 'left':'5px'},100);
		$(btnManette).animate({'height': '40px', 'width': '40px', 'top':'2px', 'left':'2px'},100);
	}else{
		$(btnManette).animate({'height': '33px', 'width': '33px', 'top':'3px', 'left':'3px'},100);
		$(btnManette).animate({'height': '35px', 'width': '35px', 'top':'2px', 'left':'2px'},100);
	}

	$('#transformTranslate').delay(300).fadeOut(500);
	$('#menuStarSelect div img').css({'cursor':'default'});
	$('#menuStarSelect div.firstBtn span').css({"display":styleStartSelect});
	$('#menuStarSelect div.secondBtn span').css({"display":styleStartSelect});
	$('#menuStarSelect div.firstBtn hr').css({"display":styleStartSelect});
	$('#menuStarSelect div.secondBtn hr').css({"display":styleStartSelect});

}

$(' div#btnParcours img').click(function(){
	menuManette(this, 'none', '0%', '50%');
})

$(' div#btnPortfolio img').click(function(){
	menuManette(this, 'block', '-100%', '150%');
})

$(' div#btnPresentation img').click(function(){
	menuManette(this, 'none', '-100%', '50%');
})

$(' div#btnSiteWeb img').click(function(){
	menuManette(this, 'none', '-100%', '-50%');
})

$(' div#btnContact img').click(function(){
	menuManette(this, 'none', '-200%', '50%');
})

$(' div#btnMention img').click(function(){
	menuManette(this, 'none', '0%', '-50%');
})

$(' div#btnPolitique img').click(function(){
	menuManette(this, 'none', '-200%', '150%');
})

// evenement clavier PC
window.addEventListener("keydown", function(e) { 
    if(e.keyCode == 38){//haut
		$(' div#btnParcours img').click();
    }else if(e.keyCode == 37){//left
		$(' div#btnPortfolio img').click();
    }else if(e.keyCode == 39){//right
		$(' div#btnSiteWeb img').click();
    }else if(e.keyCode == 40){//down
		$(' div#btnContact img').click();
    }
});

//changement des images des bouton lors du hover
$(function() {
	$('div#btnParcours img').mouseover(function() {
	$(this).attr('src', "public/img/btn/top2.png");
	}).mouseout(function() {
	$(this).attr('src', "public/img/btn/top.png");
	});
});
$(function() {
	$('div#btnPortfolio img').mouseover(function() {
	$(this).attr('src', "public/img/btn/left2.png");
	}).mouseout(function() {
	$(this).attr('src', "public/img/btn/left.png");
	});
});
$(function() {
	$('div#btnPresentation img').mouseover(function() {
	$(this).attr('src', "public/img/btn/home.png");
	}).mouseout(function() {
	$(this).attr('src', "public/img/btn/center.png");
	});
});
$(function() {
	$('div#btnSiteWeb img').mouseover(function() {
	$(this).attr('src', "public/img/btn/right2.png");
	}).mouseout(function() {
	$(this).attr('src', "public/img/btn/right.png");
	});
});
$(function() {
	$('div#btnContact img').mouseover(function() {
	$(this).attr('src', "public/img/btn/down2.png");
	}).mouseout(function() {
	$(this).attr('src', "public/img/btn/down.png");
	});
});
$(function() {
	$('div#btnMention img').mouseover(function() {
	$(this).attr('src', "public/img/btn/mention.png");
	}).mouseout(function() {
	$(this).attr('src', "public/img/btn/center.png");
	});
});
$(function() {
	$('div#btnPolitique img').mouseover(function() {
	$(this).attr('src', "public/img/btn/politique.png");
	}).mouseout(function() {
	$(this).attr('src', "public/img/btn/center.png");
	});
});

// changement des images des bouton du panneau d'accueil
$(function() {
	$('#btnPanneau #linkContact').mouseover(function() {
	$(this).attr('src', "public/img/btn/home/contact2.png");
	}).mouseout(function() {
	$(this).attr('src', "public/img/btn/home/contact.png");
	});
});
$(function() {
	$('#btnPanneau #linkWeb').mouseover(function() {
	$(this).attr('src', "public/img/btn/home/site2.png");
	}).mouseout(function() {
	$(this).attr('src', "public/img/btn/home/site.png");
	});
});
$(function() {
	$('#btnPanneau #linkParcours').mouseover(function() {
	$(this).attr('src', "public/img/btn/home/parcour2.png");
	}).mouseout(function() {
	$(this).attr('src', "public/img/btn/home/parcour.png");
	});
});
$(function() {
	$('#btnPanneau #linkPort').mouseover(function() {
	$(this).attr('src', "public/img/btn/home/portfolio2.png");
	}).mouseout(function() {
	$(this).attr('src', "public/img/btn/home/portfolio.png");
	});
});

//simule le click sur les bouton de la manette lors des click sur le pannea centrale accueil
$('#btnPanneau #linkContact').click(function(){
	$(' div#btnContact img').click();
})
$('#btnPanneau #linkWeb').click(function(){
	$(' div#btnSiteWeb img').click();
})
$('#btnPanneau #linkParcours').click(function(){
	$(' div#btnParcours img').click();
})
$('#btnPanneau #linkPort').click(function(){
	$(' div#btnPortfolio img').click();
})


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
					// PARCOURS CV
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var childJob = $('#parcoursJob').children('div.hideChild');
var childForm = $('#parcoursForm').children('div.hideChild');

$('#btnJobForm #titleExp').click(function(){
	startCvAnim('#divJob', '#divParcours');
});
$('#parcoursJob').click(function(){
	$('#btnJobForm #titleExp').click();
});

$('#btnJobForm #titleForm').click(function(){
	startCvAnim('#divParcours', '#divJob');
});
$('#parcoursForm').click(function(){
	$('#btnJobForm #titleForm').click();
});

// ouvre et referme le cv (experience pro et formation) avec effet ascenseur 
function startCvAnim(showChild, hideChild){
	$('#partOne').clearQueue();
	$(showChild).clearQueue();
	$(hideChild).clearQueue();

	var height = $(showChild).css("height");
	console.log(height)
	
	if(height != '0px'){ 
		$(showChild+' > div').animate({'opacity':'0'},500)
		$(showChild).animate({'height':'0px'},500)
	}else{
		var heightForm = $(showChild+' > div').outerHeight()
		console.log(heightForm)

		$(showChild+' > div').animate({'opacity':'9'},1500)
    	$(showChild).animate({'height': heightForm+20},500)

		$(hideChild).animate({'height':'0px'},500)
		$(hideChild+' > div').animate({'opacity':'0'},500)

	}
}







// partie compétence, animation du cercle
$('#btnGraphisme h4').click(function(){
	$('#btnInformatique h4').css({'color':'white'});
	$('#btnGraphisme h4').css({'color': '#a992f4'});

	$('#menuCercle > div:nth-child(1) > hr:nth-child(2)').fadeOut(200);
	$('#menuCercle > div:nth-child(2) > hr:nth-child(2)').fadeIn(200);

	$('#compA').fadeOut(100); // affichage dégradé
	$('#compB').fadeOut(200);
	$('#compC').fadeOut(300);
	$('#compD').fadeOut(400);
	$('#compE').fadeOut(500);
	$('#compF').fadeOut(600);
	$('#compG').fadeOut(700);
	$('#compH').fadeOut(800);
	$('#compI').fadeOut(900);

	$('#compJ').fadeIn(300);
	$('#compK').fadeIn(600);
})
$('#btnInformatique h4').click(function(){
	$('#btnGraphisme h4').css({'color':'white'});
	$('#btnInformatique h4').css({'color': '#a992f4'});

	$('#menuCercle > div:nth-child(1) > hr:nth-child(2)').fadeIn(200);
	$('#menuCercle > div:nth-child(2) > hr:nth-child(2)').fadeOut(200);

	$('#compA').fadeIn(100);
	$('#compB').fadeIn(200);
	$('#compC').fadeIn(300);
	$('#compD').fadeIn(400);
	$('#compE').fadeIn(500);
	$('#compF').fadeIn(600);
	$('#compG').fadeIn(700);
	$('#compH').fadeIn(800);
	$('#compI').fadeIn(900);

	$('#compJ').fadeOut(300);
	$('#compK').fadeOut(600);
})
$('#btnCercle div.pictoComp').click(function(){
	startCompetenceTextAnim(this);
})

$('#bulleCercle').click(function(){
	$('#bulleCercle').clearQueue();
	$('#bulleCercle > div').clearQueue();
	$('#bulleCercle').delay(100).animate({'width':'0px', 'height':'0px', 'padding': '0px'}, 500);
	$('#bulleCercle > div').fadeOut(200);
})

// affichage des texte expliquant les compétence
function startCompetenceTextAnim(btnSpan){
	var recupClass = $(btnSpan).attr('id');
	$('#bulleCercle > div').clearQueue();
	$('#bulleCercle').clearQueue();
	$('#bulleCercle div.'+recupClass).clearQueue();

	if(($('#bulleCercle').children()).is(":visible")){ 
		$('#bulleCercle').delay(0).animate({'width':'0px', 'height':'0px', 'padding': '0px'}, 200);
		$('#bulleCercle > div').fadeOut(0);
	}
		$('#bulleCercle').animate({'width':'2px'}, 0);

		$('#bulleCercle').delay(100).animate({'height':'200px'}, 100);
		$('#bulleCercle').delay(100).animate({'width':'280px', 'height':'200px', 'padding': '10px'}, 500);

		$('#bulleCercle div.'+recupClass).delay(1000).fadeIn(200);
}

$('#bulleCercle span.showGraph').click(function(){
	$('#btnPortfolio img').click();
})
$('#bulleCercle span.showSite').click(function(){
	$('#btnSiteWeb img').click();
})




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
					// CONTACT FORMULAIRE
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var regPseudo  = /^[a-zA-Z0-9]{3,}$/; 
var regMail    = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;

//----------------------------------------------------------------------------------------------------------------
	$('#userMail').change(function(){

		var value = $('#userMail').val();
		if(value.length == 0){
			$('div.messErrorForm p.userMail').text('Ca va être compliqué de vous répondre...');
		}
		else if(!regMail.test(value)){
			$('div.messErrorForm p.userMail').text('Je ne pourrais pas vous répondre sur cette adresse...');
		}
		else
		{
			$('div.messErrorForm p.userMail').text('');
		}		
	});
	//----------------------------------------------------------------------------------------------------------------
	$('#userName').change(function(){
		var value = $('#userName').val();
		if(value.length == 0)
		{
			$('div.messErrorForm p.userName').text('Votre nom?');
		}
		else if(!regPseudo.test(value))
		{
			$('div.messErrorForm p.userName').text('Avec 3 lettres se sera mieux.');
		}
		else{
			$('div.messErrorForm p.userName').text('');

		}		
	});

		//----------------------------------------------------------------------------------------------------------------
	$('#userMess').change(function(){
		var value = $('#userMess').val();
		if(value.length == 0)
		{
			$('div.messErrorForm p.userMess').text('On aurait pas oublié le petit message?');
		}

		else{
			$('div.messErrorForm p.userMess').text('');

		}		
	});
		//----------------------------------------------------------------------------------------------------------------
	$('#sendMail').click(function(e){
		e.preventDefault(); // bloque le comportement par défault. (évite le rechargement de la page)
		$('#contact #confirmSendMail #confirmSend').text('');

		var valueMail = $('#userMail').val();
		var valueName = $('#userName').val();
		var valueMess = $('#userMess').val();

		if((valueMail == "") && (valueName == "")){
			$('div.messErrorForm p.userMail').text('Ca va être compliqué de vous répondre...');
			$('div.messErrorForm p.userName').text('Votre nom?');
		}


		if(($('div.messErrorForm p.userMess').text() == "") && ($('div.messErrorForm p.userName').text() == "") && ($('div.messErrorForm p.userMail').html() == "")){

			$.post('index.php?action=sendMail', {userMail:valueMail, userMess:valueMess ,userName:valueName }, function(data){
				var aData = JSON.parse(data);
				if(aData['errorMail'] != ''){
					$('#contact p.userMail').html(aData['errorMail']);
				}
				if(aData['errorName'] != ''){
					$('#contact p.userName').html(aData['errorName']);
				}
				if(aData['errorMess'] != ''){
					$('#contact p.userMess').html(aData['errorMess']);
				}
				if((aData['errorMail'] == '') && (aData['errorName'] == '') && (aData['errorMess'] == '')){
					$('#contact #confirmSendMail').delay(100).animate({'width':'300px', 'height':'150px'},300);
					$('#contact #confirmSendMail #confirmSend').delay(400).fadeIn(200);
					$('#contact #confirmSendMail #confirmSend').text('Votre message à bien été envoyé !  A bientôt !');
					$('#contact #confirmSendMail #confirmSend').delay(1000).fadeOut(200);
					$('#contact #confirmSendMail').delay(1600).animate({'width':'0px', 'height':'0px'},200);
				}

				return false;
			});
		}


	}); 

		//----------------------------------------------------------------------------------------------------------------
				//----------------------------------------------------------------------------------------------------------------
var mobile = $('#detecteMobile').css("display");
var haut = $("#contact").height();

$("#contact #pigeon img").hover(function(){
	$(this).clearQueue();
	$(this).attr('src',"public/img/deco/pigeon2.png");

},function(){
$(this).attr('src',"public/img/deco/pigeon1.png");
})


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
					// PORTFOLIO
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



function playGraphTattoo(divShow, divHide, fullImgHide){
	$(divShow).animate({'opacity':'9', 'z-index': '105'},100);
	$(divHide).animate({'opacity':'0', 'z-index': '104'},0);
	$(divShow).css({'display':'flex'});
	$(divHide).fadeOut(0);
	$(fullImgHide).fadeOut(0);
	
}

$('#menuStarSelect div.firstBtn img').click(function(){
	$(this).animate({'height': '17px', 'width': '66px'},100);
	$(this).animate({'height': '18px', 'width': '70px'},100);
	playGraphTattoo('.slidePortfolio div#slide_grap', '.slidePortfolio div#slide_tattoo', '.slidePortfolio div#fullImgTattoo');
})

$('span#btn_grap').click(function(){
	playGraphTattoo('.slidePortfolio div#slide_grap', '.slidePortfolio div#slide_tattoo', '.slidePortfolio div#fullImgTattoo');
})
$('#menuStarSelect div.secondBtn img').click(function(){
	$(this).animate({'height': '17px', 'width': '66px'},100);
	$(this).animate({'height': '18px', 'width': '70px'},100);
	playGraphTattoo('.slidePortfolio div#slide_tattoo', '.slidePortfolio div#slide_grap', '.slidePortfolio div#fullImgGrap');
})

$('span#btn_tattoo').click(function(){
	playGraphTattoo('.slidePortfolio div#slide_tattoo', '.slidePortfolio div#slide_grap', '.slidePortfolio div#fullImgGrap');
})

$('.slidePortfolio div#slide_tattoo div.thumbnail img').click(function(){
showPortfolio('.slidePortfolio div#fullImgTattoo', '.slidePortfolio div#fullImgTattoo div', '.slidePortfolio div#fullImgGrap div', this, '#slide_tattoo', 'span#btn_grap', '#menuStarSelect div.firstBtn img')
});

$('.slidePortfolio div#slide_grap div.thumbnail img').click(function(){
showPortfolio('.slidePortfolio div#fullImgGrap', '.slidePortfolio div#fullImgGrap div', '.slidePortfolio div#fullImgTattoo div', this, '#slide_grap', 'span#btn_tattoo', '#menuStarSelect div.secondBtn img');
});


function showPortfolio(divContainFullSize, divFullSize, divFullSize2, imgThumb, divContain, btn, btn2){
	$(divContain+' img').css({'box-shadow': 'unset'});

	var src_thumb_Img = $(imgThumb).attr('src');
	var source = src_thumb_Img.split("/");
	var sizeSource = source.length;
	var src_Img="";

	if(source[sizeSource-2]=="thumbGraph"){
		for(var i = 0 ; i<sizeSource-2 ; i++){
			src_Img+=source[i]+"/";
		}
		src_Img+="grap/"+source[sizeSource-1];
	}
	if(source[sizeSource-2]=="thumbTattoo"){
		for(var i = 0 ; i<sizeSource-2 ; i++){
			src_Img+=source[i]+"/";
		}
		src_Img+="tattoo/"+source[sizeSource-1];
	}
	

	var hautDiv = $(divContain).height();
	var largDiv = $(divContain).width();

	$(divContainFullSize).css({'width':largDiv, 'height': hautDiv})
	$(imgThumb).css({'box-shadow': '0px 0px 5px black'});
	$(divFullSize).html('<img src="'+src_Img+'">');
	$(divFullSize).css({'z-index':'106', 'box-shadow':'0px 0px 35px black'});
	$(divFullSize+' img').css({'max-width':'100%', 'max-height':hautDiv, 'height': 'auto'})
	$(divContainFullSize).fadeIn(600);

	$(divFullSize).click(function(){
		closeFullImg(divFullSize, imgThumb, divContainFullSize);
	})
}

function closeFullImg(divFullSize, imgThumb, divContainFullSize){
		$(divFullSize).html('');
		$(divContainFullSize).fadeOut(0);
		$(divFullSize).css({'z-index':'104', 'box-shadow': 'unset'});
		$(imgThumb).css({'box-shadow': 'unset'});
}


$('#menuStarSelect span').hover(function(){ 
	$(this).next().clearQueue();
	var fontSize = $('#menuStarSelect span').css('font-size');

	if(fontSize == '12.8px'){
		$(this).next().animate({'width':'70px', 'opacity':'9'},200)
	}else{
		$(this).next().animate({'width':'90px', 'opacity':'9'},200)
	}
	
},function(){
	$(this).next().animate({'width':'0', 'opacity':'0'},200)

})

//****************************************************************************************************************
var mobile = $('#detecteMobile').css("display");

$('#pictoSiteWeb div').hover(function(){
	$(this).children('img').clearQueue();
	$(this).children('p').clearQueue();
	if(mobile == 'block'){
		$(this).children('img').animate({'height': '110px', 'bottom':'0'},100)
		$(this).children('img').animate({'height': '120px', 'bottom':'20px'},100)
		$(this).children('img').animate({'height': '115px', 'bottom':'-115px', 'width':'10px'},500)
	}else{
		$(this).children('img').animate({'height': '145px', 'bottom':'0'},100)
		$(this).children('img').animate({'height': '155px', 'bottom':'20px'},100)
		$(this).children('img').animate({'height': '150px', 'bottom':'-155px', 'width':'10px'},500)
	}

},function(){
	if(mobile == 'block'){
		$(this).children('img').animate({'height': '120px', 'bottom':'20px', 'width':'140px'})
		$(this).children('img').animate({'height': '115px', 'bottom':'5px', 'width':'140px'})
	}else{
		$(this).children('img').animate({'height': '155px', 'bottom':'20px', 'width':'170px'})
		$(this).children('img').animate({'height': '150px', 'bottom':'5px', 'width':'170px'})
	}
})

var nbrChildPicto = $('#pictoSiteWeb').children('div');
if(mobile == 'block'){
	var largContainer = nbrChildPicto.length * 150;
}else{
	var largContainer = nbrChildPicto.length * 200;
}
$('#pictoSiteWeb').css({'width': largContainer});

var btnSlider = "";

for(var i = 0 ; i < nbrChildPicto.length ; i++){
	var srcImgSiteWeb = $(nbrChildPicto[i]).children('img').attr('src');
	btnSlider += '<div><img src="'+srcImgSiteWeb+'" id="img'+i+'" alt="image responsive"></div>';
}


$('#btnsliderWeb').html(btnSlider);

$('#btnsliderWeb img').click(function(){
	$('#btnsliderWeb div').css({'box-shadow': 'none'})
	$(this).parent().css({'box-shadow': '0 0 5px rgb(255, 255, 255)'})
	$("#legendeSiteWeb").fadeOut(0);
	var recupClass = $(this).attr('id');
	var nbrPosition = recupClass.substr(recupClass.length - 1); //récup le dernier caractère de l'id (un numéro de position)
	var intPosition = parseInt(nbrPosition); // convertit en int le caractère

	$('#pictoSiteWeb').css({'transform': 'unset', 'right':'unset'},500);

if(mobile == 'block'){
	var left = $('#slide_web').width()/2 - 150/2;
	var leftPos = left-150*intPosition;
}else{
	var left = $('#slide_web').width()/2 - 200/2;
	var leftPos = left-200*intPosition;
}

	$('#pictoSiteWeb').animate({'left': leftPos+'px'}, 500);
	$('#descSiteWeb > div').fadeOut(0);
	$('#descSiteWeb div.'+recupClass).fadeIn(300);
	movePictoSiteWeb('#pictoSiteWeb div.'+recupClass)
})

function movePictoSiteWeb(divImgPicto){
	if(mobile == 'block'){
		$(divImgPicto).children('img').animate({'height': '110px', 'bottom':'0'},100)
		$(divImgPicto).children('img').animate({'height': '120px', 'bottom':'20px'},100)
		$(divImgPicto).children('img').animate({'height': '115px', 'bottom':'-115px', 'width':'10px'},500)
		$(divImgPicto).children('img').animate({'height': '120px', 'bottom':'20px', 'width':'140px'})
		$(divImgPicto).children('img').animate({'height': '115px', 'bottom':'5px', 'width':'140px'})
	}else{
		$(divImgPicto).children('img').animate({'height': '145px', 'bottom':'0'},100)
		$(divImgPicto).children('img').animate({'height': '155px', 'bottom':'20px'},100)
		$(divImgPicto).children('img').animate({'height': '150px', 'bottom':'-155px', 'width':'10px'},500)
		$(divImgPicto).children('img').animate({'height': '155px', 'bottom':'20px', 'width':'170px'})
		$(divImgPicto).children('img').animate({'height': '150px', 'bottom':'5px', 'width':'170px'})
	}
	
}