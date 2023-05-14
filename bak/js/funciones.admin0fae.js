/*********************************
 OPTIONS
 **********************************/
var isBeingSorted = false;
var focusedOnTooltip = false;
$(document).on("click",'.submit',function(e){
    return false;
});
$(document).on("click",'#productFilters .well [data-propertyid]',function(){
var id_propiedad = $(this).data("propertyid");
    if(!$(this).prop("checked")){
        $('#filtersList [data-propertyid="'+id_propiedad+'"]').click();
    }
});
function isLogged(id_license) {
    $.ajax({
        type: "POST",
        url: "/Application/Legacy/ajax/check_islogged.php",
        data: "id_license=" + id_license,
        success: function (res) {
            switch (res) {
                case "0": //sesión caducada
                case "2": //sesión sin id_license, previsiblemente caducada
                    window.location = "/login?exp=1&redirect=" + escape($(location).attr('href'));
                    break;
                case "3":
                    //inicio de sesión paralelo
                    window.location.reload();
                    break;
            }
        }
    })
}

function posSubmenus() {
    if ($('#menu_edit_license').length > 0) {
        pos = $('#menu_edit_license').offset();
        $('#opciones_license').css('left', pos.left - ($('#opciones_license').width() - $('#menu_edit_license').width()));
    }

    if ($('#menu_edit_disenho').length > 0) {
        pos = $('#menu_edit_disenho').offset();
        $('#opciones_disenho').css('left', pos.left - ($('#opciones_disenho').width() - $('#menu_edit_disenho').width()));
    }
    if ($('#menu_edit_listadisenhos').length > 0) {
        pos = $('#menu_edit_listadisenhos').offset();
        $('#opciones_listadisenhos').css('left', (pos.left - ($('#opciones_listadisenhos').width() - $('#menu_edit_listadisenhos').width())) + 20);
    }
}
function initMenuEdit() {

    $(window).resize(function () {
        posSubmenus();
    });


    $("a.menu_edit_desplegable").click(function (event) {
        event.preventDefault();
        posSubmenus();
        tmpid = $(this).attr('id').replace('menu_edit_', '');
        $(this).siblings().removeClass('menu_edit_desplegable_activo')
        $(this).siblings('.menu_edit_desplegable_opciones:not(#opciones_' + tmpid + ')').hide();
        $(this).toggleClass('menu_edit_desplegable_activo');
        $(this).siblings('#opciones_' + tmpid).slideToggle(150);
        event.stopPropagation();

    });
    $(".menu_edit_desplegable_opciones").click(function (event) {
        event.stopPropagation();
    });
    $("a.menu_edit_desplegable").mouseenter(function (event) {
        $(this).children('.menu_edit_flecha').css('background-position', '-31px -7px')
    }).mouseleave(function (event) {
            $(this).children('.menu_edit_flecha').css('background-position', '-31px -1px')
        });
    $("#opciones_listadisenhos li").mouseenter(function (event) {
        $(this).children('.menu_edit_disenho_seleccionado').show();
    });
    $("#opciones_listadisenhos li").mouseleave(function (event) {
        if ($(this).children('.menu_edit_disenho_seleccionado').attr("id") != "disenho_actual")$(this).children('.menu_edit_disenho_seleccionado').hide();
    });
    $(document).click(function () {
        $("a.menu_edit_desplegable").removeClass('menu_edit_desplegable_activo')
        $('.menu_edit_desplegable_opciones').slideUp(150);
    });
}
function createOption() {
    if (checkForm($("#addOption")) == true) {
        _this = $("#submit");
        _this.attr("disabled", "disabled");

        html_backup = _this.html();
        _this.html("<img src='Application/Legacy/img/theme/ajax-loader-button.gif' />");

        title = js_sanitize($("#addOption input[name='title']").val());

        id_bodies_types = $("#id_bodies_types option:selected").val();
        if ($("#user").length > 0) {
            user = js_sanitize($("#user").val());
            password = js_sanitize($("#password").val());
        } else {
            user = "";
            password = "";
        }

        //FIX NATXO PARA VALIDACION DE ENACE EXTERNO
        if ($('#id_bodies_types').val() == 12 || $('#id_bodies_types').val() == 11) href = encodeURIComponent($("#href").val());
        else href = "";

        if ($('#id_bodies_types').val() == 4 && $('#id_sort_mode_div').is(':visible')) id_sort_mode = $('#id_sort_mode').val();
        else id_sort_mode = "";

        seo_title = js_sanitize($("#seo_title").val());
        seo_keywords = js_sanitize($("#seo_keywords").val());
        seo_description = js_sanitize($("#seo_description").val());

        var slug = $(".permalink_input").val();
        //if(checkPermalink('#addOption')){
        $.ajax({
            type: "POST",
            url: "/Application/Legacy/ajax/ajax.functions.php",
            data: "function=addOption&id_license=" + id_license + "&id_design=" + id_design + "&id_language=" + id_language + "&id_menu=" + id_menu + "&id_bodies_types=" + id_bodies_types + "&title=" + title + "&user=" + user + "&password=" + password + "&href=" + href + "&slug=" + slug + "&seo_title=" + seo_title + "&seo_keywords=" + seo_keywords + "&seo_description=" + seo_description + "&id_sort_mode=" + id_sort_mode,
            success: function (res) {
                if (res == 1) {
                    window.location = "mydesign?id=" + id_design + "&res=1";
                } else {
                    txt = "Se ha producido un error. <br />Por favor int&eacute;ntalo de nuevo m&aacute;s tarde";
                    messageBox(txt, res);
                    _this.html(html_backup);
                    _this.removeAttr("disabled");
                }
            }
        })
        //}else{
        //	_this.html(html_backup)
        //	_this.removeAttr("disabled");
        //}
    }
}
function configOption() {
    if (checkForm($("#configOption")) == true) {
        _this = $("#submit");
        _this.attr("disabled", "disabled");

        html_backup = _this.html();
        _this.html("<img src='Application/Legacy/img/theme/ajax-loader-button.gif' />");

        title = js_sanitize($("#configOption input[name='title']").val())
        if ($("#user").length > 0) {
            user = js_sanitize($("#user").val())
            password = js_sanitize($("#password").val())
        } else {
            user = "";
            password = "";
            user_cache = "";
            password_cache = "";
            href_cache = "";
        }
        id_bodies_types = $("#id_bodies_types option:selected").val();

        seo_title = js_sanitize($("#seo_title").val());
        seo_keywords = js_sanitize($("#seo_keywords").val());
        seo_description = js_sanitize($("#seo_description").val());

        //if($("#href").length) href=$("#href").val();
        //else href="";

        if ($('#id_bodies_types').val() == 12 || $('#id_bodies_types').val() == 11) href = encodeURIComponent($("#href").val());
        else href = "";
        //alert($('#id_bodies_types').val())

        if ($('#id_bodies_types').val() == 4 && $('#id_sort_mode_div').is(':visible')) id_sort_mode = $('#id_sort_mode').val();
        else id_sort_mode = "";

        var slug = $(".permalink_input").val();
        var slug_cache = $(".permalink_actual").val();

        //if(checkPermalink("#configOption")){
        if (id_bodies_types != id_bodies_types_cache) {
            if (confirm("Al seleccionar un tipo de sección diferente los datos actuales se perderán. \n¿Seguro que quieres cambiar el tipo de sección?")) {
                $.ajax({
                    type: "POST",
                    url: "/Application/Legacy/ajax/ajax.functions.php",
                    data: "function=updateOption&id_licenses_options=" + $("#id_license_option").val() + "&id_license=" + id_license + "&id_design=" + id_design + "&id_language=" + id_language + "&id_menu=" + id_menu + "&id_bodies_types=" + id_bodies_types + "&title=" + title + "&user=" + user + "&password=" + password + "&href=" + href + "&slug=" + slug + "&seo_title=" + seo_title + "&seo_keywords=" + seo_keywords + "&seo_description=" + seo_description + "&id_sort_mode=" + id_sort_mode,
                    success: function (res) {
                        if (res == 1) {
                            window.location = "mydesign?id=" + id_design + "&res=1";
                        } else {
                            txt = "Se ha producido un error. <br />Por favor int&eacute;ntalo de nuevo m&aacute;s tarde";
                            messageBox(txt, res);

                            _this.html(html_backup)
                            _this.removeAttr("disabled");
                        }
                    }
                })
            } else {
                _this.html(html_backup)
                _this.removeAttr("disabled");
            }
        } else {


            if (title != title_cache || user != user_cache || password != password_cache || slug != slug_cache || href != href_cache) {
                //Sólo actualizar el nombre...
                $.ajax({
                    type: "POST",
                    url: "/Application/Legacy/ajax/ajax.functions.php",
                    data: "function=updateSimpleOption&id_licenses_options=" + $("#id_license_option").val() + "&title=" + title + "&user=" + user + "&password=" + password + "&href=" + href + "&slug=" + slug + "&seo_title=" + seo_title + "&seo_keywords=" + seo_keywords + "&seo_description=" + seo_description + "&id_sort_mode=" + id_sort_mode,
                    success: function (res) {
                        if (res == 1) {
                            window.location = "mydesign?id=" + id_design + "&res=1";
                        } else {
                            txt = "Se ha producido un error. <br />Por favor int&eacute;ntalo de nuevo m&aacute;s tarde";
                            messageBox(txt, res);

                            _this.html(html_backup)
                            _this.removeAttr("disabled");
                        }
                    }
                })
            } else {
                $.fancybox.close();
            }
        }
        //}else{
        // _this.html(html_backup)
        // _this.removeAttr("disabled")
        //}
    }
}
function checkPermalink(cont) {

    if ($(cont + " .permalink_cont:hidden").length > 0) return 1;

    var input = $(cont + " .permalink_input").val();
    var actual = $(cont + " .permalink_actual").val();

    if (input == undefined) {
        var input = $(cont + " .permalink-input").val();
        var actual = $(cont + " .permalink-actual").val();
    }

    if (input != "") {
        if (input != actual) {
            if (checkSlug(input) == true) {
                $.ajax({
                    type: "POST",
                    async: false,
                    url: "/Application/Legacy/ajax/ajax.functions.php",
                    data: "function=unique_permalink&slug=" + input + "&id_license=" + id_license + "&id_design=" + id_design + "&id_language=" + id_language,
                    success: function (res) {
                        result = res;
                        if (result != 1) {
                            $(".permalink_input").css("border", "1px solid #F00");
                            messageBox("El enlace directo ya está siendo utilizado", result);
                        }
                    }
                })
            } else {
                result = 0;
                $(".permalink_input").css("border", "1px solid #F00");
                messageBox("El enlace directo contiene caracteres inválidos", result);
            }
        } else {
            result = 1
        }
    } else {
        result = 0;
        $(".permalink_input").css("border", "1px solid #F00");
        messageBox("El enlace directo está vacio", result);
    }
    return result;
}
/*********************************
 CONFIG
 **********************************/
function initArrows(editMode) {
    var _slice_cab = $("#slice_cab");
    var _slice_menu1 = $("#slice_menu1");
    var _slice_menu2 = $("#slice_menu2");
    var _slice_menu3 = $("#slice_menu3");
    var _slice_cont = $("#slice_cont");
    var _slice_footer = $("#slice_footer");
    var _arrow = $(".arrow");

    //_arrow.css("visibility","visible");
    //_arrow.fadeTo('fast', 0.4);

    _arrow.parent().mouseenter(function () {
        fade($(this).children(".arrow"), 0.7, "fast")
        if (editMode) {
            $('.slice').qtip('hide');
        }
    }).mouseleave(function () {
            fade($(this).children(".arrow"), 0.4, "slow")
        })

    if (_slice_cab) {
        _slice_cab.slides({
            prev: 'prev_cab',
            next: 'next_cab'
        });
    }

    if (_slice_menu1) {
        _slice_menu1.slides({
            prev: 'prev_menu1',
            next: 'next_menu1',
            animationStart: function (current, obj) {
                obj.css("overflow", "hidden"); //#slice_menu1, etc
            },
            animationComplete: function (current, obj) {
                obj.parent().parent().css("overflow", "visible"); //#slice_menu1, etc
                //alert(obj.children().eq(current-1).attr("id"))
                if (obj.find("li").css("float") == "none") {
                    obj.parent().parent().children(".arrow").height(obj.find(".menu:visible").outerHeight())
                }
            },
            slidesLoaded: function (current, obj) {
                if (obj.find("li").css("float") == "none") {
                    obj.parent().parent().parent().children(".arrow").height(obj.find(".menu:visible").outerHeight())
                }
            }
        });

    }
    if (_slice_menu2) {
        _slice_menu2.slides({
            prev: 'prev_menu2',
            next: 'next_menu2',
            animationStart: function (current, obj) {
                obj.css("overflow", "hidden"); //#slice_menu1, etc
            },
            animationComplete: function (current, obj) {
                obj.parent().parent().css("overflow", "visible"); //#slice_menu1, etc
                //alert(obj.children().eq(current-1).attr("id"))
                if (obj.find("li").css("float") == "none") {
                    obj.parent().parent().children(".arrow").height(obj.find(".menu:visible").outerHeight())
                }
            },
            slidesLoaded: function (current, obj) {
                if (obj.find("li").css("float") == "none") {
                    obj.parent().parent().parent().children(".arrow").height(obj.find(".menu:visible").outerHeight())
                }
            }
        });
    }
    if (_slice_menu3) {
        _slice_menu3.slides({
            prev: 'prev_menu3',
            next: 'next_menu3',
            animationStart: function (current, obj) {
                obj.css("overflow", "hidden"); //#slice_menu1, etc
            },
            animationComplete: function (current, obj) {
                obj.parent().parent().css("overflow", "visible"); //#slice_menu1, etc
                //alert(obj.children().eq(current-1).attr("id"))
                if (obj.find("li").css("float") == "none") {
                    obj.parent().parent().children(".arrow").height(obj.find(".menu:visible").outerHeight())
                }
            },
            slidesLoaded: function (current, obj) {
                if (obj.find("li").css("float") == "none") {
                    obj.parent().parent().parent().children(".arrow").height(obj.find(".menu:visible").outerHeight())
                }
            }
        });
    }

    if (_slice_cont) {
        _slice_cont.slides({
            prev: 'prev_cont',
            next: 'next_cont',
            animationStart: function (current, elem, upcoming) {

                try {
                    var current_body = $(' #slice_cont .slides_control > div:nth-child(' + upcoming + ')').attr("current_body");
                    console.log(current_body);
                    //ejecutar funcion si existe
                    eval("init_" + current_body + "()");
                }
                catch (error) {
                }
            },
            animationComplete: function (current) {
                _slice_cont.stop().animate({
                    height: $('#slice_cont .slides_container .slides_control').children('div:visible').outerHeight(true)
                }, 300, function () {
                });
            },
            slidesLoaded: function (current) {
                try {
                    var current_body = $(' #slice_cont .slides_control > div:nth-child(' + current + ')').attr("current_body");
                    //ejecutar funcion si existe
                    eval("init_" + current_body + "()");
                }
                catch (error) {
                }
            }
        });
    }
    if (_slice_footer) {
        _slice_footer.slides({
            prev: 'prev_footer',
            next: 'next_footer'
        })
    }
    $('.vertical-menu-design .vertical-menu .next, .vertical-menu-design .prev_cont').stop(true, true).hide()

    $('.slice, .arrow').parent().mouseleave(function () {
        $('.arrow, .saveSlice').not('.hide').fadeIn('slow')
        $('.vertical-menu-design .vertical-menu .next, .vertical-menu-design .prev_cont').stop(true, true).hide()
    })

    $('.slice, .arrow').parent().mouseover(function () {
        $('.arrow, .saveSlice').stop(true, true).hide()
        $(this).stop(true, true).show()
        $(this).find('.arrow').not('.hide').stop(true, true).show()
        $(this).find('.saveSlice').stop(true, true).show()
        $(this).siblings('.arrow').not('.hide').stop(true, true).show()
        $(this).siblings('.saveSlice').stop(true, true).show()
    })
}

function disableClicks() {
    console.log("intentando disableClicks...");
    if ($("#blocker").length == 0) {
        console.log("disableClicks...")
        $("body").prepend("<div id='blocker'></div>");
        $("#blocker").css("height", $(document).height());
    }
}
function enableClicks() {
    console.log("enableClicks...")
    $("#blocker").remove();
}

function editorStart(selectedArray, selectedIndex, selectedOptions) {
    console.log("editorStart...");
    var mod = $(selectedArray[selectedIndex]).attr("href").toString().split("#");
    mod = mod[1];

    if ($('#' + mod + ' textarea.editortexto').length) disableClicks();

    $('#' + mod + ' textarea.editortexto').each(function (i) {
        $(this).val($('#hidden_' + $(this).attr('id')).val())
        $(this).ckeditor();
        CKEDITOR.config.toolbar_Full =
            [
                { name: 'basicstyles', items: [ 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat' ] },
                { name: 'clipboard', items: [ 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo' ] },
                { name: 'document', items: [ 'Source'] },
                'index.html',
                { name: 'paragraph', items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock' ] },
                { name: 'links', items: [ 'Link', 'Unlink', 'Image', 'HorizontalRule', 'SpecialChar' ] },
                { name: 'colors', items: [ 'TextColor', 'BGColor' ] }
            ];
        CKEDITOR.config.toolbarCanCollapse = false;
        CKEDITOR.on("instanceReady", function (event) {
            enableClicks()
        });
    })
    if (mod == "addnew") {
        setTimeout(function () {
            $("#addnew_title").focus();
        }, 100);
    }
    if (mod == "addproduct") {
        setTimeout(function () {
            $("#addproduct_title").focus();
        }, 100);
    }
}

function editorClose(selectedArray, selectedIndex, selectedOptions) {
    console.log("editorClose...");
    //los parámetros los crea el fancybox automaticamente
    //var mod =selectedArray.toString().split("#");
    var mod = $(selectedArray[selectedIndex]).attr("href").toString().split("#");
    mod = mod[1];

    $('#' + mod + ' textarea.editortexto').each(function (i) {
        $('#hidden_' + $(this).attr('id')).val($(this).val());
        //eval("CKEDITOR.instances."+$(this).attr('id')+".destroy()");
    })
}

function editorDestroy(selectedArray, selectedIndex, selectedOptions) {
    console.log("editorDestroy...");
    //enableClicks()
    //los parámetros los crea el fancybox automaticamente
    var mod = $(selectedArray[selectedIndex]).attr("href").toString().split("#");
    mod = mod[1];

    if (Object.keys(CKEDITOR.instances).length > 0) {
        $('#' + mod + ' textarea.editortexto').each(function (i) {
            var editorID = $(this).attr("id");
            console.log("CKEDITOR: Borrando..." + editorID)
            $('#hidden_' + editorID).val($(this).val());
            eval("CKEDITOR.instances." + editorID + ".destroy(); ");
        });
    }
}
function initSubmenus() {
    //console.log("initSubmenus")
    function liHoverOn() {
        //console.log("startHover")
        focusedOnMenu = true;
        //console.log("focusedOnMenu="+focusedOnMenu)
        $(this).children("ul").css("display", "block");
    }

    function liHoverOff() {
        //console.log("llamando a endHover...")
        //console.log("focusedOnTooltip="+focusedOnTooltip)
        focusedOnMenu = false;
        //console.log("focusedOnMenu="+focusedOnMenu)
        if (!focusedOnTooltip) {
            //console.log("> mouseleave")
            $(this).children("ul").css("display", "none");
        }
    }

    $(".slice_menu:not(.accordion) ul li,#slice_menu ul li").hoverIntent({
        over: liHoverOn,
        out: liHoverOff,
        interval: 0,
        timeout: 50
    });
}
function replaceQueryString(url, param, value) {
    var re = new RegExp("([?|&])" + param + "=.*?(&|$)", "i");
    if (url.match(re))
        return url.replace(re, '$1' + param + "=" + value + '$2');
    else if (url.indexOf("?") != -1) {
        //url SI contiene "?"
        var union = '&';
    } else {
        var union = '?';
    }
    return url + union + param + "=" + value;

}
function initMenu(designSlug, id_design, u, id_language, editMode, isMyDesign, seccion) {
    _designSlug = designSlug;
    _id_design = id_design;
    _u = u;
    _l = id_language;
    _editMode = editMode;
    _imd = isMyDesign;
    _seccion = seccion;

    initSubmenus();

    $(".slice_menu ul ul,#slice_menu ul ul").on('mouseover mouseout', function (event) {
        siblings = $(this).siblings(".mainMenu");
        elements_dep = siblings.children(".spn1,.spn2");

        if (event.type == "mouseover") {
            elements_dep.addClass("activo")
        } else {
            if (siblings.parent().attr("id") != idOptionActual) {
                elements_dep.removeClass("activo")
            }
        }
    })

    $(".slice_menu ul a:not(.addOptionTrigger),#slice_menu ul a:not(.addOptionTrigger)").on('click', function () {
        if (!isBeingSorted) {
            idOptionActual = $(this).parent().attr("id");
            body = $(this).attr("body");

            if (body == "grupo-subsecciones" || body == "enlace-externo") return false;
            //menus "antiguos"
            $(".menu .activo").removeClass("activo");
            $("#" + idOptionActual + " .spn1:first, #" + idOptionActual + " .spn2:first").addClass("activo");
            //menus bootstrap
            /*$(".menu .active").removeClass("active");*/
            $("#" + idOptionActual).addClass("active");

            //console.log("idOptionActual= "+idOptionActual);
            id_option = idOptionActual.replace("id_option", ""); //elimino la cadena "id_option"

            if (isMyDesign) {
                $.each($(".app-tab"), function (i, val) {
                    $(this).prop("href", replaceQueryString($(this).prop("href"), "id_option", id_option));
                });
            }

            $.ajax({
                type: "POST",
                url: SITE_URL + "/Application/Legacy/ajax/ajax.functions.php",
                data: "function=getBodies&designSlug=" + designSlug + "&body=" + body + "&id_design=" + id_design + "&isMyDesign=" + isMyDesign + "&id_language=" + id_language + "&editMode=" + editMode + "&id_option=" + id_option + "&seccion=" + seccion + "&id_license=" + id_license,
                success: function (msg) {
                    
                    $("#slice_cont .slides_container").html(msg);
                    initUploaders();
                    $("body").attr("id", "id_option" + id_option);
                    if (seccion == 'content') {
                        $(".modulo").fancybox({
                            onComplete: editorStart,
                            onCleanup: editorDestroy,
                            'transitionIn': 'none',
                            'transitionOut': 'none'
                        });
                    } else {
                        initFancyBox();
                        $('.modulo').each(function () {
                            $(this).removeClass("modulo");
                        })
                        $('#slice_cont').slides({
                            prev: 'prev_cont',
                            next: 'next_cont',
                            animationStart: function (current, elem, upcoming) {
                                try {
                                    var current_body = $(' #slice_cont .slides_control > div:nth-child(' + upcoming + ')').attr("current_body");
                                    console.log(current_body);
                                    eval("init_" + current_body + "()");
                                }
                                catch (error) {
                                }
                            },
                            animationComplete: function (current) {

                                $('#slice_cont').stop().animate({
                                    height: $('#slice_cont .slides_container .slides_control').children('div:visible').outerHeight(true)
                                }, 300, function () {
                                });

                            },
                            slidesLoaded: function (current) {
                                try {
                                    var current_body = $(' #slice_cont .slides_control > div:nth-child(' + current + ')').attr("current_body");
                                    eval("init_" + current_body + "()");
                                }
                                catch (error) {
                                }
                                $('#slice_cont').stop().animate({
                                    height: $('#slice_cont .slides_container .slides_control').children('div:visible').outerHeight(true)
                                }, 500, function () {
                                });

                            }
                        });
                    }
                    
                }
            });
            $('#slice_cont').css('height', 'auto');
            /*return false;*/
            /**cambiar**/
        }
    });
}
function initSaveSlice(id_design, id_license, id_language) {

    $(document).on('click', '.saveSlice', function () {
        var _this = $(this);

        _this.parent().parent().find(".assignedSlice").removeClass("assignedSlice");
        _this.addClass("assignedSlice");

        var table = _this.attr("table");
        var id = _this.attr("id"); //id_bodies, id_menus_styles, etc
        var id_license_option = idOptionActual.replace("id_option", ""); //elimino la cadena "id_option"


        if (_this.attr("id_menu")) {
            var id_menu = _this.attr("id_menu");
        } else {
            var id_menu = 0;
        }

        $.ajax({
            type: "POST",
            url: "/Application/Legacy/ajax/ajax.functions.php",
            data: "function=saveSlice&id_design=" + id_design + "&table=" + table + "&id=" + id + "&id_license_option=" + id_license_option + "&id_menu=" + id_menu + "&id_license=" + id_license + "&id_language=" + id_language,
            success: function (res) {
                if (res == 1) txt = "Cambios guardados correctamente";
                else txt = "Se ha producido un error, por favor int&eacute;ntalo de nuevo m&aacute;s tarde";

                messageBox(txt, res);
            }
        });

    });

    $(document).on('mouseover mouseout', '.saveSlice', function (event) {
        if (event.type == 'mouseover') {
            fade($(this).siblings(".saveWrapper"), 1, "fast")
        } else {
            fade($(this).siblings(".saveWrapper"), 0, "fast")
        }
    });

}
function initTooltipMenu(menuAxis) {    
    //if(menuAxis=="y") fixPos=-200;
    //else
    fixPos = 0;

    $(".triggerTooltipMenu").qtip("destroy");

    $(".tooltipMenu").on("mouseenter",function () {
        focusedOnTooltip = true;
    }).on("mouseleave", function () {
            focusedOnTooltip = false;
        })

    $(".triggerTooltipMenu").each(function () {
        var content = $(".tooltipMenu");
        content.attr("id", $(this).parent().attr("id"));
        content.attr("isMainMenu", $(this).hasClass("mainMenu"));
        content.attr("id_menu", $(this).parents('ul[id]').attr('id'));

        var slices_container = $("#slice_menu .slides_container");

        $(this).qtip({
            content: content.clone(),
            position: {
                adjust: {
                    method: "flip flip"//
	},
                my: "bottom center",
                at: "top center",
                viewport: $(window)

            },
            show: {
                delay: 700
            },
            hide: {
                fixed: true,
                delay: 400,
                effect: false
            },
            style: {
                tip: {
                    corner: true,
                    height: 14,
                    width: 17
                },
                width: 180,
                padding: 0,
                background: '#FFF',
                color: 'black',
                border: {
                    width: 1,
                    radius: 2,
                    color: '#FFF'
                },
                classes: "ui-tooltip-white ui-tooltip-shadow"
            },
            events: {
                render: function (event, api) {
                    if (isBeingSorted) {
                        //console.log("TOOLTIP DETECTA EL SORT! (Render)")
                        event.preventDefault()
                    }
                },
                show: function (event, api) {
                    if (isBeingSorted) {
                        //console.log("TOOLTIP DETECTA EL SORT! (Show)")
                        event.preventDefault()
                    } else {
                        thisTooltip = $(this).find(".tooltipMenu");

                        id = thisTooltip.attr("id");
                        id_licenses_options = id.toString().replace("id_option", "");
                        isMainMenu = thisTooltip.attr("isMainMenu");
                        id_menu = thisTooltip.attr("id_menu");
                        // *******************************************************************************/
                        thisTooltip.find(".addSubOption").fancybox({
                            href: '/Application/Legacy/ajax/ajax.functions.php?window=addSubOption&id_licenses_options=' + id_licenses_options + '&id_license=' + id_license + '&id_design=' + id_design + '&id_language=' + id_language + '&id_menu=' + id_menu
                        });
                        thisTooltip.find(".configOption").fancybox({
                            href: '/Application/Legacy/ajax/ajax.functions.php?window=configOption&id_licenses_options=' + id_licenses_options + '&id_license=' + id_license + '&id_design=' + id_design + '&id_language=' + id_language + "isMainMenu=" + isMainMenu + '&id_menu=' + id_menu
                        });                        
                        $(".tooltipMenu").removeClass("hidden");
                    }
                },
                focus: function (event, api) {
                    slices_container.find("#" + id + " .spn1:first").addClass("activo")
                    slices_container.find("#" + id + " .spn2:first").addClass("activo")                    
                },
                hide: function (event, api) {
                    slices_container.find("#" + id + " .spn1:first").removeClass("activo")
                    slices_container.find("#" + id + " .spn2:first").removeClass("activo")
                    $(".tooltipMenu").addClass("hidden");

                    slices_container.find("#" + idOptionActual + " .spn1:first").addClass("activo")
                    slices_container.find("#" + idOptionActual + " .spn2:first").addClass("activo")

                }
            }

        })
    });
    $('.qtip a').on('click', function () {
        //Oculto el/los tooltip(s) al pulsar algun link dentro de uno
        $('.qtip.ui-tooltip').qtip('hide');
    });
}
function initMenuSortable(id_design, imd, menuAxis) {
    $(".menu ul").sortable({
        revert: true,
        axis: menuAxis,
        items: "li:not(.addOption)",
        delay: 100,
        activate: function (event, ui) {
            isBeingSorted = true;
        },
        start: function (event, ui) {
            $('.qtip.ui-tooltip').qtip('hide');
            $(".addOption").addClass("invisible")
            $(this).children("li").children("ul").addClass("invisible");
        },
        stop: function (event, ui) {
            isBeingSorted = false;

            var order = Array();
            $.each($(this).children("li"), function (key, value) {
                if ($(this).attr("id")) {
                    id_option = $(this).attr("id").toString().replace("id_option", "")
                    order.push(id_option)
                }
            });
            //ocultar submenus...
            $(this).children("li").children("ul").removeClass("invisible");

            var d = id_design;
            var m = $(this).attr("id");

            $.ajax({
                type: "POST",
                url: "/Application/Legacy/ajax/ajax.functions.php",
                data: "function=orderMenuOptions&order=" + order + "&id=" + id_design + "&m=" + m + "&imd=" + imd,
                success: function (res) {
                    console.log("res=" + res)
                    if (res == 1)txt = "Cambios guardados correctamente";
                    else txt = "Se ha producido un error, por favor int&eacute;ntalo de nuevo m&aacute;s tarde";

                    messageBox(txt, res);

                    $(".addOption").removeClass("invisible")
                }
            });
        }
    });

    $(".menu ul ul").sortable({
        revert: true,
        axis: "y",
        delay: 100,
        activate: function (event, ui) {
            isBeingSorted = true;
        },
        start: function (event, ui) {
            $('.qtip.ui-tooltip').qtip('hide');
            $(".addOption").addClass("invisible")
            $(this).children("li").children("ul").addClass("invisible");
        },
        stop: function (event, ui) {
            isBeingSorted = false;

            var order = Array();
            $.each($(this).children("li"), function (key, value) {
                if ($(this).attr("id")) {
                    id_option = $(this).attr("id").toString().replace("id_option", "")
                    order.push(id_option)
                }
            });
            //ocultar submenus...
            $(this).children("li").children("ul").removeClass("invisible");

            var d = id_design;
            var m = $(this).attr("id");

            $.ajax({
                type: "POST",
                url: "/Application/Legacy/ajax/ajax.functions.php",
                data: "function=orderMenuOptions&order=" + order + "&id=" + id_design + "&m=" + m + "&imd=" + imd,
                success: function (res) {
                    console.log("res=" + res)
                    if (res == 1)txt = "Cambios guardados correctamente";
                    else txt = "Se ha producido un error, por favor int&eacute;ntalo de nuevo m&aacute;s tarde";

                    messageBox(txt, res);

                    $(".addOption").removeClass("invisible")
                }
            });
        }
    });

}
function dameAnchoMenu() {
    //Recorre los li del menu y calcula el ancho que ocupan
    var _anchoActual = 0;
    $(".menu:first ul:first").children("li").each(function (index) {
        _anchoActual += $(this).width();
    });
    /*if ((_anchoActual + minAncho) >= maxAncho) {
        $("#slice_menu1 .addOption").hide();
    } else {
        $("#slice_menu1 .addOption").show();
    }*/
    return _anchoActual;
}
function delOption(id_licenses_options) {
    return $.ajax({
        type: "POST",
        url: "/Application/Legacy/ajax/ajax.functions.php",
        data: "function=delOption&id_licenses_options=" + id_licenses_options,
        async: false,
        success: function (res) {
            return res;
        }
    }).responseText;
}
function licenseHasDesign(id_license) {
    return $.ajax({
        type: "POST",
        url: "/Application/Legacy/ajax/ajax.functions.php",
        data: "function=licenseHasDesign&id_license=" + id_license,
        async: false,
        success: function (res) {
            return res;
        }

    }).responseText;
}

function initSaveContent() {
    id_bodies = $("#slice_cont div").children().attr("class");

    $(".submit").on("click", function (event) {
        event.preventDefault();
        _this = $(this);

        var vacio = 0;
        _this.parent().find(".data").each(function (i) {
            if ($(this).val() !== "") vacio = 1;
        });
        if (vacio == 1) {
            _this.attr("disabled", "disabled");

            html_backup = _this.html();
            _this.html("<img src='Application/Legacy/img/theme/ajax-loader-button.gif' />");

            name_module = _this.parents("form").attr("name");
            var data = new Object();

            _this.parent().find(".data").each(function (i) {
                var name = $(this).attr("name");

                var type = $(this).get(0).tagName;
                var value = fixVal($(this).val());

                if ($.browser.msie) value = unicodeConverter(value);

                //console.log("value=" + value + "type=" + type + " \n");

                if (!data[name]) {
                    data[name] = [];
                }
                if (name.indexOf("[]") != -1) {
                    data[name].push(value);
                } else {
                    data[name] = value;
                }
            })
            data = JSON.stringify(data);

            if (name_module == "mod_header" || name_module == "mod_footer") {
                //header o footer

                if(id_header=='') id_header = $('div[href="#form_mod_header"]').attr('id');

                $.ajax({
                    type: "POST",
                    url: "/Application/Legacy/ajax/ajax.functions.php",
                    data: { "function": "saveDataHeaderFooter", data: data, "id_license": id_license, "id_design": id_design, "id_language": id_language, "id_header": id_header, "id_footer": id_footer, "name_module": name_module},
                    success: function (res) {
                        console.log("res=" + res);
                        _this.html(html_backup);
                        _this.removeAttr("disabled");

                        if (res == 1) {
                            if (name_module == "mod_footer") {
                                _this.parent().find(".data").each(function (i) {
                                    var name = $(this).attr("name");
                                    $("#" + name_module + " ." + name).html($(this).val())
                                })
                            }

                            txt = "Los cambios se han guardado correctamente";
                            $.fancybox.close();

                        } else {
                            txt = "Se ha producido un error. <br />Por favor int&eacute;ntalo de nuevo m&aacute;s tarde";
                        }
                        messageBox(txt, res);
                    }
                });
            } else {
                //contenido de modulos
                $.ajax({
                    type: "POST",
                    url: "/Application/Legacy/ajax/ajax.functions.php",
                    data: { "function": "saveDataModule", "data": data, "id_license": id_license, "id_design": id_design, "id_language": id_language, "id_bodies": id_bodies, "name_module": name_module, "id_licenses_options": idOptionActual.replace("id_option", "")},
                    success: function (res) {
                        console.log("res=" + res);
                        _this.html(html_backup);
                        _this.removeAttr("disabled");

                        if (res == 1) {
                            var img_cont = 0;
                            var campo_cont = 0;

                            _this.parent().find(".data").each(function (i) {

                                var $this = $(this);
                                var name = $this.attr("name");

                                if (name == "img[]") {
                                    var name = "img" + img_cont;
                                    var obj = $("#" + name_module + " ." + name);

                                    img_cont++;
                                    var format = obj.data("format")
                                    var params = obj.attr("p");
                                    var funcion = obj.attr("f");

                                    if ($this.val() != "") {

                                        $.ajax({
                                            type: 'POST',
                                            dataType: 'json',
                                            url: '/core/helpers/ajaxRequestHandler.php',
                                            data: {controller:'ImageController',action:'getStaticImageUrl',imagepath:$this.val(),format:format,ajax:true},
                                            success: function (response) {
                                                obj.html("<img " + params + " src='" + response + "' />");
                                            }
                                        })

                                    } else obj.html("");

                                    eval(funcion);

                                } else if (name == "campo[]") {
                                    var name = "campo" + campo_cont;
                                    campo_cont++;
                                    $("#" + name_module + " ." + name).html($this.val())
                                } else $("#" + name_module + " ." + name).html($this.val())
                            })

                            txt = "Los cambios se han guardado correctamente";
                            $.fancybox.close();
                        } else {
                            txt = "Se ha producido un error. <br />Por favor int&eacute;ntalo de nuevo m&aacute;s tarde";
                        }
                        messageBox(txt, res);
                    }
                });
            }
        } else {
            alert("Debe cubrir al menos un campo del formulario")
        }

    })
}
/*********************************
 FUNCIONES ROOT
 *********************************/


function deleteFile(botondelete) {
    botondelete.parent().find('.qq-upload-button-gray').show();
    botondelete.parent().find('.qq-upload-button-gray').css("background-image", "url(img/theme/uploader_add.png)");
    botondelete.hide();
    botondelete.parent().find('.deletefile_thmb').remove();
    botondelete.parent().find('.deletefile_txt').remove();
    botondelete.parent().find('.qq-upload-list').html("");
    $('#hidden_' + botondelete.parent().parent().attr('id')).val("");

}

function switchOptionShop() {
    var id_option = idOptionActual.replace("id_option", "");

    //ajax para saber si tiene tienda online contratada
    $.ajax({
        type: "POST",
        url: "/Application/Legacy/ajax/ajax.functions.php",
        data: "function=switchOptionShop&id_option=" + id_option + "&id_license=" + id_license,
        success: function (res) {
            if (res == 1) {
                txt = "Cambios realizados correctamente";
                messageBox(txt, res);

            } else if (2) {
                $('#switch_catalogo').nSwitch('off');
                txt = 'Para activar la cesta de la compra debes contratar el complemento "Tienda Online"';
                alert(txt);
            } else {
                txt = 'Error al realizar los cambios';
                messageBox(txt, res);
            }
        }
    })
}

function checkOptionShop() {
    var id_option = idOptionActual.replace("id_option", "");
    //ajax para saber si tiene tienda online contratada
    $.ajax({
        type: "POST",
        async: false,
        url: "/Application/Legacy/ajax/ajax.functions.php",
        data: "function=checkOptionShop&id_option=" + id_option,
        success: function (res) {
            resf = res;
        }
    });
    if (resf == 1) return true;
    else return false;
}
$(document).on("click", "#delDesignLicenseForm", function (event) {
    event.preventDefault();
    event.stopPropagation();

    var id_design = $("#delDesignLicense").data("id_design");
    var userinput = $("#delDesignLicenseUserInput").val();
    var user = $("#delDesignLicenseUserInput").data('user');

    if (userinput != user) {
        messageBox('El usuario es incorrecto, no se puede eliminar el diseño', 0);
    } else {
        messageBox("En proceso. Un momento por favor...", 2);
        $.ajax({
            type: "POST",
            url: "/Application/Legacy/ajax/ajax.functions.php",
            data: {"function": "delDesignLicense", "id_design": id_design},
            success: function (res) {
                if (res == 1) {
                    window.location = "profile8b25.html?res=1";
                } else {
                    txt = "Se ha producido un error, por favor int&eacute;ntalo de nuevo m&aacute;s tarde";
                    $("#messageBox").fadeOut();
                    messageBox(txt, res);
                }
            }
        });
    }
    $('#del-design-button').attr('data-clickover-open', '0')
    $('#del-design-button').data('clickover-open', '0')
    $('#del-design-button').clickover('hide')

})
function initCommonOptions() {
    $("#delDesignLicenseForm").on("submit", function (event) {
        event.preventDefault();
        event.stopPropagation();

        var id_design = $("#delDesignLicense").data("id_design");
        var userinput = $("#delDesignLicenseUserInput").val();
        var user = $("#delDesignLicenseUserInput").data('user');

        if (userinput != user) {
            messageBox('El usuario es incorrecto, no se puede eliminar el diseño', 0);
        } else {
            messageBox("En proceso. Un momento por favor...", 2);
            $.ajax({
                type: "POST",
                url: "/Application/Legacy/ajax/ajax.functions.php",
                data: {"function": "delDesignLicense", "id_design": id_design},
                success: function (res) {
                    if (res == 1) {
                        window.location = "profile8b25.html?res=1";
                    } else {
                        txt = "Se ha producido un error, por favor int&eacute;ntalo de nuevo m&aacute;s tarde";
                        $("#messageBox").fadeOut();
                        messageBox(txt, res);
                    }
                }
            });
        }
        $('#del-design-button').attr('data-clickover-open', '0')
        $('#del-design-button').data('clickover-open', '0')
        $('#del-design-button').clickover('hide')

    })
}
function isHtml(string) {
    return string.match(/<[a-z][a-z0-9]*>/g);
}

function initTabsWidthControl() {
    var maxWidth = $('#editConfigWrapper').width();
    var tabsWidth = 0;
    $('#editConfigTabs li').each(function () {
        tabsWidth += ($(this).width() + 8)
    })
    tabsWidth -= 40;
    //console.log(tabsWidth)
    //console.log(maxWidth)
    if (tabsWidth > maxWidth) {
        $('#editConfigTabs').css('margin-left', '14px')
        $('.edit-config-tabs-chevron').removeClass('hide')
        if ($('#editConfigTabs li.active').position().left + 200 > maxWidth) {
            $('#editConfigTabs').css('margin-left', (maxWidth - tabsWidth - 20) + 'px')
            $('#editConfigTabsRight i').css('opacity', '0.2')
        } else {
            $('#editConfigTabsLeft i').css('opacity', '0.2')
        }

    } else {
        $('#editConfigTabs').css('margin-left', '0px')
        $('.edit-config-tabs-chevron').addClass('hide')
    }
    $('#editConfigTabsLeft').click(function () {
        $(this).find('i').css('opacity', '0.2')
        $('#editConfigTabsRight i').css('opacity', '1')
        $('#editConfigTabs')
            .stop(true)
            .animate({
                'marginLeft': '14px'
            }, 200);
    })
    $('#editConfigTabsRight').click(function () {
        $(this).find('i').css('opacity', '0.2')
        $('#editConfigTabsLeft i').css('opacity', '1')
        $('#editConfigTabs')
            .stop(true)
            .animate({
                'marginLeft': (maxWidth - tabsWidth - 20) + 'px'
            }, 200);
    })
}


function arrowPositionControl() {
    //alert(1480 - $('#left-sidebar').outerWidth())
    if ($(window).width() < (1036 + $('#left-sidebar').outerWidth())) {
        $('#plantilla .prev').css('left', '0')
        $('#plantilla .next').css('right', '0')
        $('.saveSlice').css('right', '56px')
    } else {
        $('#plantilla .prev').css('left', '-46px')
        $('#plantilla .next').css('right', '-46px')
        $('#plantilla.vertical-menu-design .prev_cont').css('left', '-26px')
        $('.saveSlice').css('right', '10px')
    }
}

if (!Array.prototype.filter) {
    Array.prototype.filter = function (fun) {
        "use strict";

        if (this === void 0 || this === null)
            throw new TypeError();

        var t = Object(this);
        var len = t.length >>> 0;
        if (typeof fun !== "function")
            throw new TypeError();

        var res = [];
        var thisp = arguments[1];
        for (var i = 0; i < len; i++) {
            if (i in t) {
                var val = t[i]; // in case fun mutates this
                if (fun.call(thisp, val, i, t))
                    res.push(val);
            }
        }

        return res;
    };
}
/*carucel_medida*/
$(document).on("ready", function(){
    reajusta_carusel();
});
$(document).on("click", '#izquierda', anterior_slide);
$(document).on("click", '#derecha', siguiente_slide);
function anterior_slide (e) {
    $('#slide_carusel_usuarios_azteca div#contenido_item').hide();
    $('#slide_carusel_usuarios_azteca div#contenido_item:last-child').fadeOut(500)
        .prev('div#contenido_item')
        .end()
        .fadeIn(500)
        .prependTo('#slide_carusel_usuarios_azteca');
    reajusta_carusel();
}
function siguiente_slide (e) {
    $('#slide_carusel_usuarios_azteca div#contenido_item:first-child').fadeOut(500)
        .next('div#contenido_item').fadeIn(500)
        .end().appendTo('#slide_carusel_usuarios_azteca');
    reajusta_carusel();
}
function reajusta_carusel (e) {
    var height = $('#slide_carusel_usuarios_azteca #contenido_item #autopartes_cont').height();
    $('#slide_carusel_usuarios_azteca').css({"height":height+"px"});
}