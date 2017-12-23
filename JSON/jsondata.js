var progdata = '{"programs":[' +
'{"PName":"CPA","DoG":"Winter 2018"},' +
'{"PName": "CPD", "DoG":"Spring 2018"},' +
'{"PName": "BSD", "DoG":"Fall 2018"}]}';

var str = JSON.parse(progdata);



document.querySelector("#div1").innerHTML = str.programs[0].PName;
console.log(document.querySelector("#div1"));