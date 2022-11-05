
let clientId = 'ws'+ Math.random();
// Create a client instance
const client = new Paho.MQTT.Client('91.121.93.94', 8080, clientId);

// set callback handlers
client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;

// connect the client
client.connect({onSuccess:onConnect});
varMqtt = 0;
// called when the client connects
function onConnect() {
  // Once a connection has been made, make a subscription and send a message.
  console.log("Conecctado a Mosquito");
  client.subscribe("neill003");
  client.subscribe("neill002");
  message = new Paho.MQTT.Message("3.3");
  message.destinationName = "neill003";
  client.send(message);  
}

// called when the client loses its connection
function onConnectionLost(responseObject) {
  if (responseObject.errorCode !== 0) {
    console.log("onConnectionLost:"+responseObject.errorMessage);
  }
}

// called when a message arrives
function onMessageArrived(message) {
  console.log("onMessageArrived:"+message.payloadString);
    if(message.destinationName == "neill003"){
        //document.getElementById('neill003').innerHTML = `${message.payloadString}`;
        varMqtt = parseFloat(message.payloadString);
        console.log(varMqtt)
        globales.voltaje = varMqtt;

    }
}