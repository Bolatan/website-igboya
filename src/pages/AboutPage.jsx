import React from 'react';
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <section>
          <h1 className="text-4xl font-bold text-center mb-8">The Heritage of Eastwood Edwin Russ Distilleries & Food Ltd.</h1>
          <p className="text-lg">
For generations, Nigerian herbalists have carefully crafted herbal drinks to promote health and vitality.  Eastwood Edwin Russ Distilleries & Food Ltd. continues this tradition with our premiums blend of natural ingredients.
          </p>
          <p className="text-lg mt-4">
Our unique formulas combines ancient wisdom with modern production standards to create a product that honors our heritage while meeting today's quality expectations.
          </p>
        </section>

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
      </div>
    </div>
  );
}

export default AboutPage;