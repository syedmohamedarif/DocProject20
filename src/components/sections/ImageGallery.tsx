import Container from '../ui/Container';

const images = [
  {
    url: "/src/assets/operate.jpg",
    alt: "Doctor consulting with patient 1",
  },
  {
    url: "/src/assets/probe.jpg",
    alt: "Doctor consulting with patient 2",
  },
  {
    url: "/src/assets/pink.jpg",
    alt: "Doctor consulting with patient 3",
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
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}