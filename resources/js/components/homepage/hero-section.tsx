import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-hero-bg py-4 md:py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="flex items-center">
                <div className="text-sm text-gray-400">Proudly presented by: </div>
                <div>
                    <a href="https://dimaseka.my.id" target="_blank">
                        <img src="/images/main-logo.png" alt="Dimas Eka Dev" className="w-[120px] " />
                    </a>
                </div>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-extrabold text-foreground leading-tight font-manrope">
              Akses belajar untuk semua orang 
              <span className="text-primary"> bersama Classix</span>
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed">
              Selamat datang di Classix, platform <i>e-learning</i> yang dirancang untuk
              seluruh sekolah, mulai dari SD hingga Perguruan Tinggi di Indonesia.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Daftarkan Sekolahmu Sekarang!
            </Button>
          </div>

          {/* Right Content - Hero Image with Decorative Elements */}
          <div className="relative">
            <div className="relative bg-blue-accent rounded-3xl p-8 overflow-hidden">
              <img
                src="/images/landing-page/image.png"
                alt="Instructor with laptop"
                className="w-full h-auto relative z-0"
              />
            </div>

            {/* Completion Rate Circle */}
            <div className="absolute -top-6 -right-6 bg-background rounded-full p-1 shadow-lg border">
              <div className="text-center lg:p-2 flex md:flex-row flex-col gap-2 justify-center items-center">
                <div className="w-12 h-12 rounded-full border-4 border-primary border-r-primary/20 flex items-center justify-center mb-2 relative p-6">
                  <span className="text-xs lg:text-sm font-bold text-primary">87.6%</span>
                </div>
                <p className="text-xs text-text-secondary font-medium">
                  Completion <br /> rate
                </p>
              </div>
            </div>

            {/* Community Card */}
            <div className="absolute top-1 -left-8 bg-background rounded-2xl p-4 shadow-lg border">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 bg-primary rounded-full border-2 border-background"></div>
                  <div className="w-6 h-6 bg-yellow-200 rounded-full border-2 border-background"></div>
                  <div className="w-6 h-6 bg-purple-200 rounded-full border-2 border-background"></div>
                  <div className="w-6 h-6 bg-blue-200 rounded-full border-2 border-background"></div>
                </div>
              </div>
              <p className="text-xs text-text-secondary font-medium">
                Bergabung dengan<br /> <span className="font-bold text-foreground">1200+ Siswa</span>
              </p>
            </div>

            {/* Courses Sold Card */}
            <div className="absolute bottom-4 -left-12 bg-background rounded-2xl p-4 shadow-lg border">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-primary rounded-sm"></div>
                </div>
                <div>
                  <p className="text-xs text-text-secondary">Jumlah kapasitas siswa</p>
                  <p className="text-lg font-bold text-foreground">100,000+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;