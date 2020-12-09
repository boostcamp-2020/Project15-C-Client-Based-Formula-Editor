import React from 'react';
import QRcode from 'qrcode.react';
import { Dimmer, Loader } from 'semantic-ui-react';

interface QrCodeProps {
  imageUrl: string;
}

function QrCode({ imageUrl }: QrCodeProps) {
  return (
    <>
      <QRcode value={imageUrl} />
      {!imageUrl && (
        <Dimmer active inverted>
          <Loader size="large">Loading</Loader>
        </Dimmer>
      )}
    </>
  );
}

export default QrCode;
