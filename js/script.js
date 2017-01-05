var firsttime = true;

$(document).ready(function() {
	$("#menu").hide();
	$('#fullpage').fullpage({
		sectionsColor: ['whitesmoke', '#FF847C', '#1bbc9b', '#0B486B', '#ccddff'],
		anchors: ['intro', 'visualization1', 'visualization2', 'aboutus'],
		menu: '#menu',
		onLeave: function(index, nextIndex, direction){
			firsttime = false;
			if(nextIndex != 1)
				$("#menu").fadeIn();
			else
				$("#menu").fadeOut();
		},
		afterLoad: function(anchorLink, index){

			if(index == 1){
				$('#section0 .text-editor-wrap').delay(1000).animate({opacity: 1}, 1000, function() {
					$('#being_typed_intro').delay(500).animate({ marginTop: "0", opacity: 1 }, 1500, function(){
						$('#sc_ind').fadeIn().delay(5000).queue(function(next) {
  							$(this).addClass("bouncing");
  							next();
						});
					});
				});

				
			}
			else if(index == 2){
				$('#section1 iframe').animate({ opacity: 1 }, 1500, function(){
					$('#section1 .vis_wrap_right').animate({ opacity: 1 }, 1000, function(){
						$('#section1 .inner-text').delay(500).animate({ marginTop: "0", opacity: 1 }, 1500);
					});
				});
				
			}
			else if(index == 3){
				$('#section2 iframe').animate({ opacity: 1 }, 1500, function(){
					$('#section2 .vis_wrap').animate({ opacity: 1 }, 1000, function(){
						$('#section2 .inner-text').delay(500).animate({ marginTop: "0", opacity: 1 }, 1500);
					});
				});
			}

			if(index == 4){
						//moving the image
				$('#section3').find('img').delay(500).animate({
					left: '0%'
				}, 1500, 'easeOutExpo');

				$('#section3').find('p').first().fadeIn(1800, function(){
					$('#section1').find('p').last().fadeIn(1800,function() {
						$('#ed').animate({ opacity: 1 }, 800, function() {
							$('#eh').animate({ opacity: 1 }, 800, function() {
								$('#gb').animate({ opacity: 1 }, 800);
							});
						});
					});
				});

			}
			
		}
	});

	$("#demosMenu").change(function(){
      window.location.href = $(this).find("option:selected").attr("id") + '.html';
    });

    $(".fa").click(function(){
    	$.fn.fullpage.moveSectionDown();
    });

});