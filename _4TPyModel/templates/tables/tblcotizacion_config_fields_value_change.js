<script>
$(document).ready(function () { $("#IDCOTIZACION").on("change", 
 function (event) { 
 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 
   // var value = $("#IDCOTIZACION").val(); 
 });}); 

 $(document).ready(function () { $("#IDPROSPECTO").on("change", 
 function (event) { 
 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 
   // var value = $("#IDPROSPECTO").val(); 
 });}); 

 $(document).ready(function () { $("#OBSERVACIONES").on("change", 
 function (event) { 
 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 
   // var value = $("#OBSERVACIONES").val(); 
 });}); 

 $(document).ready(function () { $("#IDESTATUS_tblcotizacion").on("change", 
 function (event) { 
 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 
   // var value = $("#IDESTATUS_tblcotizacion").val(); 
 });}); 

 $(document).ready(function () { $("#FECHA").on("change", 
 function (event) { 
 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 
   // var value = $("#FECHA").val(); 
 });}); 

 $(document).ready(function () { $("#SUBTOTAL").on("change", 
 function (event) { 
 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 
   var value = $("#SUBTOTAL").val(); 
  $("#bottom_SUBTOTAL").html(numberWithCommas(value));      });}); 

 $(document).ready(function () { $("#IMPORTE_IVA").on("change", 
 function (event) { 
 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 
   var value = $("#IMPORTE_IVA").val(); 
  $("#bottom_IMPORTE_IVA").html(numberWithCommas(value));      });}); 

 $(document).ready(function () { $("#TOTAL").on("change", 
 function (event) { 
 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 
   var value = $("#TOTAL").val(); 
  $("#bottom_TOTAL").html(numberWithCommas(value));      });}); 

 $(document).ready(function () { $("#ELIMINADO").on("change", 
 function (event) { 
 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 
   // var value = $("#ELIMINADO").val(); 
 });}); 

 $(document).ready(function () { $("#BLOQUEADO").on("change", 
 function (event) { 
 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 
   // var value = $("#BLOQUEADO").val(); 
 });}); 

 $(document).ready(function () { $("#FECHAALTA").on("change", 
 function (event) { 
 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 
   // var value = $("#FECHAALTA").val(); 
 });}); 

 $(document).ready(function () { $("#PROPIETARIO").on("change", 
 function (event) { 
 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 
   // var value = $("#PROPIETARIO").val(); 
 });}); 

 $(document).ready(function () { $("#TOTAL_ABONOS").on("change", 
 function (event) { 
 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 
   var value = $("#TOTAL_ABONOS").val(); 
  $("#bottom_TOTAL_ABONOS").html(numberWithCommas(value));      });}); 

 $(document).ready(function () { $("#TOTAL_ADEUDO").on("change", 
 function (event) { 
 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 
   var value = $("#TOTAL_ADEUDO").val(); 
  $("#bottom_TOTAL_ADEUDO").html(numberWithCommas(value));      });}); 

 </script>