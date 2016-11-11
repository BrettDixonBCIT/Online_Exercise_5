$(document).ready(function(){
    var topDiv = document.getElementById("backboxtop");
    var midDiv = document.getElementById("portfolioblock");
    var botDiv = document.getElementById("bioblock");
    
    $.ajax({
           url:"top.html",
           datatype:"html",
           success:function(resp){
               //if succussful, come back with response
               console.log(resp);
               topDiv.innerHTML = resp;
           } 
        });
    
    $.ajax({
           url:"middle.html",
           datatype:"html",
           success:function(resp){
               //if succussful, come back with response
               console.log(resp);
               midDiv.innerHTML = resp;
           } 
        });
    
    $.ajax({
           url:"bottom.html",
           datatype:"html",
           success:function(resp){
               //if succussful, come back with response
               console.log(resp);
               botDiv.innerHTML = resp;
           } 
        });
    
    
//    var imgSize = document.getElementsByClassName('portfolioimg');
//    var portBig1 = document.getElementById('plusbutton1');
//    var portSmall1 = document.getElementById('minusbutton1');
//    var portBig2 = document.getElementById('plusbutton2');
//    var portSmall2 = document.getElementById('minusbutton2');
//    var portBig3 = document.getElementById('plusbutton3');
//    var portSmall3 = document.getElementById('minusbutton3');
//    var portBig4 = document.getElementById('plusbutton4');
//    var portSmall4 = document.getElementById('minusbutton4');
//    var portBig5 = document.getElementById('plusbutton5');
//    var portSmall5 = document.getElementById('minusbutton5');
//    var portBlock = document.getElementById('portfolioblock');
//
//    var screen = parseFloat(window.getComputedStyle(portBlock, null).getPropertyValue("width"));
//
//    portBig1.onclick = function(){
//        var size = parseFloat(window.getComputedStyle(imgSize[0], null).getPropertyValue("width"));
//        var size = parseFloat(imgSize[0].style.width)
//        size = size / screen * 100;
//        size = size + 1;
//        imgSize[0].style.width = size + 'vw';
//        imgSize[0].style.height = 'auto';
//    }
//
//    portSmall1.onclick = function(){
//        var size = parseFloat(window.getComputedStyle(imgSize[0], null).getPropertyValue("width"));
//        size = size / screen * 100;
//        size = size - 1;
//        imgSize[0].style.width = size + 'vw';
//        imgSize[0].style.height = 'auto';
//    } 
//
//    portBig2.onclick = function(){
//        var size = parseFloat(window.getComputedStyle(imgSize[1], null).getPropertyValue("width"));
//        size = size / screen * 100;
//        size = size + 1;
//        imgSize[1].style.width = size + 'vw';
//        imgSize[1].style.height = 'auto';
//    }
//
//    portSmall2.onclick = function(){
//        var size = parseFloat(window.getComputedStyle(imgSize[1], null).getPropertyValue("width"));
//        size = size / screen * 100;
//        size = size - 1;
//        imgSize[1].style.width = size + 'vw';
//        imgSize[1].style.height = 'auto';
//    }
//
//    portBig3.onclick = function(){
//        var size = parseFloat(window.getComputedStyle(imgSize[2], null).getPropertyValue("width"));
//        size = size / screen * 100;
//        size = size + 1;
//        imgSize[2].style.width = size + 'vw';
//        imgSize[2].style.height = 'auto';
//    }
//
//    portSmall3.onclick = function(){
//        var size = parseFloat(window.getComputedStyle(imgSize[2], null).getPropertyValue("width"));
//        size = size / screen * 100;
//        size = size - 1;
//        imgSize[2].style.width = size + 'vw';
//        imgSize[2].style.height = 'auto';
//    }
//
//    portBig4.onclick = function(){
//        var size = parseFloat(window.getComputedStyle(imgSize[3], null).getPropertyValue("width"));
//        size = size / screen * 100;
//        size = size + 1;
//        imgSize[3].style.width = size + 'vw';
//        imgSize[3].style.height = 'auto';
//    }
//
//    portSmall4.onclick = function(){
//        var size = parseFloat(window.getComputedStyle(imgSize[3], null).getPropertyValue("width"));
//        size = size / screen * 100;
//        size = size - 1;
//        imgSize[3].style.width = size + 'vw';
//        imgSize[3].style.height = 'auto';
//    }
//
//    portBig5.onclick = function(){
//        var size = parseFloat(window.getComputedStyle(imgSize[4], null).getPropertyValue("width"));
//        size = size / screen * 100;
//        size = size + 1;
//        imgSize[4].style.width = size + 'vw';
//        imgSize[4].style.height = 'auto';
//    }
//
//    portSmall5.onclick = function(){
//        var size = parseFloat(window.getComputedStyle(imgSize[4], null).getPropertyValue("width"));
//        size = size / screen * 100;
//        size = size - 1;
//        imgSize[4].style.width = size + 'vw';
//        imgSize[4].style.height = 'auto';
//    }
});