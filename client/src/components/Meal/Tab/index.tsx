import React from 'react';
import { Menu } from 'semantic-ui-react';
import { TabContainer } from './style';
import Button from '../../Ingredients/ButtonItem';
import { useDispatch, useSelector } from 'react-redux';
import { addTab } from '../../../contexts/latex';
import { RootState } from '../../../contexts';
import MenuItem from './MenuItem';
import { TAB_LIMIT } from '@constants/constants';
// interface TabType {
//   id: number;
//   name: string;
// }

function Tab() {
  const dispatch = useDispatch();
  const { currentTab, totalLatex } = useSelector((state: RootState) => state.latex);

  const addTabHandler = () => {
    dispatch(addTab());
  };

  return (
    <TabContainer>
      <Menu pointing vertical>
        {totalLatex.map((item, index) => {
          if (item) {
            return <MenuItem key={item.id} item={item} index={index} currentTab={currentTab} />;
          }
        })}
      </Menu>
      {totalLatex.length < TAB_LIMIT && (
        <Button icon={'plus'} size={'mini'} handler={addTabHandler}></Button>
      )}
    </TabContainer>
  );
}

export default Tab;
