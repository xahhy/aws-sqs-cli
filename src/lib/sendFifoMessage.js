const sendFifoMessage = (sqs, QueueUrl) => async (message, MessageGroupId) => {
  if (!MessageGroupId) {
    // eslint-disable-next-line
    MessageGroupId = new Date().toISOString();
  }
  const params = {
    MessageBody: typeof message === 'string' ? message : JSON.stringify(message),
    QueueUrl,
    MessageGroupId,
  };
  return sqs.sendMessage(params).promise();
};

export default sendFifoMessage;
