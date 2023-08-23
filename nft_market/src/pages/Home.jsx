import React from 'react';
import Nftsdata from "../data/nftdata.json";
import Usersdata from "../data/users.json";
import './styles/Home.css';
import Hero from '../components/Hero';
import Nftcard from '../components/NFTcard';
import Users from '../components/users';
import Collections from '../components/Collections';

const Home = () => {
    const first5Nfts = Nftsdata.slice(0, 5);
    const usersColl = Usersdata.slice(0, 4);

    return (
        <main>
            <section>
                <Hero 
                    heroTitle="World Of Top Works"
                    heroSubtitle="Welcome to the world of rare digital art. Explore     the best art from hand-picked digital artist out there and find     the hidden gem."
                />
            </section>
            <section>
                <div className="sectionTitle" >Feature Items</div>
                <div className="featureCointainer">
                    {first5Nfts.map((Nftdata) => (
                        <Nftcard 
                            key={Nftdata.id} 
                            nftImg={Nftdata.image}
                            nftName={Nftdata.name}
                            nftPrice={Nftdata.price}
                            nftCrypto={Nftdata.crypto}
                            lastSale={Nftdata.lastsale}
                        />
                    ))}
                </div>
            </section>
            <section>
                <div className="sectionTitle" >Top Seller</div>
                <div className='sellersCointainer'>
                    {Usersdata.map((Userdata) => (
                        <Users 
                            key={Userdata.id}
                            avatarUrl={Userdata.avatar}
                            userName={Userdata.name}
                            userSales={Userdata.sales}
                            userCrypto={Userdata.crypto}
                        />
                    ))}
                </div>
            </section>
            <section>
                <div className="sectionTitle" >Top Collections</div>
                <div className='collectionsCointainer'>
                        {usersColl.map((Userdata)=> (
                            <Collections 
                                key={Userdata.id}
                                usersImg={Userdata.avatar}
                                collectionName={Userdata.collection}
                                collectionitems={Userdata.items}
                            />
                        ))}
                </div>
            </section>
        </main>
    );
}

export default Home;