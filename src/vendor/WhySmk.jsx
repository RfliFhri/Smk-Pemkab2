import img from '../../public/smk.png'

export default function WhySmk() {
    return (
        <div className="w-[1440px] h-[664px] left-0 top-[2573px] absolute">
        <div className="w-[1440px] h-[664px] left-0 top-0 absolute bg-[#011627] rounded-tl-[100px] rounded-br-[100px]" />
        <img className="w-[510px] h-[339.66px] left-[130px] top-[258px] absolute rounded-tr-[100px] rounded-bl-[100px]" src={img} />
        <div className="w-[505.81px] h-44 left-[130px] top-[63px] absolute flex-col justify-start items-start gap-[18px] inline-flex">
            <div className="self-stretch h-4 text-white text-base font-semibold font-['Rubik'] leading-none">Kenapa Memilih SMK PEMKAB?</div>
            <div className="self-stretch h-10 text-white text-[40px] font-semibold font-['Nunito'] leading-10">Berpengalaman Sejak 1999 </div>
            <div className="w-[476.84px] text-white text-base font-normal font-['Rubik'] leading-7">Memilih SMK Pemkab bisa menjadi langkah awal yang baik menuju pendidikan dan karir yang sukses sesuai dengan minat dan kemampuan Anda</div>
        </div>
        <div className="w-[250px] h-[250px] left-[762px] top-[38px] absolute rounded-[10px] border border-white flex-col justify-center items-center gap-[37px] inline-flex">
            <div className="w-[60px] h-[60px] pl-[16.88px] pr-[16.51px] py-[15px] bg-white rounded-[30px] justify-center items-center inline-flex">
                <div className="w-[26.61px] h-[30px] text-center text-[#5f49b3] text-3xl font-black font-['Font Awesome 5 Free'] leading-[30px]"></div>
            </div>
            <div className="self-stretch h-12 text-center text-white text-base font-semibold font-['Rubik'] leading-normal">Sekolah<br/>Berakreditasi A</div>
        </div>
        <div className="w-[250px] h-[250px] left-[1060px] top-[348px] absolute rounded-[10px] border border-white flex-col justify-center items-center gap-[37px] inline-flex">
            <div className="w-[60px] h-[60px] pl-[13.13px] pr-[12.82px] py-[15px] bg-white rounded-[30px] justify-center items-center inline-flex">
                <div className="w-[34.05px] h-[30px] text-center text-[#5f49b3] text-3xl font-black font-['Font Awesome 5 Free'] leading-[30px]"></div>
            </div>
            <div className="w-[120.32px] h-12 text-center text-white text-base font-semibold font-['Rubik'] leading-normal">Tersedia Materi<br/>Online</div>
        </div>
        <div className="w-[250px] h-[250px] left-[1060px] top-[38px] absolute rounded-[10px] border border-white flex-col justify-center items-center gap-[37px] inline-flex">
            <div className="w-[60px] h-[60px] pl-[11.25px] pr-[10.94px] py-[15px] bg-white rounded-[30px] justify-center items-center inline-flex">
                <div className="w-[37.81px] h-[30px] text-center text-[#5f49b3] text-3xl font-black font-['Font Awesome 5 Free'] leading-[30px]"></div>
            </div>
            <div className="w-[155.79px] h-6 text-center text-white text-base font-semibold font-['Rubik'] leading-normal">Lulusan Berkualitas</div>
        </div>
        <div className="w-[250px] h-[250px] left-[762px] top-[348px] absolute rounded-[10px] border border-white flex-col justify-center items-center gap-[37px] inline-flex">
            <div className="w-[60px] h-[60px] pl-[11.25px] pr-[10.94px] py-[15px] bg-white rounded-[30px] justify-center items-center inline-flex">
                <div className="w-[37.81px] h-[30px] text-center text-[#5f49b3] text-3xl font-black font-['Font Awesome 5 Free'] leading-[30px]"></div>
            </div>
            <div className="w-[124px] h-12 text-center text-white text-base font-semibold font-['Rubik'] leading-normal">Guru<br/>Berpengalaman</div>
        </div>
        <div className="w-[595px] h-[0px] left-[1036px] top-[615px] absolute origin-top-left -rotate-90 border border-[#5f49b3]"></div>
        <div className="w-[595px] h-[0px] left-[1333px] top-[318px] absolute origin-top-left -rotate-180 border border-[#5f49b3]"></div>
    </div>
    );
}