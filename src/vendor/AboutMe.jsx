import imgAboutme1 from '../../public/aboutme1.png'
import imgAboutme2 from '../../public/aboutme2.png'
import imgAboutme3 from '../../public/aboutme3.png'

export default function AboutMe() {
    return (
        <div id='Aboutme' className="w-[1110px] h-[574px] left-[130px] top-[1244px] absolute">
        <img className="w-[225px] h-[338px] left-0 top-[150px] absolute rounded-[50px] shadow border-2 border-[#5f49b3]" src={imgAboutme1} />
        <img className="w-[255px] h-[171px] left-[255px] top-[169px] absolute rounded-[50px] border-2 border-[#5f49b3]" src={imgAboutme2} />
        <img className="w-[255px] h-[171px] left-[255px] top-[403px] absolute rounded-[50px] border-2 border-[#5f49b3]" src={imgAboutme3} />
        <div className="left-[538px] top-0 absolute text-black text-[26px] font-bold font-['Nunito']">Tentang Kami</div>
        <div className="w-[510px] h-[444px] left-[600px] top-[130px] absolute flex-col justify-start items-start gap-[35px] inline-flex">
            <div className="self-stretch h-[344px] flex-col justify-start items-start gap-5 flex">
                <div className="w-[489.25px] h-[156px] text-[#5f49b3] text-[40px] font-semibold font-['Nunito'] leading-[52px]">Berkomitmen Untuk<br/>Meningkatkan Teknologi di<br/>Indonesia</div>
                <div className="self-stretch text-[#595959] text-sm font-normal font-['Rubik'] leading-7">Sekolah kami berkomitmen untuk memberikan pendidikan berkualitas dan mempersiapkan siswa untuk menjadi profesional di berbagai bidang. Dengan keunggulan jurusan seperti Rekayasa Perangkat Lunak (RPL), Teknik Komputer Jaringan (TKR), Teknik Bisnis Otomotif (TBO), dan Teknik Sepeda Motor (TSM), kami berusaha menciptakan lingkungan belajar yang inspiratif dan mendukung perkembangan potensi siswa.</div>
            </div>
            <div className="px-10 py-2.5 bg-[#5f49b3] rounded-[30px] justify-center items-center gap-2.5 inline-flex">
                <div className="text-white text-2xl font-semibold font-['Nunito'] leading-[44.57px]">Lihat lebih banyak</div>
                <div className="w-10 h-10 relative origin-top-left -rotate-90">
                    <div className="w-[18px] h-[22.02px] left-[11px] top-[8.98px] absolute">
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}