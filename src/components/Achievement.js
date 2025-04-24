import React from "react";
import "../styles/Achievement.css";
import LeetCode from '../assets/Achievements/LeetCode_50.png';
import Hacker_Badge from '../assets/Achievements/Hacker_Badges.png';
import S1 from '../assets/Achievements/S1.png';

// Simplified achievements data
const achievements = [
  {
    title: "Solved 350+ Coding Problems",
    image: "https://cdn-icons-png.flaticon.com/512/4332/4332609.png",
    details: [
      "Demonstrated consistent problem-solving skills by solving over 350 coding problems across platforms like LeetCode, GeeksforGeeks, and HackerRank, reflecting a strong foundation in algorithms, data structures, and programming logic."
    ]
  },
  {
    title: "LeetCode 50-Day Streak",
    image: LeetCode,
    details: [
      "50 consecutive days in 2024",
      "Top 40% global ranking"
    ]
  },
  {
    title: "HackerRank Badges",
    image: Hacker_Badge,
    details: [
      "Problem Solving: 2⭐ Core challenges",
      "C++: 4⭐ Data structures & OOP",
      "Java: 5⭐ Collections & exceptions",
      "30 Days of Code: 3⭐ Daily coding"
    ]
  },
  {
    title: "Ranked In S1-Group",
    image: S1,
    details: [
       "Secured a place Top 11 - 50% in university placement ranking"
    ]
  }
];

const Achievement = () => (
  <div className="achievements-container">
    <h1 className="achievements-heading">Achievements</h1>

    {achievements.map((ach, idx) => (
      <div key={idx} className="achievement-card">
        <div className="achievement-image">
          <img src={ach.image} alt={ach.title} />
        </div>
        <div className="achievement-text">
          <h2>{ach.title}</h2>
          {ach.details.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default Achievement;
