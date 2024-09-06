import img from '../../assets/1.png';

const SummarySection = () => {
    return (
        <div className='flex'>
            <div className='w-2/5'>
                <img src={img} alt="Summary" />
            </div>
            <div className='w-3/5 mt-12'>
                <div>
                <span className='text-green-500 text-xl font-semibold'>Summery</span>
                <h3 className='font-bold text-4xl mt-2 font-sans'>Mobile App for Direct Market</h3>
                </div>
                <div className='mt-12 text-slate-800 '>
                <p className='font-sans'>
                We propose a web application that directly connects farmers with consumers and retailers, allowing farmers to list their produce, negotiate prices, and manage transactions efficiently. This platform will reduce reliance on middlemen, ensure fair pricing for farmers, and offer buyers a direct way to source produce
                </p>
                </div>
            </div>
        </div>
    );
};

export default SummarySection;
<div className='summary-content'>
                
               
                
                <div className="summary-btn">
                <button className="rounded-full border border-green-500 w-48 p-2">Culivation + </button>
                </div>
            </div>