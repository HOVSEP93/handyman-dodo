import React from "react";
import Handyman from "../assets/header.png";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <div class="px-10 ">
        <h1 class="font-bold text-center mt-10 md:mt-20 text-H3 text-Primary">
          ABOUT ME
        </h1>
        <div class="container mx-auto py-40 flex flex-col-reverse lg:flex-row items-center gap-20">
          {/* <!-- left --> */}
          <div class="relative">
            <div class="h-full  overflow-hidden ">
              <img src={Handyman} alt="my-pic" />
            </div>
          </div>
          {/* <!-- right --> */}
          <div class="my-auto flex flex-col gap-3">
            <h1 class=" font-medium  text-primary text-H4 text-NeutralFocus">
              GARDENS, PROPERTY MAINTENANCE & HANDYMAN SERVICES
            </h1>

            <ul className="space-y-4">
              {/* paragraph 1 */}
              <div>
                <p className="text-H5 text-Primary">Wicked Services</p>
                <li className="text-H6 text-Neutral">
                  Provides a complete range of Garden, Property Maintenance &
                  Handyman Services.
                </li>
              </div>

              {/* paragraph 2 */}
              <div>
                <p className="text-H5 text-Primary">Garden Services</p>
                <li className="text-H6 text-Neutral">
                  We provide a complete range of garden services from gardening
                  and mulching through to garden design, plant selection, rock
                  and stone work and garden borders and edging.
                </li>
              </div>

              {/* paragraph 3 */}
              <div>
                <p className="text-H5 text-Primary">Tree & Stump Removal</p>
                <li className="text-H6 text-Neutral">
                  Tree services include tree removal up to 4 metres, stump
                  grinding, stump removal, shrub and hedge pruning, clearing of
                  overgrowth, limbs and branches.
                </li>
              </div>

              {/* paragraph 4 */}
              <div>
                <p className="text-H5 text-Primary">
                  Outdoor Projects & Construction
                </p>
                <li className="text-H6 text-Neutral">
                  Our team can also assist with all of your small outdoor
                  projects including deck construction, deck sealing, deck
                  repairs, general outdoor construction & maintenance work.
                </li>
              </div>

              {/* paragraph 4 */}
              <div>
                <p className="text-H5 text-Primary">Handyman Services</p>
                <li className="text-H6 text-Neutral">
                  Furniture & flat pack assembly, furniture restoration, door,
                  window, wall and grout repairs, assembling swing sets, cubby
                  houses, trampolines and other 'odd jobs'
                </li>
              </div>

              <h2 className="text-H4 text-PrimaryFocus">
                We Guarantee 'Fast, Friendly & Professional' Services with 100%
                Customer Satisfaction!
              </h2>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
