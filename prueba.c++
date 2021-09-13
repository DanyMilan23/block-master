#include <ESP8266WiFi.h>

const int LED1 =5;
const int LED2 =4;
const int LED3 =0;

void setup(){  // definir si la variable es de entrada // o salida.
 pinMode(LED1,OUTPUT); 
 pinMode(LED2,OUTPUT); 
 pinMode(LED3,OUTPUT); 
}
void loop() {  
  digitalWrite(LED1,HIGH); 
  digitalWrite(LED2,LOW);
  digitalWrite(LED3,LOW);
  delay(3500)
  digitalWrite(LED1,LOW);
  digitalWrite(LED2,HIGH);
  delay(1500)
  digitalWrite(LED2,LOW);
  digitalWrite(LED3,HIGH);
  delay(1000)
  digitalWrite(LED3,LOW);
}