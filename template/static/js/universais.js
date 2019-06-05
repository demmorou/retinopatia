// $.ajaxSetup({
//     headers: {
//         'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
//     }
// });

$('#formulario').on('submit', function(e) {
  e.preventDefault();
  $.ajax({
    url : $(this).attr('action') || window.location.pathname,
    type: $(this).attr("method"),
    dataType: "JSON",
    data: new FormData(this),
    processData: false,
    contentType: false,
    success: function (data) {
          if(data['reload']){
                  window.location.href =  "/" + "painel";
          }else{
            $("#retorno").html(data['mensagem']);
            $('html, body').animate({ scrollTop: $('#retorno').offset().top - 70}, 'slow');
            $("#example_modal").modal();
          }
    },
    error: function (jXHR, textStatus, errorThrown) {
      console.log(jXHR);
    }
  });
});



$(document).ready(function(){
  $("#repetirSenha").keyup(function(){
        if ($("#senha").val() != $("#repetirSenha").val()) {
              document.getElementById("repetirSenha").style.borderColor = "red";
              //$("#msg").html("Senha não confere!").css("color","red");
        }else{
            //$("#msg").html("Senha confere!").css("color","green");
            document.getElementById("repetirSenha").style.borderColor = "green";
      }
});
});

$(document).ready(function(){
    $("#nome").keyup(function(){
       if(/^[a-zA-Z\u00C0-\u00FF ]*$/.test($("#nome").val()) == false){
            str = 'Não pode conter caracteres especiais!'
            document.getElementById("divnome").innerHTML = str;
            document.getElementById("divnome").style.marginTop = "-20px";
       } else{
            document.getElementById("divnome").innerHTML = "";
            document.getElementById("divnome").style.marginTop = "0px";
       }
    });
});

$(document).ready(function(){
  $("#senha").keyup(function(){
     if(/^[a-zA-Z0-9]*$/.test($("#senha").val()) == false){
          str = 'Não pode conter caracteres especiais!'
          document.getElementById("divsenha").innerHTML = str;
          document.getElementById("divsenha").style.marginTop = "-20px";
     } else{
          document.getElementById("divsenha").innerHTML = "";
          document.getElementById("divsenha").style.marginTop = "0px";
     }
  });
});

$(document).ready(function(){
  $("#senha").keyup(function(){
     if(/^[a-zA-Z0-9]*$/.test($("#novaSenha").val()) == false){
          str = 'Não pode conter caracteres especiais!'
          document.getElementById("divsenha").innerHTML = str;
          document.getElementById("divsenha").style.marginTop = "-20px";
     } else{
          document.getElementById("divsenha").innerHTML = "";
          document.getElementById("divsenha").style.marginTop = "0px";
     }
  });
});

var cpf = document.querySelector("#cpf");

cpf.addEventListener("blur", function(){
   cpf.value = cpf.value.match(/.{1,3}/g).join(".").replace(/\.(?=[^.]*$)/,"-");
});

$(document).ready(function(){
  $("#cnh").keyup(function(){
     if(/^[0-9]*$/.test($("#cnh").val()) == false){
          str = 'Não pode conter caracteres especiais!'
          document.getElementById("divcnh").innerHTML = str;
          document.getElementById("divcnh").style.marginTop = "-20px";
          $("#submeter").attr("disabled", true);
     } else{
          document.getElementById("divcnh").innerHTML = "";
          document.getElementById("divcnh").style.marginTop = "0px";         
     }
  });
});

$(document).ready(function(){
  $("#cpf").keyup(function(){
     if(/^[0-9]*$/.test($("#cpf").val()) == false){
          str = 'Digite um cpf válido!'
          document.getElementById("divcpf").innerHTML = str;
          document.getElementById("divcpf").style.marginTop = "-20px";
     } else{
          document.getElementById("divcpf").innerHTML = "";
          document.getElementById("divcpf").style.marginTop = "0px";
     }
  });
});

$(document).ready(function(){
  $("#rg").keyup(function(){
     if(/^[a-zA-Z0-9]*$/.test($("#rg").val()) == false){
          str = 'Não pode conter caracteres especiais!'
          document.getElementById("divrg").innerHTML = str;
          document.getElementById("divrg").style.marginTop = "-20px";
     } else{
          document.getElementById("divrg").innerHTML = "";
          document.getElementById("divrg").style.marginTop = "0px";
     }
  });
});

$(document).ready(function(){
  $("#placa").keyup(function(){
     if(/^[a-zA-Z0-9]*$/.test($("#placa").val()) == false){
          str = 'Não pode conter caracteres especiais!'
          document.getElementById("divplaca").innerHTML = str;
          document.getElementById("divplaca").style.marginTop = "-20px";
     } else{
          document.getElementById("divplaca").innerHTML = "";
          document.getElementById("divplaca").style.marginTop = "0px";
     }
  });
});

$(document).ready(function(){
  $("#modelo").keyup(function(){
     if(/^[a-zA-Z0-9]*$/.test($("#modelo").val()) == false){
          str = 'Não pode conter caracteres especiais!'
          document.getElementById("divmodelo").innerHTML = str;
          document.getElementById("divmodelo").style.marginTop = "-20px";
     } else{
          document.getElementById("divmodelo").innerHTML = "";
          document.getElementById("divmodelo").style.marginTop = "0px";
     }
  });
});

$(document).ready(function(){
  $("#renavan").keyup(function(){
     if(/^[0-9]*$/.test($("#renavan").val()) == false){
          str = 'Não pode conter caracteres especiais!'
          document.getElementById("divrenavan").innerHTML = str;
          document.getElementById("divrenavan").style.marginTop = "-20px";
     } else{
          document.getElementById("divrenavan").innerHTML = "";
          document.getElementById("divrenavan").style.marginTop = "0px";
     }
  });
});

$(document).ready(function(){
  $("#ano").keyup(function(){
     if(/^[0-9-./]*$/.test($("#ano").val()) == false){
          str = 'Não pode conter caracteres especiais!'
          document.getElementById("divano").innerHTML = str;
          document.getElementById("divano").style.marginTop = "-20px";
     } else{
          document.getElementById("divano").innerHTML = "";
          document.getElementById("divano").style.marginTop = "0px";
     }
  });
});

$(document).ready(function(){
  $("#candidatarSe").keyup(function(){
    if($('[class="aviso"]').text() != ""){
      $("#submeter").attr("disabled", true);
    }else{
      $("#submeter").removeAttr("disabled");
    }
  })
});