import React from "react";

type Tier = {
  id: string;
  name: string;
  amount: string;
  color: string; // rail color
  blurb?: string;
  perks?: string[];
};

const TIERS: Tier[] = [
  {
    id: "microburst",
    name: "Microburst",
    amount: "up to $499",
    color: "var(--tier-microburst)",
    perks: [
      "Name listed on the website supporter page",
      "Social media thank-you and shoutout",
    ],
  },
  {
    id: "dust-devil",
    name: "Dust Devil",
    amount: "$500–$999",
    color: "var(--tier-dustdevil)",
    perks: [
      "Name or logo on website and social media thank-you posts",
      "Recognition in newsletters",
      "Desert Storm photo",
    ],
  },
  {
    id: "standstorm",
    name: "Standstorm",
    amount: "$1000–$2,499",
    color: "var(--tier-standstorm)",
    perks: [
      "Small logo on team uniforms, pit banners, and website",
      "Social media thank-you mention",
      "Recognition in newsletters",
      "Desert Storm Team photo or t-shirt",
    ],
  },
  {
    id: "tempest",
    name: "Tempest",
    amount: "$2,500–$4,999",
    color: "var(--tier-tempest)",
    perks: [
      "Medium logo on team robot, uniforms, pit banners, and website ",
      "Social media shout-out and thank-you post ",
      "Invitations to select team competitions ",
      "Recognition in newsletters and press materials ",
      "Signed Desert Storm Team photo and t-shirt ",
    ],
  },
  {
    id: "monsoon",
    name: "Monsoon Elite",
    amount: "$5,000+",
    color: "var(--tier-monsoon)",
    perks: [
      "Premier large logo placement on robot, uniforms, pit banners, and website",
      "Sponsor name announced during alliance selections at official competitions",
      "Featured sponsor spotlight on social media with tagging",
      "VIP invitations to team events and demos",
      "Regular recognition in press releases, newsletters, and team videos",
      "Signed Desert Storm Team photo plaque and t-shirt",
      "Team appearance with robot demonstration at a company or community local event",
    ],
  },
];

export default function SponsorshipTiers() {
  return (
    <section aria-labelledby="tiers-heading" className="tiers">
      <h2 id="tiers-heading" className="tiers__title">
        Sponsorship Levels
      </h2>
      <ol className="tiers__list">
        {[...TIERS].reverse().map((t) => (
          <li
            key={t.id}
            className="tier"
            style={{ ["--tier"]: t.color } as React.CSSProperties}
          >
            <div className="tier__rail" aria-hidden="true" />
            <div className="tier__content">
              <div className="tier__header">
                <h3 className="tier__name">{t.name}</h3>
                <p className="tier__amount">{t.amount}</p>
              </div>
              {t.perks?.length ? (
                <ul className="tier__perks">
                  {t.perks.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              ) : null}
              " ",
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
