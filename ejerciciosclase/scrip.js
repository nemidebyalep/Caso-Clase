
        function sfondo(){
            //alert("hola");
            var elem=document.getElementById("mibotton");
            //document.bgColor=color;
            var valor=parseInt(document.getElementById("texto").value);
            if (valor>=10) {
                //alert("mayor que 10");
                elem.style.background="red";
            } else {
                //alert("menor que 10");
                elem.style.background="green";
            }
        }
        