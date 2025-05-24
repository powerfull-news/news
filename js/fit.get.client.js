$(function(){$('#salesRatio').val(window.screen.width+' * '+window.screen.height);$('#salesTimeZone').val(GetClientTimeZone());});function GetClientTimeZone(){var d,tz,s="GMT ";d=new Date();tz=d.getTimezoneOffset();if(tz<0)
s+="+"+Math.abs(tz/60);else if(tz==0)
s+="GMT";else
s+="-"+Math.abs(tz/60);return s;}