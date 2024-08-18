import os
from random import randint

os.system('curl -d "{"last_name": "Putnic", "first_name": "Anda", "profession": "Doctor", "username": "candaPutni"'+str(randint(0,1999))+'", "password": "password123"}" -H "Content-Type: application/json" -X POST http://localhost:8080/doctors')

