import imgHero1 from '../../public/hero1.png'
import imgHero2 from '../../public/hero2.png'
import imgHero3 from '../../public/hero3.png'
import background from '../../public/background-hero.png'


export default function Hero() {
    return (
        <div className="w-[1440px] h-[952px] left-0 top-[83px] absolute">
        <div className="w-[1440px] h-[952px] left-0 top-0 absolute bg-[#011627]" />
        <img className="w-[1440px] h-[952px] left-0 top-0 absolute" src={background} />
        <img className="w-[480px] h-[320.44px] left-[797px] top-[195px] absolute rounded-[30px]" src={imgHero1} />
        <img className="w-[191.39px] h-[247.31px] left-[743px] top-[418px] absolute rounded-[30px]" src={imgHero3} />
        <div className="w-[500px] h-[480.57px] left-[130px] top-[289px] absolute flex-col justify-start items-start gap-[41px] inline-flex">
            <div className="self-stretch h-[374.57px] flex-col justify-start items-start gap-[15px] flex">
                <div className="self-stretch h-[180.57px] flex-col justify-start items-start gap-8 flex">
                    <div className="self-stretch h-[44.57px] text-white text-2xl font-normal font-['Nunito'] leading-[44.57px]">SEKOLAH KEJURUAN SMK PEMKAB</div>
                    <div className="h-[104px] pr-[20.57px] justify-start items-center inline-flex">
                        <div className="w-[479.43px] h-[104px] text-white text-[52px] font-semibold font-['Nunito'] leading-[52px]">Sekolah Ideal Untuk<br/>Masa Kini</div>
                    </div>
                </div>
                <div className="self-stretch text-white text-2xl font-semibold font-['Nunito'] leading-[44.57px]">SMK Pemkab menghadirkan pendidikan kejuruan berkualitas untuk menciptakan lulusan yang siap terjun ke dunia industri dan wirausaha</div>
            </div>
            <div className="px-10 py-2.5 bg-[#5f49b3] rounded-[30px] justify-center items-center gap-2.5 inline-flex">
                <div className="text-white text-2xl font-semibold font-['Nunito'] leading-[44.57px]">Pelajari sekarang</div>
                <div className="w-10 h-10 relative origin-top-left -rotate-90">
                    <div className="w-[18px] h-[22.02px] left-[11px] top-[8.98px] absolute">
                    </div>
                </div>
            </div>
        </div>
        <img className="w-[376px] h-[267px] left-[934px] top-[447px] absolute rounded-[30px]" src={imgHero2} />
    </div>
    );
}
