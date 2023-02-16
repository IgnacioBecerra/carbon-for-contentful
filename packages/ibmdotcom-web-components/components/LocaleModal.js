/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import DDSLocaleModalContainer from "@carbon/ibmdotcom-web-components/es/components-react/locale-modal/locale-modal-container";

export default function LeavingIBM(content) {

	const { openOnLoad, localeList, langDisplay } = content?.fields || {};

	const open = !openOnLoad ? undefined : openOnLoad;

  return (
		<DDSLocaleModalContainer open={open} localeList={localeList} langDisplay={langDisplay}></DDSLocaleModalContainer>
  );
}
