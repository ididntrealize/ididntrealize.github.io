
function initHayStack(){

    //console.log('script loaded')
        
        var XXXIV = "A pearl among straws";

                
            /*
        //handle refreshes
            var userIsActive = true;
            var idleTime = 0;
                //Increment the idle time counter every minute.
                var idleInterval = setInterval(timerIncrement, 60000); // 1 minute

                //Zero the idle timer on mouse movement.
                $(this).mousemove(function (e) {
                    idleTime = 0;
                });
                $(this).keypress(function (e) {
                    idleTime = 0;
                });
            */
            
            var i = "I preserved her mindspace,<br/>";
            var d = "A crystalizing cavern in which we'd dwell.<br/><br/>";
            
        //Nothing lasts, but nothing is lost.
        /*
            function timerIncrement() {
                idleTime = idleTime + 1;
                if (idleTime >= 2) { // 120 seconds
                    
                    userIsActive = false;
                    $(this).mousemove(function (e) {
                        if(!userIsActive){
                            window.location.reload();
                        }
                        userIsActive = true;
                    });
                    $(this).keypress(function (e) {
                        if(!userIsActive){
                            window.location.reload();
                        }
                        userIsActive = true;
                        
                    });
                    
                }
            }
            */
            
            
            //I gave you the code to see the full poem in my second comment, obscuring for Poetic effect. This one is scrambled mixy mashed because its...
            var needle = document.getElementById("hook"), needleWidth = needle.offsetWidth, needleHeight = needle.offsetHeight; var posx = (Math.random() * ($(".container-stack").width() - needleWidth)).toFixed(); var posy = (Math.random() * ($(document).height() - needleHeight)).toFixed();
            var ididntrealizeididididntrealizei = "I didn't realize<br/>I'd be seeing<br/>This you,<br/>This soon.<br/><br/>Could it be<br/>You thought<br/><br/>You got<br/>Forgot<br/><br/>By.. Me?<br/><br/>No, you didn't,<br/>And, no, I didn't.<br/><br/>Still, I'm tempted to retain<br/>These memories collaged,<br/><br/>Where she will remain,<br/><br/><br/>";
        
        var inPosition = ($(document).width() - $(".container-stack").width())/2;
        
        
        
        //wheres that needle again?
        //alert(parseInt(inPosition) + parseInt(posx) + 'px');
        needle.style.left = parseInt(inPosition) + parseInt(posx) + 'px';
        needle.style.top =  posy + 'px';

    //and what's it look like again?
    var a = Math.random() * 120 - 60;
    $(needle).css('transform', 'rotate(' + a + 'deg) scale(1.25)');
    $(needle).click(function(e){

        //console.log('lclicked on the needle');
        e.preventDefault;
        lookThroughStack();

    });
    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

    let theRealSlimBody = document.getElementById("heart-and-soul");
        theRealSlimBody.style.position = "absolute";
        theRealSlimBody.style.bottom = "0px";
        theRealSlimBody.style.right = "0px";
        theRealSlimBody.style.minHeight = "100vh";


    var id = "In dreams I've sought her, <br/>well, <br/>Somewhat unsuccessfully; <br/><br/>",
            idn = "An indistinct personality <br/>distinguished her,<br/>Solely as partial entity.<br/><br/><br/>",
        diving = theRealSlimBody.getElementsByTagName("DIV"),

                treal = "She was fragmented,<br/><br/>A temporarily mistaken<br/>figment of imagination.<br/><br/>";
                var izeidid = "Yet,<br/>I attempted to retain<br/>This passing mirage.<br/><br/>Where,<br/>Slumped, I remained<br/>Grasping at straws.<br/><br/><br/>";

    var theOne = diving[1];		
    var	itIsnt = theOne.getElementsByTagName("P")[0];
        

    var ididntrealize = "Then one day,<br/>This needle in the hay<br/>Found me frayed.<br/><br/>Needless to say,<br/>When she smiled<br/><br/>I had to stay.<br/><br/>";


            //see! I told you there was a method to my... wait...
                XXXIV = i + d + id + idn + treal + izeidid + ididntrealize + ididntrealizeididididntrealizei + XXXIV;
            itIsnt.innerHTML = XXXIV;
                
            
            diving[0].style.zIndex = "10";
            diving[0].style.background = "white";
            diving[0].style.overflow = "hidden";
                itIsnt.style.color = "white";
                itIsnt.style.display = "inherit";
                
        
        
        var butItCouldBe = itIsnt.cloneNode(true);	   
                itIsnt.parentNode.removeChild(itIsnt);
            
            //if(getRandomArbitrary(0, 9) > 1){
                //console.log("Too much hay, can't find the shiney?");
                needle.style.fontSize = "12px";
                
                setTimeout(function(){
                
                
                    var needle = document.getElementById("hook"), needleWidth = needle.offsetWidth, needleHeight = needle.offsetHeight; var posx = (Math.random() * ($(".container-stack").width() - needleWidth)).toFixed(); var posy = (Math.random() * ($(document).height() - needleHeight)).toFixed();
                    var inPosition = ($(document).width() - $(".container-stack").width())/2;
                    
                        //where's denali again?
                    //alert(parseInt(inPosition) + parseInt(posx) + 'px');
                    needle.style.left = parseInt(inPosition) + parseInt(posx) + 'px';
                    needle.style.top =  posy + 'px';
                    
                    
                    //console.log('locate needle');
                
                
                },3000);
                
                
                setInterval(function(){
                    
                    $("a").css({'font-size':'-=1px'});
                    var a = Math.random() * 120 - 60;
                    $(needle).css('transform', 'rotate(' + a + 'deg) scale(1.25)');

                    //console.log('rotate needle');
                
                }, 2300);
                
            //}else{
                //console.log("dont move a muscle");
                theOne.appendChild(butItCouldBe);
                
                $("p").toggle().css("color", "black");
                
                function lookThroughStack(){
                    console.log("anything in here??");
                            if(getRandomArbitrary(0,9) < 1) {
                                console.log("THAT is a needle in a hay stack.");
                                document.getElementById('hook').style.display = "none";
                            
                                diving[0].style.height = "250px";
                                diving[0].style.overflow = "shown";
                                butItCouldBe.style.display = "block";
                                butItCouldBe.style.color = "black";
                                
                                $(".container-stack").animate({ height: "1734px" }, 46368);
                            
                                
                            }
                            
                            /*
                            else{
                            
                                userIsActive = false;
                            
                                $(this).mousemove(function (e) {
                                    
                                    if(!userIsActive){
                                        userIsActive = true;
                                        
                                        setTimeout(function(){
                                        
                                        
                                        window.location.reload();
                                        
                                        },500);
                                        
                                    }
                                    
                                });
                                
                            }
                            */
                            
                            }
                
                setTimeout(function(){
                
                        lookThroughStack();
                        //console.log('look through stack');
                    
                },6500);
                
                
                
            //}
}
initHayStack();