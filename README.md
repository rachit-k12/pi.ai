# Pi - Your Personal AI 🚀

**Pi** is a cutting-edge Text Conversational AI platform designed to provide emotional support and topic-based discussions. Powered by advanced AI models like **Llama-3** and **Claude API**, Pi offers personalized responses, history management, and predefined topics for an engaging user experience.

---

## 🚀 Live Demo

- **Frontend Hosted on Vercel**: [https://piai.vercel.app/](https://piai.vercel.app/)
- **Backend Hosted on Render**: [https://pi-backend-psoq.onrender.com/chat](https://pi-backend-psoq.onrender.com/chat)

---

## 🔗 Useful Links

- **Frontend Repository**: [https://github.com/khatamaadmi/pi.ai](https://github.com/khatamaadmi/pi.ai)
- **Backend Repository**: [https://github.com/khatamaadmi/Pi-Backend.git](https://github.com/khatamaadmi/Pi-Backend.git)
---

## ✨ Key Features

- **Text-based Conversations**: Engage in emotional and topic-based discussions.
- **Manage History**: View and manage previous interactions effortlessly.
- **Predefined Topics**: Explore discussions based on predefined themes.
- **Personalized Responses**: Receive tailored replies for enhanced user engagement.

---

## 🛠 Tech Stack

### Frontend
- **React.js**: For building a dynamic and responsive user interface.

### Backend
- **Express.js**: For handling API requests and responses.
- **FastAPI**: For building efficient and scalable backend services.

### AI Models
- **Llama-3**: Advanced AI model for generating intelligent responses.
- **Groq API**: For powering the conversational AI capabilities.

---

## ⚙️ Installation and Setup

### Frontend
1. Clone the repository:
   ```bash
   git clone https://github.com/khatamaadmi/pi.ai.git
   ```
2. Navigate to the project directory:
   ```bash
   cd pi.ai
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Access the application at:  
   [http://localhost:3000/](http://localhost:3000/)

### Backend
1. Clone the repository:
   ```bash
   git clone https://github.com/khatamaadmi/Pi-Backend.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Pi-Backend
   ```
3. Set the environment variable:
   ```bash
   export GROQ_API_KEY="your-api-key"
   ```
4. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
5. Start the server:
   ```bash
   uvicorn main:app --reload
   ```
6. Access the API at:  
   [http://localhost:8000/chat](http://localhost:8000/chat)

---

## 🛡 Environment Variables

Ensure the following environment variable is set:
- `GROQ_API_KEY`: Your API key for Groq API.

---

# Frontend Directory Structure

## 📁 Project Structure

### Frontend Directory Structure
```plaintext
pi.ai/
├── public/
├── src/
│   ├── api/
│   ├── components/
│   ├── context/
│   ├── hooks/
│   ├── styles/
│   ├── utils/
│   ├── App.jsx
│   ├── main.jsx
│   └── provider.jsx
├── .eslintrc.json
├── .eslintignore
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── tsconfig.json
```

### Backend Directory Structure
```plaintext
Pi-Backend/
├── .gitignore
├── main.py
├── prompts.py
└── requirements.txt
```

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for more details.

---

## 🤝 Contributing

Contributions are welcome! Follow these steps:
1. Fork the repository.
2. Create a new branch (`feature/your-feature`).
3. Commit your changes.
4. Push to the branch.
5. Create a Pull Request.

---

## 🙌 Acknowledgments

- **AI Models**: Llama-3, Claude API
- **Hosting**: Vercel (Frontend), Render (Backend)

