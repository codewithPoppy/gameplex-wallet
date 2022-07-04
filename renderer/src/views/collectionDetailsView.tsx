import get from 'lodash.get';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import web3 from '@solana/web3.js';
import { truncate } from '@/utils/HelperUtil';
import { Suspense } from 'react';
import { formatDistance, subDays } from 'date-fns';
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, useTexture } from '@react-three/drei';
import IMG from "./style/IMG.module.css";
import Image from 'next/image';
import photoPart1 from "./image/photo1.png";
import photoPart2 from "./image/photo2.png";
import { Line } from 'react-lineto';
import Part from './assetsView/part';
//import { RotationBox } from 'react-3d-rotation-box';

import * as THREE from 'three';
import { TokenInvalidInstructionDataError } from '@solana/spl-token';

// Left Sidebar: Collection Details - Image | Collection Details - Description | Swap | Sell 
const arrIndex = [5, 3, 8, 1, 4, 0, 6, 2];

function LeftSidebar({ attributes, CollectionName, CollectionDesc, NFTImage, NFTTag, NFTPrice, NFTSymbol }) {
    return (
        <div className="col-span-2 border-r-white">
            {/* Attribute Table */}
            <div className='md:col-span-6 w-full'>

                <div className="card rounded-lg  p-1 col-span-3 flex pb-1">

                    &nbsp; <span className='pt-2 w-full text-lg'>{CollectionName}</span>

                </div>
                &nbsp;
                <div className='text-sm'>
                    Who are we? Who was our creactor? We are tired of hearing all kinds of jokes when we show up in any bar of tje galaxy.
                </div>
                &nbsp;
                <div className='text-sm'>
                    I bet that your father is crocodile and your mother is duck... My cousin Harold is exactly like you without the duck's mouth
                </div>

                <span className='text-lg mt-10'>Your {CollectionDesc}</span>

            </div>
        </div>
    );
}


// Right Sidebar: Collection Details - Details | Attributes | Activities

function RightSidebar({ attributes, activities, metaData, tokenData, transfers = [], NFTImage, backButtonPath }) {

    const [details, setDetails] = useState([])

    useEffect(() => {
        if (!tokenData) return;
        setDetails([
            {
                key: 'Mint address',
                value: get(tokenData, 'tokenInfo.tokenAuthority', '')
            },
            {
                key: 'Token Address',
                value: get(tokenData, 'account', '')
            },
            {
                key: 'Owner Program',
                value: get(tokenData, 'ownerProgram', '')
            },

            {
                key: 'Update Authority',
                value: get(tokenData, 'metadata.updateAuthority', '')
            },
            {
                key: 'SOL Balance',
                value: `${get(tokenData, 'lamports', '') / 1000000000} SOL`
            },
            {
                key: 'Max Total Supply',
                value: get(tokenData, 'tokenInfo.supply', '')
            },
        ])
    }, [tokenData])


    return (
        <div className="lg:col-span-2">
            {/* Details Table */}
            <div>
                <div className="card border-[#383838] col-span-5 rounded-xl">
                    <div className="card rounded-lg p-1 flex">


                        &nbsp; <span className='pt-2 w-full text-lg'>Details</span>

                    </div>
                    <div className='my-3'>
                        <table className="table-auto w-full text-xs">
                            <tbody>
                                {
                                    details.map((detail, index) => {
                                        return <tr key={index}>
                                            <td className="py-3 px-2">{detail.key}</td>
                                            <td className='py-3 px-2 text-[#CDFFCC] text-right'>{truncate(detail.value, 10)}</td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>



                {/* Activity Table */}

                <div className="col-span-11">
                    <div className="card rounded-xl border-[#383838] ">
                        <div className="card rounded-lg p-1 col-span-3 flex pb-1">

                            &nbsp; <span className='pt-2 w-full text-lg'>Activities</span>

                        </div>
                        {/* <div className='w-full rounded-lg'>
                        <table className="table-auto w-full text-xs text-center">
                            <thead>
                                <tr>
                                    <th className=''></th>
                                    <th className='text-[#99ffa2] font-light'>SIGNATURE</th>
                                    <th className='text-[#99ffa2] font-light'>TIME</th>
                                    <th className='text-[#99ffa2] font-light'>TYPE</th>
                                    <th className='text-[#99ffa2] font-light'>FROM</th>
                                    <th className='text-[#99ffa2] font-light'>TO</th>
                                    <th className='text-[#99ffa2] font-light'>AMOUNT</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    transfers.map((transfer, index) => {
                                        return <tr className={index % 2 == 0 ?'bg-[#232323]' : 'bg-[#2c2c2c]'} key={index}>
                                                    <td className="py-3 px-2"><img className='w-8 h-8 rounded-xl mx-auto' src={NFTImage} alt="" /></td>
                                                    <td className='py-3 px-2 text-right overflow-hidden'>{truncate(get(transfer, 'txHash', ''),19)}</td>
                                                    <td className='py-3 px-2 text-right text-[#99ffa2]'>{formatDistance(new Date(get(transfer, 'createdAt', null)), new Date(), { addSuffix: true })}</td>
                                                    <td className='py-3 px-2 text-right text-[#d099ff]'>{get(transfer, 'commonType', '')}</td>
                                                    <td className="py-3 px-2 overflow-hidden">{truncate(get(transfer,'sourceOwnerAccount', ''),19)}</td>
                                                    <td className='py-3 px-2 text-right overflow-hidden'>{truncate(get(transfer,'destOwnerAccount', ''),19)}</td>
                                                    <td className="py-3 px-2">{get(transfer,'amount', '')}</td>
                                                </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div> */}

                    </div>
                </div>

            </div>
        </div>
    );
}

//Middle Sidebar:

function MiddleSidebar({ CollectionName, CollectionDesc, NFTImage, NFTTag, NFTPrice, attributes, NFTSymbol }) {
    return (
        <div className="col-span-6  border-x-2 border-[#1e1e1e] h-full">
            <div className="grid grid-cols-2 gap-3 p-3">
                <div className='col-span-2 text-center'>
                    <div className={'card rounded-xl mx-5 p-2 pt-10 flex justify-center items-center'}>
                        <div className={" relative rounded-xl w-full max-w-[300px] bg-gradient-to-tr p-[10px] from-[#b31483] to-[#ffffff]" + " " + IMG.btn}>
                            <div>
                                <img src={NFTImage} className='w-full rounded-t-lg' />
                            </div>
                            <div className={IMG.hexagon}>
                                <p>#{NFTTag}</p>
                            </div>
                            <div className='flex absolute h-full -bottom-[50px] -left-[40px]'>
                                <div className={"" + " " + IMG.glassLR}>
                                </div>
                                </div>
                                <div className='flex absolute h-full -bottom-[50px] -right-[40px]'>
                                <div className={"rotate-180 " + " " + IMG.glassLR}>
                                </div>
                            </div>
                            <div className="flex absolute -top-[40px] h-[50px] w-full left-0">
                                <div className={" mx-auto h-full" + " " + IMG.glassTop}>
                                    <div className="mt-2 w-full text-center">{CollectionName}</div>
                                </div>
                            </div>
                            <div className={'grid grid-cols-2 w-full bg-[#1e1e1e] rounded-b-lg pb-20' + " " + IMG.cardbottom}>
                                <div className='text-left w-full'>
                                    <p className=" text-sm pt-6 ml-2 text-gray-500">Owner</p>
                                    <p className="text-2xl ml-2">Coxer</p>
                                </div>
                                <div className='text-right w-full'>
                                    <p className=" text-sm pt-6 mr-2 text-gray-500">Price</p>
                                    <p className="text-2xl mr-2">{NFTPrice + " " + NFTSymbol}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='absolute top-3 grid grid-cols-2 w-1/2 pl-5 pt-20 text-right item-right' id='details'>
                        {
                            attributes.map((attribute, index) => {
                                return <Part
                                    partType={attribute.trait_type}
                                    partName={attribute.value}
                                    value={"2%"}
                                    index={index}
                                />
                            })
                        }
                        {/* <svg className="lines absolute" viewBox="0 0 383 467" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-rule="evenodd" clip-rule="evenodd" d="M247.299 155.5H262.712L291.5 185.298V207.774L308.189 222.5H322V223.5H307.811L290.5 208.226V185.702L262.288 156.5H247.701L213.201 189.5H107.198L39.8426 252.864L39.1574 252.136L106.802 188.5H212.799L247.299 155.5Z" />
                             <path stroke-rule="evenodd" clip-rule="evenodd" d="M249 68V258.5H248V68H249Z"  /> 
                             <path stroke-rule="evenodd" clip-rule="evenodd" d="M123.5 43.5H124.5V53.7902L179.204 107.5H270.707L323 159.793V223H322V160.207L270.293 108.5H178.796L123.5 54.2098V43.5Z" /> 
                             <path stroke-rule="evenodd" clip-rule="evenodd" d="M55.658 52.8648L56.342 52.1353L72.1977 67H248.5V68H71.8023L55.658 52.8648Z" /> 
                             <path stroke-rule="evenodd" clip-rule="evenodd" d="M55.5 311V53.5H56.5V311H55.5Z" /> 
                             <path stroke-rule="evenodd" clip-rule="evenodd" d="M168 131H169V201.793L225.707 258.5H260.255L268.5 269.837V329.286L279.2 339.5H323.5V340.5H278.8L267.5 329.714V270.163L259.745 259.5H225.293L168 202.207V131Z" />
                              <path stroke-rule="evenodd" clip-rule="evenodd" d="M323.378 224.327L310.228 239.5H56V238.5H309.772L322.622 223.673L323.378 224.327Z"/>
                               <path stroke-rule="evenodd" clip-rule="evenodd" d="M316.5 14.5V121.698L285.216 155H261.307L234.307 130.5H119.5V129.5H234.693L261.693 154H284.784L315.5 121.302V14.5H316.5Z"/>
                                <path stroke-rule="evenodd" clip-rule="evenodd" d="M334.5 235.701L323.139 223.846L323.861 223.154L335.5 235.299V322.793L352.854 340.146L352.146 340.854L334.5 323.207V235.701Z"/> <path stroke-rule="evenodd" clip-rule="evenodd" d="M177.583 290H56V289H178.417L183.917 319H206.651L227.651 333H274V392.302L332.865 455.158L332.135 455.842L273 392.698V334H227.349L206.349 320H183.083L177.583 290Z" />
                                 {/* <line x1="16.5" y1="116" x2="16.5" y2="114" stroke="black" /> <line x1="37.5" y1="123" x2="37.5" y2="121" stroke="black" /> <line x1="101.5" y1="148" x2="101.5" y2="146" stroke="black" /> <line x1="114.5" y1="141" x2="114.5" y2="139" stroke="black" /> <line x1="127.5" y1="148" x2="127.5" y2="146" stroke="black" /> <line x1="139.5" y1="141" x2="139.5" y2="139" stroke="black" /> <line x1="168.5" y1="148" x2="168.5" y2="146" stroke="black" /> */}



                    </div>
                    <div className='md:col-span-6 w-full rounded-xl mb-3 mt-5'>
                        <div className='p-3 text-center'>
                            <div className="inline text-center mx-16">
                                <button className="focus:outline-none w-[20%] text-white bg-[#1e1e1e] transition ease-out hover:-translate-y-1 hover:scale-100 delay-150 focus:ring-4 hover:shadow-lg hover:shadow-[#000000] font-bold rounded-xl text-sm py-2 px-3 mr-5 my-3" type="submit">Swap</button>
                                <button className="focus:outline-none w-[20%] text-white bg-[#1e1e1e] transition ease-out hover:-translate-y-1 hover:scale-100 delay-150 focus:ring-4 hover:shadow-lg hover:shadow-[#000000] font-bold rounded-xl text-sm py-2 px-3 mr-5 my-3" type="submit">Sell</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


function CollectionDetailsView({ collectionDetails, metaData, tokenData, transfersData, backButtonPath }) {
    return (
        <div className='relative'>
            <div className="pl-10 pr-3 pt-5 bg-[#121212] mx-3 rounded-xl mb-6">
                <div className='text-md  pt-1/3'>
                    <Link href={backButtonPath}>
                        <button title="back" className="h-10 w-10 mx-2 text-white rounded-lg border-[#383838] hover:bg-[#02FF63] hover:text-[#212121] border px-[10px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                            </svg>
                        </button>
                    </Link>
                    <span className='opacity-30'>NFT collection | </span>
                    <span className='opacity-30'>Categories | </span>
                    <span className='opacity-30'>{get(tokenData, 'tokenInfo.name', '')} | </span>
                    <span className='text-white'>Expanded view</span>

                    {/* Top Right Buttons */}
                    <span className='float-right'>

                        {/* Refresh */}
                        <button title="refresh" className="h-10 w-10 mx-2 text-white rounded-lg hover:text-[#212121] border-[#383838] border-2 px-[10px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                                <g id="rotate-left" transform="translate(-236 -316)">
                                    <path d="M5.78.43A10.019,10.019,0,0,1,8.67,0,8.663,8.663,0,1,1,1.46,3.85" transform="translate(239.33 320.65)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                    <path data-name="Vector" d="M0,3.32,2.89,0" transform="translate(243.87 318)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                    <path data-name="Vector" d="M0,0,3.37,2.46" transform="translate(243.87 321.32)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                    <path data-name="Vector" d="M0,0H24V24H0Z" transform="translate(260 340) rotate(180)" fill="none" opacity="0" />
                                </g>
                            </svg>
                        </button>

                        {/* Share */}
                        <button title="share" className="h-10 w-10 mx-2 text-white rounded-lg border-[#383838] hover:text-[#212121] border px-[10px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                                <g id="send" transform="translate(-236 -316)">
                                    <path d="M6.46,1.229l8.56,4.28c3.84,1.92,3.84,5.06,0,6.98l-8.56,4.28c-5.76,2.88-8.11.52-5.23-5.23l.87-1.73a2.046,2.046,0,0,0,0-1.61l-.87-1.74C-1.65.709.71-1.651,6.46,1.229Z" transform="translate(239.05 319.001)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                    <path data-name="Vector" d="M0,0H5.4" transform="translate(241.44 328)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                    <path data-name="Vector" d="M0,0H24V24H0Z" transform="translate(236 316)" fill="none" opacity="0" />
                                </g>
                            </svg>
                        </button>

                        {/* Send */}
                        <button title="send" className="h-10 w-10 mx-2 text-white rounded-lg border-[#383838] hover:text-[#212121] border px-[10px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                                <g id="vuesax_linear_export" data-name="vuesax/linear/export" transform="translate(-492 -444)">
                                    <g id="export">
                                        <path d="M0,2.56,2.56,0,5.12,2.56" transform="translate(501.32 447.94)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                        <path data-name="Vector" d="M0,10.17V0" transform="translate(503.88 448.01)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                        <path data-name="Vector" d="M0,0A7.651,7.651,0,0,0,8,8a7.651,7.651,0,0,0,8-8" transform="translate(496 456)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                        <path data-name="Vector" d="M0,0H24V24H0Z" transform="translate(516 468) rotate(180)" fill="none" opacity="0" />
                                    </g>
                                </g>
                            </svg>
                        </button>

                    </span>
                </div>
                <div className='grid lg:grid-cols-10 xs:grid-cols-1 gap-1'>
                    {/* Left Sidebar */}
                    {metaData && <LeftSidebar
                        attributes={get(metaData, 'attributes', []) || []}
                        CollectionName={get(tokenData, 'tokenInfo.name', '')}
                        NFTSymbol={get(tokenData, 'tokenInfo.symbol', '')}
                        CollectionDesc={metaData.description}
                        NFTImage={get(metaData, 'image', '')}
                        NFTPrice={collectionDetails.price}
                        NFTTag={collectionDetails.tag}
                    />}
                    {/* Middle Sidebar */}
                    {metaData && <MiddleSidebar
                        CollectionName={get(tokenData, 'tokenInfo.name', '')}
                        CollectionDesc={metaData.description}
                        NFTImage={get(metaData, 'image', '')}
                        NFTTag={collectionDetails.tag}
                        NFTPrice={collectionDetails.price}
                        attributes={get(metaData, 'attributes', []) || []}
                        NFTSymbol={get(tokenData, 'tokenInfo.symbol', '')}

                    />}
                    {/* Right Sidebar */}
                    <RightSidebar
                        metaData={metaData}
                        tokenData={tokenData}
                        transfers={get(transfersData, 'data.items', [])}
                        NFTImage={get(metaData, 'image', '')}
                        attributes={get(metaData, 'attributes', []) || []}
                        activities={collectionDetails.activities}
                        backButtonPath={backButtonPath}
                    />

                </div>
            </div>
        </div>
    );
}

export default CollectionDetailsView;