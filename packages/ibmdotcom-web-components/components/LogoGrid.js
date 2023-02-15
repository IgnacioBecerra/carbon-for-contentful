/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import DDSCardLinkHeading from "@carbon/ibmdotcom-web-components/es/components-react/card-link/card-link-heading";
import DDSContentBlockHeading from "@carbon/ibmdotcom-web-components/es/components-react/content-block/content-block-heading";
import DDSLogoGrid from "@carbon/ibmdotcom-web-components/es/components-react/logo-grid/logo-grid";
import DDSLogoGridItem from "@carbon/ibmdotcom-web-components/es/components-react/logo-grid/logo-grid-item";
import DDSLogoGridLink from "@carbon/ibmdotcom-web-components/es/components-react/logo-grid/logo-grid-link";

export default function LogoGrid(content) {
  const { heading, logoImages, columnCount, logoAspectRatio, cta, hideBorder } = content?.fields || {};

	console.log(cta)
	const { href } = cta?.fields || {};

  return (
		<DDSLogoGrid logoCount={columnCount} logoRatio={logoAspectRatio} hideBorder={hideBorder}>
			<DDSContentBlockHeading>{heading}</DDSContentBlockHeading>
      {logoImages.map((card) => {
        const { image, alt } = card?.fields;
				const { url } = image?.fields?.file || {};
        return (
					<DDSLogoGridItem defaultSrc={"https://" + url} alt={alt}></DDSLogoGridItem>
        );
      })}
			{cta && 
				<DDSLogoGridLink href={href}>
					<DDSCardLinkHeading>{cta?.fields.heading}</DDSCardLinkHeading>
					<svg
						slot="footer"
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
				</DDSLogoGridLink>}
		</DDSLogoGrid>
  );
}
