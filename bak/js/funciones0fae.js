if (typeof console === "undefined") {
    console = { log: function () {
    }};
}
if (!Object.keys) Object.keys = function (o) {
    if (o !== Object(o))
        throw new TypeError('Object.keys called on non-object');
    var ret = [], p;
    for (p in o) if (Object.prototype.hasOwnProperty.call(o, p)) ret.push(p);
    return ret;
}
String.prototype.htmlEntities = function () {
    return this.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace("\n", '').replace("\t", '').replace(/[\\"']/g, '\\$&').replace(/\u0000/g, '\\0');
    ;
};


jQuery.fn.maxlength = function () {

    $("textarea[maxlength]").keypress(function (event) {
        var key = event.which;

        //all keys including return.
        if (key >= 33 || key == 13) {
            var maxLength = $(this).attr("maxlength");
            var length = this.value.length;
            if (length >= maxLength) {

                event.preventDefault();
            }
        }
    });

}

function array_unique(a) {
    return a.reduce(function (u, e) {
        if (!(e in u))
            u.push(e);

        return u;
    }, []);

}


function fixVal(val) {
    return val.replace(/\n/g, "").replace(/\t/g, "").replace(/"/g, "'");
}
function getURLPermalink(url) {
    var array = url.split("index.html");
    return array[array.length - 1];
}
function getCurrentURLParam(name) {
    return decodeURI(
        (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search) || [, null])[1]
    );
}


function getURLParameter(url) {
    var qsParm = new Array();
    var parms = url.split('&');
    for (var i = 0; i < parms.length; i++) {
        var pos = parms[i].indexOf('=');
        if (pos > 0) {
            var key = parms[i].substring(0, pos);
            var val = parms[i].substring(pos + 1);
            qsParm[key] = val;
        }
    }
    return qsParm;
}

function get_html_translation_table(table, quote_style) {
    // http://kevin.vanzonneveld.net
    // +   original by: Philip Peterson
    // +    revised by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: noname
    // +   bugfixed by: Alex
    // +   bugfixed by: Marco
    // +   bugfixed by: madipta
    // +   improved by: KELAN
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
    // +      input by: Frank Forte
    // +   bugfixed by: T.Wild
    // +      input by: Ratheous
    // %          note: It has been decided that we're not going to add global

    // %          note: dependencies to php.js, meaning the constants are not

    // %          note: real constants, but strings instead. Integers are also supported if someone

    // %          note: chooses to create the constants themselves.

    // *     example 1: get_html_translation_table('HTML_SPECIALCHARS');

    // *     returns 1: {'"': '&quot;', '&': '&amp;', '<': '&lt;', '>': '&gt;'}

    var entities = {},

        hash_map = {},

        decimal;

    var constMappingTable = {},

        constMappingQuoteStyle = {};

    var useTable = {},

        useQuoteStyle = {};


    // Translate arguments

    constMappingTable[0] = 'HTML_SPECIALCHARS';

    constMappingTable[1] = 'HTML_ENTITIES';

    constMappingQuoteStyle[0] = 'ENT_NOQUOTES';

    constMappingQuoteStyle[2] = 'ENT_COMPAT';

    constMappingQuoteStyle[3] = 'ENT_QUOTES';


    useTable = !isNaN(table) ? constMappingTable[table] : table ? table.toUpperCase() : 'HTML_SPECIALCHARS';

    useQuoteStyle = !isNaN(quote_style) ? constMappingQuoteStyle[quote_style] : quote_style ? quote_style.toUpperCase() : 'ENT_COMPAT';


    if (useTable !== 'HTML_SPECIALCHARS' && useTable !== 'HTML_ENTITIES') {

        throw new Error("Table: " + useTable + ' not supported');

        // return false;

    }


    entities['38'] = '&amp;';

    if (useTable === 'HTML_ENTITIES') {

        entities['160'] = '&nbsp;';

        entities['161'] = '&iexcl;';

        entities['162'] = '&cent;';

        entities['163'] = '&pound;';

        entities['164'] = '&curren;';

        entities['165'] = '&yen;';

        entities['166'] = '&brvbar;';

        entities['167'] = '&sect;';

        entities['168'] = '&uml;';

        entities['169'] = '&copy;';

        entities['170'] = '&ordf;';

        entities['171'] = '&laquo;';

        entities['172'] = '&not;';

        entities['173'] = '&shy;';

        entities['174'] = '&reg;';

        entities['175'] = '&macr;';

        entities['176'] = '&deg;';

        entities['177'] = '&plusmn;';

        entities['178'] = '&sup2;';

        entities['179'] = '&sup3;';

        entities['180'] = '&acute;';

        entities['181'] = '&micro;';

        entities['182'] = '&para;';

        entities['183'] = '&middot;';

        entities['184'] = '&cedil;';

        entities['185'] = '&sup1;';

        entities['186'] = '&ordm;';

        entities['187'] = '&raquo;';

        entities['188'] = '&frac14;';

        entities['189'] = '&frac12;';

        entities['190'] = '&frac34;';

        entities['191'] = '&iquest;';

        entities['192'] = '&Agrave;';

        entities['193'] = '&Aacute;';

        entities['194'] = '&Acirc;';

        entities['195'] = '&Atilde;';

        entities['196'] = '&Auml;';

        entities['197'] = '&Aring;';

        entities['198'] = '&AElig;';

        entities['199'] = '&Ccedil;';

        entities['200'] = '&Egrave;';

        entities['201'] = '&Eacute;';

        entities['202'] = '&Ecirc;';

        entities['203'] = '&Euml;';

        entities['204'] = '&Igrave;';

        entities['205'] = '&Iacute;';

        entities['206'] = '&Icirc;';

        entities['207'] = '&Iuml;';

        entities['208'] = '&ETH;';

        entities['209'] = '&Ntilde;';

        entities['210'] = '&Ograve;';

        entities['211'] = '&Oacute;';

        entities['212'] = '&Ocirc;';

        entities['213'] = '&Otilde;';

        entities['214'] = '&Ouml;';

        entities['215'] = '&times;';

        entities['216'] = '&Oslash;';

        entities['217'] = '&Ugrave;';

        entities['218'] = '&Uacute;';

        entities['219'] = '&Ucirc;';

        entities['220'] = '&Uuml;';

        entities['221'] = '&Yacute;';

        entities['222'] = '&THORN;';

        entities['223'] = '&szlig;';

        entities['224'] = '&agrave;';

        entities['225'] = '&aacute;';

        entities['226'] = '&acirc;';

        entities['227'] = '&atilde;';

        entities['228'] = '&auml;';

        entities['229'] = '&aring;';

        entities['230'] = '&aelig;';

        entities['231'] = '&ccedil;';

        entities['232'] = '&egrave;';

        entities['233'] = '&eacute;';

        entities['234'] = '&ecirc;';

        entities['235'] = '&euml;';

        entities['236'] = '&igrave;';

        entities['237'] = '&iacute;';

        entities['238'] = '&icirc;';

        entities['239'] = '&iuml;';

        entities['240'] = '&eth;';

        entities['241'] = '&ntilde;';

        entities['242'] = '&ograve;';

        entities['243'] = '&oacute;';

        entities['244'] = '&ocirc;';

        entities['245'] = '&otilde;';

        entities['246'] = '&ouml;';

        entities['247'] = '&divide;';

        entities['248'] = '&oslash;';

        entities['249'] = '&ugrave;';

        entities['250'] = '&uacute;';

        entities['251'] = '&ucirc;';

        entities['252'] = '&uuml;';

        entities['253'] = '&yacute;';

        entities['254'] = '&thorn;';

        entities['255'] = '&yuml;';

    }


    if (useQuoteStyle !== 'ENT_NOQUOTES') {

        entities['34'] = '&quot;';

    }

    if (useQuoteStyle === 'ENT_QUOTES') {

        entities['39'] = '&#39;';

    }

    entities['60'] = '&lt;';

    entities['62'] = '&gt;';


    // ascii decimals to real symbols

    for (decimal in entities) {

        if (entities.hasOwnProperty(decimal)) {

            hash_map[String.fromCharCode(decimal)] = entities[decimal];

        }

    }


    return hash_map;

}

function js_sanitize(param) {
    return param.replace(/&/g, '__and__').replace(/\+/g, '__more__');
}

function htmlentities(string, quote_style, charset, double_encode) {

    // http://kevin.vanzonneveld.net
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +    revised by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: nobbler
    // +    tweaked by: Jack
    // +   bugfixed by: Onno Marsman
    // +    revised by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +    bugfixed by: Brett Zamir (http://brett-zamir.me)
    // +      input by: Ratheous
    // +   improved by: Rafał Kukawski (http://blog.kukawski.pl)
    // +   improved by: Dj (http://phpjs.org/functions/htmlentities:425#comment_134018)
    // -    depends on: get_html_translation_table
    // *     example 1: htmlentities('Kevin & van Zonneveld');
    // *     returns 1: 'Kevin &amp; van Zonneveld'
    // *     example 2: htmlentities("foo'bar","ENT_QUOTES");
    // *     returns 2: 'foo&#039;bar'
    string = string.replace(/\n/g, "").replace(/\t/g, "").replace(/"/g, "'");

    var hash_map = this.get_html_translation_table('HTML_ENTITIES', quote_style),
        symbol = '';
    string = string == null ? '' : string + '';

    if (!hash_map) {
        return false;
    }

    if (quote_style && quote_style === 'ENT_QUOTES') {
        hash_map["'"] = '&#039;';
    }

    if (!!double_encode || double_encode == null) {
        for (symbol in hash_map) {
            if (hash_map.hasOwnProperty(symbol)) {
                string = string.split(symbol).join(hash_map[symbol]);
            }
        }
    } else {
        string = string.replace(/([\s\S]*?)(&(?:#\d+|#x[\da-f]+|[a-zA-Z][\da-z]*);|$)/g, function (ignore, text, entity) {
            for (symbol in hash_map) {
                if (hash_map.hasOwnProperty(symbol)) {
                    text = text.split(symbol).join(hash_map[symbol]);
                }
            }

            return text + entity;
        });
    }

    return string;
}


function fade(elem, param, speed) {
    elem.removeClass("invisible");
    elem.stop().animate({"opacity": param}, speed);

}

function messageBox(txt, status) {

    /****************************
     Muestra un mensaje en pantalla
     Para que funcione, debe haberse puesto el siguiente código después de <body> (preferiblemente):

     <div id="messageBox" class="hidden">
     <div id="messageBoxCont">
     </div>
     </div>
     *****************************/
    var divClass=null;
    var messagebox = $(".messagebox-bottom");
    var height = 90;

    if (status == 1) divClass='ok';
    else if (status == 2) divClass='loading';
    else if(status == 3){
        messagebox.trigger('click');
        return;
    }else divClass='ko';

    if (typeof(window['timer']) != "undefined") {
        clearTimeout(timer);
    }

    messagebox.css({
        "display": "block",
        "position": "fixed",
        "bottom": -height - 10
    });

    messagebox.find(".messagebox-txt")
                        .removeClass()
                        .addClass('messagebox-txt '+divClass)
                        .html(txt);

    messagebox.stop(true).animate({
            "bottom": 0
        },
        "fast",
        "easeOutExpo",
        function () {
            if (status != 2)
                timer = setTimeout(function () {
                        messagebox.stop(true).animate({
                                "bottom": -height - 10
                            },
                            "slow",
                            "easeOutExpo"
                        );
                    }, 3000
                );
        }
    );
    messagebox.click(function () {
        if (typeof(window['timer']) != "undefined") {
            clearTimeout(timer);
        }
        $(this).stop(true).animate({
                "bottom": -height - 10
            },
            "slow",
            "easeOutExpo"
        );
    })
}
function initFancyBox() {
    $("a.inline").fancybox({
        'onStart': function (links) {
        },
        'onClosed': resetFancyForm,
        'transitionIn': 'none',
        'transitionOut': 'none'
        //'onCleanup'     : resetFancyForm
    });


    $(".hideWindow").on('click', function () {
        $.fancybox.close();
    });
}

function resetFancyForm(links) {

    // get the div id of the fancybox container

    // (by taking data after the # from the end of the url)

    var split = links.toString().split("#");

    var divid = split[1];


    $("#" + divid + " option:first").attr("selected", "selected");

    $("#" + divid + " input").val('');

    $("#" + divid + " #submit").html("Guardar");

    $("#" + divid + " #submit").removeAttr("disabled");


}

/*********************************

 FORMULARIOS

 **********************************/

// Recibe el 'id' del elemento HTML para proceder a la validación, si es correcta devuelve 'true' y sino saca un alert y devuelve 'false'
//Requiere del framework jQuery
function valida_nif_cif_nie(obj) {
    var resul = true;
    var temp = $.trim(obj.val()).toUpperCase();
    var cadenadni = "TRWAGMYFPDXBNJZSQVHLCKE";
    if (temp !== '') {
        //algoritmo para comprobacion de codigos tipo CIF
        suma = parseInt(temp[2]) + parseInt(temp[4]) + parseInt(temp[6]);
        for (i = 1; i < 8; i += 2) {
            temp1 = 2 * parseInt(temp[i]);
            temp1 += '';
            temp1 = temp1.substring(0, 1);
            temp2 = 2 * parseInt(temp[i]);
            temp2 += '';
            temp2 = temp2.substring(1, 2);
            if (temp2 == '') {
                temp2 = '0';
            }
            suma += (parseInt(temp1) + parseInt(temp2));
        }
        suma += '';
        n = 10 - parseInt(suma.substring(suma.length - 1, suma.length));
        //si no tiene un formato valido devuelve error
        if ((!/^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$/.test(temp) && !/^[T]{1}[A-Z0-9]{8}$/.test(temp)) && !/^[0-9]{8}[A-Z]{1}$/.test(temp)) {
            if ((temp.length == 9) && (/^[0-9]{9}$/.test(temp))) {
                var posicion = temp.substring(8, 0) % 23;
                var letra = cadenadni.charAt(posicion);
                var letradni = temp.charAt(8);
                alert("La letra del NIF no es correcta. ");
                //jQuery('#'+a).val(temp.substr(0,8) + letra);
                resul = false;
            } else if (temp.length == 8) {
                if (/^[0-9]{1}/.test(temp)) {
                    var posicion = temp.substring(8, 0) % 23;
                    var letra = cadenadni.charAt(posicion);
                    var tipo = 'NIF';
                } else if (/^[KLM]{1}/.test(temp)) {
                    var letra = String.fromCharCode(64 + n);
                    var tipo = 'NIF';
                } else if (/^[ABCDEFGHJNPQRSUVW]{1}/.test(temp)) {
                    var letra = String.fromCharCode(64 + n);
                    var tipo = 'CIF';
                } else if (/^[T]{1}/.test(temp)) {
                    var letra = String.fromCharCode(64 + n);
                    var tipo = 'NIE';
                } else if (/^[XYZ]{1}/.test(temp)) {
                    var pos = str_replace(['X', 'Y', 'Z'], ['0', '1', '2'], temp).substring(0, 8) % 23;
                    var letra = cadenadni.substring(pos, pos + 1);
                    var tipo = 'NIE';
                }
                if (letra !== '') {
                    //alert("Añadido la letra del " + tipo + ": " + letra);
                    //jQuery('#'+a).val(temp + letra);
                    alert("CIF/NIF/NIE incorrecto");
                } else {
                    alert("El CIF/NIF/NIE tiene que tener 9 caracteres");
                    jQuery('#' + a).val(temp);
                }
                resul = false;
            } else if (temp.length < 8) {
                alert("El CIF/NIF/NIE tiene que tener 9 caracteres");
                jQuery('#' + a).val(temp);
                resul = false;
            } else {
                alert("CIF/NIF/NIE incorrecto");
                jQuery('#' + a).val(temp);
                resul = false;
            }
        }
        //comprobacion de NIFs estandar
        else if (/^[0-9]{8}[A-Z]{1}$/.test(temp)) {
            var posicion = temp.substring(8, 0) % 23;
            var letra = cadenadni.charAt(posicion);
            var letradni = temp.charAt(8);
            if (letra == letradni) {
                return 1;
            } else if (letra != letradni) {
                alert("La letra del NIF no es correcta.");
                //jQuery('#'+a).val(temp.substr(0,8) + letra);
                resul = false;
            } else {
                alert("NIF incorrecto");
                jQuery('#' + a).val(temp);
                resul = false;
            }
        }
        //comprobacion de NIFs especiales (se calculan como CIFs)
        else if (/^[KLM]{1}/.test(temp)) {
            if (temp[8] == String.fromCharCode(64 + n)) {
                return 1;
            } else if (temp[8] != String.fromCharCode(64 + n)) {
                alert("La letra del NIF no es correcta.");
                // jQuery('#'+a).val(temp.substr(0,8) + String.fromCharCode(64 + n));
                resul = false;
            } else {
                alert("NIF incorrecto");
                jQuery('#' + a).val(temp);
                resul = false;
            }
        }
        //comprobacion de CIFs
        else if (/^[ABCDEFGHJNPQRSUVW]{1}/.test(temp)) {
            var temp_n = n + '';
            if (temp[8] == String.fromCharCode(64 + n) || temp[8] == parseInt(temp_n.substring(temp_n.length - 1, temp_n.length))) {
                return 2;
            } else if (temp[8] != String.fromCharCode(64 + n)) {
                alert("La letra del CIF no es correcta. ");
                //jQuery('#'+a).val(temp.substr(0,8) + String.fromCharCode(64 + n));
                resul = false;
            } else if (temp[8] != parseInt(temp_n.substring(temp_n.length - 1, temp_n.length))) {
                alert("La letra del CIF no es correcta. ");
                // jQuery('#'+a).val(temp.substr(0,8) + parseInt(temp_n.substring(temp_n.length-1, temp_n.length)));
                resul = false;
            } else {
                alert("CIF incorrecto");
                jQuery('#' + a).val(temp);
                resul = false;
            }
        }
        //comprobacion de NIEs
        //T
        else if (/^[T]{1}/.test(temp)) {
            if (temp[8] == /^[T]{1}[A-Z0-9]{8}$/.test(temp)) {
                return 3;
            } else if (temp[8] != /^[T]{1}[A-Z0-9]{8}$/.test(temp)) {
                var letra = String.fromCharCode(64 + n);
                var letranie = temp.charAt(8);
                if (letra != letranie) {
                    alert("La letra del NIE no es correcta.");
                    //jQuery('#'+a).val(temp.substr(0,8) + letra);
                    resul = false;
                } else {
                    alert("NIE incorrecto");
                    jQuery('#' + a).val(temp);
                    resul = false;
                }
            }
        }
        //XYZ
        else if (/^[XYZ]{1}/.test(temp)) {
            var pos = str_replace(['X', 'Y', 'Z'], ['0', '1', '2'], temp).substring(0, 8) % 23;
            var letra = cadenadni.substring(pos, pos + 1);
            var letranie = temp.charAt(8);
            if (letranie == letra) {
                return 3;
            } else if (letranie != letra) {
                alert("La letra del NIE no es correcta.");
                // jQuery('#'+a).val(temp.substr(0,8) + letra);
                resul = false;
            } else {
                alert("NIE incorrecto");
                jQuery('#' + a).val(temp);
                resul = false;
            }
        }
    }
    if (!resul) {
        //jQuery('#'+a).focus();
        return resul;
    }
}

function checkForm(form) {

    var error = false; 	// set error to false (no error at this time)

    form.find('.require:visible').each(function () { // find all .require fields
        var id = $(this).attr('id'); 		// grab id="" of item

        /*   check if email is correctly formated    */
        /* ----------------------------------------- */

        var emailInID = new RegExp("(email)", 'gi'); // ereg for email
        var numericInID = new RegExp("(numeric)", 'gi'); // eret for numeric
        //var nifInID = new RegExp("(nif)", 'gi'); // eret for numeric

        var errorClass = "error";

        if (id.match(emailInID)) { // if email is found on field's id

            //  ereg filter for email (SÓLO UN EMAIL)
            //var filter = /^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*[\.]{1}[a-z]{2,6}$/;
            //PARA VARIOS EMAILS SEPARADOS POR COMA:
            var filter = /^[A-Z0-9\._%-]+@[A-Z0-9\.-]+\.[A-Z]{2,4}(?:[,;][A-Z0-9\._%-]+@[A-Z0-9\.-]+\.[A-Z]{2,4})*$/i;
            // if email is not formated correctly
            if (!filter.test($('#' + id).val())) {
                error = true;// now there is an error
                console.log("email is incorrect")
                $('#' + id + ', label[for="' + id + '"]').addClass(errorClass); 	// add .error class to input and linked label
                $("#" + id).parent(".control-group").addClass(errorClass);

            } else { // no more error
                $('#' + id + ', label[for="' + id + '"]').removeClass(errorClass);// remove error class
                $("#" + id).parent(".control-group").removeClass(errorClass);
            }
        } //## end email test

        // check box test
        else if ($(this).is('type')) {
            if ($(this).attr('type').toLowerCase() === "checkbox") { // if input is a checkbox
                var name = $(this).attr('name');  // grab the name
                var checkBoxError = true; // no checkbox checked (error is true)
                $('input[name="' + name + '"]').each(function () { // loop on each checkbox with the same name
                    if ($(this).attr('checked') === true) { // if one of check box is checked
                        checkBoxError = false; // ok no more error
                    } // ## end if one of checkbox is  checked
                });//## end loop each

                // if no checkbox are checked
                if (checkBoxError) {
                    $('input[name="' + name + '"]').each(function () {// loop on each checkbox with the same name
                        var id = $(this).attr('id'); // grab id
                        $('#' + id + ', label[for="' + id + '"]').addClass(errorClass); // add class erreor
                        $("#" + id).parent(".control-group").addClass(errorClass);
                        error = true;
                        console.log("checkBoxError")
                    });//# end loop
                } else {
                    $('input[name="' + name + '"]').each(function () { // loop on each checkbox
                        var id = $(this).attr('id'); // grab id
                        $('#' + id + ', label[for="' + id + '"]').removeClass(errorClass); // remove Checkbox
                        $("#" + id).parent(".control-group").removeClass(errorClass);
                    });
                }//#end if(checkBoxError)
            }//#end Check box text

            // radio test
            else if ($(this).attr('type').toLowerCase() === "radio") { //if input is a radiobutton
                var name = $(this).attr('name');  // grab the name
                var radioError = true; // no radio checked (error is true)
                $('input[name="' + name + '"]').each(function () { // loop on each radio with the same name
                    if ($(this).attr('checked') === true) { // if one of radio button is checked (not really necessary)
                        radioError = false; // ok no more error
                    }// ## end if one of radio button is checked
                }); // ## end of loop on each radio


                // if no radio are checked
                if (radioError) {
                    $('input[name="' + name + '"]').each(function () { // add error
                        var id = $(this).attr('id');
                        $('#' + id + ', label[for="' + id + '"]').addClass(errorClass);
                        $("#" + id).parent(".control-group").addClass(errorClass);
                        error = true;
                        console.log("radioError")
                    });
                } else { // remove error
                    $('input[name="' + name + '"]').each(function () {
                        var id = $(this).attr('id');
                        $('#' + id + ', label[for="' + id + '"]').removeClass(errorClass);
                        $("#" + id).parent(".control-group").removeClass(errorClass);
                    });
                }
            }// #end radio test

        }

        /* test numeric value */
        /* -----------------  */
        else if (id.match(numericInID)) { // if numeric value is found on the id

            if (isNaN($('#' + id).val()) || $.trim($('#' + id).val()) === '') { // check if is not a number and if empty
                console.log("is not a number and is empty")
                error = true; // set error
                $('#' + id + ', label[for="' + id + '"]').addClass(errorClass); 	// add error class
                $("#" + id).parent(".control-group").addClass(errorClass);
            } else { // else no error
                $('#' + id + ', label[for="' + id + '"]').removeClass(errorClass);// remove error class
                $("#" + id).parent(".control-group").removeClass(errorClass);
            }

        }
        //## end numeric test

        /*else if (id.match(nifInID)) { // if numeric value is found on the id

            if (!valida_nif_cif_nie($(this)) || $.trim($(this).val()) === '') { // check if is not a number and if empty
                console.log("nif is invalid and is empty")
                error = true; // set error
                $('#' + id + ', label[for="' + id + '"]').addClass(errorClass); 	// add error class
                $("#" + id).parent(".control-group").addClass(errorClass);
            } else { // else no error
                $('#' + id + ', label[for="' + id + '"]').removeClass(errorClass);// remove error class
                $("#" + id).parent(".control-group").removeClass(errorClass);
            }

        }*/

        /*else if($(this).val()==""){
         error = true;
         $('#'+id+', label[for="'+id+'"]').addClass(errorClass); 	// add class
         }else{
         $('#'+id+', label[for="'+id+'"]').removeClass(errorClass);// remove class
         }*/

        /* test if fields are not empty */
        /* ---------------------------- */
        else if ($(this).val() === '') { //for other field (not checkbox,radio, select) check if empty
            error = true; // set error
            console.log("not checkbox, radio, select -> empty (id:" + id + ")")
            $(this).addClass(errorClass); 	// add class
            $(this).parents(".control-group").addClass(errorClass);
        } else { // else no error
            $(this).removeClass(errorClass);// remove class
            $(this).parents(".control-group").removeClass(errorClass);
        }

        /*else if($.trim($(this).val())==='' ){ //for other field (not checkbox,radio, select) check if empty
         error = true; // set error
         $(this).addClass(errorClass); 	// add class
         }else{ // else no error
         $(this).removeClass(errorClass);// remove class
         }*/

        //$('input#' + id + ',textarea#' + id).val($.trim($(this).val())); // remove space before and after the value (only on input & textarea)
    });

    if (error) { // if error
        messageBox("Hay errores en el formulario, por favor compru&eacute;balo.", 0)
        return false; // don't send form
    } else { // else
        return true; // ok send form
    }
}

function print_r(theObj) {
    if (theObj.constructor == Array || theObj.constructor == Object) {
        console.log("<ul>");
        for (var p in theObj) {
            if (theObj[p].constructor == Array || theObj[p].constructor == Object) {
                console.log("<li>[" + p + "] => " + typeof(theObj) + "</li>");
                console.log("<ul>");
                print_r(theObj[p]);
                console.log("</ul>");
            } else {
                console.log("<li>[" + p + "] => " + theObj[p] + "</li>");
            }
        }
        console.log("</ul>");
    }
}

function nl2br(str) {
    var breakTag = '<br />';
    return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
}

function unicodeConverter(input) {
    var entities = {
        "\u00c1": "&Aacute;",
        "\u00e1": "&aacute;",
        "\u00c0": "&Agrave;",
        "\u00e0": "&agrave;",
        "\u00c9": "&Eacute;",
        "\u00e9": "&eacute;",
        "\u00c8": "&Egrave;",
        "\u00e8": "&egrave;",
        "\u00cd": "&Iacute;",
        "\u00ed": "&iacute;",
        "\u00cc": "&Igrave;",
        "\u00ec": "&igrave;",
        "\u00d3": "&Oacute;",
        "\u00f3": "&oacute;",
        "\u00d2": "&Ograve;",
        "\u00f2": "&ograve;",
        "\u00da": "&Uacute;",
        "\u00fa": "&uacute;",
        "\u00d9": "&Ugrave;",
        "\u00f9": "&ugrave;",
        "\u00dc": "&Uuml;",
        "\u00fc": "&uuml;",
        "\u00d1": "&Ntilde;",
        "\u00f1": "&ntilde;",
        "\u0022": "&amp;",
        "\u00a0": "&nbsp;",
        "\u0022": "&quot;", // "
        "\u0027": "&apos;", // '
        "\u20AC": "&euro;",
        "\u00e7": "&ccedil;",
        "\u00c7": "&Ccedil;",
        "\u00bf": "&iquest;", //¿
        "\u00b7": "&middot;"// ·
        //"\":"",
    };

    for (var prop in entities) {
        if (entities.hasOwnProperty(prop)) {
            input = input.replace(new RegExp(prop, "g"), entities[prop]);
        }
    }
    return input;
}
function getArchivos(formdata, archivo)
{  
    var j = 1;
    for(i=0; i<archivo.length; i++){
        formdata.append('archivo'+j,archivo[i]);
    }
    return formdata;
}
function initSendForm() {
    $('.form .submit,.contact_form .submit, form .submit').css('cursor', 'pointer')
        .click(function (event) {
            console.log("click submit")
            event.preventDefault();

            var _this = $(this);
            var status_envia_mail_adjunto = false;
            var form_data = new FormData();
            var _thisForm = _this.parents('form');
            _this.addClass("hide");
            $('.form_alert').css('display', 'none');
            $('.form_alert img').attr('src', '');


            if (checkForm(_thisForm) == true) {
                var data = new Object();
                cont = 0;

                _thisForm.find('.data').each(function () {
                    type = $(this).get(0).tagName;
                    if ($(this).hasClass("required")) {
                        if ($(this).val().length > 0) {   
                            $(this).removeClass("error_required");
                        }else{
                            $(this).addClass("error_required");
                            alert("lo sentimos pero el campo "+$(this).attr("name")+ " es requerido");
                            $(this).focus();
                            return false;
                        }
                    }else{
                        $(this).removeClass("error_required");
                    }
                    if (type == "INPUT") type = $(this).attr('type');
                    skip = false;

                    if (type == "checkbox" && !$(this).is(':checked')) skip = true; //no incluir checkboxes no seleccionados
                    if (type == "radio" && !$(this).is(':checked')) skip = true; //no incluir checkboxes no seleccionados

                    if (!skip) {

                        if (type != "LABEL") {
                            var name = $(this).attr("name");
                            var value = nl2br($(this).val());
                        } else {
                            var name = "label";
                            var value = $(this).html();
                        }

                        if ($.browser.msie) { //explorer
                            name = unicodeConverter(name);
                            value = unicodeConverter(value);
                        }
                        //safari añade \n
                        if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
                            value = value.replace(/\n/g, '');
                        }
                        if (type == "file") {
                            var archivo = document.getElementById($(this).attr("id"));
                            form_data.append('function',"sendFormAdjunto");
                            getArchivos(form_data, archivo.files);
                            status_envia_mail_adjunto = true;
                        }

                        console.log("value=" + value + " \n");
                        /*
                         console.log("name="+name);
                         console.log("type="+type+" \n")
                         console.log("value="+value+" \n");
                         console.log("---")
                         */
                        data[cont] = new Object();
                        data[cont]["name"] = name;
                        data[cont]["value"] = value;
                        data[cont]["type"] = type;

                        cont++;
                    }

                });
                if (status_envia_mail_adjunto ==  true) {
                    data = JSON.stringify(data);
                    form_data.append('data_post',data);
                    $.ajax({
                        type: "POST",
                        url: "/Application/Legacy/ajax/mail.functions.php",
                        contentType:false,
                        data:form_data,
                        processData:false,
                        cache:false,
                        dataType: "json",
                        success: function (res) {
                            /*console.log("res=" + res);*/
                            if (res == 1) {
                                $(_thisForm).find('.data').val("");
                                _thisForm.find('.form_alert img').attr('src', 'Application/Legacy/img/theme/messageBox-ok.png');
                                //$('.form_alert p').html('El mensaje se ha enviado correctamente');
                                _thisForm.find('.form_alert').css('border-color', '#94D674');
                            } else {
                                _thisForm.find('.form_alert img').attr('src', 'Application/Legacy/img/theme/messageBox-ko.png');
                                //$('.form_alert p').html('Error al enviar el mensaje');
                                _thisForm.find('.form_alert').css('border-color', '#ED4949');
                            }
                            _thisForm.find('.form_alert').css('display', 'block');
                            _this.removeClass("hide");
                        },error: function(error){
                            _this.removeClass("hide");
                        }
                    });
                }else{
                    data = JSON.stringify(data);
                    $.ajax({
                        type: "POST",
                        url: "/Application/Legacy/ajax/mail.functions.php",
                        data: { "function": "sendForm", data: data},
                        //data: "function=sendForm&data="+data,
                        dataType: "json",
                        success: function (res) {
                            /*console.log("res=" + res);*/
                            if (res == 1) {
                                $(_thisForm).find('.data').val("");
                                _thisForm.find('.form_alert img').attr('src', 'Application/Legacy/img/theme/messageBox-ok.png');
                                //$('.form_alert p').html('El mensaje se ha enviado correctamente');
                                _thisForm.find('.form_alert').css('border-color', '#94D674');
                            } else {
                                _thisForm.find('.form_alert img').attr('src', 'Application/Legacy/img/theme/messageBox-ko.png');
                                //$('.form_alert p').html('Error al enviar el mensaje');
                                _thisForm.find('.form_alert').css('border-color', '#ED4949');
                            }
                            _thisForm.find('.form_alert').css('display', 'block');
                            _this.removeClass("hide");
                        },error: function(error){
                            _this.removeClass("hide");
                        }
                    });
                }

            }
        });
}

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

function frontendUserLogout() {
    var retorno = "";
    $.ajax({
        type: "POST",
        url: "/Application/Legacy/ajax/users.frontend.functions.php",
        async: false,
        data: {"function": "logoutUser"},
        success: function (res) {
            if (res == 1) {
                var txt = "Sesi&oacute;n cerrada correctamente";
                messageBox(txt, res);
                retorno = res;
            } else {
                var txt = "Error al cerrar sesi&oacute;n";
                messageBox(txt, res);
                retorno = res;
            }
        }
    })

    return retorno;

}

function frontendUserLogin(user, pass) {
    var retorno = "";
    $.ajax({
        type: "POST",
        url: "/Application/Legacy/ajax/users.frontend.functions.php",
        async: false,
        data: {"function": "loginUser", "id_license": id_license, "user": user, "pass": pass},
        success: function (res) {
            if (res == 1) {
                var txt = "Sesi&oacute;n iniciada correctamente";
                messageBox(txt, res);
                retorno = res;
            } else {
                var txt = "Usuario y/o contrase&ntilde;a incorrectos";
                messageBox(txt, res);
                retorno = res;
            }
        }
    })

    return retorno;
}

function isDefined(variable) {
    return (typeof(window[variable]) != "undefined");
}

function getFileExtension(filename) {
    return filename.split('.').pop();
}
function createAccordion(list_selector, accordion_mode, list_element_open) {
    list_selector.find("ul").hide();

    if (list_element_open) list_selector.children("li:nth-child(" + list_element_open + ")").children("ul").show();

    list_selector.find("li a").click(function (event) {
        if ($(this).attr("href") == "#") {
            event.preventDefault();
            $(this).siblings("ul").slideToggle(200);
            if (accordion_mode) {
                $(this).parent().siblings("ul").each(function () {
                    if ($(this).css('display') == "block") $(this).slideUp(200);
                });
            }
        }
    });
}

function openAccordion(list_selector, id_option) {
    if (id_option) {
        list_selector.find("#id_option" + id_option).parents("ul").show();
        if (list_selector.find("#id_option" + id_option).children("a").attr("href") != "#") list_selector.find("#id_option" + id_option).children("ul").show();
    }
}


// funcion que corrige la altura de los menus verticales
function corrigeAltura() {
    var new_height = $("#slice_cont").height();
    $(".menu").height(new_height);
    $("#slice_menu").height(new_height);
}
//redondea a dos decimales
function round2(fight) {
    var original = parseFloat(fight);
    var result = Math.round(original * 100) / 100;
    return result.toFixed(2);
}

function checkSlug(slug) {
    var RegExp = /^[0-9a-zA-Z_\-]+$/;
    if (RegExp.test(slug)) {
        return true;
    } else {
        return false;
    }
}

function slugify(cadena) {
    cadena = limpiacadena(cadena);
    cadena = cadena.replace(/ /g, '-');
    cadena = cadena.replace(/[^0-9a-zA-Z_\-]+/g, '');
    cadena = cadena.toLowerCase();
    return cadena;
}
function limpiacadena(cadena) {
    cadena = cadena.replace(/[äáàâãâ]/g, 'a');
    cadena = cadena.replace(/[éèêëê]/g, 'e');
    cadena = cadena.replace(/[íìîïî]/g, 'i');
    cadena = cadena.replace(/[óòôõöô]/g, 'o');
    cadena = cadena.replace(/[úùûüû]/g, 'u');

    cadena = cadena.replace(/[ÁÀÂÃÄÂ]/g, 'A');
    cadena = cadena.replace(/[ÉÈÊËÊ]/g, 'E');
    cadena = cadena.replace(/[ÍÌÎÏÎ]/g, 'I');
    cadena = cadena.replace(/[ÓÒÔÕÖÔ]/g, 'O');
    cadena = cadena.replace(/[ÚÙÛÜÛ]/g, 'U');

    cadena = cadena.replace(/[ç]/g, 'c');
    cadena = cadena.replace(/[Ç]/g, 'C');

    cadena = cadena.replace(/[ñ]/g, 'n');
    cadena = cadena.replace(/[Ñ]/g, 'N');

    return cadena
}

var delay = (function () {
    var timer = 0;
    return function (callback, ms) {
        clearTimeout(timer);
        timer = setTimeout(callback, ms);
    };
})();

function initIsExpired(_URL_, _PRODUCTO_SLUG_) {
    var strVar = "";
    strVar += "<div class=\"modal hide\" id=\"myModal\">";
    strVar += "			<div class=\"modal-header\">";
    strVar += "				<button type=\"button\" class=\"close\" data-dismiss=\"modal\">×<\/button>";
    strVar += "				<h3>La demostraci&oacute;n ha expirado<\/h3>";
    strVar += "			<\/div>";
    strVar += "			<div class=\"modal-body\" style='text-align:center'>";
    strVar += " 			";
    strVar += " 			<p><img style='width:180px' src='/Application/Legacy/ui/img/" + _PRODUCTO_SLUG_ + "/" + "-logo-clean.png' /> </p>";
    strVar += "				<p style='font-size:13px;line-height:22px'>El per&iacute;odo de demostraci&oacute;n ha finalizado.<br />";
    strVar += "				<strong style='font-size:18px;'>&iexcl;Recupera tu web tal y como la has dejado!</strong></p>";
    strVar += "				</p><a href='" + _URL_ + "checkout.php' class='btn btn-warning'><i class='icon-ok icon 14px icon-white'></i> Quiero mi web</a>";
    strVar += "			<\/div>";
    strVar += "		<\/div>";

    $("body").append(strVar);
    $('#myModal').modal('show');
}

/**
 * jQuery.browser.mobile (http://detectmobilebrowser.com/)
 *
 * jQuery.browser.mobile will be true if the browser is a mobile device
 *
 **/
/*(function (a) {
    jQuery.browser.mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
})(navigator.userAgent || navigator.vendor || window.opera);
*/

function createRawForm($form) {
    var data = new Object()
    $form.find('.data').each(function () {
        data[$(this).data('label')] = $(this).val()
    })

    //data = JSON.stringify(data)
    return data
}

// parseUri 1.2.2
// (c) Steven Levithan <stevenlevithan.com>
// MIT License

function parseUri(str) {
    var o = parseUri.options,
        m = o.parser[o.strictMode ? "strict" : "loose"].exec(str),
        uri = {},
        i = 14;

    while (i--) uri[o.key[i]] = m[i] || "";

    uri[o.q.name] = {};
    uri[o.key[12]].replace(o.q.parser, function ($0, $1, $2) {
        if ($1) uri[o.q.name][$1] = $2;
    });

    return uri;
};

parseUri.options = {
    strictMode: false,
    key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
    q: {
        name: "queryKey",
        parser: /(?:^|&)([^&=]*)=?([^&]*)/g
    },
    parser: {
        strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
        loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
    }
};

$(document).on("click",'#online-shop, #utilities, #help, #agenda-besba',function(){
    $(this).children("ul").slideToggle();
});