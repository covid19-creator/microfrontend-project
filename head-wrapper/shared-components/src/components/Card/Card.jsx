const Card = ({ children }) => {
    return (
      <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', margin: '10px' }}>
        {children}
      </div>
    );
  };
  
  export default Card;