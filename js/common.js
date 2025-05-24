var bodyWidth=$(window).width()
$(window).resize(function(){bodyWidth=$(window).width()});$(function(){$('.ThousandsSeparator').each(function(){var num=$(this).html();var newNum;var decimalPoint=(num.toString()).indexOf('.');if(decimalPoint!=-1){var numString=String(num).split('.')
numString[0]=numString[0].replace(new RegExp('(\\d)(?=(\\d{3})+$)','ig'),'$1,');newNum=numString.join('.');}else{newNum=num.replace(new RegExp('(\\d)(?=(\\d{3})+$)','ig'),'$1,');}
$(this).html(newNum);});$('.selectpicker.paginationSelect').selectpicker('refresh');$('select.paginationSelect').change(function(){var thisPageNum=$(this).val();var hrefUrl=window.location.href;var pattern='page=([^&]*)';var thisStr='page='+thisPageNum;var newUrl=hrefUrl;if(hrefUrl.match(pattern)){var tmp='/(page=)([^&]*)/gi';newUrl=hrefUrl.replace(eval(tmp),thisStr);}else{if(hrefUrl.match('[\?]')){newUrl=hrefUrl+'&'+thisStr;}else{newUrl=hrefUrl+'?'+thisStr;}}
window.location.href=newUrl;});$('body').tooltip({selector:'[data-toggle="tooltip"]'});$('.header .tab-title').on("click",".tab-title-item",function(){$(this).addClass('active').siblings('.tab-title-item').removeClass('active');});$('#globalSearchList').on("mouseover","li:not(.item-about)",function(){$(this).siblings().removeClass('active').find('.link-business').addClass('d-none')})
$("#loginPublic input.required").each(function(){$(this).focus(function(e){$(this).parents('.form-group').addClass('focus').siblings().removeClass('focus')});});if(bodyWidth>=991){$('#menu-header-menu .menu-item').on("mouseover",".nav-link",function(e){$(this).parents('.menu-item-has-children').addClass('open')
$(this).parents('.menu-item').siblings().removeClass('open');});$('#menu-header-menu .menu-item').on("mouseleave",".sub-menu",function(e){$(this).parents('.menu-item-has-children').removeClass('open')});$('.menu-header-menu-container #globalSearchList').on("mouseover",".globalSearch-item",function(e){$(this).children('.link-business').removeClass('d-none');});$('.menu-header-menu-container #globalSearchList').on("mouseleave",".globalSearch-item",function(e){$(this).children('.link-business').addClass('d-none');});$(document).mouseup(function(e){var targetNode=$("nav .btn-toggle");if(!targetNode.is(e.target)&&targetNode.has(e.target).length===0){targetNode.find('.toggle-menu').removeClass('open')
targetNode.find('.icon-more').removeClass('reverse');$('nav .nav-right-item').fadeIn('fast')
$('header.section-wrap-header').removeClass('focus')
$('.modal-backdrop.fade.search').remove()};});}})
function scrollEvent(){$(window).scroll(function(e){scrollFunc();if(scrollDirection=='down'){$('.bottom-nav-fixed').fadeOut()}else if(scrollDirection=='up'){$('.bottom-nav-fixed').fadeIn()}})}
var scrollAction={y:'undefined'},scrollDirection;function scrollFunc(){if(typeof scrollAction.y=='undefined'){scrollAction.y=window.pageYOffset;}
var diffY=scrollAction.y-window.pageYOffset;if(diffY<0){scrollDirection='down';}else if(diffY>0){scrollDirection='up';}else{}
scrollAction.y=window.pageYOffset;}
if(bodyWidth<=991){$(function(){const elementFooter=document.querySelector('.bottom-nav-fixed')||'';if(elementFooter){scrollEvent()}})}
function getCookie(name){var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");if(arr=document.cookie.match(reg)){return unescape(arr[2]);}else{return null;};};function urlFormat(url){url=url.replace('?&','?');url=url.replace('&&','&');var lastText=url.substr(url.length-1,1);if(lastText=='?'||lastText=='&'){url=url.substr(0,url.length-1);}
return url;}
function toggleMoblieGlobalSearch(thisDom){if(thisDom.parents('.item-globalSearch').hasClass('open')){thisDom.parents('.item-globalSearch').removeClass('open')
thisDom.parents('.item-globalSearch').siblings('.menu-item').fadeIn()
$('input[name=productGlobalSearch]').attr('onfocus','toggleMoblieGlobalSearch($(this))')
thisDom.parents('.item-globalSearch').find('.icon-delete').click()}else{thisDom.parents('.item-globalSearch').addClass('open')
thisDom.parents('.item-globalSearch').siblings('.menu-item').fadeOut()
$('input[name=productGlobalSearch]').removeAttr('onfocus')}}
function slideSubMenu(thisDom,deviceType){thisDom.parents('.nav-item').siblings().find('.sub-menu').removeClass('open');thisDom.siblings('.sub-menu').toggleClass('open');if(thisDom[0].id=='nav-category-menu'){$('.nav-right-item .sub-menu').removeClass('open');thisDom.find('.icon-more').toggleClass('reverse');}else{$('#menu-header-menu, #nav-category-menu .icon-more').removeClass('open reverse');}
if(deviceType=='mobile'){$('.menu-header-menu-container, .btn-navbar-toggle, #menu-header-menu').removeClass('open')}}
function slideSearchSubMenu(thisDom){thisDom.parents('.nav-item').siblings().find('.sub-menu, .icon-more').removeClass('open reverse');$('.nav-right-item .sub-menu').removeClass('open');thisDom.parents('.nav-item').find('.sub-menu').addClass('open');if(!thisDom.val().trim()){thisDom.parents('.nav-item').find('#globalSearchList').siblings().show()
thisDom.parents('.nav-item').find('#globalSearchList').html('').removeClass('open');}
if(!($('header.section-wrap-header')).hasClass('focus')){$('nav .nav-right-item').hide()
thisDom.parents('header.section-wrap-header').addClass('focus')
$('body').append('<div class="modal-backdrop fade in search"></div>')}}
function submitSearchInput(thisDom){$("input[name=productGlobalSearch]").keyup()}
function clearSearchInput(thisDom){thisDom.hide().siblings('input').val('');thisDom.parents('.item-globalSearch').find('#globalSearchList').toggleClass('open').html('')
thisDom.parents('.item-globalSearch').find('#globalSearchList').siblings().show()}
function toggleNavbar(type){$('.nav-right-item .sub-menu').removeClass('open')
if(type=='globalSearch'){$('.btn-navbar-toggle').removeClass('open')
$('.bottom-nav-fixed').toggleClass('d-none')
$('.menu-header-menu-container').addClass('globalSearch')
if($('.sub-menu-group .item-globalSearch').css('display')=='none'){$('.menu-header-menu-container, #menu-header-menu').addClass('open')
$('.sub-menu-group .item-globalSearch').fadeIn().siblings().hide()
return}else{$('.sub-menu-group .item-globalSearch').fadeIn().siblings().hide()
$('.menu-header-menu-container, #menu-header-menu').toggleClass('open')}
$('input[name=productGlobalSearch]').focus()}else{$('.menu-header-menu-container').removeClass('globalSearch')
$('.bottom-nav-fixed').removeClass('d-none')
if($('.sub-menu-group .item-globalSearch').next().css('display')=='none'){$('.menu-header-menu-container, #menu-header-menu').addClass('open')}else{$('.menu-header-menu-container, #menu-header-menu').toggleClass('open')}
$('.sub-menu-group .item-globalSearch').hide().siblings().fadeIn()
$('.btn-navbar-toggle').toggleClass('open')}}
function messageallread(){$.post("/ajax/messageread",{},function(data){var json_data=JSON.parse(data);if(json_data.status==200){$.dialog({type:'green',icon:'fa fa-success',title:langs[lang]['DIALOG_TIPS'],content:langs[lang]['MESSAGE_ALL_READ'],autoClose:'5000',onClose:function(){window.location.reload();}});}});}
function chatallread(){$.post("/ajax/messageChatRead",{},function(data){var json_data=JSON.parse(data);if(json_data.status==200){$.dialog({type:'green',icon:'fa fa-success',title:langs[lang]['DIALOG_TIPS'],content:langs[lang]['MESSAGE_ALL_READ'],autoClose:'5000',onClose:function(){window.location.reload();}});}});}
var productGlobalSearchTimer=null
function productGlobalSearch(it,deviceType){clearTimeout(productGlobalSearchTimer)
var keywords=$(it).val().trim();if(keywords.length>0){if(keywords.length>=2){productGlobalSearchTimer=setTimeout(function(){$(it).parents('.item-globalSearch').find('.sub-menu').find('.popular-section').addClass('hidden');$(it).parents('.item-globalSearch').find('.sub-menu').find('.search-result-type').addClass('hidden');$(it).parents('.item-globalSearch').find('.sub-menu').find('.search-result-section').removeClass('hidden').find('.globalSearch-keywords').addClass('loading');$(it).parents('.item-globalSearch').find('.sub-menu').find('.search-result-section').find('.keywords').html(keywords);$(it).parents('.item-globalSearch').find('.sub-menu').find('.section-empty').addClass('hidden');$(it).parents('.item-globalSearch').find('.sub-menu').find('.search-result-section').find('.search-fail-box').addClass('hidden');$(it).parents('.item-globalSearch').find('.sub-menu').find('.search-result-section').find('.searchResult-link').remove();$.ajax({type:"POST",url:"/ajax/globalSearch",dataType:'json',data:{'keyword':keywords},success:function(data){$(it).parents('.item-globalSearch').find('.sub-menu').find('.globalSearch-keywords').removeClass('loading');$(it).parents('.item-globalSearch').find('.sub-menu').find('.search-result-section').find('.globalSearch-group').html('');console.log(data);if(data['recent'].length>0){var recentHtml='';data['recent'].forEach((item,index)=>{if(index<5){var recentHtml=`
                                        <li class="recentSearchItem" onclick="quickGlobalSearch('`+item+`')">
                                            <span class="far fa-clock"></span>
                                            <span>`+item+`</span>
                                        </li>
                                    `;}
$(it).parents('.item-globalSearch').find('.sub-menu').find('.recent-section').removeClass('hidden').find('#recentSearchesList').append(recentHtml);});}else{$(it).parents('.item-globalSearch').find('.sub-menu').find('.recent-section').addClass('hidden');}
if(data['list'].length>0||data['fifaPlayerList'].length>0||data['gameKeyList'].length>0){if(bodyWidth>=768){var allGameMax=6;}else{var allGameMax=4;}
if(bodyWidth>=992){var gameKeyMax=3;var playerMax=3;}else{var playerMax=4;var gameKeyMax=4;}
if(data['list'].length>0){data['list'].forEach((item,index)=>{if(index<allGameMax){var businessList=item.business;var businessHtml='';var businessTempHtml='';businessList.forEach((businessItem)=>{businessHtml=`
                                            <li class="business-item">
                                                <a href="`+lang_url+businessItem.route+`" class="business-link">
                                                    `+businessItem.business_name+`
                                                </a>
                                            </li>`
businessTempHtml+=businessHtml})
var gameHtml=$("<li class='globalSearch-item'></li>").html(`
                                            <div class="game-name animate">`+item.content+`</div>
                                            <div class="business-group-togglebox">
                                                <ul class="business-group font-12 justify-content-start align-items-center">
                                                    `+businessTempHtml+`
                                                </ul>
                                            </div>
                                        `)
if(deviceType=='mobile'){gameHtml.find('.game-name').attr('onclick','toggleBusinessGroup($(this))');}}
$(it).parents('.item-globalSearch').find('.sub-menu').find('.allgame-section').removeClass('hidden').find('#globalSearchList').append(gameHtml);});}else{$(it).parents('.item-globalSearch').find('.sub-menu').find('.allgame-section').addClass('hidden');}
if(data['fifaPlayerList'].length>0){data['fifaPlayerList'].forEach((item,index)=>{if(index<playerMax){var playerHtml=`
                                        <li class="globalSearch-item player-item">
                                            <a href="`+lang_url+item.url+`" class="player-link d-flex text-dark">`+item.product+`</a>
                                        </li>
                                    `;}
$(it).parents('.item-globalSearch').find('.sub-menu').find('.player-section').removeClass('hidden').find('#playerSearchList').append(playerHtml);});}else{$(it).parents('.item-globalSearch').find('.sub-menu').find('.player-section').addClass('hidden');}
if(data['gameKeyList'].length>0){data['gameKeyList'].forEach((item,index)=>{if(index<gameKeyMax){var gameKeyHtml=`
                                        <li class="gameKeySearchItem">
                                            <a href="`+lang_url+`/`+item.url+`" class="gamekey-link d-flex">
                                                <div class="gamekey-pic-box">
                                                    <canvas class="gamekey-pic" id="gamekeyGlobalSearchItemCanvas`+index+`" data-key="`+index+`" data-src="`+item.img+`"></canvas>
                                                </div>
                                                <div class="gamekey-info d-flex flex-column justify-content-between">
                                                    <div class="gamekey-name animate">`+item.product+`</div>
                                                    <div class="gamekey-region">`+item.region+`</div>
                                                </div>
                                            </a>
                                        </li>
                                    `;}
$(it).parents('.item-globalSearch').find('.sub-menu').find('.gamekey-section').removeClass('hidden').find('#gamekeySearchList').append(gameKeyHtml);});$('#gamekeySearchList .gamekey-pic').each(function(){var thisKey=$(this).attr('data-key');var thisSrc=$(this).attr('data-src');$(this).removeAttr('data-src');var canvas=document.getElementById('gamekeyGlobalSearchItemCanvas'+thisKey);var ctx=canvas.getContext('2d');var img=new Image();img.onload=function(){ctx.drawImage(img,0,0,canvas.width,canvas.height);};img.src=thisSrc;});}else{$(it).parents('.item-globalSearch').find('.sub-menu').find('.gamekey-section').addClass('hidden');}
if(data['list'].length>allGameMax||data['fifaPlayerList'].length>playerMax||data['gameKeyList'].length>gameKeyMax){$(it).parents('.item-globalSearch').find('.sub-menu').find('.search-result-section').append(`<a class="searchResult-link font-12 text-orange" href="`+lang_url+`/search-result?keyword=`+keywords+`">`+langs[lang]['VIEW_ALL']+` <small>(`+data['total']+`)</small></a>`);}}else{$(it).parents('.item-globalSearch').find('.sub-menu').find('.search-result-type').addClass('hidden');$(it).parents('.item-globalSearch').find('.sub-menu').find('.section-empty').removeClass('hidden')
$(it).parents('.item-globalSearch').find('.sub-menu').find('.no-result-box').html(langs[lang]['MO_RESULT']);}},error:function(data){$(it).parents('.item-globalSearch').find('.sub-menu').find('.globalSearch-keywords').removeClass('loading');$(it).parents('.item-globalSearch').find('.sub-menu').find('.search-result-section').find('.search-fail-box').removeClass('hidden').html(langs[lang]['REQUEST_FAIL']);}})},500)}
$(it).siblings('.icon-delete').show();}else{$(it).parents('.item-globalSearch').find('.sub-menu').find('.search-result-section').addClass('hidden');$(it).parents('.item-globalSearch').find('.sub-menu').find('.popular-section').removeClass('hidden');$(it).siblings('.icon-delete').hide();}}
function clearProductGlobalSearch(it){$(it).siblings('input').val('').keyup()}
function quickGlobalSearch(keywords){window.location.href=lang_url+'/search-result?keyword='+keywords;}
function toggleBusinessGroup(thisDom){thisDom.parent('li').siblings('li').find('.game-name').removeClass('active').siblings('.business-group-togglebox').slideUp('fast');thisDom.toggleClass('active').siblings('.business-group-togglebox').slideToggle('fast');}
function deleteCart(id){$.post('/ajax/cart',{id:id,type:'delete'},function(data){var json=JSON.parse(data);if(json['status']==200){window.location.reload();}})}
function deleteD4CartPro(pro_id,page){$.post("/ajax/deleteCartC2C",{productId:pro_id},function(data){if(data['status']==200){if(data['data']['num']==0&&page=='payment'){window.history.go(-1);}else{window.location.reload()}}else{$.dialog({type:'orange',icon:'fa fa-warning',title:langs[lang]['DIALOG_TIPS'],content:langs[lang]['TRY_LATER_AGAIN'],autoClose:'5000'});}})}
function getTop(e){var T=e.offsetTop;while(e=e.offsetParent){T+=e.offsetTop;}
return T;}
function lazyLoad(lazyloadImgs){var H=document.documentElement.clientHeight;var S=document.documentElement.scrollTop||document.body.scrollTop;for(var i=0;i<lazyloadImgs.length;i++){if(H+S>getTop(lazyloadImgs[i])){if(lazyloadImgs[i].className.indexOf('srchasload')==-1){lazyloadImgs[i].src=lazyloadImgs[i].getAttribute('data-url');lazyloadImgs[i].className=lazyloadImgs[i].className+' srchasload';}}}}
function lazyLoadBg(lazyloadBackground){var H=document.documentElement.clientHeight;var S=document.documentElement.scrollTop||document.body.scrollTop;for(var i=0;i<lazyloadBackground.length;i++){if(H+S>getTop(lazyloadBackground[i])){if(lazyloadBackground[i].className.indexOf('srchasload')==-1){lazyloadBackground[i].style.backgroundImage='url("'+lazyloadBackground[i].getAttribute("data-url")+'")';lazyloadBackground[i].removeAttribute('data-url');lazyloadBackground[i].className=lazyloadBackground[i].className+' srchasload';}}}}
let lazyloadImgs=document.getElementsByClassName('lazyload');let lazyloadBackground=document.getElementsByClassName('lazyload-bg');$(function(){window.onload=window.onscroll=function(){lazyLoad(lazyloadImgs);lazyLoadBg(lazyloadBackground);}
$('.scroll-top').click(function(){$('html,body').animate({'scrollTop':0},600);});});$(window).bind("scroll",function(){var hFooter=$("footer").height()
var hBody=document.body.scrollHeight
var hScreen=$(window).height()
var totop=document.documentElement.scrollTop||document.body.scrollTop
if(hBody-hFooter-totop+200<hScreen){$('body .scroll-top').animate({opacity:'1'},500);}});function copyInput(type,name){if(type==='discord'){$("#discordName").show();$("#discordName").select();document.execCommand("Copy");}else if(type==='wechat'){$("#wechatName").show();$("#wechatName").select();document.execCommand("Copy");}
$("#discordName").hide();$("#wechatName").hide();$.dialog({type:'green',icon:'fa fa-success',title:langs[lang]['COPIED_SUCCESS'],content:name+' '+langs[lang]['COPIED_TO_CLIPBOARD'],autoClose:'3000'});}
function signOut(){$.post('/ajax/signOut',{},function(data){var json=JSON.parse(data);console.log(json);if(json['status']==200){document.cookie='u7referer=0;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/';$.dialog({type:'green',icon:'fa fa-success',title:langs[lang]['DIALOG_TIPS'],content:langs[lang]['SIGN_OUT_SUCCESS'],autoClose:'2000',onClose:function(){localStorage.removeItem("direct_top_up_deliveryParam");if(lang_url){window.location.href=lang_url}else{window.location.href='/'}}});}})}
function checkPriceFormat(thisDom){var thisValue=thisDom.val().trim();if(thisValue.length>0){thisDom.val((thisValue*1).toFixed(2));}}
function checkVal(that){that.value=that.value.replace(/-/g,"")}
function toggleUseBalanceStatus(thisDom){thisDom.toggleClass('off on')
$('.items-wallet').toggleClass('d-flex hidden')
if($('.useBalance-btn').hasClass('on')){$('input[name=balancePayment]').val(1)}else{$('input[name=balancePayment]').val(0)}
$('.payment-methods-box input[name=paymentType]:checked').change();}
function verifyPayGoogleCode(thisBtn,memberRealName){var type=thisBtn.attr('data-type');var firstName=$('#gooleAuthorizationModal input[name=firstName]').val();var lastName=$('#gooleAuthorizationModal input[name=lastName]').val();var thisCode=$('#gooleAuthorizationModal input[name=googleAuthCodeInput]').val();if(!memberRealName&&(firstName.trim()||lastName.trim())){$.dialog({type:'orange',icon:'fa fa-warning',title:langs[lang]['DIALOG_TIPS'],content:langs[lang]['SELLTOUS17'],autoClose:'5000'});return false;}
if(thisCode.trim().length!=6){$.dialog({type:'orange',icon:'fa fa-warning',title:langs[lang]['DIALOG_TIPS'],content:langs[lang]['FILL_6_DIGIT_CODE'],autoClose:'5000'});return false;}
thisBtn.addClass('loading').attr('disabled','disabled');$.post('/ajax/verifyGoogleCodeAndName',{firstName:firstName,lastName:lastName,code:thisCode},function(data){if(data['code']=='200'){if(type=='bind'){bindGoogleAuth(thisBtn);}else if(type=='check'){$('#gooleAuthorizationModal').modal('hide');submitGoToPay(thisBtn,thisCode)}}else{thisBtn.removeClass('loading').removeAttr('disabled');var errorMsg=langs[lang]['REQUEST_FAIL'];if(data['code']=='400'){errorMsg='Please fill in real name';}else if(data['code']=='401'){errorMsg='No binding information';}else if(data['code']=='500'){errorMsg='Google Authenticator Failed';}
$.dialog({type:'orange',icon:'fa fa-warning',title:langs[lang]['DIALOG_TIPS'],content:errorMsg,autoClose:'5000'});}});}
function bindGoogleAuth(thisBtn){thisBtn.addClass('loading').attr('disabled','disabled');$.post('/ajax/bindGoogleAuth',{},function(data){thisBtn.removeClass('loading').removeAttr('disabled');if(data['code']=='200'){$('#gooleAuthorizationModal').modal('hide');submitGoToPay($('.buynow-btn'))}else if(data['code']=='201'){$('#gooleAuthorizationModal').modal('hide');$.dialog({type:'orange',icon:'fa fa-warning',title:langs[lang]['DIALOG_TIPS'],content:'You have bound',autoClose:'5000',onClose:function(){window.location.reload();}});}else{$.dialog({type:'orange',icon:'fa fa-warning',title:langs[lang]['DIALOG_TIPS'],content:langs[lang]['REQUEST_FAIL'],autoClose:'5000'});}})}
function logOut(){$.post('/ajax/logout',{},function(data){if(data['code']==200){document.cookie='u7referer=0;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/';$.dialog({type:'green',icon:'fa fa-success',title:langs[lang]['DIALOG_TIPS'],content:langs[lang]['SIGN_OUT_SUCCESS'],autoClose:'2000',onClose:function(){if(lang_url){window.location.href=lang_url}else{window.location.href='/'}}});}})}
function set_u7referer(cname,cvalue,exdays){var d=new Date();d.setTime(d.getTime()+(exdays*24*60*60*1000));var expires="expires="+d.toGMTString();document.cookie=cname+"="+cvalue+"; "+expires+"; path=/";}
function goback(){window.history.go(-1);}
function checkMemberRealName(thisBtn){$.confirm({type:'orange',icon:'fa fa-warning',title:langs[lang]['DIALOG_TIPS'],content:'<div id="checkMemberRealNamePop"><div class="title-text">Please fill in your real name</div><div class="d-flex flex-wrap justify-content-between"><input text="text" placeholder="First Name" id="commonFirstNameInput" class="animate"><input text="text" placeholder="Last Name" id="commonLastNameInput" class="animate"></div><div class="tip-line"></div></div>',buttons:{Cancel:{text:langs[lang]['CANCEL']},Confirm:{text:langs[lang]['CONFIRM'],btnClass:'btn-orange',action:function(){var memberFirstName=$('#commonFirstNameInput').val();var memberLastName=$('#commonLastNameInput').val();if(!memberFirstName||!memberLastName){$('#checkMemberRealNamePop .tip-line').html('* '+langs[lang]['FILL_IN_INFORMATION']);return false;}
if(memberFirstName.length+memberLastName.length>=50){$('#checkMemberRealNamePop .tip-line').html('* '+langs[lang]['REALNAME_LENGTH_TIP']);return false;}
thisBtn.addClass('loading').attr('disabled','disabled');$.post('/ajax/realNameSave',{memberFirstName:memberFirstName,memberLastName:memberLastName},function(data){var json=JSON.parse(data);if(json['status']==200){$.dialog({type:'green',icon:'fa fa-success',title:langs[lang]['DIALOG_TIPS'],content:langs[lang]['SUCCESS'],autoClose:'1000',onClose:function(){window.location.reload();}});}else{thisBtn.removeClass('loading').removeAttr('disabled');$.dialog({type:'orange',icon:'fa fa-warning',title:langs[lang]['DIALOG_TIPS'],content:json['message'],autoClose:'5000'});}})}}}});}
function generateDefaultAvatar(thisDom,text){thisDom.after('<div class="generateDefaultAvatar">'+text+'</div>');thisDom.remove();}
function toggleProNameTooltip(it,type){$(it).tooltip(type)}
function shutFloat(it){$(it).parent().hide()}
function verifySignUpEmail(it,pageType){if(pageType=='signUp'){var email=$(it).parents('.login-main-wrap').siblings().find('input[name=memberEmail]').val().trim();}else if(pageType=='modal'){var email=$('input[name=verifyEmail]').val().trim();var regEmail=/^([a-zA-Z0-9]+[-|_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[-|_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;if(!email){$.dialog({type:'red',icon:'fa fa-error',title:langs[lang]['DIALOG_TIPS'],content:langs[lang]['EMAIL_MUST_FILLED'],autoClose:'3000'});return false;}else if(regEmail.test(email)==false){$.dialog({type:'red',icon:'fa fa-error',title:langs[lang]['DIALOG_TIPS'],content:langs[lang]['EMAIL_INVALID'],autoClose:'3000'});return false;}}
$(it).addClass('loading').attr('disabled','disabled');$.post('/ajax/verifyEmail',{email:email,},function(data){var data=JSON.parse(data);if(data.result=='success'){verificationEmailStatus(it,pageType);$.dialog({type:'green',icon:'fa fa-success',title:langs[lang]['DIALOG_TIPS'],content:langs[lang]['VERIFICATION_LINK'],autoClose:false,backgroundDismiss:false,onClose:function(){}});}else{var tip=langs[lang]['TRY_LATER_AGAIN']
if(data.info)tip=data.info
$(it).removeClass('loading').removeAttr('disabled');$.dialog({type:'red',icon:'fa fa-error',title:langs[lang]['DIALOG_TIPS'],content:tip});}});}
function verificationEmailStatus(it,pageType){var verificationCountDown=60;var verificationTimes=0;verificationCountDownTimer=setInterval(function(){$('.emailVerfy-send-btn').addClass('loading').attr('disabled','disabled');if(verificationCountDown>=0){$('.emailVerfy-send-btn').html('Resend <small>('+verificationCountDown+'s)</small>');verificationCountDown--;}else{$('.emailVerfy-send-btn').removeClass('loading').removeAttr('disabled').html('Resend');clearInterval(verificationCountDownTimer);clearInterval(verificationStatusTimer);}},1000)
verificationStatusTimer=setInterval(function(){if(verificationTimes>5){$('.emailVerfy-send-btn').removeClass('loading').removeAttr('disabled').html('Resend');clearInterval(verificationCountDownTimer);clearInterval(verificationStatusTimer);return}
verificationTimes=verificationTimes+1;$.get('/ajax/verification',{},function(data){if(data['data']==true||data['email']==1){clearInterval(verificationCountDownTimer);clearInterval(verificationStatusTimer);if(pageType=='signUp'){$('.emailVerfy-tip.success').removeClass('hide').siblings('.emailVerfy-tip').hide();setInterval("referVerifyEmailSuccess()",1000);}else{$.dialog({type:'green',icon:'fa fa-success',title:langs[lang]['DIALOG_TIPS'],content:langs[lang]['EMAIL_VERIFICATION_SUCCESS'],autoClose:false,onClose:function(){window.location.reload();}});}}})},10000);}
function verifyEmailModal(){$('.verify-email').removeClass('hide').siblings().addClass('hide')
$('#loginPublic .modal-header').addClass('border-none')
$('#loginPublic .modal-title').css('opacity',0)
$('#loginPublic').modal()}
var referCountDown=5;function referVerifyEmailSuccess(){if(referCountDown==0){if(lang_url){window.location.href=lang_url}else{window.location.href='/'}}
$('#referCountDown').html(referCountDown);if(referCountDown>0){referCountDown--;}}