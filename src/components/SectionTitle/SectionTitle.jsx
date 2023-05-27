

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="text-center mx-auto font-[Inter] mb-6 lg:w-4/12">
            <p className=" text-[#D99904]">{subHeading} </p>;
        
            <h3 className="text-4xl border-y-4 py-5">{heading}</h3>
            

        </div>
    );
};

export default SectionTitle;