/**
 * Created by Administrator on 16-4-23.
 */
$(function(){
var container = document.getElementsByClassName("container")[0];
    var mainArr=document.getElementsByClassName("draw");
container.addEventListener("mousemove",function(e){
    e=e||window.event;
    var target=e.srcElement||e.target;
    var x=e.offsetX;
    var y=e.offsetY;
    for(var i=0;i<mainArr.length;i++){
        mainArr[i].style.left=(x*(i+1)/100)+"px";
        mainArr[i].style.top=(y*(i+1)/50)+"px";
    }
});
    var timer = null;
$("[data-project='project']").click(function(){
        $("html,body").animate({scrollTop: $("#project").offset().top},500);
        return false;
    });
$("[data-aboutme='aboutme']").click(function(){
        $("html,body").animate({scrollTop: $("#aboutme").offset().top},500);
        return false;
    });
$("[data-skills='skills']").click(function(){
        $("html,body").animate({scrollTop: $("#aboutme").offset().top},500);
        return false;
    });
$("[data-home='home']").click(function(){
        $("html,body").animate({scrollTop: $("#home").offset().top},500);
        return false;
    });
$("[data-contact='contact']").click(function(){
        $("html,body").animate({scrollTop: $("#contact").offset().top},500);
        return false;
    });
});