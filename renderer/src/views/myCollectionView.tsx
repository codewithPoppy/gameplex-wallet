import Link from "next/link";
import { Key, useEffect, useState } from "react";
import { useMetaDetails } from "../web3/hooks/useMetaDetails";
import { useMetaImage } from "../web3/hooks/useMetaImage";
import debounce from 'lodash.debounce';


function CollectionCard({ collectionUri, collectionAddress }) {
    const { cachedUri, isLoading } = useMetaImage(collectionUri)
    const { cachedData } = useMetaDetails(collectionUri)

    return (
        <Link href={`/details/${collectionAddress}`}>
            <div className="w-min h-min bg-white mt-3 rounded-xl border border-gray-200 shadow-md dark:bg-[#1E1E1E] dark:border-[#1E1E1E] mx-auto">
                <div className="hover:bg-gradient-to-r from-[#6A00FF] to-[#3C00B7] rounded-xl cursor-pointer">
                    <div className="h-[14rem] w-[14rem] relative">
                        <a title="cardImage" href="#">
                            <div className="rounded-xl h-[14rem] w-[14rem] overflow-hidden">
                                <div className="rounded-xl h-full w-full child hover:scale-110 transition" style={{ backgroundImage: "url(" + `${cachedUri}` + ")", backgroundSize: "cover", backgroundPosition: "center" }}></div>
                            </div>
                        </a>
                    </div>
                    <div className="p-2 h-[70px]">
                        <a href="#">
                            <h5 className="pb-1 text-sm font-semibold text-center tracking-tight text-gray-900 dark:text-white">{cachedData && cachedData.name}</h5>
                        </a>
                        <p className="text-center text-xs font-normal text-white text-ellipsis line-2-clip overflow-hidden">{cachedData && cachedData.description}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}


function FilterSearch({ filterOptions, handleChangeSearchQuery, handleSubmit, searchQuery }) {

    return (
        <div className="flex justify-end items-center mr-3 w-1/2">
            <div className="relative">
                <div className="static top-5 left-3">
                    <select defaultValue={'DEFAULT'} className="absolute focus:border-transparent focus:ring-0 top-5 h-10 text-white rounded-l-xl bg-[#313131] border-[#383838] left-0" title="search" name="filters" id="filters">
                        <option value="DEFAULT" disabled>All Filters</option>
                        <option value="name">Name</option>
                        <option value="token">Token</option>
                    </select>
                </div>
                <input type="text" value={searchQuery} onChange={(e)=> handleChangeSearchQuery(e.target.value ? e.target.value.toString() : "")}  className="h-10 focus:border-transparent focus:ring-0 w-full pl-32 pr-20 text-white bg-[#313131] border-[#383838] flex-auto transition ease-out font-bold rounded-xl placeholder:font-thin placeholder:text-[#FFFFFF33] text-sm px-5 py-3 mr-2 mt-5 mb-5" placeholder="Search collections and creators" />
                <div className="absolute top-5 right-0"> <button title="search" onClick={handleSubmit} className="focus:border-transparent focus:ring-0 h-10 w-10 text-black rounded-xl bg-[#02FF63] hover:bg-[#02FF63] px-[10px]"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg></button> </div>
            </div>
        </div>
    );
}


type MyCollectionViewProps = {
  collections: { uri: string; address: string }[];
};

        
function MyCollectionView({ collections }: { collections: any }) {
    const [searchQuery, setSearchQuery] = useState('')
    const [filteredCollection, setFilteredCollection] = useState([]);

    useEffect(() => {
        searchFilter();
    }, [searchQuery]);

    const searchFilter = debounce(() => {
        if (searchQuery && searchQuery.length === 43) {
            const filteredCollections = collections.filter((collection: { name: string; address: string; }) => collection?.address.toLowerCase().includes(searchQuery.toLowerCase()));
            setFilteredCollection(filteredCollections);
        } else if (searchQuery) {
            const filteredCollections = collections.filter((collection: { name: string; address: string; }) => collection?.name.toLowerCase().includes(searchQuery.toLowerCase()));
            setFilteredCollection(filteredCollections);
          
        } else {
            const filteredCollections = collections;
            setFilteredCollection(filteredCollections);
        }
    }, 500);

    const handleSubmit = async (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();
        searchFilter();
    };
   
    return (
        <div className="rounded-xl px-3">
            {/* // Filter Area */}
            <header className="w-100 h-16 flex flex-col-2 md:flex-row sticky z-[5] bg-[#121212] pt-3 rounded-xl">
                <h1 className="text-md text-white font-normal px-4 pt-5 w-1/2">NFT Collection&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<span className="text-md opacity-40 mt-1">{collections.length} items</span></h1>

                {/* Filter Area */}
                <FilterSearch filterOptions={[]} handleChangeSearchQuery={setSearchQuery} searchQuery={searchQuery} handleSubmit={handleSubmit} />

            </header>
            <div className='grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-4 mx-auto sm:mt-24 md:my-3 bg-[#121212] overflow-y-auto h-[80vh] rounded-r-xl no-scrollbar'>
                {/* Collection Card */}
                {filteredCollection.map((collection: { uri: any; address: any; }, index: Key) => {
                    return <CollectionCard key={index} collectionUri={collection.uri} collectionAddress={collection.address} />
                })}
            </div>
        </div>
    );
}

export default MyCollectionView;
