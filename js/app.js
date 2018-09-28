var Calculadora = (function(){
    var display= document.getElementById("display").innerHTML;
    var numdig=1;
    /*return{
        init: function (){*/
            var btn0=document.getElementById("0");
            var btn1=document.getElementById("1");
            var btn2=document.getElementById("2");
            var btn3=document.getElementById("3");
            var btn4=document.getElementById("4");
            var btn5=document.getElementById("5");
            var btn6=document.getElementById("6");
            var btn7=document.getElementById("7");
            var btn8=document.getElementById("8");
            var btn9=document.getElementById("9");
            var btnon=document.getElementById("on");
            var btnsign=document.getElementById("sign");
            var btndiv=document.getElementById("dividido");
            var btnmenos=document.getElementById("menos");
            var btnpor=document.getElementById("por");
            var btnpunto=document.getElementById("punto");
            var btnigual=document.getElementById("igual");
            var btnmas=document.getElementById("mas");
            btn0.onmouseup=function(){
                btn0.style.transform = "scale(1)";
            }
            btn1.onmouseup=function(){
                btn1.style.transform = "scale(1)";
            }

            btn1.onmouseup=function(){
                btn1.style.transform = "scale(1)";
            }

            btn2.onmouseup=function(){
                btn2.style.transform = "scale(1)";
            }

            btn3.onmouseup=function(){
                btn3.style.transform = "scale(1)";
            }

            btn4.onmouseup=function(){
                btn4.style.transform = "scale(1)";
            }

            btn5.onmouseup=function(){
                btn5.style.transform = "scale(1)";
            }

            btn6.onmouseup=function(){
                btn6.style.transform = "scale(1)";
            }

            btn7.onmouseup=function(){
                btn7.style.transform = "scale(1)";
            }

            btn8.onmouseup=function(){
                btn8.style.transform = "scale(1)";
            }

            btn9.onmouseup=function(){
                btn9.style.transform = "scale(1)";
            }

            btnmas.onmouseup=function(){
                btnmas.style.transform = "scale(1)";
            }

            btnmenos.onmouseup=function(){
                btnmenos.style.transform = "scale(1)";
            }

            btndiv.onmouseup=function(){
                btndiv.style.transform = "scale(1)";
            }

            btnigual.onmouseup=function(){
                btnigual.style.transform = "scale(1)";
            }

            btnsign.onmouseup=function(){
                btnsign.style.transform = "scale(1)";
            }

            btnpor.onmouseup=function(){
                btnpor.style.transform = "scale(1)";
            }

            btnpunto.onmouseup=function(){
                btnpunto.style.transform = "scale(1)";
            }

            btnon.onmouseup=function(){
                btnon.style.transform = "scale(1)";
            }

            btn1.onmousedown= function(){
                if (numdig==9) {
                    alert("no se permiten mas de 8 digitos")
                } else {
                    btn1.style.transform = "scale(0.9)";
                    if (display=="0") {
                        document.getElementById("display").innerHTML="1";    
                        display="1";
                        numdig += 1;
                    } else {
                        document.getElementById("display").innerHTML=display +"1";
                        display+="1";
                        numdig += 1;
                    }
                }
            }
            btn2.onmousedown= function(){
                /*btn1.style.width=5%;*/
                if (display=="0") {
                    document.getElementById("display").innerHTML="2";    
                    display="2";
                } else {
                    document.getElementById("display").innerHTML=display +"2";
                    display+="2";
                }
            }
        /*},
        sumar: function(){
                alert(5+3);
        }
    } */
   
})();