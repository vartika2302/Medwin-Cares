import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./guidelines.scss";

const Guidelines = () => {
  return (
    <div>
      <Navbar />
      <div className="guidelines">
        <div className="guidelines-wrapper">
          <h2 className="guidelines-heading">
            COVID-19 PROTOCOL: WHAT IS ISOLATION, QUARANTINE AND SOCIAL
            DISTANCING?
          </h2>
          <div className="guidelines-items">
            <div className="guidelines-item">
              <h3>What is COVID 19?</h3>
              <p>
                COVID-19, caused by a novel virus, the coronavirus or SARS-CoV-2
                is a respiratory illness that has become a pandemic. This virus
                was first detected in Wuhan, Hubei Province, China. Tens of
                thousands of people were infected with COVID-19 in many parts of
                China, as reported by the Chinese officials. Cases of COVID-19
                have since then been reported internationally, in many
                countries. sustained community-level or person-to-person
                transmission is the cause of the spread of the infection. The
                reason that COVID 19 is so dangerous is that it can spread
                through droplets or even stay in the air as an aerosol making it
                impossible to detect. The other factor is that many carriers of
                the disease may be asymptomatic so they may not take the
                precautions necessary to not spread the disease.
              </p>
            </div>
            <div className="guidelines-item">
              <h3>What does Quarantine Mean?</h3>
              <p>
                Quarantine does not have to be scary, rather it is an effective
                way to protect the public. It is defined as separating and
                restricting the movement of people who are exposed or are
                potentially exposed to a contagious disease. A quarantine keeps
                such people away from others so they don’t unknowingly infect
                anyone in their vicinity. It is used by Governments to prevent
                the spread of communicable diseases.
              </p>
              <p>Quarantines may be used in times of:</p>
              <ul>
                <li>
                  <span>Outbreaks:</span> The sudden rise of cases of a disease
                  in a region.
                </li>
                <li>
                  <span>Epidemics:</span> Outbreak of a disease over a larger
                  area or all over a country.
                </li>
                <li>
                  <span>Pandemics:</span> Widespread disease involving the
                  entire planet, affecting a lot of people globally.
                </li>
              </ul>
            </div>
            <div className="guidelines-item">
              <h3>Who is Quarantined?</h3>
              <p>
                Anyone who has had close contact with someone who is a confirmed
                case of coronavirus infection. Close contact is defined as being
                within 2 meters or 6 feet from a person infected with COVID-19
                for a prolonged time. This includes living with, visiting, or
                sharing a closed space with the infected person. Even being
                coughed upon by a person with COVID-9 infection can qualify you
                as a close contact. The health departments identify close
                contacts through what is known as contact tracing.
              </p>
            </div>
            <div className="guidelines-item">
              <h3>Self-isolation</h3>
              <p>
                Isolation, unlike quarantine, is when a person confirmed to have
                a contagious disease has to separate themselves from healthy
                individuals around them. This is done to prevent the spread of
                infection among the common masses.{" "}
              </p>
            </div>
            <div className="guidelines-item">
              <h3>Self-isolation versus Quarantine</h3>
              <p>
                While isolation achieves the same purpose as quarantine, it is
                only for those who are infected or are confirmed cases of
                COVID-19. Quarantines last for the duration of the upper limit
                of the incubation period of the virus, which is 14 days in this
                case. However, isolation lasts until the individual is free of
                symptoms and tests negative for the virus.
              </p>
            </div>
            <div className="guidelines-item">
              <h3>What should you do in quarantine or isolation?</h3>
              <ul>
                <li>
                  If you are within the limits of your home, do not leave unless
                  it is necessary. Do not attend functions, school, churches or
                  temples.
                </li>
                <li>
                  Pets can stay: There is no evidence that Coronavirus can
                  spread to your pets. However, it is advised to avoid petting,
                  snuggling or cuddling with your pet if you have been exposed
                  to COVID-19.
                </li>
                <li>
                  Do not share: Keep your plates, glasses, cups, spoons, towels,
                  and bedding separate. Do not swap any of these items unwashed.
                </li>
                <li>
                  Frequent hand washing is a must: Hygiene is a very integral
                  part of a quarantine. Wash your hands for twenty seconds with
                  soap and water frequently. Use your elbow to cough or sneeze
                  into or use a tissue and immediately throw it in a covered
                  dustbin.
                </li>
                <li>
                  Stay calm: While it is natural to feel anxious and scared,
                  being educated about your situation is a great way to combat
                  anxiety.
                </li>
                <li>
                  Follow instructions and co-operate with the authorities:
                  Following the quarantine process and other public health
                  mandates play a big role in preventing and slowing the spread
                  of contagious diseases.
                </li>
              </ul>
            </div>
            <div className="guidelines-item">
              <h3>Social distancing</h3>
              <p>
                Social distancing means any measures taken to increase physical
                space between people to slow or prevent the spread of the virus.
                This involves avoiding public gatherings, limiting the number of
                visitors to your home, staying at home more often, keeping a
                safe distance from other people and catching up with friends and
                family virtually instead of in person. If you have to be around
                people, maintain a distance of 2 meters or 6 feet from others
                around you as much as possible. Not just mass gatherings, but
                even shopping malls, stadiums, and movie theatres can make you a
                target. In general, any gathering of over ten people should be
                avoided or conducted virtually.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Guidelines;
