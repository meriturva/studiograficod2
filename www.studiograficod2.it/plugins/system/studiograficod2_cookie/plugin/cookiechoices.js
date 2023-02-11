/*
 Copyright 2014 Google Inc. All rights reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

(function(window) {
  window.document.addEventListener( 'DOMContentLoaded', function () {
    if (window.document.cookie.indexOf('accept_cookiee=') == -1) {
        window.document.getElementById('cookieBanner').classList.remove('uk-hidden');
    } 
  }, false );
                  
                   
  if (!!window.cookieChoices) {
    return window.cookieChoices;
  }  

  var document = window.document;

  var cookieChoices = (function() {
    function saveUserPreference() {
      var expiryDate = new Date();
      expiryDate.setFullYear(expiryDate.getFullYear() + 1);
      document.cookie = 'accept_cookiee=y; expires=' + expiryDate.toGMTString();
    }
    
    function fillModal(modalId, fileUrl) {  
      var xhr= new XMLHttpRequest();
      xhr.open('GET', fileUrl, true);
      xhr.onreadystatechange= function() {
          if (this.readyState!==4) return;
          if (this.status!==200) return; // or whatever error handling you want
          document.getElementById(modalId).innerHTML= this.responseText;
      };
      xhr.send();
    }
    
    var exports = {};
    exports.saveUserPreference = saveUserPreference;
    exports.fillModal = fillModal;
    return exports;
  })();

  window.cookieChoices = cookieChoices;
  return cookieChoices;
})(this);
