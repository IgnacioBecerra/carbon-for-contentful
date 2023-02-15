/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import DDSTagLink from "@carbon/ibmdotcom-web-components/es/components-react/tag-link/tag-link";

export default function TagLink(content) {
  const { href, copy } = content?.fields || {};

  return (
		<DDSTagLink href={href}>
			{copy}
		</DDSTagLink>
  );
}
