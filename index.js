
module.exports= function(){

//var data=false;	
//UNCOMMENT bul THIS FOR CHECKPROPERTIES AND CHECK COLORS
//var bul;
//var data;
var view;  // for sharing view-object over all the functions
var name;  // to make your life easy

//MAKE YOUR REQUIRES 


return{ /* 
         * If you don't know what are you doing, please
         * don't change anything of this or audrey doesn't work
         * with your seed
         */
	     grow: function(simName, customObject){ //  Audrey call
        view= customObject;
        name= simName.slice(2);;
        start();
        },
harvestData: function(){ return data;} // for interactivity-- maybe in v3
}

//UNCOMMENT THE FUNCTION FOR COLORS VALIDATION
/*
function checkColors(){
  var colors=Object.getOwnProperview.colors);
  bul=false; // boolean to control if its defined the property

  for(var i=0; i<colors.length; i++){//iterate over prop names

    if(colors[i] === name){//if it is
      bul=true;
    }
  }
  if(bul!==true){//if its finded the statement of the tag
    view.colors[name]=view.colors.default;
    } 
}
*/
//UNCOMMENT THE FUNCTION FOR DEFINITION VALIDATION
/*
function checkProperties(){
var properties= Object.getOwnPropertyNames(view);
  bul=false; // boolean to control if its defined the property

  for(var i=0; i<properties.length; i++){//iterate over prop names
    if(properties[i] === name){//if it is
      bul=true;
    }
  }
  if(bul!==true){//if its finded the statement of the tag
    throw new Error('Not defined '+name);
    }  
}
*/

function start(){
// checkProperties();
// checkColors(); 


// Put your code here..






}

}