import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "VP of Customer Service",
    company: "TechCorp Solutions",
    content:
      "WiseChirp transformed our call center operations. We've seen a 300% increase in efficiency and our customers love the seamless experience.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Operations Director",
    company: "Global Services Inc",
    content:
      "The custom voice training feature is incredible. Our AI bots sound exactly like our brand, and the analytics dashboard gives us insights we never had before.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "CEO",
    company: "Customer First LLC",
    content:
      "We reduced our operational costs by 80% while improving customer satisfaction. The smart rebuttals handle objections better than some human agents.",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Trusted by Industry
            <span className="bg-gradient-to-r from-primary to-chart-1 bg-clip-text text-transparent">
              {" "}
              Leaders
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See what our customers say about their transformation with AI Call
            Forge
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-primary text-primary"
                    />
                  ))}
                </div>
                <blockquote className="text-lg mb-6 leading-relaxed">
                  &quot;{testimonial.content}&quot;
                </blockquote>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-primary font-medium">
                    {testimonial.company}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
