var fbAppId=266003681172790;$(document).ready(function(){const emailValidationError=$('#i18n-validation-email').text();const requiredValidationError=$('#i18n-validation-required').text();const passwordValidationError=$('#i18n-validation-password-match').text();const unknownValidationError=$('#i18n-validation-unknown').text();const errorElement=$('.validation-error-signup');let vh=window.innerHeight*0.01;document.documentElement.style.setProperty('--vh',`${vh}px`);$(document).mouseup(function(e){let container=$('#userStoreSection');if(!container.is(e.target)&&container.has(e.target).length===0){container.removeClass('visible').fadeOut('fast','linear');$('#showUserStore').fadeIn('fast','linear');}});$(document).mouseup(function(e){let container=$('#reportAbuseButton').parent();if(!container.is(e.target)&&container.has(e.target).length===0){container.removeClass('expanded');}});if($('#communitySlider').length){const slider=$('#communitySlider');const itemsCount=slider.data('count');const rowsCount=slider.data('row');$(function(){for(i=0;i<rowsCount;i++){$('<div class="slider-row"></div>').appendTo('#communitySlider .community-slider-section-wrapper');}
for(j=0;j<((itemsCount/rowsCount)+(itemsCount/rowsCount));j++){$('<div class="slider-item"></div>').appendTo('#communitySlider .community-slider-section-wrapper .slider-row');}});}
$('body').click(function(event){if($('.share-dropdown__menu').hasClass('active')){$('.share-dropdown__menu').parents('.preview-link-item__component').removeClass('active');$('.share-dropdown__menu').removeClass('active bottom');}})
var isMobilePlatform={Android:function(){return navigator.userAgent.match(/Android/i);},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i);},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i);},Opera:function(){return navigator.userAgent.match(/Opera Mini/i);},Windows:function(){return navigator.userAgent.match(/IEMobile/i);},any:function(){return(isMobilePlatform.Android()||isMobilePlatform.BlackBerry()||isMobilePlatform.iOS()||isMobilePlatform.Opera()||isMobilePlatform.Windows());}};var windowH=$(window).height();var headerH=$('header').height();var headerHelperH=0;var footerH=$('footer').height();var dropdownOpen=false;if($('#navbarHelper').length){headerHelperH=$('#navbarHelper').height()}
$('body .content-wrapper').css({'min-height':windowH-(headerH-headerHelperH)-footerH+'px',});$('#sideMenu').hide();$("#openMenu").click(function(e){e.preventDefault();e.stopPropagation();$('#sideMenu').fadeIn().addClass('open').css({'visibility':'visible',});$('#openMenu').addClass('expanded')
$('body').css({'overflow-y':'hidden',})});$('#closeMenu').click(function(e){$('#sideMenu').fadeOut().removeClass('open').css({'visibility':'hidden',});$('#openMenu').removeClass('expanded')
$('body').css({'overflow-y':'auto',})});function dropdownToggle(dropdownId){$(dropdownId).toggleClass(function(){$('body .user-page-section .preview-links-list__component .preview-link-item__component').removeClass('active');if($(dropdownId).hasClass('active')){$(dropdownId).removeClass('active bottom');$('body .user-page-section .preview-links-list__component .preview-link-item__component').removeClass('active');return'';}else{$('.share-dropdown__menu').not(dropdownId).removeClass('active bottom');return'active';}});};$('#qrCodeIconDropdown').click(function(e){e.preventDefault();e.stopPropagation();dropdownToggle('#qrCodeDropdown');});$('#downloadQrCodeBtn').click(function(){let downloadImage=$(this).data('image');let downloadImageReady;fetch(downloadImage).then(res=>res.blob()).then(blob=>(downloadImageReady=blob)).then(()=>{download(downloadImageReady,'qrcode-heylinkme-profile',downloadImageReady.type);})});$('#shareIconDropdown').click(function(e){e.preventDefault();e.stopPropagation();dropdownToggle('#share_profile_link');});$('body .user-page-section .preview-links-list__component .preview-link-item__component').each(function(index){$(this).css({'z-index':999-(index+1),});});$('body .user-page-section .preview-links-list__component .preview-share-icon__component').not('#shareIconDropdown,.phone-link').map(function(_e){var element='#'+$(this).attr('id');var shareDropdownMenuID='#share_dropdown_menu_'+$(this).attr('id');$(element).click(function(e){e.preventDefault();e.stopPropagation();var itemHeight=$(this).offset().top-60;var dropdownOffsetHeight=$(window).height()-itemHeight-$('.share-dropdown__menu.share-dropdown-links').height();$('.share-dropdown__menu').not(shareDropdownMenuID).removeClass('active bottom');$(shareDropdownMenuID).toggleClass(function(){if(dropdownOffsetHeight<0){$(shareDropdownMenuID).parents('.preview-link-item__component').toggleClass('active');return'active bottom';}else{$('body .user-page-section .preview-links-list__component .preview-link-item__component').not(element).removeClass('active');return'active';}})
if($('#share_profile_link').hasClass('active')){$('#share_profile_link').removeClass('active');}})});if($('#musicItemAudioPlayer').length){const currentPlayer=$('#musicItemAudioPlayer');const player=$('#musicItemAudioPlayer')[0];let playing=false;currentPlayer.on('playing',function(){playing=true;$('#playBtn').css({'display':'none'});$('#pauseBtn').css({'display':'block'});});currentPlayer.on('ended',function(){playing=false;$('#playBtn').css({'display':'block'});$('#pauseBtn').css({'display':'none'});});currentPlayer.on('pause',function(){playing=false;$('#playBtn').css({'display':'block'});$('#pauseBtn').css({'display':'none'});});function isPlaying(audelem){return!audelem.paused;}
$('#playBtn').click(function(){if(isPlaying(player)){player.pause();}else{player.play();}});$('#pauseBtn').click(function(){if(isPlaying(player)){player.pause();}else{player.play();}});}
$('.social-link-item__component.disabled').click(function(e){e.preventDefault();let copyText=$(this).data('sharetext');let notification=$('#i18n-data-copied').text();copyToClipboard(copyText,notification);});$('.social-link-item-button__component.disabled').click(function(e){e.preventDefault();let copyText=$(this).data('sharetext');let notification=$('#i18n-data-copied').text();copyToClipboard(copyText,notification);});$('.share-dropdown__menu.share-dropdown-links .dropdown-menu-item__wrapper.facebook').click(function(){var shareurl=$('.share-dropdown__menu.share-dropdown-links.active .dropdown-menu-item__wrapper.facebook .dropdown-item__text').data('shareurl');socialMediaShare('fb',shareurl);return false;});$('.commerce-share-messenger').click(function(){let shareurl=$('div#commerceShareMsg').data('shareurl');window.open('https://www.messenger.com/t/Username'+escape(shareurl),'_blank','menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');})
$('.commerce-share-slack').click(function(){let shareurl=$('div#commerceShareSlack').data('shareurl');window.open('slack://','_blank','menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');})
$('.share-dropdown__menu.share-dropdown-links .dropdown-menu-item__wrapper.twitter').click(function(){var shareurl=$('.share-dropdown__menu.share-dropdown-links.active .dropdown-menu-item__wrapper.twitter .dropdown-item__text').data('shareurl');window.open('https://twitter.com/share?url='+escape(shareurl)+'&text='+document.title,'_blank','menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600')})
$('.share-dropdown__menu.share-dropdown-links .dropdown-menu-item__wrapper.telegram').click(function(){var shareurl=$('.share-dropdown__menu.share-dropdown-links.active .dropdown-menu-item__wrapper.telegram .dropdown-item__text').data('shareurl');socialMediaShare('telegram',shareurl);return false;});$('.share-dropdown__menu.share-dropdown-links .dropdown-menu-item__wrapper.linkedin').click(function(){var shareurl=$('.share-dropdown__menu.share-dropdown-links.active .dropdown-menu-item__wrapper.linkedin .dropdown-item__text').data('shareurl');socialMediaShare('linkedin',shareurl);return false;});$('#share_profile_link .dropdown-menu-item__wrapper.facebook').not('.share-dropdown-links').click(function(){var shareurl=$('div#shareFBProfile').data('shareurl');socialMediaShare('fb',shareurl);return false;});$('.commerce-share-fb').click(function(){let shareurl=$('div#commerceShareFb').data('shareurl');socialMediaShare('fb',shareurl);return false;})
$('#share_profile_link .dropdown-menu-item__wrapper.twitter').not('.share-dropdown-links').click(function(){var shareurl=$('div#shareTWProfile').data('shareurl');window.open('https://twitter.com/share?url='+escape(shareurl)+'&text='+document.title,'_blank','menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600')});$('.commerce-share-tw').click(function(){let shareurl=$('div#commerceShareTw').data('shareurl');window.open('https://twitter.com/messages?url='+escape(shareurl)+'&text='+document.title,'_blank','menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600')});$('#share_profile_link .dropdown-menu-item__wrapper.telegram ').not('.share-dropdown-links').click(function(){var shareurl=$('div#shareTelegramProfile').data('shareurl');socialMediaShare('telegram',shareurl);return false;});$('.commerce-share-telegram').click(function(){let shareurl=$('div#commerceShareTelegram').data('shareurl');socialMediaShare('telegram',shareurl);return false;})
$('.commerce-share-wechat').click(function(){let shareurl=$('div#commerceShareWechat').data('shareurl');socialMediaShare('wechat',shareurl);return false;})
$('#share_profile_link .dropdown-menu-item__wrapper.linkedin').not('.share-dropdown-links').click(function(){var shareurl=$('div#shareLinkedinProfile').data('shareurl');socialMediaShare('linkedin',shareurl);return false;});$('.commerce-share-linkedin').click(function(){var shareurl=$('div#commerceShareLinkedin').data('shareurl');let target='_blank';let iframeParams='menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600';let baseLdUrl='https://www.linkedin.com/feed/';window.open(baseLdUrl
+shareurl,target,iframeParams);})
$('.commerce-share-whatsapp').click(function(){if(isMobilePlatform.any()){var shareurl=$('div#commerceShareWhatsApp').data('shareurl');var whatsapp_url="whatsapp://send?text=";window.location.href=whatsapp_url+document.title+' - '+encodeURIComponent(shareurl);}else{alert("Please share this article in mobile device");}})
$('.dropdow-menu__footer .share-link .share-link--wrapper span.icon').click(function(){var shareurl=$(this).data('shareurl');var $temp=$("<input>");$("body").append($temp);$temp.val(shareurl).select();document.execCommand("copy");$temp.remove();showNotification($('#i18n-link-copied').text());});$('.share-link .share-link-wrapper span.icon-copy').click(function(){var shareurl=$(this).data('shareurl');var $temp=$("<input>");$("body").append($temp);$temp.val(shareurl).select();document.execCommand("copy");$temp.remove();showNotification($('#i18n-link-copied').text());});function copyToClipboard(copyText,notificationText){let $temp=$("<input>");$("body").append($temp);$temp.val(copyText).select();document.execCommand("copy");$temp.remove();showNotification(notificationText);}
$(document).mouseup(function(e){$('#sideMenu').fadeOut().removeClass('open').css({'visibility':'hidden',});$('#openMenu').removeClass('expanded').css({'visibility':'visible',});$('body').css({'overflow-y':'auto',})
$('#shareDropdownMenu').fadeOut(50);});$('body .pricing-page-section .pricing-card.pro #switchPrice .price-switcher-wrapper #switchPriceYearly').click(function(_e){$(this).addClass('active');$('body .pricing-page-section .pricing-card.pro').addClass('yearly').removeClass('monthly');$('body .pricing-page-section .pricing-card.pro #switchPrice .price-switcher-wrapper #switchPriceMonthly').removeClass('active');});$('body .pricing-page-section .pricing-card.pro #switchPrice .price-switcher-wrapper #switchPriceMonthly').click(function(_e){$(this).addClass('active');$('body .pricing-page-section .pricing-card.pro').addClass('monthly').removeClass('yearly');$('body .pricing-page-section .pricing-card.pro #switchPrice .price-switcher-wrapper #switchPriceYearly').removeClass('active');});$('body div#starterCard').hover(function(){$('body div#proCard').removeClass('hovered');$(this).addClass('hovered');},function(){$('body div#proCard').addClass('hovered');$(this).removeClass('hovered');});$('body div#proCard').hover(function(){$(this).addClass('hovered');},function(){});if($('form#contactUsForm').length){grecaptcha.ready(function(){grecaptcha.execute('6LcC29kZAAAAALDDe5kPYz3WjQQh_NeazFlH2fn0',{action:'submit'}).then(function(token){const emailValidationError=$('#i18n-validation-email').text();$('form#contactUsForm').validate({errorElement:'div',errorClass:'validation-error',rules:{email:{required:true,email:true,},},messages:{email:{email:emailValidationError,required:requiredValidationError,},},});});});}
function showNotification(text){$('#notificationPopUp').fadeIn().addClass('opened');$('div.notication-text').html(text)
setTimeout(function(){$('#notificationPopUp').fadeOut().removeClass('opened');$('div.notication-text').empty();},1500);}
function socialMediaShare(type,url){var target='_blank';var iframeParams='menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600';switch(type){case'fb':var baseFbUrl='https://www.facebook.com/sharer/sharer.php?app_id=';window.open(baseFbUrl+fbAppId+'&u='+escape(url)+'&href='+escape(url)+'&t='+document.title,target,iframeParams);break;case'tw':var baseTwUrl='https://twitter.com/share?url=';window.open(baseTwUrl+escape(url)+'&text='+document.title,target,iframeParams);break;case'telegram':var baseTgUrl='https://t.me/share/url?url=';window.open(baseTgUrl+escape(url)+'&text='+document.title,target,iframeParams);break;case'linkedin':var baseLdUrl='https://www.linkedin.com/shareArticle?mini=true&url=';window.open(baseLdUrl+escape(url)+'&title='+document.title+'&source='+'',target,iframeParams);break;case'wechat':var baseWchUrl='weixin://dl/posts';window.open(baseWchUrl+escape(url)+'&title'+document.title,target,iframeParams);break;default:return null;}}
if($('#confirmSensitiveContent').length){$('#confirmSensitiveContent').click(function(){document.cookie="sensitive_content=true; Expires=Thu, 23 Nov 2023 00:00:01 GMT; path=/";location.reload();});}
$('[data-action="send_click"]').click(function(event){var apiURL=$(this).data('apiurl');var userID=$(this).data('userid');var linkID=$(this).data('linkid');var ip=$(this).data('ip');$.post(apiURL,{user_id:userID,link_id:linkID,ip:ip});});if($('#userWrapper').length){setTimeout(function(){$('#userWrapper').prop('style')['min-height']=0;},100);}
if($('#showUserStore').length){$('#showUserStore').click(function(){$('#userStoreSection').fadeIn('fast','linear').addClass('visible');$('#showUserStore').fadeOut('fast','linear');});}
if($('#closeStoreBtn').length){$('#closeStoreBtn').click(function(){$('#userStoreSection').fadeOut('fast','linear').removeClass('visible');$('#showUserStore').fadeIn('fast','linear');$('body').css({'overflow-y':'auto',});});}
if($('#userStoreSection').length){$('#userStoreSection .user-store-wrapper .user-store-item').each(function(_index,element){var imageElement=$(element).find('img');var labelElement=$(element).find('.label');$clamp(labelElement[0],{clamp:2});$(imageElement).on('error',function(){$(this).next().addClass('error').css({'background-image':'url(../../static/img/ic_default-product.svg)',})});});if($('#userStoreSection').hasClass('visible')){$('#showUserStore').fadeOut('fast','linear');}else{$('#showUserStore').fadeIn('fast','linear');}}
if($('#reportAbuseButton').length){const reportModal=$('#reportAbuseModal');const modalTitle=$('#reportAbuseModal .report-abuse-modal-wrapper h4');const firstStep=reportModal.find('.report-abuse-modal-wrapper .modal-section.first-step');const secondStep=reportModal.find('.report-abuse-modal-wrapper .modal-section.second-step');const thirdStep=reportModal.find('.report-abuse-modal-wrapper .modal-section.third-step');const elseStep=reportModal.find('.report-abuse-modal-wrapper .modal-section.else-step');const backBtn=reportModal.find('.report-abuse-modal-wrapper .modal-section.back-section');const undoBtn=$('.modal-section-button.undo');const undoBtnText=$('.modal-section-button.undo span');const doneBtn=$('.modal-section-button.done');const tryAgainBnt=$('.modal-section-button.try-again');let reasonField=$('#reportAbuseReasonField');const defaultTxt=$('#reportAbuseModal .report-abuse-modal-wrapper').data('title');const reportTxt='Report message (optional)';const successText='Thanks for the report';$('#reportAbuseButton').click(function(_e){$(this).parent().toggleClass('expanded');});firstStep.addClass('active');firstStep.children().click(function(e){$(reasonField).val(e.target.getAttribute('data-reason'))
if(reasonField.val().toLowerCase()==='something else'){firstStep.removeClass('active');elseStep.addClass('active');backBtn.addClass('active');}else{firstStep.removeClass('active');secondStep.addClass('active');modalTitle.text(reportTxt);}});backBtn.click(function(){firstStep.addClass('active');modalTitle.text(defaultTxt);elseStep.removeClass('active');backBtn.removeClass('active');});elseStep.children().click(function(e){$(reasonField).val(e.target.getAttribute('data-reason'));elseStep.removeClass('active');backBtn.removeClass('active');secondStep.addClass('active');modalTitle.text(reportTxt);});$('.modal-section-action-btn .skip, .modal-section-action-btn .send').click(function(_e){let reason=reasonField.val();let message=$('#reportAbuseMessageArea').val();$.ajax({type:'POST',dataType:'json',contentType:'application/json',url:"/report-abuse/",data:JSON.stringify({"username":reportModal.data('username'),"reason":reason,"message":message,}),success:function(data){if(data.status==="ok"){$('#reportAbuseReportIdField').val(data.id);modalTitle.text(successText);thirdStep.addClass('active');secondStep.removeClass('active');$('.report-abuse-modal-wrapper .modal-section.third-step p.success').css({'display':'inline'});$('.report-abuse-modal-wrapper .modal-section.third-step p.error').css({'display':'none'});$('.report-abuse-modal-wrapper .modal-section.third-step p.helper').css({'display':'none'});}},error:function(data){if(data.responseJSON){modalTitle.text("Ooops...");thirdStep.addClass('active');doneBtn.css({'display':'none'});tryAgainBnt.css({'display':'inline-block'});secondStep.removeClass('active');$('.report-abuse-modal-wrapper .modal-section.third-step p.success').css({'display':'none'});$('.report-abuse-modal-wrapper .modal-section.third-step p.error').text(data.responseJSON.error).css({'display':'inline'});$('.report-abuse-modal-wrapper .modal-section.third-step p.helper').css({'display':'none'});}}});});undoBtn.click(function(_e){$.ajax({type:'DELETE',dataType:'json',contentType:'application/json',url:"/report-abuse/",data:JSON.stringify({"report_id":Number($('#reportAbuseReportIdField').val()),}),success:function(data){if(data.status==="ok"){$.modal.close();}},error:function(data){if(data.responseJSON){modalTitle.text("Ooops...");thirdStep.addClass('active');doneBtn.css({'display':'none'});undoBtnText.text('Undo Again');$('.report-abuse-modal-wrapper .modal-section.third-step p.success').css({'display':'none'});$('.report-abuse-modal-wrapper .modal-section.third-step p.error').text(data.responseJSON.error).css({'display':'inline'});$('.report-abuse-modal-wrapper .modal-section.third-step p.helper').css({'display':'inline'});}}});});doneBtn.click(function(_e){$.modal.close();});tryAgainBnt.click(function(_e){tryAgainBnt.css({'display':'none'});firstStep.addClass('active');thirdStep.removeClass('active');modalTitle.text(defaultTxt);$('.report-abuse-modal-wrapper .modal-section.third-step p.success').css({'display':'inline'});$('.report-abuse-modal-wrapper .modal-section.third-step p.error').css({'display':'none'});});reportModal.on($.modal.CLOSE,function(event,modal){firstStep.addClass('active');secondStep.removeClass('active');thirdStep.removeClass('active');elseStep.removeClass('active');backBtn.removeClass('active');doneBtn.css({'display':'inline-block'});tryAgainBnt.css({'display':'none'});$(reasonField).val('');modalTitle.text(defaultTxt);undoBtnText.text('Undo');});}
if($('.preview-image-sliders-list__component')){$('.preview-image-slider-item__component .slider-wrapper').each(function(_index,element){$(element).slick({arrows:false,dots:$(element).data('dots'),infinite:true,slidesToShow:1,slidesToScroll:1,autoplay:$(element).data('autoplay'),autoplaySpeed:Number($(element).data('autoplay-speed'))*1000,}).on('setPosition',function(_event,slick){if($(element).hasClass('square')){slick.$slideTrack.css('height',slick.$slides.width()+'px');}
if($(element).hasClass('horizontal')){const slideHrWidth=slick.$slides.width()/4;slick.$slideTrack.css('height',slick.$slides.width()-slideHrWidth+'px');}
if($(element).hasClass('vertical')){const slideHrWidth=slick.$slides.width()/3;slick.$slideTrack.css('height',slick.$slides.width()+slideHrWidth+'px');}});});}
MutationObserver=window.MutationObserver||window.WebKitMutationObserver;var observer=new MutationObserver(function(mutations,observer){if(mutations&&mutations[0]&&mutations[0].target&&mutations[0].target.id==='userWrapper'){$('#userWrapper').prop('style')['min-height']=0;}});observer.observe(document,{subtree:true,attributes:true});$('.preview-link-item__component[data-link-type="tiktok"], .preview-link-item__component[data-link-type="opensea"], .preview-link-item__component[data-link-type="pinterest"], .preview-link-item__component[data-link-type="twitter"]').click(function(){let typeLinkID=$(this).data('id');let isEmbed=$(this).data('embed');if(isEmbed){$('.common-expanded-block[data-id="'+typeLinkID+'"]').toggleClass('hidden');$('.up-tiktok[data-id='+typeLinkID+'], .up-opensea[data-id='+typeLinkID+'], .up-pinterest[data-id='+typeLinkID+'], .up-twitter[data-id='+typeLinkID+']').toggleClass('hidden');$('.preview-link-wrapper[data-id="'+typeLinkID+'"]').toggleClass('bottom-border-radius');$('.link-underlayer[data-id='+typeLinkID+']').toggleClass('hidden');}else{return null}
hideOtherNetworkLinksEmbed(typeLinkID);});$('.up-tiktok, .up-opensea, .up-pinterest, .up-twitter').click(function(){let typeLinkID=$(this).data('id');$('.common-expanded-block[data-id="'+typeLinkID+'"], .up-tiktok[data-id="'+typeLinkID+'"], .up-opensea[data-id="'+typeLinkID+'"], .up-pinterest[data-id="'+typeLinkID+'"], .up-twitter[data-id="'+typeLinkID+'"]').addClass('hidden');$('.preview-link-wrapper[data-id="'+typeLinkID+'"]').removeClass('bottom-border-radius');$('.link-underlayer[data-id='+typeLinkID+']').removeClass('hidden');});hideOtherNetworkLinksEmbed=(typeLinkID)=>{$('.common-expanded-block[data-id!="'+typeLinkID+'"], .up-tiktok[data-id!="'+typeLinkID+'"], .up-opensea[data-id!="'+typeLinkID+'"], .up-pinterest[data-id!="'+typeLinkID+'"], .up-twitter[data-id!="'+typeLinkID+'"]').addClass('hidden');if($('.preview-link-wrapper[data-id!="'+typeLinkID+'"]').hasClass('bottom-border-radius')){$('.preview-link-wrapper[data-id!="'+typeLinkID+'"]').removeClass('bottom-border-radius');}};$('.preview-link-item__component[data-link-type="video"]').click(function(){let videoLinkID=$(this).data('id');let linkData=$('.video-link-url[data-id="'+videoLinkID+'"]');let videoLinkType=linkData.data('link-type');let videoService=linkData.data('videoservice');let videoUrl=linkData.data('videolink-url');let isEmbed=linkData.data('embed').toLowerCase();if(videoLinkType=='video'&&isEmbed=='true'){toggleElement(videoLinkID);$('.up-video[data-id='+videoLinkID+']').toggleClass('hidden');}
generateVideoLink(videoUrl,videoService,videoLinkID,linkData);})
$('.up-video').click(function(){let videoLinkID=$(this).data('id');$(this).addClass('hidden');$('.link-info[data-id='+videoLinkID+']').toggleClass('set-padding');$('.preview-link-wrapper[data-id='+videoLinkID+']').toggleClass('set-padding');$('.preview-video-link__component[data-id='+videoLinkID+']').toggleClass('hidden');$('.preview-link-wrapper[data-id='+videoLinkID+'] .thumbnail').toggleClass('hidden');$('.preview-link-wrapper[data-id='+videoLinkID+'] .center').toggleClass('hidden');$('.preview-link-wrapper[data-id='+videoLinkID+'] .preview-share-icon__component').toggleClass('hidden');$('.preview-link-wrapper[data-id='+videoLinkID+'] .name').toggleClass('hidden');$('.link-underlayer[data-id='+videoLinkID+']').toggleClass('hidden');$('.preview-link-item__component[data-id='+videoLinkID+'] .preview-link-wrapper[data-id='+videoLinkID+'], .link-underlayer[data-id='+videoLinkID+']').toggleClass('default-border');$('.video-frame[data-id='+videoLinkID+']').attr('src','');})
generateVideoLink=(link,service,videoLinkID,linkData)=>{let is_autoplay=linkData.data('is_autoplay');let is_mute=linkData.data('is_mute');let videoID=linkData.data('videoid');let tiktokEmbedHtml=linkData.data('embed_html');if(service=='youtube'){const youtubeLink=`https://youtube.com/embed/${videoID}?autoplay=${is_autoplay.toLowerCase()}&mute=${is_mute.toLowerCase()}`;$('.youtube-frame[data-id='+videoLinkID+']').attr('src',youtubeLink);}
if(service=='vimeo'){const vimeourl=new URL(link);const vimeoLink=`${vimeourl.protocol}//player.${vimeourl.host}/video${vimeourl.pathname}?autoplay=${is_autoplay.toLowerCase()}&muted=${is_mute.toLowerCase()}`;$('.vimeo-frame[data-id='+videoLinkID+']').attr('src',vimeoLink);}
if(service=='facebook'){$('.video-link-wrapper[data-id='+videoLinkID+']').append('<script defer src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2"></script>');}}
toggleElement=(videoLinkID)=>{$('.preview-video-link__component, .up-video').addClass('hidden');$('.preview-link-wrapper .thumbnail, .center, .name').removeClass('hidden');$('.preview-link-wrapper .preview-share-icon__component').removeClass('hidden');$('.link-info, .preview-link-wrapper').removeClass('set-padding');$('.preview-link-item__component .preview-link-wrapper, .link-underlayer').removeClass('default-border');$('.video-frame').attr('src','');if(!$(this).hasClass('hidden')){$('.link-underlayer').removeClass('hidden');}
$('.link-info[data-id='+videoLinkID+']').toggleClass('set-padding');$('.preview-link-wrapper[data-id='+videoLinkID+']').toggleClass('set-padding');$('.preview-video-link__component[data-id='+videoLinkID+']').toggleClass('hidden');$('.preview-link-wrapper[data-id='+videoLinkID+'] .thumbnail').toggleClass('hidden');$('.preview-link-wrapper[data-id='+videoLinkID+'] .center').toggleClass('hidden');$('.preview-link-wrapper[data-id='+videoLinkID+'] .preview-share-icon__component').toggleClass('hidden');$('.preview-link-wrapper[data-id='+videoLinkID+'] .name').toggleClass('hidden');$('.preview-link-item__component[data-id='+videoLinkID+'] .preview-link-wrapper[data-id='+videoLinkID+'], .link-underlayer[data-id='+videoLinkID+']').toggleClass('default-border');$('.link-underlayer[data-id='+videoLinkID+']').toggleClass('hidden');$('.video-frame[data-id='+videoLinkID+']').attr('src','');}
let langList=$('.lang-wrapper');let currentLang=$('.current-pic');$(document).mouseup(function(e){if(!currentLang.is(e.target)&&!langList.hasClass('hidden')&&langList.has(e.target).length===0){langList.addClass('hidden');langList.hide(100);}});currentLang.click(function(e){if(langList.hasClass('hidden')){langList.show(100);langList.toggleClass('hidden');return;}
if(!langList.hasClass('hidden')&&currentLang.is(e.target)){langList.hide(100);langList.toggleClass('hidden');return;}});});