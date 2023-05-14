$(document).ready(function(){
	$("#slice_menu").css("overflow","visible");
	$(".menu").css("display","block");	
	
	//Chrome fix flash & iframe	
	/*$("iframe").each(function(){
		if($(this).attr('src')){
			var ifr_source = $(this).attr('src');
			var aux = "?";
			if(ifr_source.indexOf("?")>=0) aux= "&amp;";
			var wmode = aux+"wmode=transparent";
			$(this).attr('src',ifr_source+wmode);
		}
	});*/

    $("a[href=#]").click(function(e) {
        e.preventDefault();
    });

	//footer al bottom FIX
	var altura_elementos = $("#plantilla_cab").height() + $("#plantilla_menu").height() + $("#plantilla_footer").height();
    if(typeof seccion !== 'undefined' && (seccion=="config" || seccion=="content")) altura_elementos += 35; //sumo altura barra superior
	$("#plantilla_cont").css("min-height",$(window).height()-altura_elementos);

})