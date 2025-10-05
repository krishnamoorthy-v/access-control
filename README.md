🚀 React Vite User Info Dashboard

A modern React Vite application that dynamically displays user information on a dedicated page. It uses session-based authentication and avoids local storage by leveraging Redis on the backend. State management is handled elegantly with React Context, and API communication is done via Axios.

🌟 Features

    ⚡ Built with React + Vite for lightning-fast frontend performance.
    
    🖥️ Dashboard: Shows user data based on role (admin/user).
    
    🔐 Session-based authentication: No sensitive data stored in local storage.
    
    🗄️ Redis-backed sessions: Secure and fast backend session storage.
    
    🌐 Global state management: React Context API keeps user data consistent across components.
    
    📡 API integration: Axios handles all requests to the backend.

🛠 Tech Stack
    
    Frontend: React, Vite, Axios, Context API
    
    Backend: Node.js/Express + Redis
    
    Authentication: Session-based (no JWT/local storage)

🔍 How It Works
    Backend
    
        Stores session data in Redis.
        
        On login, a session is created and saved in Redis.
        
        Exposes APIs to fetch user info based on session ID.
    
    Frontend
    
        Uses React Context to maintain current user state globally.
        
        Fetches user info from backend using Axios when the page loads.
        
        Updates Context so any component can access user data instantly.
        
        No sensitive information is stored in local storage — everything comes from the session.
