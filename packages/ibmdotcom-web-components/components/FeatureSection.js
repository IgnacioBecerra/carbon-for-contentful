/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import dynamic from "next/dynamic";
import DDSCardEyebrow from "@carbon/ibmdotcom-web-components/es/components-react/card/card-eyebrow";
import DDSContentBlockHeading from "@carbon/ibmdotcom-web-components/es/components-react/content-block/content-block-heading";
import DDSContentItemParagraph from "@carbon/ibmdotcom-web-components/es/components-react/content-item/content-item-paragraph";
import DDSFeatureSection from "@carbon/ibmdotcom-web-components/es/components-react/feature-section/feature-section"
import DDSFeatureSectionCardLink from "@carbon/ibmdotcom-web-components/es/components-react/feature-section/feature-section-card-link"

import DDSCardLinkHeading from "@carbon/ibmdotcom-web-components/es/components-react/card-link/card-link-heading";
import DDSCardCTAFooter from "@carbon/ibmdotcom-web-components/es/components-react/cta/card-cta-footer";

const Image = dynamic(import("./Image"), { ssr: false });

export default function FeatureCard(content) {
  const { eyebrow, heading, copy, mediaAlignment, image, href, cta} = content?.fields || {};

	const cardHeading = cta?.fields.heading || {};
	const cardType = cta?.fields.ctaType || {};
  const imageFields = {
    fields: { ...image?.fields },
  };

  return (
		<DDSFeatureSection mediaAlignment={mediaAlignment}>
      {image && <Image slot='image' {...imageFields} />}
			{eyebrow && <DDSCardEyebrow slot='eyebrow'>{eyebrow}</DDSCardEyebrow>}
			<DDSContentBlockHeading slot='heading'>{heading}</DDSContentBlockHeading>
			{copy && <DDSContentItemParagraph slot="copy">{copy}</DDSContentItemParagraph>}

			<DDSFeatureSectionCardLink slot="footer" color-scheme="inverse" href={href} ctaType={cardType}>
				<DDSCardLinkHeading>{cardHeading}</DDSCardLinkHeading>
				<DDSCardCTAFooter color-scheme="inverse"></DDSCardCTAFooter>
			</DDSFeatureSectionCardLink>
		</DDSFeatureSection>
  );
}
