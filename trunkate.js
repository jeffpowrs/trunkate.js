;(function ( $, window, document, undefined ) {

  $.trunkate = function ( jQueryArray, charNumber) {

    var jqArrayLen = jQueryArray.length,
        currEl,
        currText,
        undo = typeof charNumber === 'string' && charNumber === 'undo' ? true : false ,
        findLastSpace = function () {
          var i = charNumber+1;
          for ( i >= 0; i--; ) {
            if ( currText[i] === ' ' ) return charNumber-1;
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

    for ( var i = 0; i < jqArrayLen; i++ ) {
      currEl = $(jQueryArray[i]);
      currText = currEl.data('originalText') || currEl.text();
      if ( undo ) toOriginal();
      else toSubStr();
    }
  
  };

})( jQuery, window , document );
