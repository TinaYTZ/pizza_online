 function total_cost( x, y){
      if (x=="Large"){var base=15;}
      if (x=="Medium"){var base=12;}
      if (x=="Small"){var base=8;}
      // var toppings = y.split(",");
       var toppings_count= y.length;
       console.log(  base+1.5*toppings_count);
       return  base+1.5*toppings_count;

}
module.exports = total_cost;
