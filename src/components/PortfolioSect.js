import React from 'react'
import '../App.css';
import './PortfolioSect.css'

function PortfolioSect() {
    return (
        <div className='portfolio-sect-container'>
            <h1>Stock Market Portfolio</h1>
            <p> For this project, me and my team created a program to find the ideal stock market portfolio from a random selection of tickers using Python 3, numpy, and pandas.
            </p>
            <p2>
            We placed 1st in the class competition among roughly 20 teams.
We calculated the expected return and volatility for each potential portfolio using covariance and standard deviation, and used this to find portfolios that lie on the efficient frontier graph.
I collaborated with 2 groupmates and performed code reviews using git and GitHub.
We wrote a Jupyter Notebook that described the methodology and visualized portfolio performance with graphs using matplotlib.
            </p2>
            <h1>Chess Game</h1>
            <p>I created a chess game using Java. Me and my team wrote code to detect legal moves, checks, checkmates, and stalemates.
            We also created a customizable chess clock to limit player turn durations.
</p>
            <h1>Map of Mini Games</h1>
            <p>I created a map of mini games using Java for SpartaHacks (hackathon). 
I utilized OOP concepts like inheritance and polymorphism to reuse code like collision detection and obstacle motion.
I also used AWT Graphics2D library to render player, obstacles, and enemies.
</p>
        </div>
    )
}

export default PortfolioSect
