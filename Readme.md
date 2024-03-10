# Actian Careers
This is a Express.js server implementing a REST API. It includes a get API to fetch Actian careers details.

# Prerequisites
Node.js installed on your local machine
and npm (Node Package Manager) installed

# Getting Started
Clone the repository:
```
git clone https://github.com/sachings24/actian-careers.git
cd actian-careers
```
Create .env file and add below variables:
```
ACTIAN_URL=''
PORT=3000
``` 
Install dependencies:
```
npm install
```

Start the server:
```
npm run start
```

Rus Test:
```
npm run test
```

# API Endpoints
**GET /api/careers?department={departmentName}** Returns list of current job openings for the department from actian careers page details.

## Sample Request and Response
**Request: URL**
```
GET http://localhost:3000/api/careers?department=engineering
```

**Response: 200** 
```json
{
    "statusCode": 200,
    "responseData": {
        "jobTitles": [
            "C Engineer - Bangalore/Pune",
            "C++ Engineer - Pune",
            "Cloud DevOps Engineer",
            "Core Java Developer - Pune",
            "Quality Management - Intern [gn] Germany",
            "Senior Cloud Engineer - Remote",
            "Software Developer DBMS QA - Bangalore",
            "Sustenance Engineer - Actian Data Platform - Bangalore/Pune",
            "Technical Writer - Bangalore",
            "Zen Quality Assurance Engineer - Bangalore/Pune",
            "Zen Sustaining Engineer - Bangalore/Pune"
        ]
    }
}
```

**Response: 400** 
```json
{
    "statusCode": 400,
    "responseData": {
        "error": {
            "name": "ValidationError",
            "statusCode": 400
        },
        "message": "Department is required!"
    }
}
```

**Response: 404** 
```json
{
    "statusCode": 404,
    "responseData": {
        "error": {
            "name": "NotFoundError",
            "statusCode": 404
        },
        "message": "No department found!"
    }
}
```
