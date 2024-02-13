```mermaid
  sequenceDiagram
participant user
participant browser
participant server

user->>browser: onClick text field
browser->>user: text field selected
user->>browser: input data to text field

user->>browser: onClick Save button
browser->>server: Form POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
activate server
server->>browser: HTTP status code 201 Created
deactivate server
```
