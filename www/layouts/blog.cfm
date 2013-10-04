<cfoutput> <!DOCTYPE html>
<html>
<head>

	<meta charset="utf-8">
	<cf_metaTags>
	<meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1.0, maximum-scale=1.0" />

	<link rel="Shortcut Icon" href="/favicon.ico" type="image/x-icon">
	<link rel="apple-touch-icon" href="/apple-touch-icon.png"/>

	<cf_vin65GlobalAssets>

	<cf_css files="/assets/css/screen.min.css">

	<!--[if lt IE 9]>
		<script src="/assets/js/html5shiv-printshiv.js"></script>
		<script src="/assets/js/respond.min.js"></script>
	<![endif]-->

	<cf_rssFeed>

</head>
<body>

	<section class="userToolsWrapper">

		<div class="wrapper v65-group">

			<div id="user-tools">
				<cf_modalCart>
				<cf_login>
			</div>

		</div>

	</section>

	<header class="pageHeader">
		<cf_contentBlock group="Page Feature Image">
		<a href="/" accesskey="h" class="logo"><img src="/assets/images/logo.png"  alt="<cf_websiteName>"></a>
	</header>

	<nav>
		<cf_layoutHeaderNav depth="2">
	</nav>

	<article class="pageContent">

		<div class="wrapper v65-group">

			<div class="backtotop">	
				<a href="##"><i class="icon-up-bold"></i>TOP</a>
			</div>

			<section class="blogContent">
				<cf_mainContent>
			</section>

			<aside class="blogRightWrapper">

				<div class="blogFilterLeft">
					<h5>Recent Posts</h5>
					<cf_blogRecentPosts maxrows="10">

					<h5>Blog Categories</h5>
					<cf_blogCategories>

				</div>

				<div class="blogFilterRight">

					<h5>Our Writers</h5>
					<cf_blogAuthors>

					<h5>Blog Archives</h5>
					<cf_blogArchives>

				</div>

			</aside>

		</div>

	</article>
	<!--/pageContent-->

	<footer>
		
		<div class="wrapper">
			
			<div class="footerSocial v65-group">
				<div class="subscribe">
					<span class="intro">Sign up for our mailing list</span>
					<cf_subscribe contactType="Newsletter">
				</div>
				<a href="http://www.facebook.com"><i class="icon-facebook-squared"></i></a>
				<a href="http://www.twitter.com"><i class="icon-twitter"></i></a>
				<span class="copyright"><cf_copyright></span>
				<span class="callUs"><a href="tel:1-800-888-8888"><i class="icon-phone-1"></i>Call Us 1-800-888-8888</a></span>
			</div>

			<div class="footerNavWrapper v65-group">
				<div class="footerNav"><cf_layoutFooterNav></div>
				<cf_pods location="Footer Pod" type="description">
				<div class="megaNav v65-group"><cf_layoutHeaderNav depth="2"></div>		
			</div>

			<p class="accolade"><cf_vin65Accolade></p>

		</div>

	</footer>

	<cf_js files="/assets/js/scripts.js,/assets/nivo/jquery.nivo.slider.pack.js">

	<cf_vin65GlobalFooterAssets>

</body>
</html> </cfoutput>
