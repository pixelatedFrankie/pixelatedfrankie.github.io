const Avatar = ({ url, alt, size }) => (
  <img className={`rounded-full ${size === 'large' ? 'w-20 h-20' : 'w-10 h-10'}`} src={url} alt={alt} />
);