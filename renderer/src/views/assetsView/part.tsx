import IMG from '../style/IMG.module.css';

export default function Part(props) {
    if (props.index != 6 && props.index != 7 && props.index != 11) {
        if (props.index % 2 != 0) {
            return (
                <div className="text-right w-full relative">
                    <div className={"pr-" +(10 - (props.index-1) % 4 * 5)+ " py-3 text-right w-full"}>
                        <p className='text-[10px] text-[#8e8e8e]'>{props.partType}</p>
                        <p className='text-[12px]'>{props.partName}</p>
                        <p className="text-lg text-[#D099FF]">{props.value}</p>
                    </div>
                    <div className="absolute flex w-[40%] h-[30px] top-1/2 left-1/2">
                        <div className={props.index < 5 ? "border-b-[1px] border-[#FFF7] grow-1 flex-grow" : "border-t-[1px] border-[#fff7] grow-1 flex-grow"}></div>
                        <div className={props.index < 5 ? "border-l-[1px] border-[#FFF7] w-[30px]" : "border-l-[1px] border-[#FFF7] w-[30px]"} style={props.index < 5 ? {transform: "skewX(-45deg)", marginLeft: '15px',marginRight: '-15px'} : {transform: "skewX(45deg)", marginLeft: '15px',marginRight: '-15px'}}></div>
                        <div className={props.index < 5 ? "border-t-[1px] border-[#FFF7] grow-1 flex-grow" : "border-b-[1px] border-[#FFF7] grow-1 flex-grow"}></div>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="text-left w-full relative">
                    <div className={"pl-" + (10 - props.index % 4 * 5) + " py-3 text-left w-full"}>
                        <p className='text-[10px] text-[#8e8e8e]'>{props.partType}</p>
                        <p className='text-[12px]'>{props.partName}</p>
                        <p className="text-lg text-[#D099FF]">{props.value}</p>
                    </div>
                    <div className="absolute flex w-1/2 h-[30px] top-1/2 right-1/3">
                    <div className={props.index < 5 ? "border-t-[1px] border-[#FFF7] grow-1 flex-grow" : "border-b-[1px] border-[#FFF7] grow-1 flex-grow"}></div>
                        <div className={props.index < 5 ? "border-l-[1px] border-[#FFF7] w-[30px]" : "border-l-[1px] border-[#FFF7] w-[30px]"} style={props.index < 5 ? {transform: "skewX(45deg)", marginLeft: '15px',marginRight: '-15px'} : {transform: "skewX(-45deg)", marginLeft: '15px',marginRight: '-15px'}}></div>
                        <div className={props.index < 5 ? "border-b-[1px] border-[#FFF7] grow-1 flex-grow" : "border-t-[1px] border-[#FFF7] grow-1 flex-grow"}></div>
                    </div>
                </div>
            );
        }
    }
    else{
        return (<></>);
    }
}