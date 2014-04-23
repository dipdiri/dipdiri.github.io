// Include the UserVoice JavaScript SDK (only needed once on a page)
UserVoice=window.UserVoice||[];(function(){var uv=document.createElement('script');uv.type='text/javascript';uv.async=true;uv.src='//widget.uservoice.com/W8Cw7UByIm3hW45a1uxw.js';var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(uv,s)})();

//
// UserVoice Javascript SDK developer documentation:
// https://www.uservoice.com/o/javascript-sdk
//

// Set colors
UserVoice.push(['set', {
  accent_color: '#448dd6',
  trigger_color: 'white',
  trigger_background_color: '#e23a39'
}]);

// Identify the user and pass traits
// To enable, replace sample data with actual user traits and uncomment the line
UserVoice.push(['identify', {
  //email:      'john.doe@example.com', // User’s email address
  //name:       'John Doe', // User’s real name
  //created_at: 1364406966, // Unix timestamp for the date the user signed up
  //id:         123, // Optional: Unique id of the user (if set, this should not change)
  //type:       'Owner', // Optional: segment your users by type
  //account: {
  //  id:           123, // Optional: associate multiple users with a single account
  //  name:         'Acme, Co.', // Account name
  //  created_at:   1364406966, // Unix timestamp for the date the account was created
  //  monthly_rate: 9.99, // Decimal; monthly rate of the account
  //  ltv:          1495.00, // Decimal; lifetime value of the account
  //  plan:         'Enhanced' // Plan name for the account
  //}
}]);

// Add default trigger to the bottom-right corner of the window:
UserVoice.push(['addTrigger', { mode: 'contact', trigger_position: 'bottom-right' }]);

// Or, use your own custom trigger:
//UserVoice.push(['addTrigger', '#id', { mode: 'contact' }]);

// Autoprompt for Satisfaction and SmartVote (only displayed under certain conditions)
UserVoice.push(['autoprompt', {}]);


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
	"http://code.jquery.com/jquery-1.11.0.min.js",
	"//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js",
 	"http://jasny.github.io/bootstrap/dist/js/jasny-bootstrap.min.js",
	"http://lokeshdhakar.com/projects/lightbox2/js/lightbox.js",
	"//cdnjs.cloudflare.com/ajax/libs/holder/2.3.1/holder.js",
        "//cdnjs.cloudflare.com/ajax/libs/jquery-jcrop/0.9.12/js/jquery.Jcrop.min.js",
        "http://dipdiri.com/js/jquery.SimpleCropper.js",
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


document.body.onload = addElement;
function addElement () { 
	var theDiv = document.getElementById("one");
	theDiv.innerHTML += "<p>（。 ㅅ 。）<small>dipdiri.com</small></p><dl><dd><small>- fotoğraf gönderme kuralları!</small></dd><dd><small>-- bacaklar <span class='s'>görünmeyecek</span></small></dd><dd><small>-- <span class='nc'>dipdiri</span> memeler <span class='nc'>gürünecek</span></small></dd></dl>"; 
}