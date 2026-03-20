# 1️⃣ CREATE – Resource (Sequence Diagram)

```mermaid
sequenceDiagram
    participant U as User (Browser)
    participant F as Frontend (form.js and resources.js)
    participant B as Backend (Express Route)
    participant S as Resource Service
    participant V as express-validator
    participant DB as PostgreSQL

    U->>F: Submit form
    F->>F: Client-side validation
    F->>B: POST /api/resources (JSON)
    B->>S: create Resource(data)

    S->>V: Validate request
    V-->>S: Validation result

    alt Validation fails (Generic)
        S-->>B: Errors in validation
        B-->>F: 400 Bad Request
        F-->>U: Show validation error message
    else Validation OK
        S->>DB: INSERT INTO resources
        DB-->>S: Result

        alt Success
            S-->>B: Created resource
            B-->>F: 201 Created
            F-->>U: Show success message
        else Duplicate
            S-->>B: Duplicate detected
            B-->>F: 409 Conflict
            F-->>U: Show duplicate message
        else Database error
            S-->>B: Database error
            B-->>F: 500 Internal Server Error
            F-->>U: Show database error
        end
    end   
```

# 2️⃣ READ — Resource (Sequence Diagram)

## READ - ALL

```mermaid
sequenceDiagram
    participant U as User (Browser)
    participant F as Frontend (form.js and resources.js)
    participant B as Backend (Express route)
    participant S as Resource service
    participant DB as PostgreSQL
    
    U->>F: Request page
    F->>B: GET /api/resources (JSON)
    B->>S: select Resources
    S->>DB: SELECT FROM resources

    DB-->>S: Result
    
    alt Success
        S-->>B: Selected resources
        B-->>F: 200 OK
        F-->>U: Render resource list (JSON)
    else  Database error
        S-->>B: Database error
        B-->>F: 500 Internal Server Error
        F-->>U: Show database error
    end
```

## READ - ID

```mermaid
sequenceDiagram
    participant U as User (Browser)
    participant F as Frontend (form.js and resources.js)
    participant B as Backend (Express route)
    participant S as Resource service
    participant DB as PostgreSQL
    
    F->>B: GET /api/resources/:id (JSON)
    B->>S: select Resource
    alt Invalid ID
        S-->>B: Invalid ID
        B-->>F: 400 Bad Request
        F-->>U: Show Invalid ID message
    else Valid ID
        S->>DB: SELECT FROM resources WHERE id 
        DB-->>S: Result
    
        alt Success
            S-->>B: Selected resource
            B-->>F: 200 OK
        else Not found
            S-->>B: Resource not found
            B-->>F: 404 Not found
        else Database error
            S-->>B: Database error
            B-->>F: 500 Internal Server Error
        end
    end


```

# 3️⃣ UPDATE — Resource (Sequence Diagram)

```mermaid
sequenceDiagram
    participant U as User (Browser)
    participant F as Frontend (form.js and resources.js)
    participant B as Backend (Express Route)
    participant S as Resource Service
    participant V as express-validator
    participant DB as PostgreSQL
    
    U->>F: Submit form
    F->>F: Client-side validation
    F->>B: PUT /api/resources/:id (JSON)
    B->>S: update Resource(id, data)

    S->>V: Validate request
    V-->>S: Validation result

    alt Invalid ID
        S-->>B: Invalid ID
        B-->>F: 400 Bad Request
        F-->>U: Show Invalid ID message
    else Validation fails (Generic)
        S-->>B: Errors in validation
        B-->>F: 400 Bad Request
        F-->>U: Show validation error message
    else Validation OK
        S->>DB: UPDATE resources SET data WHERE id 
        DB-->>S: Result

        alt Success
            S-->>B: Updated resource
            B-->>F: 200 OK
            F-->>U: Show success message
        else Not found
            S-->>B: Resource not found
            B-->>F: 404 Not found
            F-->>U: Show not found message
        else Duplicate
            S-->>B: Duplicate detected
            B-->>F: 409 Conflict
            F-->>U: Show duplicate message
        else Database error
            S-->>B: Database error
            B-->>F: 500 Internal Server Error
            F-->>U: Show database error
        end
    end    
```

# 4️⃣ DELETE — Resource (Sequence Diagram)

```mermaid
sequenceDiagram
    participant U as User (Browser)
    participant F as Frontend (form.js and resources.js)
    participant B as Backend (Express route)
    participant S as Resource service
    participant DB as PostgreSQL
    
    U->>F: Submit form
    F->>B: DELETE /api/resources/:id
    B->>S: delete Resource(id)
    alt Invalid ID
        S-->>B: Invalid ID
        B-->>F: 400 Bad Request
        F-->>U: Show Invalid ID message
    else Valid ID
        S->>DB: DELETE FROM resources WHERE id 
        DB-->>S: Result
    
        alt Success
            S-->>B: Deleted resource
            B-->>F: 204 No Content
            F-->>U: Show success message
        else Not found
            S-->>B: Resource not found
            B-->>F: 404 Not found
            F-->>U: Show not found message
        else  Database error
            S-->>B: Database error
            B-->>F: 500 Internal Server Error
            F-->>U: Show database error
        end
    end
```