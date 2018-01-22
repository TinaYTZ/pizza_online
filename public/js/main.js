
var main=function(){


$("#booking").hide();


var cost;
 function total_cost( x, y){
      if (x=="Large"){var base=15;}
      if (x=="Medium"){var base=12;}
      if (x=="Small"){var base=8;}
      // var toppings = y.split(",");
       var toppings_count= y.length;
       console.log(  base+1.5*toppings_count);
       return  base+1.5*toppings_count;

}

$(document).on('click','#btn_order',function(e){

	var checkedValues = $('#toppings input:checkbox:checked').map(function() {
    return this.value;
   }).get();
	cost= total_cost($('#size input:radio:checked').val(), checkedValues);

    if($('#size input:radio:checked').val()== null ){
    	alert("Please select pizza size");

    }else{
    if($('#sauce input:radio:checked').val()== null ){
    	alert("Please select pizza sauce");

    }else{
    	$("#menu").hide();
    	$("#order_summary").html("<h2>Your order:</h2>"+"<h4>"+$('#size input:radio:checked').val()+" pizza with "+$('#sauce input:radio:checked').val()+"</h4><h4>"+' Topping: '+checkedValues+"</h4> <h3> Total Cost:"+ cost.toFixed(2)+"</h3>");
    	$("#booking").show();


    }
}
});
$(document).on('click','#btnorder',function(e){
	var checkedValues = $('#toppings input:checkbox:checked').map(function() {
    return this.value;
     }).get();
	var d = new Date();

	var json=JSON.stringify({ "name":$('#name').val(),
	 	                      "email":$('#email').val(),
	 	                      "note":$('#note').val(),
	 	                      "pizza size":$('#size input:radio:checked').val(),
	 	                      "pizza sauce":$('#sauce input:radio:checked').val(),
	 	                      "Total cost":cost.toFixed(2),
	 	                      "order time":d.getTime()
	});
	 $.ajax({ 
            type: 'post',
            url: '/order',
            timeout: 15000,
            contentType: "application/json",
            data:json,
            success: function(data) {
            	alert("Your order is successfully sumbitted. Please be ready to pick it up in 15 mins");
            	$("#booking").hide();
            	$("#menu").show();



            },
			error: function (result) {
                 console.log('ajax error ' + result.status);
            }
        });


});
};

$(document).ready(main);