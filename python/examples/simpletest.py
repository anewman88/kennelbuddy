#!/usr/bin/python

# Copyright (c) 2014 Adafruit Industries
# Author: Tony DiCola

# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:

# The above copyright notice and this permission notice shall be included in all
# copies or substantial portions of the Software.

# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
# SOFTWARE.
import Adafruit_DHT
import time

# Sensor should be set to Adafruit_DHT.DHT11,
# Adafruit_DHT.DHT22, or Adafruit_DHT.AM2302.
sensor = Adafruit_DHT.DHT11

# Example using a Beaglebone Black with DHT sensor
# connected to pin P8_11.
#pin = 'P8_11'

# Example using a Raspberry Pi with DHT sensor
# connected to GPIO4.

for index in range(100):
    
# Try to grab a sensor reading.  Use the read_retry method which will retry up
# to 15 times to get a sensor reading (waiting 2 seconds between each retry).
    pin = 26
    humidity, temperature = Adafruit_DHT.read(sensor, pin)
    print(index)
    print(humidity)
    print(temperature)

# Note that sometimes you won't get a reading and
# the results will be null (because Linux can't
# guarantee the timing of calls to read the sensor).
# If this happens try again!
    if humidity is not None and temperature is not None:
        print('Pin: {0:d} Temp={1:0.1f}*C  Humidity={2:0.1f}%'.format(pin, temperature, humidity))
    else:
        print('Pin: {0:d} Failed to get reading. Try again!'.format(pin))
    
    #Wait a second
    time.sleep(1)

# Try to grab a sensor reading.  Use the read_retry method which will retry up
# to 15 times to get a sensor reading (waiting 2 seconds between each retry).
    pin = 19
    humidity, temperature = Adafruit_DHT.read(sensor, pin)
    print(index)
    print(humidity)
    print(temperature)

# Note that sometimes you won't get a reading and
# the results will be null (because Linux can't
# guarantee the timing of calls to read the sensor).
# If this happens try again!
    if humidity is not None and temperature is not None:
        print('Pin: {0:d} Temp={1:0.1f}*C  Humidity={2:0.1f}%'.format(pin, temperature, humidity))
    else:
        print('Pin: {0:d} Failed to get reading. Try again!'.format(pin))
        
    #Wait a second
    time.sleep(1)
        
# Try to grab a sensor reading.  Use the read_retry method which will retry up
# to 15 times to get a sensor reading (waiting 2 seconds between each retry).
    pin = 13
    humidity, temperature = Adafruit_DHT.read(sensor, pin)
    print(index)
    print(humidity)
    print(temperature)

# Note that sometimes you won't get a reading and
# the results will be null (because Linux can't
# guarantee the timing of calls to read the sensor).
# If this happens try again!
    if humidity is not None and temperature is not None:
        print('Pin: {0:d} Temp={1:0.1f}*C  Humidity={2:0.1f}%'.format(pin, temperature, humidity))
    else:
        print('Pin: {0:d} Failed to get reading. Try again!'.format(pin))
        
        #Wait second
        
        #Wait second
    
    time.sleep(5)

