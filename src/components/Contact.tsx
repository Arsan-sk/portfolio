import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { useTheme } from "@/context/ThemeContext";

const Contact = () => {
  const { theme } = useTheme();
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
      value: "skarsan02@gmail.com",
      link: "mailto:skarsan02@gmail.com",
    },
    {
      icon: <Phone className="h-12 w-12 p-3 bg-blue-500/20 text-blue-500 rounded-xl" />,
      title: "Phone",
      value: "9284086903",
      link: "tel:9284086903",
    },
    {
      icon: <MapPin className="h-12 w-12 p-3 bg-pink-500/20 text-pink-500 rounded-xl" />,
      title: "Location",
      value: "Bhiwandi 421302",
      link: "https://maps.google.com/?q=Bhiwandi+421302",
    },
  ];

  return (
    <section id="contact" className={`py-24 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
            Get In <span className="text-purple-500">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
          <p className={`mt-6 max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Have a project in mind or want to collaborate? Feel free to reach out to me through any of the channels below or by filling out the contact form.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.link}
              className={`p-6 rounded-xl hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 border hover:border-purple-500 flex flex-col items-center text-center group ${
                theme === 'dark'
                  ? 'bg-gray-800 border-gray-700'
                  : 'bg-white border-gray-200'
              }`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {info.icon}
              </div>
              <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>{info.title}</h3>
              <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{info.value}</p>
            </a>
          ))}
        </div>

        <div className={`rounded-xl p-8 max-w-3xl mx-auto border ${
          theme === 'dark'
            ? 'bg-gray-800 border-gray-700'
            : 'bg-white border-gray-200 shadow-md'
        }`}>
          <h3 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Send Me a Message</h3>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                    theme === 'dark'
                      ? 'bg-gray-700 border-gray-600 text-white'
                      : 'bg-gray-100 border-gray-200 text-gray-900'
                  } border`}
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                    theme === 'dark'
                      ? 'bg-gray-700 border-gray-600 text-white'
                      : 'bg-gray-100 border-gray-200 text-gray-900'
                  } border`}
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                  theme === 'dark'
                    ? 'bg-gray-700 border-gray-600 text-white'
                    : 'bg-gray-100 border-gray-200 text-gray-900'
                } border`}
                placeholder="Project Inquiry"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none ${
                  theme === 'dark'
                    ? 'bg-gray-700 border-gray-600 text-white'
                    : 'bg-gray-100 border-gray-200 text-gray-900'
                } border`}
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
