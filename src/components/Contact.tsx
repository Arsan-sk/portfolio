
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-12 w-12 p-3 bg-purple-500/20 text-purple-500 rounded-xl" />,
      title: "Email",
      value: "your.email@example.com",
      link: "mailto:your.email@example.com",
    },
    {
      icon: <Phone className="h-12 w-12 p-3 bg-blue-500/20 text-blue-500 rounded-xl" />,
      title: "Phone",
      value: "+1 (123) 456-7890",
      link: "tel:+11234567890",
    },
    {
      icon: <MapPin className="h-12 w-12 p-3 bg-pink-500/20 text-pink-500 rounded-xl" />,
      title: "Location",
      value: "Your City, Country",
      link: "https://maps.google.com",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Get In <span className="text-purple-500">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out to me through any of the channels below or by filling out the contact form.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.link}
              className="bg-gray-800 p-6 rounded-xl hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 border border-gray-700 hover:border-purple-500 flex flex-col items-center text-center group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {info.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{info.title}</h3>
              <p className="text-gray-400">{info.value}</p>
            </a>
          ))}
        </div>

        <div className="bg-gray-800 rounded-xl p-8 max-w-3xl mx-auto border border-gray-700">
          <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                placeholder="Project Inquiry"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white resize-none"
                placeholder="Hello, I'm interested in working with you on a project..."
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 flex items-center justify-center disabled:opacity-70"
            >
              {isSubmitting ? (
                <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-white"></div>
              ) : (
                <>
                  <Send className="mr-2 h-5 w-5" /> Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
