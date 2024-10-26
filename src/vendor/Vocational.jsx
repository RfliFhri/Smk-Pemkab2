import imgRpl from '../../public/rpl.png'
import imgTkr from '../../public/tkr.png'
import imgTbo from '../../public/tbo.png'
import imgTsm from '../../public/tsm.png'

export default function Vocational() {
    const courses = [
        {
            title: "Rekaya Perangkat Lunak",
            description: ["Programing", "Desain", "Database"],
            image: imgRpl,
            alt: "Person working on a computer with code on the screen"
        },
        {
            title: "Teknik Kendaraan Ringan",
            description: ["Teknik Mesin Otomotif", "Teknik Listrik Otomotif", "Perawatan dan perbaikan kendaraan"],
            image: imgTkr,
            alt: "Person working on a car engine"
        },
        {
            title: "Teknik Bodi Otomotif",
            description: ["Teknik Bodi Kendaraan", "Teknik Pengelasan", "Kreativitas dan Desain"],
            image: imgTbo,
            alt: "Person working on car body repair"
        },
        {
            title: "Teknik Sepeda Motor",
            description: ["Teknik Sepeda Motor", "Teknik Sistem Bahan Bakar", "Lorem ipsum"],
            image: imgTsm,
            alt: "Person working on a motorcycle"
        }
    ];
    return (
        <div className="w-[1182px] h-[552px] left-[130px] top-[3371px] absolute">
        <div className="left-[421px] top-[62px] absolute text-[#ff9f1c] text-3xl font-semibold font-['Nunito'] leading-[30px]">Kejuruan Sekolah Kami</div>
        <div className="w-[282px] h-[414px] p-[15px] left-0 top-[138px] absolute rounded-[10px] border border-[#5f49b3] flex-col justify-between items-center inline-flex">
            <img className="w-[223px] h-[148.63px] relative rounded-[30px]" src={imgRpl} />
            <div className="self-stretch h-36 flex-col justify-between items-start flex">
                <div className="self-stretch h-6 text-[#3a3a3a] text-xl font-extrabold font-['Nunito'] leading-[30px]">Rekaya Perangkat Lunak</div>
                <div className="self-stretch text-[#5f49b3] text-base font-normal font-['Rubik'] leading-[29.71px]">Progaming</div>
                <div className="self-stretch text-[#5f49b3] text-base font-normal font-['Rubik'] leading-[29.71px]">Desain</div>
                <div className="self-stretch text-[#5f49b3] text-base font-normal font-['Rubik'] leading-[29.71px]">Database</div>
            </div>
            <div className="self-stretch h-[17px] justify-between items-center inline-flex">
                <div className="w-[95.50px] h-px border-t border-[#5f49b3]" />
                <div className="w-3 h-3 justify-center items-center flex">
                    <div className="w-[15.38px] h-3 text-center text-[#5f49b3] text-xs font-black font-['Font Awesome 5 Free'] leading-3"></div>
                </div>
                <div className="w-[95.50px] h-px border-t border-[#5f49b3]" />
            </div>
            <div className="self-stretch px-5 py-[15px] bg-[#5f49b3] rounded-[20px] justify-center items-center gap-2.5 inline-flex">
                <div className="grow shrink basis-0 text-center text-white text-xs font-black font-['Font Awesome 5 Free'] leading-3">Daftar Sekarang</div>
            </div>
        </div>
        <div className="w-[282px] h-[414px] p-[15px] left-[900px] top-[138px] absolute rounded-[10px] border border-[#5f49b3] flex-col justify-between items-center inline-flex">
            <img className="w-[223px] h-[148.73px] relative rounded-[30px]" src={imgTsm} />
            <div className="self-stretch h-36 flex-col justify-between items-start flex">
                <div className="self-stretch h-6 text-[#3a3a3a] text-xl font-extrabold font-['Nunito'] leading-[30px]">Teknik Sepeda Motor</div>
                <div className="self-stretch text-[#5f49b3] text-base font-normal font-['Rubik'] leading-[29.71px]">Teknik Sepeda Motor</div>
                <div className="self-stretch text-[#5f49b3] text-base font-normal font-['Rubik'] leading-[29.71px]">Teknik Sistem Bahan Bakar</div>
                <div className="self-stretch text-[#5f49b3] text-base font-normal font-['Rubik'] leading-[29.71px]">Lorem ipsum</div>
            </div>
            <div className="self-stretch h-[17px] justify-between items-center inline-flex">
                <div className="w-[95.50px] h-px border-t border-[#5f49b3]" />
                <div className="w-3 h-3 justify-center items-center flex">
                    <div className="w-[15.38px] h-3 text-center text-[#5f49b3] text-xs font-black font-['Font Awesome 5 Free'] leading-3"></div>
                </div>
                <div className="w-[95.50px] h-px border-t border-[#5f49b3]" />
            </div>
            <div className="self-stretch px-5 py-[15px] bg-[#5f49b3] rounded-[20px] justify-center items-center gap-2.5 inline-flex">
                <div className="grow shrink basis-0 text-center text-white text-xs font-black font-['Font Awesome 5 Free'] leading-3">Daftar Sekarang</div>
            </div>
        </div>
        <div className="w-[282px] h-[414px] p-[15px] left-[600px] top-[138px] absolute rounded-[10px] border border-[#5f49b3] flex-col justify-between items-center inline-flex">
            <img className="w-[223px] h-[137.03px] relative rounded-[30px]" src={imgTbo} />
            <div className="self-stretch h-36 flex-col justify-between items-start flex">
                <div className="w-[223px] h-[25px] text-[#3a3a3a] text-xl font-extrabold font-['Nunito'] leading-[30px]">Teknik Bodi Otomotif</div>
                <div className="self-stretch text-[#5f49b3] text-base font-normal font-['Rubik'] leading-[29.71px]">Teknik Bodi Kendaraan</div>
                <div className="self-stretch text-[#5f49b3] text-base font-normal font-['Rubik'] leading-[29.71px]">Teknik Pengelasan</div>
                <div className="self-stretch text-[#5f49b3] text-base font-normal font-['Rubik'] leading-[29.71px]">Kreativitas dan Desain</div>
            </div>
            <div className="self-stretch h-[17px] justify-between items-center inline-flex">
                <div className="w-[95.50px] h-px border-t border-[#5f49b3]" />
                <div className="w-3 h-3 justify-center items-center flex">
                    <div className="w-[15.38px] h-3 text-center text-[#5f49b3] text-xs font-black font-['Font Awesome 5 Free'] leading-3"></div>
                </div>
                <div className="w-[95.50px] h-px border-t border-[#5f49b3]" />
            </div>
            <div className="self-stretch px-5 py-[15px] bg-[#5f49b3] rounded-[20px] justify-center items-center gap-2.5 inline-flex">
                <div className="grow shrink basis-0 text-center text-white text-xs font-black font-['Font Awesome 5 Free'] leading-3">Daftar Sekarang</div>
            </div>
        </div>
        <div className="w-[282px] h-[414px] p-[15px] left-[300px] top-[138px] absolute rounded-[10px] border border-[#5f49b3] flex-col justify-between items-center inline-flex">
            <img className="w-[223px] h-[148.63px] relative rounded-[30px]" src={imgTkr} />
            <div className="self-stretch h-36 flex-col justify-between items-start flex">
                <div className="self-stretch h-6 text-[#3a3a3a] text-xl font-extrabold font-['Nunito'] leading-[30px]">Teknik Kendaraan Ringan</div>
                <div className="self-stretch text-[#5f49b3] text-base font-normal font-['Rubik'] leading-[29.71px]">Teknik Mesin Otomotif</div>
                <div className="self-stretch text-[#5f49b3] text-base font-normal font-['Rubik'] leading-[29.71px]">Teknik Listrik Otomotif</div>
                <div className="self-stretch text-[#5f49b3] text-base font-normal font-['Rubik'] leading-[29.71px]">Perawatan dan perbaikan kendaraan</div>
            </div>
            <div className="self-stretch h-[17px] justify-between items-center inline-flex">
                <div className="w-[95.50px] h-px border-t border-[#5f49b3]" />
                <div className="w-3 h-3 justify-center items-center flex">
                    <div className="w-[15.38px] h-3 text-center text-[#5f49b3] text-xs font-black font-['Font Awesome 5 Free'] leading-3"></div>
                </div>
                <div className="w-[95.50px] h-px border-t border-[#5f49b3]" />
            </div>
            <div className="self-stretch px-5 py-[15px] bg-[#5f49b3] rounded-[20px] justify-center items-center gap-2.5 inline-flex">
                <div className="grow shrink basis-0 text-center text-white text-xs font-black font-['Font Awesome 5 Free'] leading-3">Daftar Sekarang</div>
            </div>
        </div>
        <div className="left-[487px] top-0 absolute text-[#011627] text-[26px] font-semibold font-['Nunito'] leading-none">Featured Courses</div>
    </div>
    );
}