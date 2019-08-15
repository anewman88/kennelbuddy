# Kennel Buddy
Project 3 - A realtime temperature monitoring system and user application
SMU Programming Bootcamp Spring 2019

## Description
This project is a realtime temperature monitoring system designed to monitor the temperature inside a kennel while a pet is travelling via cargo hold on an airline.  The monitor reports current temperatures which can be viewed by the owner or airline personel using a separate app.

### Design Overview

The client-server system is composed of three parts:
1. A temperature monitor on a Raspberry Pi microprocessor acts as a client that reports the current temperature
2. An app the owner or airline personel uses to see the current temperature 
3. A server that manages owner and device registration and saves/retrieves the temperature inforation.

The working app can be found on Heroku [here](https://immense-forest-39131.herokuapp.com).  Please note that the full working app requires a temperature monitoring device.  

### Using the App
From the Home page the user has the option to either log into an existing account or create a new account.  The user can also select the Admin Page

User Login:  The user can log in to their account by entering their username and password.  Once logged in, the user sees the current status of the monitoring device including status (online/offline), current temperature, and the highest and lowest temperatures recorded since the last reset.

Create Account:  The user must first set up their account by suppying a username and password.  The user is then prompted to input their contact information, pet information, and unique device information.  A user cannot create a new account without entering valid device information.  Once the information has been input correctly, the user sees the current status of the device as described above.

Admim:  The administration page shows all devices currently online and their status including the current temperature and the highest and lowest temperatures recorded since the last reset. Note: the login for the administrative page has been disable for demo purposes.

### Node Packages Used for the Server
The following packages are needed (npm install 'pkg name') to run the app

   * [Express](https://www.npmjs.com/package/express)

   * [Mongoose](https://www.npmjs.com/package/mongoose)

   * [React](https://www.npmjs.com/package/react)
   
   * [Axios](https://www.npmjs.com/package/axios)

### Packages Used for the Temperature Monitoring Device
The temperature monitoring device is written in Python using python3.  The code runs on a stand-alone Raspberry Pi microprocessor interfaced to 3 DHT11 temperature sensors.  Imported modules include:

 * [Adafruit_DHT](https://github.com/adafruit/Adafruit_Python_DHT)

