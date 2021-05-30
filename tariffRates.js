const tariffRate = {
    hightensionsupply: {},
    lowtensionsupply: {
        tariff: {
            "I-A": {
                "upto-200": {
                    "0-100": 0,
                    "101-200": 1.5,
                    servicecharges: 20
                },
                "upto-500": {
                    "0-100": 0,
                    "101-200": 2,
                    "201-500": 3,
                    servicecharges: 30
                },
                "above-500": {
                    "0-100": 0,
                    "101-200": 3.5,
                    "201-500": 4.6,
                    "above-500": 6.6,
                    servicecharges: 50
                }
            },
            "I-B":{
                rate:0,
                servicecharges: 0
            },
            "I-C": {
                rate:4.60,
                servicecharges: 120
            },
            "II-A":{
                rate:6.35,
                servicecharges: 120
            },
            "II-B1": {
                rate:5.75,
                servicecharges: 120
            },
            "II-B2": {
                rate:7.50,
                servicecharges: 120
            },
            "II-C": {
                "upto-120":{
                    rate:2.85,
                    servicecharges:120
                },
                
                "above-120" : {
                    rate:5.75,
                    servicecharges:120
                },
            },
            "III-A1" : {
               "upto-500":{
                   rate:4.0,
                   servicecharges:40
               },
               "above-500": {
                   rate:4.6,
                   servicecharges:40
               }
            },
            "III-A2": {
                "upto-500": {
                    rate:0,
                    servicecharges:0
                },
                "501-700":{
                    rate:0,
                    servicecharges:0 
                },
                "751-1000": {
                    rate:2.30,
                    servicecharges:70
                },
                "1001-1500" :{
                    rate:3.45,
                    servicecharges:70
                },
                "above-1500":{
                    rate:4.6,
                    servicecharges: 70  
                }
            },
            "III-B":{
                rate:6.35,
                servicecharges: 70 
            },
            "IV":{
                rate:0,
                servicecharges:0
            },
            "V":{
                "0-100":{
                    rate:5,
                    servicecharges:140
                },
                "above-100":{
                    rate:8.05,
                    servicecharges:140
                }
            },
            "VI":{
                rate:12,
                servicecharges:690
            }
            
        }

    }
};

