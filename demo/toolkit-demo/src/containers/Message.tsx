import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MessageWrapper } from '../css/components/message';
import { dismissMessage } from '../reducers/message';
import { RootState } from '../store';

const Message = () => {
  const { message, type } = useSelector<RootState, RootState['message']>((state) => state.message);
  const dispatch = useDispatch();
  const dispatchDismissMessage = () => dispatch(dismissMessage());

  return (
    <MessageWrapper
      role="presentation"
      show={message ? message.length > 0 : false}
      success={type === 'SUCCESS'}
      onClick={dispatchDismissMessage}>
      {message}
    </MessageWrapper>
  );
};

export default Message;
