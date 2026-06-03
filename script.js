let lucro=50,sust=50,agua=50;
function atualizar(){
document.getElementById('lucro').textContent=lucro;
document.getElementById('sust').textContent=sust;
document.getElementById('agua').textContent=agua;
}
function acao(l,s,a){
lucro=Math.max(0,Math.min(100,lucro+l));
sust=Math.max(0,Math.min(100,sust+s));
agua=Math.max(0,Math.min(100,agua+a));
atualizar();
}
function finalizar(){
let m='';
if(lucro>=80 && sust>=80) m='🏆 Excelente! Sua fazenda é um exemplo de sustentabilidade.';
else if(lucro>sust) m='⚠️ Muito lucro, mas é preciso investir mais no meio ambiente.';
else m='🌳 Boa preservação ambiental. Continue buscando equilíbrio.';
document.getElementById('mensagem').textContent=m;
}
atualizar();
