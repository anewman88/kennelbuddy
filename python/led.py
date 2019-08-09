#Import the Python libraries needed
import RPi.GPIO as GPIO
import time

#set the GPIO mode to Broadcom pin numbers, not Board pin number
GPIO.setmode(GPIO.BCM)

#set the LED GPIO number
LED = 4

#set the LED GPIO pin as an output
GPIO.setup(LED, GPIO.OUT)


toggle = True

#loop 5 times
for x in range(5):
    
    #Turn the GPIO pin on
    GPIO.output(LED, toggle)

    #Wait second
    time.sleep(2)

    toggle = not toggle

print("done")

#Clean up
GPIO.cleanup()


