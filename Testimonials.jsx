import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    quote: "blueTrestle transformed our outdated website into a modern sales machine. Highly recommended!",
    author: "Sarah Jenkins",
    role: "CEO, TechStart",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 2,
    quote: "The team's attention to detail and design strategy is unmatched. They truly understand branding.",
    author: "Michael Chen",
    role: "Marketing Director, GreenLeaf",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 3,
    quote: "Professional, timely, and incredibly talented. Our mobile app launch was a huge success thanks to them.",
    author: "Emily Rodriguez",
    role: "Founder, FitLife",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2 className="hidden">What Our Clients Say</h2>
        <div className="testimonial-slider hidden">
          <button className="slider-btn prev" onClick={prevTestimonial} aria-label="Previous testimonial">
            <i className="fas fa-chevron-left"></i>
          </button>
          <div className="testimonial-card">
            <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].author} className="client-image" />
            <p className="quote">"{testimonials[currentIndex].quote}"</p>
            <div className="client-info">
              <h4>{testimonials[currentIndex].author}</h4>
              <span>{testimonials[currentIndex].role}</span>
            </div>
          </div>
          <button className="slider-btn next" onClick={nextTestimonial} aria-label="Next testimonial">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
        <div className="slider-dots hidden">
            {testimonials.map((_, index) => (
                <span 
                    key={index} 
                    className={`dot ${index === currentIndex ? 'active' : ''}`}
                    onClick={() => setCurrentIndex(index)}
                ></span>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;