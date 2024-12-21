import Container from '../ui/Container';

const images = [
  {
    url: "https://images.unsplash.com/photo-1622253692010-333f2da6031d",
    alt: "Doctor consulting with patient",
  },
  {
    url: "https://images.unsplash.com/photo-1579684385127-1ef15d508118",
    alt: "Medical consultation",
  },
  {
    url: "https://images.unsplash.com/photo-1638202993928-7d113b8e4439",
    alt: "Doctor with patient",
  },
];

export default function ImageGallery() {
  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="aspect-[4/3] overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
