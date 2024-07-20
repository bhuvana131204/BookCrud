import React from "react";

const About = () => {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh', 
      backgroundColor: '#f0f4f8', 
      padding: '20px' 
    }}>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        backgroundColor: '#fff', 
        padding: '40px', 
        borderRadius: '10px', 
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
        maxWidth: '800px', 
        width: '100%' 
      }}>
        <img src="https://butterflybooks.co.uk/wp-content/uploads/2022/02/buttbooks-copy-768x538.png" alt="BookVerse Logo" style={{ width: '100%', maxWidth: '400px', marginBottom: '20px' }} />
        <h1 style={{ fontSize: '2.5em', margin: '20px 0', color: '#333' }}>Welcome to BookVerse!</h1>
        <p style={{ fontSize: '1.2em', marginBottom: '30px', color: '#555', textAlign: 'center' }}>Discover your next favorite book at BookVerse!</p>
        <p style={{ 
          textAlign: 'left', 
          margin: '0 auto', 
          maxWidth: '600px', 
          fontSize: '1.2em', 
          lineHeight: '1.6', 
          color: '#555', 
          paddingLeft: '20px' 
        }}>
          At BookVerse, we provide personalized recommendations tailored to your preferences and browsing history. Our extensive and diverse range of books spans all genres, ensuring that every reader can find something they love. Engage with fellow readers through our vibrant community forums and book clubs, where you can share your thoughts and discoveries. Founded by avid readers and tech enthusiasts, we are committed to enhancing your reading experience. Our mission is to continually expand our collection with diverse voices and innovative features, enriching literary journey.        
        </p>
        <p style={{ fontSize: '1.2em', marginTop: '30px', color: '#555', textAlign: 'center' }}>Join our community today and embark on your literary journey with BookVerse!</p>
        
      </div>
    </div>
    /*<button style={{ 
          padding: '10px 20px', 
          fontSize: '1.2em', 
          borderRadius: '5px', 
          backgroundColor: '#007bff', 
          color: '#fff', 
          border: 'none', 
          cursor: 'pointer', 
          marginTop: '20px' 
        }}>Sign Up Now</button>
      */
  );
}

export default About;
