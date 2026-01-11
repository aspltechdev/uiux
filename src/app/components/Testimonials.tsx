import imgImage171 from "figma:asset/e898bf1b4a4eab1f293e84edeaaeafeed655fbe4.png";
import imgImage172 from "figma:asset/afb24ad5806d0bb297c07b0e0b96e91b43f3c6bf.png";
import imgImage173 from "figma:asset/167b4263a379007e1fe4ab85639956ab040e4cba.png";
import imgImage174 from "figma:asset/b216ccef1046287619d7a75e91f095334f35ea3d.png";
import imgImage175 from "figma:asset/207c7ba3d66be7e63d4cd4c2499754b4b97d20c2.png";
import imgImage176 from "figma:asset/2dc5eb4453465dc0b076c853d3f034b00858878c.png";
import imgImage177 from "figma:asset/2a78be5a95cad346405b43a3add9e609c1c68b58.png";
import imgImage178 from "figma:asset/884ccbed4c98ea819632434e57b5902a77252ce1.png";
import imgImage179 from "figma:asset/c4e2e731f20ec703b2b2e19e10e5ea3806469495.png";
import imgImage180 from "figma:asset/f9824fbbf453e753e9ce54006c2c8f2a28e13d87.png";
import imgWhatsAppImage20240324At9144 from "figma:asset/82462b6f28a2e9cfa3dcda15d6bc7ef383871fd7.png";
import imgWhatsAppImage20240324At9136 from "figma:asset/b89e2a84f4991008dc49196d88a94cec63279405.png";
import imgWhatsAppImage20240324At9134 from "figma:asset/906875198f6ef01e71d7c3373d7561c4013156ca.png";
import imgWhatsAppImage20240324At9138 from "figma:asset/00662936f10fb4dc85fe638e7b0a4c577e82e9ce.png";
import imgWhatsAppImage20240324At9139 from "figma:asset/4f3d99e11c8536c1ae42e80c98851c767aa46e02.png";
import imgWhatsAppImage20240324At9140 from "figma:asset/6a146f25a9f94118d8879b015de4b5d9bebe78c6.png";
import imgWhatsAppImage20240324At9141 from "figma:asset/23c1063ea392884781d08c7a54ece3240cda8fb0.png";
import imgWhatsAppImage20240324At9145 from "figma:asset/8ad891a4d766532e7b82fa64c36850240eb42658.png";
import imgImage181 from "figma:asset/160845e7345a7f6c8fb413063dff2ca4b0844bec.png";
import imgImage182 from "figma:asset/d0fd45a3cc06d5e79a29bcfe67f33781258b650c.png";
import imgImage184 from "figma:asset/37bebc8cb5f9a7c669b53ba4dfc2e4297a92ddb6.png";
import imgImage185 from "figma:asset/899ad3331d5011cac8899f877d22ffcd9418100a.png";
import imgImage186 from "figma:asset/97f2327f372ffbc4385d5545c03aa88062c89122.png";
import imgImage183 from "figma:asset/67837f86a11fdc61f2f7699d25027867ee656762.png";
import imgImage187 from "figma:asset/ea2a7c1b6de362c4e6c69a782aa93c22c450d01d.png";
import imgImage188 from "figma:asset/a301afc173fc66886ab00ecf6fde94d39d83837d.png";

export function Testimonials() {
  const screenshots = [
    imgImage171, imgImage172, imgImage173, imgImage174, imgImage175,
    imgImage176, imgImage177, imgImage178, imgImage179, imgImage180,
    imgWhatsAppImage20240324At9144, imgWhatsAppImage20240324At9136,
    imgWhatsAppImage20240324At9134, imgWhatsAppImage20240324At9138,
    imgWhatsAppImage20240324At9139, imgWhatsAppImage20240324At9140,
    imgWhatsAppImage20240324At9141, imgWhatsAppImage20240324At9145,
    imgImage181, imgImage182, imgImage184, imgImage185,
    imgImage186, imgImage183, imgImage187, imgImage188
  ];

  return (
    <div className="py-12 md:py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-['Poppins:Bold',sans-serif] text-3xl md:text-4xl lg:text-6xl text-black mb-6">
            Class Feedback from Real People
          </h2>
          <p className="font-['Poppins:Medium',sans-serif] text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            These aren't staged reviews. These are real messages from real people whose lives changed after taking this workshop. 
            <span className="block mt-3 text-pink-600 font-semibold">Your success story could be next.</span>
          </p>
        </div>

        {/* Emotional Hook */}
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 border-2 border-pink-300 rounded-2xl p-6 md:p-8 mb-12 text-center">
          <p className="font-['Poppins:SemiBold',sans-serif] text-xl md:text-2xl text-gray-800 mb-4">
            💬 "Will this actually work for me?"
          </p>
          <p className="font-['Poppins:Regular',sans-serif] text-base md:text-lg text-gray-700">
            Don't take my word for it. Read what 12,000+ students have to say. 
            These are people just like you who took the leap and never looked back.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {screenshots.map((screenshot, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-200"
            >
              <img 
                src={screenshot}
                alt={`Student feedback ${index + 1}`}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>

        {/* Never Stop Learning Section */}
        <div className="bg-gradient-to-r from-purple-900 to-pink-900 rounded-2xl p-8 md:p-12 text-center shadow-2xl">
          <h3 className="font-['Poppins:Bold',sans-serif] text-4xl md:text-5xl lg:text-7xl text-white mb-6">
            Never Stop Learning
          </h3>
          <p className="font-['Poppins:Medium',sans-serif] text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Every single person you see here started where you are right now—uncertain, maybe even scared. 
            <span className="block mt-4 text-yellow-400 text-xl md:text-2xl font-semibold">But they chose to invest in themselves.</span>
            <span className="block mt-4">And now? They're living the career they always dreamed of.</span>
          </p>
        </div>

        {/* Social Proof Stats */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl p-6 text-center shadow-lg">
            <p className="font-['Poppins:Bold',sans-serif] text-4xl md:text-5xl text-white mb-2">12,000+</p>
            <p className="font-['Poppins:Medium',sans-serif] text-base md:text-lg text-white/90">Students Transformed</p>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl p-6 text-center shadow-lg">
            <p className="font-['Poppins:Bold',sans-serif] text-4xl md:text-5xl text-white mb-2">98%</p>
            <p className="font-['Poppins:Medium',sans-serif] text-base md:text-lg text-white/90">Success Rate</p>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-teal-600 rounded-xl p-6 text-center shadow-lg">
            <p className="font-['Poppins:Bold',sans-serif] text-4xl md:text-5xl text-white mb-2">4+ Years</p>
            <p className="font-['Poppins:Medium',sans-serif] text-base md:text-lg text-white/90">Proven Track Record</p>
          </div>
        </div>
      </div>
    </div>
  );
}
