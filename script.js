$(document).ready(function(){
    $('a').popover();
    // Get the element with id="defaultOpen" and click on it
    document.getElementById("defaultOpen").click();  

    $("#updatePlot").click(function() {
        selecttions = $("#pca_selector option:selected");
        if(selecttions.length < 2) {
            alert("atlea 2");
        }
        else {
            
        }
    });

});

function openTab(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}



// declare the dimensions and margins for both plots
const dim = {
    w: 500, 
    h: 500 
};

const margins = {
    top: 20, 
    right: 30, 
    bottom: 50, 
    left: 50
};
