# HireSense-AI: Voice-based Intelligent Recruiter

**HireSense-AI** is an AI-powered recruitment assistant that helps automate the hiring process. Using voice input and intelligent analysis, it generates interview questions, evaluates candidates, and streamlines the recruitment workflow.
<img width="419" height="256" alt="image" src="https://github.com/user-attachments/assets/fdbbd1d0-f66b-4a60-8b90-72a5c7ef4b59" />


---

## 🚀 Features

- **Voice-based Interaction:** Ask questions or give commands via voice.  
- **Intelligent Question Generation:** AI generates interview questions based on job descriptions.  
- **Candidate Evaluation:** Helps assess candidate responses efficiently.  
- **User-friendly Interface:** Clean and interactive UI built with Next.js.  
- **Secure & Scalable:** Uses Supabase for backend services and storage.

---

## 🛠️ Tech Stack

- **Frontend:** Next.js, React, Tailwind CSS  
- **Backend:** Supabase (Database & Authentication)  
- **AI & Voice:** OpenAI API / AI-based voice processing  
- **Package Management:** npm  

---

## 📁 Project Structure

```
HireSense-AI/
├─ app/
│  ├─ lib/
│  │  └─ supabaseClient.ts
│  └─ page.tsx
├─ node_modules/    # Ignored in Git
├─ .gitignore
├─ package.json
└─ README.md
```

---

## ⚡ Getting Started

1. **Clone the repository:**

```bash
git clone https://github.com/Habiba-Mahrin/HireSense-AI-Voice-based-Intelligent-Recruiter-.git
cd HireSenseAI
```

2. **Install dependencies:**

```bash
npm install
```

3. **Setup environment variables:**

- Create a `.env` file in the root directory.
- Add your Supabase and OpenAI credentials:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
OPENAI_API_KEY=your_openai_api_key
```

4. **Run the development server:**

```bash
npm run dev
```

- Open [http://localhost:3000](http://localhost:3000) to view in the browser.

---

## 📌 Usage

- Navigate to the **Get Started** page.  
- Provide a **job description** and let the AI generate interview questions.  
- Use the **voice input feature** to simulate a real interview session.  
- Evaluate candidate responses directly in the app.

---

## ⚠️ Notes

- `node_modules` is excluded from GitHub; run `npm install` after cloning.  
- Large files and sensitive keys should never be committed to the repo.  

---

## 📚 Future Enhancements

- Add AI-driven candidate scoring.  
- Real-time speech-to-text evaluation.  
- Multi-language support for interview questions.

---

## 👩‍💻 Author

**Habiba Mahrin**  
[GitHub](https://github.com/Habiba-Mahrin)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
