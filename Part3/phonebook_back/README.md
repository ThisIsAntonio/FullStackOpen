# Phonebook Backend

Welcome to the backend of the **Phonebook Application**. This backend, hosted on Fly.io, provides RESTful APIs for managing a phonebook. You can retrieve, add, update, and delete contact information.

---

## Base URL

The backend is hosted at:  
[https://phonebook-backend-2024-mac.fly.dev](https://phonebook-backend-2024-mac.fly.dev)

---

## Endpoints Overview

### 1. **Retrieve All Persons**  
- **URL:** `GET /api/persons`  
- **Description:** Retrieves the complete list of people in the phonebook.  

### 2. **Retrieve a Specific Person**  
- **URL:** `GET /api/persons/:id`  
- **Description:** Fetches information about a specific person based on their `id`.  

### 3. **Add a New Person**  
- **URL:** `POST /api/persons`  
- **Headers:**  
- `Content-Type: application/json`  
- **Example Body:**  
    ```json
    {
        "name": "Marco Astudillo",
        "number": "613-1112233"
    }

- **Description:** Adds a new person to the phonebook. Requires the fields name and number.

### 4. **Delete a Person**

- **URL:** `DELETE /api/persons/:id`
- **Description:** Deletes a person from the phonebook based on their id.

### 5. **Phonebook Info**

- **URL:** `GET /info`
- **Description:** Provides the total number of people in the phonebook and the current server time.

### **Request Folder**

Inside the `request/REST_FLY` folder, you will find files for each endpoint with examples and configurations to execute the requests.

### **Logs Monitoring**

Keep an eye on the backend logs during deployment to monitor errors or issues. For Fly.io, use the following command:
`fly logs`