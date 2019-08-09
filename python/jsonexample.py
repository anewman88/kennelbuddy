#!/usr/bin/python


import requests

response = requests.get("http://api.open-notify.org/iss-now.json")

print(response)

print(response.content)
# gives:
#b'{"timestamp": 1565053493, "message": "success", "iss_position": {"longitude": "174.2008", "latitude": "32.8829"}}'

data = response.json()
#gives

# response.json() returns a "dictionary"

print(data)
#gives: {'timestamp': 1565053832, 'message': 'success', 'iss_position': {'longitude': '-163.9197', 'latitude': '45.6510'}}

# example for getting at 
print(data['timestamp'])

#give: 1565053832
