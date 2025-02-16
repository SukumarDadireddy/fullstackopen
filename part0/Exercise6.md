```mermaid
    sequenceDiagram
        participant browser
        participant server

        Note right of browser: In SPA on sumbitting the form, triggers on click event, code redraws the notes, and sends a post reqest to add the note to server

        browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
        activate server
        server-->>browser: 201 Created
        deactivate server

```