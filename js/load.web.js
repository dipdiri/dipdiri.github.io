// // Include the UserVoice JavaScript SDK (only needed once on a page)
// UserVoice=window.UserVoice||[];(function(){var uv=document.createElement('script');uv.type='text/javascript';uv.async=true;uv.src='//widget.uservoice.com/W8Cw7UByIm3hW45a1uxw.js';var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(uv,s)})();

// //
// // UserVoice Javascript SDK developer documentation:
// // https://www.uservoice.com/o/javascript-sdk
// //

// // Set colors
// UserVoice.push(['set', {
//   accent_color: '#448dd6',
//   trigger_color: 'white',
//   trigger_background_color: '#e23a39'
// }]);

// // Identify the user and pass traits
// // To enable, replace sample data with actual user traits and uncomment the line
// UserVoice.push(['identify', {
//   //email:      'john.doe@example.com', // User’s email address
//   //name:       'John Doe', // User’s real name
//   //created_at: 1364406966, // Unix timestamp for the date the user signed up
//   //id:         123, // Optional: Unique id of the user (if set, this should not change)
//   //type:       'Owner', // Optional: segment your users by type
//   //account: {
//   //  id:           123, // Optional: associate multiple users with a single account
//   //  name:         'Acme, Co.', // Account name
//   //  created_at:   1364406966, // Unix timestamp for the date the account was created
//   //  monthly_rate: 9.99, // Decimal; monthly rate of the account
//   //  ltv:          1495.00, // Decimal; lifetime value of the account
//   //  plan:         'Enhanced' // Plan name for the account
//   //}
// }]);

// // Add default trigger to the bottom-right corner of the window:
// UserVoice.push(['addTrigger', { mode: 'contact', trigger_position: 'bottom-right' }]);

// // Or, use your own custom trigger:
// //UserVoice.push(['addTrigger', '#id', { mode: 'contact' }]);

// // Autoprompt for Satisfaction and SmartVote (only displayed under certain conditions)
// UserVoice.push(['autoprompt', {}]);


function loadScripts(array,callback){
    var loader = function(src,handler){
        var script = document.createElement("script");
        script.src = src;
        script.onload = script.onreadystatechange = function(){
        script.onreadystatechange = script.onload = null;
        	handler();
        }
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(script, s);
        //(head || document.body).appendChild( script );
    };
    (function(){
        if(array.length!=0){
        	loader(array.shift(),arguments.callee);
        }else{
        	callback && callback();
        }
    })();
}

loadScripts([
  // "http://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.0/jquery.min.js",
	"http://netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js",
 	"http://jasny.github.io/bootstrap/dist/js/jasny-bootstrap.min.js",
  "http://cdnjs.cloudflare.com/ajax/libs/jquery.imagesloaded/3.0.4/jquery.imagesloaded.min.js",
  "http://cdnjs.cloudflare.com/ajax/libs/masonry/3.1.2/masonry.pkgd.js",
  // "http://dipdiri.com/js/remoteNonStopPageScroll.js",
	// "http://lokeshdhakar.com/projects/lightbox2/js/lightbox.js",
	// "http://cdnjs.cloudflare.com/ajax/libs/holder/2.3.1/holder.js",
  // "http://cdnjs.cloudflare.com/ajax/libs/jquery-jcrop/0.9.12/js/jquery.Jcrop.min.js",
  // "http://dipdiri.com/js/jquery.SimpleCropper.js",
  "//cdnjs.cloudflare.com/ajax/libs/blueimp-gallery/2.15.0/js/blueimp-gallery.js",
  "//cdnjs.cloudflare.com/ajax/libs/blueimp-gallery/2.15.0/js/blueimp-gallery-fullscreen.js",
  "//cdnjs.cloudflare.com/ajax/libs/blueimp-gallery/2.15.0/js/blueimp-gallery-indicator.js",
  "//cdnjs.cloudflare.com/ajax/libs/blueimp-gallery/2.15.0/js/blueimp-gallery-video.js",
  "//cdnjs.cloudflare.com/ajax/libs/blueimp-gallery/2.15.0/js/blueimp-gallery-vimeo.js",
  "//cdnjs.cloudflare.com/ajax/libs/blueimp-gallery/2.15.0/js/blueimp-gallery-youtube.js",
  "//cdnjs.cloudflare.com/ajax/libs/blueimp-gallery/2.15.0/js/jquery.blueimp-gallery.js",
  "http://dipdiri.com/js/application.web.js"
],function(){
    console.info('loaded.');
});


(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-49892205-1', 'dipdiri.com');
ga('send', 'pageview');


// document.body.onload = addElement;
// function addElement () { 
// 	var theDiv = document.getElementById("oneuser");
//   if(theDiv){
//     theDiv.innerHTML += "<div id='blueimp-gallery' class='blueimp-gallery'><div class='slides'></div><h3 class='title'></h3><a class='prev'>‹</a><a class='next'>›</a><a class='close'>×</a><a class='play-pause'></a></div> <p>（。 ㅅ 。）<small>dipdiri.com</small></p>  <small>kanallar: </small> <small><a href='chickswithtits'><span class='s'>chickswithtits</span></small></a>  <small><a href='14by8inches'><span class='nc'>14by8inches</span></small></a></small> <small><a href='i-just-love-boobs'><span class='s'>i-just-love-boobs</span></small></a>  <small><a href='just4puffyboobs'><span class='nc'>just4puffyboobs</span></small></a></small> <small><a href='realnicetits'><span class='s'>realnicetits</span></small></a>  <small><a href='lovelyboobphotos'><span class='nc'>lovelyboobphotos</span></small></a></small> <small><a href='even-hotter'><span class='s'>even-hotter</span></small></a>  <small><a href='because-boobs-thats-why'><span class='nc'>because-boobs-thats-why</span></small></a></small> <small><a href='only-huge-boobs'><span class='s'>only-huge-boobs</span></small></a>  <small><a href='bigboobhound'><span class='nc'>bigboobhound</span></small></a></small> <small><a href='bestboobsonline'><span class='s'>bestboobsonline</span></small></a>  <small><a href='relaxtheyrejustboobs'><span class='nc'>relaxtheyrejustboobs</span></small></a></small> <small><a href='heavenlybreasts'><span class='s'>heavenlybreasts</span></small></a>  <small><a href='i-like-breasts'><span class='nc'>i-like-breasts</span></small></a></small> <small><a href='greatbigboobs'><span class='s'>greatbigboobs</span></small></a>  <small><a href='theittybittytittycommittee'><span class='nc'>theittybittytittycommittee</span></small></a></small> <small><a href='sluttybimbotits'><span class='s'>sluttybimbotits</span></small></a>  <small><a href='faketitsorbust'><span class='nc'>faketitsorbust</span></small></a></small> <small><a href='dreamwoman-boobs'><span class='s'>dreamwoman-boobs</span></small></a>  <small><a href='nosaj81'><span class='nc'>nosaj81</span></small></a></small> <small><a href='just-big-boobs'><span class='s'>just-big-boobs</span></small></a>  <small><a href='madregan'><span class='nc'>madregan</span></small></a></small> <small><a href='legen-wait-for-it-boobie'><span class='s'>legen-wait-for-it-boobie</span></small></a> <small> kalite: </small> <a href='?q=5'><small> 1 </small></a><a href='?q=4'><small> 2 </small></a><a href='?q=3'><small> 3 </small></a><a href='?q=2'><small> 4 </small></a><a href='?q=1'><small> 5 </small></a><a href='?q=0'><small> 6 </small></a> <br><br>";
// 	//theDiv.innerHTML += "<p>（。 ㅅ 。）<small>dipdiri.com</small></p><dl><dd><small>- kanallar!</small></dd><dd><small>-- chickswithtits <span class='s'>görünmeyecek</span></small></dd><dd><small>-- <span class='nc'>dipdiri</span> memeler <span class='nc'>gürünecek</span></small></dd></dl>"; 
//   }
//   var theDivTag = document.getElementById("onetag");
//   if(theDivTag){
//     theDivTag.innerHTML += "<div id='blueimp-gallery' class='blueimp-gallery'><div class='slides'></div><h3 class='title'></h3><a class='prev'>‹</a><a class='next'>›</a><a class='close'>×</a><a class='play-pause'></a></div> <p>（。 ㅅ 。）<small>dipdiri.com</small></p>  <small> kalite: </small> <a href='?q=5'><small> 1 </small></a><a href='?q=4'><small> 2 </small></a><a href='?q=3'><small> 3 </small></a><a href='?q=2'><small> 4 </small></a><a href='?q=1'><small> 5 </small></a><a href='?q=0'><small> 6 </small></a> <br><br>";
//   }
// }


