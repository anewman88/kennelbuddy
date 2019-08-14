#!/usr/bin/python
import requests
import json
import sys
#import Adafruit_DHT
#import time
import random
from time import sleep

#Constant and Variable Definitions
LocalHost = True
Emulate = True
SUCCESS_CODE = 200
DebugON = False
validGPIO = [13, 19, 26]
LOOPMAX = 10
LoopCnt = 0
bogus = 0

# Sensor should be set to Adafruit_DHT.DHT11,
# Adafruit_DHT.DHT22, or Adafruit_DHT.AM2302.
# sensor = Adafruit_DHT.DHT11

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
    GPIOpin = int(sys.argv[2])
    if DebugON: print (GPIOpin, type(GPIOpin))
    if GPIOpin not in validGPIO:
        print ("Invalid GPIOpin ", GPIOpin)
        sys.exit(1)

    # Check for DebugON flag
    if argv_cnt >= 4:
        DebugON = sys.argv[3]

else:
    print ("Not enough arguments.  Usage: python3 <Filename.py> <DeviceID> <GPIO pin> [<DebugON boolean>]")
    sys.exit(1)
    
# Initialize the device with the server
if LocalHost:
    response = requests.get("http://localhost:3000/api/dbase/remotedevice/"+DeviceID)
else:
    response = requests.get("http://immense-forest-39131.herokuapp.com/api/dbase/remotedevice/"+DeviceID)

if response.status_code != SUCCESS_CODE:
    print ("Device initialization failed with response code: ", response)
    sys.exit(1)
    
#  Retrieve and store the JSON response data    
DeviceInfo = response.json()

if DebugON:
    for key, val in DeviceInfo.items():
        print (key, val, type(val))

def readTemp():
    if (Emulate):
        CurTemp = random.randint(17,30)
    else:
        #CurTemp = use library read here
        CurTemp = 0

    return (CurTemp)

def ReadAndUpdateTemp(dev):
    if DebugON: print ("In ReadAndUpdateTemp ")

    Celcius = readTemp()
    if DebugON: print ("Read Device Temp in Celcius: ", Celcius)

    if Celcius == None:  # bad reading.  Do not update
        return
    else:
        # convert to deg F and round to whole number before returning
        dev['Cur_Temp'] = round(9.0/5.0 * Celcius + 32)
        if DebugON: print("Current Temp calculated", Celcius, dev['Cur_Temp'])

        # Test for and set new min and max temperatures
        if dev['Cur_Temp'] > dev['TempMax']: dev['TempMax'] = dev['Cur_Temp']
        if dev['Cur_Temp'] < dev['TempMin']: dev['TempMin'] = dev['Cur_Temp']

        # send the current temps to the server to be stored
        if LocalHost:
            PutStr="http://localhost:3000/api/dbase/remotedevice/"+ DeviceID +"/"+ \
                str(dev['Cur_Temp']) +"/"+ str(dev['TempMin']) +"/"+ str(dev['TempMax'])
            if DebugON: print(PutStr)
            response = requests.put(PutStr)
        else:
            PutStr="http://immense-forest-39131.herokuapp.com/api/dbase/remotedevice/"+ DeviceID +"/"+ \
                str(dev['Cur_Temp']) +"/"+ str(dev['TempMin']) +"/"+ str(dev['TempMax'])
            if DebugON: print(PutStr)
            response = requests.put(PutStr)
            
        if response.status_code == SUCCESS_CODE:
            # Retrieve and store the JSON response data    
            DeviceInfo = response.json()
            if DebugON: print (DeviceInfo)

        if DeviceInfo['DeviceOnline'] == False:   
            if DebugON: print("Device Taken Offline.  Exiting program")
            sys.exit(0)

    

# Set up the interval timer
print ("Setting up Timer with IntervalTime: ", DeviceInfo['Interval'])

LoopCnt = 0
while LoopCnt <= LOOPMAX:
    sleep(DeviceInfo['Interval'])
    ReadAndUpdateTemp(DeviceInfo)
    LoopCnt = LoopCnt + 1
    if DebugON:
        print("LoopCnt ", LoopCnt)


