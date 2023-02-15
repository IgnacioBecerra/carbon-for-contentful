/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import DDSTagGroup from "@carbon/ibmdotcom-web-components/es/components-react/tag-group/tag-group";
import DDSTagLink from "@carbon/ibmdotcom-web-components/es/components-react/tag-link/tag-link";

export default function TagGroup(content) {
  const { tags } = content?.fields || {};

  return (
		<DDSTagGroup>
      {tags.map((card) => {
        const { href, copy } = card?.fields;
        return (
					<DDSTagLink href={href}>{copy}</DDSTagLink>
        );
      })}
		</DDSTagGroup>
  );
}
