import React, { useEffect } from "react";

const Testimonial = () => {
  // Testimonial data
  const testimonials = [
    {
      id: 1,
      review:
        "Netcore company has been a game-changer .  innovative solutions to detail have helped us streamline our operations and improve efficiency.",
      name: "Steven Jony",
      role: "CEO of Tech Innovators",
    },
    {
      id: 2,
      review:
        " They delivered our project on time and within budget. I highly recommend their services to anyone looking for reliable tech solutions.",
      name: "Omit Jacson",
      role: "Founder of Digital Solutions",
    },
    {
      id: 3,
      review:
        "Their expertise in cloud computing and DevOps has transformed our IT infrastructure. We are now more scalable ",
      name: "Emily Carter",
      role: "CTO of Cloudify Inc.",
    },
    {
      id: 4,
      review:
        "From the initial consultation to the final delivery, the entire process was seamless. Their team is knowledgeable, friendly, and truly cares about their clients' success.",
      name: "Michael Brown",
      role: "Product Manager at InnovateTech",
    },
  ];

  useEffect(() => {
    $(".client-wrap").owlCarousel({
      loop: true,
      margin: 30,
      nav: false,
      mouseDrag: true,
      items: 1,
      dots: false,
      autoHeight: false,
      autoplay: true,
      autoplayTimeout: 5000,
      smartSpeed: 800,
      autoplayHoverPause: true,
      center: false,
      responsive: {
        0: {
          items: 1,
          margin: 10,
        },
        576: {
          items: 1,
        },
        768: {
          items: 2,
          margin: 20,
        },
        992: {
          items: 2,
        },
        1200: {
          items: 2,
        },
      },
    });
  }, []);

  return (
    <>
      <section className="client-area ptb-100 bg-color">
        <div className="container">
          <div className="section-title">
            <span>Testimonials</span>
            <h2>What Our Clients Say</h2>
            <p>
              Hear from our satisfied clients about their experiences working
              with us. We take pride in delivering exceptional tech solutions
              that drive success.
            </p>
          </div>
          <div className="client-wrap owl-carousel owl-theme ">
            {testimonials.map((testimonial) => (
              <div className="single-client shadow" key={testimonial.id}>
                <p>{testimonial.review}</p>
                <h3>{testimonial.name}</h3>
                <span>{testimonial.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;