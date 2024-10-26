import background from '../../public/background-footer.png'
import img from '../../public/footer.png'

export default function Footer() {
    return (
        <>
        <div className="w-[1440px] h-[684px] left-0 top-[5078px] absolute">
        <div className="w-[1440px] h-[684px] left-0 top-0 absolute bg-[#0d0751]" />
        <img className="w-[1440px] h-[684px] left-0 top-0 absolute" src={background} />
    </div>
    <div className="w-[818px] h-[469px] left-[311px] top-[4843px] absolute">
        <img className="w-[818px] h-[469px] left-0 top-0 absolute rounded-[30px]" src={img} />
    </div>
    <div className="h-[244px] top-[5366px] absolute flex-col justify-start items-center gap-14 inline-flex">
        <div className="self-stretch text-center text-white text-[40px] font-semibold font-['Nunito'] leading-7">Siap Bersiap Untuk Mengikuti Kelas?</div>
        <div className="self-stretch text-center text-white text-[26px] font-semibold font-['Nunito'] leading-7">Daftar Sekarang Untuk Masa Depan</div>
        <div className="w-[348px] h-[76px] bg-[#e81cb4] rounded-[20px] justify-center items-center gap-2.5 inline-flex">
            <div className="grow shrink basis-0 text-center text-white text-[28px] font-semibold font-['Nunito'] leading-7">Daftar Sekarang</div>
        </div>
    </div>
    <div className="left-[131px] top-[5990px] absolute justify-start items-start gap-[120px] inline-flex">
        <div className="w-[406.20px] flex-col justify-start items-start gap-20 inline-flex">
            <div className="w-[358.90px] h-[67.20px] text-[#181281] text-2xl font-black font-['Nunito'] leading-[33.60px]">SEKOLAH KEJURUAN SMK PEMKAB</div>
            <div className="self-stretch h-[83.58px] text-[#595959] text-[15px] font-normal font-['Rubik'] leading-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut<br/>elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus<br/>leo.</div>
            <div className="justify-start items-center gap-4 inline-flex">
                <div className="w-5 h-5 relative">
                    <div className="w-5 h-5 left-0 top-0 absolute bg-[#181281] rounded-full" />
                    <div className="w-[14.36px] h-3.5 left-[3px] top-[3px] absolute text-center text-white text-sm font-normal font-['Font Awesome 5 Brands'] leading-[14px]"></div>
                </div>
                <div className="w-5 h-5 relative">
                    <div className="w-5 h-5 left-0 top-0 absolute bg-[#181281] rounded-full" />
                    <div className="w-[12.59px] h-3.5 left-[4px] top-[3px] absolute text-center text-white text-sm font-normal font-['Font Awesome 5 Brands'] leading-[14px]"></div>
                </div>
                <div className="w-5 h-5 relative">
                    <div className="w-5 h-5 left-0 top-0 absolute bg-[#181281] rounded-full" />
                    <div className="w-[14.36px] h-3.5 left-[3px] top-[3px] absolute text-center text-white text-sm font-normal font-['Font Awesome 5 Brands'] leading-[14px]"></div>
                </div>
            </div>
        </div>
        <div className="w-[160.85px] flex-col justify-start items-start gap-[25px] inline-flex">
            <div className="self-stretch h-[33.60px] text-[#181281] text-2xl font-black font-['Nunito'] leading-[33.60px]">Link penting</div>
            <div className="self-stretch h-[29.71px] text-[#3a3a3a] text-base font-normal font-['Rubik'] leading-[29.71px]">Beranda</div>
            <div className="self-stretch h-[29.71px] text-[#3a3a3a] text-base font-normal font-['Rubik'] leading-[29.71px]">Tentang Kami</div>
            <div className="self-stretch h-[29.71px] text-[#3a3a3a] text-base font-normal font-['Rubik'] leading-[29.71px]">Mengapa Kami</div>
            <div className="self-stretch h-[29.71px] text-[#3a3a3a] text-base font-normal font-['Rubik'] leading-[29.71px]">Jurusan</div>
            <div className="self-stretch h-[29.71px] text-[#3a3a3a] text-base font-normal font-['Rubik'] leading-[29.71px]">Artikel</div>
            <div className="self-stretch h-[29.71px] text-[#3a3a3a] text-base font-normal font-['Rubik'] leading-[29.71px]">Hubungi</div>
        </div>
        <div className="w-[144.86px] flex-col justify-start items-start gap-[18px] inline-flex">
            <div className="self-stretch h-[33.60px] text-[#181281] text-2xl font-black font-['Nunito'] leading-[33.60px]">Jurusan</div>
            <div className="self-stretch h-[29.71px] text-[#3a3a3a] text-base font-normal font-['Rubik'] leading-[29.71px]">RPL</div>
            <div className="self-stretch h-[29.71px] text-[#3a3a3a] text-base font-normal font-['Rubik'] leading-[29.71px]">TKR</div>
            <div className="self-stretch h-[29.71px] text-[#3a3a3a] text-base font-normal font-['Rubik'] leading-[29.71px]">TSM</div>
            <div className="self-stretch h-[29.71px] text-[#3a3a3a] text-base font-normal font-['Rubik'] leading-[29.71px]">TBO</div>
        </div>
        <div className="w-[107.03px] flex-col justify-start items-center gap-[27px] inline-flex">
            <div className="self-stretch h-[33.60px] text-[#181281] text-2xl font-black font-['Rubik'] leading-[33.60px]">Hubungi</div>
            <div className="self-stretch h-[29.71px] text-center text-[#3a3a3a] text-base font-normal font-['Rubik'] leading-[29.71px]">Alamat</div>
            <div className="self-stretch h-[29.71px] text-center text-[#3a3a3a] text-base font-normal font-['Rubik'] leading-[29.71px]">Telepon</div>
            <div className="self-stretch h-[29.71px] text-center text-[#3a3a3a] text-base font-normal font-['Rubik'] leading-[29.71px]">Instagram</div>
            <div className="self-stretch h-[29.71px] text-center text-[#3a3a3a] text-base font-normal font-['Rubik'] leading-[29.71px]">Facebook</div>
            <div className="self-stretch h-[29.71px] text-center text-[#3a3a3a] text-base font-normal font-['Rubik'] leading-[29.71px]">Twitter</div>
        </div>
    </div>
    <div className="w-[1440px] h-[79px] p-2.5 left-0 top-[6453px] absolute bg-[#0d0751] flex-col justify-center items-center gap-2.5 inline-flex">
        <div className="w-[552px] h-[0px] border border-white"></div>
        <div className="text-white text-sm font-normal font-['Rubik'] leading-relaxed">© 2024 SMK PEMKAB All rights reserved. </div>
    </div>
        </>
    );
}