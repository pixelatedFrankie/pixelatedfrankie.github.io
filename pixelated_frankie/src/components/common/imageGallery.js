const ImageGallery = ({ images }) => (
  <div className="grid grid-cols-3 gap-4">
    {images.map((image, index) => (
      <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={image.src} alt={image.alt} />
      </div>
    ))}
  </div>
);