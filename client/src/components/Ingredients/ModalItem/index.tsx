import useToggle from '@hooks/useToggle';
import React from 'react';
import { Button, Image, Modal } from 'semantic-ui-react';

interface ModelType {
  modalState: boolean;
  handler: () => void;
}

function ModalItem({ modalState, handler }: ModelType) {
  const a: any = document.querySelector('#iframe');
  console.log(a);
  return (
    <Modal
      size={'mini'}
      onClose={() => handler()}
      onOpen={() => handler()}
      open={modalState}
      mountNode={a.contentDocument.body}
    >
      <Modal.Header>Upload image</Modal.Header>
      <Modal.Content image>
        <Image
          size="mini"
          src="https://react.semantic-ui.com/images/wireframe/image-square.png"
          wrapped
        />
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => handler()}>Cancel</Button>
        <Button onClick={() => handler()} positive>
          Save
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default ModalItem;
