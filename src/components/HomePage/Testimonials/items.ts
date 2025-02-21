interface TestimonialItemInterface {
    index: string,
    name: string,
    comment: string,
    image: string
}

const testimonialItems: TestimonialItemInterface[] = [
    {
        index: "01",
        name: "John Dave",
        comment: "The service of Legallyours brought a major improvement to my workflow. The chatbot quickly created a contract draft which took only a couple of minutes. The service offers immediate legal support that functions almost like having a legal professional available at all times. Highly recommend!",
        image: "/testimonials/avatar1.jpg",
    },
    {
        index: "02",
        name: "Priya Dev",
        comment: "Through Legallyours I received quick simple solutions to legal procedures when I felt uncertain about the process. The service gave me considerable savings on both the time needed for research and stress I would have suffered. Absolutely fantastic!",
        image: "/testimonials/avatar2.jpg",
    },
    {
        index: "03",
        name: "Vansh Sharma",
        comment: "The startup needs legal documents regularly so Legallyours provides an easy solution for me. The chatbot delivers precise solutions at a high speed with a user-friendly interface. A must-have for any business!",
        image: "/testimonials/avatar3.jpg",
    },
]

export { testimonialItems, type TestimonialItemInterface };