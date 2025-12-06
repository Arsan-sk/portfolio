import { useNavigate } from "react-router-dom";
import { ArrowLeft, Construction, Clock } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const UpdatingSoon = () => {
    const navigate = useNavigate();
    const { theme } = useTheme();

    return (
        <div className={`min-h-screen flex flex-col items-center justify-center p-4 transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
            <div className="max-w-md w-full text-center space-y-8">
                <div className="relative mx-auto w-32 h-32 flex items-center justify-center">
                    <div className={`absolute inset-0 rounded-full opacity-20 animate-ping ${theme === 'dark' ? 'bg-purple-500' : 'bg-purple-400'}`}></div>
                    <div className={`relative z-10 p-6 rounded-full ${theme === 'dark' ? 'bg-gray-800 shadow-purple-900/20' : 'bg-white shadow-purple-200/50'} shadow-xl`}>
                        <Construction className={`w-16 h-16 ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`} />
                    </div>
                    <div className="absolute -top-2 -right-2 animate-bounce">
                        <Clock className={`w-8 h-8 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} />
                    </div>
                </div>

                <div className="space-y-4">
                    <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                        Updating Soon
                    </h1>
                    <p className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                        I'm currently working on adding this certificate. Please check back later!
                    </p>
                </div>

                <button
                    onClick={() => navigate(-1)}
                    className={`group flex items-center justify-center mx-auto px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:-translate-y-1 ${theme === 'dark'
                            ? 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 hover:border-purple-500/50'
                            : 'bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 hover:border-purple-500/50 shadow-sm hover:shadow-md'
                        }`}
                >
                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Go Back
                </button>
            </div>
        </div>
    );
};

export default UpdatingSoon;
