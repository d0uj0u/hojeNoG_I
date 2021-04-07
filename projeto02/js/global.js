//Missões Semanais
let ms01 = document.getElementById("ms01")
let ms02 = document.getElementById("ms02")
let ms03 = document.getElementById("ms03")
let ms04 = document.getElementById("ms04")
let ms05 = document.getElementById("ms05")

ms01.addEventListener("click", function(){semanalFeito("stormterror", "Feito", ms01)})
ms02.addEventListener("click", function(){semanalFeito("casaDourada", "Feito", ms02)})
ms03.addEventListener("click", function(){semanalFeito("lupusBoreas", "Feito", ms03)})
ms04.addEventListener("click", function(){semanalFeito("transformadorParametrico", "Feito", ms04)})
ms05.addEventListener("click", function(){semanalFeito("reputacao", "Feito", ms05)})
ms01.addEventListener("click", function(){semanalDesfeito("stormterror")})
let missoesSemanaisArray = ["stormterror", "casaDourada", "lupusBoreas", "transformadorParametrico", "reputacao"]

function semanalFeito(missao, estado, referencia)
{
  if(localStorage.missao)
  {

  }
  else
  {
    localStorage.setItem(missao, estado)
    referencia.style.border = "2px #E4B87B solid"
    referencia.style.backgroundColor = "#E4B87B"
  }
}

function semanalDesfeito(missao)
{
  if(localStorage.missao)
  {
    alert("oi")
    localStorage.removeItem(missao)
  }
}

addEventListener("load", preferenciasMissoesSemanais)
function preferenciasMissoesSemanais()
{
  if(localStorage.stormterror)
  missaoFeitoEstilizacao(ms01)

  if(localStorage.casaDourada)
  missaoFeitoEstilizacao(ms02)

  if(localStorage.lupusBoreas)
  missaoFeitoEstilizacao(ms03)

  if(localStorage.transformadorParametrico)
  missaoFeitoEstilizacao(ms04)

  if(localStorage.reputacao)
  missaoFeitoEstilizacao(ms05)

  function missaoFeitoEstilizacao(missoes)
  {
    missoes.style.border = "2px #E4B87B solid"
    missoes.style.backgroundColor = "#E4B87B"
  }
}

let botaoRemove = document.getElementsByTagName("img")
botaoRemove[5].addEventListener("click", function(){removerMissoes("diarias")});
botaoRemove[11].addEventListener("click", function(){removerMissoes("semanais")})

function removerMissoes(tipoMissao)
{
  if(tipoMissao == "diarias")
  {
    for (var i = 0; i < missoesDiariasArray.length; i++)
    {
      localStorage.removeItem(missoesDiariasArray[i])
    }
  } else
    {
      for (var i = 0; i < missoesSemanaisArray.length; i++)
      {
        localStorage.removeItem(missoesSemanaisArray[i])
      }
    }
}

//Missões Diárias
let md01 = document.getElementById("md01")
let md02 = document.getElementById("md02")
let md03 = document.getElementById("md03")
let md04 = document.getElementById("md04")
let md05 = document.getElementById("md05")

md01.addEventListener("click", function(){diariaFeito("expedicaoDiaria", "Feito", md01)})
md02.addEventListener("click", function(){diariaFeito("expedicao", "Feito", md02)})
md03.addEventListener("click", function(){diariaFeito("amizade", "Feito", md03)})
md04.addEventListener("click", function(){diariaFeito("cristal", "Feito", md04)})
md05.addEventListener("click", function(){diariaFeito("artefatos", "Feito", md05)})

let missoesDiariasArray = ["expedicaoDiaria", "expedicao", "amizade", "cristal", "artefatos"]

function diariaFeito(missao, estado, referencia)
{
  if(localStorage.missao)
  {

  }
  else
  {
    localStorage.setItem(missao, estado)
    referencia.style.border = "2px #E4B87B solid"
    referencia.style.backgroundColor = "#E4B87B"
  }
}

addEventListener("load", preferenciasMissoesDiarias)
function preferenciasMissoesDiarias()
{
  if(localStorage.expedicaoDiaria)
  missaoFeitoEstilizacao(md01)

  if(localStorage.expedicao)
  missaoFeitoEstilizacao(md02)

  if(localStorage.amizade)
  missaoFeitoEstilizacao(md03)

  if(localStorage.cristal)
  missaoFeitoEstilizacao(md04)

  if(localStorage.artefatos)
  missaoFeitoEstilizacao(md05)

  function missaoFeitoEstilizacao(missoes)
  {
    missoes.style.border = "2px #E4B87B solid"
    missoes.style.backgroundColor = "#E4B87B"
  }
}
