$( "#spinner" ).spinner();
$(function() {
    $( "#spinner" ).spinner({
      step: 0.1,
      numberFormat: "n"
    });

    $( "#culture" ).change(function() {
      var current = $( "#spinner" ).spinner( "value" );
      Globalize.culture( $(this).val() );
      $( "#spinner" ).spinner( "value", current );
    });
  });
