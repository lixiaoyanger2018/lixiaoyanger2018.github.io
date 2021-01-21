jQuery(window).load(function(){
    jQuery('.preloader').delay(1000).fadeOut("slow");

    if (window.console) {
        var cons = console;
        if (cons) {
            cons.log('朋友：\n');
            cons.log('     你好~');
            cons.log('     照顾好小样...');
            cons.log('     谢谢');
        }
    }
});


function search(type) {
    if (event.keyCode == 13){
        event.returnValue=false;
        event.cancel = true;
        //o.form.submit();
        searchBaidu(type);
    }
}
function searchBaidu(type) {
    var keyword;
    if(type==1){
        keyword= document.getElementById("keyword").value;
    }else{
        keyword=document.getElementById("keyword2").value;
    }
    window.open("https://www.baidu.com/s?wd="+keyword);
}