

<!DOCTYPE html>
<html lang="fr" xml:lang="fr" xmlns="http://www.w3.org/1999/xhtml">
<head>
	<title>Uimainon - Anaïs Collin - Développeuse Web et Graphiste</title>

	<meta name="twitter:card" content="summary">
	<meta property="og:title" content="Bienvenue sur le site de Uimainon - Anaïs Collin" />
	<meta property="og:type" content="site web" />
	<meta property="og:url" content="https://www.uimainon.com" />
	<meta property="og:image" content="https://www.uimainon.com/public/img/siteImg.jpg" />
	<meta property="og:description" content="Graphiste et développeuse web, intégration, référencement et responsive. Découvrez le portfolio  et les sites réalisés par Anaïs Collin" />
	<meta property="og:site_name" content="Uimainon" />

	<meta charset="utf-8">
	<meta name="theme-color" content="#000000"><!--couleur barre adresse mobile--> 
	<meta name=viewport content="width=device-width, initial-scale=1, height=device-height">
	<meta name="description" content= "Graphiste et développeuse web, intégration, référencement et responsive. Découvrez le portfolio  et les sites réalisés par Anaïs Collin" />

	<link rel="stylesheet" href="public/css/font/font.css"/>
   <link rel="stylesheet" href="public/css/style.css"/>

   <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous"> 
   <link href="https://fonts.googleapis.com/css?family=Nunito&display=swap" rel="stylesheet"> 
   <meta name="format-detection" content="telephone=no"/><!--enlève le soulignement du tel sur edge--> 

   <link rel="icon" type="image/jpg" href="https://www.uimainon.com/public/img/picto/icone.jpg" />
   <link rel="shortcut icon" type="image/jpg" href="https://www.uimainon.com/public/img/picto/icone.jpg" />
   <link rel="apple-touch-icon" href="https://www.uimainon.com/public/img/picto/icone.jpg">
</head>

<body>
	<div id="loading">
		<img src="public/img/loading.gif"></div>
	</div>

<div id="detecteMobile"></div>
	<div id="decoCoeur">
		<img src="public/img/coeur.png" alt="coeur violet jeux vidéo">
		<img src="public/img/mana.png" alt="mana violet jeux vidéo">
	</div>
		<div id="decoShibi">
		<img src="public/img/shibi.png" alt="shibi violet jeux vidéo">
	</div>
	<div id="menuManette">
		<div id="txtMenuLogo">
			<p><span class="far fa-copyright"></span> Uimainon - Tous droits réservés</p>
		</div>
		<div id="menuLeft">
			<div id="btnParcours">
				<img src="public/img/btn/top.png" alt="bouton accès parcours">
			</div>
			<div id="btnPortfolio">
				<img src="public/img/btn/left.png" alt="bouton accès portfolio">
			</div>
			<div id="btnPresentation">
				<img src="public/img/btn/center.png" alt="bouton accès accueil">
			</div>
			<div id="btnSiteWeb">
				<img src="public/img/btn/right.png" alt="bouton accès site web">
			</div>
			<div id="btnContact">
				<img src="public/img/btn/down.png" alt="bouton accès contact">
			</div>
		</div>

		<div id="menuStarSelect">
			<div class="startMenu firstBtn">
				<img src="public/img/btn/start.png" alt="bouton accès sous-menu portfolio dessin">
				<span id="btn_grap">GRAPHISME</span><hr>
			</div>
			

			<div class="startMenu secondBtn">
				<img src="public/img/btn/start.png" alt="bouton accès sous-menu portfolio tatouage">
				<span id="btn_tattoo">TATOUAGE</span><hr>
			</div>
		</div>
		
		<div id="menuRight">
			<div id="btnMention">
				<img src="public/img/btn/center.png" alt="bouton accès mentions légales">
			</div>
			<div id="btnPolitique">
				<img src="public/img/btn/center.png"  alt="bouton accès politique de confidentialité">
			</div>
		</div>

	</div>


<div id="containeSlider">
	<div id="transformTranslate">
		<div id="containTransform">			
		</div>
	</div>

	<div id="slider" class="flexColumn">
		<div>

			<section id="coinHaut"></section>

			<section id="parcours">
				<?php include ('parcours.php'); ?>
			</section>
		
			<section id="mention">
				<?php include ('mention.php'); ?>
			</section>
		</div>
		
		<div>
			
			<section id="portfolio">
				<?php include ('portfolio.php'); ?>
			</section>

			<section id="presentation">
				<div class="slidePortfolio">
					<div id="btnPanneau">
						<img id="linkParcours" src ="public/img/btn/home/parcour.png" alt="lien parcours">
						<img id="linkWeb" src ="public/img/btn/home/site.png" alt="lien site web">
						<img id="linkContact" src ="public/img/btn/home/contact.png" alt="lien contact">
						<img id="linkPort" src ="public/img/btn/home/portfolio.png" alt="lien portfolio">
					</div>
					<div id="fondPanneau" class="flexRow">
						<img id="imgPanneau" src ="public/img/fond/panneau.jpg" alt="panneau menu site">
					</div>
				</div>
			</section>

			<section id="siteWeb">
				<?php include ('siteWeb.php'); ?>
			</section>

		</div>

		<div>
			<section id="politique">
				<?php include ('politique.php'); ?>
			</section>

			<section id="contact">
				<?php include ('contact.php'); ?>
			</section>

			<section id="coinBas"></section>
		</div>
	</div>
</div>

<script  type="text/javascript">
    document.write('Hello World!')
</script>
<noscript>Le JavaScript est désactivé! Merci de le réactivé afin de permettre au site de s'afficher et de vous permettre de naviguer correctement.</noscript>

 	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>

	<script type="text/javascript">
	$(window).load(function() {
		$("#loading").fadeOut("2000");
	})
	</script>

	<script src="public/js/fond.js"></script>


</body>
</html> 