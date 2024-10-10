# Sequence Diagram for Exercise 0.5: Single page app diagram

```mermaid
sequenceDiagram
    participant user
    participant browser
    participant server

    user->>browser: Access /spa
    browser->>server: GET /spa
    activate server
    server-->>browser: HTML + JavaScript for SPA
    deactivate server

    browser->>server: GET /data.json (notes data)
    activate server
    server-->>browser: JSON with the notes
    deactivate server

    Note right of browser: The browser renders the notes using JavaScript without reloading the page
    ```