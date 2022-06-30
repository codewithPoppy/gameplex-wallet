import get from 'lodash.get';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import web3 from '@solana/web3.js'
import { truncate } from '@/utils/HelperUtil'
import { formatDistance, subDays } from 'date-fns'

// Left Sidebar: Collection Details - Image | Collection Details - Description | Swap | Sell 

function LeftSidebar({attributes, CollectionName, CollectionDesc, NFTImage, NFTTag, NFTPrice, NFTSymbol }) {
    return (
        <div className="col-span-3">
            {/* Attribute Table */}
            <div className='md:col-span-6 w-full bg-[#232323] border-[#383838] border rounded-xl'>

                <div className="card rounded-lg bg-[#1e1e1e] p-1 col-span-3 flex pb-1">
                
                &nbsp; <span className='pt-2 w-full text-lg'>Attributes</span>
                
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
        </div>
    );
}


// Right Sidebar: Collection Details - Details | Attributes | Activities

function RightSidebar({attributes, activities, metaData, tokenData, transfers = [], NFTImage, backButtonPath}) {

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
        <div className="lg:col-span-3">

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
                                                <td className='py-3 px-2 text-right text-[#99ffa2]'>{truncate(detail.value, 19)}</td>
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

function MiddleSidebar({ CollectionName, CollectionDesc, NFTImage, NFTTag, NFTPrice, NFTSymbol }) {
    return (
        <div className="col-span-4">
            <div className="card rounded-xl border-[#383838] border-2 bg-[#1e1e1e] mx-5 p-2 text-center">
                <h1>{CollectionDesc}</h1>
                <img className='w-full rounded-xl' src={NFTImage} alt="NFTImage" />
                {/* <div>
                    <span className='text-left'>Owner</span>
                    <span className='text-right'>Price</span>
                </div> */}
            </div>
            <div className="grid grid-cols-2 gap-3 p-3">
                <div className='col-span-2 text-center'>

                    <div className='md:col-span-6 w-full rounded-xl mb-3 mt-5'>
                        <div className='p-3 text-left'>
                            <div className="grid grid-cols-2 text-center mx-16">
                            <button className="focus:outline-none w-50 text-white bg-[#1e1e1e] transition ease-out hover:-translate-y-1 hover:scale-100 delay-150 focus:ring-4 hover:shadow-lg hover:shadow-[#000000] font-bold rounded-md text-sm py-2 px-3 mr-2 my-3" type="submit">Swap</button>
                            <button className="focus:outline-none w-50 text-white bg-[#1e1e1e] transition ease-out hover:-translate-y-1 hover:scale-100 delay-150 focus:ring-4 hover:shadow-lg hover:shadow-[#000000] font-bold rounded-md text-sm py-2 px-3 mr-2 my-3" type="submit">Sell</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function CollectionDetailsView({ collectionDetails, metaData, tokenData, transfersData, backButtonPath}) {
    return (
        <div>
            
            <div className="grid lg:grid-cols-10 xs:grid-cols-1 gap-1 pl-10 pr-3 py-7 bg-[#121212] mx-3 mb-3 rounded-xl">

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
                    backButtonPath={backButtonPath}
                />

            </div>
        </div>
    );
}

export default CollectionDetailsView;