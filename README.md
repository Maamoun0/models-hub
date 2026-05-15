# 📊 Software Performance Hub
### The Intelligent Discovery & Comparison Engine

**Project by Ahmed Maamoun**

---

## 🧭 The Vision
Choosing the right software stack is hard. I built **Software Performance Hub** to provide a clear, data-backed way to compare technical benchmarks, pricing, and capabilities across the modern software landscape.

---

## 📸 Interface Preview
<img src="screenshots/home.png" alt="Hub Home" width="100%" />

<br/>

| Performance Matrix | Deep Dive Comparison |
| :--- | :--- |
| <img src="screenshots/matrix.png" width="400" /> | <img src="screenshots/compare.png" width="400" /> |

---

## ✨ Core Features
*   **Dynamic Matrix:** High-density feature comparison with sub-second filtering.
*   **Performance Benchmarking:** Real-world metrics and load tests.
*   **Smart Search:** Fuzzy search logic that understands intent, not just keywords.
*   **Responsive Design:** Fully optimized for mobile researchers and desktop architects.

---

## 🧠 Engineering Spotlight: The "Matrix" Challenge
Rendering a matrix with 100+ columns and 500+ rows in React is a performance nightmare. Initially, the page would stutter during scrolling.

**The Fix:** I implemented **Windowing (Virtualization)**. By using a custom grid engine, the application only renders the cells that are currently in the user's viewport. This dropped the memory usage from 200MB to 15MB and kept the scroll speed at a buttery-smooth 60fps.

---

## 🛠 Tech Stack
*   **Framework:** Next.js (Server Components for SEO)
*   **Styling:** Tailwind CSS & Custom UI Tokens
*   **Database:** Prisma & PostgreSQL

---

### 👋 Contact
Built with ❤️ by **Ahmed Maamoun**. 
[GitHub](https://github.com/Maamoun0) | [LinkedIn](https://linkedin.com/in/your-linkedin-profile)

*Data-driven decisions, simplified.*
