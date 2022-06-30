import get from 'lodash.get';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import web3 from '@solana/web3.js'
import { truncate } from '@/utils/HelperUtil'
import { formatDistance, subDays } from 'date-fns'

// Left Sidebar: Collection Details - Image | Collection Details - Description | Swap | Sell 

function LeftSidebar({ CollectionName, CollectionDesc, NFTImage, NFTTag, NFTPrice, NFTSymbol }) {
    return (
        <div className="col-span-4">
            <div className="card rounded-xl border-[#383838] border-2 bg-[#1e1e1e] mx-5 p-2 text-center">
                <img className='w-full rounded-xl' src={NFTImage} alt="NFTImage" />
            </div>
            <div className="grid grid-cols-2 gap-3 p-3">
                <div className='col-span-2 text-center'>
                    {/* <button className="focus:outline-none inline-flex text-white backdrop-blur-sm bg-[#ffffff66] absolute w-56 h-12 mt-[-42px] ml-[-106px] font-bold rounded-xl border border-[#fafafa] text-2xl py-2 px-3 mb-5 justify-center" type="submit">
                    <img className='inline mt-1 rounded-full bg-[#212121] p-1' width="30px" height="30px" src="/images/coins/sol.png" alt="" />
                    &nbsp;{NFTPrice} SOL</button> */}

                    <div className='md:col-span-6 w-full bg-[#232323] border-[#383838] border rounded-xl mb-3 mt-5'>

                        <div className="card rounded-lg bg-[#1e1e1e] p-1 col-span-3 flex pb-1">
                            <div className='m-1 p-2 bg-[#272727] rounded-xl'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                                <g id="vuesax_bulk_profile" data-name="vuesax/bulk/profile" transform="translate(-108 -252)">
                                <g id="profile">
                                    <path id="Vector0" d="M4.75,0a4.746,4.746,0,0,0-.12,9.49.807.807,0,0,1,.22,0h.07A4.746,4.746,0,0,0,4.75,0Z" transform="translate(115.25 254)" fill="#02ff63" opacity="0.4" />
                                    <path id="Vector1" data-name="Vector" d="M12.12,1.395a9.929,9.929,0,0,0-10.15,0A3.947,3.947,0,0,0,0,4.625a3.914,3.914,0,0,0,1.96,3.21,9.239,9.239,0,0,0,5.08,1.41,9.239,9.239,0,0,0,5.08-1.41,3.945,3.945,0,0,0,1.96-3.23A3.937,3.937,0,0,0,12.12,1.395Z" transform="translate(112.96 264.755)" fill="#02ff63" />
                                    <path id="Vector2" data-name="Vector" d="M0,0H24V24H0Z" transform="translate(108 252)" fill="none" opacity="0" />
                                </g>
                                </g>
                            </svg>

                            </div>
                            &nbsp; <span className='pt-2 w-full text-lg'>About {CollectionName} ({NFTSymbol})</span>
                            <span className='m-2'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <g id="arrow-down" transform="translate(-236 -252)">
                                <path id="Vectorx" d="M15.84,0,9.32,6.52a1.986,1.986,0,0,1-2.8,0L0,0" transform="translate(240.08 260.95)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                <path id="Vectorxx" data-name="Vector" d="M0,0H24V24H0Z" transform="translate(260 276) rotate(180)" fill="none" opacity="0" />
                            </g>
                            </svg>
                            </span>
                        </div>
                        <div className='p-3 text-left'>
                            <h1 className='text-xl font-normal'>{CollectionName} ({NFTSymbol})</h1>
                            <h5 className='font-light py-3 text-xs opacity-40'>
                                {CollectionDesc}
                            </h5>
                            <div className="grid grid-cols-2 text-center mx-16">
                            <button className="focus:outline-none w-50 text-white bg-gradient-to-r from-[#6A00FF] to-[#3C00B7] transition ease-out hover:-translate-y-1 hover:scale-100 delay-150 focus:ring-4 hover:shadow-lg hover:shadow-[#3c00b7cc] font-bold rounded-md text-sm py-2 px-3 mr-2 my-3" type="submit">Swap</button>
                            <button className="focus:outline-none w-50 text-black bg-[#02ff63] transition ease-out hover:-translate-y-1 hover:scale-100 delay-150 focus:ring-4 hover:shadow-lg hover:shadow-[#02ff63cc] font-bold rounded-md text-sm py-2 px-3 mr-2 my-3" type="submit">Sell</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


// Right Sidebar: Collection Details - Details | Attributes | Activities

function RightSidebar({attributes, activities, metaData, tokenData, transfers = [], NFTImage}) {

    const [details, setDetails] = useState([])

    useEffect(() => {
        if(!tokenData) return;
        setDetails([
            {
                key: 'Token Address',
                value: get(tokenData, 'account', '')
            },
            {
                key: 'Owner Program',
                value: get(tokenData, 'ownerProgram', '')
            },
            {
                key: 'Mint Authority',
                value: get(tokenData, 'tokenInfo.tokenAuthority', '')
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
        <div className="lg:col-span-6">
            <div className='text-md mb-6'><span className='opacity-30'>My collection / </span><span className='text-white'>Expanded view</span>

                {/* Top Right Buttons */}
                <span className='float-right'>
                    
                    {/* Refresh */}
                    <button title="refresh" className="h-10 w-10 mx-2 text-white rounded-lg bg-[#1e1e1e] hover:text-[#212121] border-[#383838] border-2 px-[10px]">
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
                    <button title="share" className="h-10 w-10 mx-2 text-white rounded-lg bg-[#1e1e1e] border-[#383838] hover:text-[#212121] border px-[10px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                            <g id="send" transform="translate(-236 -316)">
                            <path d="M6.46,1.229l8.56,4.28c3.84,1.92,3.84,5.06,0,6.98l-8.56,4.28c-5.76,2.88-8.11.52-5.23-5.23l.87-1.73a2.046,2.046,0,0,0,0-1.61l-.87-1.74C-1.65.709.71-1.651,6.46,1.229Z" transform="translate(239.05 319.001)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                            <path data-name="Vector" d="M0,0H5.4" transform="translate(241.44 328)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                            <path data-name="Vector" d="M0,0H24V24H0Z" transform="translate(236 316)" fill="none" opacity="0" />
                            </g>
                        </svg>
                    </button>

                    {/* Send */}
                    <button title="send" className="h-10 w-10 mx-2 text-white rounded-lg bg-[#1e1e1e] border-[#383838] hover:text-[#212121] border px-[10px]">
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

            {/* Details Table */}
            <div className="grid md:grid-cols-11 gap-5 pt-3">
                <div className="card border-[#383838] border col-span-5 rounded-xl bg-[#1e1e1e]">
                    <div className="card rounded-lg bg-[#1e1e1e] p-1 flex">
                        <div className='m-1 p-2 bg-[#272727] rounded-xl'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                            <g id="vuesax_bulk_document-text" data-name="vuesax/bulk/document-text" transform="translate(-492 -252)">
                                <g id="document-text">
                                <path d="M0,0H24V24H0Z" transform="translate(492 252)" fill="none" opacity="0" />
                                <path data-name="Vector" d="M18,5V15c0,3-1.5,5-5,5H5c-3.5,0-5-2-5-5V5C0,2,1.5,0,5,0h8C16.5,0,18,2,18,5Z" transform="translate(495 254)" fill="#02ff63" opacity="0.4" />
                                <g id="Group">
                                    <path data-name="Vector" d="M4.75,5.5h-2A2.748,2.748,0,0,1,0,2.75v-2A.755.755,0,0,1,.75,0,.755.755,0,0,1,1.5.75v2A1.25,1.25,0,0,0,2.75,4h2a.75.75,0,0,1,0,1.5Z" transform="translate(505.75 255.75)" fill="#02ff63" />
                                </g>
                                <g id="Group-2" data-name="Group">
                                    <path data-name="Vector" d="M4.75,1.5h-4A.755.755,0,0,1,0,.75.755.755,0,0,1,.75,0h4A.755.755,0,0,1,5.5.75.755.755,0,0,1,4.75,1.5Z" transform="translate(499.25 264.25)" fill="#02ff63" />
                                </g>
                                <g id="Group-3" data-name="Group">
                                    <path data-name="Vector" d="M8.75,1.5h-8A.755.755,0,0,1,0,.75.755.755,0,0,1,.75,0h8A.755.755,0,0,1,9.5.75.755.755,0,0,1,8.75,1.5Z" transform="translate(499.25 268.25)" fill="#02ff63" />
                                </g>
                                <path data-name="Vector" d="M0,0H24V24H0Z" transform="translate(492 252)" fill="none" opacity="0" />
                                </g>
                            </g>
                            </svg>
                        </div>

                    &nbsp; <span className='pt-2 w-full text-lg'>Details</span>
                    <span className='m-2'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <g id="arrow-down" transform="translate(-236 -252)">
                        <path id="Vectorx" d="M15.84,0,9.32,6.52a1.986,1.986,0,0,1-2.8,0L0,0" transform="translate(240.08 260.95)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path id="Vectorxx" data-name="Vector" d="M0,0H24V24H0Z" transform="translate(260 276) rotate(180)" fill="none" opacity="0" />
                        </g>
                    </svg>
                    </span>
                    </div>
                    <div className='my-3'>
                    <table className="table-auto w-full text-xs">
                        <tbody>
                            {
                                details.map((detail, index) => {
                                    return <tr className={index % 2 == 0 ?'bg-[#232323]' : 'bg-[#2c2c2c]'} key={index}>
                                                <td className="py-3 px-2">{detail.key}</td>
                                                <td className='py-3 px-2 text-right text-[#99ffa2]'>{truncate(detail.value, 19)}</td>
                                            </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Attribute Table */}
            <div className='md:col-span-6 w-full bg-[#232323] border-[#383838] border rounded-xl'>

                <div className="card rounded-lg bg-[#1e1e1e] p-1 col-span-3 flex pb-1">
                <div className='m-1 p-2 bg-[#272727] rounded-xl'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                    <g id="vuesax_bulk_shield" data-name="vuesax/bulk/shield" transform="translate(-269 -188)">
                        <g id="shield" transform="translate(33)">
                        <path d="M16.82,4.957V7.8L3.81,17.337l-2.63-1.97A3.317,3.317,0,0,1,0,13.017V4.957a3.162,3.162,0,0,1,1.91-2.75L7.38.157a3.447,3.447,0,0,1,2.06,0l5.47,2.05A3.162,3.162,0,0,1,16.82,4.957Z" transform="translate(239.59 190.003)" fill="#02ff63" opacity="0.4" />
                        <path data-name="Vector" d="M12.09,0V3.85A3.317,3.317,0,0,1,10.91,6.2L5.44,10.29a2.961,2.961,0,0,1-1.76.54,2.961,2.961,0,0,1-1.76-.54L0,8.86Z" transform="translate(244.32 199.17)" fill="#02ff63" />
                        <path data-name="Vector" d="M0,0H24V24H0Z" transform="translate(236 188)" fill="none" opacity="0" />
                        </g>
                    </g>
                    </svg>
                </div>
                &nbsp; <span className='pt-2 w-full text-lg'>Attributes</span>
                <span className='m-2'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <g id="arrow-down" transform="translate(-236 -252)">
                    <path id="Vectorx" d="M15.84,0,9.32,6.52a1.986,1.986,0,0,1-2.8,0L0,0" transform="translate(240.08 260.95)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path id="Vectorxx" data-name="Vector" d="M0,0H24V24H0Z" transform="translate(260 276) rotate(180)" fill="none" opacity="0" />
                    </g>
                </svg>
                </span>
                </div>
                <div className='grid md:grid-cols-3 gap-3 grid-cols-1 p-4'>
                    {
                        attributes.map((attribute, index) => {
                            return <div className="card rounded-lg border-[#383838] border-2 bg-[#1e1e1e] py-2 text-center" key={index}>
                                        <h1 className='text-[#FFFFFF66] text-xs uppercase'>{attribute.trait_type || attribute.Unit_type}</h1>
                                        {/* <h1 className='text-xs pb-2'>{attribute.value || attribute.Number}</h1> */}
                                        <h1 className='mt-2 text-xl text-[#99ffa2]'>{attribute.value || attribute.Number}</h1>
                                    </div>
                        })
                    }
                </div>

            </div>

            {/* Activity Table */}

            <div className="col-span-11">
                <div className="card rounded-xl border-[#383838] border-2 bg-[#212121]">
                    <div className="card rounded-lg bg-[#1e1e1e] p-1 col-span-3 flex pb-1">
                        <div className='m-1 p-2 bg-[#272727] rounded-xl'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                            <g id="vuesax_bulk_chart" data-name="vuesax/bulk/chart" transform="translate(-556 -252)">
                            <g id="chart">
                                <path id="Vector-21" d="M20.75,1.5H.75A.755.755,0,0,1,0,.75.755.755,0,0,1,.75,0h20a.755.755,0,0,1,.75.75A.755.755,0,0,1,20.75,1.5Z" transform="translate(557.25 272.5)" fill="#02ff63" />
                                <path id="Vector-22" data-name="Vector" d="M0,2V20H4.5V2c0-1.1-.45-2-1.8-2H1.8C.45,0,0,.9,0,2Z" transform="translate(565.75 254)" fill="#02ff63" />
                                <path id="Vector-23" data-name="Vector" d="M0,2V14H4V2C4,.9,3.6,0,2.4,0H1.6C.4,0,0,.9,0,2Z" transform="translate(559 260)" fill="#02ff63" opacity="0.4" />
                                <path id="Vector-24" data-name="Vector" d="M0,2V9H4V2C4,.9,3.6,0,2.4,0H1.6C.4,0,0,.9,0,2Z" transform="translate(573 265)" fill="#02ff63" opacity="0.4" />
                                <path id="Vector-25" data-name="Vector" d="M0,0H24V24H0Z" transform="translate(556 252)" fill="none" opacity="0" />
                            </g>
                            </g>
                        </svg>
                        </div>
                        &nbsp; <span className='pt-2 w-full text-lg'>Activities</span>
                        <span className='m-2'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <g id="arrow-down" transform="translate(-236 -252)">
                            <path id="Vectorx" d="M15.84,0,9.32,6.52a1.986,1.986,0,0,1-2.8,0L0,0" transform="translate(240.08 260.95)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                            <path id="Vectorxx" data-name="Vector" d="M0,0H24V24H0Z" transform="translate(260 276) rotate(180)" fill="none" opacity="0" />
                        </g>
                        </svg>
                        </span>
                    </div>
                    <div className='w-full bg-[#1e1e1e] rounded-lg'>
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
                    </div>

                </div>
            </div>
            
            </div>
        </div>
    );
}


function CollectionDetailsView({ collectionDetails, backButtonPath, metaData, tokenData, transfersData }) {
    return (
        <div>
            <Link href={backButtonPath}>
                <button title="back" className="h-12 w-12 ml-3 mx-2 text-white rounded-lg bg-[#1e1e1e] hover:bg-[#02FF63] hover:text-[#212121] border-[#383838] border absolute top-[86px] left-1 px-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                    </svg>
                </button>
            </Link>
            <div className="grid lg:grid-cols-10 xs:grid-cols-1 gap-1 pl-10 pr-3 py-7 bg-[#121212] mx-3 mb-3 rounded-xl">

                {/* Left Sidebar */}
                {metaData && <LeftSidebar 
                    CollectionName={get(tokenData, 'tokenInfo.name', '')} 
                    NFTSymbol={get(tokenData, 'tokenInfo.symbol', '')}
                    CollectionDesc={metaData.description}
                    NFTImage={get(metaData, 'image', '')}
                    NFTPrice={collectionDetails.price}
                    NFTTag={collectionDetails.tag}
                />}
                
                {/* Right Sidebar */}
                <RightSidebar
                    metaData={metaData}
                    tokenData={tokenData}
                    transfers={get(transfersData, 'data.items',[])}
                    NFTImage={get(metaData, 'image', '')}
                    attributes={get(metaData, 'attributes', []) || []}
                    activities={collectionDetails.activities}
                />

            </div>
        </div>
    );
}

export default CollectionDetailsView;