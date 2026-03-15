# LeetCode Pattern Tracker

A lightweight **frontend-only web application** for tracking your progress solving LeetCode problems by **DSA topic and problem patterns**.  

This tool is designed specifically for **coding interview preparation**, allowing users to organize problems by topic, track solved status, and monitor confidence levels while studying.

The application stores all data locally in the user's browser, making it simple, fast, and deployable on **GitHub Pages** without requiring a backend.

**Live app:** [https://sarangspadalkar.github.io/leetcode-study-tracker/](https://sarangspadalkar.github.io/leetcode-study-tracker/)

---

# Features

## 1. Topic-Based Organization
Problems are organized by **Data Structures & Algorithms (DSA) topics** such as:

- Arrays
- Strings
- Hash Maps
- Two Pointers
- Sliding Window
- Stack
- Queue
- Linked Lists
- Binary Search
- Trees
- Binary Search Trees
- Heap / Priority Queue
- Graphs
- DFS
- BFS
- Backtracking
- Dynamic Programming
- Greedy
- Bit Manipulation
- Math

Each topic can contain multiple **problem groups or patterns**.

Example:

```

Dynamic Programming

Group 1 — Fibonacci Pattern
• Climbing Stairs
• N-th Tribonacci Number
• Perfect Squares

Group 2
• Min Cost Climbing Stairs
• House Robber
• Decode Ways

```

---

## 2. Track Solved vs Unsolved Problems

Each problem can be marked as:

- Solved
- Unsolved

This helps users quickly see which problems still require practice.

---

## 3. Confidence Tracking

Users can record how confident they feel about a problem after solving it.

Example confidence levels:

- Low
- Medium
- High

This allows users to identify problems they should revisit.

---

## 4. Difficulty Assignment

When creating a problem entry, users can assign a **difficulty level**:

- Easy
- Medium
- Hard

---

## 5. Direct LeetCode Links

Each problem includes a **clickable link** that opens the corresponding LeetCode problem page.

This allows users to quickly jump from the tracker to the actual problem.

---

## 6. Reset Progress

Users can reset all progress for a specific problem list.

This allows them to restart practice sessions without deleting the problem set.

---

## 7. Browser Storage

All data is stored locally using the **browser's storage**.

Benefits:

- No login required
- No backend infrastructure
- Instant load times
- Fully offline capable

---

# Tech Stack

The application is built using modern frontend tooling.

- **TypeScript**
- **Web Components**
- **element-vir**
- **LitHTML (via element-vir)**
- **Vite**
- **Local Browser Storage**

Deployment:

- **GitHub Pages**

---

# Project Goals

The goal of this project is to create a simple and effective tool for:

- Organizing interview prep
- Tracking problem-solving progress
- Reinforcing algorithmic patterns
- Practicing problems systematically

---

# Example Data Model

Each problem entry stores the following information:

```

Topic
Group / Pattern
Problem Name
Difficulty
LeetCode URL
Solved Status
Confidence Level

```

Example:

```

Topic: Dynamic Programming
Group: Fibonacci Pattern
Problem: Climbing Stairs
Difficulty: Easy
LeetCode URL: [https://leetcode.com/problems/climbing-stairs](https://leetcode.com/problems/climbing-stairs)
Solved: true
Confidence: Medium

```

---

# Development

Install dependencies:

```

npm install

```

Start development server:

```

npm run dev

```

Build the project:

```

npm run build

```

Preview production build:

```

npm run preview

```

---

# Deployment

This project is designed to be deployed using **GitHub Pages**.

Typical deployment steps:

1. Build the project
2. Push the production build to the `gh-pages` branch
3. Enable GitHub Pages in the repository settings

---

# Future Improvements

Possible enhancements for future versions:

- Import/export problem lists as JSON
- Statistics dashboard
- Progress visualization
- Tagging system for patterns
- Study streak tracking
- Spaced repetition for weak problems

---

# License

MIT License

---