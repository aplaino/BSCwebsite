Windows Setup 
Follow these steps to get the project running on your Windows machine:

# Prerequisites
Make sure you have Python 3.12+ installed. You can check by running python --version in your terminal.

# Create a Virtual Environment
Open your terminal (Command Prompt or PowerShell) in the project folder and run:

Bash

python -m venv venv

# Activate the Environment
In Command Prompt:
venv\Scripts\activate

In PowerShell:
.\venv\Scripts\activate
Note: You should see (venv) appear in your terminal prompt.

# Install Dependencies
pip install -r requirements.txt

# Database Setup
Run the migrations to create your local database file:

python manage.py migrate

# Create Admin Account
To access the backend dashboard and add menu items, create a superuser:

python manage.py createsuperuser

# Run the Server
python manage.py runserver

The site will be live at: http://127.0.0.1:8000/

The admin panel is at: http://127.0.0.1:8000/admin/