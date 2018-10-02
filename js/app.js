var Calculadora = (function(){
    
    var display= document.getElementById("display").innerHTML;

    var numdig=1;
    var punto=0;
    var cifra1=0;
    var cifra2=0;
    var op="";
    var resultado=0;
    var resul="";

    document.addEventListener("mouseup",function(e){
        var id = e.target.id;
        var objcl=document.getElementById(id);
        objcl.style.transform = "scale(1)";
    });

// funcion donde se selecciona la operacion a realizar

    function operacion(op) {
        switch (op) {
            case "suma":
                Calculadora.suma();
                break;
    
            case "multiplicacion":
                Calculadora.multiplicacion();
                break;

            case "divicion":
                Calculadora.divicion();
                break;    
            
            case "resta":
                Calculadora.resta();
                break;
    
            default:
                break;
        }    
    }
    
    /*return{
        init: function (){*/
        // se guarda en una variable el objeto o elemento en el que se dio click
            var btn0=document.getElementById("0");
            /*var btn1=document.getElementById("1");
            var btn2=document.getElementById("2");
            var btn3=document.getElementById("3");
            var btn4=document.getElementById("4");
            var btn5=document.getElementById("5");
            var btn6=document.getElementById("6");
            var btn7=document.getElementById("7");
            var btn8=document.getElementById("8");
            var btn9=document.getElementById("9");*/
            var btnon=document.getElementById("on");
            var btnsign=document.getElementById("sign");
            var btndiv=document.getElementById("dividido");
            var btnmenos=document.getElementById("menos");
            var btnpor=document.getElementById("por");
            var btnpunto=document.getElementById("punto");
            var btnigual=document.getElementById("igual");
            var btnmas=document.getElementById("mas");

    // inicio a imprimir el numero en pantalla

            btn0.onmousedown= function(){
                if (numdig==9) {
                    alert("no se permiten mas de 8 digitos")
                } else {
                    btn0.style.transform = "scale(0.9)";
                    if (display!="0") {
                        document.getElementById("display").innerHTML=display +"0";
                        display+="0";
                        numdig += 1;
                    }
                }
            }

        // uso de los botones numericos

            document.addEventListener("mousedown", function(e){
                var id = e.target.id;
                var objcl=document.getElementById(id);
                if (id>0 && id<=9) {
                    if (numdig==9){
                        alert("no se permiten mas de 8 digitos")
                    } else {
                        objcl.style.transform = "scale(0.9)";
                        if (display=="0") {
                            document.getElementById("display").innerHTML=id;    
                            display=id;
                            numdig += 1;
                        } else {
                            document.getElementById("display").innerHTML=display + id;
                            display+=id;
                            numdig += 1;
                        }
                    }    
                }
            })
            
        // uso del boton (ON/C)

            btnon.onmousedown= function(){
                btnon.style.transform = "scale(0.9)";
                document.getElementById("display").innerHTML="0";    
                display="0";
                numdig = 1;
                punto = 0;
                cifra1="";
                cifra2="";
                op="";
            }

        // uso del boton punto (.)

            btnpunto.onmousedown= function(){
                btnpunto.style.transform = "scale(0.9)";
                if (punto==0) {
                    if (numdig==9) {
                        alert("no se permiten mas de 8 digitos")
                    } else {
                        if (display !="0") {
                            document.getElementById("display").innerHTML=display + ".";
                            display+=".";
                            numdig += 1;
                            punto += 1;
                        }
                    }
                }
            }

        // uso del boton mas (+)
            
            btnmas.onmousedown= function (){
                btnmas.style.transform = "scale(0.9)";
                if (display!="0") {
                    if (op == "") {
                        cifra1 = display;    
                    }else{
                        operacion(op);
                    }
                    op="suma"
                    display = "";
                    document.getElementById("display").innerHTML = "";
                    numdig = 1;
                    punto = 0;
                }
            }

        // uso del boton multiplicacion (*)
        
            btnpor.onmousedown= function (){
                btnpor.style.transform = "scale(0.9)";
                if (display!="0") {
                    if (op == "") {
                        cifra1 = display;    
                    }else{
                        operacion(op);
                    }
                    op="multiplicacion"
                    display = "";
                    document.getElementById("display").innerHTML = "";
                    numdig = 1;
                    punto = 0;
                }
            }

        // uso del boton Divicion (/)
            
            btndiv.onmousedown= function (){
                btndiv.style.transform = "scale(0.9)";
                if (display!="0") {
                    if (op == "") {
                        cifra1 = display;    
                    }else{
                        operacion(op);
                    }
                    op="divicion"
                    display = "";
                    document.getElementById("display").innerHTML = "";
                    numdig = 1;
                    punto = 0;
                }
            }

        // uso del boton menos (-)
            
            btnmenos.onmousedown= function (){
                btnmenos.style.transform = "scale(0.9)";
                if (display!="0") {
                    if (op == "") {
                        cifra1 = display;    
                    }else{
                        operacion(op);
                    }
                    op="resta"
                    display = "";
                    document.getElementById("display").innerHTML = "";
                    numdig = 1;
                    punto = 0;
                }
            }

        // uso del boton igual (=)

            btnigual.onmousedown= function (){
                btnigual.style.transform = "scale(0.9)";
                if (display!="0") {
                    if (op != "") {
                        operacion(op);
                        resul=resultado.toString();
                        //resultado=resultado.lenhgt(8);
                        document.getElementById("display").innerHTML = Calculadora.mostrar();
                        display=document.getElementById("display").innerHTML;
                        cifra2 = "";
                        op="";
                    }
                }
            }

        // uso del boton signo (+/-)

            btnsign.onmousedown= function (){
                btnsign.style.transform = "scale(0.9)";
                if (display!="0") {
                    var sign = document.getElementById("display").innerHTML * -1;
                    display = sign;
                    document.getElementById("display").innerHTML = sign;
                }
            }
            

        // Manejo de metodos

            return{
                suma: function(){
                    cifra2=document.getElementById("display").innerHTML;
                    cifra1=parseFloat(cifra1);
                    cifra2=parseFloat(cifra2);
                    resultado=cifra1+cifra2;
                    cifra1=resultado;
                    cifra2="";   
                },

                multiplicacion: function(){
                    cifra2=document.getElementById("display").innerHTML;
                    cifra1=parseFloat(cifra1);
                    cifra2=parseFloat(cifra2);
                    resultado=cifra1*cifra2;
                    cifra1=resultado;
                    cifra2="";   
                },

                divicion: function(){
                    cifra2=document.getElementById("display").innerHTML;
                    cifra1=parseFloat(cifra1);
                    cifra2=parseFloat(cifra2);
                    resultado=cifra1/cifra2;
                    cifra1=resultado;
                    cifra2="";   
                },

                resta: function(){
                    cifra2=document.getElementById("display").innerHTML;
                    cifra1=parseFloat(cifra1);
                    cifra2=parseFloat(cifra2);
                    resultado=cifra1-cifra2;
                    cifra1=resultado;
                    cifra2="";   
                },

                mostrar: function () {
                    return resul.substr(0,8);
                }
            }            
})();
