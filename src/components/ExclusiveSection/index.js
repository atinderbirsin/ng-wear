import React from "react";
import {
  ExclusiveContainer,
  ExclusiveTextContainer,
  ExclusiveTextDiv,
  ExclusiveHeading,
  ExclusiveSpan,
  ExclusiveText,
  ExclusiveTopCrossRibbon,
} from "./ExclusiveElements";

function ExclusiveSection() {
  return (
    <>
      <ExclusiveContainer>
        <ExclusiveTextContainer>
          <ExclusiveTextDiv>
            <ExclusiveHeading>
              TRY NGwear SWEAT PROOF <br /> UNDERSHIRTS
              <br />
              <ExclusiveSpan>RISK FREE FOR 30 DAYS</ExclusiveSpan>
            </ExclusiveHeading>
            <ExclusiveText className="first-para">
              We gladly accept returns or exchanges on all opened or used NGwear
              undershirts up to 30 days from purchase date.
            </ExclusiveText>
            <ExclusiveText>
              So feel free to wear it, wash it and try it.
            </ExclusiveText>
          </ExclusiveTextDiv>
        </ExclusiveTextContainer>
        <ExclusiveTopCrossRibbon>Exclusive</ExclusiveTopCrossRibbon>
      </ExclusiveContainer>
    </>
  );
}

export default ExclusiveSection;
