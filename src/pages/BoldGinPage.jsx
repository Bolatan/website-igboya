import React from 'react';
import boldGinImg from '../assets/boldgin.jpeg';

const BoldGinPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <img src={boldGinImg} alt="BOLD GIN" className="w-full rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
          <h1 className="text-4xl font-bold mb-4">BOLD GIN......Stir you BOLDness</h1>
          <p className="text-lg mb-4">An Original Native Masterpiece from Eastwood Edwin Russ Distilleries & Food Ltd</p>
          <p className="mb-4">Introducing a spirit born from tradition and perfected with mastery. BOLD GIN is crafted from the finest natural African palm wine, meticulously distilled to preserve the rich character of our native roots while delivering a refined and exhilarating drinking experience.</p>
          <p className="mb-4">Every drop carries the heartbeat of the motherland. The robust essence of palm wine is elevated by a careful blend of botanicals that awaken the senses. What emerges is a gin unlike any other: smooth yet daring, familiar yet exciting, proudly authentic.</p>
          <p className="mb-4">This is not just a drink. It is a celebration of culture and craftsmanship. A tribute to the past, bottled for the future. BOLD GIN invites you to taste the story of our people, to savor the legacy in every sip, and to raise your glass to originality.</p>
          <p className="mb-4">For the brave. The expressive. The ones who step forward with confidence and take life on their own terms.</p>
          <p className="font-bold text-xl">BOLD GIN</p>
          <p className="font-bold text-xl">Be Original. Be Untamed. Be Bold......stir your BOLDness</p>
        </div>
      </div>
    </div>
  );
};

export default BoldGinPage;
