(function($) {
////////////////////

var controller;

$(document).ready(function() {
	
	var wh = $(window).innerHeight();
	var ww = $(window).innerWidth();
	
	
	

if (ww >= 700) {
	// init controller
	controller = new ScrollMagic();
		
	var armyHight = $(".army").height();
	var armyOffset = $(".army").offset().top;
	var s2MarginTop = (armyOffset + armyHight ) - wh;
	
	
/*
	console.log("margin top " + s2MarginTop);
	console.log("army height " + armyHight);
	
	console.log("window hight " + wh);
	console.log("army offset " + armyOffset);
*/
		
	// SCENE 1==========================================
	
	// Duration ignored / replaced by scene duration now
	var tween1 = TweenMax.to('.army', 0.5, {
	    opacity: 0
	});
	
	var scene1 = new ScrollScene({
	    triggerElement: '.s2',
	    duration: wh, /* How many pixels to scroll / animate */
	    offset: s2MarginTop,
	    triggerHook: "onEnter"
	})
	.setTween(tween1).addTo(controller);
	
	// Arrow Down ****
	var tween1_2 = TweenMax.to('.arrow-down', 1, {
	    scale: 2,
		bottom: 37 - (s2MarginTop),
	    ease: Linear.easeInOut
	});
	new ScrollScene({
		triggerElement: ".s1",
		triggerHook: "onLeave",
		duration: s2MarginTop
	})
	.setTween(tween1_2).addTo(controller);
	
	// Arrow Down ****
	var tween1_3 = TweenMax.to('.arrow-down', 1, {
	    opacity: 0,
	    ease: Linear.easeInOut
	});
	new ScrollScene({
		triggerElement: ".s1",
		triggerHook: "onLeave",
		offset: s2MarginTop * 0.7,
		duration: s2MarginTop
	})
	.setTween(tween1_3).addTo(controller);
						
	
	// SCENE 2 ==========================================
	
	$(".s2-back").css("height", s2MarginTop);
	
	// build scene
	new ScrollScene({
		triggerElement: ".s2-back",
		duration: wh * 3.5,
		offset: s2MarginTop,
		triggerHook: "onLeave"
	})
	.setPin(".s2").addTo(controller);
	
	// Left Green Bar ****
	var tween2_1 = TweenMax.from('.left-green-bar', 1, {
	    opacity: 0.8,
	    left: "-40%",
	    ease: Linear.easeIn
	});
	new ScrollScene({
		triggerElement: ".army",
		offset: wh * 1.8,
		duration: wh * 1.5,
		triggerHook: "onEnter"
	})
	.setTween(tween2_1).addTo(controller);
	
	// In The Woods ****
	var tween2_3 = TweenMax.from('.in-the-woods', 0.7, {
	    opacity: 0,
	    right: -50,
	    ease: Linear.easeInOut,
	    delay: 1
	});
	new ScrollScene({
		triggerElement: ".army",
		offset: wh * 1.8,
		duration: wh * 1.5,
		triggerHook: "onEnter"
	})
	.setTween(tween2_3).addTo(controller);
	
	// In The Woods Guy ****
	var tween2_3_1 = TweenMax.from('.in-the-woods-guy', 0.7, {
	    opacity: 0,
	    right: "18%",
	    ease: Linear.easeInOut,
	    delay: 1
	});
	new ScrollScene({
		triggerElement: ".army",
		offset: wh * 1.8,
		duration: wh * 1.5,
		triggerHook: "onEnter"
	})
	.setTween(tween2_3_1).addTo(controller);
	
	// In The Woods Guy 2 ****
	var tween2_3_2 = TweenMax.to('.in-the-woods-guy', 1, {
	    opacity: 0.4,
	    right: "-13%",
	    bottom: "8%",
	    scale: 0.5,
	    ease: Linear.easeInOut,
	});
	new ScrollScene({
		triggerElement: ".army",
		offset: wh * 4.2,
		duration: wh * 1.8,
		triggerHook: "onEnter"
	})
	.setTween(tween2_3_2).addTo(controller);
	
	// Squirrel ****
	var tween2_3_3 = TweenMax.to('.s2-squirrel', 1, {
	    bottom: "100%",
	    ease: Linear.easeInOut,
	});
	new ScrollScene({
		triggerElement: ".army",
		offset: wh * 4.2,
		duration: wh * 0.6,
		triggerHook: "onEnter"
	})
	.setTween(tween2_3_3).addTo(controller);
	
	// Story ****
	var tween2_4 = TweenMax.from('.s2-story-wrap', 0.7, {
	    opacity: 0,
	    top: "13%",
	    ease: Linear.easeIn,
	    delay: 1.5
	});
	new ScrollScene({
		triggerElement: ".army",
		offset: wh * 2.5,
		duration: wh * 1.5,
		triggerHook: "onEnter"
	})
	.setTween(tween2_4).addTo(controller);
	
						
	// SCENE 3 ============================================================================= 
	
	new ScrollScene({
		triggerElement: ".nextriger3",
		duration: wh * 4,
			offset: 10,
		triggerHook: "onLeave"
	})
	.setPin(".s3").addTo(controller);
	
	// .s3-inner ****
	var tween3 = TweenMax.from('.s3-inner', 0.7, {
	    opacity: 0,
	    ease: Linear.easeInOut
	});
	new ScrollScene({
		triggerElement: ".nextriger3",
		offset: 10,
		duration: wh / 2,
		triggerHook: "onLeave"
	})
	.setTween(tween3).addTo(controller);
	
	// .s3-year ****
	var tween3_1 = TweenMax.from('.s3-year', 1, {
	    top: "-17%",
	    scale: 0.4,
	    ease: Linear.easeInOut
	});
	new ScrollScene({
		triggerElement: ".nextriger3",
		offset: wh,
		duration: wh / 2,
		triggerHook: "onLeave"
	})
	.setTween(tween3_1).addTo(controller);
	
	// .s3-info ****
	var tween3_1_1 = TweenMax.from('.s3-info', 1, {
	    top: "40%",
	    opacity: 0,
	    ease: Linear.easeInOut
	});
	new ScrollScene({
		triggerElement: ".nextriger3",
		offset: wh * 1.2,
		duration: wh / 3,
		triggerHook: "onLeave"
	})
	.setTween(tween3_1_1).addTo(controller);
	
	// .s3-gun ****
	var tween3_2 = TweenMax.from('.s3-gun', 1, {
	    top: "150%",
	    scale: 2,
	    ease: Linear.easeInOut
	});
	new ScrollScene({
		triggerElement: ".nextriger3",
		offset: wh * 1.5,
		duration: wh / 2,
		triggerHook: "onLeave"
	})
	.setTween(tween3_2).addTo(controller);
	
	// .s3-h1 ****
	var tween3_3 = TweenMax.from('.s3-h1', 1, {
	    right: "58%",
	    opacity: 0,
	    ease: Linear.easeInOut
	});
	new ScrollScene({
		triggerElement: ".nextriger3",
		offset: wh * 2,
		duration: wh / 2,
		triggerHook: "onLeave"
	})
	.setTween(tween3_3).addTo(controller);
	
	// .bracket-box ****
	var tween3_4 = TweenMax.from('.bracket-box', 1, {
	    left: "55%",
	    opacity: 0,
	    ease: Linear.easeInOut
	});
	new ScrollScene({
		triggerElement: ".nextriger3",
		offset: wh * 2,
		duration: wh,
		triggerHook: "onLeave"
	})
	.setTween(tween3_4).addTo(controller);
	
	// .bracket-left ****
	var tween3_5 = TweenMax.from('.bracket-left', 1, {
	    rotation: 360,
	    opacity: 0,
	    scale: 2,
	    ease: Linear.easeInOut
	});
	new ScrollScene({
		triggerElement: ".nextriger3",
		offset: wh * 2,
		duration: wh,
		triggerHook: "onLeave"
	})
	.setTween(tween3_5).addTo(controller);
	
	// bracket-right ****
	var tween3_5 = TweenMax.from('.bracket-right', 1, {
	    rotation: "-360",
	    opacity: 0,
	    scale: 2,
	    ease: Linear.easeInOut
	});
	new ScrollScene({
		triggerElement: ".nextriger3",
		offset: wh * 2,
		duration: wh,
		triggerHook: "onLeave"
	})
	.setTween(tween3_5).addTo(controller);
	
	// .s3-year END ****
	var tween3_6 = TweenMax.to('.s3-year', 1, {
	    top: "8%",
	    opacity: 0,
	    ease: Linear.easeInOut
	});
	new ScrollScene({
		triggerElement: ".nextriger3",
		offset: wh * 3.5,
		duration: wh / 2,
		triggerHook: "onLeave"
	})
	.setTween(tween3_6).addTo(controller);
	
	// .s3-info END ****
	var tween3_7 = TweenMax.to('.s3-info', 1, {
	    top: "41%",
	    opacity: 0,
	    ease: Linear.easeInOut
	});
	new ScrollScene({
		triggerElement: ".nextriger3",
		offset: wh * 3.5,
		duration: wh / 2,
		triggerHook: "onLeave"
	})
	.setTween(tween3_7).addTo(controller);
	
	
	// .s3-inner END ****
	var tween3_8 = TweenMax.to('.s3-inner', 0.1, {
	    backgroundAttachment: "scroll",
	    ease: Linear.easeInOut
	});
	new ScrollScene({
		triggerElement: ".nextriger3",
			offset: (wh * 4) + 10,
		triggerHook: "onLeave"
	})
	.setTween(tween3_8).addTo(controller);

	
	
	// SCENE 4 ========================================== 
	new ScrollScene({
		triggerElement: ".nextriger4",
		duration: wh * 4,
			offset: 10,
		triggerHook: "onLeave"
	})
	.setPin(".s4").addTo(controller);
	
	// .record-photo ****
	var tween4 = TweenMax.from('.record-photo', 1, {
	    top: "238%",
	    rotation: "32",
	    scale: 1.2,
	    ease:Back.easeOut
	});
	new ScrollScene({
		triggerElement: ".nextriger4",
			offset: 150,
			duration: wh * 1.5,
		triggerHook: "onLeave"
	})
	.setTween(tween4).addTo(controller);
	
	// .record-photo ****
	var tween4_1 = TweenMax.from('.s4-info', 1, {
	    right: "1%",
	    opacity: 0,
	    ease:Linear.easeInOut
	});
	new ScrollScene({
		triggerElement: ".nextriger4",
			offset: wh * 0.9,
			duration: wh * 0.9,
		triggerHook: "onLeave"
	})
	.setTween(tween4_1).addTo(controller);
	
	// .berry and .tom ****
	var tween4_2 = TweenMax.staggerFrom('.s4-person', 1, {
	    bottom: "-60%",
	    ease:Back.easeOut
	}, 0.25);
	new ScrollScene({
		triggerElement: ".nextriger4",
			offset: wh,
			duration: wh * 0.9,
		triggerHook: "onLeave"
	})
	.setTween(tween4_2).addTo(controller);
	
	var tween4_2 = TweenMax.from('.b-eye', 1, {
	    opacity: 0,
	    ease:Linear.easeOut
	}, 0.25);
	new ScrollScene({
		triggerElement: ".nextriger4",
			offset: wh,
			duration: wh * 0.9,
		triggerHook: "onLeave"
	})
	.setTween(tween4_2).addTo(controller);
			
											
	var bEye = $(".b-eye"),
		bArm = $(".b-arm"),
		bArmBottom = $(".b-arm-bottom"),
		s4Block = $(".s4-block"),
		s4Boom = $(".s4-boom"),
		s4BoomBack = $(".s4-boom-back");
		s4Gun = $(".s4-gun");
		
	function blockPerish() {
		s4Block.css("display", "none");
		$(".test2").css("background-color", "red");
	}
	function blockAppear() {
		s4Block.css("display", "block");
	}
	
    tlEyes = new TimelineMax({repeat: -1, repeatDelay: 2 });
    tlEyes.to(bEye, 0.2, {display: "none"});
    
    tlArm = new TimelineMax({onComplete: blockPerish, onStart: blockAppear,  repeat: -1, repeatDelay: 1, yoyo:false, delay: 1 });
    tlArm.from(bArm, 0.7, {rotation: 20, transformOrigin: "left top", ease:Back.easeInOut })
    	.from(bArmBottom, 0.5, {rotation: 30, transformOrigin: "10% 95%", ease:Back.easeIn }, 0)
    	.to(s4Gun, 0.1, {x:15, y:15}, 0.9)
    	.to(s4Gun, 0.1, {x:0, y:0}, 1)
    	.to(s4Block, 0.1, {opacity: 1}, 0)
    	.to(s4Block, 0.5, {bottom: "100%", rotation: 70, scale: 1.1, ease:Back.easeIn}, 0)
    	.to(s4Block, 0.7, {bottom: "180%", rotation: 170, scale: 1.4, ease:Back.easeOut}, 0.5)
    	.to(s4Boom, 0.2, {opacity: 0.3, scale: 1.8, marginLeft: "-2%", ease:Back.easeOut}, 1.15)
    	.to(s4Boom, 0.1, {opacity: 0, marginLeft: "-2%", ease:Expo.easeOut}, 1.35)
    	.to(s4Block, 1.2, {bottom: "207%", left: "-200%", opacity: 0, scale: 1.2, rotation: 1000}, 1.2)
		.pause();
		
	function shootAnim(e) {
		if (e.type == "enter") {
			//$(".test2").css("display", "block").text("visible.");
			
			tlEyes.play();
			tlArm.play();
		} else {
			//$(".test2").css("display", "none").text("invisible.");
			tlEyes.pause();
			tlArm.restart();
			tlArm.pause();
		}
	}
	
	new ScrollScene({
		triggerElement: ".nextriger4", 
		offset: wh * 1.9,
			duration: wh * 2.5,
		triggerHook: "onLeave"
	})
	.addTo(controller)
	.on("enter leave", shootAnim);
		
		
		
	// Timeline ==========================================
	
	var time_dark = $("#timeline"),
		time_point = $(".time-point"),
		time_year = $(".time-year"),
		time_path = $(".time-path"),
		time_arrow = $("#time-arrow");
		
	// s2
	
	// s3
	var tween_time_1 = TweenMax.staggerTo(time_point, 1, {
	    fill: "#1E3F14",
		    stroke:"white"
	}, -0.2);  // negative value is making animation from the last element
	new ScrollScene({
		triggerElement: ".s3",
			duration: wh,
		triggerHook: "onEnter"
	})
	.setTween(tween_time_1).addTo(controller);
		
	var tween_time_1_1 = TweenMax.staggerFromTo(time_year, 1, {fill: "black"},{fill: "white"}, -0.2);
	new ScrollScene({
		triggerElement: ".s3",
			duration: wh,
		triggerHook: "onEnter"
	})
	.setTween(tween_time_1_1).addTo(controller);
	
	var tween_time_1_2 = TweenMax.staggerTo(time_path, 1, {
	    stroke: "#cccccc"
	}, -0.2);
	new ScrollScene({
		triggerElement: ".s3",
		offset: wh * 0.2,
			duration: wh,
		triggerHook: "onEnter"
	})
	.setTween(tween_time_1_2).addTo(controller);
	
	var tween_time_1_3 = TweenMax.to(time_arrow, 1, {
	    fill: "white"
	});
	new ScrollScene({
		triggerElement: ".s3",
		offset: wh * 0.5,
			duration: wh * 0.5,
		triggerHook: "onEnter"
	})
	.setTween(tween_time_1_3).addTo(controller);

	// 1816
	var t1816 = $(".t1816"),
		c1816 = $(".c1816");
	function y1816(e) {
		if (e.type == "enter") {
			t1816.css({"fill": "#AF4159", "font-size": 12, "font-weight": 700});
			c1816.css({"stroke-width": 1.75}).attr("r", "3.5");
		} else {
			t1816.css({"fill": "black", "font-size": 8, "font-weight": 400});
			c1816.css({"stroke-width": 1.3333}).attr("r", "2");
		}
	}
	var tween_arrow_2 = TweenMax.to(time_arrow, 1, {y: 20});
	var scene1816 = new ScrollScene({
		triggerElement: ".s2-back",
		duration: wh * 4.5,
		offset: s2MarginTop / 2,
		triggerHook: "onLeave"
	})
	.setTween(tween_arrow_2)
	.addTo(controller)
	.on("enter leave", y1816);

	// 1859
	var t1959 = $(".t1959"),
		c1959 = $(".c1959");
	function y1959(e) {
		if (e.type == "enter") {							
			t1959.css({"fill": "#AF4159", "font-size": 12, "font-weight": 700});
			c1959.css({"stroke-width": 1.75}).attr("r", "3.5");
		}  if (e.type == "leave" || e.scrollDirection == "reverse"){
			t1959.css({"fill": "black", "font-size": 8, "font-weight": 400});
			c1959.css({"stroke-width": 1.3333}).attr("r", "2");
		}  if (e.type == "leave" || e.scrollDirection == "forward"){
			t1959.css({"fill": "white", "font-size": 8, "font-weight": 400});
			c1959.css({"stroke-width": 1.3333}).attr("r", "2");
		}
	}
	var tween_arrow_3 = TweenMax.to(time_arrow, 1, {y: 40});
	var scene1959 = new ScrollScene({
		triggerElement: ".nextriger3",
		duration: wh * 9,
			offset: 0,
		triggerHook: "onLeave"
	})
	.setTween(tween_arrow_3)
	.addTo(controller)
	.on("enter leave", y1959);	


}









});// end document.ready


	$(window).on("resize", function () {
		wh = $(window).innerHeight();
		ww = $(window).innerWidth();
		//controller.destroy();
		//controller.enabled(false);
		//controller = null;
	});	

////////////////////	
})(jQuery);