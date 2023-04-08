import React from 'react'

const Analysis = () => {
  return (
    <section className="w-full min-h-[60vh] py-8  border border-gray-100 rounded flex flex-col items-center justify-center">
      <p align="center">
        The behavior of the cryptocurrency in order to predict future price movements and identify potential trading opportunities.<br></br>
        This type of analysis can involve various techniques, such as technical analysis, fundamental analysis, and sentiment analysis.<br></br>
        Technical analysis involves studying charts and indicators to identify patterns and trends in the price movements of Bitcoin
      </p> 
      <br></br>
      <button
        onClick={() => window.open("https://cryptohunters.streamlit.app/", "_blank")}
        style={{
          borderRadius: '5px',
          width: '200px',
          height: '50px',
          fontSize: '16px',
          fontWeight: 'bold',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          transition: 'background-color 0.1s ease'
        }}
        // CSS hover styles
        onMouseEnter={(e) => e.target.style.backgroundColor = '#3E8E41'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#4CAF50'}
      >
        Link to Crypto Analysis website
      </button>
   </section>
  )
}

export default Analysis
