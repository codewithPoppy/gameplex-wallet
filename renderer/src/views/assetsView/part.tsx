export default function Part(props) {
    if (props.index != 6 && props.index != 7 && props.index != 11) {
        if (props.index % 2 != 0) {
            return (
                <div className="text-right w-full">
                    <div className={"pr-" +(10 - (props.index-1) % 4 * 5)+ " py-3 text-right w-full"}>
                        <p className='text-[10px] text-[#8e8e8e]'>{props.partType}</p>
                        <p className='text-[12px]'>{props.partName}</p>
                        <p className="text-lg text-[#D099FF]">{props.value}</p>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="text-left w-full">
                    <div className={"pl-" + (10 - props.index % 4 * 5) + " py-3 text-left w-full"}>
                        <p className='text-[10px] text-[#8e8e8e]'>{props.partType}</p>
                        <p className='text-[12px]'>{props.partName}</p>
                        <p className="text-lg text-[#D099FF]">{props.value}</p>
                    </div>
                </div>
            );
        }
    }
    else{
        return (<></>);
    }
}