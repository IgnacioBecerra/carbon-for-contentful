/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import dynamic from "next/dynamic";
import DDSUniversalBanner from "@carbon/ibmdotcom-web-components/es/components-react/universal-banner/universal-banner";
import DDSUniversalBannerHeading from "@carbon/ibmdotcom-web-components/es/components-react/universal-banner/universal-banner-heading";
import DDSUniversalBannerCopy from "@carbon/ibmdotcom-web-components/es/components-react/universal-banner/universal-banner-copy";
import DDSUniversalBannerImage from "@carbon/ibmdotcom-web-components/es/components-react/universal-banner/universal-banner-image";
import DDSImageItem from "@carbon/ibmdotcom-web-components/es/components-react/image/image-item";

const CTA = dynamic(import("./CTA"), {
  ssr: false,
});

export default function UniversalBanner(content) {
  const {
    heading,
    copy,
		ctaButton,
    image,
  } = content?.fields || {};

  const buttonFields = {
    fields: { ...ctaButton?.fields, slot: "cta" },
  };

  const { defaultSrc, imageItems } = image.fields;
  const { url } = defaultSrc?.fields?.file || {};


  return (
		<DDSUniversalBanner>
			<DDSUniversalBannerHeading slot='heading'>{heading}</DDSUniversalBannerHeading>
			<DDSUniversalBannerCopy slot='copy'>{copy}</DDSUniversalBannerCopy>
			{ctaButton && <CTA {...buttonFields }/>}
			{image &&
				<DDSUniversalBannerImage
          slot="image"
          default-src={"https://" + url}
        >
          {imageItems &&
            imageItems.map((image, index) => {
              const { minWidth } = image.fields;
              const { url } = image.fields.image.fields.file;

              return (
                <DDSImageItem
                  media={`(min-width: ${minWidth})`}
                  srcset={"https:" + url}
                  key={index}
                ></DDSImageItem>
              );
            })}
				</DDSUniversalBannerImage>
			}
		</DDSUniversalBanner>
  );
}
