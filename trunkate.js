;(function ( $, window, document, undefined ) {

  $.trunkate = function ( jQueryArray, charNumber) {

    var jqArrayLen = jQueryArray.length,
        currEl,
        currText,
        undo,
        findLastSpace = function () {
          if( currText.length < charNumber ) return currText.length;
          var i = charNumber+1;
          for ( i >= 0; i--; ) {
            if ( currText[i] === ' ' ) return i+1;
          }
        },
        toOriginal = function () {
          currEl.text( currEl.data('originalText') );
        },
        toSubStr = function () {
          if( !currEl.data('originalText') ) {
            currEl.data('originalText', currText );
          }
          currEl.text( currEl.text().substr(0, findLastSpace() ) + '...');
        };

    if( typeof charNumber === 'string' && charNumber === 'undo') undo = true;

    for ( var i = 0; i < jqArrayLen; i++ ) {
      currEl = $(jQueryArray[i]);
      currText = currEl.data('originalText') || currEl.text();
      if ( undo || charNumber > currText.length ) toOriginal();
      else toSubStr();
    }
  
  };

})( jQuery, window , document );
