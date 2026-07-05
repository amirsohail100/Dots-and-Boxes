# 🔴 Dots and Boxes Grid Game (Under Development) 🔵

An interactive, turn-based puzzle game built using vanilla front-end web technologies. Inspired by the classic paper-and-pen "Dots and Boxes" game, this project features a dynamic scoring system, interactive grid logic, and a clean, responsive layout.

> ⚠️ **Project Status:** Under Active Development (~65% Logic Completed). The UI is fully implemented, and core mechanics are being finalized.

---

## 📸 Game Interface Preview

The current game dashboard features a minimalist grid environment, live score tracking for players, and quick control actions:

![Dots and Boxes Game UI](./image_0d7d83.png)
_(Note: Replace with your actual image file path in the repository)_

---

## 🕹️ Gameplay Mechanics & Rules

- **The Grid:** The game board consists of a structured matrix of dots with faint helper lines along the X-axis and Y-axis.
- **Turn-Based Selection:** Players (Amir - Blue vs. Aman - Red) take alternating turns clicking on the faint lines. Clicking changes the line color to match the current player's identity.
- **Box Capture Logic:** If a player clicks the 4th and final line surrounding a grid square, they successfully capture that box!
- **Scoring & Rewards:** When a box is completed, the entire inner area fills with the capturer's color (Blue/Red), and their score instantly increases by 1 point.
- **Reset Functionality:** A dedicated **Restart** button resets the game board, clearing all active lines and zeroing out the scoreboard.

---

## 🛠️ Tech Stack

- **HTML5:** Structuring the core container, canvas/grid layout, player dashboard, and control buttons.
- **CSS3:** Custom styling featuring rich neon/solid borders, rounded score containers, grid alignment, and clean active states.
- **JavaScript (ES6):** Managing state machines (Turn tracking, Line active array, Box completion detection matrix, and live point calculators).

---

## ⚙️ How to Run Locally

No web servers or build configurations are needed:

1. Clone this repository to your local machine:

```bash
git clone [https://github.com/your-username/dots-and-boxes.git](https://github.com/your-username/dots-and-boxes.git)
```

An interactive Dots and Boxes grid game built with HTML, CSS, and JS! Features a dynamic scoreboard &amp; real-time turn tracking. Currently under active development (~65% completed) with core box-capturing logic being refined. Connect lines, complete boxes, and claim your victory!
