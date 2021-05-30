const tariffrate = (tariffRate)?tariffRate:{};

function frmSubmit(e) {
    var fields=e.elements;
   var fieldsLen=e.elements.length;
   let oldUnits=0;
   let newUnits=0;
   for(i=0;i<fieldsLen;i++) {
    if(fields[i].id!==undefined && fields[i].id==="old_units" ) {
        oldUnits=fields[i].value;
    }
    if(fields[i].id!==undefined && fields[i].id==="new_units" ) {
        newUnits=fields[i].value;
    }
    
    //alert(fields[i].value);
    if(fields[i].id!==undefined && fields[i].id==="tariff" ) {
//      alert(fields[i].value);
        let tariffPlan=  fields[i].value;
        debugger;
       var rateRange=tariffRate.lowtensionsupply.tariff[tariffPlan];
         // alert(rateRange);
         alert(rateRange.servicecharges);
         alert(oldUnits);
         alert(newUnits);
         //alert(rateRange.servicecharges);
         alert(rateRange.toString());
          console.log(rateRange);
    }

   }  
  
}

