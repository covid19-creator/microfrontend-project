const Avatar = ({ src, alt }) => {
    return (
      <img
        src={src}
        alt={alt}
        style={{ width: '40px', height: '40px', borderRadius: '50%' }}
      />
    );
  };
  
  export default Avatar;