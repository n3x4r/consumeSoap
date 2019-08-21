import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
 // https://stackoverflow.com/questions/46296983/soap-wsdl-request-angular2-4-framework
  // https://stackoverflow.com/questions/54606439/apache-tomcat-no-access-control-allow-origin-header-is-present-on-the-requeste
  constructor() { }

  ngOnInit() {
    this.soapCall();
    this.soapPersona();
  }

  soapCall() {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open('POST', 'http://localhost:8080/CalculatorService/CalculatorService?wsdl', true);
   // const input_element = <HTMLInputElement> document.getElementById('choosenNumber');

   // console.log('chVal : ' + input_element.value);
   // const choosenNumberValue = input_element.value;

    // The following variable contains the xml SOAP request.
    const sr =
      `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:cal="http://calculator.com/">
           <soapenv:Header/>
             <soapenv:Body>
               <cal:addSuma>
                 <arg0>45</arg0>
                 <arg1>2</arg1>
               </cal:addSuma>
             </soapenv:Body>
           </soapenv:Envelope>`;

    xmlhttp.onreadystatechange =  () => {
      if (xmlhttp.readyState === 4) {
        if (xmlhttp.status === 200) {
          const xml = xmlhttp.responseXML;
          // Here I'm getting the value contained by the <return> node.
          const response_number = parseInt(xml.getElementsByTagName('return')[0].childNodes[0].textContent);
          // Print result square number.
          console.log(response_number);
        }
      }
    }
    // Send the POST request.
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');
    xmlhttp.responseType = 'document';
    xmlhttp.send(sr);
  }


  soapPersona() {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open('POST', 'http://localhost:8080/CalculatorService/CalculatorService?wsdl', true);
    // const input_element = <HTMLInputElement> document.getElementById('choosenNumber');

    // console.log('chVal : ' + input_element.value);
    // const choosenNumberValue = input_element.value;

    // The following variable contains the xml SOAP request.
    const sr =
      `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:cal="http://calculator.com/">
           <soapenv:Header/>
             <soapenv:Body>
               <cal:getPersona>
                 <arg0>Carlos</arg0>
                 <arg1>2</arg1>
               </cal:getPersona>
             </soapenv:Body>
           </soapenv:Envelope>`;

    xmlhttp.onreadystatechange =  () => {
      if (xmlhttp.readyState === 4) {
        if (xmlhttp.status === 200) {
          const xml = xmlhttp.responseXML;
          // Here I'm getting the value contained by the <return> node.
          // const response_number = parseInt(xml.getElementsByTagName('return')[0].childNodes[0].nodeValue);
          // Print result square number.
          console.log(xml.getElementsByTagName('return'));
          console.log(xml.getElementsByTagName('return')[0].childNodes[0].textContent);
          console.log(xml.getElementsByTagName('return')[0].childNodes[1].textContent);
        }
      }
    }
    // Send the POST request.
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');
    xmlhttp.responseType = 'document';
    xmlhttp.send(sr);
  }
}
