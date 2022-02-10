import DefaultImg from '../Images/DefaultImg.svg'
const DefaultTemplate = () => {
    return <div className="flex flex-col justify-center md:basis-8/12 items-center">
        <img alt='' src={DefaultImg} className='object-contain h-72 w-72' />
        <p className='text-xl text-center'>Send Messages anywhere with LyknMessenger</p>
    </div>;
};

export default DefaultTemplate;
