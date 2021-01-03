# The purpose of this file is to convert the data in the data directory into
# a JSON that react can grab. Originally, I had a 1000 line JSON file. Trying to
# remove that obscene file.

import yaml  # pip install pyyaml
import json
import os

projects = {}
experiences = {}


for file in os.listdir("data/projects"):
    with open(f"data/projects/{file}", 'r') as yaml_in:
        yaml_object = yaml.safe_load(yaml_in) # a dictionary now
        projects[yaml_object["name"]] = yaml_object

for file in os.listdir("data/experiences"):
    with open(f"data/experiences/{file}", 'r') as yaml_in:
        yaml_object = yaml.safe_load(yaml_in) # a dictionary now
        experiences[yaml_object["name"]] = yaml_object

data = {
    "Project": projects,
    "Experience": experiences,
}

with open("src/Data.json", "w") as json_out:
    json.dump(data, json_out)
