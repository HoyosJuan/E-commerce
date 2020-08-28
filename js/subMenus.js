$('#subMenCat').slideUp()
$('#categoriasMobile').click((e)=>{
  e.preventDefault();
  if($('#subMenCat').css('display')=='none' || $('#subMenCat').css('display')!='block'){
    console.log("no")
    $('#categoriasMobile').css('background','#B33771');
    $('#categoriasMobile').css('color','#fff');
    $('#categoriasMobile').css('padding-bottom','0px');
  }else{
    console.log("si");
    $('#categoriasMobile').css('background','#fff');
    $('#categoriasMobile').css('color','#182c61');
    $('#categoriasMobile').css('padding-bottom','15px');
  }
  $('#subMenCat').slideToggle(800)
  console.log($('#subMenCat').css('display'))
})
