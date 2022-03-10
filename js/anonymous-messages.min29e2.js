$(document).ready(function(){const emailValidationError=$('#i18n-validation-email').text();const requiredValidationError=$('#i18n-validation-required').text();const passwordValidationError=$('#i18n-validation-password-match').text();const unknownValidationError=$('#i18n-validation-unknown').text();const errorElement=$('.validation-error-signup');if($('form#anonymousMessagesForm').length){let isNameField=false;let isEmailField=false;let isEmailValid=false;if($("#anonymousMessagesNameInput").length&&$("#anonymousMessagesNameInput").data('required').toLowerCase()==='true'){isNameField=true;}
if($("#anonymousMessagesEmailInput").length&&$("#anonymousMessagesEmailInput").data('required').toLowerCase()==='true'){isEmailField=true;}
if($("#anonymousMessagesEmailInput").length){$('#anonymousMessagesEmailInput').on('keyup paste',function(e){let input=$(this).val();if(input.length>0){$("#anonymousMessagesEmailInput").rules("add",{email:true,});}});}
$('form#anonymousMessagesForm').validate({errorElement:'div',errorClass:'validation-error',rules:{message:{required:true,},name:{required:isNameField,},email:{required:isEmailField,email:isEmailValid,}},messages:{email:{email:emailValidationError,required:requiredValidationError,},name:requiredValidationError,message:requiredValidationError,},submitHandler:function(form,params){const messageForm=form;const message=$('#anonymousMessagesTextInput').val();const username=$(messageForm).data('username');let nameField=null;let emailField=null;if($("#anonymousMessagesNameInput").length){nameField=$("#anonymousMessagesNameInput").val();}
if($("#anonymousMessagesEmailInput").length){emailField=$("#anonymousMessagesEmailInput").val();}
$.ajax({type:form.method,dataType:'json',contentType:'application/json',url:form.action,data:JSON.stringify({"message":message,"username":username,"name":nameField,"email":emailField,}),success:function(data){if(data.status==="ok"){$('.preview-anonymous-messages-content.pseudo-input-preview').css({'display':'none'});$('.preview-anonymous-messages-content.click-button').fadeIn('fast','linear').css({'display':'flex'});$('.preview-anonymous-messages-content.click-button span.success-text').css({'display':'block'}).addClass('show');}},error:function(data){if(data.responseJSON){var key=Object.keys(data.responseJSON)[0];if(key==='message'){var errorElement=$('#anonymousMessagesForm #anonymousMessagesTextInput-error');}else if(key==='email'){var errorElement=$('#anonymousMessagesForm #anonymousMessagesEmailInput-error');}
errorElement.fadeIn().text(data.responseJSON[key]);}}});}});}
$('#anonymousMessagesTextInput').on('keyup paste',function(e){let input=$(this).val(),inputLength=input.length,maxCharacters=512,remain=parseInt(maxCharacters-inputLength);$('#anonymousMessagesTextInputMaxCharacters i').text(remain);if(remain<=0&&e.which!==0&&e.charCode!==0){$('#anonymousMessagesTextInput').val((input).substring(0,inputLength-1))}});});