#!/usr/bin/python
import requests
import json
import sys
import Adafruit_DHT
import time

#Constant and Variable Definitions
SUCCESS_CODE = 200
DebugON = False
# Sensor should be set to Adafruit_DHT.DHT11,
# Adafruit_DHT.DHT22, or Adafruit_DHT.AM2302.
sensor = Adafruit_DHT.DHT11

#verify the command line inputs
argv_cnt = len(sys.argv)
print ("Num input parameter is ", argv_cnt)

for x in range(argv_cnt):
    print (sys.argv[x])
    
program_name = sys.argv[0]

if argv_cnt >= 3:
    # Get the DeviceID
    DeviceID = sys.argv[1]
    # Get the GPIO pin
    GPIOpin = sys.argv[2]

    # Check for DebugON flag
    if argv_cnt >= 3:
        DebugON = sys.argv[3]

else:
    print ("Not enough arguments.  Usage: python3 <Filename.py> <DeviceID> <GPIO pin> [<DebugON boolean>]")
    sys.exit(1)
    
# Initialize the device with the server
response = requests.get("http://immense-forest-39131.herokuapp.com/api/dbase/remotedevice/KB1001")

if response.status_code != SUCCESS_CODE:
    print ("Device initialization failed with response code: ", response)
    sys.exit(1)
    
# Get and store the response data    
DeviceInfo = response.json()


if DebugON:
    for key, val in DeviceInfo.items():
        print (key, val)

sys.exit(0)

response = requests.put("http://immense-forest-39131.herokuapp.com/api/dbase/remotedevice/KB1001/68/55/95")

if response == SUCCESS_CODE:
    
    if DebugON: print(response)


    data = response.json()

    # response.json() returns a "dictionary"

    print(data)
