import React from 'react';
import QRcode from 'qrcode.react';
import { Dimmer, Loader } from 'semantic-ui-react';
import * as S from './style';

interface QrCodeProps {
  imageUrl: string;
}

function QrCode({ imageUrl }: QrCodeProps) {
  return (
    <S.QrCodeContainer>
      <QRcode value={imageUrl} />
      {!imageUrl && (
        <Dimmer active inverted>
          <Loader size="large">Loading</Loader>
        </Dimmer>
      )}
    </S.QrCodeContainer>
  );
}

export default QrCode;
