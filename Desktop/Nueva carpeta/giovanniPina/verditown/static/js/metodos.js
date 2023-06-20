
//función que envia el contenido a un elemento de tipo textarea

//función que valida un formulario
function CrearCarta(){
    var genero="";
    var a=document.getElementById("rut").value;
    var b=document.getElementById("nom").value;
    var c=document.getElementById("correo").value;
    var d=document.getElementById("fono").value;
    var e=document.getElementById("edad").value;
    var f=parseInt(document.getElementById("genero").value);
    var f=parseInt(document.getElementById("tSoli").value);
    
    var elementoGenero = document.getElementById('genero');
    var indiceSeleccionado = elementoGenero.selectedIndex;  //seleccionamos el indice elegido
    var gen=elementoGenero.options[indiceSeleccionado].text;
    var elementotSoli = document.getElementById('tSoli');
    var indiceSeleccionado2 = elementotSoli.selectedIndex;  //seleccionamos el indice elegido
    var soli=elementotSoli.options[indiceSeleccionado2].text;
    

        var cadena= "Postulación Apoyo Ambiental: \n" +
                +"Rut: " + a + "\n" + "Nombre: " + b + "\n"+ "correo: " + c 
                + "\n" + "Telefono: "+ d + "\n" + "Edad: " + e 
                + "\n" + "Genero: " + gen
                + "\n" + "Tipo de solicitud: " + soli;  
                
        document.getElementById("carta").value=cadena;
    }




    //función que cambia el color de fondo a orange
    function colorFondo(obj){
        obj.style.backgroundColor='#c5c5c5';
    }

    function colorBlanco(obj){
        obj.style.backgroundColor='white';
    }

    function upperText(texto)
    {
        const x = texto;
        x.value= x.value.toUpperCase();
    }

    function colorFondo(obj){
        obj.style.backgroundColor='#c5c5c5';
    }
$(function(){
    $("#mi-formulario").validate({
        rules:{
            rut:{
                required:true
            },
            nom:{
                required:true
            },
            correo:{
                required:true,
                email:true
            },

            fono:{
                required:true,
                number:true
            },
            edad:{
                required:true
            }

        },//rules
        messages:{
            rut:{
                required:'Ingrese Rut',
                minlength:'Caracteres insuficientes (10)'
            },
            nom:{
                required:'Ingrese nombre',
                minlength:'Caracteres insuficientes (3)'
            },
            correo:{
                required:'Ingrese correo del usuario',
                email:'Formato incorrecto del correo'
            },
            fono:{
                required:'Ingrese un teléfono válido',
                minlength: 'Cantidad de digitos insuficientes'
            },
            edad:{
                required:'Seleccione una edad válida',
                min:'Edad no corresponde'
            },

        }//messages
    });
});
