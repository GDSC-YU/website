import requests
import string
import os

# Define the API URL
API_URL = "https://ui-avatars.com/api/"

# Define the query parameters
params = {
    "background": "1E293B",
    "color": "fff",
    "bold": "true",
    "format": "svg",
}

# Define the alphabet
alphabet = string.ascii_uppercase

# Get the directory containing the Python file
directory = os.path.dirname(os.path.abspath(__file__))

# Create a folder for the imgs if it doesn't exist
if not os.path.exists(os.path.join(directory, "initials")):
    os.mkdir(os.path.join(directory, "initials"))

# Loop through each letter of the alphabet
for initial in alphabet:
    # Add the initial to the query parameters
    params["name"] = initial

    # Make a request to the API with the query parameters
    response = requests.get(API_URL, params=params)

    # Write the image file with the initial as the filename and the extension from the Content-Type header
    with open(os.path.join(directory, "initials", f"{initial}.svg"), "wb") as f:
        f.write(response.content)
