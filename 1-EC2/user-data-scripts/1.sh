#!/bin/sh
sudo dnf update -y
sudo dnf install git -y
git clone https://github.com/AlrightyTighty/AWS-Workshop-Code.git
cd AWS-Workshop-Code/1-EC2/server-code
python3 -m venv venv
source venv/bin/activate
pip install flask
deactivate
sudo ./venv/bin/python app.py
