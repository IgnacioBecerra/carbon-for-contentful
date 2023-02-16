/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import dynamic from "next/dynamic";
import DDSFeatureCard from "@carbon/ibmdotcom-web-components/es/components-react/feature-card/feature-card";
import DDSCardHeading from "@carbon/ibmdotcom-web-components/es/components-react/card/card-heading";
import DDSFeatureCardFooter from "@carbon/ibmdotcom-web-components/es/components-react/feature-card/feature-card-footer";
import DDSCardEyebrow from "@carbon/ibmdotcom-web-components/es/components-react/card/card-eyebrow";

const Image = dynamic(import("./Image"), { ssr: false });

export default function FeatureCard(content) {
  const { eyebrow, heading, copy, href, image, size } = content?.fields || {};
	let properSize = size !== 'large' ? null : size;

  const imageFields = {
    fields: { ...image?.fields },
  };

  return (
		<DDSFeatureCard size={properSize} href={href}>
      {image && <Image slot='image' {...imageFields} />}
			{eyebrow && size === 'large' && <DDSCardEyebrow slot='eyebrow'>{eyebrow}</DDSCardEyebrow>}
			<DDSCardHeading slot='heading'>{heading}</DDSCardHeading>
			{copy && size === 'large' && <p>{copy}</p>}
			<DDSFeatureCardFooter>
				<svg
					slot="icon"
					focusable="false"
					preserveAspectRatio="xMidYMid meet"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					aria-hidden="true"
					width="20"
					height="20"
					viewBox="0 0 20 20"
				>
					<path d="M11.8 2.8L10.8 3.8 16.2 9.3 1 9.3 1 10.7 16.2 10.7 10.8 16.2 11.8 17.2 19 10z"></path>
				</svg>
			</DDSFeatureCardFooter>
		</DDSFeatureCard>
  );
}
