function dzie111tion() {
  const regex1 = /^[|가-힣|]+$/;
   var v1 = $('#nam_e').val();
   var r1 = $('#phone_num').val();
    
 
   
   if($('#age').val()>23 && $('#age').val()<56)
   {
 if(regex1.test(v1) && v1.length>1 )
 {
   if(r1.substr(0, 3) == "010" && r1.length==11)
   {
     if ($('#agree11').is(":checked")==true)
 {
               
    $('#submit4').prop("disabled", false);
    $('#submit4').css({background:"#00C73C"});
    $('#submit4').css({color:"#fff"});
     $('#hidden_iframe11').attr("onload", "if(submitted){hoa();site1111();}");
     $('#form_e11').prop("action", "https://docs.google.com/forms/u/0/d/e/1FAIpQLScs5cjnJI_DbJkSFdedeX9Qbc3fwAz-ZofSNViqvwFWVTMLrg/formResponse");
     $('#alert_41').css({transition:"1s"});         
     $('#alert_41').text('');
                     
                         
    } else
 {
        $('#hidden_iframe11').attr("onload", "");
        $('#submit4').prop("disabled", true);
        $('#submit4').css({background:"transparent"});
        $('#submit4').css({color:"#fff"});
        $('#alert_41').css({transition:"1s"});
        $('#alert_41').css({color:"#ddff00"});  
        $('#alert_41').text('개인정보 동의를 확인하세요!');
 }
 if(r1=="01011111111" || r1=="01022222222"|| r1=="01033333333"|| r1=="01044444444"|| r1=="01055555555"|| r1=="01066666666"|| r1=="01077777777"|| r1=="01088888888"|| r1=="01099999999"|| r1=="01000000000"|| r1=="01012121212"|| r1=="01012341234"|| r1=="01034343434"|| r1=="01012345678" || r1=="01000000001")
 {
   $('#hidden_iframe11').attr("onload", "");
   $('#submit4').prop("disabled", true);
   $('#submit4').css({background:"transparent"});
   $('#submit4').css({color:"#fff"});
   $('#alert_41').css({transition:"1s"});
   $('#alert_41').css({color:"#ddff00"});
   $('#alert_41').text('장난 신청은 불가능합니다!');
 }
 }
 
   else
   {
        $('#hidden_iframe11').attr("onload", "");
        $('#submit4').prop("disabled", true);
        $('#submit4').css({background:"transparent"});
        $('#submit4').css({color:"#fff"});
        $('#alert_41').css({transition:"1s"});
        $('#alert_41').css({color:"#ddff00"});  
        $('#alert_41').text('전화번호 입력을 확인하세요!');
   }
   }
 else
 {
        $('#hidden_iframe11').attr("onload", "");
        $('#submit4').prop("disabled", true);
        $('#submit4').css({background:"transparent"});
        $('#submit4').css({color:"#fff"});
        $('#alert_41').css({transition:"1s"});
        $('#alert_41').css({color:"#ddff00"});
        $('#alert_41').text('성함 입력을 확인하세요!');
 
 }
       if(v1=="테스트" || v1=="그냥" || v1=="아아아" || v1=="아아"|| v1=="냥냥" || v1.substr(0, 1) == "보"|| v1.substr(0, 1) == "시"|| v1.substr(0, 1) == "씨"|| v1.substr(0, 1) == "쓰"|| v1.substr(0, 1) == "그"|| v1.substr(0, 1) == "빨"|| v1.substr(0, 1) == "메"|| v1.substr(0, 1) == "랄"|| v1.substr(0, 1) == "씹"|| v1.substr(0, 1) == "좆"|| v1.substr(0, 1) == "뽀"|| v1.substr(0, 1) == "찌"|| v1.substr(0, 1) == "쫄"|| v1.substr(0, 1) == "짤"|| v1.substr(0, 1) == "쎅"|| v1.substr(0, 1) == "섹"|| v1.substr(0, 1) == "테"|| v1.substr(0, 1) == "존"|| v1.substr(0, 1) == "썅"|| v1.substr(0, 1) == "짱"|| v1.substr(0, 1) == "쌕"|| v1.substr(0, 1) == "테"|| v1.substr(0, 1) == "쎄")
   {
      $('#hidden_iframe11').attr("onload", "");
      $('#submit4').prop("disabled", true);
      $('#submit4').css({background:"transparent"});
      $('#submit4').css({color:"#fff"});
      $('#alert_41').css({transition:"1s"});
      $('#alert_41').css({color:"#ddff00"});
      $('#alert_41').text('장난 신청은 불가능합니다!');
   }    
 }
 else {
    $('#hidden_iframe11').attr("onload", "");
        $('#submit4').prop("disabled", true);
        $('#submit4').css({background:"transparent"});
        $('#submit4').css({color:"#fff"});
        $('#alert_41').css({transition:"1s"});
        $('#alert_41').css({color:"#ddff00"});
        $('#alert_41').text('24세~55세까지 가능합니다.');
 }
      if($('#age').val()<=0)
   {
      $('#hidden_iframe11').attr("onload", "");
     $('#age').val("");
      $('#submit4').prop("disabled", true);
      $('#submit4').css({background:"transparent"});
      $('#submit4').css({color:"#fff"});
      $('#alert_41').css({transition:"1s"});
      $('#alert_41').css({color:"#ddff00"});
      $('#alert_41').text('정확한 연령을 입력하세요!');
   }    
 }

 function dll(){
  $('#submit4').prop("value", "전송중");
  $('#submit4').prop("disabled", true);
  $('#submit4').css({background:"transparent"});
  $('#submit4').css({cursor:"default"});
}
 
 
 
 function hoa(){
 
  alert("신청이 완료되었습니다.\n2만원 네이버 쿠폰을 받아가세요~\n\n- 스쿨잼 -");
 }
 
 function site1111(){
  window.open("https://jamclass.netlify.app/thanks", "_self");
 }

   $(function(){
  $('#nam_e, #phone_num,#age, #agree11').bind("click keyup", dzie111tion);
})