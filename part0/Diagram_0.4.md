# Sequence Diagram for Exercise 0.4: New note diagram

```mermaid
sequenceDiagram
    participant user
    participant browser
    participant server

    user->>browser: Write new note and click "Save"
    browser->>server: POST /new_note with the new note (content and date)
    activate server
    server-->>browser: 201 Created response
    deactivate server

    Note right of browser: The browser updates the content without reloading the page

    browser->>server: GET /notes to fetch all notes
    activate server
    server-->>browser: JSON with the updated notes
    deactivate server

    Note right of browser: The browser renders all notes, including the new note
    ```