function entryChange1(){
  radio = document.getElementsByName('example') 
  if(radio[0].checked) {
    //フォーム
    document.getElementById('wand').style.display = "";
    document.getElementById('set').style.display = "none";
    //特典
  }else if(radio[1].checked) {
    //フォーム
    document.getElementById('wand').style.display = "none";
    document.getElementById('set').style.display = "";
    //特典
  }
}

//オンロードさせ、リロード時に選択を保持
window.onload = entryChange1;

