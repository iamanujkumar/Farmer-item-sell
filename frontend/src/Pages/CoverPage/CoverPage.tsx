import coverImage from '../../assets/coup.jpg';
import './CoverPage.css';

const CoverPage = () => {
  return (
    <div>
      <div className='blure' style={{ left: '1%', top: '42%' }}></div>
      <div className='first flex flex-col lg:flex-row h-auto lg:h-77 mt-6 w-5/6 m-auto relative'>
        <div className='i-left flex relative flex-1 flex-col gap-4'>
          <div className='i-desc flex flex-col gap-5 font-sans md:font-serif'>
            <span className='text-5xl font-bold'>Let's Plan for</span>
            <span className='text-5xl font-bold'>Your Dream</span>
            <span className='text-5xl font-bold text-rose-400 flex gap-2'>
              Wedding
              <svg className="text-red-400 w-10 h-auto fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"/>
              </svg>
            </span>
          </div>
          <span className='font-sans'>
            Your wedding day is the one occasion that can bring those closest and dearest to you together to celebrate yours and your partner's commitment to marriage.
          </span>
        </div>
        <div className='i-right flex flex-1 flex-col items-center relative'>
          <div>
            <img className='h-96 max-w-full rounded-full' src={coverImage} alt="Cover"/>
          </div>
          <div className='blure'></div>
        </div>
        <div className='blure'></div>
      </div>
    </div>
  );
}

export default CoverPage;
