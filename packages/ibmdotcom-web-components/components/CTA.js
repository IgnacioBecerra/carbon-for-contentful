/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import DDSCTAHead from "@carbon/ibmdotcom-web-components/es/components-react/cta/cta";
import DDSCardHeading from "@carbon/ibmdotcom-web-components/es/components-react/card/card-heading";

/* eslint-disable no-unused-vars */
import DDSCTAButton from "@carbon/ibmdotcom-web-components/es/components-react/cta/button-cta";
import DDSCTACardLink from "@carbon/ibmdotcom-web-components/es/components-react/cta/card-link-cta";
import DDSCTAFeature from "@carbon/ibmdotcom-web-components/es/components-react/cta/feature-cta";
/* eslint-enable no-unused-vars */

import DDSCardLinkHeading from "@carbon/ibmdotcom-web-components/es/components-react/card-link/card-link-heading";
import DDSCardCTAFooter from "@carbon/ibmdotcom-web-components/es/components-react/cta/card-cta-footer";
import DDSFeatureCTAFooter from "@carbon/ibmdotcom-web-components/es/components-react/cta/feature-cta-footer";

export default function CTA(content) {
  const { ctaStyle, heading, copy, href, ctaType, iconPlacement } = content?.fields || {};
  return (
			<DDSCTAHead ctaStyle={ctaStyle} href={href} ctaType={ctaType} iconPlacement={iconPlacement}>
				{ctaStyle === 'feature' && heading && <DDSCardHeading>{heading}</DDSCardHeading>}
				{ctaStyle === 'card-link' && heading && <DDSCardLinkHeading>{heading}</DDSCardLinkHeading>}
				{copy}
				{ctaStyle === 'feature' && <DDSFeatureCTAFooter></DDSFeatureCTAFooter>}
				{(ctaStyle === 'card' || ctaStyle === 'card-link') && <DDSCardCTAFooter></DDSCardCTAFooter>}
			</DDSCTAHead>
  );
}
