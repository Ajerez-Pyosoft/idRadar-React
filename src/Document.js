const BASE_URL = 'http://localhost:3000';

const dataOptions = {};

dataOptions.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    };

async function createXml(options) {
    // console.log(options);

    if(options.ddlType === '-1' || options.ddlType === '') {    
        alert('Please select a type of witsml to be generated');
        return;
    }

    if(options.ddlFilter === '-1' || options.ddlFilter === '') {
        alert('Please select a type of filter to be generated');
        return;
    }

    if(options.dataFrom === '' || options.dataTo === '') {
        alert('Please select a range to be generated');
        return;
    }
    else if (options.ddlFilter === "1") {
        const regEx = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1]) (2[0-3]|[01][0-9]):[0-5][0-9]$/;
        //const regEx = /^\d{4}-\d{2}-\d{2}$/;
        if(!options.dataFrom.match(regEx) && !options.dataTo.match(regEx)) {
            alert('Use a correct date format');
            return;
        }
        
        options.dataFrom = options.dataFrom.replace(" ", "T");
        options.dataTo = options.dataTo.replace(" ", "T");

        // var d = new Date(options.dataFrom);
        // var dNum = d.getTime();
        // if(!dNum && dNum !== 0) {
        //     alert('Use a correct date format');
        //     return;
        // }  // NaN value, Invalid date
        // if(!d.toISOString().slice(0,10) === options.dataFrom)
        //  {
        //     alert('Use a correct date format');
        //     return;
        //  }
    }

    // http://localhost:3000/api/Witsregistrosmls?
    // filter[where][and][0][wirfecharegistro][gt]=2019-05-04T00:12:48.000Z
    // &filter[where][and][1][wirfecharegistro][lt]=2019-05-04T00:31:03.000Z
    var apistring = BASE_URL;
    if(options.ddlType === "1") { 
        apistring +=  "/api/Witsregistrosmls?filter[where][and][0]";
        if(options.ddlFilter === "1") {            
            apistring += "[wirfecharegistro][gt]=" + options.dataFrom + ":00.000Z"; 
            apistring += "&filter[where][and][1][wirfecharegistro][lt]=" + options.dataTo + ":00.000Z";
            // console.log(apistring);
        }
        else {
            apistring += "[WIRprofundidad][gt]=" + options.dataFrom; 
            apistring += "&filter[where][and][1][WIRprofundidad][lt]=" + options.dataTo;
            // console.log(apistring);
        }
    }
    else { 
        apistring += "/api/Radarwarnings?filter[where][and][0]";
        if(options.ddlFilter === "1") {
            apistring += "[rawdate][gt]=" + options.dataFrom + ":00.000Z"; 
            apistring += "&filter[where][and][1][rawdate][lt]=" + options.dataTo + ":00.000Z";
        } 
        else {
            apistring += "[RAWmd][gt]=" + options.dataFrom; 
            apistring += "&filter[where][and][1][RAWmd][lt]=" + options.dataTo;
        }
        
    }

    
    
    const response = await fetch(apistring, dataOptions).then(res => res.json());

    return response;
};

async function createCsv(options) {
  console.log(options);
}; 

async function witsHeaders() {
    const response = await fetch('http://localhost:3000/api/Witsencabezados', dataOptions).then(res => res.json());
    return response;
}

const DocumentC = {
    witsml: {
        xml(options) {
            return createXml(options);
        },
        csv(options) {
            return createCsv(options);
        },
        headers() {
            return witsHeaders();
        }
    }
};

export default DocumentC;