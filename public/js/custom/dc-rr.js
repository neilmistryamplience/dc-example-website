function personalizePage(){
    $(".dc-px").each(function( index ) {
        personalizeContent($(this),$(this).data("host"),$(this).data("store"),$(this).data("slot"),$(this).data("segment"));
    });
}
function personalizeContent(div,host,store,slot,segment){
     $.get("https://"+host+"/v1/content/"+store+"/content-item/"+slot+"?template="+segment, function(body) {
        div.html(body);
    });
}