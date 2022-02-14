
    
$(function(){
    $(".amout__decrease").click(function(){
        if (Number($(".amount").first().text())>1){
            $(".amount").text(Number($(".amount").first().text())-1);
        }
        
    })
    $(".amout__increase").click(function(){
        console.log(Number($(".amount").first().text()));
        $(".amount").text(Number($(".amount").first().text())+1);
    })
    $(".image").mouseover(function(e){
            console.log(e.currentTarget.src);
        $(".main_image").attr("src",e.currentTarget.src);
    })
    $(".image").mouseout(function(e){
        console.log("mouseout");
        $(".main_image").attr("src","image1.jpg");
        
    })
    $(".custom-btn--blue").click(function(){
    $.notify("В корзину добавлен товар в количестве " + $(".amount").text() + " ед.","success");
        
        console.log("Click");
    })
})
