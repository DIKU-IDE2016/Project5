var firsttime = true;

$(document).ready(function() {
	$("#menu").hide();
	$('#fullpage').fullpage({
		sectionsColor: ['#1bbc9b', '#FF847C', '#1bbc9b', 'whitesmoke', '#ccddff'],
		anchors: ['intro', 'visualization1', 'visualization2'],
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
			
		}
	});

	$("#demosMenu").change(function(){
      window.location.href = $(this).find("option:selected").attr("id") + '.html';
    });

    $(".fa").click(function(){
    	$.fn.fullpage.moveSectionDown();
    });

});