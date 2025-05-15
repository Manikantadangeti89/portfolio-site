import React from "react";
import "../styles/Achievement.css";
import LeetCode from '../assets/Achievements/LeetCode_100days.png';
import CodeChef from '../assets/Achievements/CodeChefBadge.png';
import LeetCode2025 from '../assets/Achievements/LeetCode_100days_2025.png'

const Achievement = () => {
  return (
    <div className="achievements-container">
      <h1 className="achievements-heading">Achievements</h1>

      <div className="achievement-card">
        <div className="achievement-image">
          <img src="https://cdn-icons-png.flaticon.com/512/4332/4332609.png" alt="CodeChef Streak" />
        </div>
        <div className="achievement-text">
          <h2>Solved 700+ Coding Problems Across Platforms</h2>
          <p>
            Demonstrated consistent problem-solving skills by solving over 700
            coding problems across competitive platforms such as LeetCode,
            GeeksforGeeks, and CodeChef. This reflects a strong foundation in
            algorithms, data structures, and programming logic.
          </p>
        </div>
      </div>

      <div className="achievement-card">
        <div className="achievement-image">
          <img src={LeetCode} alt="LeetCode 100 Days" />
        </div>
        <div className="achievement-text">
          <h2>LeetCode 100 Days Badge – 2024</h2>
          <p>
            Earned the prestigious LeetCode 100 Days Badge in 2024 for
            maintaining an active streak of problem-solving over 100 consecutive
            days. Recognized among the top 4.2% of global users, showcasing
            dedication, consistency, and technical proficiency.
          </p>
        </div>
      </div>

      <div className="achievement-card">
        <div className="achievement-image">
          <img src={CodeChef} alt="CodeChef Streak" />
        </div>
        <div className="achievement-text">
          <h2>CodeChef Diamond Streak – 100 Days</h2>
          <p>
            Earned the Diamond Streak Badge by CodeChef for completing a 100-day continuous
            coding streak. This milestone showcases exceptional consistency, dedication,
            and a strong commitment to daily problem-solving in competitive programming.
          </p>
        </div>
      </div>

      <div className="achievement-card">
        <div className="achievement-image">
          <img src={LeetCode2025} alt="CodeChef Streak" />
        </div>
        <div className="achievement-text">
          <h2>LeetCode 100 Days Badge – 2025</h2>
          <p>
          Achieved the LeetCode 100 Days Badge in 2025 
          for solving coding problems consistently for 100 consecutive days. 
          Ranked among the top performers globally, reflecting continuous growth, 
          persistence, and advanced problem-solving skills.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
