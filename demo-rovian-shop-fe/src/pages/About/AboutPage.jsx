import React from "react";
import StatsSection from "./StatsSection";

const AboutPage = () => {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen pt-32 pb-20 px-6 md:px-12 lg:px-24 font-['Google_Sans_Flex']">
      {/* SECTION 1: HERO ABOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
        {/* Left: Text Content */}
        <div className="lg:col-span-4 space-y-8">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tighter leading-[0.8] uppercase italic font-serif text-white">
            CÂU <br /> <span className="text-zinc-500 not-italic">CHUYỆN</span>
          </h1>
          <div className="space-y-6 pt-10 flex justify-center flex-col items-center lg:items-start">
            <p className="text-[11px] uppercase tracking-[0.4em] font-bold text-zinc-500">
              Bậc Thầy Chế Tác Cơ Khí
            </p>
            <p className="text-[17px] leading-relaxed text-zinc-400 max-w-xs font-light italic text-center lg:text-left">
              Di sản được kiến tạo từ sự chính xác tuyệt đối và bản lĩnh của
              người dẫn đầu, nơi mỗi giây trôi qua là một lời khẳng định vị thế.
            </p>
          </div>
        </div>

        {/* Center: Large Image */}
        <div className="lg:col-span-5 relative group">
          <img
            src="https://rolex.dafc.com.vn/rolex/wp-content/uploads/2024/06/servicing-your-rolex-dafc-service-centre.jpg"
            alt="Xưởng chế tác đồng hồ"
            className="w-full h-[550px] object-cover rounded-none contrast-125 border border-zinc-800 shadow-2xl"
          />
          <div className="absolute top-8 right-8 bg-black/80 backdrop-blur-md px-6 py-2 rounded-none border border-zinc-700 text-[9px] uppercase tracking-widest font-bold text-white">
            Thiết lập từ 2026
          </div>
        </div>

        {/* Right: Philosophy Section */}
        <div className="lg:col-span-3 space-y-8 pt-0 lg:pt-24">
          <div className="overflow-hidden rounded-none h-48 border border-zinc-800 shadow-sm relative group">
            <img
              src="https://rolex.dafc.com.vn/rolex/wp-content/uploads/2024/06/servicing-your-rolex-dafc-watchmakers.jpg"
              alt="Nghệ thuật thủ công"
              className="w-full h-full object-cover brightness-90 group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-serif italic text-white tracking-tight">
              Triết lý cội nguồn
            </h3>
            <p className="text-[17px] leading-relaxed text-zinc-400 font-light">
              "Tại ROVIAN, chúng tôi không chỉ lắp ráp cơ khí; chúng tôi rèn
              giũa kim loại và sapphire, chế tác nên một cỗ máy thời gian uy
              quyền, sát cánh cùng quý ông trong những khoảnh khắc định hình
              lịch sử."
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 2: DETAILED BRAND INTRODUCTION */}
      <div className="mb-40 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div className="space-y-10">
            <div className="inline-block px-6 py-2 bg-transparent text-white text-[11px] uppercase tracking-[0.3em] font-bold rounded-none border border-zinc-700">
              Di Sản & Uy Quyền
            </div>
            <h2 className="text-4xl md:text-5xl font-light tracking-tighter uppercase leading-tight font-serif italic">
              Hành trình <br />{" "}
              <span className="not-italic text-white font-bold border-b-2 border-zinc-600 pb-1">
                chinh phục đỉnh cao
              </span>
            </h2>
            <div className="space-y-6 text-zinc-400 leading-relaxed text-[17px] font-light">
              <p>
                Lịch sử của{" "}
                <strong className="text-white font-medium">ROVIAN</strong> gắn
                liền với khát vọng kiến tạo những cỗ máy đo thời gian chuẩn xác
                nhất. Chúng tôi ra đời với tầm nhìn kết hợp tinh hoa chế tác cơ
                khí thượng thừa cùng ngôn ngữ thiết kế góc cạnh, nam tính.
              </p>
              <p>
                Mỗi cỗ máy thời gian rời khỏi xưởng đều phải vượt qua những bài
                kiểm tra khắc nghiệt nhất, đập vỡ mọi giới hạn của các tiêu
                chuẩn công nghiệp thông thường để minh chứng cho sức mạnh và sự
                bền bỉ.
              </p>
              <p>
                Ngày nay, ROVIAN đứng vững như một biểu tượng của sự thành đạt.
                Chúng tôi liên tục làm chủ các vật liệu tối tân, từ Titanium Cấp
                độ 5 đến Carbon siêu nhẹ, đảm bảo rằng mỗi chiếc đồng hồ không
                chỉ là công cụ, mà là một vũ khí khẳng định đẳng cấp vĩnh cửu.
              </p>
            </div>
          </div>
        </div>

        {/* Gallery Images */}
        <div className="lg:col-span-6 order-1 lg:order-2">
          <div className="grid grid-cols-2 gap-6">
            <div className="h-[400px] rounded-none overflow-hidden mt-12 border border-zinc-800 relative group">
              <img
                src="https://tamsonvn.com/wp-content/uploads/2025/09/chaumet_11.jpg"
                className="w-full h-full object-cover contrast-125 group-hover:scale-105 transition-transform duration-1000"
                alt="Chi tiết đồng hồ"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
            <div className="h-[400px] rounded-none overflow-hidden border border-zinc-800 relative group">
              <img
                src="https://tamsonvn.com/wp-content/uploads/2023/12/vendome_972x1358_3-identite-972x1358-1.jpg"
                className="w-full h-full object-cover contrast-125 group-hover:scale-105 transition-transform duration-1000"
                alt="Bộ máy đồng hồ"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
          </div>
        </div>
      </div>

      {/* STATS SECTION */}
      <div className="border-t border-zinc-900 pt-8">
        <StatsSection />
      </div>
    </div>
  );
};

export default AboutPage;
