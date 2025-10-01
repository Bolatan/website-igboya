import React from 'react';
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">About Eastwood Edwin Russ Distilleries & Food Limited</h1>

      <div className="max-w-4xl mx-auto space-y-8">
        <section>
          <h2 className="text-3xl font-bold mb-4">Overview</h2>
          <p className="text-lg">
            Eastwood Edwin Russ Distilleries & Food Limited (RC-1217554) is a private Nigerian company, incorporated on October 8, 2014. It operates from its Factories in the Gberigbe Area of Ikorodu LGA of Lagos State and Ukpomili Village Ifitedunu in Dunukofia LGA of Anambra State, with its registered head office address at No. 48, Gberigbe Road, off Ijede Road, Ikorodu, Lagos.
          </p>
          <p className="text-lg mt-4">
            The company is in the business of distilling, blending, packaging, and marketing both alcoholic and non-alcoholic herbal drinks and spirits. Their portfolio includes products that appeal to various segments of the market, including bitters, non-alcoholic beverages, flavored gins, liqueurs, and herbal remedies. The company positions itself as both a manufacturer and brand owner in Nigeria’s fast-moving consumer goods (FMCG) alcohol & herbal drink market.
          </p>
          <p className="text-lg mt-4">
            Ownership structure is partly known:
          </p>
          <ul className="list-disc list-inside text-lg">
            <li>Director: Okafor Ugochukwu Edwin</li>
            <li>Shareholders include Okafor Helen among others.</li>
          </ul>
        </section>

        <hr className="my-8" />

        <section>
          <h2 className="text-3xl font-bold mb-4"> The Heritage of Eastwood Edwin Russ Distilleries & Food Ltd.</h2>
          <p className="text-lg">
For generations, Nigerian herbalists have carefully crafted herbal drinks to promote health and vitality.  Eastwood Edwin Russ Distilleries & Food Ltd. continues this tradition with our premiums blend of natural ingredients.
          </p>
          <p className="text-lg mt-4">
Our unique formulas combines ancient wisdom with modern production standards to create a product that honors our heritage while meeting today's quality expectations.
          </p>
        </section>

        <hr className="my-8" />

        <section>
          <h2 className="text-3xl font-bold mb-4">Brands / Product Lines</h2>
          <p className="text-lg mb-4">
            Here are some of the brands/products the company produces; description based on market positioning or typical features of such drinks:
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Brand / Product</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type / Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Key Features / Positioning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Igboya Bitters</td>
                  <td className="px-6 py-4 whitespace-nowrap">Alcoholic herbal bitters</td>
                  <td className="px-6 py-4">A bitter herbal tonic/drink; likely high-alcohol bitters with herbal blends. A popular herbal bitters in Nigeria’s market. Appeals to consumers looking for herbal-based alcoholic drinks.</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Tee Kan Le</td>
                  <td className="px-6 py-4 whitespace-nowrap">Non-alcoholic herbal drink</td>
                  <td className="px-6 py-4">Herbal tonic, perhaps similar to bitters or wellness / rejuvenation drink but without alcohol; targets non-drinking population, or for people desiring herbal benefit without intoxication.</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Field Marshall Brand</td>
                  <td className="px-6 py-4 whitespace-nowrap">(Variety Brand Gin/Spirit)</td>
                  <td className="px-6 py-4">“Field Marshall” is a premium Gin blended from Palm wine into Spirit varieties of Gin, vodka and flavoured blended herbal spirit.</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap"><Link to="/products/23" className='hover:text-primary-green'>Splendid Bitters</Link></td>
                  <td className="px-6 py-4 whitespace-nowrap">Alcoholic bitters</td>
                  <td className="px-6 py-4">Another variant of bitters in their portfolio; perhaps targeting different taste profile or pricing tier.</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap"><Link to="/products/22" className='hover:text-primary-green'>Splendid Liqueur</Link></td>
                  <td className="px-6 py-4 whitespace-nowrap">Flavored spirit / sweetened liquor</td>
                  <td className="px-6 py-4">Liqueurs tend to be sweeter, lower proof, for cocktail mixing or sipping; fruit and herbal flavored.</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap"><Link to="/products/24" className='hover:text-primary-green'>Yatch Chocolate Vodka</Link></td>
                  <td className="px-6 py-4 whitespace-nowrap">Flavored vodka spirit</td>
                  <td className="px-6 py-4">A novelty / premium product; flavored with chocolate, appealing to consumers wanting dessert/cocktail style flavored spirits.</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap"><Link to="/products/21" className='hover:text-primary-green'>Yatch Gin</Link></td>
                  <td className="px-6 py-4 whitespace-nowrap">Gin spirit</td>
                  <td className="px-6 py-4">Traditional gin spirits or flavored gin; targeting gin cocktail market.</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Bold Palm Wine Gin</td>
                  <td className="px-6 py-4 whitespace-nowrap">Gin with palm wine or palm wine-styled flavor</td>
                  <td className="px-6 py-4">Combining traditional Nigerian flavor (palm wine) with gin; this is a niche product bridging local tastes with premium gin trend.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <hr className="my-8" />

        <section>
          <h2 className="text-3xl font-bold mb-4">Our Strengths & Market Position</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li><strong>Diversified Portfolio:</strong> The mix of bitters, non-alcoholic herbal drinks, flavored gin & vodka, and liqueur means Eastwood Edwin Russ has multiple revenue streams and and can appeal across various consumer preferences.</li>
            <li><strong>Local / Herbal Appeal:</strong> Herbal drinks and bitters are popular in Nigeria, both for cultural reasons and perceived health/functional benefits. Their herbal offerings give them a competitive niche.</li>
            <li><strong>Innovation:</strong> Products like “Bold Palm Wine Gin,” “Yatch Chocolate Vodka,” etc., show that the company is trying to innovate in flavors, combining traditional elements (palm wine) with modern spirit categories.</li>
            <li><strong>Strategic Location:</strong> Operating in Lagos State (Ikorodu region) and Dunukofia LGA in Anambra State, gives good access to transport, distribution networks, and a large consumer base.</li>
          </ul>
        </section>

        <hr className="my-8" />

        <section>
          <h2 className="text-3xl font-bold mb-4">Vision & Potential</h2>
          <p className="text-lg mb-4">Continuing on the current trajectory, Eastwood Edwin Russ Distilleries has the potential to be:</p>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>A leading herbal beverage firm in Nigeria, especially in bitters & non-alcoholic herbal tonics.</li>
            <li>A niche premium spirit innovator (through flavored vodka, gin, liqueurs) both for local consumption and possibly export.</li>
            <li>A cultural brand, where traditional Nigerian flavors (palm wine, herbs) are fused with modern spirits — appealing to diaspora markets.</li>
          </ul>
        </section>

        <hr className="my-8" />

        <section>
          <h2 className="text-3xl font-bold mb-4">Quick Facts Summary</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li><strong>Incorporation date:</strong> 8 October 2014</li>
            <li><strong>Legal form:</strong> Private Company Limited by Shares</li>
            <li><strong>Principal address:</strong> No 48, Gberigbe Road, off Ijede Road, Ikorodu, Lagos State</li>
            <li><strong>Key persons:</strong> Okafor Ugochukwu Edwin (Director / major shareholder), Okafor Helen (shareholder)</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default AboutPage;